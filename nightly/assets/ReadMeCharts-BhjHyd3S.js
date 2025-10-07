import{r as i,j as t,T as l}from"./iframe-DWPhu-XW.js";import{useMDXComponents as p}from"./index-CTKrG-Il.js";import{M as u,a as h,k as f}from"./blocks-CEz7tllO.js";import"./Tag-Dba4-MU4.js";import"./index-Bdh_RTY9.js";import{F as d}from"./CommandsAndQueries-CU5SVthr.js";import"./copy-DPKhld63.js";import{T as b}from"./TableOfContent-C4JT23W_.js";import{C}from"./index-CU5K90Ml.js";import{D}from"./BarChart.stories-D_a8OzRb.js";import{D as y}from"./BulletChart.stories-Be_2qAvO.js";import{D as g}from"./ColumnChart.stories-Gv4dbxrD.js";import{D as v}from"./ColumnChartWithTrend.stories-CAop13fZ.js";import{D as x}from"./ComposedChart.stories-DUlt8BAg.js";import{D as j}from"./DonutChart.stories-CPuNBT5Q.js";import{D as w}from"./LineChart.stories-BqnJaOGO.js";import{D as R}from"./PieChart.stories-CnPLUmCc.js";import{D as I}from"./RadarChart.stories-D3qG0NdB.js";import{D as S}from"./RadialChart.stories-CwtRcscg.js";import{D as T}from"./ScatterChart.stories-BX9cp_kV.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Du5hwuH3.js";import"./sys-enter-2-Xjz6cji1.js";import"./alert-CbVbnvcl.js";import"./index-Cr6-mnTI.js";import"./index-BO-QmtYo.js";import"./index-CiWXYZya.js";import"./Link-DkEMVIRA.js";import"./index-dWLwPKk_.js";import"./index-3as0AtcW.js";import"./index-Cqyay8-b.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bmz1hEk-.js";import"./addCustomCSSWithScoping-_7UfQKgI.js";import"./index-BUa9lJQh.js";import"./Carousel-B7cBIntk.js";import"./ScrollEnablement-DEtsU5kO.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BplxhOS7.js";import"./slim-arrow-left-TmbEEl5x.js";import"./DemoProps-CxnjoSnb.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-8i3WYUwg.js";import"./ChartContainer-r-nHAnTw.js";import"./index-Dyna8UIc.js";import"./useCancelAnimationFallback-Bq_Lqcal.js";import"./YAxisTicks-D1wtX8ZU.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C60RYVEJ.js";import"./ChartDataLabel-BItifYGd.js";import"./useOnClickInternal-D_s6Rl3T.js";import"./react-content-loader.es-Bfkhi440.js";import"./useIsRTL-DACTY-zP.js";import"./useLongestYAxisLabel-OEIm7b7m.js";import"./ComposedChart-DoAliSyk.js";import"./Line-BgjnY-h5.js";import"./Scatter-DmMAnn4d.js";import"./index-DGS5h035.js";import"./index-BG2WOL6F.js";import"./Placeholder-Da5T9H6_.js";import"./index-B9lLwL0K.js";const $=`# @ui5/webcomponents-react-charts

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
