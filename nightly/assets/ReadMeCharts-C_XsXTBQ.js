import{r as i,j as t,T as l}from"./iframe-DHodyxHg.js";import{useMDXComponents as p}from"./index-BN78HojQ.js";import{M as u,a as h,k as f}from"./blocks-DRbngUD5.js";import"./Tag-AoT1Wzdr.js";import"./index-C_UZWXPq.js";import{F as d}from"./CommandsAndQueries-BJoNcE_T.js";import"./copy-HtbMTlWB.js";import{T as b}from"./TableOfContent-kDI4jFOc.js";import{C}from"./index-C0g3bHEz.js";import{D}from"./BarChart.stories-C8BRPy0S.js";import{D as y}from"./BulletChart.stories-BmSh703F.js";import{D as g}from"./ColumnChart.stories-SVao0olR.js";import{D as v}from"./ColumnChartWithTrend.stories-NRnwk_3r.js";import{D as x}from"./ComposedChart.stories-Cpqq36aA.js";import{D as j}from"./DonutChart.stories-DBVFmGn-.js";import{D as w}from"./LineChart.stories-CMjDgR2D.js";import{D as R}from"./PieChart.stories-2Men-onL.js";import{D as I}from"./RadarChart.stories-Bw7kN0FN.js";import{D as S}from"./RadialChart.stories-C8xCyW0T.js";import{D as T}from"./ScatterChart.stories-B-Xp8ZEU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CikfZyec.js";import"./sys-enter-2-CGw1AdWq.js";import"./alert-fS8iZOwW.js";import"./index-LizrXBCk.js";import"./index-H_vNaU3m.js";import"./index-CzYnO6dI.js";import"./Link-DVjUQMmu.js";import"./index-8C_wghAv.js";import"./index-CuoqTBPK.js";import"./index-Bf66SqZa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D26g_6Hi.js";import"./addCustomCSSWithScoping-BBYARKEG.js";import"./index-Cbt6pGSR.js";import"./Carousel--4yprkkt.js";import"./ScrollEnablement-QqZ8MTp1.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C_0_Bqb8.js";import"./slim-arrow-left-D75zhULd.js";import"./DemoProps-D_yDfnhL.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Byc-cmZu.js";import"./ChartContainer-DwFGuxln.js";import"./index-H_BorQOy.js";import"./useCancelAnimationFallback-DErffHGE.js";import"./YAxisTicks-CRnly2Mz.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B-Unya4B.js";import"./ChartDataLabel-Bwo37Fjh.js";import"./useOnClickInternal-CrR2EyMO.js";import"./react-content-loader.es-Bf3-IwW9.js";import"./useIsRTL-D2F7gVSb.js";import"./useLongestYAxisLabel-DTOAy1Ah.js";import"./ComposedChart-CJ0Kapdm.js";import"./Line-D35A5Es7.js";import"./Scatter-YeRIEk4j.js";import"./index-BJfDqQii.js";import"./index-C8mMfm1Y.js";import"./Placeholder-DXna6rtI.js";import"./index-B6MryYIy.js";const $=`# @ui5/webcomponents-react-charts

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
