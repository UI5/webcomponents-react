/**
 * Simple logger for debugging
 */

const DEBUG = process.env.DEBUG === 'true';

export const logger = {
  debug: (...args: unknown[]) => {
    if (DEBUG) {
      console.error('[DEBUG]', ...args);
    }
  },
  info: (...args: unknown[]) => {
    console.error('[INFO]', ...args);
  },
  warn: (...args: unknown[]) => {
    console.error('[WARN]', ...args);
  },
  error: (...args: unknown[]) => {
    console.error('[ERROR]', ...args);
  },
};
