# @ui5/webcomponents-react-cli

Wrapper generation and code-mod for ui5/webcomponents-react.

## Usage

### Installation

```bash
npm install @ui5/webcomponents-react-cli
```

### Documentation

You can find an interactive documentation in our [Storybook](https://ui5.github.io/webcomponents-react/).

- [Wrapper generation](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-bring-your-own-web-components--docs)
- Code-mods:
  - [v2](https://ui5.github.io/webcomponents-react/v2/?path=/docs/migration-guide--docs#codemod): Migrate your codebase from v1 to v2
    ```shell
    npx @ui5/webcomponents-react-cli codemod --transform v2 \
        --src ./path/to/src \
        --typescript # only if you use TypeScript in your project, omit if you use JavaScript
    ```
  - [export-maps](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-faq--docs#why-use-direct-imports-via-package-export-maps): Migrate your codebase from root imports to direct imports using exports maps
    ```shell
    npx @ui5/webcomponents-react-cli codemod --transform export-maps \
        --src ./path/to/src \
        --typescript # only if you use TypeScript in your project, omit if you use JavaScript
    ```

## Contribute

Please check our [Contribution Guidelines](https://github.com/UI5/webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/UI5/webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/UI5/webcomponents-react).

<!-- Use the force -->
