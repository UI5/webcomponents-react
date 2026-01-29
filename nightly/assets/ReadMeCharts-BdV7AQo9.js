import{r as i,j as t,O as l}from"./iframe-CyAbfAjR.js";import{useMDXComponents as p}from"./index-06KDG4AT.js";import{M as u,a as h,n as f}from"./blocks-D91UiS7A.js";import"./Tag-DcmGlVyp.js";import"./index-Dx49XSH_.js";import{F as d}from"./CommandsAndQueries-B2npLt1g.js";import"./copy-DuIUrssG.js";import{T as b}from"./TableOfContent-BN3tMLts.js";import{C}from"./index-CYUTo7om.js";import{D}from"./BarChart.stories-BZwMHZSK.js";import{D as y}from"./BulletChart.stories-DsqiYXBH.js";import{D as g}from"./ColumnChart.stories-Dmg0mfuP.js";import{D as v}from"./ColumnChartWithTrend.stories-CJJXmFvJ.js";import{D as x}from"./ComposedChart.stories-BuUDkd6G.js";import{D as j}from"./DonutChart.stories-CCjZ1rWJ.js";import{D as w}from"./LineChart.stories-IlxblLDL.js";import{D as R}from"./PieChart.stories-B2jSKv6N.js";import{D as I}from"./RadarChart.stories-DG9RLQYy.js";import{D as S}from"./RadialChart.stories-BbW3S0hJ.js";import{D as $}from"./ScatterChart.stories-CB99aI-y.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Rep9dVOS.js";import"./sys-enter-2-_ycOnn14.js";import"./alert-BWU-sYPN.js";import"./index-B_ujFW-9.js";import"./index-zvTPe1JW.js";import"./index-C2mRWa3H.js";import"./Link-Cj1yeMGo.js";import"./index-DTVJfpj2.js";import"./index-DhltPY3F.js";import"./index-CmuOjIMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyLeRq-g.js";import"./addCustomCSSWithScoping-zxsplMRu.js";import"./index-DGFLZE4P.js";import"./Carousel-Bp10Zm_L.js";import"./ScrollEnablement-_UA22n7q.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DgO4kpsG.js";import"./slim-arrow-left-Dk7X-gX2.js";import"./DemoProps-DRnisdiV.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D38YXExG.js";import"./ChartContainer-CJgyUR4R.js";import"./index-EwWM-M_C.js";import"./useCancelAnimationFallback-Mw06fqcZ.js";import"./YAxisTicks-nyEKdL_4.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DJhHLEoi.js";import"./ChartDataLabel-DI6abe4B.js";import"./useOnClickInternal-DLWhKyTt.js";import"./react-content-loader.es-DQT8SbKL.js";import"./useIsRTL-CvAdZl9h.js";import"./useLongestYAxisLabel-VKFsPoYV.js";import"./ComposedChart-NsU-abhp.js";import"./Line-COrWZBIt.js";import"./Scatter-DrKg3hm6.js";import"./index-Sv4FEDXt.js";import"./index-D1zQrUL_.js";import"./Placeholder-Blcn5LHA.js";import"./index-BH0oqadH.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
