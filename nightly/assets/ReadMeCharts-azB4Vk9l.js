import{r as i,j as t,O as l}from"./iframe-utVLPk6_.js";import{useMDXComponents as p}from"./index-_7Ivp6Lr.js";import{M as u,a as h,n as f}from"./blocks-CRxaTikh.js";import"./Tag-LOOaBowr.js";import"./index-CJmgWra1.js";import{F as d}from"./CommandsAndQueries-BVodeffY.js";import"./copy-lkIY5Hce.js";import{T as b}from"./TableOfContent-Ca9dsvZH.js";import{C}from"./index-CqVyPyN4.js";import{D}from"./BarChart.stories-DlXPgKJa.js";import{D as y}from"./BulletChart.stories-BMJ_WIre.js";import{D as g}from"./ColumnChart.stories-CUfo1kLg.js";import{D as v}from"./ColumnChartWithTrend.stories-DWuDGts8.js";import{D as x}from"./ComposedChart.stories-7kynfpB8.js";import{D as j}from"./DonutChart.stories-B4O7f8zi.js";import{D as w}from"./LineChart.stories-BH74mbkI.js";import{D as R}from"./PieChart.stories-CfMk9zck.js";import{D as I}from"./RadarChart.stories-Cja80BWB.js";import{D as S}from"./RadialChart.stories-DMoqJVg8.js";import{D as $}from"./ScatterChart.stories-sPQEsW-C.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D-kuCoWP.js";import"./sys-enter-2-ClJM_7Cf.js";import"./alert-CrgSVEE-.js";import"./index-C5CeUqLr.js";import"./index-vwTPEa24.js";import"./index-w9tOLOey.js";import"./Link-BwFR1FvL.js";import"./index-CQTFiQOO.js";import"./index-BNJRxg3C.js";import"./index-Bt2MbZdo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP35uBwA.js";import"./addCustomCSSWithScoping-ByL_YC7i.js";import"./index-B4YNNEZt.js";import"./Carousel-CLNPw7Yi.js";import"./ScrollEnablement-CN5L_Azg.js";import"./animate-JylhYHXj.js";import"./AnimationMode-vAK-v5MN.js";import"./slim-arrow-left-HvfVXFiC.js";import"./DemoProps-BNjSNLky.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CeCmlaW5.js";import"./ChartContainer-CabFjalR.js";import"./index-BIVITqPd.js";import"./useCancelAnimationFallback-Df-9Fn2r.js";import"./YAxisTicks-BJ0bqSWT.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CiB_V451.js";import"./ChartDataLabel-DuSf2jxe.js";import"./useOnClickInternal-CaHJHROc.js";import"./react-content-loader.es-EFjZZ586.js";import"./useIsRTL-DR6ovS2D.js";import"./useLongestYAxisLabel-Bojjpizh.js";import"./ComposedChart-BD2zXUgw.js";import"./Line-BJk0ymjW.js";import"./Scatter-DArFxP7i.js";import"./index-B4Coxk28.js";import"./index-DIjL9vs1.js";import"./Placeholder-CPUV69UF.js";import"./index-DpYNXnJE.js";const E=`# @ui5/webcomponents-react-charts

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
