import{r as i,j as t,T as l}from"./iframe-DbW3_KqJ.js";import{useMDXComponents as p}from"./index-BOUZeiU3.js";import{M as u,a as h,m as f}from"./blocks-DqJAVTfM.js";import"./Tag-CrC0d5GD.js";import"./index-ImYws479.js";import{F as d}from"./CommandsAndQueries-CJXOedaX.js";import"./copy-D0b8WOcv.js";import{T as b}from"./TableOfContent-Wm2jpON0.js";import{C}from"./index-Be4WELWu.js";import{D}from"./BarChart.stories-id6cfQKZ.js";import{D as y}from"./BulletChart.stories-BsaO9yPP.js";import{D as g}from"./ColumnChart.stories-Ca2P-5Rc.js";import{D as v}from"./ColumnChartWithTrend.stories-CVQH4EZF.js";import{D as x}from"./ComposedChart.stories-BPZDG4Mz.js";import{D as j}from"./DonutChart.stories-BE3K2qUg.js";import{D as w}from"./LineChart.stories-CpnYxIci.js";import{D as R}from"./PieChart.stories-dfEzhD74.js";import{D as I}from"./RadarChart.stories-Co3uzl_i.js";import{D as S}from"./RadialChart.stories-mmS1sKx-.js";import{D as T}from"./ScatterChart.stories-DHtziTIJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cagswqpw.js";import"./sys-enter-2-DbM4lnFg.js";import"./alert-CAARFYG8.js";import"./index-Cbn-jnZC.js";import"./index-Dzqums5N.js";import"./index-WvKt5Tsy.js";import"./Link-C0NTxSly.js";import"./index-xs8VNv2y.js";import"./index-1dv7YKpz.js";import"./index-CoALISWz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3tP5nwl9.js";import"./addCustomCSSWithScoping-U-EEhqSi.js";import"./index-D2hl9olI.js";import"./Carousel-CH2_l-B8.js";import"./ScrollEnablement-DHqnHvnh.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BohvGpZQ.js";import"./slim-arrow-left-H9sNaA6e.js";import"./DemoProps-CEVYaB9F.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-vKK5hTy-.js";import"./ChartContainer-gMwyAk3W.js";import"./index-CEyjDTxm.js";import"./useCancelAnimationFallback-BXH9CtY8.js";import"./YAxisTicks-BSTMyqRg.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-A6rd1gM7.js";import"./ChartDataLabel-EILGMdYx.js";import"./useOnClickInternal-COY6iQuC.js";import"./react-content-loader.es-a1eWM6_Z.js";import"./useIsRTL-BhPu4d3o.js";import"./useLongestYAxisLabel-BqckKq9T.js";import"./ComposedChart-B2hZOldZ.js";import"./Line-C1HupDUO.js";import"./Scatter-BQdUBwA1.js";import"./index-DVsqYcYi.js";import"./index-BHDOB0Km.js";import"./Placeholder-UNmFk8g1.js";import"./index-DOaKKPwe.js";const $=`# @ui5/webcomponents-react-charts

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
