import{r as i,j as t,T as l}from"./iframe-BX6l_vT-.js";import{useMDXComponents as p}from"./index-Bzy26fup.js";import{M as u,a as h,n as f}from"./blocks-dv2dOEr1.js";import"./Tag-CPbL9Jm0.js";import"./index-Brt5lPnV.js";import{F as d}from"./CommandsAndQueries-BQamr4MW.js";import"./copy-DJpI-ZKv.js";import{T as b}from"./TableOfContent-DfjT9NBm.js";import{C}from"./index-Bm2-LBVE.js";import{D}from"./BarChart.stories-Wgiz80sd.js";import{D as y}from"./BulletChart.stories-CEAIyJvZ.js";import{D as g}from"./ColumnChart.stories-BSCoydjN.js";import{D as v}from"./ColumnChartWithTrend.stories-BbBHnvbb.js";import{D as x}from"./ComposedChart.stories-BXc_8R4H.js";import{D as j}from"./DonutChart.stories-BP9AGXiu.js";import{D as w}from"./LineChart.stories-Dl63TP84.js";import{D as R}from"./PieChart.stories-TFbEFSvb.js";import{D as I}from"./RadarChart.stories-DdXpZHv1.js";import{D as S}from"./RadialChart.stories-DDIZRRuy.js";import{D as T}from"./ScatterChart.stories-C8ckE0vj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BHJaLhAv.js";import"./sys-enter-2-EZBfp4iZ.js";import"./alert-DUVH4PBA.js";import"./index-JvehRoeP.js";import"./index-DN8AW8ib.js";import"./index-CPY8w0If.js";import"./Link-LBAuQHud.js";import"./index-5GNX0CLe.js";import"./index-CdanIUAH.js";import"./index-CUja4hYj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJYHkaYl.js";import"./addCustomCSSWithScoping-DPpaQSds.js";import"./index-DKRKom99.js";import"./Carousel-DuGrp8LP.js";import"./ScrollEnablement-CX9YTqaF.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Ci7QmxdH.js";import"./slim-arrow-left-DC4NnQXj.js";import"./DemoProps-DpMIbTdm.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C5ZQlQKv.js";import"./ChartContainer-GKcvFG5t.js";import"./index-Dr11T0CO.js";import"./useCancelAnimationFallback-CDlW2aBV.js";import"./YAxisTicks-By5HAz1p.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DPCiFLSu.js";import"./ChartDataLabel-De10asms.js";import"./useOnClickInternal-Ck2ZroCn.js";import"./react-content-loader.es-Bf18-ts6.js";import"./useIsRTL-Cr-hHSan.js";import"./useLongestYAxisLabel-BlTIdk7Y.js";import"./ComposedChart-DWVR9cKc.js";import"./Line-BH8kOH3y.js";import"./Scatter-Bv5E_rkw.js";import"./index-BibPxh-m.js";import"./index-DO-3SAUr.js";import"./Placeholder-6R8HtcSM.js";import"./index-DwFVJz_t.js";const $=`# @ui5/webcomponents-react-charts

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
