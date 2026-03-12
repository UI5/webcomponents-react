import{q as i,j as t,Q as l}from"./iframe-C3CH6Gut.js";import{useMDXComponents as p}from"./index-fd8ePsOB.js";import{M as u,a as h,n as f}from"./blocks-BfQItv6G.js";import"./Tag-De3iZMh7.js";import"./index-vwI-U5xE.js";import"./CommandsAndQueries-DWpv2ZFM.js";import"./copy-DfCS5kJc.js";import{T as d}from"./TableOfContent-BDQe8E66.js";import{F as b}from"./Footer-D6sg8NSk.js";import"./PageNotFound-C9BkN1AJ.js";import{C}from"./index-DTZScXCW.js";import{D}from"./BarChart.stories-CTSrWHmd.js";import{D as y}from"./BulletChart.stories-DdjK3NJ2.js";import{D as g}from"./ColumnChart.stories-HRKjmFuh.js";import{D as v}from"./ColumnChartWithTrend.stories-D8NAfDNG.js";import{D as x}from"./ComposedChart.stories-BfPtQCrn.js";import{D as j}from"./DonutChart.stories-D8lrUOLo.js";import{D as w}from"./LineChart.stories-YO2E6pj1.js";import{D as R}from"./PieChart.stories-DhQmPrgS.js";import{D as I}from"./RadarChart.stories-crah-gzH.js";import{D as S}from"./RadialChart.stories-BZcBPHvo.js";import{D as $}from"./ScatterChart.stories-DdsP6zCM.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0kU-Y2g.js";import"./sys-enter-2-DsGdXA7v.js";import"./alert-DYbKfQPB.js";import"./Link-BFP9PJhq.js";import"./index-RpXG-GZG.js";import"./index-BXc3FtAh.js";import"./index-ZpAOrS54.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ByfKWctW.js";import"./addCustomCSSWithScoping-C-wsztWv.js";import"./index-F7LUawnX.js";import"./index-QTHM5Lz2.js";import"./index-CpH_mmb2.js";import"./index-U6QQkp2y.js";import"./Illustrations-Boea4aTE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BHVEb8Z8.js";import"./ScrollEnablement-GDu9Dh24.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dj3nr6Sn.js";import"./slim-arrow-left-9bAi5bhr.js";import"./DemoProps-XPEth1yo.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Hseyw7sS.js";import"./ChartContainer-DuTPUvkB.js";import"./index-DlrcfpRT.js";import"./useCancelAnimationFallback-DDcILh58.js";import"./YAxisTicks-CL9lMZLK.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-5yMUEoX6.js";import"./ChartDataLabel-D54YXx93.js";import"./useOnClickInternal-CQzMo13r.js";import"./react-content-loader.es-DxEmew_d.js";import"./useIsRTL-C5JDBeUG.js";import"./useLongestYAxisLabel-BZW0JJz5.js";import"./ComposedChart-BTtAWmG3.js";import"./Line-BagBG4Vd.js";import"./Scatter-BJNYknWz.js";import"./index-wpyrAKTi.js";import"./index-M5mrNmfH.js";import"./Placeholder-zJdICLx-.js";import"./index-RlE8oXHO.js";const E=`# @ui5/webcomponents-react-charts

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
