# Development Conventions and Guidelines

## TypeScript

All components must be written in TypeScript.

## Naming Convention for Props

- All Event handlers **must** start with `on`.<br />
  e.g. `onClick`, `onSelect`, `onSelectionChange`, .etc<br />
  All Events must pass an instance of the `Event`-Class as single parameter.
- When passing additional elements into a component, a slot should be used. This prop should contain a `ReactNode` or an array of ReactNodes (`ReactNode[]`)

Follow the coding style as best you can when submitting code. Take note of naming conventions, separation of concerns, and formatting rules. Prettier runs automatically as a pre-commit hook.

## Testing

All components should have associated Cypress component tests with a code coverage score of at least 80%.

## Git Guidelines

We adhere to the [Conventional Commits](https://conventionalcommits.org) specification.

### Commit Message Style

The commit message consists of three parts:

- header
- body (optional)
- footer (optional)

#### Commit Header

The commit header is the first line of the commit message. It consists of three parts: type, scope and description.

##### Commit Type

- It must be one of the following:
  - `fix` - a bug fix (note: this will indicate a release)
  - `feat` - a new feature (note: this will indicate a release)
  - `docs` - documentation only changes
  - `style` - changes that do not affect the meaning of the code
  - `refactor` - a code change that neither fixes a bug nor adds a feature
  - `perf` - a code change that improves performance
  - `test` - adding missing tests or fixing existing tests
  - `chore` - changes to the build process or auxiliary tools and libraries such as documentation generation
  - `revert` - revert to a commit
  - `WIP` - work in progress

##### Commit Scope (optional)

- It points to a specific component which is affected by the change. For example, `Button`, `Card` and `AnalyticalTable`.

##### Commit Description

- Use the **imperative present tense**. Instead of "I added feature xy" or "Adding tests for" use "Add feature xy" or "Add tests for".
- It should be no more than **100 characters** long.

#### Commit Body (optional)

After the commit header, there should be an empty line followed by the optional commit body.

- Describe the intention and reasoning of the change.

#### Commit Footer (optional)

After the optional commit body, there should be an empty line followed by the optional footer.

- If the change introduces a breaking change, it should start with **BREAKING CHANGE:** followed by a description of the change.
  - `BREAKING CHANGE: **AnalyticalTable:** "onColChange" was replaced by "onColumnsReordered"`
  - `BREAKING CHANGE: drop IE11 support`
- If the change fixes an issue reported on GitHub, add the following line to the commit message:
  - `Fixes #<issueNumber>` (e.g. `Fixes #42`)
- If the change implements a feature request on GitHub, add the following line to the commit message:
  - `Closes #<issueNumber>` (e.g. `Closes #42`)

#### Example

```
fix(Text): correct focus with 'tab' key

The text should receive a correct focus outline
when the 'tab' key is pressed.

Fixes #42
```
