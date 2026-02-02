import{r as i,j as t,O as l}from"./iframe-DW8uOQp0.js";import{useMDXComponents as p}from"./index-DjfSR8mu.js";import{M as u,a as h,n as f}from"./blocks-B-FDorPY.js";import"./Tag-DZD94rKb.js";import"./index-B6OSuhq3.js";import{F as d}from"./CommandsAndQueries-CfxeF-Et.js";import"./copy-BPjUZJw9.js";import{T as b}from"./TableOfContent-DIWuESi1.js";import{C}from"./index-BdL_Htia.js";import{D}from"./BarChart.stories-Ks1R2MZ2.js";import{D as y}from"./BulletChart.stories-Bd8a-ZX_.js";import{D as g}from"./ColumnChart.stories-S4hZLwAp.js";import{D as v}from"./ColumnChartWithTrend.stories-DTm20UN7.js";import{D as x}from"./ComposedChart.stories-D_jZaf_q.js";import{D as j}from"./DonutChart.stories-hpwoTKJI.js";import{D as w}from"./LineChart.stories-B-yZhmaJ.js";import{D as R}from"./PieChart.stories-0g5wrNxb.js";import{D as I}from"./RadarChart.stories-DvcQgaEX.js";import{D as S}from"./RadialChart.stories-CJWBcun9.js";import{D as $}from"./ScatterChart.stories-B6CSzY8C.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Dh4y9R_M.js";import"./sys-enter-2-DblypcwG.js";import"./alert-CwT2Bhtr.js";import"./index-wMLjz3fG.js";import"./index-BIXJrD8M.js";import"./index-DHspvyEH.js";import"./Link-DBMfTmkv.js";import"./index-DCmHXknG.js";import"./index-B1HFxIWl.js";import"./index-BlVT_NLP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BqxCMWvb.js";import"./addCustomCSSWithScoping-InFg9UZ2.js";import"./index-BettgKsC.js";import"./Carousel-C7MjqIm3.js";import"./ScrollEnablement-BuIEarCH.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B2N8Vv6T.js";import"./slim-arrow-left-KFuctjC1.js";import"./DemoProps-fYNX4JC6.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BOw49OHJ.js";import"./ChartContainer-DACtgW4n.js";import"./index-7R16Plue.js";import"./useCancelAnimationFallback-CkbS3NDg.js";import"./YAxisTicks-BGZeAlBV.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CrAZkp9O.js";import"./ChartDataLabel-ClJo5LlD.js";import"./useOnClickInternal-C6B4ast8.js";import"./react-content-loader.es-C49W3Hdt.js";import"./useIsRTL--X6IcLkp.js";import"./useLongestYAxisLabel-Cv19bcV4.js";import"./ComposedChart-CDIgBYHu.js";import"./Line-B0s1z619.js";import"./Scatter-B4xB9DXX.js";import"./index-DmV-PrXk.js";import"./index-NrjJLQHe.js";import"./Placeholder-CSSN1S4U.js";import"./index-B5i9iHxt.js";const E=`# @ui5/webcomponents-react-charts

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
