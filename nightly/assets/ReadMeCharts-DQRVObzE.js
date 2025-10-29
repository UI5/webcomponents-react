import{r as i,j as t,T as l}from"./iframe-C1nqIrP9.js";import{useMDXComponents as p}from"./index-rFzs5Is7.js";import{M as u,a as h,m as f}from"./blocks-CkwZnBbM.js";import"./Tag-BljHH2ny.js";import"./index-CYNCR5qY.js";import{F as d}from"./CommandsAndQueries-D6-GYIyC.js";import"./copy-DSaYeTfs.js";import{T as b}from"./TableOfContent-B3QrgLEN.js";import{C}from"./index-BoNWnC3_.js";import{D}from"./BarChart.stories-3jDLnx0k.js";import{D as y}from"./BulletChart.stories-hPplYpXH.js";import{D as g}from"./ColumnChart.stories-D_vs-ZEm.js";import{D as v}from"./ColumnChartWithTrend.stories-D4nhDI2E.js";import{D as x}from"./ComposedChart.stories-D2sdfXB_.js";import{D as j}from"./DonutChart.stories-CGIYsJ-i.js";import{D as w}from"./LineChart.stories-BBR6kMdU.js";import{D as R}from"./PieChart.stories-BfjfzEJt.js";import{D as I}from"./RadarChart.stories-veXxw1z2.js";import{D as S}from"./RadialChart.stories-B4r-_WNS.js";import{D as T}from"./ScatterChart.stories-BiCFw77B.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BrOplxTY.js";import"./sys-enter-2-pukb5ZDW.js";import"./alert-DP5_e-py.js";import"./index-DJt8uYMe.js";import"./index-BaOK2woW.js";import"./index-Dr-3VGmd.js";import"./Link-BNKugdyP.js";import"./index-DKOFmGpQ.js";import"./index-BIr8DdOC.js";import"./index-SO3IILH_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CASN5sm0.js";import"./addCustomCSSWithScoping-C0k6xtW8.js";import"./index-BswWmSbc.js";import"./Carousel-C1QXzGpU.js";import"./ScrollEnablement-BIY6wVPD.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CxeQqrwv.js";import"./slim-arrow-left-BKo80EmR.js";import"./DemoProps-C0-x7bZa.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-LFJznEoK.js";import"./ChartContainer-_SbCWHKJ.js";import"./index-D-OYWN8_.js";import"./useCancelAnimationFallback-DG2RN2cR.js";import"./YAxisTicks-B0kaElRx.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DG-_cKmh.js";import"./ChartDataLabel-DG48yeRu.js";import"./useOnClickInternal-COj-DlOV.js";import"./react-content-loader.es-FETqPcA1.js";import"./useIsRTL-2dKeNAYY.js";import"./useLongestYAxisLabel-B7D_SoAU.js";import"./ComposedChart-BvWjeqU2.js";import"./Line-oVQOYxYp.js";import"./Scatter-CqqCE1eP.js";import"./index-BAtCyqya.js";import"./index-CBhgokYr.js";import"./Placeholder-Be0mgi7y.js";import"./index-BM0JBRpH.js";const $=`# @ui5/webcomponents-react-charts

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
