import{q as i,j as t,Q as l}from"./iframe-yI-Wg8Yu.js";import{useMDXComponents as p}from"./index-CxvvrXjD.js";import{M as u,a as h,n as f}from"./blocks-HNp4GQzu.js";import"./Tag-Br4lHrdC.js";import"./index-CrEz3lFQ.js";import"./CommandsAndQueries-DwKUywP6.js";import"./copy-CzvsuiXE.js";import{T as d}from"./TableOfContent-BbIaZttf.js";import{F as b}from"./Footer-BemjN3C9.js";import"./PageNotFound-CBU2IUWB.js";import{C}from"./index-DUEp1jMB.js";import{D}from"./BarChart.stories-CdjzA3VV.js";import{D as y}from"./BulletChart.stories-CpOH5en4.js";import{D as g}from"./ColumnChart.stories-DQHbAA_s.js";import{D as v}from"./ColumnChartWithTrend.stories-DrTyN46h.js";import{D as x}from"./ComposedChart.stories-GO-m63le.js";import{D as j}from"./DonutChart.stories-DFB7vnQn.js";import{D as w}from"./LineChart.stories-CaJJv_d6.js";import{D as R}from"./PieChart.stories-DNFT1Ow3.js";import{D as I}from"./RadarChart.stories-CqhBy5oO.js";import{D as S}from"./RadialChart.stories-BHMm_tZD.js";import{D as $}from"./ScatterChart.stories-4KtDu-_p.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BheeN2Jq.js";import"./sys-enter-2-Cz9qa-qG.js";import"./alert-CEw8OaPM.js";import"./Link-C6y8N-8D.js";import"./index-D8b50e5F.js";import"./index-xjCs2iot.js";import"./index-J93pLR5V.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZnAazyk.js";import"./addCustomCSSWithScoping-BNZ7UTaQ.js";import"./index-DzsGzp3s.js";import"./index-Bdq6p_tF.js";import"./index-B7JluNCD.js";import"./index-CVU3jLpA.js";import"./Illustrations-CgcUDXre.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DFh7shln.js";import"./ScrollEnablement-CooVjliK.js";import"./animate-JylhYHXj.js";import"./AnimationMode-yNu9_Vgf.js";import"./slim-arrow-left-BR0d3-A5.js";import"./DemoProps-CMI4UXOh.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-DJZUk2co.js";import"./ChartContainer-Bj23Xssy.js";import"./index-BvAWjuf0.js";import"./useCancelAnimationFallback-BvsNiZ-a.js";import"./YAxisTicks-DphmpMBE.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D8MRTshB.js";import"./ChartDataLabel-BIIQ6Tgv.js";import"./useOnClickInternal-C8ajPd65.js";import"./react-content-loader.es-CZDg3azW.js";import"./useIsRTL-B54Bx3mH.js";import"./useLongestYAxisLabel-vWkFEyG3.js";import"./ComposedChart-4WcXz6Dp.js";import"./Line-B0Acx7HO.js";import"./Scatter-hI-RrBwk.js";import"./index-Dll6ELTb.js";import"./index-DBp8Qi7h.js";import"./Placeholder-D3Oc6ZEj.js";import"./index-Nin9vZFw.js";const E=`# @ui5/webcomponents-react-charts

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
