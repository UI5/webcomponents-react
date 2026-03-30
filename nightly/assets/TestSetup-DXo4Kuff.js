import{j as e}from"./iframe-DoasxszC.js";import{u as t,M as s}from"./blocks-DBX_G92C.js";import"./Tag-DCvAsOsB.js";import{M as i}from"./index-Bkq6_nAR.js";import"./CommandsAndQueries-Bg5oLjv_.js";import"./copy-Bp1X0rrX.js";import{T as a}from"./TableOfContent-BL-dDNDX.js";import{F as c}from"./Footer-BMRkHXkr.js";import"./PageNotFound-DlCPYtCu.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C1mBwnJc.js";import"./sys-enter-2-D2TESZyh.js";import"./alert-CWEkUWZv.js";import"./Link-CvHgBQZc.js";import"./index-Dl7LQ4u1.js";import"./index-BxFkVED5.js";import"./index-UQi-W-Cc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwB0h3WK.js";import"./addCustomCSSWithScoping-D15HIh5y.js";import"./index-CY9OUOeY.js";import"./index-C3bV2_l1.js";import"./index-DUsiHM8W.js";import"./index-BuSM4uik.js";import"./Illustrations-B4E_SvFf.js";import"./i18n-defaults-CFWtSmu6.js";function r(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Setup"}),`
`,e.jsx(a,{headingSelector:"h2"}),`
`,e.jsx(n.h1,{id:"cypress-test-setup",children:"Cypress Test Setup"}),`
`,e.jsxs(n.p,{children:["UI5 Web Components for React is using ",e.jsx(n.a,{href:"https://www.cypress.io/",rel:"nofollow",children:"Cypress"})," as preferred testing framework. There you have the options of testing components only or create End-to-End tests for your application."]}),`
`,e.jsx(n.h2,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(n.p,{children:["When launching Cypress the first time you're guided through the setup, which then will create a ",e.jsx(n.a,{href:"https://docs.cypress.io/guides/references/configuration",rel:"nofollow",children:"configuration file"})," for you. You can use any configuration you like, but since we're heavily relying on web-components, we recommend traversing the shadow DOM per default:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`includeShadowDom: true
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://docs.cypress.io/guides/component-testing/react/overview",rel:"nofollow",children:"Here"})," you can find the Cypress Quickstart tutorial for React."]}),`
`,e.jsx(n.h2,{id:"themeprovider",children:"ThemeProvider"}),`
`,e.jsxs(n.p,{children:["UI5 Web Components for React components have to be wrapped inside a ",e.jsx(n.code,{children:"ThemeProvider"}),", depending on your test setup (especially for component-testing) it might prove beneficial creating a custom ",e.jsx(n.code,{children:"mount"})," command, that includes the ",e.jsx(n.code,{children:"ThemeProvider"}),"."]}),`
`,e.jsx(n.p,{children:"JavaScript:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});
`})}),`
`,e.jsx(n.p,{children:"TypeScript declaration:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Cypress mount with ThemeProvider
       */
      mount: typeof mount;
    }
  }
}
`})}),`
`,e.jsxs(n.p,{children:["You can define the command for example in the ",e.jsx(n.code,{children:"commands.ts/js"})," file:"]}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Example file"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { mount } from 'cypress/react';
// if you are using Cypress v12 or v13, you need to import the mount command from 'cypress/react18'
// import { mount } from 'cypress/react18';
import { ThemeProvider } from '@ui5/webcomponents-react';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Cypress mount with ThemeProvider
       */
      mount: typeof mount;
    }
  }
}

/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});
`})})]}),`
`,e.jsx(n.h2,{id:"cypress-commands-package-for-ui5-webcomponents",children:"Cypress Commands package for ui5-webcomponents"}),`
`,e.jsx(i,{hideCloseButton:!0,children:`This package is a work-in-progress and can be extended by you! If you feel like a command or query is missing, please
feel free to open a PR adding it to our library. Contributions are always welcome!`}),`
`,e.jsx(n.p,{children:"Since testing web components is sometimes not as straightforward as one would like it to be, we offer a package with a set of commands and queries to make it easier to interact with them:"}),`
`,e.jsx(n.p,{children:"Install:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install @ui5/webcomponents-cypress-commands
`})}),`
`,e.jsxs(n.p,{children:["After the installation you can import it in your entry file (e.g. ",e.jsx(n.code,{children:"component.ts"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@ui5/webcomponents-cypress-commands';
`})}),`
`,e.jsx(n.p,{children:"Now you can use all commands and queries that are available in this package."}),`
`,e.jsx(c,{})]})}function F(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{F as default};
