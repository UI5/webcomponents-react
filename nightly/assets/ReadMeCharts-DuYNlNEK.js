import{r as i,j as t,T as l}from"./iframe-Dx8AIwnl.js";import{useMDXComponents as p}from"./index-dcVclcbT.js";import{M as u,a as h,k as f}from"./blocks-p2QhlYpp.js";import"./Tag-CzwecjZk.js";import"./index-CNQX-dlK.js";import{F as d}from"./CommandsAndQueries-DUfglqKp.js";import"./copy-BI62_cw9.js";import{T as b}from"./TableOfContent-9BBQOd01.js";import{C}from"./index-DOowyHFU.js";import{D}from"./BarChart.stories-BQfwEa03.js";import{D as y}from"./BulletChart.stories--zjFo-dL.js";import{D as g}from"./ColumnChart.stories-jxgxmUBD.js";import{D as v}from"./ColumnChartWithTrend.stories-BgILuycc.js";import{D as x}from"./ComposedChart.stories-B_GvlJVg.js";import{D as j}from"./DonutChart.stories-BIiMPgiC.js";import{D as w}from"./LineChart.stories-B8eUxRWl.js";import{D as R}from"./PieChart.stories-BA0nfIRd.js";import{D as I}from"./RadarChart.stories-BNjQCR2J.js";import{D as S}from"./RadialChart.stories-BCh9zEps.js";import{D as T}from"./ScatterChart.stories-3g-u7pv5.js";import"./preload-helper-PPVm8Dsz.js";import"./information-0cXHjBj8.js";import"./sys-enter-2-Gb3kXppf.js";import"./alert-aIxIGm79.js";import"./index-Bp4XYY8b.js";import"./index-BaN1UK0U.js";import"./index-BVmKbVfO.js";import"./Link-Br-d-ePU.js";import"./index-CPYahFg1.js";import"./index-DByobapb.js";import"./index-BwRqY3Cv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0yp5HV-.js";import"./addCustomCSSWithScoping-Bxh4uOHa.js";import"./index-C0W6hmhl.js";import"./Carousel-2BfLLQu9.js";import"./ScrollEnablement-Bp2iL1fb.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BtvaZcJQ.js";import"./slim-arrow-left-DbOhez9Q.js";import"./DemoProps-CbSRIiCJ.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CeroRxhc.js";import"./ChartContainer-DrHvdC65.js";import"./index-OEGwklO3.js";import"./useCancelAnimationFallback-BjGdRl_z.js";import"./YAxisTicks-m2Rv01Sn.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C30eOhkP.js";import"./ChartDataLabel-C4pBKekL.js";import"./useOnClickInternal-789LJDvX.js";import"./react-content-loader.es-BcDO8MOz.js";import"./useIsRTL-zeVN43iZ.js";import"./useLongestYAxisLabel-DdXNhTqA.js";import"./ComposedChart-DTy2qXS3.js";import"./Line-B-gD0D76.js";import"./Scatter-BWSIVCrF.js";import"./index-pJzwlcyT.js";import"./index-CH1-SgJO.js";import"./Placeholder-BROB4FUM.js";import"./index-B0qvmPPF.js";const $=`# @ui5/webcomponents-react-charts

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
