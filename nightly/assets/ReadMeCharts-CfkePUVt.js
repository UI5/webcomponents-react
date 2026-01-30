import{r as i,j as t,O as l}from"./iframe-DVGWhCAE.js";import{useMDXComponents as p}from"./index-B9xkaSV0.js";import{M as u,a as h,n as f}from"./blocks-BJbIBXfd.js";import"./Tag-BSVrbtw1.js";import"./index-8G75QKe0.js";import{F as d}from"./CommandsAndQueries-dho9FID6.js";import"./copy-BlV96bJM.js";import{T as b}from"./TableOfContent-B3yr3fci.js";import{C}from"./index-Cef4Drkd.js";import{D}from"./BarChart.stories-CrKfVlHx.js";import{D as y}from"./BulletChart.stories-DLHtLYum.js";import{D as g}from"./ColumnChart.stories-y3sczmnE.js";import{D as v}from"./ColumnChartWithTrend.stories-Dm-WcESp.js";import{D as x}from"./ComposedChart.stories-gZugqNsy.js";import{D as j}from"./DonutChart.stories-CI5vPxpc.js";import{D as w}from"./LineChart.stories-CnVABhW-.js";import{D as R}from"./PieChart.stories-ykI_T-Yh.js";import{D as I}from"./RadarChart.stories-YwpUvR-8.js";import{D as S}from"./RadialChart.stories-m8qZpl47.js";import{D as $}from"./ScatterChart.stories-BPZZoRwB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-omXjQTPD.js";import"./sys-enter-2-C04ebACG.js";import"./alert-BHqxLN4g.js";import"./index-CRrKr04f.js";import"./index-Q2-fVCzE.js";import"./index-BHsujjCW.js";import"./Link-Dgw-_ZOU.js";import"./index-Nk5G6RU7.js";import"./index-DGKs15kB.js";import"./index-NT87e1sK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DANVMAHb.js";import"./addCustomCSSWithScoping-5Jg_uRZD.js";import"./index-BJLS4IRc.js";import"./Carousel-DFRMVegk.js";import"./ScrollEnablement-B1V-xmtX.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D41naBrm.js";import"./slim-arrow-left-ckeShDhC.js";import"./DemoProps-Fxt1F_nd.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CNEPXEG8.js";import"./ChartContainer-CAoTfbxD.js";import"./index-D2OD1CJk.js";import"./useCancelAnimationFallback-BghxUKNO.js";import"./YAxisTicks-BO6G1iD6.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DJ9TKuH2.js";import"./ChartDataLabel-odrhXzAa.js";import"./useOnClickInternal-DgMDwcns.js";import"./react-content-loader.es-CB52qDV3.js";import"./useIsRTL-BrbgBhCS.js";import"./useLongestYAxisLabel-CStxLTCc.js";import"./ComposedChart-ZOCNw0Fg.js";import"./Line-CvQJcCta.js";import"./Scatter-PDxvKGcR.js";import"./index-BirfQ1qm.js";import"./index-BV4BR3Lp.js";import"./Placeholder-C2lYzUIh.js";import"./index-DapqJWcN.js";const E=`# @ui5/webcomponents-react-charts

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
