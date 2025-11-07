import{r as i,j as t,T as l}from"./iframe-BCh37-GP.js";import{useMDXComponents as p}from"./index-E1HFg4gZ.js";import{M as u,a as h,m as f}from"./blocks-CS5FlooX.js";import"./Tag-B_Qpe0TE.js";import"./index-DKQ6JIGw.js";import{F as d}from"./CommandsAndQueries-BaHr-COi.js";import"./copy-7yIahvRv.js";import{T as b}from"./TableOfContent-CDzDz3nz.js";import{C}from"./index-BDlQIfDv.js";import{D}from"./BarChart.stories-sTkmtzzo.js";import{D as y}from"./BulletChart.stories-BuY_G7MU.js";import{D as g}from"./ColumnChart.stories-s5gNAMcu.js";import{D as v}from"./ColumnChartWithTrend.stories-SRfr8yzl.js";import{D as x}from"./ComposedChart.stories-TkIiDTD6.js";import{D as j}from"./DonutChart.stories-C7dEhWYM.js";import{D as w}from"./LineChart.stories-DVzkwd5a.js";import{D as R}from"./PieChart.stories-Dh2gu-9O.js";import{D as I}from"./RadarChart.stories-avivCXf2.js";import{D as S}from"./RadialChart.stories-zJG0hZpE.js";import{D as T}from"./ScatterChart.stories-BSGUps1M.js";import"./preload-helper-PPVm8Dsz.js";import"./information-3OCHA3NQ.js";import"./sys-enter-2-C8D5BzD8.js";import"./alert-DXLNWSuU.js";import"./index-JFrdX4G8.js";import"./index-CTMnj1ho.js";import"./index-Bv89sSp1.js";import"./Link-BSH3TTIl.js";import"./index-BonVTnTn.js";import"./index-OKdWlUZi.js";import"./index-DMXHNrMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCrrvnNY.js";import"./addCustomCSSWithScoping-5ena9gAo.js";import"./index-DTOYUFlO.js";import"./Carousel-DiZAPHOn.js";import"./ScrollEnablement-d21bdta6.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dndd5VZE.js";import"./slim-arrow-left-BE4iAr4h.js";import"./DemoProps-CDGaS3K9.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CMTZPyg6.js";import"./ChartContainer-CJruNniR.js";import"./index-CUx_S0wg.js";import"./useCancelAnimationFallback-DlQTMFq_.js";import"./YAxisTicks-DzHuE_wr.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ESDuYa2s.js";import"./ChartDataLabel-CN0CMAxd.js";import"./useOnClickInternal-UIQWrrxo.js";import"./react-content-loader.es-5WDpD-_b.js";import"./useIsRTL-CRezPATc.js";import"./useLongestYAxisLabel-Dal21P21.js";import"./ComposedChart-DVf7qX1X.js";import"./Line-CbAA0Q_0.js";import"./Scatter-lWnXDn7R.js";import"./index-Bv1mAF1t.js";import"./index-_iyq2nFU.js";import"./Placeholder-B_JGK2zh.js";import"./index-IaJbPAe9.js";const $=`# @ui5/webcomponents-react-charts

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
