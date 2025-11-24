import{r as i,j as t,T as l}from"./iframe-OLMvr6Lt.js";import{useMDXComponents as p}from"./index-CdriUjbp.js";import{M as u,a as h,m as f}from"./blocks-CZhft-YU.js";import"./Tag-isczvwSi.js";import"./index-DNJgsZvx.js";import{F as d}from"./CommandsAndQueries-CxvYWHkR.js";import"./copy-CFwp5FgG.js";import{T as b}from"./TableOfContent-DdQVKol7.js";import{C}from"./index-Botudzto.js";import{D}from"./BarChart.stories-B8rb9twt.js";import{D as y}from"./BulletChart.stories-DkoxftVj.js";import{D as g}from"./ColumnChart.stories-CzRpK4_4.js";import{D as v}from"./ColumnChartWithTrend.stories-Cv6mQgmN.js";import{D as x}from"./ComposedChart.stories-DzX7kwov.js";import{D as j}from"./DonutChart.stories-B8FVbI1R.js";import{D as w}from"./LineChart.stories-Chu9E16D.js";import{D as R}from"./PieChart.stories-oCI2PHRs.js";import{D as I}from"./RadarChart.stories-Bg6tb82k.js";import{D as S}from"./RadialChart.stories-mlZd2__P.js";import{D as T}from"./ScatterChart.stories-DeXn6zTy.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CW-9LDCP.js";import"./sys-enter-2-8-HPbBwq.js";import"./alert-Bd52_kq-.js";import"./index-DbPvBsUu.js";import"./index-D6OGtnN7.js";import"./index-3TabIQwt.js";import"./Link-B3ocEkmU.js";import"./index-D7Vb79r0.js";import"./index-C0KzuGfV.js";import"./index-DP7V--vt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-8TAtZbXi.js";import"./addCustomCSSWithScoping-D8XhS4Ox.js";import"./index-DCyx6v--.js";import"./Carousel-Cb-M0KUd.js";import"./ScrollEnablement-94tHLG88.js";import"./animate-JylhYHXj.js";import"./AnimationMode-yN7po8jY.js";import"./slim-arrow-left-C2oD5plv.js";import"./DemoProps-ByUSMQ4T.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CjvZz8Iy.js";import"./ChartContainer-CKsWR9MM.js";import"./index-u1rNC7Bo.js";import"./useCancelAnimationFallback-YhjlF950.js";import"./YAxisTicks-C5c8iHtZ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DhsCdD4J.js";import"./ChartDataLabel-DAnsCRJX.js";import"./useOnClickInternal-D2cbIVzd.js";import"./react-content-loader.es-C7BYplJO.js";import"./useIsRTL-D-PfY8la.js";import"./useLongestYAxisLabel-BdIeViFZ.js";import"./ComposedChart-C-sL4lMu.js";import"./Line-YkM2KrNL.js";import"./Scatter-CuYJDRqC.js";import"./index-CtOdwMfX.js";import"./index-DNAlTSoU.js";import"./Placeholder-CZqGHFvQ.js";import"./index-pvzLeZpB.js";const $=`# @ui5/webcomponents-react-charts

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
