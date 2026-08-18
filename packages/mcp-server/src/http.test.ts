import { request as httpRequest } from 'node:http';
import type { AddressInfo } from 'node:net';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import test from 'ava';
import { startHttpServer } from './http.js';

// Minimal server factory so the test exercises the HTTP transport, not the real tool set
// (importing ./index.js would self-start a stdio server on import).
function createTestServer(): McpServer {
  const server = new McpServer({ name: 'test-server', version: '0.0.0' });
  server.registerTool('ping', { description: 'Test tool' }, () => ({
    content: [{ type: 'text', text: 'pong' }],
  }));
  return server;
}

const JSON_RPC_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json, text/event-stream',
};

// Responses come back as SSE (`event: message\ndata: {...}`); extract and parse the data payload.
function parseSse<T>(body: string): T {
  const line = body.split('\n').find((l) => l.startsWith('data:'));
  if (!line) {
    throw new Error(`No SSE data line in response: ${body}`);
  }
  return JSON.parse(line.slice('data:'.length).trim()) as T;
}

async function withServer(run: (baseUrl: string) => Promise<void>): Promise<void> {
  const server = await startHttpServer(createTestServer, 0);
  const { port } = server.address() as AddressInfo;
  try {
    await run(`http://127.0.0.1:${port}`);
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
}

test('POST /mcp initialize returns server info', async (t) => {
  await withServer(async (baseUrl) => {
    const res = await fetch(`${baseUrl}/mcp`, {
      method: 'POST',
      headers: JSON_RPC_HEADERS,
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'initialize',
        params: { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'test', version: '0.0.0' } },
      }),
    });
    t.is(res.status, 200);
    const message = parseSse<{ result: { serverInfo: { name: string } } }>(await res.text());
    t.is(message.result.serverInfo.name, 'test-server');
  });
});

test('POST /mcp tools/list works statelessly (no session)', async (t) => {
  await withServer(async (baseUrl) => {
    const res = await fetch(`${baseUrl}/mcp`, {
      method: 'POST',
      headers: JSON_RPC_HEADERS,
      body: JSON.stringify({ jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} }),
    });
    t.is(res.status, 200);
    const message = parseSse<{ result: { tools: { name: string }[] } }>(await res.text());
    const toolNames = message.result.tools.map((tool) => tool.name);
    t.deepEqual(toolNames, ['ping']);
  });
});

test('GET /mcp is rejected with 405', async (t) => {
  await withServer(async (baseUrl) => {
    const res = await fetch(`${baseUrl}/mcp`, { method: 'GET', headers: JSON_RPC_HEADERS });
    t.is(res.status, 405);
    t.is(res.headers.get('allow'), 'POST');
  });
});

test('unknown path returns 404', async (t) => {
  await withServer(async (baseUrl) => {
    const res = await fetch(`${baseUrl}/nope`, { method: 'POST', headers: JSON_RPC_HEADERS });
    t.is(res.status, 404);
  });
});

// undici's fetch strips the forbidden `Host`/`Origin` headers, so use a raw http request to spoof them.
function rawPost(port: number, headers: Record<string, string>): Promise<number> {
  return new Promise((resolve, reject) => {
    const req = httpRequest(
      {
        host: '127.0.0.1',
        port,
        path: '/mcp',
        method: 'POST',
        headers: { ...JSON_RPC_HEADERS, ...headers },
      },
      (res) => {
        res.resume();
        resolve(res.statusCode ?? 0);
      },
    );
    req.on('error', reject);
    req.end(JSON.stringify({ jsonrpc: '2.0', id: 3, method: 'tools/list', params: {} }));
  });
}

test('DNS rebinding protection rejects a foreign Host header', async (t) => {
  await withServer(async (baseUrl) => {
    const { port } = new URL(baseUrl);
    const status = await rawPost(Number(port), { Host: 'evil.example.com' });
    t.not(status, 200);
  });
});

test('rejects a foreign Origin header', async (t) => {
  await withServer(async (baseUrl) => {
    const { port } = new URL(baseUrl);
    const status = await rawPost(Number(port), { Origin: 'https://evil.example.com' });
    t.is(status, 403);
  });
});
