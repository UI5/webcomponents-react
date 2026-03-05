import{q as i,j as t,Q as l}from"./iframe-B2FKbRyU.js";import{useMDXComponents as p}from"./index-B6nFsg5H.js";import{M as u,a as h,n as f}from"./blocks-D-EyJoW7.js";import"./Tag-DALomp7A.js";import"./index-DDSpbD3Z.js";import"./CommandsAndQueries-Ckb11nUD.js";import"./copy-JUMniwmI.js";import{T as d}from"./TableOfContent-imKSNnNj.js";import{F as b}from"./Footer-Boec_nj9.js";import"./PageNotFound-D3X2ZHIh.js";import{C}from"./index-DXXgfmOi.js";import{D}from"./BarChart.stories-COHCCe7x.js";import{D as y}from"./BulletChart.stories-C1Wdbp6r.js";import{D as g}from"./ColumnChart.stories-DmdLpgE-.js";import{D as v}from"./ColumnChartWithTrend.stories-Casjq5_9.js";import{D as x}from"./ComposedChart.stories-BdOvZ4Y4.js";import{D as j}from"./DonutChart.stories-BZuNg5cj.js";import{D as w}from"./LineChart.stories-B8XreAMO.js";import{D as R}from"./PieChart.stories-CL91oWpM.js";import{D as I}from"./RadarChart.stories-Bu6JpJap.js";import{D as S}from"./RadialChart.stories-BR2abEoo.js";import{D as $}from"./ScatterChart.stories-C-Buh6bU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-gzDx7eZf.js";import"./sys-enter-2-C-oODT1L.js";import"./alert-dNTL_brG.js";import"./Link-BrDotueY.js";import"./index-DHXfA1aH.js";import"./index-C1DRCM0c.js";import"./index-jZ_VDKcl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BzpFx6uj.js";import"./addCustomCSSWithScoping-DCMkWG64.js";import"./index-DS8Ies1F.js";import"./index-CKRHtWhm.js";import"./index-DKyTtykB.js";import"./index-DCb_xP6l.js";import"./Illustrations-Bj-aY82Z.js";import"./i18n-defaults-C7ICj5-E.js";import"./Carousel-BuLXC7cs.js";import"./ScrollEnablement-DwnkyfbX.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C2a-6RAK.js";import"./slim-arrow-left-Do1aU475.js";import"./DemoProps-CA6bDOmS.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DOmT7pHc.js";import"./ChartContainer-CXiI8ME4.js";import"./index-s315U2R4.js";import"./useCancelAnimationFallback-DqpSSoMJ.js";import"./YAxisTicks-BpqVHw5M.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-4Z_SivF9.js";import"./ChartDataLabel-bt4DrVmQ.js";import"./useOnClickInternal-DHW-i1fi.js";import"./react-content-loader.es-WwMuyRqI.js";import"./useIsRTL-DPlkBtoH.js";import"./useLongestYAxisLabel-Dt8wRPiw.js";import"./ComposedChart-2v5pZQEz.js";import"./Line-vb3oS7WI.js";import"./Scatter-TvnhD4Xn.js";import"./index-CBT4Z2QS.js";import"./index-3WZQNZYc.js";import"./Placeholder-DqrsUSlw.js";import"./index-BvIbdqPO.js";const E=`# @ui5/webcomponents-react-charts

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
