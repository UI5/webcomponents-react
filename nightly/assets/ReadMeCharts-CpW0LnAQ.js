import{r as i,j as t,O as l}from"./iframe-_dkm4-lx.js";import{useMDXComponents as p}from"./index-DAI4KLq-.js";import{M as u,a as h,n as f}from"./blocks-Bs8u5Nl3.js";import"./Tag-BrrbDF8k.js";import"./index-BnWTzbqn.js";import{F as d}from"./CommandsAndQueries-BqJjwTMw.js";import"./copy-CdpHOxV4.js";import{T as b}from"./TableOfContent-BUpAPeCZ.js";import{C}from"./index-BHxS3SC7.js";import{D}from"./BarChart.stories-Di-FfPOv.js";import{D as y}from"./BulletChart.stories-sdNGOiTr.js";import{D as g}from"./ColumnChart.stories-C-oDscp_.js";import{D as v}from"./ColumnChartWithTrend.stories-CQzovRId.js";import{D as x}from"./ComposedChart.stories-Dehx5rID.js";import{D as j}from"./DonutChart.stories-7jG4pAWo.js";import{D as w}from"./LineChart.stories-B1zjUl3c.js";import{D as R}from"./PieChart.stories-CaavuOrt.js";import{D as I}from"./RadarChart.stories-Cc8yRSsV.js";import{D as S}from"./RadialChart.stories-C7UmNX_E.js";import{D as $}from"./ScatterChart.stories-BmRcynJc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BDRRh1Am.js";import"./sys-enter-2-BupypyQm.js";import"./alert-C9P72ihW.js";import"./index-Bo-JlDoR.js";import"./index-oGo7hVYD.js";import"./index-S8RgegHO.js";import"./Link-DtN5ZiM1.js";import"./index-DAd7Ps1Q.js";import"./index-DGmq0M6J.js";import"./index-D5ljwTMv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di5ZUlIH.js";import"./addCustomCSSWithScoping-BWn-VVtx.js";import"./index-Dr4umyr0.js";import"./Carousel-NgtxjT_h.js";import"./ScrollEnablement-mXNeOQwW.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CaAhVqmb.js";import"./slim-arrow-left-BdcYtQkr.js";import"./DemoProps-BGHnt_dm.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DFzaAW3d.js";import"./ChartContainer-8oJ9RxTp.js";import"./index-B0FAyyCx.js";import"./useCancelAnimationFallback-C-Rv105e.js";import"./YAxisTicks-DkuKyGcJ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ByAoBgdD.js";import"./ChartDataLabel-XyvsRU68.js";import"./useOnClickInternal-B1hPoB10.js";import"./react-content-loader.es-ANCbBfAO.js";import"./useIsRTL-CFHyUMry.js";import"./useLongestYAxisLabel-DGS2vDKb.js";import"./ComposedChart-Zev7XDvO.js";import"./Line-C-2pJKKe.js";import"./Scatter-B57vF0ah.js";import"./index-BOCAB6--.js";import"./index-C1YwIqaf.js";import"./Placeholder-DpLKt89M.js";import"./index-OsXq9dyI.js";const E=`# @ui5/webcomponents-react-charts

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
