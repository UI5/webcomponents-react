import{r as i,j as t,T as l}from"./iframe-Djuy8UzU.js";import{useMDXComponents as p}from"./index-CgJpCImo.js";import{M as u,a as h,m as f}from"./blocks-Phup9Acl.js";import"./Tag-B73vgZIB.js";import"./index-Da0VpmUz.js";import{F as d}from"./CommandsAndQueries-DtRiB_cH.js";import"./copy-YJEoppKk.js";import{T as b}from"./TableOfContent-DnBqa40u.js";import{C}from"./index-DbRWmXm-.js";import{D}from"./BarChart.stories-kBTFJvCx.js";import{D as y}from"./BulletChart.stories-BJPgPb8a.js";import{D as g}from"./ColumnChart.stories-DQbp40N7.js";import{D as v}from"./ColumnChartWithTrend.stories-4PulTDvy.js";import{D as x}from"./ComposedChart.stories-DkaXIToR.js";import{D as j}from"./DonutChart.stories-DbC3Mmi3.js";import{D as w}from"./LineChart.stories-CaD4qu6j.js";import{D as R}from"./PieChart.stories-InM-66A3.js";import{D as I}from"./RadarChart.stories-G6ju0vx5.js";import{D as S}from"./RadialChart.stories-0OsqZiyQ.js";import{D as T}from"./ScatterChart.stories-SbI0p30_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CINaYo8g.js";import"./sys-enter-2-BqczY9Tp.js";import"./alert-BZgl_BE3.js";import"./index-BrSO2QY2.js";import"./index-DRZrAGbU.js";import"./index-CLO3npv1.js";import"./Link-BtCtR7u3.js";import"./index-CAq-HQ8b.js";import"./index-B4ZMGb2N.js";import"./index-CgYDTHag.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BYVpCo3h.js";import"./addCustomCSSWithScoping-JvBMAy04.js";import"./index-DedsmHJ0.js";import"./Carousel-CoAqzNtO.js";import"./ScrollEnablement-Bx2z7UGn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Ds6QjbeO.js";import"./slim-arrow-left-CWBeZi_k.js";import"./DemoProps-wtukxsa-.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CBzodgbx.js";import"./ChartContainer-DQuApIHm.js";import"./index-Cv13D_Xn.js";import"./useCancelAnimationFallback-DzKGn72n.js";import"./YAxisTicks-DhkyJw16.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Bl7kPhAM.js";import"./ChartDataLabel-C95JpEzs.js";import"./useOnClickInternal-CzcptiOY.js";import"./react-content-loader.es-CN2R398X.js";import"./useIsRTL-DqdL_3q4.js";import"./useLongestYAxisLabel-3YCLFYcR.js";import"./ComposedChart-DP_GKr1P.js";import"./Line-Demnu7cb.js";import"./Scatter-iIP73rv_.js";import"./index-HCcokNs_.js";import"./index-BEBbaNgV.js";import"./Placeholder-C1e7lK7U.js";import"./index-Cw3QEK6s.js";const $=`# @ui5/webcomponents-react-charts

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
