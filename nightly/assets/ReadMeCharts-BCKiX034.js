import{r as i,j as t,T as l}from"./iframe-DLeMGAs6.js";import{useMDXComponents as p}from"./index-BeTNnGed.js";import{M as u,a as h,m as f}from"./blocks-CVdnQ-m5.js";import"./Tag-fuIv2r1-.js";import"./index-CAID728Y.js";import{F as d}from"./CommandsAndQueries-Do6MeMuW.js";import"./copy-ClThfN15.js";import{T as b}from"./TableOfContent-sSbZlFDL.js";import{C}from"./index-BHaeMLdA.js";import{D}from"./BarChart.stories-BK67yk2U.js";import{D as y}from"./BulletChart.stories-DNe1e-1f.js";import{D as g}from"./ColumnChart.stories-DP-m_F-d.js";import{D as v}from"./ColumnChartWithTrend.stories-BWWzbtCc.js";import{D as x}from"./ComposedChart.stories-D4RGsnQH.js";import{D as j}from"./DonutChart.stories-BZdwieTS.js";import{D as w}from"./LineChart.stories-yEJBwPq4.js";import{D as R}from"./PieChart.stories-PZb4NRor.js";import{D as I}from"./RadarChart.stories-DrYV3mwj.js";import{D as S}from"./RadialChart.stories-tbTNGEFl.js";import{D as T}from"./ScatterChart.stories-CZmV64_A.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BttnUTpt.js";import"./sys-enter-2-DQSYULXQ.js";import"./alert-Braz2hWt.js";import"./index-ChbJtMA8.js";import"./index-D_-Zm7gh.js";import"./index-Xs0i3Hhr.js";import"./Link-D_uo4UVb.js";import"./index-CetP1T2M.js";import"./index-DQmJ5ecl.js";import"./index-DGDr800L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C13TjiIP.js";import"./addCustomCSSWithScoping-Cj5ZxzDT.js";import"./index-BelAbkZz.js";import"./Carousel-CZ4RHBS1.js";import"./ScrollEnablement-LGuvxbbP.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DFnvUF-e.js";import"./slim-arrow-left-CMdpz2-B.js";import"./DemoProps-ClMe3R3K.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DnbvGtOC.js";import"./ChartContainer-jR5Mi4S1.js";import"./index-CsHvU1n4.js";import"./useCancelAnimationFallback-Bo1iKOX1.js";import"./YAxisTicks-BqvYG51i.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dw915PwD.js";import"./ChartDataLabel-BqFLv6wS.js";import"./useOnClickInternal-q1_kscvp.js";import"./react-content-loader.es-BUFyAvjv.js";import"./useIsRTL-Doon_hgW.js";import"./useLongestYAxisLabel-BBqDy43N.js";import"./ComposedChart-DNQvFIKM.js";import"./Line-h45afk7s.js";import"./Scatter-BJ1oIzAh.js";import"./index-BP8lJHJq.js";import"./index-a2x2Jnla.js";import"./Placeholder-DZyaQ62y.js";import"./index-Cn0xIzK2.js";const $=`# @ui5/webcomponents-react-charts

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
