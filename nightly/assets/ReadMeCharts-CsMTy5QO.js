import{r as i,j as t,T as l}from"./iframe-CqyRxNKY.js";import{useMDXComponents as p}from"./index-CXuCYMlQ.js";import{M as u,a as h,n as f}from"./blocks-05z5mbmD.js";import"./Tag-DuSXABBC.js";import"./index-C2IzZWSs.js";import{F as d}from"./CommandsAndQueries-DLVKRV5D.js";import"./copy-B4Tt60gX.js";import{T as b}from"./TableOfContent-D9XYfqlc.js";import{C}from"./index-DGl_N_Ba.js";import{D}from"./BarChart.stories-D-rYyNF7.js";import{D as y}from"./BulletChart.stories-DKkt8DUN.js";import{D as g}from"./ColumnChart.stories-DBqiOdQ7.js";import{D as v}from"./ColumnChartWithTrend.stories-CjLZATMy.js";import{D as x}from"./ComposedChart.stories-_MkvZNC7.js";import{D as j}from"./DonutChart.stories-B6giIAS6.js";import{D as w}from"./LineChart.stories-BQeVjkl5.js";import{D as R}from"./PieChart.stories-CsHZX9Hc.js";import{D as I}from"./RadarChart.stories-C6W9SRj2.js";import{D as S}from"./RadialChart.stories-CUfj29AN.js";import{D as T}from"./ScatterChart.stories-Wym7wNKN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Ezgcqzkg.js";import"./sys-enter-2-5MMglnM6.js";import"./alert-BAouMQ7q.js";import"./index-H9dUlo5Q.js";import"./index-BseYaHXw.js";import"./index-4M_RVJJe.js";import"./Link-CXMFuXBh.js";import"./index-DzGBN3np.js";import"./index-CcSvXznG.js";import"./index-CwxFUtHh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bdq0yBwh.js";import"./addCustomCSSWithScoping-Bi_7urmM.js";import"./index-BymRtllO.js";import"./Carousel-BQd1jj9e.js";import"./ScrollEnablement-DWFfp1Ql.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B520dgRk.js";import"./slim-arrow-left-BLrjz3NC.js";import"./DemoProps-fIOYhJVe.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BTmeuesZ.js";import"./ChartContainer-BaL16T8c.js";import"./index-B3oIoIuT.js";import"./useCancelAnimationFallback-D5ly6C4j.js";import"./YAxisTicks-DQ0XSmRa.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-K_jK0Ekg.js";import"./ChartDataLabel-B5gKy45a.js";import"./useOnClickInternal-CPSnrl5E.js";import"./react-content-loader.es-CEvH_imB.js";import"./useIsRTL-CVxv5eSK.js";import"./useLongestYAxisLabel-CGFrOG6o.js";import"./ComposedChart-CvNuFFpk.js";import"./Line-D4-tAk2j.js";import"./Scatter-CD7vEa1x.js";import"./index-CD6NWh02.js";import"./index-CYpRsuQz.js";import"./Placeholder-BghPhkru.js";import"./index-B0jQ9UWT.js";const $=`# @ui5/webcomponents-react-charts

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
