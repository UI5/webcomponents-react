import{r as i,j as t,T as l}from"./iframe-THm39tdL.js";import{useMDXComponents as p}from"./index-B4tiZj28.js";import{M as u,a as h,n as f}from"./blocks-exNB_fpK.js";import"./Tag-DAVE_HUz.js";import"./index-GpdeEFTa.js";import{F as d}from"./CommandsAndQueries-CM3XC2Lj.js";import"./copy-BpRW8fgI.js";import{T as b}from"./TableOfContent-k5L_S4AO.js";import{C}from"./index-CDA8SMgH.js";import{D}from"./BarChart.stories-DI4fqT3v.js";import{D as y}from"./BulletChart.stories-tdSqDgMl.js";import{D as g}from"./ColumnChart.stories-BpUHA5py.js";import{D as v}from"./ColumnChartWithTrend.stories-ClH3M41E.js";import{D as x}from"./ComposedChart.stories-BGTtFYqb.js";import{D as j}from"./DonutChart.stories-D5xFukT1.js";import{D as w}from"./LineChart.stories-BEaaD6e4.js";import{D as R}from"./PieChart.stories-BX1CTeUH.js";import{D as I}from"./RadarChart.stories-ByU3ea9w.js";import{D as S}from"./RadialChart.stories-B_gVgaD9.js";import{D as T}from"./ScatterChart.stories-CquSSkSA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cma2Q91K.js";import"./sys-enter-2-iw8Fxy6e.js";import"./alert-Buz1y0R3.js";import"./index-DPta9qsd.js";import"./index-Dg0TKbRC.js";import"./index-DLy3fIdu.js";import"./Link-CGyr18oq.js";import"./index-BziYS9gD.js";import"./index-Dfp6johM.js";import"./index-KiDRbvAF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGXn0jIO.js";import"./addCustomCSSWithScoping-msj5utEH.js";import"./index-BQ6gEIJW.js";import"./Carousel-Afzxu51L.js";import"./ScrollEnablement-BuLvzDFb.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BbGJ3K_1.js";import"./slim-arrow-left-BhI3FDG5.js";import"./DemoProps-B5kQzcAG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dc9w637z.js";import"./ChartContainer-BeKM0cHj.js";import"./index-CSWlCTzX.js";import"./useCancelAnimationFallback-aLmoKVLj.js";import"./YAxisTicks-DdszRL5p.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C2MD3C2W.js";import"./ChartDataLabel-CYsTpv5j.js";import"./useOnClickInternal-CHViiPj8.js";import"./react-content-loader.es-C8VNq41h.js";import"./useIsRTL-DmNCTJWW.js";import"./useLongestYAxisLabel-CTAWIm73.js";import"./ComposedChart-SIl6n8RC.js";import"./Line-C1-G31To.js";import"./Scatter-BXQ1DJ_n.js";import"./index-D7FM1DbL.js";import"./index-CNH7NVM4.js";import"./Placeholder-BYPzTQtH.js";import"./index-CEHixQ-6.js";const $=`# @ui5/webcomponents-react-charts

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
