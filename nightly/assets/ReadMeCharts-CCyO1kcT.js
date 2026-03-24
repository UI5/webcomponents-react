import{q as i,j as t,Q as l}from"./iframe-D9xLC1tL.js";import{useMDXComponents as p}from"./index-DbpRZxa8.js";import{M as u,a as h,n as f}from"./blocks-BGODLmXA.js";import"./Tag-CzLAQHXA.js";import"./index-OpsV8Rzk.js";import"./CommandsAndQueries-Bb-ZfGVO.js";import"./copy-D8VIdABk.js";import{T as d}from"./TableOfContent-CF23Zmfp.js";import{F as b}from"./Footer-C6v4bY5-.js";import"./PageNotFound-DoCPcVkS.js";import{C}from"./index-D6FRWPoz.js";import{D}from"./BarChart.stories-BU1q6J5j.js";import{D as y}from"./BulletChart.stories-CqUn9dZg.js";import{D as g}from"./ColumnChart.stories-XoxkDErs.js";import{D as v}from"./ColumnChartWithTrend.stories-67wLpEoX.js";import{D as x}from"./ComposedChart.stories-DZHzOox3.js";import{D as j}from"./DonutChart.stories-a9QpS4Bk.js";import{D as w}from"./LineChart.stories-CgUFhl1R.js";import{D as R}from"./PieChart.stories-OBg-LT-Y.js";import{D as I}from"./RadarChart.stories-B7l6jCaw.js";import{D as S}from"./RadialChart.stories-C5tLXnzO.js";import{D as $}from"./ScatterChart.stories-Dk09OKPk.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BC9P8f_O.js";import"./sys-enter-2-B7xp7QZ9.js";import"./alert-BEKLDx3c.js";import"./Link-nPbeq8Ca.js";import"./index-D1uvdQ6M.js";import"./index-_EZjG3sX.js";import"./index-1koIOrPL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_OCG7dF.js";import"./addCustomCSSWithScoping-BP0mkxfq.js";import"./index-DNd0s4Kc.js";import"./index-DAKihXgB.js";import"./index-BDQMqb7U.js";import"./index-Dursa8QF.js";import"./Illustrations-VmVh_pyg.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-C4aVER2e.js";import"./ScrollEnablement-CzOU9q0b.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BiHUbu2Y.js";import"./slim-arrow-left--362PEOM.js";import"./DemoProps-BCmt0-Es.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-C3ueAk7W.js";import"./ChartContainer-Cb4wccBF.js";import"./index-C5uwD5iK.js";import"./useCancelAnimationFallback-myxTsREQ.js";import"./YAxisTicks-BCojZcDo.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C-gTfiMc.js";import"./ChartDataLabel-Dd8JwZ03.js";import"./useOnClickInternal-DVngMT4K.js";import"./react-content-loader.es-C39dDwwv.js";import"./useIsRTL-Cjl0qmS-.js";import"./useLongestYAxisLabel-BPVBA_LX.js";import"./ComposedChart-DvrYeQ5Y.js";import"./Line-DuhzX4Xq.js";import"./Scatter-BnwBXtJF.js";import"./index-CNwCUZ_O.js";import"./index-DuI1sGVF.js";import"./Placeholder-Be30RHa7.js";import"./index-BkomFNK0.js";const E=`# @ui5/webcomponents-react-charts

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
