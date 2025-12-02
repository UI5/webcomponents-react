import{r as i,j as t,T as l}from"./iframe-ePItFB5B.js";import{useMDXComponents as p}from"./index-DDhKCT3A.js";import{M as u,a as h,m as f}from"./blocks-b5KXpU9M.js";import"./Tag-DaF_Qhe4.js";import"./index-BB23O1Ug.js";import{F as d}from"./CommandsAndQueries-Bqqc5zN4.js";import"./copy-BDQ8dZSb.js";import{T as b}from"./TableOfContent-DejIFgBn.js";import{C}from"./index-DahRVq89.js";import{D}from"./BarChart.stories-C4OifK4f.js";import{D as y}from"./BulletChart.stories-Djud6rtR.js";import{D as g}from"./ColumnChart.stories-DCojgb6i.js";import{D as v}from"./ColumnChartWithTrend.stories-BL3PcdjE.js";import{D as x}from"./ComposedChart.stories-CqsNZasb.js";import{D as j}from"./DonutChart.stories-C4YH__ne.js";import{D as w}from"./LineChart.stories-DcvwV1T_.js";import{D as R}from"./PieChart.stories-BoBxSnAT.js";import{D as I}from"./RadarChart.stories-BqmhlUAG.js";import{D as S}from"./RadialChart.stories-Cm0ED3y8.js";import{D as T}from"./ScatterChart.stories-Bb0Z5Ixk.js";import"./preload-helper-PPVm8Dsz.js";import"./information-jDHGU4wN.js";import"./sys-enter-2-CYnnsJKJ.js";import"./alert-CaUEMWJO.js";import"./index-tHf_ynpH.js";import"./index-BW9_RjV3.js";import"./index-CHJN7UF8.js";import"./Link-DCRCVgwG.js";import"./index-CauWo2vq.js";import"./index-Dot01Rcg.js";import"./index-DwS7NZjH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BZQxW830.js";import"./addCustomCSSWithScoping-DQC1mn0S.js";import"./index-DsBJl3xg.js";import"./Carousel-N0q8B-Xd.js";import"./ScrollEnablement-DXbRc12V.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dj9JAV2n.js";import"./slim-arrow-left-CHFhGGBb.js";import"./DemoProps-CypoydMz.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CEHrQf2I.js";import"./ChartContainer-BEGuIqNd.js";import"./index-BpeQPuHK.js";import"./useCancelAnimationFallback-CsDKRzml.js";import"./YAxisTicks-Co8-C8eh.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BE5QhAjC.js";import"./ChartDataLabel-C4itVyvV.js";import"./useOnClickInternal-BNcZs0vz.js";import"./react-content-loader.es-CcfDqVlr.js";import"./useIsRTL-DsyOH-5s.js";import"./useLongestYAxisLabel-CMRrBqon.js";import"./ComposedChart-CEiRODoy.js";import"./Line-DeShMPJu.js";import"./Scatter-CjF_jsP4.js";import"./index-C37qHq6K.js";import"./index-Bjx0zIps.js";import"./Placeholder-H2cBaoF1.js";import"./index-4i3wy54r.js";const $=`# @ui5/webcomponents-react-charts

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
