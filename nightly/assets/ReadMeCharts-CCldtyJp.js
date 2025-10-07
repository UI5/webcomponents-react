import{r as i,j as t,T as l}from"./iframe-BiMlSvB5.js";import{useMDXComponents as p}from"./index-zjeO5ftS.js";import{M as u,a as h,k as f}from"./blocks-JfRoz7Bu.js";import"./Tag-DcGxJxNj.js";import"./index-DdnnKwEp.js";import{F as d}from"./CommandsAndQueries-Ihy_vY5j.js";import"./copy-CpLwtFwa.js";import{T as b}from"./TableOfContent-Zea73YRm.js";import{C}from"./index-js46xt5H.js";import{D}from"./BarChart.stories-D5a49TL9.js";import{D as y}from"./BulletChart.stories-L7SJkgZ6.js";import{D as g}from"./ColumnChart.stories-DuUSJU4U.js";import{D as v}from"./ColumnChartWithTrend.stories-DG_Z6eKF.js";import{D as x}from"./ComposedChart.stories-BmqW-zgG.js";import{D as j}from"./DonutChart.stories-C6RHXi-Z.js";import{D as w}from"./LineChart.stories-BPB7X0HR.js";import{D as R}from"./PieChart.stories-CIH_pJ_f.js";import{D as I}from"./RadarChart.stories-D9CmqEIh.js";import{D as S}from"./RadialChart.stories-C5LgWHIG.js";import{D as T}from"./ScatterChart.stories-DmwPBGWq.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B40Y1iPW.js";import"./sys-enter-2-CkPUHPx-.js";import"./alert-BwKvOFsR.js";import"./index-DJoGcUHO.js";import"./index-CjwASx83.js";import"./index-COwkRR6t.js";import"./Link-hDp19ErW.js";import"./index-BN_7wmc1.js";import"./index-BTBLl-af.js";import"./index-CvgLLP4J.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-g_QfzUS9.js";import"./addCustomCSSWithScoping-Dxx39OMa.js";import"./index-CJR1a3iJ.js";import"./Carousel-Bl-s8vSL.js";import"./ScrollEnablement-DKyX1hlv.js";import"./animate-JylhYHXj.js";import"./AnimationMode-O2YB_V0Z.js";import"./slim-arrow-left-C7aRXjNd.js";import"./DemoProps-jN01Du3-.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-gYc--tKn.js";import"./ChartContainer-DGCEXFUl.js";import"./index-GmFx-3lk.js";import"./useCancelAnimationFallback-DgBomyXp.js";import"./YAxisTicks-FJeODwfw.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BoHGllwv.js";import"./ChartDataLabel-iwgJGVGF.js";import"./useOnClickInternal-CXYYL6Y8.js";import"./react-content-loader.es-BTN7UM2U.js";import"./useIsRTL-B8WBSrx9.js";import"./useLongestYAxisLabel-CwHCyC-Q.js";import"./ComposedChart-xF4Xg6mY.js";import"./Line-CfNDhOO4.js";import"./Scatter-RcbkN7LU.js";import"./index-DEL4-o4_.js";import"./index-Pq8Fq_v_.js";import"./Placeholder-DOlDU8Lv.js";import"./index-BVnA-DK7.js";const $=`# @ui5/webcomponents-react-charts

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
