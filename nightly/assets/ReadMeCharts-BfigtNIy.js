import{r as i,j as t,T as l}from"./iframe-BB4qEXD6.js";import{useMDXComponents as p}from"./index-Du8_Rn8P.js";import{M as u,a as h,k as f}from"./blocks-CR8KOJrJ.js";import"./Tag-Da7QnCDv.js";import"./index-DdTPxxL_.js";import{F as d}from"./CommandsAndQueries-DRsaMJRB.js";import"./copy-BVMnHcDg.js";import{T as b}from"./TableOfContent-WiDutKKz.js";import{C}from"./index-BpiSvPRE.js";import{D}from"./BarChart.stories-CN2YPbLV.js";import{D as y}from"./BulletChart.stories-4oS47k1O.js";import{D as g}from"./ColumnChart.stories-CHdx-py8.js";import{D as v}from"./ColumnChartWithTrend.stories-nq3PlaoG.js";import{D as x}from"./ComposedChart.stories-DEDdljnK.js";import{D as j}from"./DonutChart.stories-DrBeSstM.js";import{D as w}from"./LineChart.stories-DoylMKn9.js";import{D as R}from"./PieChart.stories-HLXezyKU.js";import{D as I}from"./RadarChart.stories-Cq9OYTYj.js";import{D as S}from"./RadialChart.stories-sS2u3ULX.js";import{D as T}from"./ScatterChart.stories-BQzTeQt6.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Y0x5W-OX.js";import"./sys-enter-2-BJKr7qQ1.js";import"./alert-BQZZbhbR.js";import"./index-x2cXHq8y.js";import"./index-9Py2403r.js";import"./index-CsmFqYDM.js";import"./Link-BYUEfY7R.js";import"./index-Dt_2dhRA.js";import"./index-DMHUWYeC.js";import"./index-CztWxO-c.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bzv1Zaa7.js";import"./addCustomCSSWithScoping-Cbj-6aXb.js";import"./index-Dpli1QB-.js";import"./Carousel-CCLNiJGm.js";import"./ScrollEnablement-BU_OfE9O.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DmAxgy3O.js";import"./slim-arrow-left-7nAok_38.js";import"./DemoProps-MV-5KVST.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BR1W60Vq.js";import"./ChartContainer-CWU5ff7c.js";import"./index-OBDc_NcL.js";import"./useCancelAnimationFallback-Co9SYzPg.js";import"./YAxisTicks-Bdjra-Q-.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CVMTl-Tk.js";import"./ChartDataLabel-BZoazgR9.js";import"./useOnClickInternal-DWyMvgch.js";import"./react-content-loader.es-Cyos5GNO.js";import"./useIsRTL-Cj10AoIb.js";import"./useLongestYAxisLabel-DKykUgGE.js";import"./ComposedChart-cD_ZUrEe.js";import"./Line-CBk4FJt5.js";import"./Scatter-DvzXUtBB.js";import"./index-fWXXn0lr.js";import"./index-CoUPvu0I.js";import"./Placeholder-P27iMPEC.js";import"./index-C7E3mZOt.js";const $=`# @ui5/webcomponents-react-charts

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
