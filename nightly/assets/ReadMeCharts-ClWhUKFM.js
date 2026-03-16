import{q as i,j as t,Q as l}from"./iframe--9dKe8DB.js";import{useMDXComponents as p}from"./index-KI9hm8HB.js";import{M as u,a as h,n as f}from"./blocks-sz1V1YD1.js";import"./Tag-Dx2xRUom.js";import"./index-CPDFIZvY.js";import"./CommandsAndQueries-DmMMilME.js";import"./copy-DDHnU-KJ.js";import{T as d}from"./TableOfContent-BY9idK35.js";import{F as b}from"./Footer-Q0CQ_qDk.js";import"./PageNotFound-CuY3r4La.js";import{C}from"./index-DQwdFxfG.js";import{D}from"./BarChart.stories-Dkht4-_E.js";import{D as y}from"./BulletChart.stories-zPBkjONi.js";import{D as g}from"./ColumnChart.stories-g1uTNBw8.js";import{D as v}from"./ColumnChartWithTrend.stories-F3-OOUV3.js";import{D as x}from"./ComposedChart.stories-DB8ewAAc.js";import{D as j}from"./DonutChart.stories-CvX1dI0A.js";import{D as w}from"./LineChart.stories-DTowjeQX.js";import{D as R}from"./PieChart.stories-eiB5ZtZ4.js";import{D as I}from"./RadarChart.stories-DV00oxQg.js";import{D as S}from"./RadialChart.stories-D8vH3sJl.js";import{D as $}from"./ScatterChart.stories-f_95K3Qb.js";import"./preload-helper-PPVm8Dsz.js";import"./information-nAlSmLiB.js";import"./sys-enter-2-w7b_cFRw.js";import"./alert-QMDkEN5b.js";import"./Link-BglFcPBB.js";import"./index-CZTUC9tr.js";import"./index-mjSuc6PB.js";import"./index-TfvKDlH8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZXl1Qbt.js";import"./addCustomCSSWithScoping-OfWYI4vx.js";import"./index-BYfUGIr5.js";import"./index-W9KwanBR.js";import"./index-FyOsxtAw.js";import"./index-rkrari7y.js";import"./Illustrations-CYV_ZGoP.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-pXgSqydE.js";import"./ScrollEnablement-B0ocudnB.js";import"./animate-JylhYHXj.js";import"./AnimationMode-ONSyT7jG.js";import"./slim-arrow-left-CDYiPsUQ.js";import"./DemoProps-gDGndEEm.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-DoRGnTs9.js";import"./ChartContainer-DLuOgSQ8.js";import"./index-BvCJekuK.js";import"./useCancelAnimationFallback-nOhCLfaw.js";import"./YAxisTicks-DZRB5OcZ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BdVTCCbL.js";import"./ChartDataLabel-CGEk5geB.js";import"./useOnClickInternal-r7ZyT8Zn.js";import"./react-content-loader.es-Bv0Spv2w.js";import"./useIsRTL-4mhkBenG.js";import"./useLongestYAxisLabel-BI1S8EVn.js";import"./ComposedChart-Deon17oz.js";import"./Line-Ct97lj_5.js";import"./Scatter-S8KOnnYo.js";import"./index-CgvmzVUI.js";import"./index-BofA36ko.js";import"./Placeholder-NNs4bUVZ.js";import"./index-ByAC2hFZ.js";const E=`# @ui5/webcomponents-react-charts

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
