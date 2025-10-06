import{r as i,j as t,T as l}from"./iframe-BcULqSVx.js";import{useMDXComponents as p}from"./index-DimjqcOY.js";import{M as u,a as h,k as f}from"./blocks-SeGv6FI8.js";import"./Tag-DE8sZ6fR.js";import"./index-CMCy2tRg.js";import{F as d}from"./CommandsAndQueries-Bjxahy8c.js";import"./copy-DrZjSCYt.js";import{T as b}from"./TableOfContent-BwCnFx1q.js";import{C}from"./index-fSUcIey_.js";import{D}from"./BarChart.stories-C9ZkAroe.js";import{D as y}from"./BulletChart.stories-BbFOIoVT.js";import{D as g}from"./ColumnChart.stories-BSAub3Gv.js";import{D as v}from"./ColumnChartWithTrend.stories-Cmv-G_Pr.js";import{D as x}from"./ComposedChart.stories-DSMw04-S.js";import{D as j}from"./DonutChart.stories-De2n7xzA.js";import{D as w}from"./LineChart.stories-JfMFMY7N.js";import{D as R}from"./PieChart.stories-CN1Yhspa.js";import{D as I}from"./RadarChart.stories-Cb8RuejI.js";import{D as S}from"./RadialChart.stories-DuZX___t.js";import{D as T}from"./ScatterChart.stories-CHV7QIZF.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C0qTg3A6.js";import"./sys-enter-2-hVsohqhg.js";import"./alert-CRlYmZ6n.js";import"./index-DfNAKNyC.js";import"./index-Bht3WMEt.js";import"./index-CEmXgIma.js";import"./Link-D2-7Bb71.js";import"./index-Cd7o7phm.js";import"./index-nOLHZmf_.js";import"./index-72f5Qi1p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYesK5yK.js";import"./addCustomCSSWithScoping-DZ8lcGy4.js";import"./index-D0A2Ruup.js";import"./Carousel-DphYdV7P.js";import"./ScrollEnablement-Bz7jmoT9.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CJ4ECgCp.js";import"./slim-arrow-left-D1CNRBk-.js";import"./DemoProps-C3ted3WE.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Cq6ZF9_M.js";import"./ChartContainer-qgHpyfzD.js";import"./index-D0znPBId.js";import"./useCancelAnimationFallback-DH9HwmiT.js";import"./YAxisTicks-DbijQRud.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CQUmEqq2.js";import"./ChartDataLabel-i041FVjM.js";import"./useOnClickInternal-cZ8wQXp2.js";import"./react-content-loader.es-sLsCnmX_.js";import"./useIsRTL-B93fOd8S.js";import"./useLongestYAxisLabel-C1Q4mjju.js";import"./ComposedChart-BwUig0rn.js";import"./Line-7xVfBfJ9.js";import"./Scatter-CHTkI7al.js";import"./index-2iNHwNI2.js";import"./index-BW2PDZSc.js";import"./Placeholder-DbwuUgfM.js";import"./index-RUr6XV3m.js";const $=`# @ui5/webcomponents-react-charts

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
`;function E(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:$.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(E,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:T}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Ft(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Ft as default};
