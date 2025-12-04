import{r as i,j as t,T as l}from"./iframe-DrPmn2Fl.js";import{useMDXComponents as p}from"./index-D0JiuHQ4.js";import{M as u,a as h,m as f}from"./blocks-BjYhsAle.js";import"./Tag-DTGJG_3A.js";import"./index-D7exUdgR.js";import{F as d}from"./CommandsAndQueries-DJtqUE3T.js";import"./copy-BYLHU9Z4.js";import{T as b}from"./TableOfContent-DpdaqcN6.js";import{C}from"./index-DrbaeLsa.js";import{D}from"./BarChart.stories-iMCt-tQO.js";import{D as y}from"./BulletChart.stories-Ds1O3l1J.js";import{D as g}from"./ColumnChart.stories-BjPct8Io.js";import{D as v}from"./ColumnChartWithTrend.stories-NjsHg0EY.js";import{D as x}from"./ComposedChart.stories-BdhyrFTu.js";import{D as j}from"./DonutChart.stories-CC2soMSH.js";import{D as w}from"./LineChart.stories-gjzeObd6.js";import{D as R}from"./PieChart.stories-DHogDi8K.js";import{D as I}from"./RadarChart.stories-CdF5TY3i.js";import{D as S}from"./RadialChart.stories-EHDGaPif.js";import{D as T}from"./ScatterChart.stories-Dm8CBtz9.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B3e_XIJr.js";import"./sys-enter-2-BzGI5wIC.js";import"./alert-k9YiTQ21.js";import"./index-BcboqTLf.js";import"./index-7KEOFJG9.js";import"./index-pqPyLDtB.js";import"./Link-DpbM7hv-.js";import"./index-CSSeCaDH.js";import"./index-BDgABtQ5.js";import"./index-CsBAZiQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D8f6CQWY.js";import"./addCustomCSSWithScoping-Dp7JQ0AP.js";import"./index-BryeGZHH.js";import"./Carousel-B5iUSSje.js";import"./ScrollEnablement-DEcYIeHm.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DNg0w5fI.js";import"./slim-arrow-left-D3-iNxro.js";import"./DemoProps-BEXgLnos.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D3hVzD9h.js";import"./ChartContainer-C7RRUig3.js";import"./index-Bo9OnBPA.js";import"./useCancelAnimationFallback-DzfsorXP.js";import"./YAxisTicks-ChIa1eAr.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dchkl_EJ.js";import"./ChartDataLabel-BrYtXT89.js";import"./useOnClickInternal-Djm-PkfP.js";import"./react-content-loader.es-opqQU4aV.js";import"./useIsRTL-CO6iPAax.js";import"./useLongestYAxisLabel-DvdYRT3f.js";import"./ComposedChart-RYYMuaXo.js";import"./Line-Cn549Ujb.js";import"./Scatter-CIwPWnl5.js";import"./index-Bw2juhdE.js";import"./index-h36GN_E_.js";import"./Placeholder-CbLdgdOv.js";import"./index-C_dZjbg0.js";const $=`# @ui5/webcomponents-react-charts

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
