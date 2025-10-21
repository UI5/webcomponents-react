import{r as i,j as t,T as l}from"./iframe-pfqRYewB.js";import{useMDXComponents as p}from"./index-DxYcUkXM.js";import{M as u,a as h,k as f}from"./blocks-CN6sML6r.js";import"./Tag-DOr7yVDv.js";import"./index-TMKVCirT.js";import{F as d}from"./CommandsAndQueries-CBK4GytM.js";import"./copy-0Cu3Y4If.js";import{T as b}from"./TableOfContent-C20Gax9P.js";import{C}from"./index-BbrhfA34.js";import{D}from"./BarChart.stories-DmdiYEjL.js";import{D as y}from"./BulletChart.stories-BUZ46o3f.js";import{D as g}from"./ColumnChart.stories-Bu7RTt7P.js";import{D as v}from"./ColumnChartWithTrend.stories-94LjWehe.js";import{D as x}from"./ComposedChart.stories-DOR7a6R0.js";import{D as j}from"./DonutChart.stories-DbVoKXc9.js";import{D as w}from"./LineChart.stories-BCcTo9D4.js";import{D as R}from"./PieChart.stories-Dy1sfLTs.js";import{D as I}from"./RadarChart.stories-BBmT4nvn.js";import{D as S}from"./RadialChart.stories-Dk8KnAKV.js";import{D as T}from"./ScatterChart.stories-CcoU_-zh.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BrehxxGu.js";import"./sys-enter-2-CTsRx7VM.js";import"./alert-qaqpTU-O.js";import"./index-BOCv1nQg.js";import"./index-C87hBs3b.js";import"./index-DQ0pLIsd.js";import"./Link-C4McI5Wx.js";import"./index-D05B83RK.js";import"./index-5KySo-3G.js";import"./index-BkIEU9nM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJxPXkiU.js";import"./addCustomCSSWithScoping-D2yzvGyj.js";import"./index-DQUabOTm.js";import"./Carousel-CtJ-6OpF.js";import"./ScrollEnablement-D1lbDyHD.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C7BoETNs.js";import"./slim-arrow-left-CJyeX0Iq.js";import"./DemoProps-C--rmE8W.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BR56D60n.js";import"./ChartContainer-DlTHwRP_.js";import"./index-DPBow1JV.js";import"./useCancelAnimationFallback-BJ0OdhEW.js";import"./YAxisTicks-S0FzW1ef.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BQ8RWKqI.js";import"./ChartDataLabel-BCf74ACD.js";import"./useOnClickInternal-CyHATyVJ.js";import"./react-content-loader.es-DWg_BTcq.js";import"./useIsRTL-DTunfDpQ.js";import"./useLongestYAxisLabel-ktZVRa1V.js";import"./ComposedChart-DkUuDEau.js";import"./Line-BcSpbOsL.js";import"./Scatter-DtTZeGlX.js";import"./index-DAqu8hcw.js";import"./index-8-b4EAID.js";import"./Placeholder-DbTjGR2Z.js";import"./index-D52alERq.js";const $=`# @ui5/webcomponents-react-charts

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
