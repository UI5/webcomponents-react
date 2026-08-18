/**
 * @fileoverview Streamable HTTP transport for the MCP server.
 * Runs in stateless mode: a fresh server + transport is created per request, so there is no
 * cross-request session state to manage. Bound to localhost for use as a local dev-time server.
 */

import { createServer as createHttpServer, type IncomingMessage, type Server, type ServerResponse } from 'node:http';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { logger } from './logger.js';

const HOST = '127.0.0.1';
const MCP_PATH = '/mcp';

function sendJsonRpcError(res: ServerResponse, status: number, message: string) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      jsonrpc: '2.0',
      error: { code: -32000, message },
      id: null,
    }),
  );
}

/**
 * Starts a stateless Streamable HTTP server that serves the MCP endpoint on `POST /mcp`.
 *
 * @param serverFactory - Builds a fresh {@link McpServer}; called once per request.
 * @param port - Port to listen on. Pass `0` to let the OS choose a free port.
 * @returns The listening {@link Server}.
 */
export async function startHttpServer(serverFactory: () => McpServer, port: number): Promise<Server> {
  const httpServer = createHttpServer((req: IncomingMessage, res: ServerResponse) => {
    void handleRequest(req, res);
  });

  await new Promise<void>((resolve) => {
    httpServer.listen(port, HOST, resolve);
  });

  // Resolve the actual bound port (differs from `port` when 0 was requested).
  const address = httpServer.address();
  const boundPort = typeof address === 'object' && address !== null ? address.port : port;

  // Host header is matched exactly, so allow both localhost aliases with the bound port.
  const allowedHosts = [`localhost:${boundPort}`, `${HOST}:${boundPort}`];
  // Origin is only validated when present (non-browser clients omit it); browsers from any other
  // origin are rejected. Spec-mandated hardening on top of the Host check.
  const allowedOrigins = [`http://${HOST}:${boundPort}`, `http://localhost:${boundPort}`];

  logger.info(`UI5 Web Components for React MCP Server running on http://${HOST}:${boundPort}${MCP_PATH}`);

  async function handleRequest(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const url = new URL(req.url ?? '/', `http://${req.headers.host ?? `${HOST}:${boundPort}`}`);

    if (url.pathname !== MCP_PATH) {
      sendJsonRpcError(res, 404, 'Not found');
      return;
    }

    // Stateless mode has no session to GET a stream from or DELETE.
    if (req.method !== 'POST') {
      res.writeHead(405, { 'Content-Type': 'application/json', Allow: 'POST' });
      res.end(
        JSON.stringify({
          jsonrpc: '2.0',
          error: { code: -32000, message: 'Method not allowed. Use POST for the stateless Streamable HTTP transport.' },
          id: null,
        }),
      );
      return;
    }

    const server = serverFactory();
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
      enableDnsRebindingProtection: true,
      allowedHosts,
      allowedOrigins,
    });

    res.on('close', () => {
      void transport.close();
      void server.close();
    });

    try {
      await server.connect(transport);
      await transport.handleRequest(req, res);
    } catch (error) {
      logger.error('Error handling MCP request:', error);
      if (!res.headersSent) {
        sendJsonRpcError(res, 500, 'Internal server error');
      }
    }
  }

  return httpServer;
}
