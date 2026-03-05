import{q as i,j as t,Q as l}from"./iframe-Ba5ZQio8.js";import{useMDXComponents as p}from"./index-rp1O3cN1.js";import{M as u,a as h,n as f}from"./blocks-CO8PFwMs.js";import"./Tag-U7nVfWIj.js";import"./index-P8tdEHaz.js";import"./CommandsAndQueries-Bbpx9ls1.js";import"./copy-B4CpXR8v.js";import{T as d}from"./TableOfContent-CEWE7Cwo.js";import{F as b}from"./Footer-C-jjr1fr.js";import"./PageNotFound-lWhn0Z7P.js";import{C}from"./index-xreU7UfW.js";import{D}from"./BarChart.stories-DxBwxmKB.js";import{D as y}from"./BulletChart.stories-BVL2eHs9.js";import{D as g}from"./ColumnChart.stories-DuOmxIGh.js";import{D as v}from"./ColumnChartWithTrend.stories-Sq3_Z-NJ.js";import{D as x}from"./ComposedChart.stories-zLqRklat.js";import{D as j}from"./DonutChart.stories-D3X7Jtu7.js";import{D as w}from"./LineChart.stories-CgjN_fa1.js";import{D as R}from"./PieChart.stories-CPWrtjy4.js";import{D as I}from"./RadarChart.stories-uIFFuywJ.js";import{D as S}from"./RadialChart.stories-Cm7Z39WD.js";import{D as $}from"./ScatterChart.stories-vL2TuVrG.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CmnD_cte.js";import"./sys-enter-2-a4cBCFrc.js";import"./alert-Zv2opSBs.js";import"./Link-BJPm0pTR.js";import"./index-CFpPfuDn.js";import"./index-D3zw9ZHH.js";import"./index-R7gtGlkK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCyzTRrI.js";import"./addCustomCSSWithScoping-CUMS_4o0.js";import"./index-CQozdAin.js";import"./index-B2oTG2Uf.js";import"./index-DqQH8U51.js";import"./index-DW1zzZuq.js";import"./Illustrations-wmNg3JaM.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DGgx0Djq.js";import"./ScrollEnablement-BrHNAnnn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D0iz7hg5.js";import"./slim-arrow-left-BO1UfR8Y.js";import"./DemoProps-BxMAk2YW.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C5lAF8NM.js";import"./ChartContainer-Q7SuKlAM.js";import"./index-DCLHA3aG.js";import"./useCancelAnimationFallback-Cb9SzUAA.js";import"./YAxisTicks-DYSqXyIt.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dtosqdom.js";import"./ChartDataLabel-GnerLT_C.js";import"./useOnClickInternal-BOSnyBxY.js";import"./react-content-loader.es-57B8hTYH.js";import"./useIsRTL-CIPw2XHC.js";import"./useLongestYAxisLabel-2-5COmku.js";import"./ComposedChart-cG_joqrf.js";import"./Line-CfUFzhtZ.js";import"./Scatter-BJGsoX-W.js";import"./index-BUl_EHDv.js";import"./index-X16kNTg6.js";import"./Placeholder-BcXb9y8j.js";import"./index-Baj5y-46.js";const E=`# @ui5/webcomponents-react-charts

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
