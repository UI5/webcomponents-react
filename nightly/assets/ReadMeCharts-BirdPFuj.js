import{r as i,j as t,T as l}from"./iframe-By2gmFxc.js";import{useMDXComponents as p}from"./index-gKb_GMnq.js";import{M as u,a as h,n as f}from"./blocks-D2uzjwbj.js";import"./Tag-Q4xsur8Q.js";import"./index-CIY2e3dX.js";import{F as d}from"./CommandsAndQueries-MwhWu1jt.js";import"./copy-jhrg3Bh5.js";import{T as b}from"./TableOfContent-DNYBmsFN.js";import{C}from"./index-Bm4mjOZq.js";import{D}from"./BarChart.stories-QOxZ-vXe.js";import{D as y}from"./BulletChart.stories-BwclTKqJ.js";import{D as g}from"./ColumnChart.stories-ug5vYxU3.js";import{D as v}from"./ColumnChartWithTrend.stories-DVMglIEC.js";import{D as x}from"./ComposedChart.stories-DyI31MCe.js";import{D as j}from"./DonutChart.stories-Cltz4ORB.js";import{D as w}from"./LineChart.stories-EGq1A23q.js";import{D as R}from"./PieChart.stories-P4roOwYp.js";import{D as I}from"./RadarChart.stories-C5Iq-CQI.js";import{D as S}from"./RadialChart.stories-ChP5QuAp.js";import{D as T}from"./ScatterChart.stories-Caem1hy6.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DZbn4exg.js";import"./sys-enter-2-D1EL9sqg.js";import"./alert-Dj00yiIa.js";import"./index-DjdoJ-R-.js";import"./index-JdoT9BRG.js";import"./index-CYEIBPim.js";import"./Link-nWDhDuhI.js";import"./index-4iQpwXEW.js";import"./index-XAF-DZNA.js";import"./index-BlQvs7kx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl2hQFWK.js";import"./addCustomCSSWithScoping-BCT2RHCk.js";import"./index-c5NRQxKp.js";import"./Carousel-DbYgvQuF.js";import"./ScrollEnablement-CzJbNFQB.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BegZbEEH.js";import"./slim-arrow-left-DKj-xelv.js";import"./DemoProps-Cu5eLVBa.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-gefo3yID.js";import"./ChartContainer-DvWWB_TN.js";import"./index-BrqX3Vme.js";import"./useCancelAnimationFallback-DczXj8Td.js";import"./YAxisTicks-GRBYYxX1.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CQImiB8O.js";import"./ChartDataLabel-BzYEBwXb.js";import"./useOnClickInternal-oxmvgH_X.js";import"./react-content-loader.es-BY8WFCVf.js";import"./useIsRTL-T3phyLSC.js";import"./useLongestYAxisLabel-QDWNQKrU.js";import"./ComposedChart-DdQwcuWN.js";import"./Line-BMbEo7oL.js";import"./Scatter-DodegVRU.js";import"./index-BWQuejv2.js";import"./index-C3sjWQmp.js";import"./Placeholder-CR0hsnZp.js";import"./index-B5LyocLd.js";const $=`# @ui5/webcomponents-react-charts

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
