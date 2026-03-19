import{q as i,j as t,Q as l}from"./iframe-CqN2ZhBf.js";import{useMDXComponents as p}from"./index-l_k7HiPu.js";import{M as u,a as h,n as f}from"./blocks-D3fE08ja.js";import"./Tag-DaK0HZJI.js";import"./index-BQSixcl8.js";import"./CommandsAndQueries-BzSACk84.js";import"./copy-BMnDsiBX.js";import{T as d}from"./TableOfContent-CCJgZXEp.js";import{F as b}from"./Footer-DTH9quFy.js";import"./PageNotFound-DDb6UcXH.js";import{C}from"./index-CiFE3c4Y.js";import{D}from"./BarChart.stories-yBPtuStf.js";import{D as y}from"./BulletChart.stories-U7flQjhJ.js";import{D as g}from"./ColumnChart.stories-YpXjFN-i.js";import{D as v}from"./ColumnChartWithTrend.stories-C75pzHs-.js";import{D as x}from"./ComposedChart.stories-9UQqu6JZ.js";import{D as j}from"./DonutChart.stories-D97cZPM6.js";import{D as w}from"./LineChart.stories-yXKiv1kd.js";import{D as R}from"./PieChart.stories-j1BR2UiR.js";import{D as I}from"./RadarChart.stories-Dnyj8m1C.js";import{D as S}from"./RadialChart.stories-5MGjaCLw.js";import{D as $}from"./ScatterChart.stories-CSKfC_oa.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D6BYlg7t.js";import"./sys-enter-2-DctZJMGf.js";import"./alert-CXFO2CkX.js";import"./Link-sJNkb0O1.js";import"./index-C_OjFqiG.js";import"./index-BmfFKSeY.js";import"./index-C6JiuDE8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1eKis37g.js";import"./addCustomCSSWithScoping-DCGf9rRA.js";import"./index-ClO4sXRT.js";import"./index-BLwcEe9O.js";import"./index-BZ-8NUw-.js";import"./index-x-vR1nJy.js";import"./Illustrations-CQ3hDVBV.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-iKPRZEr5.js";import"./ScrollEnablement-B4APcJGh.js";import"./animate-JylhYHXj.js";import"./AnimationMode-cUmlW1kr.js";import"./slim-arrow-left-C8EdLZrr.js";import"./DemoProps-oEEepKd4.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-Bs4frw1N.js";import"./ChartContainer-DlPC6NV1.js";import"./index-B2BYcUEV.js";import"./useCancelAnimationFallback-8nkY4Dgx.js";import"./YAxisTicks-B45g1QUu.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-yHDBjKKh.js";import"./ChartDataLabel-CD1uxjtG.js";import"./useOnClickInternal-JgOzAoWH.js";import"./react-content-loader.es-D4WqNAhg.js";import"./useIsRTL-C9HJPlj_.js";import"./useLongestYAxisLabel-BvUFk6xg.js";import"./ComposedChart-Mw1dKEV7.js";import"./Line-DzQA-qvj.js";import"./Scatter-CyWw7Isq.js";import"./index-CAqgVttg.js";import"./index-B__DchhR.js";import"./Placeholder-DHRRn7m3.js";import"./index-mD2AH0w_.js";const E=`# @ui5/webcomponents-react-charts

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
