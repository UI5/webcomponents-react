import{r as i,j as t,T as l}from"./iframe-C4opeNuJ.js";import{useMDXComponents as p}from"./index-DlqCzQ5b.js";import{M as u,a as h,n as f}from"./blocks-BnM-0OnJ.js";import"./Tag-CUNQyer4.js";import"./index-Djkzc3Do.js";import{F as d}from"./CommandsAndQueries-C6QEnHzv.js";import"./copy-DCgRf4_C.js";import{T as b}from"./TableOfContent-CxLlyFVO.js";import{C}from"./index-D-aMHKR2.js";import{D}from"./BarChart.stories-TeZMe3sp.js";import{D as y}from"./BulletChart.stories-BA8K-BQ2.js";import{D as g}from"./ColumnChart.stories-DY0AGD0X.js";import{D as v}from"./ColumnChartWithTrend.stories-DOgsGAUP.js";import{D as x}from"./ComposedChart.stories-QP4oS8KX.js";import{D as j}from"./DonutChart.stories-BVuITJ5O.js";import{D as w}from"./LineChart.stories-DORUS8PH.js";import{D as R}from"./PieChart.stories-D6qUZWae.js";import{D as I}from"./RadarChart.stories-18GFP1nY.js";import{D as S}from"./RadialChart.stories-CAUqVWSo.js";import{D as T}from"./ScatterChart.stories-DyZO5Q5h.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D9qzbrES.js";import"./sys-enter-2-OOuZrUt0.js";import"./alert-CJYb_vFX.js";import"./index-BWSzAzRH.js";import"./index-Wmnu1H8C.js";import"./index-B-UdOs74.js";import"./Link-DxcQOJp8.js";import"./index-DTzFsIn0.js";import"./index-fsr9wgfs.js";import"./index-DRX5KInn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIUIYMM9.js";import"./addCustomCSSWithScoping-C7i1P6L4.js";import"./index-CFNq6guK.js";import"./Carousel-Da6egfFW.js";import"./ScrollEnablement-DiEQdxkX.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DtrknIej.js";import"./slim-arrow-left-KUz-Ies3.js";import"./DemoProps-1_0qbKSf.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CR7GV2ex.js";import"./ChartContainer-CMgxovHf.js";import"./index-CRe7MavO.js";import"./useCancelAnimationFallback-B0FYNL0V.js";import"./YAxisTicks-DZkZF2Yk.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B4UOk3He.js";import"./ChartDataLabel-Bfs3kuUi.js";import"./useOnClickInternal-N4U1Txvh.js";import"./react-content-loader.es-hGvd5CYk.js";import"./useIsRTL-D-Mna98_.js";import"./useLongestYAxisLabel-CNUk002a.js";import"./ComposedChart-DQJUtn0C.js";import"./Line-CYUfmKuZ.js";import"./Scatter-CxxvpdmZ.js";import"./index-BrYteilm.js";import"./index-D7Dx9M9g.js";import"./Placeholder-BGZ-8E_7.js";import"./index-Dg87lV_j.js";const $=`# @ui5/webcomponents-react-charts

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
`;function E(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:$.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(E,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:T}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Ft(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Ft as default};
