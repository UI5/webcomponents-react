import{r as i,j as t,O as l}from"./iframe-ERwSzs3g.js";import{useMDXComponents as p}from"./index-C_Wbk-9f.js";import{M as u,a as h,n as f}from"./blocks-CPggC12N.js";import"./Tag-B-CdIpAx.js";import"./index-CaDxd8lJ.js";import{F as d}from"./CommandsAndQueries-Dd3ZB-Zm.js";import"./copy-CudSiVH8.js";import{T as b}from"./TableOfContent-3se_hcJR.js";import{C}from"./index-BQIT57WJ.js";import{D}from"./BarChart.stories-BLu3WDwI.js";import{D as y}from"./BulletChart.stories-Df19wouY.js";import{D as g}from"./ColumnChart.stories-CjHN6lcS.js";import{D as v}from"./ColumnChartWithTrend.stories-B-5xrTDv.js";import{D as x}from"./ComposedChart.stories-BnEzgqi4.js";import{D as j}from"./DonutChart.stories-Bph08oeX.js";import{D as w}from"./LineChart.stories-BujpYPc9.js";import{D as R}from"./PieChart.stories-BWI8y4ty.js";import{D as I}from"./RadarChart.stories-Bk4Dk7Lo.js";import{D as S}from"./RadialChart.stories-DHwoV3Oc.js";import{D as $}from"./ScatterChart.stories-DEtZ8liu.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CHdxYb5g.js";import"./sys-enter-2-CJZeFu0K.js";import"./alert-DqHHhUpv.js";import"./index-D0Kgz2KY.js";import"./index-CL--3ayL.js";import"./index-I8Rn_Xtk.js";import"./Link-BEsTVss7.js";import"./index-RyYuggn2.js";import"./index--5AI5DCY.js";import"./index-CZ9mn71l.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BxRB-GRE.js";import"./addCustomCSSWithScoping-Clegv1AW.js";import"./index-BcvsAi-y.js";import"./Carousel-DsnM6ZRB.js";import"./ScrollEnablement-BD4VIdDp.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BV1VxM97.js";import"./slim-arrow-left-gRPtWnGH.js";import"./DemoProps-BQExlYcf.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DTOvm4gI.js";import"./ChartContainer-DN-To7_L.js";import"./index-HN2JJ6Qh.js";import"./useCancelAnimationFallback-8zZ6AmhO.js";import"./YAxisTicks-BS32_LB4.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-t5E7lkJ4.js";import"./ChartDataLabel-CVryujAA.js";import"./useOnClickInternal-B3gNZDQw.js";import"./react-content-loader.es-p9gUE1BF.js";import"./useIsRTL-BDBjPcau.js";import"./useLongestYAxisLabel-DUTJvKml.js";import"./ComposedChart-CDCpmuNd.js";import"./Line-n6GzX_a6.js";import"./Scatter-DJtxq5RO.js";import"./index-DOgN8Tdc.js";import"./index-CHQ-3FMi.js";import"./Placeholder-DVZQwpXu.js";import"./index-rLw7bWTr.js";const E=`# @ui5/webcomponents-react-charts

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
