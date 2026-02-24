import{r as i,j as t,O as l}from"./iframe-DT5KgGlD.js";import{useMDXComponents as p}from"./index-2sr9OpVj.js";import{M as u,a as h,n as f}from"./blocks-AEZCJTmh.js";import"./Tag-CrMaDk-2.js";import"./index-Il5MAk-V.js";import{F as d}from"./CommandsAndQueries-DUx0SL0h.js";import"./copy-Cn_--9_F.js";import{T as b}from"./TableOfContent-DmnaQ7ij.js";import{C}from"./index-mCKzZoO0.js";import{D}from"./BarChart.stories-DzH-UA-I.js";import{D as y}from"./BulletChart.stories-DwEDC0FD.js";import{D as g}from"./ColumnChart.stories-BNDxZG20.js";import{D as v}from"./ColumnChartWithTrend.stories-Ct38SAKe.js";import{D as x}from"./ComposedChart.stories-CGYr4oS_.js";import{D as j}from"./DonutChart.stories-DQ5p614l.js";import{D as w}from"./LineChart.stories-JBRdr7ZV.js";import{D as R}from"./PieChart.stories-_gujTPYa.js";import{D as I}from"./RadarChart.stories-C8JX3PzC.js";import{D as S}from"./RadialChart.stories-DERdoX4w.js";import{D as $}from"./ScatterChart.stories-D5R7QkNn.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CjpvzeET.js";import"./sys-enter-2-CcCsly0B.js";import"./alert-Dhl1tRDJ.js";import"./index-BtfaCgXN.js";import"./index-BKh4jaT0.js";import"./index-lGK2xfSC.js";import"./Link-BOLH3Y-N.js";import"./index-COS65dGe.js";import"./index-DCWap5Ti.js";import"./index-CSwD_ZHb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-gNg07s8V.js";import"./addCustomCSSWithScoping-DrxYXnwA.js";import"./index-DyR_rB-Y.js";import"./Carousel-C4se9-Vi.js";import"./ScrollEnablement-CAbtfiLJ.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Bm5TuF-J.js";import"./slim-arrow-left-DRVwV4NR.js";import"./DemoProps-Bfs5E9Zi.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DkZAwa7W.js";import"./ChartContainer-BAOhLRp6.js";import"./index-CyPn5paG.js";import"./useCancelAnimationFallback-CDkGFDnM.js";import"./YAxisTicks-CjpmMbfm.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dz6Y071J.js";import"./ChartDataLabel-B6LmtIoS.js";import"./useOnClickInternal-R2g9vVK6.js";import"./react-content-loader.es-DU_84oPm.js";import"./useIsRTL-ngYbJf9G.js";import"./useLongestYAxisLabel-mCqhb4zO.js";import"./ComposedChart-B6OkypgJ.js";import"./Line-BVvSX0vL.js";import"./Scatter-Cf7jsbKR.js";import"./index-C5gjxKtN.js";import"./index-COKDBrmk.js";import"./Placeholder-BYBr7978.js";import"./index-PdIn3TXb.js";const E=`# @ui5/webcomponents-react-charts

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
