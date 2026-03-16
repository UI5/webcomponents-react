import{q as i,j as t,Q as l}from"./iframe-BIP38Qmu.js";import{useMDXComponents as p}from"./index-CCzfQ4AK.js";import{M as u,a as h,n as f}from"./blocks-69-jnurL.js";import"./Tag-D0zcjL-3.js";import"./index-C_7tcSj3.js";import"./CommandsAndQueries-BAg-w2Ve.js";import"./copy-nvOf1vVL.js";import{T as d}from"./TableOfContent-CAcSs8TN.js";import{F as b}from"./Footer-DAbghHc6.js";import"./PageNotFound-z2fC1f6d.js";import{C}from"./index-D7WKg7m-.js";import{D}from"./BarChart.stories-DYdsB9wY.js";import{D as y}from"./BulletChart.stories-BnDGRJLt.js";import{D as g}from"./ColumnChart.stories-B-hh_K33.js";import{D as v}from"./ColumnChartWithTrend.stories-CRSaluLk.js";import{D as x}from"./ComposedChart.stories-D5drLKzh.js";import{D as j}from"./DonutChart.stories-kM_0l7Hz.js";import{D as w}from"./LineChart.stories-3U0atHzL.js";import{D as R}from"./PieChart.stories-TDExt_to.js";import{D as I}from"./RadarChart.stories-BHyFZf2-.js";import{D as S}from"./RadialChart.stories-CIkABAQO.js";import{D as $}from"./ScatterChart.stories-B-jA_gFA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cf_JR6Aw.js";import"./sys-enter-2-D5AeNUHf.js";import"./alert-CMm7pEpj.js";import"./Link-B13MM4G6.js";import"./index-Du9D3QZW.js";import"./index-DXmoRv88.js";import"./index-ZEQXSIQn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrBZ3oM5.js";import"./addCustomCSSWithScoping-3IpFFLGa.js";import"./index-BlYNx0T3.js";import"./index-C0fOqYC4.js";import"./index-BEp_fWNn.js";import"./index-pu7JlX44.js";import"./Illustrations-BEksg9v0.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BeS6He5F.js";import"./ScrollEnablement-CtvtwLeU.js";import"./animate-JylhYHXj.js";import"./AnimationMode-vzKcaE-m.js";import"./slim-arrow-left-CZejjuux.js";import"./DemoProps-DEDmgkyL.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BxSJbs67.js";import"./ChartContainer-C6ecvL91.js";import"./index-Bt4sAh6G.js";import"./useCancelAnimationFallback-Ci86pT-Z.js";import"./YAxisTicks-B19Q7-wU.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CZEhkkxa.js";import"./ChartDataLabel-DVfqBtaM.js";import"./useOnClickInternal-DdJ2Pkj0.js";import"./react-content-loader.es-LkqBRnYU.js";import"./useIsRTL-yBtQpEip.js";import"./useLongestYAxisLabel-D0GRVCI7.js";import"./ComposedChart-CdzDBEa-.js";import"./Line-CHXdez7H.js";import"./Scatter-BEJTRZak.js";import"./index-BfE5KXGt.js";import"./index-D-1oJcPr.js";import"./Placeholder-DDnhQil5.js";import"./index-Bnk38A78.js";const E=`# @ui5/webcomponents-react-charts

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
