import{r as i,j as t,T as l}from"./iframe-BZdybOkV.js";import{useMDXComponents as p}from"./index-BK2w2T2j.js";import{M as u,a as h,n as f}from"./blocks-CP8RdzkU.js";import"./Tag-BzbxKur3.js";import"./index-DK3P8KDJ.js";import{F as d}from"./CommandsAndQueries-6n7MF1sx.js";import"./copy-CIp50y-g.js";import{T as b}from"./TableOfContent-BXnsnagM.js";import{C}from"./index-RjjmBFqv.js";import{D}from"./BarChart.stories-ahkOX54z.js";import{D as y}from"./BulletChart.stories-BySbi9bf.js";import{D as g}from"./ColumnChart.stories-w1AEWYeI.js";import{D as v}from"./ColumnChartWithTrend.stories-BHyTeTTB.js";import{D as x}from"./ComposedChart.stories-OR5Zsh6s.js";import{D as j}from"./DonutChart.stories-aa1sK1Cp.js";import{D as w}from"./LineChart.stories-DxnkmcJl.js";import{D as R}from"./PieChart.stories-C8IsQZ9q.js";import{D as I}from"./RadarChart.stories-C2s7Ltu-.js";import{D as S}from"./RadialChart.stories-Cf9cIzRM.js";import{D as T}from"./ScatterChart.stories-CCeZfEnj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-jzJbJB_1.js";import"./sys-enter-2-DNIkITIL.js";import"./alert-CQPwWPwe.js";import"./index-BIP_3DrI.js";import"./index-QZaRYYY3.js";import"./index-S-6P9mRF.js";import"./Link-ko8YnVxU.js";import"./index-DrYECb-G.js";import"./index-Ceagbcxz.js";import"./index-DEm1B2JB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-s2glcktZ.js";import"./addCustomCSSWithScoping-DEKm0mwm.js";import"./index-BZ_ngRjy.js";import"./Carousel-DZsM1dfk.js";import"./ScrollEnablement-DR3-8lGc.js";import"./animate-JylhYHXj.js";import"./AnimationMode-bFGVsGp8.js";import"./slim-arrow-left-BwsvRF99.js";import"./DemoProps-CBTfEzJB.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-HEbdWCt0.js";import"./ChartContainer-_z04xg_5.js";import"./index-C13ceQxY.js";import"./useCancelAnimationFallback-BYHVoSEE.js";import"./YAxisTicks-BOTTOJ5A.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Bj_sEGvi.js";import"./ChartDataLabel-Df0AocKq.js";import"./useOnClickInternal-CqlZIDZk.js";import"./react-content-loader.es-CEq8K8lg.js";import"./useIsRTL-BX_WkTUl.js";import"./useLongestYAxisLabel-BMmExAy6.js";import"./ComposedChart-BnFVB4A2.js";import"./Line-B_nu15M3.js";import"./Scatter-D_YynJGw.js";import"./index-CtQ3Ax6z.js";import"./index-CkMf_XK9.js";import"./Placeholder-cJgDaQ6x.js";import"./index-BAOjokmO.js";const $=`# @ui5/webcomponents-react-charts

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
