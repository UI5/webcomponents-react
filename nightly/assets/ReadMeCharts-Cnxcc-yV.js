import{r as i,j as t,O as l}from"./iframe-COKmt9GX.js";import{useMDXComponents as p}from"./index-CzY2e8So.js";import{M as u,a as h,n as f}from"./blocks-BC1CQ7iN.js";import"./Tag-DloN_KbF.js";import"./index-C27X2XUm.js";import{F as d}from"./CommandsAndQueries-DSaWGMGq.js";import"./copy-CyMKHNyy.js";import{T as b}from"./TableOfContent-BJyZaqmf.js";import{C}from"./index-CXHy1K67.js";import{D}from"./BarChart.stories-stTUWwaH.js";import{D as y}from"./BulletChart.stories-CwEhAoqx.js";import{D as g}from"./ColumnChart.stories-BlvPeJhw.js";import{D as v}from"./ColumnChartWithTrend.stories-CDdDdbnU.js";import{D as x}from"./ComposedChart.stories-BPz7eupg.js";import{D as j}from"./DonutChart.stories-DNxN1F2F.js";import{D as w}from"./LineChart.stories-CbCRwFjT.js";import{D as R}from"./PieChart.stories-DyKm7wIo.js";import{D as I}from"./RadarChart.stories-Dy8yYNB7.js";import{D as S}from"./RadialChart.stories-TfybwvZ2.js";import{D as $}from"./ScatterChart.stories-BTDmvXVp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CfFvhrkY.js";import"./sys-enter-2-BMhsQaT7.js";import"./alert-Cbc0R2SK.js";import"./index-CQHeIIHf.js";import"./index-C6DL1JMC.js";import"./index-DjGJsOok.js";import"./Link-BA2-5m1C.js";import"./index-BVPy0Kvc.js";import"./index-CfIzOoJC.js";import"./index-D5ATbVNg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CXoeJUKj.js";import"./addCustomCSSWithScoping-CbQo03JJ.js";import"./index-WnbZc56M.js";import"./Carousel-DeJivxhm.js";import"./ScrollEnablement-D7MLciOS.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CA9Lvh0E.js";import"./slim-arrow-left-DKYVIMYk.js";import"./DemoProps-Dq6YHFzW.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C3-nkE5P.js";import"./ChartContainer-Cp7JcN3A.js";import"./index-DhVmRSsQ.js";import"./useCancelAnimationFallback-DXRfGOeq.js";import"./YAxisTicks-BDvhAcCS.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CYr1eGsR.js";import"./ChartDataLabel-mNF8e52o.js";import"./useOnClickInternal-B73haU-8.js";import"./react-content-loader.es-kCyCYjGx.js";import"./useIsRTL--2n9yHX1.js";import"./useLongestYAxisLabel-B64cwFZM.js";import"./ComposedChart-7VKjxpUm.js";import"./Line-ClY8LcNy.js";import"./Scatter-DqUpdBD_.js";import"./index-Bqu4GrB8.js";import"./index-BWyWaMhI.js";import"./Placeholder-BonjJ362.js";import"./index-8DRc1Knx.js";const E=`# @ui5/webcomponents-react-charts

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
