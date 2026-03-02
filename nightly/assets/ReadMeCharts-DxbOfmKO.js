import{r as i,j as t,O as l}from"./iframe-CajBfwIr.js";import{useMDXComponents as p}from"./index-C7bmLKAS.js";import{M as u,a as h,n as f}from"./blocks-DZo8LX6f.js";import"./Tag-BvqWkn4s.js";import"./index-EXDQ2t-0.js";import{F as d}from"./CommandsAndQueries-BsF9_wDx.js";import"./copy-n5aHnb96.js";import{T as b}from"./TableOfContent-DoaHZ2fF.js";import{C}from"./index-KXerXhIk.js";import{D}from"./BarChart.stories-LgG83Cpr.js";import{D as y}from"./BulletChart.stories-80nyRV3M.js";import{D as g}from"./ColumnChart.stories-D98KvFcY.js";import{D as v}from"./ColumnChartWithTrend.stories-Cqj_FLbS.js";import{D as x}from"./ComposedChart.stories-B7gEHe3K.js";import{D as j}from"./DonutChart.stories-CdB9rafR.js";import{D as w}from"./LineChart.stories-BBGAwo9U.js";import{D as R}from"./PieChart.stories-Bi3uc5UW.js";import{D as I}from"./RadarChart.stories-BkqD2ffa.js";import{D as S}from"./RadialChart.stories-DFCZeT15.js";import{D as $}from"./ScatterChart.stories-BMr4Yg_h.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CcxBY03f.js";import"./sys-enter-2-tMwqxxGo.js";import"./alert-BiYc5KCB.js";import"./index-CBQApe_5.js";import"./index-els7k0UY.js";import"./index-sgQ15IT-.js";import"./Link-CQWL02fV.js";import"./index-Dqx8EP_w.js";import"./index-BAV33GIB.js";import"./index-BRmuq6Qh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vf8J9lvz.js";import"./addCustomCSSWithScoping-DTh894zV.js";import"./index-Bn2EsG13.js";import"./Carousel-Bb3VZRxv.js";import"./ScrollEnablement-DdM6D9rL.js";import"./animate-JylhYHXj.js";import"./AnimationMode-OJIq6BOn.js";import"./slim-arrow-left-BNgDP2dz.js";import"./DemoProps-C2eqvKDS.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BJPoD4ja.js";import"./ChartContainer-sDFO1odm.js";import"./index-CAXhGnio.js";import"./useCancelAnimationFallback-DnnsnnYb.js";import"./YAxisTicks-Q4ONe729.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-w3LgxDoD.js";import"./ChartDataLabel-D-_9lRnL.js";import"./useOnClickInternal-ld8eLodi.js";import"./react-content-loader.es-C2Sqxso3.js";import"./useIsRTL-BJg_JlUg.js";import"./useLongestYAxisLabel-DLhaPqvW.js";import"./ComposedChart-OBErH2Eb.js";import"./Line-9KRfHDdC.js";import"./Scatter-XU9Rm5tG.js";import"./index-CcWTcQzG.js";import"./index-gnfxd4H0.js";import"./Placeholder-BLCP9ISF.js";import"./index-qA1jAB0S.js";const E=`# @ui5/webcomponents-react-charts

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
