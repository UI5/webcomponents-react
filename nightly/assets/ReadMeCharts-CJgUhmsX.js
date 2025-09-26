import{r as i,j as t,T as l}from"./iframe-BH1OFp8w.js";import{useMDXComponents as p}from"./index-clbF6OIG.js";import{M as u,a as h,k as f}from"./blocks-DYnbeidp.js";import"./Tag-21FIv1do.js";import"./index-4Vj58SYs.js";import{F as d}from"./CommandsAndQueries-DhtC5bjI.js";import"./copy-DLKkxH-i.js";import{T as b}from"./TableOfContent-BsPcIBC0.js";import{C}from"./index-p44PxNQR.js";import{D}from"./BarChart.stories-kmmju_RI.js";import{D as y}from"./BulletChart.stories-DZEQ_r93.js";import{D as g}from"./ColumnChart.stories-Cjnfipz4.js";import{D as v}from"./ColumnChartWithTrend.stories-pqq8dRf2.js";import{D as x}from"./ComposedChart.stories-B43oxfqy.js";import{D as j}from"./DonutChart.stories-DN3bcN8S.js";import{D as w}from"./LineChart.stories-Da2peAF9.js";import{D as R}from"./PieChart.stories-DTrxBdTJ.js";import{D as I}from"./RadarChart.stories-STltSRK6.js";import{D as S}from"./RadialChart.stories-D1O7XAeV.js";import{D as T}from"./ScatterChart.stories-Pb7TJ6qn.js";import"./preload-helper-PPVm8Dsz.js";import"./information-IaTUuI6Q.js";import"./sys-enter-2-CEI4onME.js";import"./alert-BmWcWx5H.js";import"./index-85PSu2U7.js";import"./index-C1e9PFDr.js";import"./index-DWfP0uFj.js";import"./Link-CVh0krje.js";import"./index-DIrfyEUY.js";import"./index-D4MGenX5.js";import"./index-scCH-mdd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vxfHPu95.js";import"./addCustomCSSWithScoping-CO8v9lg_.js";import"./index-Bi6BF3Uk.js";import"./Carousel-Bw3Tcact.js";import"./ScrollEnablement-CFyU8Uno.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Bc_oDvzL.js";import"./slim-arrow-left-4V2ujk1K.js";import"./DemoProps-PS4ayTcf.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BvgE0o9V.js";import"./ChartContainer-C1Eti37t.js";import"./index-DTehykCe.js";import"./useCancelAnimationFallback-C54cxMQr.js";import"./YAxisTicks-mJTc6L-F.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BNlyqS0U.js";import"./ChartDataLabel-BKRytbbQ.js";import"./useOnClickInternal-CXIFkYfB.js";import"./react-content-loader.es-PfrgLOBR.js";import"./useIsRTL-BfFzk8Md.js";import"./useLongestYAxisLabel-czvQwOt6.js";import"./ComposedChart-G66HOy5R.js";import"./Line-V-omRw4i.js";import"./Scatter--5keuV7L.js";import"./index-DmbIuGun.js";import"./index-z-WSxDZ-.js";import"./Placeholder-DNn3Ubn7.js";import"./index-Bx1nvj3W.js";const $=`# @ui5/webcomponents-react-charts

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
