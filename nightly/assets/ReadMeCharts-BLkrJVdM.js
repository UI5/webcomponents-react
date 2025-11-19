import{r as i,j as t,T as l}from"./iframe-DNMTfzpK.js";import{useMDXComponents as p}from"./index-BN2xRXE4.js";import{M as u,a as h,m as f}from"./blocks-D7TGtWIi.js";import"./Tag-DMQsT8Q8.js";import"./index-T3fFkT4y.js";import{F as d}from"./CommandsAndQueries-p_oo0qut.js";import"./copy-mCRNeeck.js";import{T as b}from"./TableOfContent-CHa5NTHN.js";import{C}from"./index-CyrqnK1r.js";import{D}from"./BarChart.stories-D_L8oeqA.js";import{D as y}from"./BulletChart.stories-__xcB5ov.js";import{D as g}from"./ColumnChart.stories-Ba98nSY5.js";import{D as v}from"./ColumnChartWithTrend.stories-BpGUKsK0.js";import{D as x}from"./ComposedChart.stories-Dgg4OQeu.js";import{D as j}from"./DonutChart.stories-BUHhbZ_y.js";import{D as w}from"./LineChart.stories-kN4HGnQ4.js";import{D as R}from"./PieChart.stories-BeGPlSi9.js";import{D as I}from"./RadarChart.stories-DMk28q-F.js";import{D as S}from"./RadialChart.stories-jzDrhPHY.js";import{D as T}from"./ScatterChart.stories-BExHzmUv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CfBdub9z.js";import"./sys-enter-2-D1yMqvha.js";import"./alert-ovSFIgO_.js";import"./index-c_AmigIx.js";import"./index-B8yoe6T_.js";import"./index-3Dfb5Jbe.js";import"./Link-QK9m66TA.js";import"./index-CijDEz0A.js";import"./index-BmIqw6uo.js";import"./index-BXvVq-3Z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DdXxvAEF.js";import"./addCustomCSSWithScoping-DGsOsNkK.js";import"./index-BVaTbyf5.js";import"./Carousel-C4sNmbrZ.js";import"./ScrollEnablement-eCP2Kegn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CQUwOPuj.js";import"./slim-arrow-left-ajictnVL.js";import"./DemoProps-Dz_b4BEY.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DalDByKP.js";import"./ChartContainer-C8jFBlNn.js";import"./index-B_xleZYk.js";import"./useCancelAnimationFallback-CbzzVmZB.js";import"./YAxisTicks-Bq5OKyKy.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-AuVJBi6V.js";import"./ChartDataLabel-lBfupDW9.js";import"./useOnClickInternal-BJZSBqfS.js";import"./react-content-loader.es-DaXY91Wj.js";import"./useIsRTL-CveHlrIa.js";import"./useLongestYAxisLabel-DmHBr8Sr.js";import"./ComposedChart-BLz1reKD.js";import"./Line-BUWfJ5iM.js";import"./Scatter-Czx_UYS3.js";import"./index-BGB5o19g.js";import"./index-ChjHJF6L.js";import"./Placeholder-BZTsIQTC.js";import"./index-CcyGBqPv.js";const $=`# @ui5/webcomponents-react-charts

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
