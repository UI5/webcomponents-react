import{r as i,j as t,T as l}from"./iframe-BdLp08tI.js";import{useMDXComponents as p}from"./index-L7M025bj.js";import{M as u,a as h,m as f}from"./blocks-BcH5lj54.js";import"./Tag-BYLKYo9E.js";import"./index-C9cC8h2E.js";import{F as d}from"./CommandsAndQueries-A8ohCY01.js";import"./copy-CAz8pLUN.js";import{T as b}from"./TableOfContent-BpoRcaPd.js";import{C}from"./index-D18Qy4zF.js";import{D}from"./BarChart.stories-BGkYJKtr.js";import{D as y}from"./BulletChart.stories-ClETHZZb.js";import{D as g}from"./ColumnChart.stories-CS7Asn63.js";import{D as v}from"./ColumnChartWithTrend.stories-EZOHZW37.js";import{D as x}from"./ComposedChart.stories-nVvxpEF4.js";import{D as j}from"./DonutChart.stories-CjFi96Wc.js";import{D as w}from"./LineChart.stories-DDz4BcnS.js";import{D as R}from"./PieChart.stories-BhXp-dVk.js";import{D as I}from"./RadarChart.stories-Dum2OaNK.js";import{D as S}from"./RadialChart.stories-BmCK5Uvc.js";import{D as T}from"./ScatterChart.stories-DDFWPRci.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BztpBEmn.js";import"./sys-enter-2-B36Zfbw2.js";import"./alert-YtyMWuog.js";import"./index-DgCb8EoK.js";import"./index-6N8J-kdE.js";import"./index-bbxcO9wp.js";import"./Link-PkVO0OYZ.js";import"./index-Bq5n3ghu.js";import"./index-vBihh2Vl.js";import"./index-BjKyj7T0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oSO4QDvk.js";import"./addCustomCSSWithScoping-D7d3eFNt.js";import"./index-DEh5uPtQ.js";import"./Carousel-f-71Ik0f.js";import"./ScrollEnablement-DKU4KjEY.js";import"./animate-JylhYHXj.js";import"./AnimationMode-IweRu35F.js";import"./slim-arrow-left-CGR--ovj.js";import"./DemoProps-DoRu7JJM.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DEZuYm8I.js";import"./ChartContainer-BUT02Vqu.js";import"./index-BJsU8vuH.js";import"./useCancelAnimationFallback-BWFVB-0L.js";import"./YAxisTicks-Dpeweo6_.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CbgidGIb.js";import"./ChartDataLabel-G10NP-Tj.js";import"./useOnClickInternal-C8WKLUUL.js";import"./react-content-loader.es-Bb1F-RLt.js";import"./useIsRTL-C_VbuiKz.js";import"./useLongestYAxisLabel-CCzjhIZq.js";import"./ComposedChart-Dj4tdm8A.js";import"./Line-CbCU12NN.js";import"./Scatter-Bpiknfk_.js";import"./index-B8gl7Wnt.js";import"./index-YTuvIjoT.js";import"./Placeholder-yWYUgn9Z.js";import"./index-DyxohXgo.js";const $=`# @ui5/webcomponents-react-charts

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
