import{q as i,j as t,Q as l}from"./iframe-D3LJsbiF.js";import{useMDXComponents as p}from"./index-CyzPa2YT.js";import{M as u,a as h,n as f}from"./blocks-C17hS1H0.js";import"./Tag-DEA3QTbc.js";import"./index-DQRzxDSe.js";import"./CommandsAndQueries-ZyWBFV72.js";import"./copy-CVdXx4M8.js";import{T as d}from"./TableOfContent-VA0eJa1c.js";import{F as b}from"./Footer-BXlDlrd5.js";import"./PageNotFound-BgagSqcc.js";import{C}from"./index-CoyJVYR3.js";import{D}from"./BarChart.stories-CTUx4wzV.js";import{D as y}from"./BulletChart.stories-CHtYdeT-.js";import{D as g}from"./ColumnChart.stories-6S5-f7CN.js";import{D as v}from"./ColumnChartWithTrend.stories-tl06vlr-.js";import{D as x}from"./ComposedChart.stories-TCT3Gse2.js";import{D as j}from"./DonutChart.stories-CY0Au1gD.js";import{D as w}from"./LineChart.stories-LNnGaQgs.js";import{D as R}from"./PieChart.stories-CkxydmYc.js";import{D as I}from"./RadarChart.stories-DjdbCKUb.js";import{D as S}from"./RadialChart.stories-WIHJJVh8.js";import{D as $}from"./ScatterChart.stories-CFEUyDL3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Pe11Evj5.js";import"./sys-enter-2-nzdqIN1z.js";import"./alert-8s9TsqZs.js";import"./Link-DcTIU4K2.js";import"./index-BCAZlXLW.js";import"./index-N6F2Hon5.js";import"./index-CQnpN8bu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CgFvj6Uo.js";import"./addCustomCSSWithScoping-DIPZZBkR.js";import"./index-GY8piuJS.js";import"./index-Do3YGvBX.js";import"./index-CukaHHo2.js";import"./index-Bs-GzB5h.js";import"./Illustrations-DV_KfhEH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-D-HnpAQH.js";import"./ScrollEnablement-B33zvDKT.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BQxjM0o_.js";import"./slim-arrow-left-Dl1l6UzO.js";import"./DemoProps-B9qn2g2D.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-B31qn44U.js";import"./ChartContainer-BjVCx0Ih.js";import"./index-Z6SBhAE6.js";import"./useCancelAnimationFallback-BjiA3omH.js";import"./YAxisTicks-BIV1u62-.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C7lF_w07.js";import"./ChartDataLabel-CvTgHJiY.js";import"./useOnClickInternal-Dc-Z5gU8.js";import"./react-content-loader.es-Da-KzvuD.js";import"./useIsRTL-Cjwt-38Z.js";import"./useLongestYAxisLabel-Dy7DK7If.js";import"./ComposedChart-Du_Uw85x.js";import"./Line-CQzwCKsZ.js";import"./Scatter-BW0eMKzp.js";import"./index-BkyCrD73.js";import"./index-CgDV1aWX.js";import"./Placeholder-Bf_cL2dy.js";import"./index-CNDG57CW.js";const E=`# @ui5/webcomponents-react-charts

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
