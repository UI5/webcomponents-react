import{n as i,j as t,N as l}from"./iframe-D-TNtC6A.js";import{useMDXComponents as p}from"./index-DDfPSZgy.js";import{M as u,a as h,n as f}from"./blocks-RldXLLlr.js";import"./Tag-CVmCoWT_.js";import"./index-PDZqoB_N.js";import"./CommandsAndQueries-CCy8Y-No.js";import"./copy-BJeubdCo.js";import{T as d}from"./TableOfContent-DEnJajz9.js";import{F as b}from"./Footer-DhOHIb5E.js";import"./PageNotFound-CRTwOHot.js";import{C}from"./index-BwWdMi57.js";import{D}from"./BarChart.stories-CIdgJ5_X.js";import{D as y}from"./BulletChart.stories-DLwvTjIe.js";import{D as g}from"./ColumnChart.stories-BCeQbE_K.js";import{D as v}from"./ColumnChartWithTrend.stories-C8Gs3wOF.js";import{D as x}from"./ComposedChart.stories-CdaDZlfu.js";import{D as j}from"./DonutChart.stories-BnR73EQ2.js";import{D as w}from"./LineChart.stories-Dw1xK6iE.js";import{D as R}from"./PieChart.stories-cOJ2_is1.js";import{D as I}from"./RadarChart.stories-B3UCtI1B.js";import{D as S}from"./RadialChart.stories-CNTgHfU5.js";import{D as $}from"./ScatterChart.stories-CzoBv0vf.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DHrVSqd8.js";import"./sys-enter-2-B-IKKoin.js";import"./alert-COQE9Wii.js";import"./Link-BGCjF1qN.js";import"./index-C2w-vlt1.js";import"./index-BDllvg-C.js";import"./index-DbrfUFZo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CV5eSmfw.js";import"./addCustomCSSWithScoping-5_2YlXdt.js";import"./index-C4n54s66.js";import"./index-DA9C_9_K.js";import"./index-dgee814-.js";import"./index-dI-i4srq.js";import"./Illustrations-MW4Ztj5J.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-CL6ZnZ0K.js";import"./ScrollEnablement-D_mv-5V2.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BtL-DWSr.js";import"./slim-arrow-left-T5YbGK6d.js";import"./DemoProps-YrxcXGz0.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-vbn_-RtD.js";import"./ChartContainer-B1s_EAwg.js";import"./index-ptWDqsta.js";import"./useCancelAnimationFallback-CtTX7j_A.js";import"./YAxisTicks-hRgPQVzi.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-tgXqE3sD.js";import"./ChartDataLabel-B74q4oK8.js";import"./useOnClickInternal-DBWAB7xI.js";import"./react-content-loader.es-DUaQMfo1.js";import"./useIsRTL-2x73p0EG.js";import"./useLongestYAxisLabel-CWOkFcr_.js";import"./ComposedChart-BQ9l44RH.js";import"./Line-BRr02HUU.js";import"./Scatter-CVBeC4nC.js";import"./index-Bv8xRvLN.js";import"./index-3lrEOn_f.js";import"./Placeholder-8VtBe6aa.js";import"./index-D9ErNEdd.js";const E=`# @ui5/webcomponents-react-charts

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
