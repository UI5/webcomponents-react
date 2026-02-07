import{r as i,j as t,O as l}from"./iframe-CoAi7Ttt.js";import{useMDXComponents as p}from"./index-CTifqAle.js";import{M as u,a as h,n as f}from"./blocks-Ybxx5XcU.js";import"./Tag-DogcFDWn.js";import"./index-zKgtSNJj.js";import{F as d}from"./CommandsAndQueries-Bmwjvcx6.js";import"./copy-CDQOzwpW.js";import{T as b}from"./TableOfContent-BvKarlsr.js";import{C}from"./index-BCbaN8GO.js";import{D}from"./BarChart.stories-Bvt4zELf.js";import{D as y}from"./BulletChart.stories-4V6vZvCo.js";import{D as g}from"./ColumnChart.stories-BznsxYKW.js";import{D as v}from"./ColumnChartWithTrend.stories-BIp3p8uD.js";import{D as x}from"./ComposedChart.stories-BI9gv495.js";import{D as j}from"./DonutChart.stories-zwqdL6QD.js";import{D as w}from"./LineChart.stories-DAobJXzN.js";import{D as R}from"./PieChart.stories-Codfxvye.js";import{D as I}from"./RadarChart.stories-BBwSxoP0.js";import{D as S}from"./RadialChart.stories-DrZJlbO_.js";import{D as $}from"./ScatterChart.stories-DMdQNYX3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BEJpmRSo.js";import"./sys-enter-2-A-vrRu2-.js";import"./alert-Bip-otgE.js";import"./index-CO1YKgmB.js";import"./index-Cq0wf6-J.js";import"./index-CnlNXdqG.js";import"./Link-BYcIvZzO.js";import"./index-CDFqh5IR.js";import"./index-B6Wc4p5_.js";import"./index-Cq2phxGV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Z6K6IIMy.js";import"./addCustomCSSWithScoping-BPStdEW-.js";import"./index-DbUh3jFl.js";import"./Carousel-DUO-nUXZ.js";import"./ScrollEnablement-BkGsl_bk.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DthcbPKa.js";import"./slim-arrow-left-DbyDlHnp.js";import"./DemoProps-D0jAuFMr.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D7b7Yv4D.js";import"./ChartContainer-DCEeouns.js";import"./index-Bs_4T8nn.js";import"./useCancelAnimationFallback-CXpqciM0.js";import"./YAxisTicks-D9uDpCJP.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-bHGlyDz7.js";import"./ChartDataLabel-Bk5BLPRW.js";import"./useOnClickInternal-CD1iulRM.js";import"./react-content-loader.es-DifAQKKr.js";import"./useIsRTL-Cye1bIBc.js";import"./useLongestYAxisLabel-B9utjnVY.js";import"./ComposedChart-DZZlmPUN.js";import"./Line-Bjw2TFkV.js";import"./Scatter-C0shYHaz.js";import"./index-D4x5JIkY.js";import"./index-C2Bps0mW.js";import"./Placeholder-CBl-BEF8.js";import"./index-DYp2nGHW.js";const E=`# @ui5/webcomponents-react-charts

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
