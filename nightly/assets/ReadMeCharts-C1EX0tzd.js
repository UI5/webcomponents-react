import{r as i,j as t,O as l}from"./iframe-mz-DPMfO.js";import{useMDXComponents as p}from"./index-BQe-Y6f4.js";import{M as u,a as h,n as f}from"./blocks-CqHnwxUT.js";import"./Tag-mNyMFg7D.js";import"./index-wUrz4SBY.js";import{F as d}from"./CommandsAndQueries-CNdgb_xD.js";import"./copy-40awRikg.js";import{T as b}from"./TableOfContent-BpsnHKEY.js";import{C}from"./index-CeN7xUVr.js";import{D}from"./BarChart.stories-BEy9_DMa.js";import{D as y}from"./BulletChart.stories-C_yGwb_e.js";import{D as g}from"./ColumnChart.stories-DZixv3La.js";import{D as v}from"./ColumnChartWithTrend.stories-CMfNFZBt.js";import{D as x}from"./ComposedChart.stories-D5SCBQVS.js";import{D as j}from"./DonutChart.stories-BEGPh9YS.js";import{D as w}from"./LineChart.stories-DKB5BLei.js";import{D as R}from"./PieChart.stories-DX5FnaG_.js";import{D as I}from"./RadarChart.stories-D0PhGsU4.js";import{D as S}from"./RadialChart.stories-CwQJKR9l.js";import{D as $}from"./ScatterChart.stories-m9jB_VBo.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DMiSc-jE.js";import"./sys-enter-2-Ll_1TI3l.js";import"./alert-CKymAgR2.js";import"./index-Da-CbngW.js";import"./index-D9y5V_y0.js";import"./index-BPrj4A7u.js";import"./Link-BKhYH1SV.js";import"./index-3wg9O5k7.js";import"./index-B9dZeu2z.js";import"./index-VFO9WUy1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-idDvu4gP.js";import"./addCustomCSSWithScoping-DOUHBih7.js";import"./index--R_eUibk.js";import"./Carousel-B-VZG4Ub.js";import"./ScrollEnablement-2SSah3lR.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C_3MfRBK.js";import"./slim-arrow-left-CET6w--z.js";import"./DemoProps-DBZnwXnJ.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-7t4gZdD0.js";import"./ChartContainer-BtLgaaHl.js";import"./index-CDMzJTvn.js";import"./useCancelAnimationFallback-CefYLUcx.js";import"./YAxisTicks-CsQZMl7l.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DCnHBxid.js";import"./ChartDataLabel-dJLruXVV.js";import"./useOnClickInternal-CK49Gg26.js";import"./react-content-loader.es-B6j7bEUq.js";import"./useIsRTL-CcIdQY8X.js";import"./useLongestYAxisLabel-B-vw7z22.js";import"./ComposedChart-DZnKn1Rz.js";import"./Line-Ct8Dzadn.js";import"./Scatter-B2cE05V1.js";import"./index-CpM8wfSC.js";import"./index-DhtuWfym.js";import"./Placeholder-DeAPp9sH.js";import"./index-BG_ufpRj.js";const E=`# @ui5/webcomponents-react-charts

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
