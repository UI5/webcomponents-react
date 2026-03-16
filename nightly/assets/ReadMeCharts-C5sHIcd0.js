import{q as i,j as t,Q as l}from"./iframe-CH-Q08Pv.js";import{useMDXComponents as p}from"./index-JegEFivd.js";import{M as u,a as h,n as f}from"./blocks-DoFVSa5q.js";import"./Tag-C3CTuin_.js";import"./index-_SHIyctb.js";import"./CommandsAndQueries-Dlnf61eM.js";import"./copy-BJgUS9X2.js";import{T as d}from"./TableOfContent--cHXPcXI.js";import{F as b}from"./Footer-Cg75ltPq.js";import"./PageNotFound-BZ_kgysZ.js";import{C}from"./index-6sAveQ52.js";import{D}from"./BarChart.stories-BH71Auvb.js";import{D as y}from"./BulletChart.stories--tN1EDjA.js";import{D as g}from"./ColumnChart.stories-CwuICNtR.js";import{D as v}from"./ColumnChartWithTrend.stories-EmZE7DR-.js";import{D as x}from"./ComposedChart.stories-BA8b3wzA.js";import{D as j}from"./DonutChart.stories-AQXwp47k.js";import{D as w}from"./LineChart.stories-Ddo7e6p_.js";import{D as R}from"./PieChart.stories-BADftBIz.js";import{D as I}from"./RadarChart.stories-0gAx83sB.js";import{D as S}from"./RadialChart.stories-DAoGHr4G.js";import{D as $}from"./ScatterChart.stories-TIrEihJE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DMZ4xbkz.js";import"./sys-enter-2-Cl66mT1N.js";import"./alert-BQx8EBHB.js";import"./Link-BR4DnOSS.js";import"./index-DTltU74W.js";import"./index-DZ9Ckgsr.js";import"./index-BLeRJ1tU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYciNjaj.js";import"./addCustomCSSWithScoping-D4FzfPo7.js";import"./index-BIHxokcD.js";import"./index-nLMQvitA.js";import"./index-ByjlU9SJ.js";import"./index-CiSOiezA.js";import"./Illustrations-DAJG5DXY.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DhXPsWVA.js";import"./ScrollEnablement-DLVPowNZ.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C0uHnEtc.js";import"./slim-arrow-left-Bae-HaNt.js";import"./DemoProps-DOo46adH.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-EbQ5BaK3.js";import"./ChartContainer-CSxF7Oe6.js";import"./index-BmFCipXX.js";import"./useCancelAnimationFallback-CbyysTDx.js";import"./YAxisTicks-DFkWoev5.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Cij2lYHI.js";import"./ChartDataLabel-DIWxEnAN.js";import"./useOnClickInternal-DtRH64ym.js";import"./react-content-loader.es-DC_sx4WC.js";import"./useIsRTL-O1z4-Zn4.js";import"./useLongestYAxisLabel-D_lMKjaH.js";import"./ComposedChart-opeJQnqK.js";import"./Line-W30mSLiT.js";import"./Scatter-DdolVPQ_.js";import"./index-Beix_GVr.js";import"./index-Dr0ccQGm.js";import"./Placeholder-Davs0ZgH.js";import"./index-C2dF5_Tx.js";const E=`# @ui5/webcomponents-react-charts

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
