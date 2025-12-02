import{r as i,j as t,T as l}from"./iframe-C4uJ0-S9.js";import{useMDXComponents as p}from"./index-7yLcmjFP.js";import{M as u,a as h,m as f}from"./blocks-CBo7THUN.js";import"./Tag-BnlqX_yt.js";import"./index-qq5TSXaV.js";import{F as d}from"./CommandsAndQueries-B5y1yjIv.js";import"./copy-CcXkheL2.js";import{T as b}from"./TableOfContent-CwQN62Px.js";import{C}from"./index-Dyyelcx_.js";import{D}from"./BarChart.stories-DC0W5Eqw.js";import{D as y}from"./BulletChart.stories-BrwS4HR_.js";import{D as g}from"./ColumnChart.stories-CRm8DPfr.js";import{D as v}from"./ColumnChartWithTrend.stories-vlakn2T6.js";import{D as x}from"./ComposedChart.stories-C72hr7UO.js";import{D as j}from"./DonutChart.stories-CJiY3cKN.js";import{D as w}from"./LineChart.stories-DbjfsRco.js";import{D as R}from"./PieChart.stories-CAhnyLa-.js";import{D as I}from"./RadarChart.stories-CeOO2acn.js";import{D as S}from"./RadialChart.stories-BTBUw-JZ.js";import{D as T}from"./ScatterChart.stories-D1MnvfCS.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CGc2Gyu5.js";import"./sys-enter-2-8QAf9lpT.js";import"./alert-CoEJOo1j.js";import"./index-Cqxv-6mm.js";import"./index-Cxz2391_.js";import"./index-KgBIbLv3.js";import"./Link-BtGKi5yG.js";import"./index-DOaerJgo.js";import"./index-ccsE6YRa.js";import"./index-DWkRZCu2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS9Hrz5j.js";import"./addCustomCSSWithScoping-CUwa-fZt.js";import"./index-BCADQjVB.js";import"./Carousel-MHJbT5hc.js";import"./ScrollEnablement-SGqJH1Lr.js";import"./animate-JylhYHXj.js";import"./AnimationMode-tDUiErlw.js";import"./slim-arrow-left-Dmh5ODD0.js";import"./DemoProps-DHDZeP70.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D-31xCwU.js";import"./ChartContainer-xUl3YjCj.js";import"./index-CjnSo5ff.js";import"./useCancelAnimationFallback-X5bdXm3l.js";import"./YAxisTicks-Dnuf8Asa.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CwBccFKI.js";import"./ChartDataLabel-Dz7st5gd.js";import"./useOnClickInternal-CDh_kSTv.js";import"./react-content-loader.es-CYLpdUpV.js";import"./useIsRTL-DASzHde-.js";import"./useLongestYAxisLabel-DEDlu8pM.js";import"./ComposedChart-fjwfb8P6.js";import"./Line-BlgDtE_v.js";import"./Scatter-BrH-a_MY.js";import"./index-Css34f3E.js";import"./index-DIYBqBPk.js";import"./Placeholder-CiGGSglB.js";import"./index-ClK-I6rj.js";const $=`# @ui5/webcomponents-react-charts

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
