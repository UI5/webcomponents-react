---
name: cypress-to-playwright-migration
description: Playbook for migrating Cypress component tests to Playwright Component Tests in the ui5wcr-2 repo. Use when porting a `<Component>.cy.tsx` file to one or more `<Component>/test/<Feature>.spec.tsx` Playwright specs. Covers test file layout, the complex-JSX-in-TestComponents rule, helper extraction policy, fixtures vs test-factories, three-browser gating with `test.fixme` for browser-specific failures, and the hand-off report format. Triggers: "migrate cypress test", "port cypress to playwright", "convert .cy.tsx to .spec.tsx" for any component in `packages/main/src/components/` or `packages/charts/src/`.
---

# Cypress to Playwright Migration

## Scope

This skill applies when porting a Cypress component test file to Playwright Component Tests in this repo. The skill is component-agnostic — it covers AnalyticalTable, SelectDialog, FilterBar, ObjectPage, charts, etc. with the same playbook.

**Do not use** for end-to-end browser tests (no equivalent in this repo) or for `.test.ts` unit tests.

## Prerequisites — read before writing any test

Before producing a single line of spec code, read these files. They are the canonical reference:

- `playwright-ct.config.ts` — test discovery globs, coverage `sourceFilter`, browser projects.
- `playwright/index.tsx` + `playwright/index.html` — mount wrapper (`ThemeProvider`) and `sap_horizon` theme config.
- `playwright/fixtures/main-fixtures.ts` — the `test` export used by every spec; `autoTestFixture` (auto-coverage) + `ui5wc` fixture.
- `playwright/fixtures/ui5-fixtures.ts` + `ui5-fixtures-internal.ts` — `UI5WCHelpers` and internal helpers. Inventory of what's already available before considering adding more.
- `playwright/test-factories/sharedComponentTests.tsx` — `testPassThroughProps`, `passThroughProps`, `assertPassThroughProps`. Used to register the standard pass-through test in one line.
- `packages/main/src/components/SelectDialog/test/SelectDialog.spec.tsx` and `SelectDialogTestComponents.tsx` — canonical spec + test components shape.
- `packages/main/src/components/SplitterLayout/test/SplitterLayout.spec.tsx` and `SplitterLayoutTestComponents.tsx` — second canonical example.

For component internals (when migrating a complex component), invoke the relevant component skill (e.g. `analytical-table`).

Also read the existing `<Component>/test/test-utils/` directory (if it exists) — reuse before reinventing.

## Layout to produce

```
packages/<package>/src/components/<Component>/
  <Component>.cy.tsx                              # leave untouched
  test/
    test-utils/                                   # optional — only when ≥2 specs reuse content
      data.tsx                                    # data generators, default columns, reusable data
      helpers.ts                                  # component-specific assertion helpers
      wrappers.tsx                                # optional — reusable JSX wrappers
    <Feature>.spec.tsx                            # one per logical feature area
    <Feature>TestComponents.tsx                   # all non-trivial JSX referenced by <Feature>.spec.tsx
```

Rules:

- Spec files reference test components by name only. **No complex JSX in `.spec.tsx`** — multi-column setups, controlled wrappers, custom render props all live in `<Feature>TestComponents.tsx`.
- The `test/test-utils/` folder is created only when shared content actually exists. Don't pre-create empty files.

## Rules

1. **1:1 behavioral parity.** Do not drop tests. Every cypress `it()` in scope maps to exactly one PW `test()` with the same assertions. May consolidate adjacent cypress `it`s that share setup into one larger PW `test`; only split when cypress combined unrelated concerns. Prefer fewer, larger tests — fewer TestComponents, less duplication.
2. **Complex JSX in `<Feature>TestComponents.tsx` only.** A spec file should look like SelectDialog.spec.tsx: imports + `test.describe(...)` with calls to `<XxxTestComp />`.
3. **Helpers: inline first, extract only when reused.**
   - Default: write native Playwright inline (`page.getByRole(...)`, `await locator.click()`).
   - Add to `ui5wc` (in `playwright/fixtures/ui5-fixtures.ts`) **only** when a helper is generic across components **and** adds real value over inline code (i.e. encapsulates non-trivial multi-step behavior). Don't pad the fixture with thin wrappers.
   - Component-specific helpers go in `test/test-utils/helpers.ts`, **only** after the second test would reuse them.
4. **Shared first.** Read `test/test-utils/` before writing. Reuse before reinventing. If you write something that turns out to be a duplicate, refactor immediately.
5. **Pass-through test.** Use `testPassThroughProps(Component, baseProps)` from `playwright/test-factories/sharedComponentTests.tsx`. One line registers the standard HTML-prop-forwarding test.
6. **Coverage.** Verify the spec hits component source files. After running with coverage on chromium, `temp/playwright-coverage/lcov.info` must show the component's source files with > 0 line hits. If a file looks unreached, that's a signal of weak assertion coverage, not a config bug — strengthen the spec.
7. **Browsers — chromium mandatory; firefox/webkit triaged.**
   - Run all three projects locally before declaring done.
   - chromium failures **must be fixed**.
   - firefox/webkit failures: investigate briefly. Trivial fix (timing, selector) → apply. Non-trivial / browser-specific quirk → add `browserName` to the destructured test args and wrap with `test.fixme(browserName === 'firefox', 'short reason')` (or `'webkit'`) as the first line of the test body. Document the fixme in the hand-off.
   - Suite must be green (with documented fixmes) before declaring done.
8. **Prettier-format every edited file.** Use the local binary directly: `./node_modules/.bin/prettier --write <paths>`. Never `npx`, and not `yarn prettier` (which is yarn-4's equivalent of `yarn exec`).
9. **Never edit the cypress file** except for the one-line annotation at the top added during infrastructure phase. The cypress file is removed manually by the user after parity is reached.
10. **No git operations.** Never run `git add` or `git commit`. The user commits manually.
11. **Hand-off report required.** End every migration with a written report (see "Hand-off report" below).
12. **No backwards-compatibility shims.** When moving code, update all call sites in the same change. Don't add a re-export from the old location to "keep imports working" — change the imports instead. BC shims hide where code actually lives and accumulate as cruft.

## Cypress → Playwright translation cheat sheet

This repo's Cypress configuration pierces shadow DOM by default; Playwright locators pierce shadow DOM automatically when targeting `[ui5-*]` selectors. Most migrations are mechanical.

| Cypress                                                                     | Playwright                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cy.mount(<X />)`                                                           | `await mount(<X />)`                                                                                                                                                                                                                                                                     |
| `cy.get('[ui5-button]')`                                                    | `page.locator('[ui5-button]')`                                                                                                                                                                                                                                                           |
| `cy.findByText('Cancel')`                                                   | `page.getByText('Cancel')`                                                                                                                                                                                                                                                               |
| `cy.findByTestId('id')`                                                     | `page.getByTestId('id')`                                                                                                                                                                                                                                                                 |
| `cy.findByTitle('Tip')`                                                     | `page.locator('[title="Tip"]')`                                                                                                                                                                                                                                                          |
| `.should('be.visible')`                                                     | `await expect(loc).toBeVisible()`                                                                                                                                                                                                                                                        |
| `.should('not.exist')`                                                      | `await expect(loc).not.toBeAttached()`                                                                                                                                                                                                                                                   |
| `.should('have.text', 'x')`                                                 | `await expect(loc).toHaveText('x')`                                                                                                                                                                                                                                                      |
| `.should('have.attr', 'a', 'b')`                                            | `await expect(loc).toHaveAttribute('a', 'b')`                                                                                                                                                                                                                                            |
| `.should('have.css', 'a', 'b')`                                             | `await expect(loc).toHaveCSS('a', 'b')`                                                                                                                                                                                                                                                  |
| `.click()`                                                                  | `await loc.click()`                                                                                                                                                                                                                                                                      |
| `cy.realPress('Enter')`                                                     | `await page.keyboard.press('Enter')`                                                                                                                                                                                                                                                     |
| `cy.realPress(['Shift','Tab'])`                                             | `await page.keyboard.press('Shift+Tab')`                                                                                                                                                                                                                                                 |
| `cy.spy().as('onX')` + `cy.get('@onX').should('have.been.calledWith', ...)` | function spy: `const onX = vi.fn()` won't work — use `let calls: any[] = []; const onX = (e) => calls.push(e);` then `expect(calls).toHaveLength(1)` / `expect(calls[0].detail).toMatchObject({...})`. Or use the chart pattern: pass a callback that records and assert on the records. |
| `cy.get('[ui5-input]').typeIntoUi5Input('x')`                               | `await ui5wc.typeIntoInput(loc, 'x')`                                                                                                                                                                                                                                                    |
| `cy.get('[ui5-list]').clickUi5ListItemByText('x')`                          | inline: `await page.locator('[ui5-list]').locator('[ui5-li]', { hasText: 'x' }).click()` — check ui5wc first; if reused ≥2× add a method.                                                                                                                                                |
| `cypressPassThroughTestsFactory(C, props)`                                  | `testPassThroughProps(C, props)` from `playwright/test-factories/sharedComponentTests.tsx`                                                                                                                                                                                               |
| `cssVarToRgb('--sapPositiveColor')`                                         | check `playwright/fixtures/ui5-fixtures.ts` for a method; if missing and reused ≥2×, add it                                                                                                                                                                                              |

## Workflow per migration unit (one feature spec)

1. **Read scope.** Identify the cypress `it()` blocks for this feature (line range in `<Component>.cy.tsx`).
2. **Read prerequisites.** All files listed under "Prerequisites" + `test/test-utils/` if it exists.
3. **Plan consolidation.** Group cypress tests with shared setup. Decide whether each cypress `it` ports 1:1 or merges into a larger PW `test`. Default: merge when setup is shared.
4. **Write test components.** Create `<Feature>TestComponents.tsx` with everything non-trivial. Export named test components used by the spec.
5. **Write the spec.** `<Feature>.spec.tsx`. Import `test` from `playwright/fixtures/main-fixtures.ts`. Import test components from `./XxxTestComponents.js`. Use `test.describe(...)` matching the cypress structure.
6. **Run on chromium.** `./node_modules/.bin/playwright test -c playwright-ct.config.ts --project chromium <spec-path>`. Fix until green.
7. **Run on firefox + webkit.** `./node_modules/.bin/playwright test -c playwright-ct.config.ts --project firefox <spec-path>` and `--project webkit`. Apply `test.fixme(...)` for browser-specific failures; fix trivial ones inline.
8. **Verify coverage.** Run with coverage on chromium (the existing config wires this automatically). Inspect `temp/playwright-coverage/lcov.info` — component source files should have > 0 line hits.
9. **Prettier.** `./node_modules/.bin/prettier --write <paths>`.
10. **Write hand-off report.**

## Hand-off report

Every migration unit ends with a written report at `.claudeRessources/<topic>/<phase-or-feature>-handoff.md` containing:

- **Scope** — cypress line range covered.
- **Tests ported** — list of new PW `test()` names. Note any consolidations (e.g. "merged cypress 'X' and 'Y' into one PW test because they shared the same controlled state").
- **Helpers added** — anything added to `test/test-utils/`, `ui5wc`, or `playwright/test-factories/`. For each: where it lives, why it earned its place (i.e. which ≥2 call sites use it).
- **Helpers considered but inlined** — patterns you might have extracted but kept inline because they were used once. Future migrations may revisit.
- **Browser fixmes** — every `test.fixme(...)` applied: test name, browser, suspected cause, suggested follow-up.
- **Deferred concerns** — any cypress test that _looked_ flaky/redundant/dead but was ported anyway per rule 1.
- **Coverage observations** — files that appear under-tested in `lcov.info`, even though the migration is parity-correct.

## Anti-patterns

- ❌ Adding a method to `UI5WCHelpers` for a one-off helper.
- ❌ Writing `cy.X` translations as if cypress idioms map perfectly — many do; check the cheat sheet, then write idiomatic PW.
- ❌ Copy-pasting test setup across two spec files instead of extracting to `test/test-utils/`.
- ❌ Skipping a cypress test because it "looks redundant" — port it, note the concern.
- ❌ Putting JSX larger than `<X prop="y" />` into a `.spec.tsx`. Move it to TestComponents.
- ❌ Running `git add` or `git commit`.
- ❌ Editing `<Component>.cy.tsx`.
