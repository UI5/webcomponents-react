import { readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import type { Alias } from 'vite';

/**
 * Reads the `exports` field from each internal package's `package.json` and
 * generates Vite `resolve.alias` entries that map subpath imports to source
 * files (`src/`) during dev, so `dist/` doesn't need to exist.
 *
 * Uses Vite's built-in alias resolution which calls `this.resolve()` internally,
 * so `.ts`/`.tsx` extension resolution is handled automatically — no filesystem
 * probing at runtime.
 *
 * Ordering: wildcard (regex) entries come first, then exact (string) entries
 * sorted by descending subpath length. This prevents string prefix-matching
 * from intercepting imports meant for wildcards.
 */
export function generateMonorepoAliases(packagesDir: string): Alias[] {
  const wildcardAliases: Alias[] = [];
  const exactAliases: Alias[] = [];
  const absPackagesDir = resolve(packagesDir);

  const packageDirs = readdirSync(absPackagesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => join(absPackagesDir, d.name));

  for (const pkgDir of packageDirs) {
    let pkgJson: Record<string, unknown>;
    try {
      pkgJson = JSON.parse(readFileSync(join(pkgDir, 'package.json'), 'utf-8'));
    } catch {
      continue;
    }

    const name = pkgJson.name as string | undefined;
    const exports = pkgJson.exports as Record<string, unknown> | undefined;
    if (!name || !exports) {
      continue;
    }

    const exactEntries: Array<{ subpath: string; srcRelative: string }> = [];
    const wildcardEntries: Array<{ subpath: string; srcRelative: string }> = [];

    for (const [subpath, target] of Object.entries(exports)) {
      const targetPath = typeof target === 'string' ? target : (target as Record<string, string>)?.default;
      if (!targetPath || typeof targetPath !== 'string') continue;
      if (!targetPath.startsWith('./dist/')) continue;

      const srcRelative = targetPath.slice('./dist/'.length).replace(/\.js$/, '');

      if (subpath.includes('*')) {
        wildcardEntries.push({ subpath, srcRelative });
      } else {
        exactEntries.push({ subpath, srcRelative });
      }
    }

    // Sort exact entries by subpath length descending so more-specific aliases come first.
    exactEntries.sort((a, b) => b.subpath.length - a.subpath.length);

    const srcDir = join(pkgDir, 'src');
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Wildcards first — they must be checked before string entries because
    // @rollup/plugin-alias uses prefix matching for strings, which would
    // incorrectly intercept imports like `pkg/dist/foo` via the `pkg` root alias.
    for (const { subpath, srcRelative } of wildcardEntries) {
      const subpathPattern = subpath
        .slice(2)
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        .replace(/\\\*/, '(.+)');
      const find = new RegExp(`^${escapedName}/${subpathPattern}$`);
      const replacement = join(srcDir, srcRelative).replace(/\*/g, '$1');
      wildcardAliases.push({ find, replacement });
    }

    for (const { subpath, srcRelative } of exactEntries) {
      const find = subpath === '.' ? name : name + '/' + subpath.slice(2);
      exactAliases.push({ find, replacement: join(srcDir, srcRelative) });
    }
  }

  return [...wildcardAliases, ...exactAliases];
}
