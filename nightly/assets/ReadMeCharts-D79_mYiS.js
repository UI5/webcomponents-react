import{r as i,j as t,T as l}from"./iframe-BHL3KP3B.js";import{useMDXComponents as p}from"./index-CV9KcB1M.js";import{M as u,a as h,n as f}from"./blocks-CBYdh6wr.js";import"./Tag-RhCig6AF.js";import"./index-JS1GcHzF.js";import{F as d}from"./CommandsAndQueries-D7saeET0.js";import"./copy-Cx_IXaYw.js";import{T as b}from"./TableOfContent-WAW6dFW2.js";import{C}from"./index-BGM9fNeX.js";import{D}from"./BarChart.stories-D55BTzEE.js";import{D as y}from"./BulletChart.stories-BEP1S46e.js";import{D as g}from"./ColumnChart.stories-CWPRn_kK.js";import{D as v}from"./ColumnChartWithTrend.stories-BunZPKoj.js";import{D as x}from"./ComposedChart.stories-JesYU9Sc.js";import{D as j}from"./DonutChart.stories-BkLqtqCV.js";import{D as w}from"./LineChart.stories-BBhU82wt.js";import{D as R}from"./PieChart.stories-CzrA-C6-.js";import{D as I}from"./RadarChart.stories-CLP-sIR4.js";import{D as S}from"./RadialChart.stories-CP0EllBK.js";import{D as T}from"./ScatterChart.stories-kt8LBBqI.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DJM95Ys0.js";import"./sys-enter-2-XSR4RGqi.js";import"./alert-D5dcqe2K.js";import"./index-BgzyxERN.js";import"./index-Dx-FLQII.js";import"./index-Dsg6DYtH.js";import"./Link-ea-shbEJ.js";import"./index-lfVzLD84.js";import"./index-Dbs5lixu.js";import"./index-DToQg2Hs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Co81iMbm.js";import"./addCustomCSSWithScoping-DQk-eQ1n.js";import"./index-JDEJOPjW.js";import"./Carousel-DF7AkfbC.js";import"./ScrollEnablement-CuhBmX-D.js";import"./animate-JylhYHXj.js";import"./AnimationMode-XilsPyxo.js";import"./slim-arrow-left-CVJPC2QW.js";import"./DemoProps-B63VpD3V.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Cazf1wx0.js";import"./ChartContainer-BiemoHyv.js";import"./index-Dvhp9tec.js";import"./useCancelAnimationFallback-JVrW2jPY.js";import"./YAxisTicks-C9YFwGQe.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D7O-Ftss.js";import"./ChartDataLabel-C4srPOWH.js";import"./useOnClickInternal-D-P5Xqx9.js";import"./react-content-loader.es-BJi2jd5Y.js";import"./useIsRTL-CbHzpQG_.js";import"./useLongestYAxisLabel-BDH9xbH4.js";import"./ComposedChart-D_PFFB-h.js";import"./Line-CbHBMBx2.js";import"./Scatter-D-aBcFKa.js";import"./index-BSarug1N.js";import"./index-BUuP7gTe.js";import"./Placeholder-BgLjDXal.js";import"./index-CsEdkI4X.js";const $=`# @ui5/webcomponents-react-charts

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
