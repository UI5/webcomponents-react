import{r as i,j as t,T as l}from"./iframe-B5_Arj0w.js";import{useMDXComponents as p}from"./index-C5nExjBH.js";import{M as u,a as h,m as f}from"./blocks-COnGRWLL.js";import"./Tag-BJnasszI.js";import"./index-c-guL6iQ.js";import{F as d}from"./CommandsAndQueries-DVJBDd6t.js";import"./copy-C_i6TFMR.js";import{T as b}from"./TableOfContent-BVkhO1lE.js";import{C}from"./index-DLx6a9Q4.js";import{D}from"./BarChart.stories-MNhGA42m.js";import{D as y}from"./BulletChart.stories-wCrCHb6w.js";import{D as g}from"./ColumnChart.stories-DgI7YhB3.js";import{D as v}from"./ColumnChartWithTrend.stories-BjBBaAh0.js";import{D as x}from"./ComposedChart.stories-CCvdu81Y.js";import{D as j}from"./DonutChart.stories-DsxBV6UJ.js";import{D as w}from"./LineChart.stories-BvhAD5N2.js";import{D as R}from"./PieChart.stories-Ce275se9.js";import{D as I}from"./RadarChart.stories-CiV90fKt.js";import{D as S}from"./RadialChart.stories-BzYesH3K.js";import{D as T}from"./ScatterChart.stories-DaRHje4c.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DnWQdbsO.js";import"./sys-enter-2-yT9c6yra.js";import"./alert-B0if0F-6.js";import"./index-BHuFfOWM.js";import"./index-BNDO-MHt.js";import"./index-B-64gK_m.js";import"./Link-DYcelBM6.js";import"./index-D9R5EBek.js";import"./index-C4ir_qvG.js";import"./index-NifsWW0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hIZvC53N.js";import"./addCustomCSSWithScoping-C5sFpCeo.js";import"./index-lFnbjF6s.js";import"./Carousel-h6qEuSK_.js";import"./ScrollEnablement-B0UmA8Q7.js";import"./animate-JylhYHXj.js";import"./AnimationMode-jlXFXLOh.js";import"./slim-arrow-left-D8bBb0UX.js";import"./DemoProps-DUrwmXFW.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BbJuOPU0.js";import"./ChartContainer-CKVy-g02.js";import"./index-Swjw5_n1.js";import"./useCancelAnimationFallback-DXBzdAo6.js";import"./YAxisTicks-BSU-MPIT.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-lb0RMozh.js";import"./ChartDataLabel-CRN17Akf.js";import"./useOnClickInternal-CJr7-BK1.js";import"./react-content-loader.es-_UG3nVk0.js";import"./useIsRTL-DJ1G2XQE.js";import"./useLongestYAxisLabel-CeyXagPg.js";import"./ComposedChart-DHPS4mIk.js";import"./Line-CCT4XNUQ.js";import"./Scatter-OZhFvwn1.js";import"./index-B9vRp1wR.js";import"./index-BD3rIm5i.js";import"./Placeholder-CZ6LGG3s.js";import"./index-CBNZgTs4.js";const $=`# @ui5/webcomponents-react-charts

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
