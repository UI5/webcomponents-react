import{q as i,j as t,Q as l}from"./iframe-jlZ7haKH.js";import{useMDXComponents as p}from"./index-BDRke1Rk.js";import{M as u,a as h,n as f}from"./blocks-GgaXKyV0.js";import"./Tag-BnvuCeE_.js";import"./index-DB16QQd2.js";import"./CommandsAndQueries-C62gP0Wv.js";import"./copy-BXrubwPI.js";import{T as d}from"./TableOfContent-BshhcyQK.js";import{F as b}from"./Footer-Cyt0gd6r.js";import"./PageNotFound-D9hL323p.js";import{C}from"./index-CYhq5wj2.js";import{D}from"./BarChart.stories-CMAUJ5yc.js";import{D as y}from"./BulletChart.stories-ZJYuDGJY.js";import{D as g}from"./ColumnChart.stories-Da_nbz3y.js";import{D as v}from"./ColumnChartWithTrend.stories-BNxSJY3u.js";import{D as x}from"./ComposedChart.stories-d8d5XDHo.js";import{D as j}from"./DonutChart.stories-B_tb_cNT.js";import{D as w}from"./LineChart.stories-CrmFlcRn.js";import{D as R}from"./PieChart.stories-BHANngM6.js";import{D as I}from"./RadarChart.stories-CNlO9kmc.js";import{D as S}from"./RadialChart.stories-_k0Dk1B1.js";import{D as $}from"./ScatterChart.stories-DTHeSN-o.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D3vqfhW8.js";import"./sys-enter-2-D9bp2L1z.js";import"./alert-7poHLLeI.js";import"./Link-CmI2uh2s.js";import"./index-UUYL4bRA.js";import"./index-BfL44CNr.js";import"./index-DnDTeT16.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_1ld5sf.js";import"./addCustomCSSWithScoping-Cg_sPlM6.js";import"./index-BtQ34sqz.js";import"./index-BcLhYSRh.js";import"./index-EXbubmTe.js";import"./index-BJRmM88L.js";import"./Illustrations-DJD2oa8r.js";import"./i18n-defaults-C7ICj5-E.js";import"./Carousel-D5vR5ryx.js";import"./ScrollEnablement-BXzeOUzo.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C7Qg2-1O.js";import"./slim-arrow-left-CqPnOf3y.js";import"./DemoProps-BfWgd8JG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-sWzUd5bG.js";import"./ChartContainer-gFJ4x614.js";import"./index-BoJsfaPJ.js";import"./useCancelAnimationFallback-SQhYSc5m.js";import"./YAxisTicks-Cq14o3Ry.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CpwPQxoR.js";import"./ChartDataLabel-B8iRh_qS.js";import"./useOnClickInternal-Cg5cyK8e.js";import"./react-content-loader.es-CIW2jFxq.js";import"./useIsRTL-CBECOKtB.js";import"./useLongestYAxisLabel-BXAKkev9.js";import"./ComposedChart-lYr4xEWF.js";import"./Line-BW-L2UEe.js";import"./Scatter-IkgXHSHN.js";import"./index-6hBZa06m.js";import"./index-BbqRPFV_.js";import"./Placeholder-BZ1MtBJW.js";import"./index-BvKSewjR.js";const E=`# @ui5/webcomponents-react-charts

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
