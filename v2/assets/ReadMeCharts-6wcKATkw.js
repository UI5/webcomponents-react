import{r as i,j as t,T as l}from"./iframe-eDai9lNh.js";import{useMDXComponents as p}from"./index-DWaT93aF.js";import{M as u,a as h,m as f}from"./blocks-D3QMf_Nj.js";import"./Tag-BEY0r0J2.js";import"./index-CzhxwyLf.js";import{F as d}from"./CommandsAndQueries-DdbJ0tNe.js";import"./copy-D01F59bh.js";import{T as b}from"./TableOfContent-DE6rjTP5.js";import{C}from"./index-C8ZtzUn5.js";import{D}from"./BarChart.stories-Nbt1g2MV.js";import{D as y}from"./BulletChart.stories-2YvQgqIr.js";import{D as g}from"./ColumnChart.stories-BaIOrzIT.js";import{D as v}from"./ColumnChartWithTrend.stories-DLuJ3Ng_.js";import{D as x}from"./ComposedChart.stories-wQ2XsM6V.js";import{D as j}from"./DonutChart.stories-CFhQyNfG.js";import{D as w}from"./LineChart.stories-tmOtOmjl.js";import{D as R}from"./PieChart.stories-BFvKvaYx.js";import{D as I}from"./RadarChart.stories-VqFUFzI6.js";import{D as S}from"./RadialChart.stories-D0Thl0pM.js";import{D as T}from"./ScatterChart.stories-BA3TamPA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DqhxapEK.js";import"./sys-enter-2-Cyu-GNYt.js";import"./alert-p2WK74VT.js";import"./index-Cch7pNGQ.js";import"./index-lMWu8Jr6.js";import"./index-6ZlW-CM4.js";import"./Link-ZNB4Pnda.js";import"./index-DjL8CZ6c.js";import"./index--RcUy8xr.js";import"./index-asMoAFqv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbjGEabH.js";import"./addCustomCSSWithScoping-Cxdlbo61.js";import"./index-CfUZ5M--.js";import"./Carousel-HTckEbql.js";import"./ScrollEnablement-CQYct29a.js";import"./animate-JylhYHXj.js";import"./AnimationMode-E4hn1wMd.js";import"./slim-arrow-left-tJjHBmKn.js";import"./DemoProps-CT-tefWm.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BKimk12K.js";import"./ChartContainer-DtWIYxYC.js";import"./index-CUAqmRcs.js";import"./useCancelAnimationFallback-BYZYrjPf.js";import"./YAxisTicks-CVG3hefj.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ClsjJgrm.js";import"./ChartDataLabel-DnEGHDFC.js";import"./useOnClickInternal-vqeWq0tY.js";import"./react-content-loader.es-COSLnADQ.js";import"./useIsRTL-BKoibY1H.js";import"./useLongestYAxisLabel-B2X9rbYo.js";import"./ComposedChart-DfqVvFRv.js";import"./Line-BmdDeex0.js";import"./Scatter-DFsxD3ef.js";import"./index-sLaNbPsh.js";import"./index-6BUQR92x.js";import"./Placeholder-CA3IY74x.js";import"./index-nKKM1dq3.js";const $=`# @ui5/webcomponents-react-charts

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
