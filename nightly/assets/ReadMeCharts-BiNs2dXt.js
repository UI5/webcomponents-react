import{r as i,j as t,T as l}from"./iframe-ByiiILXu.js";import{useMDXComponents as p}from"./index-DYpmG0kU.js";import{M as u,a as h,k as f}from"./blocks-DrNhXH8Y.js";import"./Tag-WBOqYu0X.js";import"./index-B20WCXLG.js";import{F as d}from"./CommandsAndQueries-ByQHAThU.js";import"./copy-08ilKZ0c.js";import{T as b}from"./TableOfContent-ojyBFHoB.js";import{C}from"./index-ClFmcixS.js";import{D}from"./BarChart.stories-DDxmFgfy.js";import{D as y}from"./BulletChart.stories-ns_25ctF.js";import{D as g}from"./ColumnChart.stories-tAjQ6NG_.js";import{D as v}from"./ColumnChartWithTrend.stories-CIyVVW53.js";import{D as x}from"./ComposedChart.stories-DPOm-JcV.js";import{D as j}from"./DonutChart.stories-CzMxeF8I.js";import{D as w}from"./LineChart.stories-UvCURucW.js";import{D as R}from"./PieChart.stories-DjeJjCJs.js";import{D as I}from"./RadarChart.stories-BQJzlW8k.js";import{D as S}from"./RadialChart.stories-sWhxiC-J.js";import{D as T}from"./ScatterChart.stories-BpT6Yk-b.js";import"./preload-helper-PPVm8Dsz.js";import"./information-tN-lRIsU.js";import"./sys-enter-2-eFq8QnH9.js";import"./alert-DCLbzn71.js";import"./index-8yUpcOxv.js";import"./index-y2DJOFuG.js";import"./index-C2Yky6-6.js";import"./Link-DX54TCdQ.js";import"./index-C0jaTjnN.js";import"./index-BkgEbRU4.js";import"./index-DJ81LlKI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7LYDV0x0.js";import"./addCustomCSSWithScoping-DIYkZsvP.js";import"./index-COPBcnoz.js";import"./Carousel-DJsr93FC.js";import"./ScrollEnablement--8rTw7W_.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CVwN3HYc.js";import"./slim-arrow-left-B7SLyOfW.js";import"./DemoProps-BhvQLVk3.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DMfPukSi.js";import"./ChartContainer-ovNK3Ag_.js";import"./index-DvDvcTBA.js";import"./useCancelAnimationFallback-BhOIadfS.js";import"./YAxisTicks-Bzz8HRER.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DnSQNVv4.js";import"./ChartDataLabel-BlM9eTQC.js";import"./useOnClickInternal-C0ldsj3Q.js";import"./react-content-loader.es-CRL3wpUt.js";import"./useIsRTL-7T1wmeJR.js";import"./useLongestYAxisLabel-BGv3Ox9k.js";import"./ComposedChart-Cj-xQDcO.js";import"./Line-DrxvSF8R.js";import"./Scatter-DjRbav52.js";import"./index-BQw9yOv5.js";import"./index-CG5R2ca5.js";import"./Placeholder-CGnf2M-e.js";import"./index-Cbb7701J.js";const $=`# @ui5/webcomponents-react-charts

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
