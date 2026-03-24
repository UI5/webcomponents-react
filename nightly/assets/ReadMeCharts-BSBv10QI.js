import{q as i,j as t,Q as l}from"./iframe-BB6QsCcm.js";import{useMDXComponents as p}from"./index-CpyLbSYP.js";import{M as u,a as h,n as f}from"./blocks-DGH8wLVm.js";import"./Tag-DYnAL2vL.js";import"./index-DEibJBdY.js";import"./CommandsAndQueries-BiWITRaD.js";import"./copy-CCxPB9Eo.js";import{T as d}from"./TableOfContent-DsNRTVUI.js";import{F as b}from"./Footer-BhEsQKJ6.js";import"./PageNotFound-CzkzQoiL.js";import{C}from"./index-B6RyCyoG.js";import{D}from"./BarChart.stories-TrspB5rQ.js";import{D as y}from"./BulletChart.stories-BrWCsXf-.js";import{D as g}from"./ColumnChart.stories-D9Lr5cbd.js";import{D as v}from"./ColumnChartWithTrend.stories-CM-x0DUI.js";import{D as x}from"./ComposedChart.stories-CAZdOlja.js";import{D as j}from"./DonutChart.stories-tVowFTjr.js";import{D as w}from"./LineChart.stories-DbMi3PX7.js";import{D as R}from"./PieChart.stories-nl524y95.js";import{D as I}from"./RadarChart.stories-tIVtKvST.js";import{D as S}from"./RadialChart.stories-DVnwFUPQ.js";import{D as $}from"./ScatterChart.stories-BG78Z6-j.js";import"./preload-helper-PPVm8Dsz.js";import"./information-b186mgfr.js";import"./sys-enter-2-BIQ3YVMq.js";import"./alert-BqQjVqfR.js";import"./Link-nh3gGr7J.js";import"./index-BeoN8qxu.js";import"./index-BFKJbbqY.js";import"./index-CMF9IKMM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ctz7lcER.js";import"./addCustomCSSWithScoping-D3Qs4mB8.js";import"./index-ZlEQADjM.js";import"./index-BiTQ1Tdz.js";import"./index-Cg4sRA-Y.js";import"./index-DsUvzGkS.js";import"./Illustrations-ChLBGWr7.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-rGzs8t_e.js";import"./ScrollEnablement-C9jw74Ub.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cb83nN-7.js";import"./slim-arrow-left-4Wy8uQsG.js";import"./DemoProps-CcZ3Gq0k.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-CJaIBHru.js";import"./ChartContainer-rUgPlNfD.js";import"./index-Du-fLjuZ.js";import"./useCancelAnimationFallback-aBa37K-E.js";import"./YAxisTicks-aJqrBvQM.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BRrzduqT.js";import"./ChartDataLabel-BtZkQS8j.js";import"./useOnClickInternal-DIn8rhbg.js";import"./react-content-loader.es-CTuX4fjA.js";import"./useIsRTL-zpMPSAkb.js";import"./useLongestYAxisLabel-BpC_nTff.js";import"./ComposedChart-D7qeHj3a.js";import"./Line-Wq8oi1G_.js";import"./Scatter-DeVZUILh.js";import"./index-jSWYqN94.js";import"./index-BpGqiPnK.js";import"./Placeholder-_OQFpzsX.js";import"./index-BLUx42EB.js";const E=`# @ui5/webcomponents-react-charts

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
