import { readFileSync, writeFileSync } from 'node:fs';

/**
 * Syncs the version from package.json into server.json (both top-level and package entry).
 * Called by the "version" lifecycle script during `lerna version`.
 */
const serverJson = JSON.parse(readFileSync('./server.json', 'utf-8'));
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

serverJson.version = packageJson.version;
serverJson.packages[0].version = packageJson.version;

writeFileSync('./server.json', JSON.stringify(serverJson));

console.log(`Synced server.json version to ${packageJson.version}`);
