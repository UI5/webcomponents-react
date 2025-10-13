import{r as i,j as t,T as l}from"./iframe-BwzExPTt.js";import{useMDXComponents as p}from"./index-Bhb-E2jz.js";import{M as u,a as h,k as f}from"./blocks-DoJWfB08.js";import"./Tag-6zLQrCPp.js";import"./index-DtZ9fejJ.js";import{F as d}from"./CommandsAndQueries-BAktAF7I.js";import"./copy-BSdgsQYS.js";import{T as b}from"./TableOfContent-DtXVnr4E.js";import{C}from"./index-CXOWzaQC.js";import{D}from"./BarChart.stories-D-IZUU51.js";import{D as y}from"./BulletChart.stories-DfSBSreT.js";import{D as g}from"./ColumnChart.stories-B5Qm1Ath.js";import{D as v}from"./ColumnChartWithTrend.stories-BIwYY09C.js";import{D as x}from"./ComposedChart.stories-DOBUi7fO.js";import{D as j}from"./DonutChart.stories-aMAnXOBC.js";import{D as w}from"./LineChart.stories-DaFiZVf2.js";import{D as R}from"./PieChart.stories-B92ru-Dt.js";import{D as I}from"./RadarChart.stories-BCiBKMo4.js";import{D as S}from"./RadialChart.stories-D3YCJf9J.js";import{D as T}from"./ScatterChart.stories-DLF8ZS5j.js";import"./preload-helper-PPVm8Dsz.js";import"./information-YiJ0QHVh.js";import"./sys-enter-2-C0SOTOu7.js";import"./alert-D_Giis5d.js";import"./index-Ct12qQup.js";import"./index-CbkAtpsv.js";import"./index-C5BRum1i.js";import"./Link-Bms7m456.js";import"./index-A3mNxkAq.js";import"./index-Bt-scq3R.js";import"./index-DpOmhYSX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoHCzslt.js";import"./addCustomCSSWithScoping-pwpobhcn.js";import"./index-BFn1YmVY.js";import"./Carousel-DT4DaOSx.js";import"./ScrollEnablement-BQF6zwAp.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DkqMSo0A.js";import"./slim-arrow-left-DIIacTCj.js";import"./DemoProps-_bgWQ93A.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-hyBloz76.js";import"./ChartContainer-D1WIRU_e.js";import"./index-BkGTzC-k.js";import"./useCancelAnimationFallback-BwyV60Uu.js";import"./YAxisTicks-ChX3ig7V.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-sXomvjjh.js";import"./ChartDataLabel-ZKgVLD5O.js";import"./useOnClickInternal-ILVjfABk.js";import"./react-content-loader.es-CD7AQsXd.js";import"./useIsRTL-BKwAHn4d.js";import"./useLongestYAxisLabel-J4zKa1GC.js";import"./ComposedChart-DKba1YYO.js";import"./Line-BI_a6Uqf.js";import"./Scatter-DYT2HQtI.js";import"./index-Djqoz8Or.js";import"./index-BQvobzjs.js";import"./Placeholder-CDQN2zl5.js";import"./index-C-eWbf-j.js";const $=`# @ui5/webcomponents-react-charts

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
