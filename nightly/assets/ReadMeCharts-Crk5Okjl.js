import{q as i,j as t,Q as l}from"./iframe-C_hHAafN.js";import{useMDXComponents as p}from"./index-D3HSzI5H.js";import{M as u,a as h,n as f}from"./blocks-DkbtP44I.js";import"./Tag-eVGHGbIg.js";import"./index-3QVLAy4g.js";import"./CommandsAndQueries-9eolN_GD.js";import"./copy-RggualJu.js";import{T as d}from"./TableOfContent--xyEPkZT.js";import{F as b}from"./Footer-Cs4jbAjg.js";import"./PageNotFound-C7jxbIgP.js";import{C}from"./index-CqmlH_kD.js";import{D}from"./BarChart.stories-BC50l08F.js";import{D as y}from"./BulletChart.stories-CUIdsm-b.js";import{D as g}from"./ColumnChart.stories-BBqylF_O.js";import{D as v}from"./ColumnChartWithTrend.stories-CLVDiWJT.js";import{D as x}from"./ComposedChart.stories-DONNkNjP.js";import{D as j}from"./DonutChart.stories-C0A5orOE.js";import{D as w}from"./LineChart.stories-CWJQQlrE.js";import{D as R}from"./PieChart.stories-CYSdXeE9.js";import{D as I}from"./RadarChart.stories-Dh8nuJus.js";import{D as S}from"./RadialChart.stories-BQ8iw12u.js";import{D as $}from"./ScatterChart.stories-B2J3f4Al.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BzxR6BB4.js";import"./sys-enter-2-Bb8fTRXf.js";import"./alert-CfcbMAjf.js";import"./Link-SYOek4pb.js";import"./index-nRsHzHP6.js";import"./index-DqhVaTSX.js";import"./index-C7mqYyTc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmUXk235.js";import"./addCustomCSSWithScoping-D9hLtcaz.js";import"./index-BKTg9IVY.js";import"./index-DaMaB5I7.js";import"./index-BmCCqQCC.js";import"./index-DDQ0aIRQ.js";import"./Illustrations-CNZ22cEs.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DfQMUlBp.js";import"./ScrollEnablement-ByLKUiOa.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DEFUrNoU.js";import"./slim-arrow-left-DN-eF9WV.js";import"./DemoProps-CI6wz6M2.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-C6VyTcRf.js";import"./ChartContainer-BIOF2gsP.js";import"./index-CXkptAkK.js";import"./useCancelAnimationFallback-C5-kIJ7X.js";import"./YAxisTicks-g4J7gRDq.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BRnlSxds.js";import"./ChartDataLabel-CIkjjKb-.js";import"./useOnClickInternal-DGGuJl6P.js";import"./react-content-loader.es-CVwULAd7.js";import"./useIsRTL-B_cTxHD6.js";import"./useLongestYAxisLabel-B3ZDcvCS.js";import"./ComposedChart-MdwVS_0D.js";import"./Line-Bgt12wtJ.js";import"./Scatter-dHEkYfqR.js";import"./index-DajqU6JV.js";import"./index-jzlkc769.js";import"./Placeholder-C3oVf5is.js";import"./index-DfyDdFYn.js";const E=`# @ui5/webcomponents-react-charts

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
