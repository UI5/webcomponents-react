import{r as i,j as t,T as l}from"./iframe-BsBPxA6U.js";import{useMDXComponents as p}from"./index-C_R4y4V0.js";import{M as u,a as h,m as f}from"./blocks-CEOEebKO.js";import"./Tag-DSoKri1G.js";import"./index-Doky9Mkb.js";import{F as d}from"./CommandsAndQueries-DGdgKo6k.js";import"./copy-CRGjVpRv.js";import{T as b}from"./TableOfContent-DrNJuZzj.js";import{C}from"./index-CzxVprom.js";import{D}from"./BarChart.stories-BbTMImGT.js";import{D as y}from"./BulletChart.stories-DR7JScl5.js";import{D as g}from"./ColumnChart.stories-CwFDwNuL.js";import{D as v}from"./ColumnChartWithTrend.stories-CoTtVupV.js";import{D as x}from"./ComposedChart.stories-BjNhOsO5.js";import{D as j}from"./DonutChart.stories-DAcYezOz.js";import{D as w}from"./LineChart.stories-ImUEa1md.js";import{D as R}from"./PieChart.stories-KRJwFJsA.js";import{D as I}from"./RadarChart.stories-DqB-EOVI.js";import{D as S}from"./RadialChart.stories-CfsFqT5_.js";import{D as T}from"./ScatterChart.stories-9tckueui.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bj9U_7MQ.js";import"./sys-enter-2-C6mBZBNJ.js";import"./alert-Y2sfMbhe.js";import"./index-CAH0250y.js";import"./index-Dmhochbe.js";import"./index-gPsABUAK.js";import"./Link-BHFGfTB0.js";import"./index-Cihbk1NA.js";import"./index-BLjU5XqX.js";import"./index-DNCqkTDx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmx-BJlM.js";import"./addCustomCSSWithScoping-DbsNQuuI.js";import"./index-CNyanKq8.js";import"./Carousel-DD9d96LI.js";import"./ScrollEnablement-B0j5N4_F.js";import"./animate-JylhYHXj.js";import"./AnimationMode-SLwOcZSV.js";import"./slim-arrow-left-DWlCZgpC.js";import"./DemoProps-CTv2kR3-.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CSX7LYue.js";import"./ChartContainer-zOweZBHW.js";import"./index-CW8aTQPD.js";import"./useCancelAnimationFallback-DEkgfw0D.js";import"./YAxisTicks-D61Twor8.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BEBWshw1.js";import"./ChartDataLabel-BRYG46JK.js";import"./useOnClickInternal-E3HCQ3Yt.js";import"./react-content-loader.es-CN8POXQL.js";import"./useIsRTL-C1Y1l0w-.js";import"./useLongestYAxisLabel-DN2qcmM-.js";import"./ComposedChart-CDyrhXym.js";import"./Line-BMpUNFqO.js";import"./Scatter-BhcgTgaZ.js";import"./index-CD9ls3Vc.js";import"./index-CRw4w4IP.js";import"./Placeholder-B-pxI6bE.js";import"./index-DJrjK7QP.js";const $=`# @ui5/webcomponents-react-charts

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
