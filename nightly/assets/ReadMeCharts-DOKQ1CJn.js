import{r as i,j as t,O as l}from"./iframe-CeYK60h5.js";import{useMDXComponents as p}from"./index-CyuETzTv.js";import{M as u,a as h,n as f}from"./blocks-BIKTnw0B.js";import"./Tag-C54M4ldZ.js";import"./index-CT0V1rC-.js";import{F as d}from"./CommandsAndQueries-CFbtJHwM.js";import"./copy-CiRkqTCy.js";import{T as b}from"./TableOfContent-CmoLNGGQ.js";import{C}from"./index-Dw4pUorD.js";import{D}from"./BarChart.stories-0qiUXynK.js";import{D as y}from"./BulletChart.stories-CqTGb5-0.js";import{D as g}from"./ColumnChart.stories-CSvdxG8b.js";import{D as v}from"./ColumnChartWithTrend.stories-BNMKwM_o.js";import{D as x}from"./ComposedChart.stories-Bi74o3Nw.js";import{D as j}from"./DonutChart.stories-Cal7hwK_.js";import{D as w}from"./LineChart.stories-Cfh5shKC.js";import{D as R}from"./PieChart.stories-BaAq70Sm.js";import{D as I}from"./RadarChart.stories-DevnO5RL.js";import{D as S}from"./RadialChart.stories-BYEiIEGX.js";import{D as $}from"./ScatterChart.stories-DYJgCO4N.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BkZW1INs.js";import"./sys-enter-2-Bag4B31-.js";import"./alert-q5zKag_b.js";import"./index-CHuebsjW.js";import"./index-DCNRybmK.js";import"./index-BQVvVbng.js";import"./Link-B2AcL4ks.js";import"./index-C-Yn0AU-.js";import"./index-CaQyDWQ7.js";import"./index-DBl_V_lR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkPy33bc.js";import"./addCustomCSSWithScoping-BSnYfvCe.js";import"./index-C9AaKYqF.js";import"./Carousel-D3aUSkFo.js";import"./ScrollEnablement-BzX8rTSh.js";import"./animate-JylhYHXj.js";import"./AnimationMode-qN_xTfl3.js";import"./slim-arrow-left-CcKTXBkk.js";import"./DemoProps-nQLMQ3FX.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-yoPD44fh.js";import"./ChartContainer-DHcNG2r8.js";import"./index-Bo5Q1SBc.js";import"./useCancelAnimationFallback-B6d1bnb7.js";import"./YAxisTicks-Cccf7pE6.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Br9TyO-8.js";import"./ChartDataLabel-DQJo9UEe.js";import"./useOnClickInternal-CTWsJIpx.js";import"./react-content-loader.es-BUF6lxJ9.js";import"./useIsRTL-1HgTxzEu.js";import"./useLongestYAxisLabel-Syq2uF9I.js";import"./ComposedChart-CgMDxNJu.js";import"./Line-7c4gcOiA.js";import"./Scatter-CtAOyY19.js";import"./index-CxLyuSN3.js";import"./index-DJJhfdcy.js";import"./Placeholder-vZK777EB.js";import"./index-BgBW5PSu.js";const E=`# @ui5/webcomponents-react-charts

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
