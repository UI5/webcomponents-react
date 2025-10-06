import{r as i,j as t,T as l}from"./iframe-HvCg7yUW.js";import{useMDXComponents as p}from"./index-CE4Hfwqi.js";import{M as u,a as h,k as f}from"./blocks-D8Z2Dyw_.js";import"./Tag-BplAIBUz.js";import"./index-DuAmAsky.js";import{F as d}from"./CommandsAndQueries-DUi4l31N.js";import"./copy-DBsC0j81.js";import{T as b}from"./TableOfContent-BCbq4pBF.js";import{C}from"./index-D3MkvD3c.js";import{D}from"./BarChart.stories-C9h2Hrje.js";import{D as y}from"./BulletChart.stories-MUWLNBWS.js";import{D as g}from"./ColumnChart.stories-Dl6kM0Qn.js";import{D as v}from"./ColumnChartWithTrend.stories-CLcwBFYx.js";import{D as x}from"./ComposedChart.stories-DZBEyy_t.js";import{D as j}from"./DonutChart.stories-B5ZNfq4X.js";import{D as w}from"./LineChart.stories-qZjXl7DC.js";import{D as R}from"./PieChart.stories-CvVQbNmw.js";import{D as I}from"./RadarChart.stories-Dfk-hkzI.js";import{D as S}from"./RadialChart.stories-BpppvgM7.js";import{D as T}from"./ScatterChart.stories-DuS-WAjs.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CCnVD-2j.js";import"./sys-enter-2-X1IC7sb7.js";import"./alert-Dmmp7J4K.js";import"./index-iO1m8u6x.js";import"./index-BaM0OdR1.js";import"./index-DPhzHQJ0.js";import"./Link-Bg-vZYST.js";import"./index-DmLJcEoD.js";import"./index-D5kiTLsH.js";import"./index-DpfgSJii.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQB1q1h5.js";import"./addCustomCSSWithScoping-Bswf-IYk.js";import"./index-7L-T-PBR.js";import"./Carousel-NU2fggM7.js";import"./ScrollEnablement-B9_nTXP_.js";import"./animate-JylhYHXj.js";import"./AnimationMode--zqzUGl1.js";import"./slim-arrow-left-C_i-yr8T.js";import"./DemoProps-D1ZhtyNH.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BIhQTlM7.js";import"./ChartContainer-BZn5JPjg.js";import"./index-BmFdlWyd.js";import"./useCancelAnimationFallback-DIaZMytj.js";import"./YAxisTicks-BRDrOQva.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C16q3PFg.js";import"./ChartDataLabel-O3PFSP20.js";import"./useOnClickInternal-CfuiuCq6.js";import"./react-content-loader.es-CVtatrzO.js";import"./useIsRTL-BLxVr6sR.js";import"./useLongestYAxisLabel-5kaYWMxJ.js";import"./ComposedChart-Ch0KcGba.js";import"./Line-Buq_9MlW.js";import"./Scatter-UZ469uEb.js";import"./index-DrM09E1A.js";import"./index-CKRioBML.js";import"./Placeholder-e-6l8G3r.js";import"./index-CrIUVmt5.js";const $=`# @ui5/webcomponents-react-charts

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
