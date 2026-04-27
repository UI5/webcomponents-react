import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-CNp2Ms8r.js";import{t as n}from"./src-CcAykDqj.js";import{t as r}from"./Link-jZHT_74U.js";import{t as i}from"./MessageStrip-Z9kdkrg0.js";import{r as a}from"./react-CSLkFeD8.js";import{_ as o,c as s,o as c,t as l}from"./components-CHdDRmfX.js";import{_ as u,d}from"./blocks-BObCibHN.js";function f(e){let t={a:`a`,blockquote:`blockquote`,br:`br`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{title:`Bring Your Own Web Components`}),`
`,(0,m.jsx)(t.h1,{id:`bring-your-own-web-components`,children:`Bring Your Own Web Components`}),`
`,(0,m.jsx)(s,{}),`
`,(0,m.jsxs)(t.p,{children:[`If you have created a custom UI5 Web Components package, you will be able to create React component wrappers in your project by leveraging our `,(0,m.jsx)(t.a,{href:`http://npmjs.com/package/@ui5/webcomponents-react-cli`,rel:`nofollow`,children:`@ui5/webcomponents-react-cli`}),`.`]}),`
`,(0,m.jsx)(i,{hideCloseButton:!0,design:`Critical`,children:(0,m.jsxs)(m.Fragment,{children:[`The UI5 Web Components for React CLI package is tailor-made for custom UI5 Web Components packages following`,` `,(0,m.jsx)(r,{href:`https://ui5.github.io/webcomponents/docs/development/`,children:`this documentation`}),`. `,(0,m.jsx)(t.br,{}),`You can not use it for creating React wrapper for arbitrary custom element libraries.`]})}),`
`,(0,m.jsx)(`br`,{}),`
`,(0,m.jsx)(`br`,{}),`
`,(0,m.jsx)(t.h2,{id:`create-react-wrappers`,children:`Create React Wrappers`}),`
`,(0,m.jsxs)(t.blockquote,{children:[`
`,(0,m.jsxs)(t.p,{children:[`This guide uses the name `,(0,m.jsx)(t.code,{children:`my-custom-webcomponents-package`}),` for the custom UI5 Web Components package. `,(0,m.jsx)(`br`,{}),`
Please replace all occurrences with your real package name when following this guide.`]}),`
`]}),`
`,(0,m.jsxs)(t.p,{children:[`First of all, install the `,(0,m.jsx)(t.code,{children:`@ui5/webcomponents-react-cli`}),` package in your project:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-shell`,children:`npm install @ui5/webcomponents-react-cli --save-dev

# if your package is based on UI5 Web Components V1, please install the V1 version of the CLI
npm install @ui5/webcomponents-react-cli@V1 --save-dev
`})}),`
`,(0,m.jsx)(t.p,{children:`Then, install your custom UI5 Web Components package:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-shell`,children:`npm install my-custom-webcomponents-package --save
`})}),`
`,(0,m.jsxs)(t.p,{children:[`Now, you can add a npm script to create your wrapper components.`,(0,m.jsx)(`br`,{}),`
`,(0,m.jsxs)(t.em,{children:[`We recommend ensuring that the target directory (specified by the `,(0,m.jsx)(t.code,{children:`--out`}),` parameter) is empty.`]})]}),`
`,(0,m.jsx)(i,{hideCloseButton:!0,children:(0,m.jsxs)(m.Fragment,{children:[`The UI5 Web Component for React CLI is not aware of any code style conventions you may be using in your project, so we recommend that you run tools such as `,(0,m.jsx)(r,{href:`https://prettier.io/`,children:`prettier`}),` and`,` `,(0,m.jsx)(r,{href:`https://eslint.org/`,children:`eslint`}),` after creating the wrapper components if you are using them in your project.`]})}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-json`,children:`{
  "//": "rest of your applications package.json",
  "scripts": {
    "//": "your other scripts",
    "create-webcomponent-wrappers": "ui5-wcr create-wrappers --packageName my-custom-webcomponents-package --out ./any/directory/in/your/project"
  }
}
`})}),`
`,(0,m.jsx)(c,{})]})}function p(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),o(),l(),u(),n()}))();export{p as default};