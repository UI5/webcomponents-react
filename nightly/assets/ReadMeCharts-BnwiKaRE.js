import{q as i,j as t,Q as l}from"./iframe-CzTCZe7v.js";import{useMDXComponents as p}from"./index-CDGFt6A1.js";import{M as u,a as h,n as f}from"./blocks-DeBlAQEU.js";import"./Tag-Czdm_FZb.js";import"./index-C0tHrsgM.js";import"./CommandsAndQueries-DvEFwabB.js";import"./copy-BOjVvS6l.js";import{T as d}from"./TableOfContent-Bn2gWDi_.js";import{F as b}from"./Footer-DxyUJb9o.js";import"./PageNotFound-BAD2GAcl.js";import{C}from"./index-CFdVLoQO.js";import{D}from"./BarChart.stories-EUmXrQn2.js";import{D as y}from"./BulletChart.stories-CSumAZFz.js";import{D as g}from"./ColumnChart.stories-BtRFQyK0.js";import{D as v}from"./ColumnChartWithTrend.stories-C2GbfsIo.js";import{D as x}from"./ComposedChart.stories-DdkEltVp.js";import{D as j}from"./DonutChart.stories-DIyHj_2n.js";import{D as w}from"./LineChart.stories-C2XDE7jC.js";import{D as R}from"./PieChart.stories-Q_wJsWX5.js";import{D as I}from"./RadarChart.stories-BhcXxrsk.js";import{D as S}from"./RadialChart.stories-CYWmF2hj.js";import{D as $}from"./ScatterChart.stories-2h1qNwQj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bqvi10T6.js";import"./sys-enter-2-DyCO0gh_.js";import"./alert-9P0VyDJW.js";import"./Link-CZjSyYly.js";import"./index-DKruw7SF.js";import"./index-DzASyxpH.js";import"./index-C8dlP9nE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DPTQrRIc.js";import"./addCustomCSSWithScoping-Cq2MgCDz.js";import"./index-DIk2IhoZ.js";import"./index-wip9afZ2.js";import"./index-CXe4MOnZ.js";import"./index-B7_ymrud.js";import"./Illustrations-D7TiwfCu.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-9TBvu4X6.js";import"./ScrollEnablement-CI2_tTC7.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B2fqwp-D.js";import"./slim-arrow-left-ZuC7LZH3.js";import"./DemoProps-DunX9-KO.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DIy79DwH.js";import"./ChartContainer-CsnZbGvA.js";import"./index-CnvUSw0N.js";import"./useCancelAnimationFallback-Bmt73Npk.js";import"./YAxisTicks-BzxBWzvr.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BHVfaYCS.js";import"./ChartDataLabel-BSP4qwdD.js";import"./useOnClickInternal-BQ2zAioX.js";import"./react-content-loader.es-DEllolSw.js";import"./useIsRTL-DxJ1Nm0H.js";import"./useLongestYAxisLabel-BuYQL6Oy.js";import"./ComposedChart-Y7RobhWV.js";import"./Line-DxknOqYJ.js";import"./Scatter-z5DML8Sw.js";import"./index-Degl4igG.js";import"./index-CJJPLo1-.js";import"./Placeholder-Buc5YPmt.js";import"./index-C4jJeUUo.js";const E=`# @ui5/webcomponents-react-charts

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
