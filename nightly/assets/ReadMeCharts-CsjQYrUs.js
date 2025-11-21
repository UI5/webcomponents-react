import{r as i,j as t,T as l}from"./iframe-CHtLWowq.js";import{useMDXComponents as p}from"./index-feVj8Ixc.js";import{M as u,a as h,m as f}from"./blocks-nN5rw7aP.js";import"./Tag-C6iX9S_m.js";import"./index-ByEvImQf.js";import{F as d}from"./CommandsAndQueries-DR5czvWY.js";import"./copy-DQeKak9d.js";import{T as b}from"./TableOfContent-CpbGcE6Y.js";import{C}from"./index-CfeH68sc.js";import{D}from"./BarChart.stories-DZHdzOzf.js";import{D as y}from"./BulletChart.stories-DiGNsFGa.js";import{D as g}from"./ColumnChart.stories-Bk7TPQxu.js";import{D as v}from"./ColumnChartWithTrend.stories-BliCGWNK.js";import{D as x}from"./ComposedChart.stories-BgYS3jPS.js";import{D as j}from"./DonutChart.stories-v5kiAYIG.js";import{D as w}from"./LineChart.stories-Ce0KYbcA.js";import{D as R}from"./PieChart.stories-D76DUAGX.js";import{D as I}from"./RadarChart.stories-qjjfuN7I.js";import{D as S}from"./RadialChart.stories-CtuXDs1t.js";import{D as T}from"./ScatterChart.stories-C-JMm64M.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CgT5QDDH.js";import"./sys-enter-2-X-uLXTXK.js";import"./alert-BD_DwGQA.js";import"./index-CDqXh-7y.js";import"./index-CuuHGpOq.js";import"./index-BgmENQvG.js";import"./Link-No0hza1O.js";import"./index-CMG_lNnl.js";import"./index-XFju5FGb.js";import"./index-D94_Q-PW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DZJl74Y9.js";import"./addCustomCSSWithScoping-CagFc4YE.js";import"./index-Bf7Ep3_S.js";import"./Carousel-BWsnawKc.js";import"./ScrollEnablement-ye8Tkvh6.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C6s4Zg2G.js";import"./slim-arrow-left-qxX6cyMU.js";import"./DemoProps-B7THx9nm.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BCdsb0_Y.js";import"./ChartContainer-C5p8wPHf.js";import"./index-WMmfi-ne.js";import"./useCancelAnimationFallback-CShexLgX.js";import"./YAxisTicks-8bJUvpiN.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-FYH19nXq.js";import"./ChartDataLabel-B8ahd0it.js";import"./useOnClickInternal-Bi8ERMSg.js";import"./react-content-loader.es-BN6YuSW8.js";import"./useIsRTL-Cjk4hS4a.js";import"./useLongestYAxisLabel-DE9xA1Yp.js";import"./ComposedChart-Bwyexs2N.js";import"./Line-BizaZ5ak.js";import"./Scatter-DAA9SnLJ.js";import"./index-6WoVD_YO.js";import"./index-MFDbIklY.js";import"./Placeholder-6k_bOmY_.js";import"./index-BP6iVs_J.js";const $=`# @ui5/webcomponents-react-charts

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
