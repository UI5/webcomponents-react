import{r as i,j as t,T as l}from"./iframe-BVsLYlhe.js";import{useMDXComponents as p}from"./index-DavU5a3Y.js";import{M as u,a as h,n as f}from"./blocks-BwdcnqOn.js";import"./Tag-CNJ-l2ra.js";import"./index-Chy_S0qP.js";import{F as d}from"./CommandsAndQueries-Bi9b4xK_.js";import"./copy-hvSX-Foh.js";import{T as b}from"./TableOfContent--O-E1U53.js";import{C}from"./index-H-Y97_bF.js";import{D}from"./BarChart.stories-RBGFo2s4.js";import{D as y}from"./BulletChart.stories-DpP0Q17y.js";import{D as g}from"./ColumnChart.stories-Dx5o6J__.js";import{D as v}from"./ColumnChartWithTrend.stories-C93fgGeO.js";import{D as x}from"./ComposedChart.stories-BQI6wMni.js";import{D as j}from"./DonutChart.stories-aE682Jml.js";import{D as w}from"./LineChart.stories-C9vnil98.js";import{D as R}from"./PieChart.stories-BlU6qig7.js";import{D as I}from"./RadarChart.stories-DcWAdOPg.js";import{D as S}from"./RadialChart.stories-DDPUa6o9.js";import{D as T}from"./ScatterChart.stories-CRQ6hhqU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Q1gDT6BU.js";import"./sys-enter-2-CVfnD9eL.js";import"./alert-BQuV4PvU.js";import"./index-BBlqkBew.js";import"./index-CppXcbvf.js";import"./index-CQv5SAoi.js";import"./Link-mimmL_0g.js";import"./index-pqTqdxQB.js";import"./index-bVRMu9zO.js";import"./index-2NXGICNv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dhuu23v1.js";import"./addCustomCSSWithScoping-CKzpaFfQ.js";import"./index-BZsG0oyU.js";import"./Carousel-BY5ej-6d.js";import"./ScrollEnablement-OBzjrUFw.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DAGOnMLp.js";import"./slim-arrow-left-s0i3cPWV.js";import"./DemoProps-MI4ZCpb2.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Ce2jZE-C.js";import"./ChartContainer-CBIpmnxs.js";import"./index-BSHqwN58.js";import"./useCancelAnimationFallback-BgiGCItu.js";import"./YAxisTicks-u7Kx_A2W.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D00mbK8J.js";import"./ChartDataLabel-Dy4aiIy_.js";import"./useOnClickInternal-BnLj0E9Z.js";import"./react-content-loader.es-xG2IHx-u.js";import"./useIsRTL-DzejkbSx.js";import"./useLongestYAxisLabel-BvmFXvll.js";import"./ComposedChart-BxGclxPl.js";import"./Line-BLxWlHoE.js";import"./Scatter-Ccc5678Q.js";import"./index-BAxZVqZv.js";import"./index-B-aHnVT7.js";import"./Placeholder-Ck-PYSxz.js";import"./index-DyviPpoa.js";const $=`# @ui5/webcomponents-react-charts

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
