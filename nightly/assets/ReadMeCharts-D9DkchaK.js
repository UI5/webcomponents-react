import{r as i,j as t,T as l}from"./iframe-CK4LOCvj.js";import{useMDXComponents as p}from"./index-BqLtYoST.js";import{M as u,a as h,k as f}from"./blocks-ZjQWLnry.js";import"./Tag-BHHtXuEO.js";import"./index-BFAmBcJW.js";import{F as d}from"./CommandsAndQueries-BwelsOM0.js";import"./copy-BE3AKkMg.js";import{T as b}from"./TableOfContent-CLxJfvBu.js";import{C}from"./index-DPBDEoRd.js";import{D}from"./BarChart.stories-CnLilhys.js";import{D as y}from"./BulletChart.stories-Bjd4vwXq.js";import{D as g}from"./ColumnChart.stories-DtsneTVw.js";import{D as v}from"./ColumnChartWithTrend.stories-VF9csq-X.js";import{D as x}from"./ComposedChart.stories-DxkLBCn2.js";import{D as j}from"./DonutChart.stories-BINeop1Q.js";import{D as w}from"./LineChart.stories-C-Klv3Uj.js";import{D as R}from"./PieChart.stories-CAKICoxe.js";import{D as I}from"./RadarChart.stories-CZ572Uo5.js";import{D as S}from"./RadialChart.stories-CWZT_l2u.js";import{D as T}from"./ScatterChart.stories-Bs0g4CKs.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DVinbumE.js";import"./sys-enter-2-CxZg2yn9.js";import"./alert-q3RCUipA.js";import"./index-CW1io29o.js";import"./index-C1w0eQlR.js";import"./index-GePrpfQg.js";import"./Link-C72gLrWy.js";import"./index-BUxn-N40.js";import"./index-BKUd1pYK.js";import"./index-DPjO4Ph3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6YKOrWJ.js";import"./addCustomCSSWithScoping-CyChXc_w.js";import"./index-BIYQNCb4.js";import"./Carousel-ClEtu94L.js";import"./ScrollEnablement-B4EaRXxx.js";import"./animate-JylhYHXj.js";import"./AnimationMode-ClXtWB2W.js";import"./slim-arrow-left-DT8KwbTf.js";import"./DemoProps-CSPinyOo.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DG9qhq3w.js";import"./ChartContainer-B_3cfLSr.js";import"./index-Cm2ZTwYm.js";import"./useCancelAnimationFallback-DBEbCMmH.js";import"./YAxisTicks-BQJeXX6Q.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DKInENDI.js";import"./ChartDataLabel-T2BUDEC0.js";import"./useOnClickInternal-3xVGzC_5.js";import"./react-content-loader.es-BxWIh2a1.js";import"./useIsRTL-CPg5JnzM.js";import"./useLongestYAxisLabel-i_SzQR5k.js";import"./ComposedChart-i0QlqU74.js";import"./Line-DMA498-Y.js";import"./Scatter-EYMgLf5P.js";import"./index-nheJK8q3.js";import"./index-DWYm5mPF.js";import"./Placeholder-qDsxhml4.js";import"./index-CIhjKe8S.js";const $=`# @ui5/webcomponents-react-charts

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
