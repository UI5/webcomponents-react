import{r as i,j as t,T as l}from"./iframe-BN0GWVQe.js";import{useMDXComponents as p}from"./index-BLbTpX55.js";import{M as u,a as h,m as f}from"./blocks-D3wn40tr.js";import"./Tag-CZAeCV6F.js";import"./index-Bxb5YZWP.js";import{F as d}from"./CommandsAndQueries-C4w7BIRn.js";import"./copy-B0NSZ-1k.js";import{T as b}from"./TableOfContent-BKLAU6oD.js";import{C}from"./index-npLcFIt8.js";import{D}from"./BarChart.stories-BysrdFrH.js";import{D as y}from"./BulletChart.stories-CFNJ9xHO.js";import{D as g}from"./ColumnChart.stories-COejXrpR.js";import{D as v}from"./ColumnChartWithTrend.stories-DUkAp1_2.js";import{D as x}from"./ComposedChart.stories-DOdBUfbW.js";import{D as j}from"./DonutChart.stories-D1rcUj0f.js";import{D as w}from"./LineChart.stories-D3hDFu6i.js";import{D as R}from"./PieChart.stories-9k7l8_XS.js";import{D as I}from"./RadarChart.stories-C68jmX8j.js";import{D as S}from"./RadialChart.stories-B1CfvI02.js";import{D as T}from"./ScatterChart.stories-DeZHYI8v.js";import"./preload-helper-PPVm8Dsz.js";import"./information-b87QwzTv.js";import"./sys-enter-2-C5oyesud.js";import"./alert-DOWzv_2H.js";import"./index-BEhXLrZk.js";import"./index-Dt-X_HjL.js";import"./index-BtPW2b7B.js";import"./Link-Br_XV4sE.js";import"./index-BqPBCR84.js";import"./index-BQ2VPUfC.js";import"./index-CGlofGT5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Du_vcu6e.js";import"./addCustomCSSWithScoping-D2hXBZmk.js";import"./index-BaX--um2.js";import"./Carousel-96Q_Acp3.js";import"./ScrollEnablement-iDo916Z3.js";import"./animate-JylhYHXj.js";import"./AnimationMode-T3LO_ifS.js";import"./slim-arrow-left-CY-Ut3i7.js";import"./DemoProps-KwmaWMxC.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Diga23Ls.js";import"./ChartContainer-DxRB9Dkh.js";import"./index-D6tqan70.js";import"./useCancelAnimationFallback-Cc16XSut.js";import"./YAxisTicks-BBlFk0T4.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Cy_JU75H.js";import"./ChartDataLabel-DvX4EyER.js";import"./useOnClickInternal-13KNhuhP.js";import"./react-content-loader.es-fJFQ_drf.js";import"./useIsRTL-CgYFYmB4.js";import"./useLongestYAxisLabel-DGxEni6Y.js";import"./ComposedChart-BnaHx2-w.js";import"./Line-CosSvtgz.js";import"./Scatter-HLT3hDg8.js";import"./index-DPWy6ual.js";import"./index-CRFCwHpk.js";import"./Placeholder-DjcMg5A7.js";import"./index-0fZQb41C.js";const $=`# @ui5/webcomponents-react-charts

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
