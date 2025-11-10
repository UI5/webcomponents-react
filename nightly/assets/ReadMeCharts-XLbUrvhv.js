import{r as i,j as t,T as l}from"./iframe-d6kFjKmB.js";import{useMDXComponents as p}from"./index-C_GtGqSz.js";import{M as u,a as h,m as f}from"./blocks-cydmgMgt.js";import"./Tag-pDj71kKq.js";import"./index-Df2R9LIn.js";import{F as d}from"./CommandsAndQueries-CN1OL-NC.js";import"./copy-10s1L_tU.js";import{T as b}from"./TableOfContent-D6ljph8i.js";import{C}from"./index-CMnEhMWN.js";import{D}from"./BarChart.stories-BE3nNUIT.js";import{D as y}from"./BulletChart.stories-C1-ylPCp.js";import{D as g}from"./ColumnChart.stories-BuPol2SZ.js";import{D as v}from"./ColumnChartWithTrend.stories-BE3MSHtc.js";import{D as x}from"./ComposedChart.stories-CFBRk_t0.js";import{D as j}from"./DonutChart.stories-BhIadb0g.js";import{D as w}from"./LineChart.stories-BKPXuS0D.js";import{D as R}from"./PieChart.stories-B5NAkUH6.js";import{D as I}from"./RadarChart.stories-4wi91G_K.js";import{D as S}from"./RadialChart.stories-BPiRza1u.js";import{D as T}from"./ScatterChart.stories-CTYMHr0Q.js";import"./preload-helper-PPVm8Dsz.js";import"./information-U09OVfZR.js";import"./sys-enter-2-Iyx_uxbM.js";import"./alert-BF6Rf2Y5.js";import"./index-C-SdRuQi.js";import"./index-Ct6Sh5v4.js";import"./index-CPMalJUe.js";import"./Link-sWUxxSV7.js";import"./index-CYwfFviQ.js";import"./index-Bn3tqYuU.js";import"./index-Cmh3YBGn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cp8_wMdK.js";import"./addCustomCSSWithScoping-CykojlcF.js";import"./index-ByGA7EJm.js";import"./Carousel-DyHPEovj.js";import"./ScrollEnablement-DL7VbC7Z.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Bx0d1YIK.js";import"./slim-arrow-left-Dx6t4IcT.js";import"./DemoProps-BR9T2FP2.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-evRUxL7K.js";import"./ChartContainer-BvQn4QBt.js";import"./index-BwoHhzeW.js";import"./useCancelAnimationFallback-Bm3C56Yv.js";import"./YAxisTicks-Qosu_weS.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BqlV3w5X.js";import"./ChartDataLabel-Dd0HbPCZ.js";import"./useOnClickInternal-Cq0Y2EJ-.js";import"./react-content-loader.es-DKHv_qon.js";import"./useIsRTL-CQU0f-9V.js";import"./useLongestYAxisLabel-BRopamO9.js";import"./ComposedChart-D7iqhTSJ.js";import"./Line-BavZtA_8.js";import"./Scatter-UCKRex8M.js";import"./index-CHQBce2y.js";import"./index-BXRoP592.js";import"./Placeholder-Z3x79OHw.js";import"./index-DuJOqpah.js";const $=`# @ui5/webcomponents-react-charts

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
