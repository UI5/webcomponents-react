import{q as i,j as t,Q as l}from"./iframe-rmPOfAEk.js";import{useMDXComponents as p}from"./index-OsAdl3Cq.js";import{M as u,a as h,n as f}from"./blocks-v63_T-Iu.js";import"./Tag-OMAKRCyN.js";import"./index-D5lEazYO.js";import"./CommandsAndQueries-DjjDgYFy.js";import"./copy-DYpkXBzp.js";import{T as d}from"./TableOfContent-BjAe7E2K.js";import{F as b}from"./Footer-CYSIA4uy.js";import"./PageNotFound-DRbJUQ3U.js";import{C}from"./index-BaDI9vAo.js";import{D}from"./BarChart.stories-BhzSFO2m.js";import{D as y}from"./BulletChart.stories-BVrHE7aZ.js";import{D as g}from"./ColumnChart.stories-CjNnMDMW.js";import{D as v}from"./ColumnChartWithTrend.stories-BYlDDM36.js";import{D as x}from"./ComposedChart.stories-BMTneiYA.js";import{D as j}from"./DonutChart.stories-BVuaW0Q1.js";import{D as w}from"./LineChart.stories-BokVyyc9.js";import{D as R}from"./PieChart.stories-2xm8OS5p.js";import{D as I}from"./RadarChart.stories-ej2NMhil.js";import{D as S}from"./RadialChart.stories-DtNK4oU0.js";import{D as $}from"./ScatterChart.stories-CdT7Wfe_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cw3g4evs.js";import"./sys-enter-2-DOLwXwFm.js";import"./alert-Bcs9t0my.js";import"./Link-CL9BwqUh.js";import"./index-g6c80OWk.js";import"./index-DUTk5K7T.js";import"./index-DTuZFVSS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJhSo9M3.js";import"./addCustomCSSWithScoping-CZ8_VPk_.js";import"./index-B-iV9gR7.js";import"./index-CE8iCloJ.js";import"./index-NT5PBuFY.js";import"./index-Xi7qAWgh.js";import"./Illustrations-DRh478fB.js";import"./i18n-defaults-C7ICj5-E.js";import"./Carousel-CFTF1YIl.js";import"./ScrollEnablement-B-kTKigp.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BR-e18kO.js";import"./slim-arrow-left-s0ynm6-1.js";import"./DemoProps-Dm7wRY-I.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DM_A8x45.js";import"./ChartContainer-KowxS-x2.js";import"./index-CudHcNn6.js";import"./useCancelAnimationFallback-DEegnLPN.js";import"./YAxisTicks-pWUcc88s.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D4BXMTYI.js";import"./ChartDataLabel-Bke4YRst.js";import"./useOnClickInternal-BfQVHT4I.js";import"./react-content-loader.es-Baq5V78V.js";import"./useIsRTL-C7JC_Aca.js";import"./useLongestYAxisLabel-Bffdk9pt.js";import"./ComposedChart--QMNbzEI.js";import"./Line-DFCIhZiu.js";import"./Scatter-huFqlbuV.js";import"./index-D7TMWwvn.js";import"./index-DC3EZd_P.js";import"./Placeholder-BXWJc6VB.js";import"./index-FRkBxQr-.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),m=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const s=e.current;return s&&o.length&&(r.current=setInterval(()=>{a.current++,s.navigateTo(a.current%o.length)},5e3)),()=>{m()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{m()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function _t(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{_t as default};
