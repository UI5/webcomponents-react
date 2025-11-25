import{r as i,j as t,T as l}from"./iframe-LwV4ThFO.js";import{useMDXComponents as p}from"./index-q5DcgXr2.js";import{M as u,a as h,m as f}from"./blocks-Dip3aHJy.js";import"./Tag-By0Vj2CL.js";import"./index-DWh2FbsL.js";import{F as d}from"./CommandsAndQueries-DPfuXfqc.js";import"./copy-DMZz3mt-.js";import{T as b}from"./TableOfContent-C92htYmA.js";import{C}from"./index-BqhyHqog.js";import{D}from"./BarChart.stories-DpQVAkUX.js";import{D as y}from"./BulletChart.stories-BC3e9jRk.js";import{D as g}from"./ColumnChart.stories-DkL-r7bw.js";import{D as v}from"./ColumnChartWithTrend.stories-35wm0dw_.js";import{D as x}from"./ComposedChart.stories-Cvvmhm8w.js";import{D as j}from"./DonutChart.stories-D1kBlXCr.js";import{D as w}from"./LineChart.stories-LTC7IhcZ.js";import{D as R}from"./PieChart.stories-CubX6YgB.js";import{D as I}from"./RadarChart.stories-ZWo45yzO.js";import{D as S}from"./RadialChart.stories-Cjj1VHpi.js";import{D as T}from"./ScatterChart.stories-Bc5YxLhJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CKI5p7Rd.js";import"./sys-enter-2-DqN3aKF8.js";import"./alert-D7vNrBhD.js";import"./index-Dg0Ul4LB.js";import"./index-DO4DjFA6.js";import"./index-SgnU4gKB.js";import"./Link-BYRJUWj7.js";import"./index-D33G3UXY.js";import"./index-wHmvTXkA.js";import"./index-BYce_ve5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4bciS0g0.js";import"./addCustomCSSWithScoping-d025F1t1.js";import"./index-CtGk4fFi.js";import"./Carousel-CQSzKS4c.js";import"./ScrollEnablement-D9Zcstlh.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CCDO7SYR.js";import"./slim-arrow-left-CWzS-Z2v.js";import"./DemoProps-BsXBWsAO.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B_VkgV-7.js";import"./ChartContainer-ECHPVeK9.js";import"./index-DHEWQlqP.js";import"./useCancelAnimationFallback-DIQYCxZv.js";import"./YAxisTicks-DZDlCM1C.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C8IMg5Bl.js";import"./ChartDataLabel-VHJumB_v.js";import"./useOnClickInternal-lDzqIkgh.js";import"./react-content-loader.es-COXTRyC5.js";import"./useIsRTL-BC_dUgj5.js";import"./useLongestYAxisLabel-B1XLChfx.js";import"./ComposedChart-BfgqP1Ib.js";import"./Line-CLtaxnpW.js";import"./Scatter-Bv1VaDKq.js";import"./index-BrDFoKDx.js";import"./index-hza68XKi.js";import"./Placeholder-C9xTRFrq.js";import"./index-BesbNSXa.js";const $=`# @ui5/webcomponents-react-charts

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
