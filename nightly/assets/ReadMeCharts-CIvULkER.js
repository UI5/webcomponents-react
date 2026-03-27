import{n as i,j as t,N as l}from"./iframe-DNoxABv1.js";import{useMDXComponents as p}from"./index-DQAMMhq5.js";import{M as u,a as h,n as f}from"./blocks-CIhTxD7j.js";import"./Tag-C_8TAHAf.js";import"./index-I7XZadEI.js";import"./CommandsAndQueries-DUw_qZ-D.js";import"./copy-BoMvLlry.js";import{T as d}from"./TableOfContent-BxuLiWq8.js";import{F as b}from"./Footer-CRUbKNtZ.js";import"./PageNotFound-DExHfP7X.js";import{C}from"./index-ChKVHYEi.js";import{D}from"./BarChart.stories-CEu8Bw6G.js";import{D as y}from"./BulletChart.stories-BJCSlyhE.js";import{D as g}from"./ColumnChart.stories-C57FI7o5.js";import{D as v}from"./ColumnChartWithTrend.stories-BGC60cUG.js";import{D as x}from"./ComposedChart.stories-CoygjFtw.js";import{D as j}from"./DonutChart.stories-BAvAcLPS.js";import{D as w}from"./LineChart.stories-CrEGTrua.js";import{D as R}from"./PieChart.stories-BAqWmSuZ.js";import{D as I}from"./RadarChart.stories-DnYHc6nN.js";import{D as S}from"./RadialChart.stories-DVkkvqGu.js";import{D as $}from"./ScatterChart.stories-Bf6TGz1Y.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BBbHiJJj.js";import"./sys-enter-2-CL00FEGT.js";import"./alert-8k6AaqYY.js";import"./Link-4KtEWIlR.js";import"./index-KaiTFuVE.js";import"./index-BEeVgB1o.js";import"./index-DVs60LFY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQViNCUD.js";import"./addCustomCSSWithScoping-CvyaWJf_.js";import"./index-DAoAOn92.js";import"./index-BfoP-fai.js";import"./index-Kl-B_MHz.js";import"./index-B0My9-lL.js";import"./Illustrations-eHdiuTwk.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BZ4EENu9.js";import"./ScrollEnablement-DC8Xkk42.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BozNFSX3.js";import"./slim-arrow-left-DBhI0ehj.js";import"./DemoProps-BSZwEctI.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-fnid0mjP.js";import"./ChartContainer-DYKChL8k.js";import"./index-bQ5qgXmV.js";import"./useCancelAnimationFallback-BR00v-yV.js";import"./YAxisTicks-C0exucG7.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BbYyuScB.js";import"./ChartDataLabel-DbCHkKC5.js";import"./useOnClickInternal-D0hp-6yn.js";import"./react-content-loader.es-CLEfBzdC.js";import"./useIsRTL-CcuZOG76.js";import"./useLongestYAxisLabel-BagnEHgp.js";import"./ComposedChart-CKxZCjiA.js";import"./Line-BxtqArKS.js";import"./Scatter-DMt4H18S.js";import"./index-B78qYU6i.js";import"./index-CYN0E5su.js";import"./Placeholder-BkfEIUIh.js";import"./index-D3p9nUyW.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),m=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const s=e.current;return s&&o.length&&(r.current=setInterval(()=>{a.current++,s.navigateTo(a.current%o.length)},5e3)),()=>{m()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{m()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function _t(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{_t as default};
