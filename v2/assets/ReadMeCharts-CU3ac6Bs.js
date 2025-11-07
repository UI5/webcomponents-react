import{r as i,j as t,T as l}from"./iframe-Cx-m_Nf0.js";import{useMDXComponents as p}from"./index-Danm_hzB.js";import{M as u,a as h,m as f}from"./blocks-BeOH24VU.js";import"./Tag-CULcfvQz.js";import"./index-JZ9249rN.js";import{F as d}from"./CommandsAndQueries-wiGvioaD.js";import"./copy-saj_hA78.js";import{T as b}from"./TableOfContent-Vtgb2XiV.js";import{C}from"./index-Bpson8EW.js";import{D}from"./BarChart.stories-C1rs2NfY.js";import{D as y}from"./BulletChart.stories-o37ABwga.js";import{D as g}from"./ColumnChart.stories-CQnrNhZz.js";import{D as v}from"./ColumnChartWithTrend.stories-Cz86ely3.js";import{D as x}from"./ComposedChart.stories-CYUMjUdb.js";import{D as j}from"./DonutChart.stories-BJ2_sI1g.js";import{D as w}from"./LineChart.stories-BIl_yruD.js";import{D as R}from"./PieChart.stories-D_AN10In.js";import{D as I}from"./RadarChart.stories-ab7aCArw.js";import{D as S}from"./RadialChart.stories-DR5-FlI-.js";import{D as T}from"./ScatterChart.stories-D86VZhCF.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CEQNZlPN.js";import"./sys-enter-2-AhkD0MnF.js";import"./alert-Bji-b9H2.js";import"./index-BkCtcCNV.js";import"./index-BRPuZYCF.js";import"./index-D-dAoXo8.js";import"./Link-CR1SnY-5.js";import"./index-D0XJTq9Q.js";import"./index-B10MFmnl.js";import"./index-bcKxXY3o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Hev4WvRm.js";import"./addCustomCSSWithScoping-CdsdDkDi.js";import"./index-DROJnCko.js";import"./Carousel-BNuWbMJo.js";import"./ScrollEnablement-BylCXS9j.js";import"./animate-JylhYHXj.js";import"./AnimationMode-YtJ8fws2.js";import"./slim-arrow-left-CwwpyeEk.js";import"./DemoProps-BkilGQtc.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Db6n-nCX.js";import"./ChartContainer-D3LC-nVg.js";import"./index-Cp-3_oQg.js";import"./useCancelAnimationFallback-y8IGyQ34.js";import"./YAxisTicks-CblHrmHM.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B9UBBvN2.js";import"./ChartDataLabel-DL3sLeiX.js";import"./useOnClickInternal-BVPqSVB8.js";import"./react-content-loader.es-sSTdN663.js";import"./useIsRTL-BF52L7PE.js";import"./useLongestYAxisLabel-5CtPePH-.js";import"./ComposedChart-DM93v9gV.js";import"./Line-Crf4PnZO.js";import"./Scatter-AmlMSwxI.js";import"./index-CDWHweua.js";import"./index-DmPpZry8.js";import"./Placeholder-mvrf0Kln.js";import"./index-DyBLjvRL.js";const $=`# @ui5/webcomponents-react-charts

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
