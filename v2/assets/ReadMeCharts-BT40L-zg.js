import{r as i,j as t,T as l}from"./iframe-BV6MX4jP.js";import{useMDXComponents as p}from"./index-BBPLoQd2.js";import{M as u,a as h,k as f}from"./blocks-ButdG5ct.js";import"./Tag-DqTS_NIk.js";import"./index-D61UH3oK.js";import{F as d}from"./CommandsAndQueries-B_NVK97H.js";import"./copy-BuKjNY_z.js";import{T as b}from"./TableOfContent-CJu7MjuI.js";import{C}from"./index-Ce-GUvvK.js";import{D}from"./BarChart.stories-D5HAaTuB.js";import{D as y}from"./BulletChart.stories-CvcVml6e.js";import{D as g}from"./ColumnChart.stories-CIWRvE4z.js";import{D as v}from"./ColumnChartWithTrend.stories-Dxegqpi6.js";import{D as x}from"./ComposedChart.stories-B8wM1S3_.js";import{D as j}from"./DonutChart.stories-C5YQVvyL.js";import{D as w}from"./LineChart.stories-C16vVvxU.js";import{D as R}from"./PieChart.stories-Bz_oRYMr.js";import{D as I}from"./RadarChart.stories-BLrDl3VW.js";import{D as S}from"./RadialChart.stories-RBJRErUK.js";import{D as T}from"./ScatterChart.stories-luU34ItH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D4lwDDvQ.js";import"./sys-enter-2-CNNlkaec.js";import"./alert-D9QVBDgC.js";import"./index-Bn23lh4B.js";import"./index-BIn6vsDV.js";import"./index-5lJ63Ggw.js";import"./Link-CQBQGD-K.js";import"./index-BeBg5nKE.js";import"./index-BAeh9ZRA.js";import"./index-pEzZy3XJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJJJ49N9.js";import"./addCustomCSSWithScoping-BAR7O9dV.js";import"./index-B6xBDYCv.js";import"./Carousel-DZ9u-D-r.js";import"./ScrollEnablement-CUGdZ0ua.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BqrczzYh.js";import"./slim-arrow-left-BbkEW54U.js";import"./DemoProps-CjqEslFC.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Cq_b0Bse.js";import"./ChartContainer-D75Plnmw.js";import"./index-Cel48Hnh.js";import"./useCancelAnimationFallback-DVJZuVgQ.js";import"./YAxisTicks-DeWqI4JR.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C3Ucz4lB.js";import"./ChartDataLabel-CqKG8eJV.js";import"./useOnClickInternal-CsyFFFLo.js";import"./react-content-loader.es-CJEqWDn0.js";import"./useIsRTL-CTyFJzVy.js";import"./useLongestYAxisLabel-DX84aA5Y.js";import"./ComposedChart-CoEVFRZo.js";import"./Line-D96TIk5V.js";import"./Scatter-BlpSPTKw.js";import"./index-Buo01_l8.js";import"./index-B33lctyr.js";import"./Placeholder-Bjvr9PsG.js";import"./index-Ai9q6Wmp.js";const $=`# @ui5/webcomponents-react-charts

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
