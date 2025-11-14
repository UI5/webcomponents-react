import{r as i,j as t,T as l}from"./iframe-4qrVzB25.js";import{useMDXComponents as p}from"./index-C23NGFAV.js";import{M as u,a as h,m as f}from"./blocks-CyApLjCn.js";import"./Tag-DxNYrBt-.js";import"./index-BHBPbkXo.js";import{F as d}from"./CommandsAndQueries-C8f_O47Z.js";import"./copy-BwZFHKgv.js";import{T as b}from"./TableOfContent-CvIukNHP.js";import{C}from"./index-dqKHT-0F.js";import{D}from"./BarChart.stories-39hjlrlh.js";import{D as y}from"./BulletChart.stories-DK2vOYHo.js";import{D as g}from"./ColumnChart.stories-CAsFPlZB.js";import{D as v}from"./ColumnChartWithTrend.stories-Ppxgsvt4.js";import{D as x}from"./ComposedChart.stories-DEhzc9ER.js";import{D as j}from"./DonutChart.stories-BSB_LRlV.js";import{D as w}from"./LineChart.stories-DFYklwAp.js";import{D as R}from"./PieChart.stories-CPNrQHiu.js";import{D as I}from"./RadarChart.stories-C_XYoanK.js";import{D as S}from"./RadialChart.stories-Cp0TERlh.js";import{D as T}from"./ScatterChart.stories-C-Kp7-At.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DyICkYh-.js";import"./sys-enter-2-I-7Y6xsp.js";import"./alert-DbMRFtnZ.js";import"./index-Cj8ZVdQX.js";import"./index-bsQInf2g.js";import"./index-MWca-2b0.js";import"./Link-Cc0E88FG.js";import"./index-CMfGGfhU.js";import"./index-Cvq3zOuj.js";import"./index-Cjln1VVF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqnCkxg.js";import"./addCustomCSSWithScoping-DQAaXiXr.js";import"./index-CU3hZFou.js";import"./Carousel-4LeNeNFf.js";import"./ScrollEnablement-CR5txl14.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DjsQqsh7.js";import"./slim-arrow-left-DH99UYtZ.js";import"./DemoProps-BqHdMN7U.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BrxBxkkt.js";import"./ChartContainer-CenQ2LMa.js";import"./index-CC5rZlHP.js";import"./useCancelAnimationFallback-BjoguWL0.js";import"./YAxisTicks-CH5yNbXA.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-82PdhBnv.js";import"./ChartDataLabel-4OEXs5Xz.js";import"./useOnClickInternal-CpqNs1Me.js";import"./react-content-loader.es-fADx4M2J.js";import"./useIsRTL-B0uHFjA1.js";import"./useLongestYAxisLabel-BrRm8tzn.js";import"./ComposedChart-dSDbwitN.js";import"./Line-eWWxckn8.js";import"./Scatter-C2zVOV2E.js";import"./index-DKTsgxDy.js";import"./index-BI9KwQ_J.js";import"./Placeholder-DR6D4GTy.js";import"./index-DW-Nunvt.js";const $=`# @ui5/webcomponents-react-charts

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
