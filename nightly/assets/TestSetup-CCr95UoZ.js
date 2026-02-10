import{j as e}from"./iframe-D3h_j2y4.js";import{useMDXComponents as t}from"./index-a9MBNRjP.js";import{M as s}from"./blocks-Cp97O8Me.js";import"./Tag-Be6y1yqM.js";import{M as i}from"./index-B9e5YBdN.js";import{F as a}from"./CommandsAndQueries-DkEtb3C9.js";import"./copy-Dke-3UUt.js";import{T as c}from"./TableOfContent-B8qKcdwY.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Du_n-m1U.js";import"./sys-enter-2-_5l1H-Gx.js";import"./alert-DiqJ6xxp.js";import"./index-BY-U4HhI.js";import"./index-BOt5HncK.js";import"./index-BhBE3smf.js";import"./Link-Dali4gAe.js";import"./index-BQ-14eq3.js";import"./index-DX_7kgjZ.js";import"./index-DnWdQH32.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-llHj0RCs.js";import"./addCustomCSSWithScoping-uA_fHk2N.js";import"./index-CH7UrjOG.js";function r(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Setup"}),`
`,e.jsx(c,{headingSelector:"h2"}),`
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
`,e.jsx(a,{})]})}function E(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{E as default};
