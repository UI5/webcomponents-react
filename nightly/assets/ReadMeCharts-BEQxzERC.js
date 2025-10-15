import{r as i,j as t,T as l}from"./iframe-wbWwESAy.js";import{useMDXComponents as p}from"./index-BOBJYedV.js";import{M as u,a as h,k as f}from"./blocks-B5IYlHFD.js";import"./Tag-BH6lPIks.js";import"./index-DQNSAqOh.js";import{F as d}from"./CommandsAndQueries-C1vl6z57.js";import"./copy-sux1w53_.js";import{T as b}from"./TableOfContent-BwN9rW42.js";import{C}from"./index-BTquhRNv.js";import{D}from"./BarChart.stories-DQY4zzDF.js";import{D as y}from"./BulletChart.stories-j6Mr-mpv.js";import{D as g}from"./ColumnChart.stories-nJRaTZEF.js";import{D as v}from"./ColumnChartWithTrend.stories-jwu_G-oj.js";import{D as x}from"./ComposedChart.stories-DuUnu7zD.js";import{D as j}from"./DonutChart.stories-84BZvQjX.js";import{D as w}from"./LineChart.stories-Ba1DsVV0.js";import{D as R}from"./PieChart.stories--xThkFFG.js";import{D as I}from"./RadarChart.stories-Dm9oV5Sl.js";import{D as S}from"./RadialChart.stories-RLT7WgLD.js";import{D as T}from"./ScatterChart.stories-Dcujzs13.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DASCm05s.js";import"./sys-enter-2-J3fKP-CE.js";import"./alert-D2qcbVgq.js";import"./index-Buwu-oqJ.js";import"./index-B81NkVkP.js";import"./index-Cupokltd.js";import"./Link-BN6Q-gzd.js";import"./index-BnSJ99QD.js";import"./index-DcmA7siw.js";import"./index-DqWD-oTo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqytePVm.js";import"./addCustomCSSWithScoping-CplaRZ4g.js";import"./index-DrYBsayo.js";import"./Carousel-DS3-pQzl.js";import"./ScrollEnablement-DlXiJ1Ol.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CMZOLtNJ.js";import"./slim-arrow-left-BNDOKRQd.js";import"./DemoProps-3R5TvGww.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DoIDwiBc.js";import"./ChartContainer-DQlf5RUq.js";import"./index-D7tI0R5X.js";import"./useCancelAnimationFallback-k4zxSAet.js";import"./YAxisTicks-BlkKcsBM.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B18u0qqv.js";import"./ChartDataLabel-CJZhHFLi.js";import"./useOnClickInternal-D2bptuFd.js";import"./react-content-loader.es-_NQcp30F.js";import"./useIsRTL-Co8lcZlm.js";import"./useLongestYAxisLabel-Bqd6vrWg.js";import"./ComposedChart-B7TI6POr.js";import"./Line-D2MKdLvp.js";import"./Scatter-YymjyOD8.js";import"./index-DRuVZV6j.js";import"./index-DsAidI9N.js";import"./Placeholder-DVrLjYdF.js";import"./index-RRduheJs.js";const $=`# @ui5/webcomponents-react-charts

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
