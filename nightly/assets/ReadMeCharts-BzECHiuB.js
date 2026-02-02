import{r as i,j as t,O as l}from"./iframe-CirU0arv.js";import{useMDXComponents as p}from"./index-Dp75W_mY.js";import{M as u,a as h,n as f}from"./blocks-BZ_tUEGn.js";import"./Tag-BIXyVbav.js";import"./index-DkGOPQ-r.js";import{F as d}from"./CommandsAndQueries-C-xkLV_B.js";import"./copy-BRU5ISS0.js";import{T as b}from"./TableOfContent-DKP86iI-.js";import{C}from"./index-W15Ka8Bn.js";import{D}from"./BarChart.stories-zyhK5gnQ.js";import{D as y}from"./BulletChart.stories-BObFyluQ.js";import{D as g}from"./ColumnChart.stories-Dk-xx-6R.js";import{D as v}from"./ColumnChartWithTrend.stories-DKJEyAob.js";import{D as x}from"./ComposedChart.stories-D9dl2v8T.js";import{D as j}from"./DonutChart.stories-Cj7bgqZ1.js";import{D as w}from"./LineChart.stories-CwjQNx0y.js";import{D as R}from"./PieChart.stories-3p8f8RFS.js";import{D as I}from"./RadarChart.stories-Ca-yzCpU.js";import{D as S}from"./RadialChart.stories-DOwY5-IC.js";import{D as $}from"./ScatterChart.stories-DklOt_rC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Z8YFf98o.js";import"./sys-enter-2-5bsV2B9A.js";import"./alert-FLQkBZSI.js";import"./index-BrqGQq-t.js";import"./index-BUDPFl9U.js";import"./index-Dxm6BO0O.js";import"./Link-cWf0Ff_j.js";import"./index-B7a5GE08.js";import"./index-VennLGrv.js";import"./index-DCit48ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CtMJGvuv.js";import"./addCustomCSSWithScoping-DTjbXshP.js";import"./index-4atoEi4m.js";import"./Carousel-_qMouay-.js";import"./ScrollEnablement-DFgzJu98.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BzjFj0MP.js";import"./slim-arrow-left-Cjh9Kl1u.js";import"./DemoProps-BmgDv7IR.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D0eXTwzu.js";import"./ChartContainer-D-M1dFmS.js";import"./index-MEM9Yvlw.js";import"./useCancelAnimationFallback-B9cL6rvl.js";import"./YAxisTicks-BLR_aVQg.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DxSBDvx4.js";import"./ChartDataLabel-CWpZeqm7.js";import"./useOnClickInternal-csDMwq7b.js";import"./react-content-loader.es-DsrcSzX4.js";import"./useIsRTL-BgeeE8jl.js";import"./useLongestYAxisLabel-CNIXyUTo.js";import"./ComposedChart-7ZyJsXfB.js";import"./Line-fGTMe67e.js";import"./Scatter-CvYSZcGX.js";import"./index-Dqj10Eef.js";import"./index-BX4D6Kqu.js";import"./Placeholder-CbMPva0o.js";import"./index-DPfdUiQQ.js";const E=`# @ui5/webcomponents-react-charts

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
