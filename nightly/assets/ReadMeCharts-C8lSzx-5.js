import{r as i,j as t,T as l}from"./iframe-DDMT6HJ_.js";import{useMDXComponents as p}from"./index-BZBPPnAC.js";import{M as u,a as h,k as f}from"./blocks-Bodl2L_O.js";import"./Tag-CpA-lkPa.js";import"./index-5dKFa1m8.js";import{F as d}from"./CommandsAndQueries-7VHsHP9e.js";import"./copy-BvEBs4Jb.js";import{T as b}from"./TableOfContent-FxoIfemE.js";import{C}from"./index-mThdocdQ.js";import{D}from"./BarChart.stories-CfyVa6t2.js";import{D as y}from"./BulletChart.stories-Cppz9XUK.js";import{D as g}from"./ColumnChart.stories-CZU-dQ2s.js";import{D as v}from"./ColumnChartWithTrend.stories-DMDFK1f7.js";import{D as x}from"./ComposedChart.stories-nTgbtF-k.js";import{D as j}from"./DonutChart.stories-CICa7cRC.js";import{D as w}from"./LineChart.stories-BwCyPoms.js";import{D as R}from"./PieChart.stories-hZRon5D3.js";import{D as I}from"./RadarChart.stories-BaaaJTne.js";import{D as S}from"./RadialChart.stories-DNBDfAIn.js";import{D as T}from"./ScatterChart.stories-DEBiSEfz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BaGvLpd9.js";import"./sys-enter-2-CsR_zoUi.js";import"./alert-DZ7RsIcF.js";import"./index-CGAlCx6I.js";import"./index-DBxIJUvm.js";import"./index-Cs3p2L6v.js";import"./Link-BjYpH57b.js";import"./index-CqaPzMqI.js";import"./index-CfXspAeM.js";import"./index-DHW-qiJ5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSpYa4u6.js";import"./addCustomCSSWithScoping-D9ua8UMW.js";import"./index-CPxVkHe3.js";import"./Carousel-BuzKkfwW.js";import"./ScrollEnablement-Bbyn3w51.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BnbgBLLS.js";import"./slim-arrow-left-B3NYCOHz.js";import"./DemoProps-Dc1Gd5uk.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CrZPUIYr.js";import"./ChartContainer-DKgkf1CV.js";import"./index-sic5m1Pa.js";import"./useCancelAnimationFallback-BW_1X-yz.js";import"./YAxisTicks-N_U9qgL7.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-_Z6wumlU.js";import"./ChartDataLabel-UO0zyHVk.js";import"./useOnClickInternal-BYHARC16.js";import"./react-content-loader.es-Bh86gLvM.js";import"./useIsRTL-BgH4TYcR.js";import"./useLongestYAxisLabel-p6I15jRZ.js";import"./ComposedChart-B_X1PC1P.js";import"./Line-DmxIfMsS.js";import"./Scatter-D1gByuf3.js";import"./index-DUBwg_ac.js";import"./index-CS6DhFhl.js";import"./Placeholder-dHRY4RN3.js";import"./index-CusRcbEz.js";const $=`# @ui5/webcomponents-react-charts

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
