import{r as i,j as t,T as l}from"./iframe-B6_VnEn0.js";import{useMDXComponents as p}from"./index-CKjNAzmF.js";import{M as u,a as h,m as f}from"./blocks-CyO3EJlr.js";import"./Tag-CgNBFz-6.js";import"./index-DSVB_dqF.js";import{F as d}from"./CommandsAndQueries-Cu0FTX1O.js";import"./copy-C1fhLsjZ.js";import{T as b}from"./TableOfContent-DIRb7Wd9.js";import{C}from"./index-Lyr9sG2b.js";import{D}from"./BarChart.stories-_XenHnlt.js";import{D as y}from"./BulletChart.stories-BZpkNakL.js";import{D as g}from"./ColumnChart.stories-CSq3x_rA.js";import{D as v}from"./ColumnChartWithTrend.stories-DwlNpXH8.js";import{D as x}from"./ComposedChart.stories-DMjoR_r9.js";import{D as j}from"./DonutChart.stories-BTMk6Dom.js";import{D as w}from"./LineChart.stories-CdX31u41.js";import{D as R}from"./PieChart.stories-CC7PkY0-.js";import{D as I}from"./RadarChart.stories-CkjGvbwF.js";import{D as S}from"./RadialChart.stories-CXRjL-q_.js";import{D as T}from"./ScatterChart.stories-Bfxo_cYz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DRMbXOdP.js";import"./sys-enter-2-DdSSz0Lf.js";import"./alert-B2vLmz8E.js";import"./index-hldrhuwk.js";import"./index-DkrtZknx.js";import"./index-C9FEKhX3.js";import"./Link-fr-LMhyz.js";import"./index-eApF8yKA.js";import"./index-BgmLFHtv.js";import"./index-BsFRP28T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D6ry04GL.js";import"./addCustomCSSWithScoping-Cx3SnQ1e.js";import"./index-CRKIYkxI.js";import"./Carousel-rmkHTeww.js";import"./ScrollEnablement-DlCeZwb_.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CVv1IIs5.js";import"./slim-arrow-left-C52lsdBj.js";import"./DemoProps-DjlqJq31.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DlrNwT1B.js";import"./ChartContainer-CTNIwNHx.js";import"./index-eEzYE7AT.js";import"./useCancelAnimationFallback-C0crn_gs.js";import"./YAxisTicks-DMl9wl56.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B0FedDrv.js";import"./ChartDataLabel-Bn7561mE.js";import"./useOnClickInternal-CGLTQb7H.js";import"./react-content-loader.es-BvpIrzig.js";import"./useIsRTL-CyGYKIx-.js";import"./useLongestYAxisLabel-3NhMZAJ-.js";import"./ComposedChart-CAbjbVfC.js";import"./Line-BRDk1mof.js";import"./Scatter-un7rDAMO.js";import"./index-DVYDdtin.js";import"./index-BCRlyeQC.js";import"./Placeholder-CzM8JUUC.js";import"./index-CrrioMDI.js";const $=`# @ui5/webcomponents-react-charts

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
