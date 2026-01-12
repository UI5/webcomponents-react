import{r as i,j as t,T as l}from"./iframe-DVF3HgbA.js";import{useMDXComponents as p}from"./index-BJ4ye1FV.js";import{M as u,a as h,n as f}from"./blocks-Clg7-MX4.js";import"./Tag-BOlrR2xo.js";import"./index-CZ6TSDWm.js";import{F as d}from"./CommandsAndQueries-CjmWYk4A.js";import"./copy-CUrqt0F6.js";import{T as b}from"./TableOfContent-BhcMlIgv.js";import{C}from"./index-9Na0D6Jy.js";import{D}from"./BarChart.stories-Cjr5Zrjl.js";import{D as y}from"./BulletChart.stories-Uqq_rHAj.js";import{D as g}from"./ColumnChart.stories-A9WnjKul.js";import{D as v}from"./ColumnChartWithTrend.stories-DQWE8NOM.js";import{D as x}from"./ComposedChart.stories-D4AbeRyZ.js";import{D as j}from"./DonutChart.stories-CifBP-Lt.js";import{D as w}from"./LineChart.stories-CtEkt6qS.js";import{D as R}from"./PieChart.stories-Cp5ZJoOD.js";import{D as I}from"./RadarChart.stories-C4gF36vp.js";import{D as S}from"./RadialChart.stories-D533TrVf.js";import{D as T}from"./ScatterChart.stories-DUO-55Zt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DRqH7HSA.js";import"./sys-enter-2-DpmhEpBm.js";import"./alert-C-z3K1uA.js";import"./index-B68cSDRH.js";import"./index-C50SsvCT.js";import"./index-DNsjAdVj.js";import"./Link-Cu0t9g59.js";import"./index-C1QuQKuw.js";import"./index-RU5NPQiF.js";import"./index-Dpj0MxBe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNtJiI2A.js";import"./addCustomCSSWithScoping-YxO5kK4q.js";import"./index-BBb33Sco.js";import"./Carousel-D8sO0_69.js";import"./ScrollEnablement-DSkvTOUi.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DDRAACSL.js";import"./slim-arrow-left-C0XSF5yn.js";import"./DemoProps-CK7iD7FG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Cjw0QH4g.js";import"./ChartContainer-3WwmOEUJ.js";import"./index-DXl3BA50.js";import"./useCancelAnimationFallback-BdtY4rs4.js";import"./YAxisTicks-BP2F1Dkl.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Ikoz5h0P.js";import"./ChartDataLabel-PEciwNWI.js";import"./useOnClickInternal-CbtOutfY.js";import"./react-content-loader.es-C9P-Jm9d.js";import"./useIsRTL-Bjbd4LnE.js";import"./useLongestYAxisLabel--eVNRe1i.js";import"./ComposedChart-PRO_ZTFa.js";import"./Line-CenrFHqH.js";import"./Scatter-DAPsrA-W.js";import"./index-BqDCDtuT.js";import"./index-BaF5oc5h.js";import"./Placeholder-C2EuWMoC.js";import"./index-0lKOe-4q.js";const $=`# @ui5/webcomponents-react-charts

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
