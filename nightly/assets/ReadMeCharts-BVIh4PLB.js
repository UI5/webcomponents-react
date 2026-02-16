import{r as i,j as t,O as l}from"./iframe-JQDqhQTc.js";import{useMDXComponents as p}from"./index-SjG54pW2.js";import{M as u,a as h,n as f}from"./blocks-DPmUjEjQ.js";import"./Tag-DGi-8g-u.js";import"./index-lJfxqfBt.js";import{F as d}from"./CommandsAndQueries-Crv-3Mfa.js";import"./copy-t9TmEwA0.js";import{T as b}from"./TableOfContent-CQNt4SGr.js";import{C}from"./index-BWE22AdU.js";import{D}from"./BarChart.stories-u40SAXFJ.js";import{D as y}from"./BulletChart.stories-CbC6BMdF.js";import{D as g}from"./ColumnChart.stories-ivDjCz6t.js";import{D as v}from"./ColumnChartWithTrend.stories-CoN8dO0C.js";import{D as x}from"./ComposedChart.stories-BO2bZR3A.js";import{D as j}from"./DonutChart.stories-BpFw4v3H.js";import{D as w}from"./LineChart.stories-lkXpTLUD.js";import{D as R}from"./PieChart.stories-Cxi-JrF2.js";import{D as I}from"./RadarChart.stories-D3H1fgIa.js";import{D as S}from"./RadialChart.stories-Nzve24AU.js";import{D as $}from"./ScatterChart.stories-3L_BBwbq.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DOgKPosF.js";import"./sys-enter-2-C0saRr3v.js";import"./alert-C_Y0d_GP.js";import"./index-DLqk7pLq.js";import"./index-BKiGQD-R.js";import"./index-CUZKwPNc.js";import"./Link-Dpu-eDDr.js";import"./index-BFgRiJXe.js";import"./index-DcWtp55E.js";import"./index-BIpZPYH3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5_fArc3.js";import"./addCustomCSSWithScoping-c6XYl4zv.js";import"./index-BpgBwQjv.js";import"./Carousel-BXXHVX-u.js";import"./ScrollEnablement-CV3Pn2pj.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C3Ud7sQS.js";import"./slim-arrow-left-B-vlLZu9.js";import"./DemoProps-vX8v2nwX.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DgDdG6qC.js";import"./ChartContainer-C934oph8.js";import"./index-CV-nf5lU.js";import"./useCancelAnimationFallback-D7yxeuRm.js";import"./YAxisTicks-Dp3vr8J9.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DhDEujzj.js";import"./ChartDataLabel-B_D3hL5A.js";import"./useOnClickInternal-ZpOJW7o3.js";import"./react-content-loader.es-CpKTWEX-.js";import"./useIsRTL-DzjLx_qb.js";import"./useLongestYAxisLabel-BB5-Idry.js";import"./ComposedChart-so7U6u0E.js";import"./Line-DqR7aAvf.js";import"./Scatter-D3XE8oD-.js";import"./index-B8UvU_XX.js";import"./index-m1HAOZQV.js";import"./Placeholder-CGnGyaJE.js";import"./index-D4FSd19r.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
