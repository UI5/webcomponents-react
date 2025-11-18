import{r as i,j as t,T as l}from"./iframe-C_ZjSpvw.js";import{useMDXComponents as p}from"./index-D99mDNJl.js";import{M as u,a as h,m as f}from"./blocks-DhOgu6aS.js";import"./Tag-BTyw-Q9o.js";import"./index-CFaSARe7.js";import{F as d}from"./CommandsAndQueries-DoIIg28U.js";import"./copy-o8vYo4aG.js";import{T as b}from"./TableOfContent-r9ezFAWt.js";import{C}from"./index-xaaPrCgH.js";import{D}from"./BarChart.stories-NzKt3VUJ.js";import{D as y}from"./BulletChart.stories-DPLZXXkY.js";import{D as g}from"./ColumnChart.stories-B-rf1jxS.js";import{D as v}from"./ColumnChartWithTrend.stories-BT4m6kYb.js";import{D as x}from"./ComposedChart.stories-D3ssqswd.js";import{D as j}from"./DonutChart.stories-Cohx6qKr.js";import{D as w}from"./LineChart.stories-QbX4VmjN.js";import{D as R}from"./PieChart.stories-BFpEpCys.js";import{D as I}from"./RadarChart.stories-B8zO8Egp.js";import{D as S}from"./RadialChart.stories-CB7Db28x.js";import{D as T}from"./ScatterChart.stories-CsesDV0s.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DjWFOZk0.js";import"./sys-enter-2-Bcyd_2Ym.js";import"./alert-D6bEf6aa.js";import"./index-BT7ySl7f.js";import"./index-Cj8N_CMD.js";import"./index-uA7KkxCs.js";import"./Link-DjlLuVoY.js";import"./index-B7Kpc4-r.js";import"./index-Arj44yrL.js";import"./index-xyj4veU8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dvgs_TOk.js";import"./addCustomCSSWithScoping-Bja_IMOg.js";import"./index-CQkucwsg.js";import"./Carousel-I_69uNSK.js";import"./ScrollEnablement-W5Wf5RR3.js";import"./animate-JylhYHXj.js";import"./AnimationMode-s4hrCQtY.js";import"./slim-arrow-left-CTNSz_lE.js";import"./DemoProps-CMFybHkt.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D2Wv6usQ.js";import"./ChartContainer-CZzYQ7r0.js";import"./index-D1q_umKP.js";import"./useCancelAnimationFallback-CIMGA97a.js";import"./YAxisTicks-7IY3vsQC.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-hrvGnHrD.js";import"./ChartDataLabel-38YY9hlw.js";import"./useOnClickInternal-ClgzdMrc.js";import"./react-content-loader.es-DNSjf08T.js";import"./useIsRTL-H9_uEIIc.js";import"./useLongestYAxisLabel-D8rPV_9U.js";import"./ComposedChart-_mJSnJuy.js";import"./Line-4C_dlLxG.js";import"./Scatter-BhcGSWqP.js";import"./index-DGKT9fjF.js";import"./index-CEFcM3SP.js";import"./Placeholder-RKVboB7d.js";import"./index-V4qwHhxM.js";const $=`# @ui5/webcomponents-react-charts

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
