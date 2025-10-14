import{r as i,j as t,T as l}from"./iframe-CEhnIlu5.js";import{useMDXComponents as p}from"./index-DvMCH85E.js";import{M as u,a as h,k as f}from"./blocks-CzCRTnDN.js";import"./Tag-B0tBXTma.js";import"./index-BxbrXhSf.js";import{F as d}from"./CommandsAndQueries-COpLwEKt.js";import"./copy-DW0z69Dv.js";import{T as b}from"./TableOfContent-BErr8OE9.js";import{C}from"./index-Cr4xgBq0.js";import{D}from"./BarChart.stories-8bMhqh8_.js";import{D as y}from"./BulletChart.stories-BTo8qbX3.js";import{D as g}from"./ColumnChart.stories-D7CkFl3N.js";import{D as v}from"./ColumnChartWithTrend.stories-Bu1wl7aW.js";import{D as x}from"./ComposedChart.stories-DnQQALak.js";import{D as j}from"./DonutChart.stories-BJI11Kt7.js";import{D as w}from"./LineChart.stories-De3erzP9.js";import{D as R}from"./PieChart.stories-CWGHQxsb.js";import{D as I}from"./RadarChart.stories-DE5WQAdU.js";import{D as S}from"./RadialChart.stories-wqxcKDUc.js";import{D as T}from"./ScatterChart.stories-D3zSi4s4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-GsMzttNM.js";import"./sys-enter-2-CRQG3vkj.js";import"./alert-C-SQT9wT.js";import"./index-8phGoz0x.js";import"./index-XtQvC7Ne.js";import"./index-djaoMR7U.js";import"./Link-Dx0jxQut.js";import"./index-BJ3Bv_1U.js";import"./index-Bjvgvr9c.js";import"./index-CmP_HbAe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8LeJtOc.js";import"./addCustomCSSWithScoping-jvTBykEZ.js";import"./index-Dgl42qdE.js";import"./Carousel-JvoCA6lh.js";import"./ScrollEnablement-DfRZg6Dv.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BlDJNNwV.js";import"./slim-arrow-left-DxdVpbEU.js";import"./DemoProps-Dr61cH9P.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BhezwXf0.js";import"./ChartContainer-DRwdgNKG.js";import"./index-BmZH7-5P.js";import"./useCancelAnimationFallback-BxZiFc0X.js";import"./YAxisTicks-CfnG4g_8.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CWVz3zzu.js";import"./ChartDataLabel-DFohRLtH.js";import"./useOnClickInternal-DUnFU6op.js";import"./react-content-loader.es-t3nqm2bo.js";import"./useIsRTL-BOclZ2jB.js";import"./useLongestYAxisLabel-CiXXcdxa.js";import"./ComposedChart-CcfqjKF7.js";import"./Line-sWNAzEEe.js";import"./Scatter-CIeTS-Lc.js";import"./index-rkmyNMuk.js";import"./index-DEda4Ome.js";import"./Placeholder-BjkoRRQz.js";import"./index-czJVq0Yl.js";const $=`# @ui5/webcomponents-react-charts

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
