import{n as i,j as t,N as l}from"./iframe-C-8CikNF.js";import{useMDXComponents as p}from"./index-Cw4SbHnF.js";import{M as u,a as h,n as f}from"./blocks-BmssVOG3.js";import"./Tag-MEJh1Ko9.js";import"./index-hi0bZbmw.js";import"./CommandsAndQueries-CurTw3Lj.js";import"./copy-CzzG0WN_.js";import{T as d}from"./TableOfContent-DYiilLZq.js";import{F as b}from"./Footer-DRQAPrhO.js";import"./PageNotFound-5CESdk48.js";import{C}from"./index-bH04T6UT.js";import{D}from"./BarChart.stories-CF7uu6en.js";import{D as y}from"./BulletChart.stories-DCYLfgs-.js";import{D as g}from"./ColumnChart.stories-DG3jDt3x.js";import{D as v}from"./ColumnChartWithTrend.stories-BWAQU1g8.js";import{D as x}from"./ComposedChart.stories-D2JmY14p.js";import{D as j}from"./DonutChart.stories-DfA-KoXH.js";import{D as w}from"./LineChart.stories-BMVZnPHL.js";import{D as R}from"./PieChart.stories-s1QfrKP9.js";import{D as I}from"./RadarChart.stories-CxQ9R0AS.js";import{D as S}from"./RadialChart.stories-0cLlAShi.js";import{D as $}from"./ScatterChart.stories-DaMWmLUQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-0aMtiy50.js";import"./sys-enter-2-grGMmfr8.js";import"./alert-sWw94Nn1.js";import"./Link-xVMMn3oU.js";import"./index-H3f20a9K.js";import"./index-BGM8gXjK.js";import"./index-02sMf1JQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEjyiyGF.js";import"./addCustomCSSWithScoping-iAIUxvTa.js";import"./index-DH3Cr8HB.js";import"./index-C39Oe1_-.js";import"./index-CaBNGx_8.js";import"./index-knQkJN_L.js";import"./Illustrations-2Vhs9c3z.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BrFZG57_.js";import"./ScrollEnablement-CUpc0mcF.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BRHhhCjk.js";import"./slim-arrow-left-DV1cbAjv.js";import"./DemoProps--tysfuSE.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-Cvzd7l6O.js";import"./ChartContainer-Mp4OU62L.js";import"./index-DcOtFncG.js";import"./useCancelAnimationFallback-Ditei84e.js";import"./YAxisTicks-DMVbtQqA.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ByhAvLV7.js";import"./ChartDataLabel-DG8G7l9S.js";import"./useOnClickInternal-B52EYQ2I.js";import"./react-content-loader.es-DgylVHNy.js";import"./useIsRTL-sTzpNQ4b.js";import"./useLongestYAxisLabel-1lLSl7gP.js";import"./ComposedChart-DmR_mp6A.js";import"./Line-DBXxW1EN.js";import"./Scatter-Bnf9Itw_.js";import"./index-D3BmBbzy.js";import"./index-DmiaFUbS.js";import"./Placeholder-DcqgboZc.js";import"./index-XVViuYr0.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),m=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const s=e.current;return s&&o.length&&(r.current=setInterval(()=>{a.current++,s.navigateTo(a.current%o.length)},5e3)),()=>{m()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{m()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function _t(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{_t as default};
