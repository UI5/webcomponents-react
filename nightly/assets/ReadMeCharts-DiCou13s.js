import{r as i,j as t,T as l}from"./iframe-DEt5SpxN.js";import{useMDXComponents as p}from"./index-D4hcUogq.js";import{M as u,a as h,m as f}from"./blocks-CbBrNn_2.js";import"./Tag-Btd7K0TJ.js";import"./index-Bn-DAxDV.js";import{F as d}from"./CommandsAndQueries-BPAKOD0B.js";import"./copy-DO8SZxEM.js";import{T as b}from"./TableOfContent-D5MMHbP7.js";import{C}from"./index-lsQW4lUK.js";import{D}from"./BarChart.stories-CP1D6Cze.js";import{D as y}from"./BulletChart.stories-CC8jcZBn.js";import{D as g}from"./ColumnChart.stories-qVUICz5u.js";import{D as v}from"./ColumnChartWithTrend.stories-CheG2uP6.js";import{D as x}from"./ComposedChart.stories-CJruFqQv.js";import{D as j}from"./DonutChart.stories-BuUFer7A.js";import{D as w}from"./LineChart.stories-D-foLwQw.js";import{D as R}from"./PieChart.stories-gRHZDsHZ.js";import{D as I}from"./RadarChart.stories-C6W4K584.js";import{D as S}from"./RadialChart.stories-FOUIpGml.js";import{D as T}from"./ScatterChart.stories-Dzdp6LiB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-W2yufBl5.js";import"./sys-enter-2-QAd8vpRe.js";import"./alert-Bh8lKzJU.js";import"./index-C60Z0fiQ.js";import"./index-BBkT8flo.js";import"./index-DQCvCv0f.js";import"./Link-QmS19gJn.js";import"./index-Ct7FOHD-.js";import"./index-aE62-2rm.js";import"./index-BgkB1LC-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L-EUKjf-.js";import"./addCustomCSSWithScoping-DWFhiVTm.js";import"./index-Cgb532fA.js";import"./Carousel-A1c0PPaR.js";import"./ScrollEnablement-B6pFrG42.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cnqv_TML.js";import"./slim-arrow-left-tYnGmVqG.js";import"./DemoProps-CuF9r8mc.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BfWv7o7U.js";import"./ChartContainer-DeS4uj9q.js";import"./index-F4cfNB22.js";import"./useCancelAnimationFallback-DnWOEyTT.js";import"./YAxisTicks-BKupg88V.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DFXnb86W.js";import"./ChartDataLabel-C1cyB8lM.js";import"./useOnClickInternal-Be6-kRPo.js";import"./react-content-loader.es-D8wmXZ9n.js";import"./useIsRTL-D6kqfXmQ.js";import"./useLongestYAxisLabel-L6jQH7fB.js";import"./ComposedChart-C996MH3A.js";import"./Line-C-5x_ZQF.js";import"./Scatter-DdNXz2-f.js";import"./index-ChP9GbFC.js";import"./index-CL3miqqq.js";import"./Placeholder-_FGCRd6V.js";import"./index-DBq_fmG_.js";const $=`# @ui5/webcomponents-react-charts

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
