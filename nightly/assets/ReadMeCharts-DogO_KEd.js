import{r as i,j as t,T as l}from"./iframe-CYi73OmP.js";import{useMDXComponents as p}from"./index-Dt90fsaF.js";import{M as u,a as h,k as f}from"./blocks-vDcvm_c-.js";import"./Tag-CriFgWmH.js";import"./index-BBMPc3L0.js";import{F as d}from"./CommandsAndQueries-BrIX07He.js";import"./copy-LPsKpGQA.js";import{T as b}from"./TableOfContent-BqeT4EQY.js";import{C}from"./index-Dm_mWB-3.js";import{D}from"./BarChart.stories-BYeI5uKO.js";import{D as y}from"./BulletChart.stories-ADE4fsyJ.js";import{D as g}from"./ColumnChart.stories-DXz3lZOf.js";import{D as v}from"./ColumnChartWithTrend.stories-Dyyy-KiB.js";import{D as x}from"./ComposedChart.stories-BNGsyDWW.js";import{D as j}from"./DonutChart.stories-xd4EPKcB.js";import{D as w}from"./LineChart.stories-bVR0ZmGW.js";import{D as R}from"./PieChart.stories-Cs8vvzTk.js";import{D as I}from"./RadarChart.stories-BruZoe82.js";import{D as S}from"./RadialChart.stories-ua_q1Joj.js";import{D as T}from"./ScatterChart.stories-BlMCsjDQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C2FlC8X_.js";import"./sys-enter-2-DuV3U0aL.js";import"./alert-CP7qxv0u.js";import"./index-HYZOU_1D.js";import"./index-CZYlbhmv.js";import"./index-C4wC4Ofz.js";import"./Link-CjT6BL8J.js";import"./index-BbTynw39.js";import"./index-KAzf1qB6.js";import"./index-BaDKwi6p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWMkLVHm.js";import"./addCustomCSSWithScoping-COZN1IbI.js";import"./index-BTCXnKhc.js";import"./Carousel-SYmjnLA-.js";import"./ScrollEnablement-CMSiyGPr.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CHDxvKuv.js";import"./slim-arrow-left-CxbU3SNd.js";import"./DemoProps-_-PWbTLh.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-9ttaUxrz.js";import"./ChartContainer-DsRn5LzH.js";import"./index-DzRfQBko.js";import"./useCancelAnimationFallback-BohP7Hcb.js";import"./YAxisTicks-B_YUhhaz.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DPzJLujA.js";import"./ChartDataLabel-DVXekQv2.js";import"./useOnClickInternal-DP3Usb8o.js";import"./react-content-loader.es-C1UXEfrs.js";import"./useIsRTL-CF7dzU0W.js";import"./useLongestYAxisLabel-DwHNDxd3.js";import"./ComposedChart-DC-Cjvgq.js";import"./Line-DGF7yL3i.js";import"./Scatter-DQz2JDAJ.js";import"./index-Bm1fzucw.js";import"./index-jkaZmbn8.js";import"./Placeholder-BsfQFOGi.js";import"./index-DXNGtBTL.js";const $=`# @ui5/webcomponents-react-charts

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
