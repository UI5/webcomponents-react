import{r as i,j as t,T as l}from"./iframe-Biw_3dDT.js";import{useMDXComponents as p}from"./index-BMMnaqrc.js";import{M as u,a as h,k as f}from"./blocks-CG1UjEbO.js";import"./Tag-CRWtagqn.js";import"./index-Cn2rXDmw.js";import{F as d}from"./CommandsAndQueries-D0Z7WxPl.js";import"./copy-DH1R2EGq.js";import{T as b}from"./TableOfContent-DZIDKcpc.js";import{C}from"./index-KppZt1gx.js";import{D}from"./BarChart.stories-BVLdx-kn.js";import{D as y}from"./BulletChart.stories-J-oxpKDQ.js";import{D as g}from"./ColumnChart.stories-DDOSFPj3.js";import{D as v}from"./ColumnChartWithTrend.stories-CdCqCUqE.js";import{D as x}from"./ComposedChart.stories-WGzl1Eqf.js";import{D as j}from"./DonutChart.stories-b3EUk0de.js";import{D as w}from"./LineChart.stories-DZWNLIU6.js";import{D as R}from"./PieChart.stories-BUmv8Dg3.js";import{D as I}from"./RadarChart.stories-DTtipCxi.js";import{D as S}from"./RadialChart.stories-rhDvwgJX.js";import{D as T}from"./ScatterChart.stories-C305vKS8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DBapFp0Y.js";import"./sys-enter-2-CEmGCFWp.js";import"./alert-DjZ7TPZE.js";import"./index-BqgdtVzi.js";import"./index-CFI750DE.js";import"./index-BN4lukMo.js";import"./Link-DWk7vFCs.js";import"./index-BoXMWtRz.js";import"./index-Cs0jPH4S.js";import"./index-N2M8yHQs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeslUd9A.js";import"./addCustomCSSWithScoping-DYYTTL4w.js";import"./index-BJYjY6km.js";import"./Carousel-CCxu6DIU.js";import"./ScrollEnablement-bgT4DI50.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B6RXWwas.js";import"./slim-arrow-left-KHQdhEVb.js";import"./DemoProps-Ipqn8WBM.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BdRHoyxD.js";import"./ChartContainer-CcJAGc8u.js";import"./index-DTPD7XSM.js";import"./useCancelAnimationFallback-CUYn3YI8.js";import"./YAxisTicks-DlqaRNcv.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-TZ-gZEbS.js";import"./ChartDataLabel-BhfMjjbW.js";import"./useOnClickInternal-CGeY9Cry.js";import"./react-content-loader.es-D7-natyf.js";import"./useIsRTL-BOO113xH.js";import"./useLongestYAxisLabel-DzrE5tNi.js";import"./ComposedChart-DLiHPx_G.js";import"./Line-DDB_bdK0.js";import"./Scatter-C07EWLyq.js";import"./index-8KF1IEgf.js";import"./index-DJC_Tx-T.js";import"./Placeholder-UV8bQ-E9.js";import"./index-CveZfYeM.js";const $=`# @ui5/webcomponents-react-charts

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
