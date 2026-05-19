import{c as e,i as t}from"./preload-helper-DbRxMUml.js";import{Fm as n,Ko as r,Mu as i,ng as a,u as o}from"./iframe-1tBaAyV3.js";import{J as s,_ as c,d as l,p as u,u as d}from"./blocks-SCKEhLpE.js";import{_ as f,c as p,o as m,t as h}from"./components-56IcC70x.js";import{Default as g,n as _}from"./BarChart.stories-uTlWPelo.js";import{Default as v,n as y}from"./BulletChart.stories-C6xlYZ1k.js";import{Default as b,n as x}from"./ColumnChart.stories-CPYIjNA6.js";import{Default as S,n as C}from"./ColumnChartWithTrend.stories-B49BiieO.js";import{Default as w,n as T}from"./ComposedChart.stories-CBR0V7Wy.js";import{Default as E,n as D}from"./DonutChart.stories-CkIvoXrR.js";import{Default as O,n as k}from"./LineChart.stories-DZuFg8YY.js";import{Default as A,n as j}from"./PieChart.stories-9zl5dJxZ.js";import{Default as M,n as N}from"./RadarChart.stories-CPnT8C_B.js";import{Default as P,n as F}from"./RadialChart.stories-CJVF4OPP.js";import{Default as I,n as L}from"./ScatterChart.stories-83VdvpqN.js";var R,z=t((()=>{R=`# @ui5/webcomponents-react-charts

Chart library built on top of [recharts](https://recharts.org/) for ui5-webcomponents-react.

## Deprecation Notice

\`@ui5/webcomponents-react-charts\` will be discontinued with v3 of \`@ui5/webcomponents-react\`. The package will not receive updates beyond v2 maintenance.

### Why

This package is not backed by SAP global design or accessibility specifications and does not meet the quality and governance standards of the UI5 Web Components ecosystem. Capturing every aspect of a chart for assistive technologies is inherently complex, and without clear specifications to implement against, comprehensive accessibility support cannot be ensured within current maintenance capacity.

New implementations should not depend on this package. Existing consumers should plan for migration before the v3 release.

If you have questions or concerns, please raise them in the [deprecation announcement](https://github.com/UI5/webcomponents-react/discussions/8528).

### SAP Inner-Source alternative

If you have access to SAP-internal systems, a drop-in replacement is available [\`here\`](https://url.sap/ldfa34).

## Installation

\`\`\`bash
npm install @ui5/webcomponents-react-charts
\`\`\`

## Accessibility

Charts only offer limited accessibility support with only basic built-in features, so it’s essential to ensure your implementation meets the accessibility standards of your application.

## React 19 support

To use this library with React 19 you have to override your \`react-is\` version to match your React version!

- **npm:**

  \`\`\`json
    "overrides": {
      "react-is": "19.1.0"
    },
  \`\`\`

- **yarn**

  \`\`\`json
    "resolutions": {
      "react-is": "19.1.0"
    },
  \`\`\`

## Static CSS

If you’ve enabled \`staticCSSInjected\` on the \`ThemeProvider\` component ([learn more here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-server-side-rendering--docs#add-to-existing-project)), make sure to also import the \`charts\` stylesheet. Otherwise, charts won’t be rendered correctly.

\`\`\`ts
import '@ui5/webcomponents-react-charts/styles.css';
\`\`\`

## Documentation

You can find an interactive documentation in our [Storybook](https://ui5.github.io/webcomponents-react/).

## Contribute

Please check our [Contribution Guidelines](https://github.com/UI5/webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/UI5/webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/UI5/webcomponents-react).

<!-- Use the force -->
`}));function B(e){let{children:t}=e,n=(0,V.useRef)(null),i=(0,V.useRef)(0),a=(0,V.useRef)(null),o=()=>{a.current&&=(clearInterval(a.current),null)};return(0,V.useEffect)(()=>{let e=n.current;return e&&t.length&&(a.current=setInterval(()=>{i.current++,e.navigateTo(i.current%t.length)},5e3)),()=>{o()}},[t]),(0,H.jsx)(r,{style:{height:`500px`},arrowsPlacement:`Navigation`,cyclic:!0,ref:n,onNavigate:()=>{o()},...e})}var V,H,U=t((()=>{o(),V=e(a(),1),H=n()}));function W(e){let t={h2:`h2`,...s(),...e.components};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(l,{title:`Charts / Docs`}),`
`,(0,K.jsx)(p,{}),`
`,(0,K.jsx)(d,{children:R.split(`## Documentation`)[0].trim()}),`
`,(0,K.jsx)(t.h2,{id:`charts`,children:`Charts`}),`
`,(0,K.jsx)(B,{children:[{name:`BarChart`,component:g},{name:`BulletChart`,component:v},{name:`ColumnChart`,component:b},{name:`ColumnChartWithTrend`,component:S},{name:`ComposedChart`,component:w},{name:`DonutChart`,component:E},{name:`LineChart`,component:O},{name:`PieChart`,component:A},{name:`RadarChart`,component:M},{name:`RadialChart`,component:P},{name:`ScatterChart`,component:I}].map(e=>(0,K.jsxs)(`div`,{style:{width:`100%`},children:[(0,K.jsx)(i,{children:e.name}),(0,K.jsx)(u,{of:e.component})]},e.name))}),`
`,(0,K.jsx)(m,{})]})}function G(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,K.jsx)(t,{...e,children:(0,K.jsx)(W,{...e})}):W(e)}var K;t((()=>{K=n(),f(),h(),c(),z(),U(),_(),y(),x(),C(),T(),D(),k(),j(),N(),F(),L(),o()}))();export{G as default};