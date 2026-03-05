import{q as i,j as t,Q as l}from"./iframe-JepDsySv.js";import{useMDXComponents as p}from"./index-BGpK8Gfn.js";import{M as u,a as h,n as f}from"./blocks-BbBU6U9u.js";import"./Tag-B5HHC3_D.js";import"./index-CgzvULcW.js";import"./CommandsAndQueries-BpbXUgFJ.js";import"./copy-D2Pke32f.js";import{T as d}from"./TableOfContent-DzhvbQtx.js";import{F as b}from"./Footer-DkGRGaaK.js";import"./PageNotFound-BYj9CuoF.js";import{C}from"./index-DIw_j1I7.js";import{D}from"./BarChart.stories-BgGWiUNO.js";import{D as y}from"./BulletChart.stories-BXRsqGFs.js";import{D as g}from"./ColumnChart.stories-BHvj2qLO.js";import{D as v}from"./ColumnChartWithTrend.stories-UAoxsHVk.js";import{D as x}from"./ComposedChart.stories-B1h-fnJh.js";import{D as j}from"./DonutChart.stories-BQc3WeHi.js";import{D as w}from"./LineChart.stories-CUGE3Mg7.js";import{D as R}from"./PieChart.stories-DHU3RMtQ.js";import{D as I}from"./RadarChart.stories-FkTnpfbh.js";import{D as S}from"./RadialChart.stories-vSQBxdkx.js";import{D as $}from"./ScatterChart.stories-ClMfGvsa.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DXY6cLV_.js";import"./sys-enter-2-e1zqJEbk.js";import"./alert-BXOPntd7.js";import"./Link-BLuv4AbX.js";import"./index-BKoJ8bur.js";import"./index-C220bubu.js";import"./index-CcxcRSha.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzfOud-0.js";import"./addCustomCSSWithScoping-f93Oozyz.js";import"./index-Bd6WgbUi.js";import"./index-0BxTwmFy.js";import"./index-CIXtBD0J.js";import"./index-8tSJZtFG.js";import"./Illustrations-sShT8n29.js";import"./i18n-defaults-C7ICj5-E.js";import"./Carousel-Bb-Su4dV.js";import"./ScrollEnablement-Bf0xODSv.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CXclprWx.js";import"./slim-arrow-left-RioVVEPh.js";import"./DemoProps-BuKU3M_X.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CAEftThE.js";import"./ChartContainer-BaGe5tcT.js";import"./index-Dd7JImE6.js";import"./useCancelAnimationFallback-XI5hTcvM.js";import"./YAxisTicks-Bwf8U3mY.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BrJIs6Ai.js";import"./ChartDataLabel-D2DycsnV.js";import"./useOnClickInternal-DCdf5iHk.js";import"./react-content-loader.es-BDjwwJjD.js";import"./useIsRTL-Cj9ds3Xk.js";import"./useLongestYAxisLabel-L3KEj0uW.js";import"./ComposedChart-CJZrzi0D.js";import"./Line-C9clCnt_.js";import"./Scatter-y3KbLZaI.js";import"./index-FgFmW8Fo.js";import"./index-Bungwgs1.js";import"./Placeholder-STDLby9D.js";import"./index-DiiP1G2I.js";const E=`# @ui5/webcomponents-react-charts

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
