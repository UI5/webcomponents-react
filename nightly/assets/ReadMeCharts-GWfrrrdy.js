import{r as i,j as t,O as l}from"./iframe-BeAHz6cC.js";import{useMDXComponents as p}from"./index-IuDgzHrg.js";import{M as u,a as h,n as f}from"./blocks-BFIGDLi7.js";import"./Tag-D9qmbNXw.js";import"./index-BxL3HTx3.js";import{F as d}from"./CommandsAndQueries-D97dtm9O.js";import"./copy-CeLNiPKq.js";import{T as b}from"./TableOfContent-C295TbGK.js";import{C}from"./index-DvJTeu0n.js";import{D}from"./BarChart.stories-BbWyU_V-.js";import{D as y}from"./BulletChart.stories-BjgMOqHe.js";import{D as g}from"./ColumnChart.stories-WaIHDq3_.js";import{D as v}from"./ColumnChartWithTrend.stories-Czh4RkT1.js";import{D as x}from"./ComposedChart.stories-DVWUfgf_.js";import{D as j}from"./DonutChart.stories-DGjMo-l0.js";import{D as w}from"./LineChart.stories-BAo5n_b_.js";import{D as R}from"./PieChart.stories-Cg7VsEW9.js";import{D as I}from"./RadarChart.stories-D9krSDCj.js";import{D as S}from"./RadialChart.stories-BqCPfFL6.js";import{D as $}from"./ScatterChart.stories-BA1xj85e.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CKz_vH8g.js";import"./sys-enter-2-DjAoJc05.js";import"./alert-DbaxRKJL.js";import"./index-Cz53yeIo.js";import"./index-BJX7RQS4.js";import"./index-DADITnZh.js";import"./Link-DcHF9WJI.js";import"./index-B-C-Jm2N.js";import"./index-BgUv4ZgK.js";import"./index-dtYUUSxT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0TPubq3.js";import"./addCustomCSSWithScoping--2mgu3TN.js";import"./index-D74mYq85.js";import"./Carousel-CQ5aDvum.js";import"./ScrollEnablement-SmS2scF8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-JYZjnbPS.js";import"./slim-arrow-left-9RnHKIYN.js";import"./DemoProps-DSTkwamy.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BeJ9IHGJ.js";import"./ChartContainer-DexEA6pF.js";import"./index-CvVdNUDg.js";import"./useCancelAnimationFallback-m6h__oIw.js";import"./YAxisTicks-CzE1F34p.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CMWNecnx.js";import"./ChartDataLabel-DVqRfF8d.js";import"./useOnClickInternal-D-_sQpfK.js";import"./react-content-loader.es-C22AbZbN.js";import"./useIsRTL-DunOEBQz.js";import"./useLongestYAxisLabel-BhzkFaJA.js";import"./ComposedChart-uriJOV2H.js";import"./Line-BhQPp0oY.js";import"./Scatter-B0FcO7O3.js";import"./index-NUY3a75V.js";import"./index-Cwa_d-Hp.js";import"./Placeholder-DvIf4R5c.js";import"./index-BcfOL1hG.js";const E=`# @ui5/webcomponents-react-charts

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
