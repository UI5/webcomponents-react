import{r as i,j as t,O as l}from"./iframe-0eQE2YFm.js";import{useMDXComponents as p}from"./index-CrzDrume.js";import{M as u,a as h,n as f}from"./blocks-DA7tG1fG.js";import"./Tag-D9KB_OaV.js";import"./index-CO0N_mR_.js";import{F as d}from"./CommandsAndQueries-vs4Uf2fG.js";import"./copy-BusSvtxV.js";import{T as b}from"./TableOfContent-CZ69pxJx.js";import{C}from"./index-BAar3ZTd.js";import{D}from"./BarChart.stories-BXZf0-IJ.js";import{D as y}from"./BulletChart.stories-Bq0Q_OWt.js";import{D as g}from"./ColumnChart.stories-CRez7b5G.js";import{D as v}from"./ColumnChartWithTrend.stories-BRQoS0sk.js";import{D as x}from"./ComposedChart.stories-CAhFIsGz.js";import{D as j}from"./DonutChart.stories-ClI9koNh.js";import{D as w}from"./LineChart.stories-2EzAxysy.js";import{D as R}from"./PieChart.stories-DReCyQkk.js";import{D as I}from"./RadarChart.stories-B_MM1qAZ.js";import{D as S}from"./RadialChart.stories-BzSK7LSg.js";import{D as $}from"./ScatterChart.stories-C_H3Yyom.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DHaKlJ23.js";import"./sys-enter-2-CjOjN1qK.js";import"./alert-D98VDEUp.js";import"./index-CAidMbCx.js";import"./index-nxBbAPWP.js";import"./index-DXkWzVKM.js";import"./Link-CbRTBueg.js";import"./index-CX4m4aKj.js";import"./index-DIoC19fn.js";import"./index-DCkfYqwc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwbZNxPW.js";import"./addCustomCSSWithScoping-CEa4HZHN.js";import"./index-Cl7aYaAj.js";import"./Carousel-BY0DvdnY.js";import"./ScrollEnablement-BrxI8ufh.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D4b14L6A.js";import"./slim-arrow-left-BkaI3ZE-.js";import"./DemoProps-BbZfCJ6m.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CXg8F_xL.js";import"./ChartContainer-jqVR7n-H.js";import"./index-YR2Vv4g_.js";import"./useCancelAnimationFallback-DdOSdZIe.js";import"./YAxisTicks-CxF6VeQv.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CrqklpOA.js";import"./ChartDataLabel-DGfld4H-.js";import"./useOnClickInternal-5hEGWsjN.js";import"./react-content-loader.es-BewxbhGx.js";import"./useIsRTL-Bhd782rf.js";import"./useLongestYAxisLabel-BYhMR5JH.js";import"./ComposedChart-B7bFQQiS.js";import"./Line-DqxJPZA3.js";import"./Scatter-BdH-iaVO.js";import"./index-C7uzkqAw.js";import"./index-jtFio0Js.js";import"./Placeholder-BFW7ZRuy.js";import"./index-jNcA3FpD.js";const E=`# @ui5/webcomponents-react-charts

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
