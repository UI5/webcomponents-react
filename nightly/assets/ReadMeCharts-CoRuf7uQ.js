import{q as i,j as t,Q as l}from"./iframe-D8qIAX_f.js";import{useMDXComponents as p}from"./index-DiTh5Uxf.js";import{M as u,a as h,n as f}from"./blocks-CdiMt6d7.js";import"./Tag-DNk7gwKS.js";import"./index-CUBI-ScP.js";import"./CommandsAndQueries-KW_TEdhO.js";import"./copy-B-3EcH3S.js";import{T as d}from"./TableOfContent-Y2XZ-6aA.js";import{F as b}from"./Footer-CDmCmrx9.js";import"./PageNotFound-DinCfZiZ.js";import{C}from"./index-CY2pXe2c.js";import{D}from"./BarChart.stories-BhEOJLZP.js";import{D as y}from"./BulletChart.stories-4x3hv-Xq.js";import{D as g}from"./ColumnChart.stories-DTi6oLIa.js";import{D as v}from"./ColumnChartWithTrend.stories-C-Qqnh6R.js";import{D as x}from"./ComposedChart.stories-JV3K5b4l.js";import{D as j}from"./DonutChart.stories-Dl3cwHhe.js";import{D as w}from"./LineChart.stories-DKGIhq7n.js";import{D as R}from"./PieChart.stories-BKkENNxb.js";import{D as I}from"./RadarChart.stories-COWT5Ohn.js";import{D as S}from"./RadialChart.stories-BH7QjMob.js";import{D as $}from"./ScatterChart.stories-DD02Rn4L.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BSkhwjAM.js";import"./sys-enter-2-DXbxqs0w.js";import"./alert-D1bzSBmg.js";import"./Link-sqVv97Mp.js";import"./index-BFvnR1Pd.js";import"./index-D5GeJD0z.js";import"./index-DHpssY4F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5egdqPD.js";import"./addCustomCSSWithScoping-Dd8DeQed.js";import"./index-BWh6tnxq.js";import"./index-isyxk5XI.js";import"./index-D_VELT5i.js";import"./index-CaB62qmL.js";import"./Illustrations-CZMe32im.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BRL1XHYX.js";import"./ScrollEnablement-BgCuAdCA.js";import"./animate-JylhYHXj.js";import"./AnimationMode-7AQkMyIY.js";import"./slim-arrow-left-C0HiOgXh.js";import"./DemoProps-DZ4A5pW6.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-CV-x_cw5.js";import"./ChartContainer-Dr4zU3bt.js";import"./index-DjTGYXxN.js";import"./useCancelAnimationFallback-YkCFOvr4.js";import"./YAxisTicks-BCfMweEo.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BXieqBkw.js";import"./ChartDataLabel-BZpWwjXv.js";import"./useOnClickInternal-DvWDSGLE.js";import"./react-content-loader.es-n3jqZgwW.js";import"./useIsRTL-NNdXKXQ8.js";import"./useLongestYAxisLabel-DCqwg8Rk.js";import"./ComposedChart-CrVxJKfL.js";import"./Line-CupyGTpC.js";import"./Scatter-CEW525iz.js";import"./index-2ibPnmh_.js";import"./index-DVOTvZME.js";import"./Placeholder-BSztT9d5.js";import"./index-CpwshWJc.js";const E=`# @ui5/webcomponents-react-charts

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
