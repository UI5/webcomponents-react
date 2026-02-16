import{r as i,j as t,O as l}from"./iframe-e2ulr1yw.js";import{useMDXComponents as p}from"./index-PtYZPZtM.js";import{M as u,a as h,n as f}from"./blocks-Cdk7qnv2.js";import"./Tag-CbLqF2IE.js";import"./index-Eon1qDJA.js";import{F as d}from"./CommandsAndQueries-Do207XX8.js";import"./copy-CcaF1jLX.js";import{T as b}from"./TableOfContent-eq2ptewm.js";import{C}from"./index-DJbWeLxz.js";import{D}from"./BarChart.stories-CDFpxrH0.js";import{D as y}from"./BulletChart.stories-DXF79YkG.js";import{D as g}from"./ColumnChart.stories-BIDJNX5k.js";import{D as v}from"./ColumnChartWithTrend.stories-CoaQzJUA.js";import{D as x}from"./ComposedChart.stories-_gxAPPKw.js";import{D as j}from"./DonutChart.stories-CMM5LBR8.js";import{D as w}from"./LineChart.stories-BUR6t0YG.js";import{D as R}from"./PieChart.stories-DvmftUCr.js";import{D as I}from"./RadarChart.stories-DY9rv1Zg.js";import{D as S}from"./RadialChart.stories-wH7b5BVz.js";import{D as $}from"./ScatterChart.stories-Cua_pK85.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BWwLhz3O.js";import"./sys-enter-2-gpB0Ga9p.js";import"./alert-DlKAiOO0.js";import"./index-svxMDckn.js";import"./index-DgxvJH02.js";import"./index-Cqf-Pfp_.js";import"./Link-CLFq5zdq.js";import"./index-DYD2ksj7.js";import"./index-CEhzVLt4.js";import"./index-BfxPgEEU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ri6qBofk.js";import"./addCustomCSSWithScoping-I9DyZrRa.js";import"./index-BSw3xQau.js";import"./Carousel-D4sZshU7.js";import"./ScrollEnablement-DRdFoZEe.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Bpc593I2.js";import"./slim-arrow-left-CNdGSVgz.js";import"./DemoProps-CyKTNklF.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CGDkPQsI.js";import"./ChartContainer-gzxwh_ok.js";import"./index-QUiaryyk.js";import"./useCancelAnimationFallback-D_MVfhtS.js";import"./YAxisTicks-DK6YY7p2.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-By5x_00M.js";import"./ChartDataLabel-ZRWWsXV8.js";import"./useOnClickInternal-B74AFmWU.js";import"./react-content-loader.es-BgS3IJpd.js";import"./useIsRTL-Cmkb72EN.js";import"./useLongestYAxisLabel-BgQNKSEw.js";import"./ComposedChart-CqWzOH5e.js";import"./Line-B1M70gFf.js";import"./Scatter-CrtwQK7X.js";import"./index-DnP6nYwc.js";import"./index-RSl7CTnF.js";import"./Placeholder-Cqnt2kx4.js";import"./index-B-Tzz7dq.js";const E=`# @ui5/webcomponents-react-charts

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
