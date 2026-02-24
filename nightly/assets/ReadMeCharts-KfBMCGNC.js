import{r as i,j as t,O as l}from"./iframe-B9-Lkkb_.js";import{useMDXComponents as p}from"./index-BHB6dH51.js";import{M as u,a as h,n as f}from"./blocks-DiSlIEhk.js";import"./Tag-CCKiiuhz.js";import"./index-Bp8duZh7.js";import{F as d}from"./CommandsAndQueries-DLAu90uX.js";import"./copy-Cr6zYfEo.js";import{T as b}from"./TableOfContent-SR1Jk1Pe.js";import{C}from"./index-Cw58y5MY.js";import{D}from"./BarChart.stories-B7ftqupn.js";import{D as y}from"./BulletChart.stories-XY0PZYPs.js";import{D as g}from"./ColumnChart.stories-B6finF81.js";import{D as v}from"./ColumnChartWithTrend.stories-C4DMiisP.js";import{D as x}from"./ComposedChart.stories-FfLTIpGg.js";import{D as j}from"./DonutChart.stories-Cg0HKqGt.js";import{D as w}from"./LineChart.stories-CIn6y_gv.js";import{D as R}from"./PieChart.stories-1GWwTvTv.js";import{D as I}from"./RadarChart.stories-Cre8mMEG.js";import{D as S}from"./RadialChart.stories-BWlfmmA-.js";import{D as $}from"./ScatterChart.stories-DJOQ3QDg.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0Z0JvqI.js";import"./sys-enter-2-CI12jhXR.js";import"./alert-BH05V2Qa.js";import"./index-B__WJxOt.js";import"./index-B3mrOTgf.js";import"./index-Uzak41NI.js";import"./Link-C6rFWX_2.js";import"./index-Cw3xsh9-.js";import"./index-DkC2gP8p.js";import"./index-BetvcNL1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee--tlCK9Sx.js";import"./addCustomCSSWithScoping-dvkvBHTK.js";import"./index-GyCUx3PS.js";import"./Carousel-CO8i85Bu.js";import"./ScrollEnablement-KTUvEJYU.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B7PboaJ2.js";import"./slim-arrow-left-Cgx_37sn.js";import"./DemoProps-CSMI7W6m.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B2fV67Py.js";import"./ChartContainer-C3rQWHnq.js";import"./index-DXx-5JGj.js";import"./useCancelAnimationFallback-DV0zyQo9.js";import"./YAxisTicks-BulB0GcO.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CQ_8ebpd.js";import"./ChartDataLabel-B_XRVoTk.js";import"./useOnClickInternal-C5ZUGFMH.js";import"./react-content-loader.es-DRi6h9qf.js";import"./useIsRTL-0ILMNLpe.js";import"./useLongestYAxisLabel-1H-1cpMQ.js";import"./ComposedChart-CPi6rJI9.js";import"./Line-CmhOaN_b.js";import"./Scatter-CL7djuBw.js";import"./index-D2F2W1o5.js";import"./index-CwOvrE7z.js";import"./Placeholder-D6FU8NIt.js";import"./index-DwFuthvq.js";const E=`# @ui5/webcomponents-react-charts

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
