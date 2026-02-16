import{r as i,j as t,O as l}from"./iframe-DD3khz8t.js";import{useMDXComponents as p}from"./index-CHFjnrWX.js";import{M as u,a as h,n as f}from"./blocks-ibeWpSZJ.js";import"./Tag-Ngk_8fKi.js";import"./index-BQH8_ZBk.js";import{F as d}from"./CommandsAndQueries-DsVeZAZ7.js";import"./copy-BSvcS0vC.js";import{T as b}from"./TableOfContent-Dp5_jY1c.js";import{C}from"./index-DhUlaCzH.js";import{D}from"./BarChart.stories-CdFVablV.js";import{D as y}from"./BulletChart.stories-SvCUZocI.js";import{D as g}from"./ColumnChart.stories-CD9PMkc1.js";import{D as v}from"./ColumnChartWithTrend.stories-Cxj-_F_y.js";import{D as x}from"./ComposedChart.stories-DYeXvFGP.js";import{D as j}from"./DonutChart.stories-eY659HKW.js";import{D as w}from"./LineChart.stories-ZaI8f48F.js";import{D as R}from"./PieChart.stories-GQqiOydn.js";import{D as I}from"./RadarChart.stories-DNcXDeCs.js";import{D as S}from"./RadialChart.stories-D7U8ihX9.js";import{D as $}from"./ScatterChart.stories-BT1ma4sP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DqXpZV5n.js";import"./sys-enter-2-BQ568DSo.js";import"./alert-CH5Zr4v2.js";import"./index-DvVzwHKX.js";import"./index-BVYBIT27.js";import"./index-BHPH6hXB.js";import"./Link-p7O4byri.js";import"./index-DddTN1yz.js";import"./index-INxWrkzg.js";import"./index-BddI7Cdl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgRC_ctT.js";import"./addCustomCSSWithScoping-BX6ct4xq.js";import"./index-w-lQea0z.js";import"./Carousel-DXySyw06.js";import"./ScrollEnablement-B0G1MDOV.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Wps50zBV.js";import"./slim-arrow-left-nJee2-__.js";import"./DemoProps-CDTage5z.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CR5YNjAM.js";import"./ChartContainer-AOla35nR.js";import"./index-CM02EC77.js";import"./useCancelAnimationFallback-w4M2X3xq.js";import"./YAxisTicks-CozAS3Vx.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Cn95gilM.js";import"./ChartDataLabel-CglVTb-e.js";import"./useOnClickInternal-456scf5Y.js";import"./react-content-loader.es-D4OkYlo-.js";import"./useIsRTL-CAOBRXTB.js";import"./useLongestYAxisLabel-CR-OCDqb.js";import"./ComposedChart-Dunqvc-A.js";import"./Line-JPzwOSYZ.js";import"./Scatter-CQPMNcIL.js";import"./index-DGMk7sbN.js";import"./index-mal4zqh-.js";import"./Placeholder-CYB65rzR.js";import"./index-C-ppmFDu.js";const E=`# @ui5/webcomponents-react-charts

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
