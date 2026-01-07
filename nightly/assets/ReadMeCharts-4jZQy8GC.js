import{r as i,j as t,T as l}from"./iframe-vPuL6nrR.js";import{useMDXComponents as p}from"./index-SqnB7SsH.js";import{M as u,a as h,n as f}from"./blocks-CGVrLY5L.js";import"./Tag-Bv6LdF2m.js";import"./index-CrDwtJBU.js";import{F as d}from"./CommandsAndQueries-BhV0DcZ1.js";import"./copy-DGJagZ4x.js";import{T as b}from"./TableOfContent-Tu4xnnoI.js";import{C}from"./index-B4Ti-oWh.js";import{D}from"./BarChart.stories-BCiklRZR.js";import{D as y}from"./BulletChart.stories-DDEM7QUO.js";import{D as g}from"./ColumnChart.stories-B-LgIGUU.js";import{D as v}from"./ColumnChartWithTrend.stories-DOmpSWa1.js";import{D as x}from"./ComposedChart.stories-C9269pvj.js";import{D as j}from"./DonutChart.stories-BDaqobbn.js";import{D as w}from"./LineChart.stories-COMCtVQj.js";import{D as R}from"./PieChart.stories-C1bgt8Yz.js";import{D as I}from"./RadarChart.stories-CPvFh_qe.js";import{D as S}from"./RadialChart.stories-DjOk5OwT.js";import{D as T}from"./ScatterChart.stories-DTUTzO-O.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D9zj9sOE.js";import"./sys-enter-2-D6w_QQfA.js";import"./alert-C_Ss2xwM.js";import"./index-MOLGybyv.js";import"./index-D8Laxk3p.js";import"./index-BrWx5AOh.js";import"./Link-eKxzOHxo.js";import"./index-C6iociGO.js";import"./index-DeGdMjr2.js";import"./index-D5bO2WHW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQtnDDkb.js";import"./addCustomCSSWithScoping-Ddp0ymp7.js";import"./index-CfldzWz8.js";import"./Carousel-CnXz_Io7.js";import"./ScrollEnablement-DWmM35W4.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dd7834K3.js";import"./slim-arrow-left-CgfodWWe.js";import"./DemoProps-DW3LC1SP.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Coet8AxR.js";import"./ChartContainer-BnTu7mMk.js";import"./index-DcvU_XKJ.js";import"./useCancelAnimationFallback-CGv5iYKE.js";import"./YAxisTicks-BaUG4ygN.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DooiSEKi.js";import"./ChartDataLabel-CtHpM0cE.js";import"./useOnClickInternal-BBcK9qtN.js";import"./react-content-loader.es-DGyiOOZC.js";import"./useIsRTL-BSPpJGW2.js";import"./useLongestYAxisLabel-DbkuqNul.js";import"./ComposedChart-UjbsM8yl.js";import"./Line-Cocu9jZr.js";import"./Scatter-DvE-zNfR.js";import"./index-9hbaEeuw.js";import"./index-xik0jDAf.js";import"./Placeholder-dwHyOncp.js";import"./index-D2u0IRQH.js";const $=`# @ui5/webcomponents-react-charts

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
