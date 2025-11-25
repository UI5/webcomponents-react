import{r as i,j as t,T as l}from"./iframe-3Rg5Wd99.js";import{useMDXComponents as p}from"./index-BTtluBKc.js";import{M as u,a as h,m as f}from"./blocks-DwXr0juD.js";import"./Tag-D-xjyjYI.js";import"./index-BjGGvrQp.js";import{F as d}from"./CommandsAndQueries-4irgK4g8.js";import"./copy-BR2g9NKm.js";import{T as b}from"./TableOfContent-BNZcLDgQ.js";import{C}from"./index-BVAheVqA.js";import{D}from"./BarChart.stories-BOUIbu6v.js";import{D as y}from"./BulletChart.stories-Fs6GC12p.js";import{D as g}from"./ColumnChart.stories-BqbkFSM7.js";import{D as v}from"./ColumnChartWithTrend.stories-DXZDj4kb.js";import{D as x}from"./ComposedChart.stories-CXeawpv5.js";import{D as j}from"./DonutChart.stories-dHOYBoVf.js";import{D as w}from"./LineChart.stories-BAVY2XIb.js";import{D as R}from"./PieChart.stories-B4VBRoHt.js";import{D as I}from"./RadarChart.stories-DQ1yLKBb.js";import{D as S}from"./RadialChart.stories-_kO2Z3dZ.js";import{D as T}from"./ScatterChart.stories-g6nAEAwa.js";import"./preload-helper-PPVm8Dsz.js";import"./information-COV3mgHm.js";import"./sys-enter-2-C-L-yMS4.js";import"./alert-ClJ7IdSm.js";import"./index-BoknKV7T.js";import"./index-BWLi-wcN.js";import"./index-LZ61FQm1.js";import"./Link-BMrxlNgv.js";import"./index-ClS56Mg1.js";import"./index-QO9zmO89.js";import"./index-C9Yy8pBH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-apWy6mIw.js";import"./addCustomCSSWithScoping-mB2SNd7y.js";import"./index-BPXqXslV.js";import"./Carousel-B3CAOYvU.js";import"./ScrollEnablement-e6-Wl8Ct.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B__c8jHG.js";import"./slim-arrow-left-o0K8OWtT.js";import"./DemoProps-D7Xr_JsL.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BCSOrj8O.js";import"./ChartContainer-DDE4hhcp.js";import"./index-mJSdXP-Z.js";import"./useCancelAnimationFallback-C5mVgeRR.js";import"./YAxisTicks-DBHMNDyr.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DqOfJi5_.js";import"./ChartDataLabel-Ce9ZC-YU.js";import"./useOnClickInternal-Wv0sbprL.js";import"./react-content-loader.es-DCVkKvRa.js";import"./useIsRTL-DFX8rm6i.js";import"./useLongestYAxisLabel-BQ4Ysmai.js";import"./ComposedChart-D3W-A3Y5.js";import"./Line-WCAKf-a-.js";import"./Scatter-CvAiGeud.js";import"./index-DFD8b4KY.js";import"./index-CEQQV2BM.js";import"./Placeholder-OTwlklr0.js";import"./index-DpvgdQ6N.js";const $=`# @ui5/webcomponents-react-charts

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
