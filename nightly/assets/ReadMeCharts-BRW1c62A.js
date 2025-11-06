import{r as i,j as t,T as l}from"./iframe-qw_wjtNl.js";import{useMDXComponents as p}from"./index-CvAhzckH.js";import{M as u,a as h,m as f}from"./blocks-Cj0GGGP0.js";import"./Tag-DzwN3Rd_.js";import"./index-BxhW2KQn.js";import{F as d}from"./CommandsAndQueries-DWIFRiex.js";import"./copy-6F9M-W0B.js";import{T as b}from"./TableOfContent-CCoVVlS9.js";import{C}from"./index-Cx9fiZ9G.js";import{D}from"./BarChart.stories-Bnbnnfxj.js";import{D as y}from"./BulletChart.stories-BupZMwEu.js";import{D as g}from"./ColumnChart.stories-BDsxNYhS.js";import{D as v}from"./ColumnChartWithTrend.stories-Dz02iypU.js";import{D as x}from"./ComposedChart.stories-Dl6mSu0_.js";import{D as j}from"./DonutChart.stories-CGNejPLH.js";import{D as w}from"./LineChart.stories-D5BdGQwr.js";import{D as R}from"./PieChart.stories-CfXkpCYj.js";import{D as I}from"./RadarChart.stories-B9tmrwux.js";import{D as S}from"./RadialChart.stories-BMKo0CXx.js";import{D as T}from"./ScatterChart.stories--vFsKqtm.js";import"./preload-helper-PPVm8Dsz.js";import"./information-GIBAMn_C.js";import"./sys-enter-2-Djyl2MPl.js";import"./alert-B6KZwVKr.js";import"./index-DkBb4DU7.js";import"./index-JDJrS9Ll.js";import"./index-BjZZqbZ8.js";import"./Link-D-ZYRyi4.js";import"./index-8ixRb_fG.js";import"./index-ClMjTnJ2.js";import"./index-CuOh1gGP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8mn_iQe.js";import"./addCustomCSSWithScoping-CztL__nC.js";import"./index-BdvjziP2.js";import"./Carousel-BThtKbP5.js";import"./ScrollEnablement-BjXact8U.js";import"./animate-JylhYHXj.js";import"./AnimationMode-gsk7VfB9.js";import"./slim-arrow-left-BdBaxgqj.js";import"./DemoProps-LIdh05eI.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-hntmBRg5.js";import"./ChartContainer-SZZ9gIzB.js";import"./index-Ds2AFYTa.js";import"./useCancelAnimationFallback-U_qJxQSC.js";import"./YAxisTicks-BEqNESGt.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BiPV7a4b.js";import"./ChartDataLabel-BylxvbLU.js";import"./useOnClickInternal-BM8n730J.js";import"./react-content-loader.es-DMAk_wzp.js";import"./useIsRTL-Cnj3p2ky.js";import"./useLongestYAxisLabel-RTMKzs1o.js";import"./ComposedChart-lBZ8Mt4K.js";import"./Line-Du93x-yl.js";import"./Scatter-C9E34HPR.js";import"./index-B1am11sY.js";import"./index-CBBh1-Dm.js";import"./Placeholder-BZdQKxzq.js";import"./index-CuIrQO_D.js";const $=`# @ui5/webcomponents-react-charts

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
