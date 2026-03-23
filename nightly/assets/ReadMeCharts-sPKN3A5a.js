import{q as i,j as t,Q as l}from"./iframe-Cg-RuwYg.js";import{useMDXComponents as p}from"./index-CqVZQP5J.js";import{M as u,a as h,n as f}from"./blocks-De0pSozH.js";import"./Tag-V3n4GJl9.js";import"./index-BHGbu9W7.js";import"./CommandsAndQueries-CCNeSOJY.js";import"./copy-BXGKGRUx.js";import{T as d}from"./TableOfContent-Da-rTDoa.js";import{F as b}from"./Footer-CTf-mOt6.js";import"./PageNotFound-DwqRWqRN.js";import{C}from"./index-D1kF2z2B.js";import{D}from"./BarChart.stories-DvdxyWiD.js";import{D as y}from"./BulletChart.stories-De8Z_jRQ.js";import{D as g}from"./ColumnChart.stories-DMgi88fK.js";import{D as v}from"./ColumnChartWithTrend.stories-4Jj-crjF.js";import{D as x}from"./ComposedChart.stories-XL6jM261.js";import{D as j}from"./DonutChart.stories-6kCT9Hsz.js";import{D as w}from"./LineChart.stories-CWZeP7J2.js";import{D as R}from"./PieChart.stories-B9In1FS-.js";import{D as I}from"./RadarChart.stories-BLnBHyJG.js";import{D as S}from"./RadialChart.stories-Ck79Jw59.js";import{D as $}from"./ScatterChart.stories-HZ9aN2_n.js";import"./preload-helper-PPVm8Dsz.js";import"./information-qBgjFYpj.js";import"./sys-enter-2-DSPEUkAA.js";import"./alert-DJst6O04.js";import"./Link-C3bBlraS.js";import"./index-DVELchH2.js";import"./index-YSls2zGx.js";import"./index-DGDw3Svj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgpxYdce.js";import"./addCustomCSSWithScoping-Bd0YAyTr.js";import"./index-BxFP3rc9.js";import"./index-nSwdNT12.js";import"./index-B6oJNk8s.js";import"./index-CY8SZPoP.js";import"./Illustrations-v3WzxnkA.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DOJwEw4L.js";import"./ScrollEnablement-c_lcpA4D.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Zv7m2z-z.js";import"./slim-arrow-left-DhsBQ86f.js";import"./DemoProps-B-WEWhuo.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-D4wnNUZU.js";import"./ChartContainer-CaiCpKaf.js";import"./index-Cqp8XBPr.js";import"./useCancelAnimationFallback-Pae0EpSE.js";import"./YAxisTicks-CYTTxcfx.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BH5sceo6.js";import"./ChartDataLabel-BhodyPvj.js";import"./useOnClickInternal-Ctc-J0Qs.js";import"./react-content-loader.es-CCECiBXE.js";import"./useIsRTL-DNsGO6Wo.js";import"./useLongestYAxisLabel-CHkM5tFK.js";import"./ComposedChart-CV6yO-oc.js";import"./Line-BH66ygVn.js";import"./Scatter-Ca6unmvj.js";import"./index-zGiq7yfC.js";import"./index-Bwl54uB9.js";import"./Placeholder-D3Nb6OKl.js";import"./index-BvPAC1k6.js";const E=`# @ui5/webcomponents-react-charts

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
