import{q as i,j as t,Q as l}from"./iframe-DxjY9BFy.js";import{useMDXComponents as p}from"./index-Bk5eT7re.js";import{M as u,a as h,n as f}from"./blocks-CATAEJ_X.js";import"./Tag-DnkuMosg.js";import"./index-B4O__Lt2.js";import"./CommandsAndQueries-GjRh9gzH.js";import"./copy-B5NkvAEv.js";import{T as d}from"./TableOfContent-DS5LpAQ6.js";import{F as b}from"./Footer-CWL8JIjr.js";import"./PageNotFound-CM4Hmt0N.js";import{C}from"./index-0dkx-ulO.js";import{D}from"./BarChart.stories-Bsz3BuRA.js";import{D as y}from"./BulletChart.stories-DRi8eW6D.js";import{D as g}from"./ColumnChart.stories-Dxk7WQyJ.js";import{D as v}from"./ColumnChartWithTrend.stories-CFouEJFy.js";import{D as x}from"./ComposedChart.stories-fbRPQtu0.js";import{D as j}from"./DonutChart.stories-Ap425h71.js";import{D as w}from"./LineChart.stories-hcpXb1Rq.js";import{D as R}from"./PieChart.stories-DQdHeYS_.js";import{D as I}from"./RadarChart.stories-DpsqaEVP.js";import{D as S}from"./RadialChart.stories-DTYAgwvn.js";import{D as $}from"./ScatterChart.stories-pPeuAtBa.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BTY6GktZ.js";import"./sys-enter-2-DcEz2THL.js";import"./alert-CFzS8fE9.js";import"./Link-B0lBzBIQ.js";import"./index-Cr_g29EW.js";import"./index-ssnDYxvl.js";import"./index-D8DdOlBI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjvVRPhX.js";import"./addCustomCSSWithScoping-C4xqV3rh.js";import"./index-qULy9Htf.js";import"./index-DimdoC19.js";import"./index-BwDYaeY0.js";import"./index-CzEttlwi.js";import"./Illustrations-_-Ip7Vxq.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-NCZxpJT5.js";import"./ScrollEnablement-BXQj5TVC.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CzPP68oQ.js";import"./slim-arrow-left-VfrjhDyZ.js";import"./DemoProps-B2xZHFII.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-Dgep0Slw.js";import"./ChartContainer-Rh5CItc7.js";import"./index-W308MxFb.js";import"./useCancelAnimationFallback-DPlPKkiU.js";import"./YAxisTicks-DhgxlJo9.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-dQbkqAPF.js";import"./ChartDataLabel-Bb7U1KTc.js";import"./useOnClickInternal-DZH66d5W.js";import"./react-content-loader.es-HagneoR2.js";import"./useIsRTL-CxRoew2L.js";import"./useLongestYAxisLabel-DviwsI75.js";import"./ComposedChart-DjiRN8sx.js";import"./Line-Cr309yW0.js";import"./Scatter-DwmyU8mI.js";import"./index-CIM-DjaI.js";import"./index-BxZwKhWR.js";import"./Placeholder-C5qCiIz-.js";import"./index-D5W3ufa-.js";const E=`# @ui5/webcomponents-react-charts

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
