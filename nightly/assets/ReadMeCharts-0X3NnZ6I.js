import{r as i,j as t,O as l}from"./iframe-D_72XrxV.js";import{useMDXComponents as p}from"./index-66RF5jzG.js";import{M as u,a as h,n as f}from"./blocks-Cdh_AmAk.js";import"./Tag-FVV8VuJS.js";import"./index-CeLdj5R8.js";import{F as d}from"./CommandsAndQueries-B5MqblA3.js";import"./copy-jn1S9mhy.js";import{T as b}from"./TableOfContent-y4D1_mMB.js";import{C}from"./index-DsbRF8gX.js";import{D}from"./BarChart.stories-D8FiGCQg.js";import{D as y}from"./BulletChart.stories-Da9PkCiN.js";import{D as g}from"./ColumnChart.stories-C31ysEQB.js";import{D as v}from"./ColumnChartWithTrend.stories-BAxA4B5S.js";import{D as x}from"./ComposedChart.stories-DpHAlyt9.js";import{D as j}from"./DonutChart.stories-bgyWeXxe.js";import{D as w}from"./LineChart.stories-Bsv9_VJT.js";import{D as R}from"./PieChart.stories-C1MEu2UL.js";import{D as I}from"./RadarChart.stories-oVLqFxfo.js";import{D as S}from"./RadialChart.stories-CgZkyhdT.js";import{D as $}from"./ScatterChart.stories-DbRj607c.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C_2BZUqW.js";import"./sys-enter-2-C5Wnyt7l.js";import"./alert-CbokyiOI.js";import"./index-CtHwk6MR.js";import"./index-B5YLKK6V.js";import"./index-DC83-RSZ.js";import"./Link-BEWshBTo.js";import"./index-DhXDNTqP.js";import"./index-CawoDp7x.js";import"./index-DXJ6eoJD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jUCNgYAQ.js";import"./addCustomCSSWithScoping-CVFgCYWk.js";import"./index-DkMaspDs.js";import"./Carousel-BRv6VDsV.js";import"./ScrollEnablement-yQTiHpLV.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BDD2LEYK.js";import"./slim-arrow-left-CpuvzZPd.js";import"./DemoProps-kWZ3ImQX.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DZdP9oqI.js";import"./ChartContainer-Dbi0x9Az.js";import"./index-DGCvl-Xm.js";import"./useCancelAnimationFallback-Bo69l6_k.js";import"./YAxisTicks-D8TUOE9Z.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Bfp9VRWu.js";import"./ChartDataLabel-DWcVKbtE.js";import"./useOnClickInternal-BDjHLo85.js";import"./react-content-loader.es-k9DX470j.js";import"./useIsRTL-DwZ1F38u.js";import"./useLongestYAxisLabel-DSCa3OTZ.js";import"./ComposedChart-BEyzhQsn.js";import"./Line-Dg0PzhqD.js";import"./Scatter-w0r3JpBf.js";import"./index-UtW9Yw3z.js";import"./index-BEYysb2k.js";import"./Placeholder-qCJD5ag9.js";import"./index-wrL0ZnID.js";const E=`# @ui5/webcomponents-react-charts

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
