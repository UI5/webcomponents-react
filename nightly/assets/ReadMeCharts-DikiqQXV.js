import{r as i,j as t,T as l}from"./iframe-dcfOuKvt.js";import{useMDXComponents as p}from"./index-s6pmBJrF.js";import{M as u,a as h,m as f}from"./blocks-CuD-56fD.js";import"./Tag-wpbJw-fJ.js";import"./index-DKVFb7ln.js";import{F as d}from"./CommandsAndQueries-XLh3rfRK.js";import"./copy-CjQxEWgu.js";import{T as b}from"./TableOfContent-Ci6yIg8W.js";import{C}from"./index-B1rV5Bu4.js";import{D}from"./BarChart.stories-CUsUWVAC.js";import{D as y}from"./BulletChart.stories-CXUhMdxQ.js";import{D as g}from"./ColumnChart.stories-Bau2wQv0.js";import{D as v}from"./ColumnChartWithTrend.stories-BorLMyKH.js";import{D as x}from"./ComposedChart.stories-UKi5isHD.js";import{D as j}from"./DonutChart.stories-oR8CdJjr.js";import{D as w}from"./LineChart.stories-CtyQLhsd.js";import{D as R}from"./PieChart.stories-C7hvR7Qa.js";import{D as I}from"./RadarChart.stories-BpdaSkq_.js";import{D as S}from"./RadialChart.stories-C_JUBdYw.js";import{D as T}from"./ScatterChart.stories-B1qmPRMp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CU_5ogqg.js";import"./sys-enter-2-Ws311tut.js";import"./alert-BjY8k0mz.js";import"./index-DPsFL1rE.js";import"./index-ZW_BnH9T.js";import"./index-CvN_j3lV.js";import"./Link-Bb4iXCLh.js";import"./index-DOoV4d9M.js";import"./index-CLyQ0iFn.js";import"./index-fw2ccDa-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyhaBlGc.js";import"./addCustomCSSWithScoping-CSOIgEcY.js";import"./index-BFv8_OJi.js";import"./Carousel-DbRuBO2G.js";import"./ScrollEnablement-BhFMnfiL.js";import"./animate-JylhYHXj.js";import"./AnimationMode--M206Y3S.js";import"./slim-arrow-left-CFhhO6QL.js";import"./DemoProps-DAjfpKmC.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CBJauG1w.js";import"./ChartContainer-BYQpt8DZ.js";import"./index-BJoDmJyK.js";import"./useCancelAnimationFallback-0VwEeT9v.js";import"./YAxisTicks-BxAK9qr4.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BMlRPOp8.js";import"./ChartDataLabel-BueKE8hp.js";import"./useOnClickInternal-BYVW_heX.js";import"./react-content-loader.es-C475RCmK.js";import"./useIsRTL-DsbxojB9.js";import"./useLongestYAxisLabel-BRq4hG3h.js";import"./ComposedChart-CZWaJBdB.js";import"./Line-znXqFnHS.js";import"./Scatter-70FoZ9U5.js";import"./index-ztwn0XeB.js";import"./index-B78EAtRk.js";import"./Placeholder-DCM3m2v5.js";import"./index-Cs-2vY4O.js";const $=`# @ui5/webcomponents-react-charts

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
