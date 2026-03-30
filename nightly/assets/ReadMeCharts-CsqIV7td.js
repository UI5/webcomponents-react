import{n as i,j as t,N as l}from"./iframe-DMCuegit.js";import{u as p,M as u,a as h,k as f}from"./blocks-_hT2CGz-.js";import"./Tag-DKKBiDqY.js";import"./index-eKDFsa2E.js";import"./CommandsAndQueries-C9E2MGX7.js";import"./copy-CPtUp5y0.js";import{T as d}from"./TableOfContent-CJ3fOdBx.js";import{F as b}from"./Footer-0Wa-LUTc.js";import"./PageNotFound-BG19bJbD.js";import{C}from"./index-xOKMFqOq.js";import{D}from"./BarChart.stories-Bw5ufXCl.js";import{D as y}from"./BulletChart.stories-F2mB0hAb.js";import{D as g}from"./ColumnChart.stories-DepT8vXT.js";import{D as v}from"./ColumnChartWithTrend.stories-CsysyW9d.js";import{D as x}from"./ComposedChart.stories-DVUGJ3Ab.js";import{D as j}from"./DonutChart.stories-hgMTaSJK.js";import{D as w}from"./LineChart.stories-BgCBEm_4.js";import{D as R}from"./PieChart.stories-CoixO1Sh.js";import{D as I}from"./RadarChart.stories-5b-r-KnA.js";import{D as S}from"./RadialChart.stories-CK5_sXTy.js";import{D as $}from"./ScatterChart.stories-MidRGIDx.js";import"./preload-helper-PPVm8Dsz.js";import"./information-5_fbL55R.js";import"./sys-enter-2-Dil9t1r8.js";import"./alert-D7vPLYbi.js";import"./Link-CmPTNs7p.js";import"./index-C9z-ZS1p.js";import"./index-C1STFZgh.js";import"./index-Di3QE5re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5tqyg7w.js";import"./addCustomCSSWithScoping-C0Smz55A.js";import"./index-otx7j-A2.js";import"./index-Dzpyi8IH.js";import"./index-D62lIz3L.js";import"./index-DEoJMyHo.js";import"./Illustrations-bTO4h7is.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BiMT2jt9.js";import"./ScrollEnablement-CBsMaVqO.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C02crE_5.js";import"./slim-arrow-left-BNtrStT1.js";import"./DemoProps-DWP8CXtO.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-Bs-v_5dK.js";import"./ChartContainer-Cwsk6fTh.js";import"./index-CFS5q5jB.js";import"./useCancelAnimationFallback-DWB0vNdc.js";import"./YAxisTicks-DK3oF_C_.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BePu66ce.js";import"./ChartDataLabel-DnAbc4hX.js";import"./useOnClickInternal-CBFOjOc7.js";import"./react-content-loader.es-b6VazM3r.js";import"./useIsRTL-D9xi9QIt.js";import"./useLongestYAxisLabel-VDow5sAt.js";import"./ComposedChart-c5C0srZk.js";import"./Line-C_7v7SaT.js";import"./Scatter-B7QBIfwo.js";import"./index-pTUlwSLH.js";import"./index-BpLNRwJ6.js";import"./Placeholder-ao3S0P2O.js";import"./index-qCJghFMv.js";const E=`# @ui5/webcomponents-react-charts

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
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function Gt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Gt as default};
