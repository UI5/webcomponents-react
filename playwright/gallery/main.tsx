/**
 * @fileoverview Playwright component-testing gallery entry.
 *
 * Serves the contract the built-in `mount` fixture (@playwright/test) expects:
 * the page exposes `window.mount({ story, props })` / `window.unmount()`, rendering
 * a story into `#root`. The mount fixture navigates here, calls `window.mount`, and
 * returns a locator for `#root`.
 *
 * Stories are the named exports of `*.gallery.tsx` files anywhere in the repo. A
 * story id is `<file path without the .gallery.tsx extension>/<ExportName>`, e.g.
 * `playwright/test/UI5Fixtures/InputTestComp`. Any unique trailing suffix of an id
 * also resolves.
 */

import '@ui5/webcomponents-react/dist/Assets.js';
import { createElement, StrictMode } from 'react';
import { flushSync } from 'react-dom';
import { createRoot, type Root } from 'react-dom/client';
import { StoryWrapper } from './story-wrapper.js';

type StoryComponent = (props?: Record<string, unknown>) => React.ReactNode;
type MountParams = { story: string; props?: Record<string, unknown> };

declare global {
  interface Window {
    mount: (params: MountParams) => Promise<void>;
    unmount: () => Promise<void>;
  }
}

// Eagerly glob all gallery files (relative to this file) so resolution is synchronous.
const modules = import.meta.glob(['../**/*.gallery.tsx', '../../packages/**/*.gallery.tsx'], {
  eager: true,
});

// Flatten to `<repo-relative path w/o .gallery.tsx>/<ExportName>` -> component.
const stories = new Map<string, StoryComponent>();
for (const [path, mod] of Object.entries(modules)) {
  const base = path.replace(/^(?:\.\.\/)+/, '').replace(/\.gallery\.tsx$/, '');
  for (const [exportName, value] of Object.entries(mod)) {
    if (typeof value === 'function') {
      stories.set(`${base}/${exportName}`, value as StoryComponent);
    }
  }
}

function resolveStory(story: string): StoryComponent {
  const exact = stories.get(story);
  if (exact) {
    return exact;
  }
  // Fall back to a shorthand suffix of the full id, as long as it's unique — e.g. a spec may mount `UI5Fixtures/InputTestComp` instead of the full `test/UI5Fixtures/InputTestComp`.
  const matches = [...stories.keys()].filter((id) => id === story || id.endsWith(`/${story}`));
  if (matches.length === 1) {
    return stories.get(matches[0])!;
  }
  if (matches.length > 1) {
    throw new Error(`Ambiguous story id "${story}" matches:\n${matches.join('\n')}`);
  }
  throw new Error(
    `Unknown story "${story}". Available stories:\n${[...stories.keys()].sort().join('\n') || '(none found)'}`,
  );
}

const container = document.getElementById('root')!;
// Reuse a single root across mounts so update() reconciles and state is preserved.
let root: Root | null = null;

// async to match the contract (the fixture awaits it); renders synchronously here.
// eslint-disable-next-line @typescript-eslint/require-await
window.mount = async ({ story, props }) => {
  const Component = resolveStory(story);
  root ??= createRoot(container);
  // flushSync so a render error rejects mount() instead of being swallowed & enable StrictMode
  flushSync(() => {
    root!.render(createElement(StrictMode, null, createElement(StoryWrapper, null, createElement(Component, props))));
  });
};

// eslint-disable-next-line @typescript-eslint/require-await
window.unmount = async () => {
  root?.unmount();
  root = null;
};
