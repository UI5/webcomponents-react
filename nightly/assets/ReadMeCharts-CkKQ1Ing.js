import{q as i,j as t,Q as l}from"./iframe-B-JB9Mrg.js";import{useMDXComponents as p}from"./index-C6ab_87c.js";import{M as u,a as h,n as f}from"./blocks-gUSy1z8f.js";import"./Tag-rJaILc04.js";import"./index-BUD8Dloj.js";import"./CommandsAndQueries-BMpPCtQI.js";import"./copy-B23uPwnI.js";import{T as d}from"./TableOfContent-DfATZyjw.js";import{F as b}from"./Footer-BoXWBFNs.js";import"./PageNotFound-DwjQIJMb.js";import{C}from"./index-dnTGxBC9.js";import{D}from"./BarChart.stories-pQi8KEmr.js";import{D as y}from"./BulletChart.stories-qZIrOgyC.js";import{D as g}from"./ColumnChart.stories-adUHPRmJ.js";import{D as v}from"./ColumnChartWithTrend.stories-DxXaf8Hn.js";import{D as x}from"./ComposedChart.stories-BN6BFiIz.js";import{D as j}from"./DonutChart.stories-CGfSYXnO.js";import{D as w}from"./LineChart.stories-33h-Pw88.js";import{D as R}from"./PieChart.stories-B-Ob551_.js";import{D as I}from"./RadarChart.stories-Po_dQFHB.js";import{D as S}from"./RadialChart.stories-DeJc60bb.js";import{D as $}from"./ScatterChart.stories-BhTPZ_OA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bvi5gDZ4.js";import"./sys-enter-2-CDMo7mQ9.js";import"./alert-B5324jWv.js";import"./Link-CUeYoLvN.js";import"./index-UGbMf_4Y.js";import"./index-4LdkJtv9.js";import"./index-BmSIhnsV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_QxycfjS.js";import"./addCustomCSSWithScoping-DBFLD3Dt.js";import"./index-BNovRndr.js";import"./index-CxXKp92D.js";import"./index-C_JAtQ1_.js";import"./index-COHIvdEC.js";import"./Illustrations-BGg5U59s.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-CBXmrb6N.js";import"./ScrollEnablement-5XSvrzux.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D_4JG1aY.js";import"./slim-arrow-left-GBXAg914.js";import"./DemoProps-BOEWv_Na.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D-CIErCV.js";import"./ChartContainer-DCHySxPw.js";import"./index-Cm1_U4l_.js";import"./useCancelAnimationFallback-CUlr3b_c.js";import"./YAxisTicks-DqKjDZds.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D5hu6QI_.js";import"./ChartDataLabel-DBFP317I.js";import"./useOnClickInternal-DDOx-5MR.js";import"./react-content-loader.es-Got6m98b.js";import"./useIsRTL-ClKF0kCB.js";import"./useLongestYAxisLabel-CbP5Ps4K.js";import"./ComposedChart-BQq7j6hO.js";import"./Line-CnKCGMwv.js";import"./Scatter-7-HVjTjZ.js";import"./index-flzYEw_8.js";import"./index-B9xk0GVL.js";import"./Placeholder-DkWH5OlG.js";import"./index-BzqzOdGa.js";const E=`# @ui5/webcomponents-react-charts

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
