import{r as i,j as t,T as l}from"./iframe-Bn2VcNjM.js";import{useMDXComponents as p}from"./index-B8O2NRso.js";import{M as u,a as h,n as f}from"./blocks-DxdZj58t.js";import"./Tag-CP1g89nG.js";import"./index-DP2Vk4N-.js";import{F as d}from"./CommandsAndQueries-Duu3Cv2i.js";import"./copy-BNtdn9f6.js";import{T as b}from"./TableOfContent-DDKyKiLG.js";import{C}from"./index-C4IcM8Wo.js";import{D}from"./BarChart.stories-fhbuJk4C.js";import{D as y}from"./BulletChart.stories-DsifP_f1.js";import{D as g}from"./ColumnChart.stories-4B6mz3Lb.js";import{D as v}from"./ColumnChartWithTrend.stories-iSBdVn50.js";import{D as x}from"./ComposedChart.stories-CWr8S54x.js";import{D as j}from"./DonutChart.stories-B626jcPY.js";import{D as w}from"./LineChart.stories-BSKTruN0.js";import{D as R}from"./PieChart.stories-X8LgppjF.js";import{D as I}from"./RadarChart.stories-ASaUtZLK.js";import{D as S}from"./RadialChart.stories-BhmiOWt-.js";import{D as T}from"./ScatterChart.stories-DiQcDJDR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BknIne9K.js";import"./sys-enter-2-BaImGntK.js";import"./alert-B1eI2qVm.js";import"./index-CPtlwBkZ.js";import"./index-DtkUQ_fK.js";import"./index-DwYiaS9z.js";import"./Link-BGC1cQo4.js";import"./index-FmeoD5BD.js";import"./index-DzdCI7N0.js";import"./index-DQbgfd5S.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2LahRfeL.js";import"./addCustomCSSWithScoping-I5ABusfy.js";import"./index-BmvAtQRx.js";import"./Carousel-BewdqY5k.js";import"./ScrollEnablement-lrDN0VT4.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C3MerQlB.js";import"./slim-arrow-left-DHXbiOM7.js";import"./DemoProps-DmyyqWyj.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-tJt_aCtE.js";import"./ChartContainer-B68R6ebW.js";import"./index-B_IlMEln.js";import"./useCancelAnimationFallback-BI94bhLk.js";import"./YAxisTicks-86lzYqQZ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CUCSphPa.js";import"./ChartDataLabel-DM8QCnBR.js";import"./useOnClickInternal-BWZ43G0r.js";import"./react-content-loader.es-Cjtk0aSP.js";import"./useIsRTL-12mExhQT.js";import"./useLongestYAxisLabel-CPzbNrg9.js";import"./ComposedChart-CzvgqZV4.js";import"./Line-DUlYoQyQ.js";import"./Scatter-BxMhg7mm.js";import"./index-BXyfESlq.js";import"./index-D_pgs4vm.js";import"./Placeholder-Bdo3Xa-U.js";import"./index-BsTOhPsm.js";const $=`# @ui5/webcomponents-react-charts

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
