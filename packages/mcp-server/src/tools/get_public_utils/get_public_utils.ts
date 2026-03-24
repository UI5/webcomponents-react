/**
 * get_public_utils tool
 * Provides documentation for public utilities and hooks from @ui5/webcomponents-react-base
 */

import { z } from 'zod';
import { createTextResponse, handleToolError } from '../../utils/index.js';

type GetPublicUtilsPayload = {
  name?: string;
};

const DEVICE_DOCS = `# Device API

Import: \`import * as Device from '@ui5/webcomponents-react-base/Device';\`

The Device API allows you to detect information about the environment where your app is running.

## General Device Information

- \`Device.isIE()\` - Returns true if running in Internet Explorer
- \`Device.isSafari()\` - Returns true if running in Safari
- \`Device.isDesktop()\` - Returns true if running on desktop devices
- \`Device.isTablet()\` - Returns true if running on tablet devices
- \`Device.isPhone()\` - Returns true if running on mobile phone devices
- \`Device.supportsTouch()\` - Returns true if device supports touch
- \`Device.getCurrentRange(width?: number)\` - Returns the current media range
  - Returns: \`{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }\`
- \`Device.getOrientation()\` - Returns the current orientation
  - Returns: \`{ landscape: boolean, portrait: boolean }\`

## Event Listeners

- \`Device.attachResizeHandler(callback)\` - Attach handler for window resize
  - Callback receives: \`{ height: number, width: number }\`
- \`Device.detachResizeHandler(callback)\` - Detach resize handler
- \`Device.attachOrientationChangeHandler(callback)\` - Attach handler for orientation change
  - Callback receives: \`{ landscape: boolean, portrait: boolean }\`
- \`Device.detachOrientationChangeHandler(callback)\` - Detach orientation handler
- \`Device.attachMediaHandler(callback)\` - Attach handler for media query changes
  - Matches against SAP Responsive Breakpoints:
    - Phone: \`(max-width:599px)\`
    - Tablet: \`(min-width:600px) and (max-width:1023px)\`
    - Desktop: \`(min-width:1024px) and (max-width:1439px)\`
    - LargeDesktop: \`(min-width:1440px)\`
  - Callback receives: \`{ from: number, to?: number, name: string, unit: string }\`
- \`Device.detachMediaHandler(callback)\` - Detach media handler

## Example Usage

\`\`\`tsx
import * as Device from '@ui5/webcomponents-react-base/Device';

function MyComponent() {
  useEffect(() => {
    const handleResize = ({ width, height }) => {
      console.log('Window resized:', width, height);
    };

    Device.attachResizeHandler(handleResize);

    return () => {
      Device.detachResizeHandler(handleResize);
    };
  }, []);

  const isPhone = Device.isPhone();
  const range = Device.getCurrentRange();

  return <div>Device type: {range.name}</div>;
}
\`\`\`
`;

const THEMING_PARAMETERS_DOCS = `# ThemingParameters

Import: \`import { ThemingParameters } from '@ui5/webcomponents-react-base/ThemingParameters';\`

ThemingParameters is a JavaScript object containing all available CSS variables mapped to their names. This allows you to use theme-aware colors and styles without hard-coding values.

## Usage

\`\`\`tsx
import { ThemingParameters } from '@ui5/webcomponents-react-base/ThemingParameters';

// Using in inline styles (not recommended for excessive use)
<div style={{ background: ThemingParameters.sapBackgroundColor }} />

// Equivalent to:
<div style={{ background: 'var(--sapBackgroundColor)' }} />
\`\`\`

## Common Parameters

- \`sapBackgroundColor\` - Default background color
- \`sapTextColor\` - Default text color
- \`sapBrandColor\` - Brand/primary color
- \`sapHighlightColor\` - Highlight color
- \`sapNegativeColor\` - Error/negative state color
- \`sapCriticalColor\` - Warning/critical state color
- \`sapPositiveColor\` - Success/positive state color
- \`sapNeutralColor\` - Neutral/info state color
- \`sapFontFamily\` - Default font family
- \`sapFontSize\` - Base font size
- \`sapFontLargeSize\` - Large font size
- \`sapFontSmallSize\` - Small font size

## Best Practices

1. Prefer CSS variables in external stylesheets over inline styles
2. Use ThemingParameters when dynamic styling in JavaScript is needed
3. All parameters are theme-aware and change with the active theme
4. Full list available at: https://github.com/SAP/theming-base-content

## Example: Custom Component with Theming

\`\`\`tsx
import { ThemingParameters } from '@ui5/webcomponents-react-base/ThemingParameters';
import './MyComponent.css';

export const MyComponent = ({ isError }) => {
  return (
    <div
      className="my-component"
      style={{
        color: isError ? ThemingParameters.sapNegativeColor : ThemingParameters.sapTextColor
      }}
    >
      Content
    </div>
  );
};
\`\`\`

\`\`\`css
/* MyComponent.css */
.my-component {
  background-color: var(--sapBackgroundColor);
  font-family: var(--sapFontFamily);
  padding: var(--sapElement_Spacing);
}
\`\`\`
`;

const USE_I18N_BUNDLE_DOCS = `# useI18nBundle Hook

Import: \`import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks';\`

The useI18nBundle hook enables internationalization (i18n) in your application by providing access to translated text bundles.

## Signature

\`\`\`typescript
function useI18nBundle(bundleName: string): {
  getText: (key: string, ...params: string[]) => string;
}
\`\`\`

## Usage

\`\`\`tsx
import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks';

function MyComponent() {
  const i18nBundle = useI18nBundle('@myapp/i18n');

  return (
    <div>
      <h1>{i18nBundle.getText('WELCOME_MESSAGE')}</h1>
      <p>{i18nBundle.getText('USER_GREETING', userName)}</p>
    </div>
  );
}
\`\`\`

## Setup

1. Create i18n property files (e.g., \`messagebundle.properties\`)
2. Register your bundle with UI5 Web Components
3. Use the hook to access translated texts

## More Information

For detailed i18n setup and usage, see:
- Storybook: Knowledge Base > Internationalization
- https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-internationalization--docs
`;

const USE_VIEWPORT_RANGE_DOCS = `# useViewportRange Hook

Import: \`import { useViewportRange } from '@ui5/webcomponents-react-base/hooks';\`

The useViewportRange hook is a utility based on Device.getCurrentRange() and Device.attachMediaHandler(). It always returns the name of the currently active responsive range.

## Signature

\`\`\`typescript
function useViewportRange(): 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop'
\`\`\`

## Usage

\`\`\`tsx
import { useViewportRange } from '@ui5/webcomponents-react-base/hooks';

function MyResponsiveComponent() {
  const currentRange = useViewportRange();

  return (
    <div>
      <p>Current viewport: {currentRange}</p>
      {currentRange === 'Phone' && <MobileLayout />}
      {currentRange === 'Desktop' && <DesktopLayout />}
    </div>
  );
}
\`\`\`

## Responsive Ranges

- **Phone**: \`(max-width: 599px)\`
- **Tablet**: \`(min-width: 600px) and (max-width: 1023px)\`
- **Desktop**: \`(min-width: 1024px) and (max-width: 1439px)\`
- **LargeDesktop**: \`(min-width: 1440px)\`

## Benefits

- Automatic re-render on range changes
- Clean React hook API
- Based on SAP Responsive Breakpoints
- No manual event listener management needed

## Example: Conditional Rendering

\`\`\`tsx
function AdaptiveTable() {
  const range = useViewportRange();
  const isMobile = range === 'Phone';

  return isMobile ? <MobileTable /> : <DesktopTable />;
}
\`\`\`
`;

const WITH_WEB_COMPONENT_DOCS = `# withWebComponent

⚠️ **Important**: Import from base package, not main package!

**Correct Import**: \`import { withWebComponent } from '@ui5/webcomponents-react-base/withWebComponent';\`
**Legacy Import**: \`import { withWebComponent } from '@ui5/webcomponents-react';\` (not recommended)

## Purpose

withWebComponent is an advanced utility for creating React wrappers around custom web components. This is typically only needed if you're:

1. Creating wrappers for your own custom web components
2. Wrapping third-party web components
3. Contributing to the ui5-webcomponents-react library

**Note**: You don't need this for using existing UI5 Web Components for React components - they're already wrapped!

## Signature

\`\`\`typescript
function withWebComponent<T>(
  Component: CustomElementConstructor,
  options?: {
    slots?: string[];
    events?: string[];
  }
): React.ComponentType<T>
\`\`\`

## When to Use

Use withWebComponent when you want to integrate a custom web component that:
- Has shadow DOM
- Uses custom events
- Has slots for content projection
- Needs React-style prop handling

## Example

\`\`\`tsx
import { withWebComponent } from '@ui5/webcomponents-react-base/withWebComponent';
import '@my-company/custom-components/dist/MyButton.js';

// Wrap your custom web component
export const MyButton = withWebComponent(
  // @ts-ignore
  window.customElements.get('my-button'),
  {
    slots: ['icon'],
    events: ['click', 'custom-event']
  }
);

// Now use it like a React component
function App() {
  return (
    <MyButton
      onClick={handleClick}
      icon={<Icon />}
    >
      Click me
    </MyButton>
  );
}
\`\`\`

## More Information

For bringing your own web components, see:
- Storybook: Knowledge Base > Bring Your Own Web Components
- https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-bring-your-own-web-components--docs
`;

const ALL_UTILS_OVERVIEW = `# Public Utilities from @ui5/webcomponents-react-base

⚠️ **Important**: Only use the utilities documented here. All other exports are intended for internal use and are not subject to semantic versioning!

## Available Public APIs

### 1. Device API
\`import * as Device from '@ui5/webcomponents-react-base/Device';\`

Device detection, responsive breakpoints, and event handlers for resize/orientation changes.

### 2. ThemingParameters
\`import { ThemingParameters } from '@ui5/webcomponents-react-base/ThemingParameters';\`

JavaScript object with all CSS variables for theme-aware styling.

### 3. useI18nBundle Hook
\`import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks';\`

React hook for internationalization and translated text access.

### 4. useViewportRange Hook
\`import { useViewportRange } from '@ui5/webcomponents-react-base/hooks';\`

React hook that returns the current responsive breakpoint.

### 5. withWebComponent (Advanced)
\`import { withWebComponent } from '@ui5/webcomponents-react-base/withWebComponent';\`

Utility for wrapping custom web components in React. Import from base package!

---

## Quick Reference

| Utility | Import | Use Case |
|---------|--------|----------|
| Device | \`@.../Device\` | Device detection, responsive handlers |
| ThemingParameters | \`@.../ThemingParameters\` | Theme-aware colors and styles |
| useI18nBundle | \`@.../hooks\` | Translations and i18n |
| useViewportRange | \`@.../hooks\` | Responsive breakpoint detection |
| withWebComponent | \`@.../withWebComponent\` | Wrap custom web components |

## Documentation Links

- Full documentation: https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-public-utils--docs
- Internationalization guide: https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-internationalization--docs
- Custom web components: https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-bring-your-own-web-components--docs

Use \`get_public_utils\` with a specific \`name\` parameter to get detailed documentation for each utility.
`;

export const getPublicUtilsTool = {
  name: 'get_public_utils',
  title: 'Public Utilities & Hooks',
  annotations: {
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: false,
  },
  description:
    'Get documentation for public utilities and hooks from @ui5/webcomponents-react-base. ' +
    'Covers Device API, ThemingParameters, useI18nBundle, useViewportRange, and withWebComponent.\n\n' +
    'WHEN TO USE: You need to use device detection, theme-aware CSS variables in JS, internationalization hooks, responsive breakpoints, or wrap your own custom web components.\n' +
    'DO NOT USE FOR: Looking up component props — use get_component_api. For general styling guidance — use get_documentation with section "Knowledge Base > Styling".\n' +
    'LIMITS: Returns documentation for one utility per call, or an overview of all 5 utilities.\n\n' +
    'EXAMPLE INPUT: { "name": "ThemingParameters" }\n' +
    'EXAMPLE INPUT: { "name": "withWebComponent" }\n' +
    'EXAMPLE INPUT: {} (returns overview of all utilities)',
  inputSchema: {
    name: z
      .enum(['Device', 'ThemingParameters', 'useI18nBundle', 'useViewportRange', 'withWebComponent'])
      .optional()
      .describe('Specific utility/hook name. Omit to see all available utilities.'),
  },
  handler: ({ name }: GetPublicUtilsPayload) => {
    try {
      // If no name provided, return overview
      if (!name) {
        return createTextResponse(ALL_UTILS_OVERVIEW);
      }

      // Return specific documentation (validation happens at package installation time)
      // We trust the enum constraint from inputSchema
      switch (name) {
        case 'Device':
          return createTextResponse(DEVICE_DOCS);
        case 'ThemingParameters':
          return createTextResponse(THEMING_PARAMETERS_DOCS);
        case 'useI18nBundle':
          return createTextResponse(USE_I18N_BUNDLE_DOCS);
        case 'useViewportRange':
          return createTextResponse(USE_VIEWPORT_RANGE_DOCS);
        case 'withWebComponent':
          return createTextResponse(WITH_WEB_COMPONENT_DOCS);
        default:
          return createTextResponse(`Documentation for ${name} is not yet available. Please check back later.`);
      }
    } catch (error) {
      return handleToolError(error, `Error getting documentation for ${name || 'public utils'}`);
    }
  },
};
