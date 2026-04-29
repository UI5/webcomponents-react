# @ui5/webcomponents-react-charts

Chart library built on top of [recharts](https://recharts.org/) for ui5-webcomponents-react.

## Deprecation Notice

`@ui5/webcomponents-react-charts` will be discontinued with v3 of `@ui5/webcomponents-react`. The package will not receive updates beyond v2 maintenance.

### Why

This package is not backed by SAP global design or accessibility specifications and does not meet the quality and governance standards of the UI5 Web Components ecosystem. Capturing every aspect of a chart for assistive technologies is inherently complex, and without clear specifications to implement against, comprehensive accessibility support cannot be ensured within current maintenance capacity.

New implementations should not depend on this package. Existing consumers should plan for migration before the v3 release.

If you have questions or concerns, please raise them in the [deprecation announcement](https://github.com/UI5/webcomponents-react/discussions/).

### SAP Inner-Source alternative

If you have access to SAP-internal systems, a drop-in replacement is available [`here`](https://github.tools.sap/mxp/charts).

## Installation

```bash
npm install @ui5/webcomponents-react-charts
```

## Accessibility

Charts only offer limited accessibility support with only basic built-in features, so it’s essential to ensure your implementation meets the accessibility standards of your application.

## React 19 support

To use this library with React 19 you have to override your `react-is` version to match your React version!

- **npm:**

  ```json
    "overrides": {
      "react-is": "19.1.0"
    },
  ```

- **yarn**

  ```json
    "resolutions": {
      "react-is": "19.1.0"
    },
  ```

## Static CSS

If you’ve enabled `staticCSSInjected` on the `ThemeProvider` component ([learn more here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-server-side-rendering--docs#add-to-existing-project)), make sure to also import the `charts` stylesheet. Otherwise, charts won’t be rendered correctly.

```ts
import '@ui5/webcomponents-react-charts/styles.css';
```

## Documentation

You can find an interactive documentation in our [Storybook](https://ui5.github.io/webcomponents-react/).

## Contribute

Please check our [Contribution Guidelines](https://github.com/UI5/webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/UI5/webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/UI5/webcomponents-react).

<!-- Use the force -->
