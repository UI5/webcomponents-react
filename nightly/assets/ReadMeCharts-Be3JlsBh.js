import{r as i,j as t,O as l}from"./iframe-D9fHiNXF.js";import{useMDXComponents as p}from"./index-DRx499Oz.js";import{M as u,a as h,n as f}from"./blocks-BHC48FnS.js";import"./Tag-D1pdGQFQ.js";import"./index-CsAQ2Eng.js";import{F as d}from"./CommandsAndQueries-CDyFXIce.js";import"./copy-FG9bHXhV.js";import{T as b}from"./TableOfContent-BNFLd8cv.js";import{C}from"./index-CUOppFU2.js";import{D}from"./BarChart.stories-BYKZN4N7.js";import{D as y}from"./BulletChart.stories-De-92n8_.js";import{D as g}from"./ColumnChart.stories-B2M0apOh.js";import{D as v}from"./ColumnChartWithTrend.stories-D3w6vthh.js";import{D as x}from"./ComposedChart.stories-BR9DYy1T.js";import{D as j}from"./DonutChart.stories-KSK2dcQo.js";import{D as w}from"./LineChart.stories-5RbkMvSA.js";import{D as R}from"./PieChart.stories-CS9gFO5c.js";import{D as I}from"./RadarChart.stories-DVJpazOR.js";import{D as S}from"./RadialChart.stories-DjODIXST.js";import{D as $}from"./ScatterChart.stories-CfHEIZ-h.js";import"./preload-helper-PPVm8Dsz.js";import"./information-wNu5DDkV.js";import"./sys-enter-2-NNUjaus9.js";import"./alert-DnsJPzcv.js";import"./index-CJoLxfl_.js";import"./index-BYfLRpIA.js";import"./index-79vX-IjV.js";import"./Link-UWQK2ZBb.js";import"./index-D9W7JLGJ.js";import"./index-C7nfqaAP.js";import"./index-DN7QVpUQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOEmcw1X.js";import"./addCustomCSSWithScoping-QhFRL0Bb.js";import"./index-BVc7ik8a.js";import"./Carousel-CP-v20JR.js";import"./ScrollEnablement-COS0Rc-8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BW96HzwB.js";import"./slim-arrow-left-CvvWO3rL.js";import"./DemoProps-krfuUyya.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Cf4pGQmy.js";import"./ChartContainer-BJoRRUT_.js";import"./index-C-gG0abr.js";import"./useCancelAnimationFallback-DBUvP1SB.js";import"./YAxisTicks-BtNH6-QN.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CxA0m0gf.js";import"./ChartDataLabel-oBsJEkmr.js";import"./useOnClickInternal-CocozGgv.js";import"./react-content-loader.es-BiijIT4A.js";import"./useIsRTL-ByZPFV9T.js";import"./useLongestYAxisLabel-DSClFqFs.js";import"./ComposedChart-DM5BMqZP.js";import"./Line-DPTzo9dR.js";import"./Scatter-2EQmalu4.js";import"./index-DQC4M_lj.js";import"./index--7-yQDzp.js";import"./Placeholder-B-dvpotG.js";import"./index-D61EXjcN.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
