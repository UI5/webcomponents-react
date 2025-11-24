import{r as i,j as t,T as l}from"./iframe-ChLklOsd.js";import{useMDXComponents as p}from"./index-C8O_9vrB.js";import{M as u,a as h,m as f}from"./blocks-DJtWS-rM.js";import"./Tag-DfUNsarH.js";import"./index-D3GBtHew.js";import{F as d}from"./CommandsAndQueries-BJfqhrRX.js";import"./copy-e7lZwdk_.js";import{T as b}from"./TableOfContent-DlI8e9kq.js";import{C}from"./index-DhGoU_kZ.js";import{D}from"./BarChart.stories-Cn0uBkDK.js";import{D as y}from"./BulletChart.stories-BsCpwQbw.js";import{D as g}from"./ColumnChart.stories-CayZrclV.js";import{D as v}from"./ColumnChartWithTrend.stories-CVnQZq_g.js";import{D as x}from"./ComposedChart.stories-DA6PjsJ5.js";import{D as j}from"./DonutChart.stories-BhPSyCqz.js";import{D as w}from"./LineChart.stories-DMiJTDuF.js";import{D as R}from"./PieChart.stories-DOkm58hK.js";import{D as I}from"./RadarChart.stories-C1Xl7BAk.js";import{D as S}from"./RadialChart.stories-p6vi9JZZ.js";import{D as T}from"./ScatterChart.stories-B_gPLD1N.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cwgz9DFQ.js";import"./sys-enter-2-CCtRtPlT.js";import"./alert-B2sdUTAu.js";import"./index-zPNCu5nO.js";import"./index-CZdKIXPg.js";import"./index-BapOo3Yq.js";import"./Link-8xYNNbnA.js";import"./index-CLorPZ9t.js";import"./index-DapyP3wm.js";import"./index-C6Hr8eB_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxJjekgT.js";import"./addCustomCSSWithScoping-CUADiRCd.js";import"./index-k8fk5wba.js";import"./Carousel-BwxXpNRd.js";import"./ScrollEnablement-ZwyKnO_p.js";import"./animate-JylhYHXj.js";import"./AnimationMode-uuxDVNPh.js";import"./slim-arrow-left-Cc7Lun7C.js";import"./DemoProps-Dx0PgGi-.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Cw-HlPDS.js";import"./ChartContainer-DUPvzYz6.js";import"./index-r7SyDcBw.js";import"./useCancelAnimationFallback-BPaD1HEz.js";import"./YAxisTicks-CUeOLKmL.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D1EPo6Zr.js";import"./ChartDataLabel-B6lnJzWL.js";import"./useOnClickInternal-Cks3JokY.js";import"./react-content-loader.es-C239Le9I.js";import"./useIsRTL-RlsHBs8r.js";import"./useLongestYAxisLabel-BqzFLPi6.js";import"./ComposedChart-CX8MCn5h.js";import"./Line-DyTPdCT7.js";import"./Scatter-ip0W2kEf.js";import"./index-CMZw2ELx.js";import"./index-BEbVFmLo.js";import"./Placeholder-CBaKHrVj.js";import"./index-DSUA09Tf.js";const $=`# @ui5/webcomponents-react-charts

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
