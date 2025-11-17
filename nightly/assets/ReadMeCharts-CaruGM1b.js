import{r as i,j as t,T as l}from"./iframe-BpIV0mIG.js";import{useMDXComponents as p}from"./index-R-0b2Q-0.js";import{M as u,a as h,m as f}from"./blocks-DoVp3o8V.js";import"./Tag-PaDhhp3x.js";import"./index-ihq2izus.js";import{F as d}from"./CommandsAndQueries-Cg1r-kOH.js";import"./copy-ByeAxUWO.js";import{T as b}from"./TableOfContent-27QT0PvO.js";import{C}from"./index-77rT9Y1j.js";import{D}from"./BarChart.stories-p8m5DZ9n.js";import{D as y}from"./BulletChart.stories-CnHI_uZ1.js";import{D as g}from"./ColumnChart.stories-BbOm0rDu.js";import{D as v}from"./ColumnChartWithTrend.stories-pOYx3XoC.js";import{D as x}from"./ComposedChart.stories-CNX0RxJE.js";import{D as j}from"./DonutChart.stories--Zajnugy.js";import{D as w}from"./LineChart.stories-C65ZCNck.js";import{D as R}from"./PieChart.stories--3_fsA_U.js";import{D as I}from"./RadarChart.stories-DV9Jg8Kt.js";import{D as S}from"./RadialChart.stories-9HME1AiW.js";import{D as T}from"./ScatterChart.stories-B97IuVZB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CehFepv7.js";import"./sys-enter-2-D_Yhxrfh.js";import"./alert-Dc_mbBlI.js";import"./index-qBYywHNO.js";import"./index-CTTxG0ct.js";import"./index-CIjFLNbK.js";import"./Link-BYY56m65.js";import"./index-BED2olIo.js";import"./index-fu097dPl.js";import"./index-BLHX1u79.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DqFGSoTQ.js";import"./addCustomCSSWithScoping-B4Uic3jc.js";import"./index-DtbW9kAL.js";import"./Carousel-DN2k7gWv.js";import"./ScrollEnablement-C71FmZua.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DYhSoygI.js";import"./slim-arrow-left-Dzhl-kXL.js";import"./DemoProps-Cm1yAxSb.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DoLL3qW2.js";import"./ChartContainer-DGQkRrYn.js";import"./index-Bs-Icwyw.js";import"./useCancelAnimationFallback-yDk4mOGu.js";import"./YAxisTicks-CxHXK8r_.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C6litNR-.js";import"./ChartDataLabel-bNLzEHEH.js";import"./useOnClickInternal-BkUcNTNZ.js";import"./react-content-loader.es-WK0c-7mC.js";import"./useIsRTL-COaeyO-1.js";import"./useLongestYAxisLabel-D0Qvfg8E.js";import"./ComposedChart-BjcxJOFi.js";import"./Line-D-guEn0X.js";import"./Scatter-LzwnB861.js";import"./index-CZ4HYF6o.js";import"./index-vuwKHTjp.js";import"./Placeholder-BvBj6-Qj.js";import"./index-PoxgCOJZ.js";const $=`# @ui5/webcomponents-react-charts

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
