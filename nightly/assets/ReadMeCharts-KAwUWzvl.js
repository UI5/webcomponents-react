import{r as i,j as t,O as l}from"./iframe-CSs3GcCz.js";import{useMDXComponents as p}from"./index-1VYUEsB4.js";import{M as u,a as h,n as f}from"./blocks-DlOiJG9w.js";import"./Tag-tq7bvH7x.js";import"./index-Bv5UQAtB.js";import{F as d}from"./CommandsAndQueries-Dzepq0rT.js";import"./copy-A0b4Giju.js";import{T as b}from"./TableOfContent-D_6sZ66R.js";import{C}from"./index-_a6gEuFM.js";import{D}from"./BarChart.stories-Dh_e5Vaf.js";import{D as y}from"./BulletChart.stories-Bqo1S1lw.js";import{D as g}from"./ColumnChart.stories-B8nMkV7n.js";import{D as v}from"./ColumnChartWithTrend.stories-CYhPqZcV.js";import{D as x}from"./ComposedChart.stories-B7d-87Gi.js";import{D as j}from"./DonutChart.stories-DwA1l1va.js";import{D as w}from"./LineChart.stories-Bcs0Gj--.js";import{D as R}from"./PieChart.stories-W8ZENdq9.js";import{D as I}from"./RadarChart.stories-B5_1HGPc.js";import{D as S}from"./RadialChart.stories-Bjx1XhXi.js";import{D as $}from"./ScatterChart.stories-CyKDXH-F.js";import"./preload-helper-PPVm8Dsz.js";import"./information-AyutgqL-.js";import"./sys-enter-2-Cfi5ZTIT.js";import"./alert-CpO7ww38.js";import"./index-jfbseB2e.js";import"./index-C2PP5dg7.js";import"./index-kEy_zqDf.js";import"./Link-Bs0GSE9o.js";import"./index-CNpYG1J4.js";import"./index-C-kYIaXe.js";import"./index-BXC6vCLS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoJGLxs9.js";import"./addCustomCSSWithScoping-DvKIlldN.js";import"./index-IS643aT1.js";import"./Carousel-D9poiJdu.js";import"./ScrollEnablement-DHd31uDD.js";import"./animate-JylhYHXj.js";import"./AnimationMode-bHRLsi1i.js";import"./slim-arrow-left-DEcl3EQB.js";import"./DemoProps-AbT6S-Wq.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-tBjGQOUa.js";import"./ChartContainer-CD1cc42m.js";import"./index-D21M5qi1.js";import"./useCancelAnimationFallback-DL3w-_2Q.js";import"./YAxisTicks-C67HX4rD.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-y8Xb-kA0.js";import"./ChartDataLabel-B7aZiZ1t.js";import"./useOnClickInternal-DJ0UZqrZ.js";import"./react-content-loader.es-DumZNSdr.js";import"./useIsRTL-D5q-dcwP.js";import"./useLongestYAxisLabel-f-V7S9eE.js";import"./ComposedChart-B8Kv6uUO.js";import"./Line-CviT_uFw.js";import"./Scatter-CTHbH1Ks.js";import"./index-DaPmn6d0.js";import"./index-Dcg0S0iN.js";import"./Placeholder-9fkullaj.js";import"./index-BLD5Qy8J.js";const E=`# @ui5/webcomponents-react-charts

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
