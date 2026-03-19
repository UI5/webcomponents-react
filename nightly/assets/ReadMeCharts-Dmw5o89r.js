import{q as i,j as t,Q as l}from"./iframe-CyQHbHxC.js";import{useMDXComponents as p}from"./index-CAqjzf3-.js";import{M as u,a as h,n as f}from"./blocks-B1BKQjJv.js";import"./Tag-CpzoOvR8.js";import"./index-DVtJUpci.js";import"./CommandsAndQueries-CQRKG-No.js";import"./copy-DaAXI0wh.js";import{T as d}from"./TableOfContent-5QHPn7EL.js";import{F as b}from"./Footer-B6F6QaBp.js";import"./PageNotFound-BwogsJtD.js";import{C}from"./index-bZisc4hK.js";import{D}from"./BarChart.stories-D3bYvyga.js";import{D as y}from"./BulletChart.stories-C6hdrjLi.js";import{D as g}from"./ColumnChart.stories-D2kHE8hw.js";import{D as v}from"./ColumnChartWithTrend.stories-C5YuhVSQ.js";import{D as x}from"./ComposedChart.stories-Cs6UzXky.js";import{D as j}from"./DonutChart.stories-BTOxBg92.js";import{D as w}from"./LineChart.stories-Cm4XEsWS.js";import{D as R}from"./PieChart.stories-8Kmje_HB.js";import{D as I}from"./RadarChart.stories-DIgwaBrJ.js";import{D as S}from"./RadialChart.stories-36r4GQNo.js";import{D as $}from"./ScatterChart.stories-D6dvy5mb.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DjNNiNHU.js";import"./sys-enter-2-BgUfXyT0.js";import"./alert-CTY_LxCJ.js";import"./Link-8vAV1o0p.js";import"./index-DdcJcuqo.js";import"./index-Dk8Vx9PA.js";import"./index-CyzsrkYQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BPaLVEvo.js";import"./addCustomCSSWithScoping-iqlifjV6.js";import"./index-DUAJQglC.js";import"./index-hCRaM0Y7.js";import"./index-1GAsnXVc.js";import"./index-DMBzjcEO.js";import"./Illustrations-BxTCLiS4.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DcyPEcXu.js";import"./ScrollEnablement-CKBCWM_a.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C-FOl4ys.js";import"./slim-arrow-left-CGyFd1Ej.js";import"./DemoProps-Bs2TDIOu.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-CRlVlffp.js";import"./ChartContainer-CupFr563.js";import"./index-Djt9ygMg.js";import"./useCancelAnimationFallback-VVgVu9O9.js";import"./YAxisTicks-DYzQtqxp.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DmLNaAxF.js";import"./ChartDataLabel-BnHqJRgY.js";import"./useOnClickInternal-C60Mtkod.js";import"./react-content-loader.es-DZXg_QJr.js";import"./useIsRTL-RbxVKpGb.js";import"./useLongestYAxisLabel-CsLlcy6P.js";import"./ComposedChart-C1a0ECjT.js";import"./Line-Cj-UJbt0.js";import"./Scatter-Nf_QBm2U.js";import"./index-CCUySdRH.js";import"./index-ufm1FbbP.js";import"./Placeholder-DD9CtKHT.js";import"./index-BUNQZti1.js";const E=`# @ui5/webcomponents-react-charts

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
