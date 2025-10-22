import{r as i,j as t,T as l}from"./iframe-Cs5gvioi.js";import{useMDXComponents as p}from"./index-BtKDOpat.js";import{M as u,a as h,k as f}from"./blocks-BcK5AE3G.js";import"./Tag-D4RJrwN-.js";import"./index-CiQvF52b.js";import{F as d}from"./CommandsAndQueries-BdMbFe6n.js";import"./copy-DKGYESSv.js";import{T as b}from"./TableOfContent-QYKXWyPB.js";import{C}from"./index-Dk2U4UIo.js";import{D}from"./BarChart.stories-BrhXP5JP.js";import{D as y}from"./BulletChart.stories-Bx72Ohsv.js";import{D as g}from"./ColumnChart.stories-BN6z5IE8.js";import{D as v}from"./ColumnChartWithTrend.stories-HWq7OLX7.js";import{D as x}from"./ComposedChart.stories-I13edDOs.js";import{D as j}from"./DonutChart.stories-D7NS9huM.js";import{D as w}from"./LineChart.stories-DFdiKl_K.js";import{D as R}from"./PieChart.stories-Hj_YG2pQ.js";import{D as I}from"./RadarChart.stories-h7QzPLDf.js";import{D as S}from"./RadialChart.stories-Bdktp4PY.js";import{D as T}from"./ScatterChart.stories-C96-0t-r.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C2H5qqQk.js";import"./sys-enter-2-DnVNaHmP.js";import"./alert-Bc-gjyRb.js";import"./index-BPDq8Cwl.js";import"./index-BKjvzOpn.js";import"./index-Ccaj5Czc.js";import"./Link-EUC5ZRxP.js";import"./index-D8h8jAY6.js";import"./index-DYp5aNvA.js";import"./index-oQYl8gvD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D_r_w5Dj.js";import"./addCustomCSSWithScoping-CRaSmViC.js";import"./index-BxdMkIQq.js";import"./Carousel-z8t6zDuX.js";import"./ScrollEnablement-DFH5AJVi.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D24z19ho.js";import"./slim-arrow-left-BcrCDfYk.js";import"./DemoProps-C32_wICV.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Bml1AhQL.js";import"./ChartContainer-BWLsTIoa.js";import"./index-D5YUVenJ.js";import"./useCancelAnimationFallback-kpHt80A8.js";import"./YAxisTicks-CpHlCUAc.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DqgoaoRy.js";import"./ChartDataLabel-YcqTr8pQ.js";import"./useOnClickInternal-ZxmlBOwl.js";import"./react-content-loader.es-Ce3Bziwl.js";import"./useIsRTL-DqvqHW8h.js";import"./useLongestYAxisLabel-C8Kv1mEP.js";import"./ComposedChart-D9M_az7Z.js";import"./Line-CGm9O_VM.js";import"./Scatter-c47kQ_o3.js";import"./index-DQW7DUIR.js";import"./index-SG062klM.js";import"./Placeholder-ByUXnVlN.js";import"./index-BtbAtDAC.js";const $=`# @ui5/webcomponents-react-charts

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
