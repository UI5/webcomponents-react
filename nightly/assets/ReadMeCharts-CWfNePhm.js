import{r as i,j as t,T as l}from"./iframe-DwrbX4RV.js";import{useMDXComponents as p}from"./index-DEV0fT-3.js";import{M as u,a as h,n as f}from"./blocks-D-Cz54eK.js";import"./Tag-CFiS-8RZ.js";import"./index-BQbTf7k-.js";import{F as d}from"./CommandsAndQueries-33-9TCX1.js";import"./copy-ZcGBB0nX.js";import{T as b}from"./TableOfContent-DnfJnqus.js";import{C}from"./index-D8dBVdgK.js";import{D}from"./BarChart.stories-BzgLpAL5.js";import{D as y}from"./BulletChart.stories-CP6OkR5k.js";import{D as g}from"./ColumnChart.stories-BswwAft2.js";import{D as v}from"./ColumnChartWithTrend.stories-CN0XT6Hv.js";import{D as x}from"./ComposedChart.stories-CMNz4D5g.js";import{D as j}from"./DonutChart.stories-D-Iw9NuH.js";import{D as w}from"./LineChart.stories-C26OaSgc.js";import{D as R}from"./PieChart.stories-CRnTkIEF.js";import{D as I}from"./RadarChart.stories-CtV1mDxO.js";import{D as S}from"./RadialChart.stories-tr4orZCd.js";import{D as T}from"./ScatterChart.stories-b9Q0wh1q.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bbk3nBJv.js";import"./sys-enter-2-Dh-lxitt.js";import"./alert-DlEiJnhn.js";import"./index-Zv7LwxZg.js";import"./index-DcjDkGfQ.js";import"./index-C2WUwRD4.js";import"./Link-CH3IA-s_.js";import"./index-DfMLBK8G.js";import"./index-4tQAJTUd.js";import"./index-DafPGyjY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP_TNLDv.js";import"./addCustomCSSWithScoping-BNLxo1iY.js";import"./index-DLV46EWe.js";import"./Carousel-DeG9NmGq.js";import"./ScrollEnablement-CYy8a9iX.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CWRKGfGi.js";import"./slim-arrow-left-B_Jm69pM.js";import"./DemoProps-DOa_AZl4.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BQjEitx4.js";import"./ChartContainer-8nDNIo4h.js";import"./index-Djuxy3lm.js";import"./useCancelAnimationFallback-B52KgPva.js";import"./YAxisTicks-Bt-tmKVE.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CMyFQA2g.js";import"./ChartDataLabel-Cs7rukSa.js";import"./useOnClickInternal-CTnq4Jkz.js";import"./react-content-loader.es-BL8EoFE9.js";import"./useIsRTL-DBK1p3l_.js";import"./useLongestYAxisLabel-CMYRcAvZ.js";import"./ComposedChart-B0Ja7gPd.js";import"./Line-CJEa6jHF.js";import"./Scatter-mQRI0aDr.js";import"./index-DopNrfCQ.js";import"./index-CQA5G58n.js";import"./Placeholder-2sQDNXOt.js";import"./index-CPcjAxVS.js";const $=`# @ui5/webcomponents-react-charts

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
