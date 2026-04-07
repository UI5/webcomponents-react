import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Io as n,Jm as r,Su as i,u as a,yg as o}from"./iframe-DurzO16q.js";import{r as s}from"./react-C0no7Igm.js";import{_ as c,c as l,o as u,t as d}from"./components-BQLTg4BW.js";import{_ as f,d as p,p as m,u as h}from"./blocks-BNthmqCv.js";import{Default as g,n as _}from"./BarChart.stories-CtlWl-4e.js";import{Default as v,n as y}from"./BulletChart.stories-D7n6ncdh.js";import{Default as b,n as x}from"./ColumnChart.stories-C9YkvreS.js";import{Default as S,n as C}from"./ColumnChartWithTrend.stories-B4iJI3xS.js";import{Default as w,n as T}from"./ComposedChart.stories-DVJ3mI-6.js";import{Default as E,n as D}from"./DonutChart.stories-0i2oFIGj.js";import{Default as O,n as k}from"./LineChart.stories-DoWzrRkL.js";import{Default as A,n as j}from"./PieChart.stories-D77OvULW.js";import{Default as M,n as N}from"./RadarChart.stories-CyS3gM8J.js";import{Default as P,n as F}from"./RadialChart.stories-De1tpRI5.js";import{Default as I,n as L}from"./ScatterChart.stories-CsUdpGnP.js";var R,z=e((()=>{R=`# @ui5/webcomponents-react-charts

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
`}));function B(e){let{children:t}=e,r=(0,V.useRef)(null),i=(0,V.useRef)(0),a=(0,V.useRef)(null),o=()=>{a.current&&=(clearInterval(a.current),null)};return(0,V.useEffect)(()=>{let e=r.current;return e&&t.length&&(a.current=setInterval(()=>{i.current++,e.navigateTo(i.current%t.length)},5e3)),()=>{o()}},[t]),(0,H.jsx)(n,{style:{height:`500px`},arrowsPlacement:`Navigation`,cyclic:!0,ref:r,onNavigate:()=>{o()},...e})}var V,H,U=e((()=>{a(),V=t(o(),1),H=r()}));function W(e){let t={h2:`h2`,...s(),...e.components};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(p,{title:`Charts / Docs`}),`
`,(0,K.jsx)(l,{}),`
`,(0,K.jsx)(h,{children:R.split(`## Documentation`)[0].trim()}),`
`,(0,K.jsx)(t.h2,{id:`charts`,children:`Charts`}),`
`,(0,K.jsx)(B,{children:[{name:`BarChart`,component:g},{name:`BulletChart`,component:v},{name:`ColumnChart`,component:b},{name:`ColumnChartWithTrend`,component:S},{name:`ComposedChart`,component:w},{name:`DonutChart`,component:E},{name:`LineChart`,component:O},{name:`PieChart`,component:A},{name:`RadarChart`,component:M},{name:`RadialChart`,component:P},{name:`ScatterChart`,component:I}].map(e=>(0,K.jsxs)(`div`,{style:{width:`100%`},children:[(0,K.jsx)(i,{children:e.name}),(0,K.jsx)(m,{of:e.component})]},e.name))}),`
`,(0,K.jsx)(u,{})]})}function G(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,K.jsx)(t,{...e,children:(0,K.jsx)(W,{...e})}):W(e)}var K;e((()=>{K=r(),c(),d(),f(),z(),U(),_(),y(),x(),C(),T(),D(),k(),j(),N(),F(),L(),a()}))();export{G as default};