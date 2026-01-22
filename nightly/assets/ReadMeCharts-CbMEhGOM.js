import{r as i,j as t,T as l}from"./iframe-BBfeQq2L.js";import{useMDXComponents as p}from"./index-D1XkxxyM.js";import{M as u,a as h,n as f}from"./blocks-CxdXAZue.js";import"./Tag-4fcKG2ic.js";import"./index-C57-wRZv.js";import{F as d}from"./CommandsAndQueries-Buygq3eA.js";import"./copy-2iUWozfp.js";import{T as b}from"./TableOfContent-C41PSHKe.js";import{C}from"./index-2QrotgnW.js";import{D}from"./BarChart.stories-6nVlxuVT.js";import{D as y}from"./BulletChart.stories-BAsyxcgL.js";import{D as g}from"./ColumnChart.stories-C8iMLpRu.js";import{D as v}from"./ColumnChartWithTrend.stories--BXZMje5.js";import{D as x}from"./ComposedChart.stories-qsqeOQGJ.js";import{D as j}from"./DonutChart.stories-4O0PKkh_.js";import{D as w}from"./LineChart.stories-DOlvMjZC.js";import{D as R}from"./PieChart.stories-BC5AHJLb.js";import{D as I}from"./RadarChart.stories-DsUSBJ98.js";import{D as S}from"./RadialChart.stories-QE-QEqv2.js";import{D as T}from"./ScatterChart.stories-DPubUAdd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BnGyGqAy.js";import"./sys-enter-2-B5N_dLso.js";import"./alert-DOI_-LG9.js";import"./index-B5Wcj6ld.js";import"./index-BY7hZSSK.js";import"./index-Dh6gCloB.js";import"./Link-DOA2fpa3.js";import"./index-ChSH85IQ.js";import"./index-CB8857Gd.js";import"./index-C4_hmu2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDXTaCTd.js";import"./addCustomCSSWithScoping-_H14R7FJ.js";import"./index-H1CGp5_C.js";import"./Carousel-CI4xrbp6.js";import"./ScrollEnablement-abBNx1nX.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CUq_WvXR.js";import"./slim-arrow-left-gs6Fkcw5.js";import"./DemoProps-D0WX-eex.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CkzPWUM7.js";import"./ChartContainer-DKGiTqe_.js";import"./index-BHxHZDh8.js";import"./useCancelAnimationFallback-qlr62ghQ.js";import"./YAxisTicks-86vxjwtn.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ROiT26_A.js";import"./ChartDataLabel-DDXQW9pS.js";import"./useOnClickInternal-B_dPm8Qq.js";import"./react-content-loader.es-f6I7NklE.js";import"./useIsRTL-T4YkLvpZ.js";import"./useLongestYAxisLabel-DxbsRAlh.js";import"./ComposedChart-DfWiRH2D.js";import"./Line-0eWMmdK2.js";import"./Scatter-Dt5lOzxq.js";import"./index-BlyZchUn.js";import"./index-C8ugNwo-.js";import"./Placeholder-CElrI_tP.js";import"./index-_ER-3WgZ.js";const $=`# @ui5/webcomponents-react-charts

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
