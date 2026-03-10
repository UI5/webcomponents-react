import{q as i,j as t,Q as l}from"./iframe-xWXly7Ei.js";import{useMDXComponents as p}from"./index-BkV3w5d0.js";import{M as u,a as h,n as f}from"./blocks-BK-gEy5G.js";import"./Tag-C8IzARdb.js";import"./index-BakXc7t8.js";import"./CommandsAndQueries-cQGlKyLD.js";import"./copy-DY9Bhohc.js";import{T as d}from"./TableOfContent-DhSfDnTc.js";import{F as b}from"./Footer-CjsfyNRg.js";import"./PageNotFound-BQRcUr7m.js";import{C}from"./index-C7wpxSS8.js";import{D}from"./BarChart.stories-BTPlC4hL.js";import{D as y}from"./BulletChart.stories-DVqk95n1.js";import{D as g}from"./ColumnChart.stories-Ckzfp1FW.js";import{D as v}from"./ColumnChartWithTrend.stories-CjF-87Hp.js";import{D as x}from"./ComposedChart.stories-C6jGRwTk.js";import{D as j}from"./DonutChart.stories-hsbgoPKX.js";import{D as w}from"./LineChart.stories-CImH98qv.js";import{D as R}from"./PieChart.stories-DAoEMCCV.js";import{D as I}from"./RadarChart.stories-zCsDSeCX.js";import{D as S}from"./RadialChart.stories-BIzPsPZb.js";import{D as $}from"./ScatterChart.stories-ByOX3a2a.js";import"./preload-helper-PPVm8Dsz.js";import"./information-3IM7ZiM-.js";import"./sys-enter-2-Cbpg-U0q.js";import"./alert-gk5TVJR_.js";import"./Link-Dpfp2JXt.js";import"./index-BTgCG8OL.js";import"./index-B5aWf-WN.js";import"./index-1-wUIWqO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B64w7jYZ.js";import"./addCustomCSSWithScoping-Dr_4npAd.js";import"./index-BcAVbI4W.js";import"./index-P_dJFF81.js";import"./index-CbssaC5W.js";import"./index-D8yJKpQG.js";import"./Illustrations-VX2U6euS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BaV6wP-P.js";import"./ScrollEnablement-DYlMFsuu.js";import"./animate-JylhYHXj.js";import"./AnimationMode-KxE-HyWj.js";import"./slim-arrow-left-CkjWDUi6.js";import"./DemoProps-BKtMmcdb.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CNkETisB.js";import"./ChartContainer-C1O_WTy1.js";import"./index-DEdFN2d4.js";import"./useCancelAnimationFallback-C5qld1Al.js";import"./YAxisTicks-DeQwrUwW.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Cd-cUSJ2.js";import"./ChartDataLabel-Bcb5u8UD.js";import"./useOnClickInternal-BVjtOyyI.js";import"./react-content-loader.es-D0WsGdTL.js";import"./useIsRTL-BYgZebj6.js";import"./useLongestYAxisLabel-CD_cUoyD.js";import"./ComposedChart-uWX-vV78.js";import"./Line-uf_PE-hg.js";import"./Scatter-DkW6R3u6.js";import"./index-D4tsictc.js";import"./index-ClNwSa_v.js";import"./Placeholder-Dd5AaYKJ.js";import"./index-XV0mVC1b.js";const E=`# @ui5/webcomponents-react-charts

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
