/**
 * Utility functions for the MCP server
 */

import { logger } from '../logger.js';

/**
 * Create a text response for MCP
 */
export function createTextResponse(text: string) {
  return {
    content: [
      {
        type: 'text' as const,
        text,
      },
    ],
  };
}

/**
 * Handle tool errors consistently
 */
export function handleToolError(error: unknown, context: string) {
  logger.error(context, error);
  const message = error instanceof Error ? error.message : 'An unknown error occurred';
  return createTextResponse(`Error: ${context}\n${message}`);
}
