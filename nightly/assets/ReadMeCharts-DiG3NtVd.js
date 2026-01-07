import{r as i,j as t,T as l}from"./iframe-datodc_T.js";import{useMDXComponents as p}from"./index-c_OJYfdv.js";import{M as u,a as h,n as f}from"./blocks-C83taKT5.js";import"./Tag-aYNaIA2f.js";import"./index-BxYLcFT1.js";import{F as d}from"./CommandsAndQueries-9K4be_0B.js";import"./copy-fv_X0Lju.js";import{T as b}from"./TableOfContent-C9390aIY.js";import{C}from"./index-DrDpsthB.js";import{D}from"./BarChart.stories-uSp7gAaH.js";import{D as y}from"./BulletChart.stories-Dn3w05lG.js";import{D as g}from"./ColumnChart.stories-Fr67krMa.js";import{D as v}from"./ColumnChartWithTrend.stories-BE7-BXn4.js";import{D as x}from"./ComposedChart.stories-BMJX2ErS.js";import{D as j}from"./DonutChart.stories-D59Pjvva.js";import{D as w}from"./LineChart.stories-dsBQAAtu.js";import{D as R}from"./PieChart.stories-SGKz8CQU.js";import{D as I}from"./RadarChart.stories-fZX2n3aX.js";import{D as S}from"./RadialChart.stories-Cwu_MwZZ.js";import{D as T}from"./ScatterChart.stories-B7-Crc_4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BVFOZm1x.js";import"./sys-enter-2-D-jHJs9Q.js";import"./alert-Bayru5wq.js";import"./index-CaqpJvlq.js";import"./index-D2t_qzWG.js";import"./index-DHA5QYCq.js";import"./Link-CguLCm0R.js";import"./index-Dsm5uoLy.js";import"./index-Be6r5cNn.js";import"./index-D6USDY88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpNALNgF.js";import"./addCustomCSSWithScoping-DKvV4UVz.js";import"./index-CjE0y9ul.js";import"./Carousel-BEzjYG0v.js";import"./ScrollEnablement-D4RYTcKh.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BNtged9t.js";import"./slim-arrow-left-85O7Qm_g.js";import"./DemoProps-B_LLuewx.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DKZWv88w.js";import"./ChartContainer-D0qZ5oI2.js";import"./index-C_9-hdCb.js";import"./useCancelAnimationFallback-CdFSaQvr.js";import"./YAxisTicks-F1QZPbJ1.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DjsBmqye.js";import"./ChartDataLabel-BS6N1dyt.js";import"./useOnClickInternal-SrUz2p1-.js";import"./react-content-loader.es-xAnqoBlP.js";import"./useIsRTL-Csf7JH7H.js";import"./useLongestYAxisLabel-rHNiLVh1.js";import"./ComposedChart-b06lRBO7.js";import"./Line-BlryrwcP.js";import"./Scatter-CMpAH0Vo.js";import"./index-5nOjyCm0.js";import"./index-CqhIcHjs.js";import"./Placeholder-YEgSU78x.js";import"./index-Dr-8782D.js";const $=`# @ui5/webcomponents-react-charts

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
