import{r as i,j as t,O as l}from"./iframe-DZSv2zZb.js";import{useMDXComponents as p}from"./index-BqdSmNlq.js";import{M as u,a as h,n as f}from"./blocks-BSnZQBrX.js";import"./Tag-BEM_u6FU.js";import"./index-BBEh2DsQ.js";import{F as d}from"./CommandsAndQueries-CZUib4pD.js";import"./copy-23w1fGpY.js";import{T as b}from"./TableOfContent-D_bn0j1X.js";import{C}from"./index-wm2dzjkY.js";import{D}from"./BarChart.stories-BGnZVAy8.js";import{D as y}from"./BulletChart.stories-Djir3tc6.js";import{D as g}from"./ColumnChart.stories-ACJ1G2Yg.js";import{D as v}from"./ColumnChartWithTrend.stories-N9_dF3OF.js";import{D as x}from"./ComposedChart.stories-2xAd8FMs.js";import{D as j}from"./DonutChart.stories-DbVpaVhu.js";import{D as w}from"./LineChart.stories-Dlz9MfE7.js";import{D as R}from"./PieChart.stories-BHAeUs6x.js";import{D as I}from"./RadarChart.stories-JexH1iZL.js";import{D as S}from"./RadialChart.stories-FhxrBgJj.js";import{D as $}from"./ScatterChart.stories-DtmFm5Hu.js";import"./preload-helper-PPVm8Dsz.js";import"./information-COD7Swxj.js";import"./sys-enter-2-CFC1gFhb.js";import"./alert-CTmlBOXX.js";import"./index-C2hiyRQA.js";import"./index-CCnKvqA0.js";import"./index-DrF5gpEw.js";import"./Link-CCplhiXF.js";import"./index-EGktcBQb.js";import"./index-DRWzqH2N.js";import"./index-CYgXuNom.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Z5sB9nBC.js";import"./addCustomCSSWithScoping-DXOZ95so.js";import"./index-lD82309j.js";import"./Carousel-CqVX554D.js";import"./ScrollEnablement-B-_jXnOO.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cgj1EUSD.js";import"./slim-arrow-left-BWsJPqtu.js";import"./DemoProps-DO4I0g6K.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BwpkNq_n.js";import"./ChartContainer-DHwgA7va.js";import"./index-Dqc9eXJK.js";import"./useCancelAnimationFallback-D4stX0dp.js";import"./YAxisTicks-lTEo-9P-.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BYzR14bg.js";import"./ChartDataLabel-CE2D5iEK.js";import"./useOnClickInternal-DQbHenMp.js";import"./react-content-loader.es-DUTps8O4.js";import"./useIsRTL-BzVE9glM.js";import"./useLongestYAxisLabel-ApqkkD7D.js";import"./ComposedChart-pHx_pQ38.js";import"./Line-svYjRVGn.js";import"./Scatter-BpyliK8F.js";import"./index-BMP1j1eU.js";import"./index-DJyP_2dd.js";import"./Placeholder-CY0RYrSv.js";import"./index-DKbr8Zz_.js";const E=`# @ui5/webcomponents-react-charts

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
