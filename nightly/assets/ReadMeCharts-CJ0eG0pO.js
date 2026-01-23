import{r as i,j as t,T as l}from"./iframe-DMaNIVf0.js";import{useMDXComponents as p}from"./index-BdK8Evs-.js";import{M as u,a as h,n as f}from"./blocks-B3cnhH9X.js";import"./Tag-BBahPAh3.js";import"./index-DP2_-MiN.js";import{F as d}from"./CommandsAndQueries-BFOyQZVK.js";import"./copy-CnV7FmZR.js";import{T as b}from"./TableOfContent-D9koB-_P.js";import{C}from"./index-Bef8UW7N.js";import{D}from"./BarChart.stories-D0IsZZC5.js";import{D as y}from"./BulletChart.stories-BJIcn3pv.js";import{D as g}from"./ColumnChart.stories-BQZ9PD6j.js";import{D as v}from"./ColumnChartWithTrend.stories-B3QRa2Ms.js";import{D as x}from"./ComposedChart.stories-syqW2vf_.js";import{D as j}from"./DonutChart.stories-DfMcAxXK.js";import{D as w}from"./LineChart.stories-DKVM5Nry.js";import{D as R}from"./PieChart.stories-DXtexhnO.js";import{D as I}from"./RadarChart.stories-ByRDFMnh.js";import{D as S}from"./RadialChart.stories-CDbj-lPb.js";import{D as T}from"./ScatterChart.stories-D6IWJKMS.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B4P6Loy7.js";import"./sys-enter-2-C0ZNaLlT.js";import"./alert-afWyAW_B.js";import"./index-DVN0x1pl.js";import"./index-CpqFSLu_.js";import"./index-BPyW7bYo.js";import"./Link-D80_PYHk.js";import"./index-BzUF981H.js";import"./index-CkAQHTQN.js";import"./index-BZICyQUU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DSBcJXg7.js";import"./addCustomCSSWithScoping-DURvRrzg.js";import"./index-DVWNlONk.js";import"./Carousel-DK5cIKr4.js";import"./ScrollEnablement-8_TnQxf5.js";import"./animate-JylhYHXj.js";import"./AnimationMode-yoBa3X1M.js";import"./slim-arrow-left-BgFd4YbP.js";import"./DemoProps-DZBNGQc8.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B_QNxDNQ.js";import"./ChartContainer-D7KCWvED.js";import"./index-muEq_JKA.js";import"./useCancelAnimationFallback-CnUn6_3a.js";import"./YAxisTicks-CG-KiNSP.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CmSmjfb8.js";import"./ChartDataLabel-rNisuDwY.js";import"./useOnClickInternal-5-pXvxWm.js";import"./react-content-loader.es-iw9pOutY.js";import"./useIsRTL-BQGRkAtk.js";import"./useLongestYAxisLabel-DKELzVuX.js";import"./ComposedChart-pPVou02u.js";import"./Line-C1FhnC3T.js";import"./Scatter-BZ1Dx0hD.js";import"./index-BW5bOOQ9.js";import"./index-BEphd71V.js";import"./Placeholder-BWPUP55h.js";import"./index-CT9AHaL3.js";const $=`# @ui5/webcomponents-react-charts

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
