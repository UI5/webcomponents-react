import{r as i,j as t,T as l}from"./iframe-Dl0DWg8M.js";import{useMDXComponents as p}from"./index-Dunz3Qkg.js";import{M as u,a as h,k as f}from"./blocks-z5J1zZs0.js";import"./Tag-8UYUnG7U.js";import"./index-CIa6NQE1.js";import{F as d}from"./CommandsAndQueries-DcyHQWO5.js";import"./copy-BhfJfLSX.js";import{T as b}from"./TableOfContent-W0pmQgwB.js";import{C}from"./index-BTN9FVFi.js";import{D}from"./BarChart.stories-B89n96w4.js";import{D as y}from"./BulletChart.stories-C3T-CKEs.js";import{D as g}from"./ColumnChart.stories-BxVF0i8S.js";import{D as v}from"./ColumnChartWithTrend.stories-D9Mi8Dir.js";import{D as x}from"./ComposedChart.stories-BPfhFZL0.js";import{D as j}from"./DonutChart.stories-CeZuS_Iu.js";import{D as w}from"./LineChart.stories-fBlZJgIY.js";import{D as R}from"./PieChart.stories-C-TqmwQO.js";import{D as I}from"./RadarChart.stories-DKed4Dfi.js";import{D as S}from"./RadialChart.stories-BIKVCfoo.js";import{D as T}from"./ScatterChart.stories-Db2UBs8V.js";import"./preload-helper-PPVm8Dsz.js";import"./information-0V3r1Ig4.js";import"./sys-enter-2-CxUk-uXZ.js";import"./alert-DWaZJdGL.js";import"./index-qDCkQVmj.js";import"./index-ClreWoEe.js";import"./index-fJlTqGLz.js";import"./Link-C2qcQY2b.js";import"./index-BtW57M3z.js";import"./index-DfHOwcie.js";import"./index-D98fiUtL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8jMVyWi.js";import"./addCustomCSSWithScoping-BtXYUpmM.js";import"./index-9_QD_94O.js";import"./Carousel-DRmxDARM.js";import"./ScrollEnablement-DpTukKXY.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BQTwi7xU.js";import"./slim-arrow-left-OYrAEFAP.js";import"./DemoProps-Dk6-uXh3.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-RafVEqcl.js";import"./ChartContainer-_D2Ma5uI.js";import"./index-CXra9vNC.js";import"./useCancelAnimationFallback-DoNUMBeY.js";import"./YAxisTicks-BQ1-ru4v.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CFmMUhGR.js";import"./ChartDataLabel-CnVdYFaQ.js";import"./useOnClickInternal-DKWLnnJO.js";import"./react-content-loader.es-zzVttdIJ.js";import"./useIsRTL-a4IOgjsv.js";import"./useLongestYAxisLabel-BHX8pEex.js";import"./ComposedChart-jYCrU1ox.js";import"./Line-C95ZTCul.js";import"./Scatter-BA6Iddoq.js";import"./index-D6A_sXxB.js";import"./index-TPVJK-vO.js";import"./Placeholder-Dr80Xdzb.js";import"./index-Bwo1vo0-.js";const $=`# @ui5/webcomponents-react-charts

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
