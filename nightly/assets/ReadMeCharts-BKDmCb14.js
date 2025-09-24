import{r as i,j as t,T as l}from"./iframe-CTc_pUME.js";import{useMDXComponents as p}from"./index-CbFOQhGC.js";import{M as u,a as h,k as f}from"./blocks-Bdab0qOx.js";import"./Tag-BJVcJF8V.js";import"./index-BmIFgcgy.js";import{F as d}from"./CommandsAndQueries-BKl-Lehx.js";import"./copy-CX-UstQv.js";import{T as b}from"./TableOfContent-sQi4Lj9M.js";import{C}from"./index-DhIET2oe.js";import{D}from"./BarChart.stories-CcgwZ8bT.js";import{D as y}from"./BulletChart.stories-BpKc1PzS.js";import{D as g}from"./ColumnChart.stories-Cu5aoHND.js";import{D as v}from"./ColumnChartWithTrend.stories-CkcwzMov.js";import{D as x}from"./ComposedChart.stories-BWCfP0z7.js";import{D as j}from"./DonutChart.stories-D50TsFQX.js";import{D as w}from"./LineChart.stories-ClTgzj9I.js";import{D as R}from"./PieChart.stories-C1HSpBJ4.js";import{D as I}from"./RadarChart.stories-5PhvzHpC.js";import{D as S}from"./RadialChart.stories-Da8pYnNC.js";import{D as T}from"./ScatterChart.stories-CtGWMKR9.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BUnhqMn4.js";import"./sys-enter-2-DOV5JEOM.js";import"./alert-DylNOMF0.js";import"./index-Z8jBBqBa.js";import"./index-C61H3I4w.js";import"./index-cPYEFV1s.js";import"./Link-CIXpUy3N.js";import"./index-dZVrSoBW.js";import"./index-MjXDOENA.js";import"./index-CHi_LEvO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B7yiJaHj.js";import"./addCustomCSSWithScoping-Dc_j6Yzk.js";import"./index-6ELyezq3.js";import"./Carousel--poHJ4rs.js";import"./ScrollEnablement-Dqoexmfr.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B_oGW71R.js";import"./slim-arrow-left-RYhrTrFs.js";import"./DemoProps-_Xje_xDe.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-s--xK9bK.js";import"./ChartContainer-C717DI0P.js";import"./index-CP2pU2KW.js";import"./useCancelAnimationFallback-EOG4JfHG.js";import"./YAxisTicks-DyWMIMHF.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Bk2822ga.js";import"./ChartDataLabel-Dp_KdIJ1.js";import"./useOnClickInternal-CJiEVE37.js";import"./react-content-loader.es-DX_Kvl_B.js";import"./useIsRTL-BmQn44KR.js";import"./useLongestYAxisLabel-CX0Kayhr.js";import"./ComposedChart-BfGTo_8X.js";import"./Line-Ddm_S-nu.js";import"./Scatter-Yjn49p9h.js";import"./index-Ch9oJASA.js";import"./index-CE6Qw9pV.js";import"./Placeholder-soLH2Qrh.js";import"./index-Cqcs9tlF.js";const $=`# @ui5/webcomponents-react-charts

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
