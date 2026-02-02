import{j as e}from"./iframe-Cv4sgl-6.js";import{useMDXComponents as r}from"./index-CBIpMKi2.js";import{M as a}from"./blocks-DPiPd9tl.js";import"./Tag-BCHKI4FR.js";import{M as s}from"./index-DcbEzSTS.js";import{B as t,F as l}from"./CommandsAndQueries-DF8E8wiu.js";import"./copy-Bby_UTo9.js";import{T as h}from"./TableOfContent-Bh8N9yMW.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D12ZJp7Z.js";import"./sys-enter-2-B0uzD6GZ.js";import"./alert-BQ9eRDhW.js";import"./index-BbeCayQT.js";import"./index-CtOMiTIA.js";import"./index-CeG26Jn9.js";import"./Link-BXe55YD0.js";import"./index-AkExkdLb.js";import"./index-CP4yHlqi.js";import"./index-C5UblPZZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CEw8P-vI.js";import"./addCustomCSSWithScoping-ChLo0vcI.js";import"./index-BdK0aYpg.js";const d=""+new URL("sb-pkg-filter-B5sbXu1N.png",import.meta.url).href;function i(n){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong","ui5-link":"ui5-link",ul:"ul",...r(),...n.components},c=o["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"FAQ"}),`
`,e.jsx(h,{}),`
`,e.jsx(o.h1,{id:"faq",children:"FAQ"}),`
`,e.jsx(s,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["Please also take a look at the FAQ of"," ",e.jsx(c,{href:"https://ui5.github.io/webcomponents/docs/FAQ/",children:"UI5 Web Components"}),"."]})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsxs(o.h2,{id:"where-can-i-find-all-compatible-versions-of-ui5webcomponents-and-ui5webcomponents-react",children:["Where Can I Find All Compatible Versions of ",e.jsx(o.code,{children:"@ui5/webcomponents"})," and ",e.jsx(o.code,{children:"@ui5/webcomponents-react"}),"?"]}),`
`,e.jsxs(o.p,{children:["All necessary ",e.jsx(o.code,{children:"@ui5/webcomponents"})," packages are ",e.jsx(o.code,{children:"peerDependencies"})," of ",e.jsx(o.code,{children:"@ui5/webcomponents-react"}),", so if you're using npm v7 or later, then these dependencies should be auto installed when running ",e.jsx(o.code,{children:"npm install"}),`.
If you want to check which versions are compatible you can find a compatibility table `,e.jsx(o.a,{href:"?path=/docs/getting-started--docs#add-ui5webcomponents-react-to-an-existing-app",children:"here"}),"."]}),`
`,e.jsx(o.h2,{id:"what-are-abstract-ui5-web-components",children:'What Are "abstract" UI5 Web Components?'}),`
`,e.jsx(o.p,{children:"Abstract UI5 Web Components are mainly there to pass props to the actual component inside the shadow root. Therefore, all attributes passed to the element, will have no effect on the actual component."}),`
`,e.jsx(o.h3,{id:"example",children:"Example"}),`
`,e.jsxs(o.p,{children:["Rendering a ",e.jsx(o.code,{children:"ComboBoxItem"})," with some custom HTML attributes..."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<ComboBox>
  <ComboBoxItem text="ComboBoxItem1" title="Hello" style={{ backgroundColor: 'red' }} />
</ComboBox>
`})}),`
`,e.jsx(o.p,{children:"...will result in an element that looks like this:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<ui5-cb-item
  text="ComboBoxItem1"
  title="Hello"
  style="background-color: red;"
  _ui5rt0=""
  _ui5host=""
  ui5-cb-item=""
></ui5-cb-item>
`})}),`
`,e.jsxs(o.p,{children:["As you can see, both ",e.jsx(o.code,{children:"title"})," and ",e.jsx(o.code,{children:"style"})," are correctly applied, but since the item doesn't have children, nor a shadow root the attributes don't have an effect on the component."]}),`
`,e.jsx(o.h2,{id:"how-can-i-style-elements-inside-the-shadow-root-of-a-web-component",children:"How Can I Style Elements Inside the Shadow Root of a Web Component?"}),`
`,e.jsxs(o.p,{children:["Styling elements inside the shadow root is only supported by leveraging the ",e.jsxs(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",rel:"nofollow",children:[e.jsx(o.code,{children:"::part"})," pseudo-element"]}),". You can find out more about this ",e.jsx(o.a,{href:"?path=/docs/knowledge-base-styling--docs#css-shadow-parts",children:"here"}),"."]}),`
`,e.jsx(o.h2,{id:"how-can-i-reuse-or-change-colors-fonts-etc-of-ui5-web-components-for-react",children:"How Can I Reuse or Change Colors, Fonts, etc. of UI5 Web Components for React?"}),`
`,e.jsxs(o.p,{children:["UI5 Web Components for React comes with a ",e.jsx(o.a,{href:"https://github.com/SAP/theming-base-content",rel:"nofollow",children:"publicly available"})," set of CSS variables that ensure the same look and feel across applications. Changing these values is not recommended, if you still need to customize them, you can find out more about this ",e.jsx(o.a,{href:"?path=/docs/knowledge-base-styling--docs#styling-ui5-web-components-for-react-components",children:"here"}),"."]}),`
`,e.jsxs(o.p,{children:["To reuse these styles, you can either use the CSS variable, or use our ",e.jsx(o.a,{href:"?path=/docs/knowledge-base-public-utils--docs#theming-parameters",children:"Theming Parameters"}),"."]}),`
`,e.jsx(o.h2,{id:"why-is-changing-the-theme-not-working",children:"Why Is Changing the Theme Not Working?"}),`
`,e.jsxs(o.p,{children:["You have to ensure to import the ",e.jsx(o.code,{children:"Assets"})," with the different themes, otherwise only the default theme will be used."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`import '@ui5/webcomponents-react/dist/Assets';
`})}),`
`,e.jsxs(o.p,{children:["Further information about theming can be found in our and the UI5 Web Components ",e.jsx(o.a,{href:"?path=/docs/getting-started--docs#theming",children:"Theming documentation"}),"."]}),`
`,e.jsxs(o.h2,{id:"how-can-i-distinguish-if-a-component-is-developed-in-the-ui5-webcomponents-or-ui5-webcomponents-react-repo",children:["How Can I Distinguish If a Component Is Developed in the ",e.jsx(o.code,{children:"ui5-webcomponents"})," or ",e.jsx(o.code,{children:"ui5-webcomponents-react"})," Repo?"]}),`
`,e.jsxs(o.p,{children:["Each component developed by the UI5 Web Components team (",e.jsx(o.a,{href:"https://github.com/UI5/webcomponents",rel:"nofollow",children:e.jsx(o.code,{children:"ui5-webcomponents"})}),") that is wrapped by the UI5 Web Components for React (",e.jsx(o.a,{href:"https://github.com/UI5/webcomponents-react",rel:"nofollow",children:e.jsx(o.code,{children:"ui5-webcomponents-react"})}),") wrapper includes the following note in its component description:"]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note"}),": This is a UI5 Web Component! ",e.jsx(o.a,{href:"https://github.com/UI5/webcomponents",rel:"nofollow",children:"Repository"})," | ",e.jsx(o.a,{href:"https://ui5.github.io/webcomponents/",rel:"nofollow",children:"Documentation"})]}),`
`]}),`
`,e.jsxs(o.p,{children:["If a component does not have this note, it is a React-only component provided exclusively by ",e.jsx(o.code,{children:"ui5-webcomponents-react"}),"."]}),`
`,e.jsxs(o.p,{children:["Additionally, Storybook supports filtering by tags, allowing you to filter by different ",e.jsx(o.code,{children:"ui5-webcomponents(-react)"})," packages as well:"]}),`
`,e.jsx("img",{src:d,alt:"Storybook Tag Filter",height:420}),`
`,e.jsx(o.h2,{id:"what-do-the-badges-in-the-side-navigation-mean",children:"What Do the Badges in the Side Navigation Mean?"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(t,{type:"custom"}),": There are no global design or UX specifications for this component, or it deviates from them partially or fully. More details can be found in the component’s description."]}),`
`,e.jsxs(o.li,{children:[e.jsx(t,{type:"experimental"}),": The component or pattern is in an experimental state, meaning changes to its public API may occur without a major version update (",e.jsx(o.code,{children:"v3.0.0"}),")."]}),`
`,e.jsxs(o.li,{children:[e.jsx(t,{type:"deprecated"}),": The component is deprecated and will be removed in the next major version update (",e.jsx(o.code,{children:"v3.0.0"}),"). More details can be found in the component's description."]}),`
`]}),`
`,e.jsx(o.h2,{id:"why-isnt-scoping-working",children:"Why Isn't Scoping Working?"}),`
`,e.jsxs(o.p,{children:[`Starting from UI5 Web Components (for React) 2.0.0, the order of imports with regard to scoping and components matters.
Setting the scoping suffix must be done before importing any components, as they use the suffix at the top-level of the module - meaning when a component is imported, the suffix has to be known.
For this to work, calling the method should be done in a separate module (e.g. scoping-config.js) and this module should be imported before any components are imported.
You can find more information about this in the `,e.jsx(o.a,{href:"https://ui5.github.io/webcomponents/docs/advanced/scoping/",rel:"nofollow",children:"UI5 Web Components documentation"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`// scoping-config.js
import { setCustomElementsScopingSuffix } from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
setCustomElementsScopingSuffix('demo');

// app main file, e.g index.js, main.tsx, etc.
import './scoping-config.js';
// now, all other component imports - the scoping config import must be the first import of the app
import { Button } from '@ui5/webcomponents-react/Button';
// ...
`})}),`
`,e.jsx(o.h2,{id:"why-use-direct-imports-via-package-export-maps",children:"Why Use Direct Imports via Package Export Maps"}),`
`,e.jsxs(o.p,{children:["Since ",e.jsx(o.a,{href:"https://github.com/UI5/webcomponents-react/releases/tag/v2.14.0",rel:"nofollow",children:"v2.14.0"}),", ",e.jsx(o.code,{children:"ui5-webcomponents-react"})," supports ",e.jsx(o.strong,{children:"export maps"})," through the ",e.jsx(o.code,{children:"exports"})," field in ",e.jsx(o.code,{children:"package.json"})," (",e.jsx(o.a,{href:"https://nodejs.org/api/packages.html#exports",rel:"nofollow",children:"documentation"}),")."]}),`
`,e.jsx(o.p,{children:`Export maps allow you to import components directly from their package entry points instead of relying on deep file paths or the package root (barrel) files.
While most bundlers perform tree-shaking in production builds, so only the code you actually use is included, tree-shaking is often limited or disabled in development. If you import from the package root (a “barrel file”), all components and utilities exported from that root are included in the bundle, even those you don’t use.`}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`// Root import (less optimal without tree-shaking)
import { Button, AnalyticalTable } from "@ui5/webcomponents-react";

// Direct import (recommended)
import { Button } from "@ui5/webcomponents-react/Button";
import { AnalyticalTable } from "@ui5/webcomponents-react/AnalyticalTable";
`})}),`
`,e.jsx(o.h3,{id:"codemod",children:"Codemod"}),`
`,e.jsxs(o.p,{children:["To migrate from root imports to direct imports, you can use the ",e.jsx(o.code,{children:"exports-map"})," codemod from the ",e.jsx(o.a,{href:"https://github.com/UI5/webcomponents-react/blob/main/packages/cli/README.md",rel:"nofollow",children:"cli"})," package."]}),`
`,e.jsx(s,{hideCloseButton:!0,design:"Critical",children:e.jsxs(e.Fragment,{children:["The codemod is a best-effort attempt to help you migrate to direct imports. Please review the generated code thoroughly!",e.jsx(o.br,{}),e.jsx(o.strong,{children:"Applying the codemod might break your code formatting, so please don't forget to run prettier and/or eslint after you've applied the codemod!"})]})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-shell",children:`npx @ui5/webcomponents-react-cli codemod --transform export-maps \\
    --src ./path/to/src \\
    --typescript # only if you use TypeScript in your project, omit if you use JavaScript
`})}),`
`,e.jsx(l,{})]})}function D(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{D as default};
