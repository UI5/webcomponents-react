import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Cg as n,Gm as r,Io as i,Su as a,u as o}from"./iframe-BHBNC89f.js";import{r as s}from"./react-CuLc35ri.js";import{_ as c,c as l,o as u,t as d}from"./components-CSiRn2lu.js";import{_ as f,d as p,p as m,u as h}from"./blocks-ChWWj_QH.js";import{Default as g,n as _}from"./BarChart.stories-DnPvqDs1.js";import{Default as v,n as y}from"./BulletChart.stories-vUrby9se.js";import{Default as b,n as x}from"./ColumnChart.stories-DaP7hl6C.js";import{Default as S,n as C}from"./ColumnChartWithTrend.stories-lPkYfZ1f.js";import{Default as w,n as T}from"./ComposedChart.stories-Ddwq1Bi7.js";import{Default as E,n as D}from"./DonutChart.stories-B-1srOyq.js";import{Default as O,n as k}from"./LineChart.stories-uNGxUaLb.js";import{Default as A,n as j}from"./PieChart.stories-DHEwSWdK.js";import{Default as M,n as N}from"./RadarChart.stories-BfQozLyO.js";import{Default as P,n as F}from"./RadialChart.stories-DlQU0jx0.js";import{Default as I,n as L}from"./ScatterChart.stories-W0EF956f.js";var R,z=e((()=>{R=`# @ui5/webcomponents-react-charts

Chart library built on top of [recharts](https://recharts.org/) for ui5-webcomponents-react.

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
`}));function B(e){let{children:t}=e,n=(0,V.useRef)(null),r=(0,V.useRef)(0),a=(0,V.useRef)(null),o=()=>{a.current&&=(clearInterval(a.current),null)};return(0,V.useEffect)(()=>{let e=n.current;return e&&t.length&&(a.current=setInterval(()=>{r.current++,e.navigateTo(r.current%t.length)},5e3)),()=>{o()}},[t]),(0,H.jsx)(i,{style:{height:`500px`},arrowsPlacement:`Navigation`,cyclic:!0,ref:n,onNavigate:()=>{o()},...e})}var V,H,U=e((()=>{o(),V=t(n(),1),H=r()}));function W(e){let t={h2:`h2`,...s(),...e.components};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(p,{title:`Charts / Docs`}),`
`,(0,K.jsx)(l,{}),`
`,(0,K.jsx)(h,{children:R.split(`## Documentation`)[0].trim()}),`
`,(0,K.jsx)(t.h2,{id:`charts`,children:`Charts`}),`
`,(0,K.jsx)(B,{children:[{name:`BarChart`,component:g},{name:`BulletChart`,component:v},{name:`ColumnChart`,component:b},{name:`ColumnChartWithTrend`,component:S},{name:`ComposedChart`,component:w},{name:`DonutChart`,component:E},{name:`LineChart`,component:O},{name:`PieChart`,component:A},{name:`RadarChart`,component:M},{name:`RadialChart`,component:P},{name:`ScatterChart`,component:I}].map(e=>(0,K.jsxs)(`div`,{style:{width:`100%`},children:[(0,K.jsx)(a,{children:e.name}),(0,K.jsx)(m,{of:e.component})]},e.name))}),`
`,(0,K.jsx)(u,{})]})}function G(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,K.jsx)(t,{...e,children:(0,K.jsx)(W,{...e})}):W(e)}var K;e((()=>{K=r(),c(),d(),f(),z(),U(),_(),y(),x(),C(),T(),D(),k(),j(),N(),F(),L(),o()}))();export{G as default};