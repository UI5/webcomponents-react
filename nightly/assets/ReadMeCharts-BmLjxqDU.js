import{r as i,j as t,T as l}from"./iframe-DVlTfEM-.js";import{useMDXComponents as p}from"./index-k_8IF_2O.js";import{M as u,a as h,m as f}from"./blocks-DrSp3MOM.js";import"./Tag-BNH48-R1.js";import"./index-Cikr51XZ.js";import{F as d}from"./CommandsAndQueries-BkPdYDds.js";import"./copy-Do4831X0.js";import{T as b}from"./TableOfContent-Dm46pPOt.js";import{C}from"./index-BxqMPrrG.js";import{D}from"./BarChart.stories-7lk-ezOY.js";import{D as y}from"./BulletChart.stories-NgW31nXB.js";import{D as g}from"./ColumnChart.stories-C7-RQ2Uy.js";import{D as v}from"./ColumnChartWithTrend.stories-D7-_PIqb.js";import{D as x}from"./ComposedChart.stories-CObfnhbN.js";import{D as j}from"./DonutChart.stories-CYGuxPVO.js";import{D as w}from"./LineChart.stories-UMJE9xaE.js";import{D as R}from"./PieChart.stories-BuY83v3y.js";import{D as I}from"./RadarChart.stories-Da5PYygc.js";import{D as S}from"./RadialChart.stories-B7N3-oH7.js";import{D as T}from"./ScatterChart.stories-DfJVvegA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CmhnSrRB.js";import"./sys-enter-2-ty4GJ2q8.js";import"./alert-MBG6abBg.js";import"./index-D8q9J4Er.js";import"./index-D5QdPm5n.js";import"./index-VtIqKiJ-.js";import"./Link-B2NzUiP2.js";import"./index-I1wK0hXe.js";import"./index-gAu6pc3o.js";import"./index-B-srII_E.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuLQb_Od.js";import"./addCustomCSSWithScoping-DyDcwna5.js";import"./index-CyKhe59o.js";import"./Carousel-BJEI7QGx.js";import"./ScrollEnablement-D7Xa6acP.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Pblh1Hhm.js";import"./slim-arrow-left-B5xXDaCV.js";import"./DemoProps-D8kcKsI4.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D0i28Hqm.js";import"./ChartContainer-BAaDFMa3.js";import"./index-Dyam-MVy.js";import"./useCancelAnimationFallback-Bds42boE.js";import"./YAxisTicks-DDZpGKEM.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CHN1tqp5.js";import"./ChartDataLabel-DBoai1th.js";import"./useOnClickInternal-Ciocs_v0.js";import"./react-content-loader.es-Kf0uvKxx.js";import"./useIsRTL-EPGyQxGy.js";import"./useLongestYAxisLabel-Ce3EEsql.js";import"./ComposedChart-DElBu7Mq.js";import"./Line-Cb41TZpO.js";import"./Scatter-vJm51ozB.js";import"./index-G5EjvON2.js";import"./index-4sr3D4i7.js";import"./Placeholder-BOo467o1.js";import"./index-DAhDN6lg.js";const $=`# @ui5/webcomponents-react-charts

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
