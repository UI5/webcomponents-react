import{r as i,j as t,T as l}from"./iframe-BThE7jKf.js";import{useMDXComponents as p}from"./index-B2RJGRd4.js";import{M as u,a as h,k as f}from"./blocks-Dnvf3bz-.js";import"./Tag-9-1VZojo.js";import"./index-CTUpkleH.js";import{F as d}from"./CommandsAndQueries-D1tgAUE5.js";import"./copy-CbUREYSb.js";import{T as b}from"./TableOfContent-DHJ-ZZsu.js";import{C}from"./index-CNWsqDua.js";import{D}from"./BarChart.stories-zfTk5l0S.js";import{D as y}from"./BulletChart.stories-MizPEumd.js";import{D as g}from"./ColumnChart.stories-CZwX_S-V.js";import{D as v}from"./ColumnChartWithTrend.stories-Vxx6dV2U.js";import{D as x}from"./ComposedChart.stories-C3gkRdVB.js";import{D as j}from"./DonutChart.stories-DE4Lce8x.js";import{D as w}from"./LineChart.stories-CQM5DNd4.js";import{D as R}from"./PieChart.stories-B8F6B3HI.js";import{D as I}from"./RadarChart.stories-F3KbqbuW.js";import{D as S}from"./RadialChart.stories-DOxVpim8.js";import{D as T}from"./ScatterChart.stories-BLg8mxO4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CcuaLhCB.js";import"./sys-enter-2-DHGMesz_.js";import"./alert-DuPQa3D0.js";import"./index-BDRlpx-X.js";import"./index-Di66tdVG.js";import"./index-DcLqsBQ7.js";import"./Link-BAiulGQ4.js";import"./index-cpbfvu6C.js";import"./index-i-aKPvBx.js";import"./index-DLO7Rqwk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbRZFTjL.js";import"./addCustomCSSWithScoping-BhW-iIae.js";import"./index-Dg0PU8qR.js";import"./Carousel-BDrAOAsY.js";import"./ScrollEnablement-_nV76HoB.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DBURDpKu.js";import"./slim-arrow-left-BYCbxvt7.js";import"./DemoProps-DWDI9aMl.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Canm1frG.js";import"./ChartContainer-B-bcM5Ib.js";import"./index-BpiAnCwY.js";import"./useCancelAnimationFallback-BKbRRIoF.js";import"./YAxisTicks-dD0qegcn.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BfsaE1OI.js";import"./ChartDataLabel-Cv95iQf8.js";import"./useOnClickInternal-Da8FBJoa.js";import"./react-content-loader.es-Cg2nXQA6.js";import"./useIsRTL-DPG-qoPW.js";import"./useLongestYAxisLabel-CW8lFE_r.js";import"./ComposedChart-Cr7qFjeo.js";import"./Line-DKIqh86Z.js";import"./Scatter-B0jzMjB8.js";import"./index-pJHbf-fG.js";import"./index-C_CYcN4r.js";import"./Placeholder-IkxC9-wJ.js";import"./index-COp9dpzN.js";const $=`# @ui5/webcomponents-react-charts

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
