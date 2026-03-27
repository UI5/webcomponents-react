/**
 * Post-build step: copy JSON data files into dist/ and make the CLI entry executable.
 *
 * Replaces `rsync` + `chmod` with a cross-platform Node.js solution.
 *
 * Usage:
 *   npm run build:post
 */

import { cpSync, chmodSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PKG_ROOT = join(__dirname, '..');
const SRC_DIR = join(PKG_ROOT, 'src');
const DIST_DIR = join(PKG_ROOT, 'dist');

// Copy all JSON data files from src/ to dist/, preserving directory structure
const jsonFiles = await glob('**/*.json', { cwd: SRC_DIR });

for (const file of jsonFiles) {
  const src = join(SRC_DIR, file);
  const dest = join(DIST_DIR, file);
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(src, dest);
}

console.log(`Copied ${jsonFiles.length} JSON files to dist/`);

// Make CLI entry point executable (no-op on Windows)
try {
  chmodSync(join(DIST_DIR, 'index.js'), 0o755);
} catch {
  // chmodSync may fail on Windows — not needed there anyway
}
