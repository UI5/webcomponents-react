import{r as i,j as t,O as l}from"./iframe-C125K5pw.js";import{useMDXComponents as p}from"./index-Bjpa6FGV.js";import{M as u,a as h,n as f}from"./blocks-BXnHeSiR.js";import"./Tag-gRLBJrjs.js";import"./index-Dr1L9sIB.js";import{F as d}from"./CommandsAndQueries-ldqvUWJl.js";import"./copy-CAIaKhcd.js";import{T as b}from"./TableOfContent-D3CgtJWS.js";import{C}from"./index-Cl89XkE1.js";import{D}from"./BarChart.stories-DJgilv_X.js";import{D as y}from"./BulletChart.stories-BxVRgbgc.js";import{D as g}from"./ColumnChart.stories-CVOQw8C2.js";import{D as v}from"./ColumnChartWithTrend.stories-CzlAyYgM.js";import{D as x}from"./ComposedChart.stories-cGVu4g16.js";import{D as j}from"./DonutChart.stories-D70RpAJv.js";import{D as w}from"./LineChart.stories-D7vVmr1z.js";import{D as R}from"./PieChart.stories-CfGwPGS5.js";import{D as I}from"./RadarChart.stories-B8lYUQGZ.js";import{D as S}from"./RadialChart.stories-H5RpqCZf.js";import{D as $}from"./ScatterChart.stories-BUB9qsIt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DY8EV-7L.js";import"./sys-enter-2-DLPshmQC.js";import"./alert-DGx7QxWd.js";import"./index-sMZVCCfo.js";import"./index-HJtrmXU5.js";import"./index-DAOynge-.js";import"./Link-CLfWc0rF.js";import"./index-BIOgtrFW.js";import"./index-CTal1c8_.js";import"./index-BwMWTiPK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CKkpAdHR.js";import"./addCustomCSSWithScoping-cidmMbR-.js";import"./index-DSCACoUK.js";import"./Carousel-P2sJhrDf.js";import"./ScrollEnablement-CHcdrCpT.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CgrJ4VOE.js";import"./slim-arrow-left-Cg0Pavfo.js";import"./DemoProps-BRPRiAfH.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dbzi4lfO.js";import"./ChartContainer-BsdKl9pK.js";import"./index-CeMB97VO.js";import"./useCancelAnimationFallback-C2To2dAu.js";import"./YAxisTicks-Bxb1zhXi.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BRlTFpGo.js";import"./ChartDataLabel-BZOJ2sSz.js";import"./useOnClickInternal-CK6Skg5v.js";import"./react-content-loader.es-C4z8babw.js";import"./useIsRTL-071s-nZz.js";import"./useLongestYAxisLabel-Blz2-WlD.js";import"./ComposedChart-D4jdsYiU.js";import"./Line-BGpK9Gnp.js";import"./Scatter-BQv309-o.js";import"./index-D9kyNFxD.js";import"./index-mDQRc088.js";import"./Placeholder-CNFXsyRt.js";import"./index-z3CfuWJ_.js";const E=`# @ui5/webcomponents-react-charts

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
