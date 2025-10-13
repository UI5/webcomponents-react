import{r as i,j as t,T as l}from"./iframe-B2H5__qL.js";import{useMDXComponents as p}from"./index-Bc3WoLXB.js";import{M as u,a as h,k as f}from"./blocks-CV5yz-FR.js";import"./Tag-7r6nRPOe.js";import"./index-Cm-x3hEF.js";import{F as d}from"./CommandsAndQueries-CP6cnX5g.js";import"./copy-BwEcpAyC.js";import{T as b}from"./TableOfContent-CbIy2CJ0.js";import{C}from"./index-4Pqivdmw.js";import{D}from"./BarChart.stories-BYn_zJ0D.js";import{D as y}from"./BulletChart.stories-CPZj6F60.js";import{D as g}from"./ColumnChart.stories-CgIrWFBF.js";import{D as v}from"./ColumnChartWithTrend.stories-BgJ-wWPC.js";import{D as x}from"./ComposedChart.stories-CWrTX2Tz.js";import{D as j}from"./DonutChart.stories-DfjGNxqD.js";import{D as w}from"./LineChart.stories-CUHy8vi_.js";import{D as R}from"./PieChart.stories-COuqKCWA.js";import{D as I}from"./RadarChart.stories-Cia5GFgb.js";import{D as S}from"./RadialChart.stories-Dupny7pe.js";import{D as T}from"./ScatterChart.stories-CsQPvSAZ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C3uad2Xw.js";import"./sys-enter-2-cAFQMIU-.js";import"./alert-D25r9vgu.js";import"./index-CPEAIHq6.js";import"./index-8OksVI4W.js";import"./index-BLSBFNnV.js";import"./Link-CBNkHCq_.js";import"./index-BNOYEhs3.js";import"./index-CwqZMpwP.js";import"./index-BCbtyila.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVsneHI1.js";import"./addCustomCSSWithScoping-cFAolBzW.js";import"./index-CF6OSC7N.js";import"./Carousel-DNSKzALk.js";import"./ScrollEnablement-qavzlcVF.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BiJh5tgN.js";import"./slim-arrow-left-DoLvhnB9.js";import"./DemoProps-CC117j3T.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CEA3WGQK.js";import"./ChartContainer-BI1DfPm6.js";import"./index-CuufOZMl.js";import"./useCancelAnimationFallback-C3JYq8TN.js";import"./YAxisTicks-B6m0hGUh.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CCHpmb2K.js";import"./ChartDataLabel-C50FGoTC.js";import"./useOnClickInternal-CvACp4PN.js";import"./react-content-loader.es-DfRAcAPk.js";import"./useIsRTL-DhOh-sF-.js";import"./useLongestYAxisLabel-B2-Yz0eL.js";import"./ComposedChart-D9rzAvEZ.js";import"./Line-DlE4PsoE.js";import"./Scatter-DCkoPxcA.js";import"./index-BL7xegmS.js";import"./index-DBV2g4ue.js";import"./Placeholder-BARMMEWj.js";import"./index-IjcaC_SD.js";const $=`# @ui5/webcomponents-react-charts

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
