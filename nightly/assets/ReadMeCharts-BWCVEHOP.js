import{n as i,j as t,N as l}from"./iframe-18_5pfj2.js";import{useMDXComponents as p}from"./index-CIhtdkHx.js";import{M as u,a as h,n as f}from"./blocks-Cj6CgQUG.js";import"./Tag-s2oCmO6-.js";import"./index-BIj2K6s5.js";import"./CommandsAndQueries-BGW2wCD6.js";import"./copy-BQYJB7Nu.js";import{T as d}from"./TableOfContent-CEQwYXTE.js";import{F as b}from"./Footer-BvGdDwIL.js";import"./PageNotFound-BO4FGO9U.js";import{C}from"./index-jFj6ZRhM.js";import{D}from"./BarChart.stories-CmIVmDz1.js";import{D as y}from"./BulletChart.stories-BxxujHwY.js";import{D as g}from"./ColumnChart.stories-DhRcepgI.js";import{D as v}from"./ColumnChartWithTrend.stories-CxH38oe5.js";import{D as x}from"./ComposedChart.stories-KTbWAe9A.js";import{D as j}from"./DonutChart.stories-Co0t5WTO.js";import{D as w}from"./LineChart.stories-DRaL43Qb.js";import{D as R}from"./PieChart.stories-Cbs_jVrx.js";import{D as I}from"./RadarChart.stories-BbIt3IIY.js";import{D as S}from"./RadialChart.stories-GcxCvgHi.js";import{D as $}from"./ScatterChart.stories-CublJvpM.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CdIjwcxP.js";import"./sys-enter-2-LNLtosyG.js";import"./alert-DegEg84v.js";import"./Link-C9Gq01-B.js";import"./index-DflRRV76.js";import"./index-Dhqddszu.js";import"./index-DiTpBrDm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DVbD4jAU.js";import"./addCustomCSSWithScoping-CAI73UoR.js";import"./index-BlCfzNdo.js";import"./index-Bj-OwMs_.js";import"./index-B3MOIvF5.js";import"./index-CRBj8Lig.js";import"./Illustrations-CxofZbv6.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-D2uxLCf7.js";import"./ScrollEnablement-8Hjnke1V.js";import"./animate-JylhYHXj.js";import"./AnimationMode-uzGRaIkU.js";import"./slim-arrow-left-1GTfUL1F.js";import"./DemoProps-N5xyC22S.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-DpcWHriO.js";import"./ChartContainer-D0lwzx7o.js";import"./index-CqOxtweB.js";import"./useCancelAnimationFallback-DxytxW6M.js";import"./YAxisTicks-BEVz8kHl.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-COY4ZBa-.js";import"./ChartDataLabel-BWeU3-hK.js";import"./useOnClickInternal-KJgS5Uhv.js";import"./react-content-loader.es-IyLCmhra.js";import"./useIsRTL-BN9cZPm6.js";import"./useLongestYAxisLabel-Dle-AF9q.js";import"./ComposedChart-Ci1DwkAL.js";import"./Line-uwhJ5I0g.js";import"./Scatter-BEqqnPXd.js";import"./index-Ccw9G3cl.js";import"./index-muA6xHsi.js";import"./Placeholder-DaWrLYyD.js";import"./index-B-tGPiE1.js";const E=`# @ui5/webcomponents-react-charts

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
