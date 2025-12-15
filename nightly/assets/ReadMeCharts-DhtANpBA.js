import{r as i,j as t,T as l}from"./iframe-m9jt2Gb4.js";import{useMDXComponents as p}from"./index-RGZEkUe7.js";import{M as u,a as h,n as f}from"./blocks-87CpIPmc.js";import"./Tag-CiALl0Be.js";import"./index-COrcBOeY.js";import{F as d}from"./CommandsAndQueries-edZwg3xm.js";import"./copy-ym3aYCLk.js";import{T as b}from"./TableOfContent-BrLJGmQ4.js";import{C}from"./index-RpwzWQl0.js";import{D}from"./BarChart.stories-Cq8qFMGh.js";import{D as y}from"./BulletChart.stories-C1pXieDt.js";import{D as g}from"./ColumnChart.stories-DIL_kbC4.js";import{D as v}from"./ColumnChartWithTrend.stories-BZxye-hg.js";import{D as x}from"./ComposedChart.stories-CHcxdI3f.js";import{D as j}from"./DonutChart.stories-JhhSweoJ.js";import{D as w}from"./LineChart.stories-aSDSqW5H.js";import{D as R}from"./PieChart.stories-C5OYfHoM.js";import{D as I}from"./RadarChart.stories-Dc91GsJv.js";import{D as S}from"./RadialChart.stories-wnqO3Ibg.js";import{D as T}from"./ScatterChart.stories-CuPgL9_y.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B-8ilFG0.js";import"./sys-enter-2-DoymHnQS.js";import"./alert-BEZ6iJPu.js";import"./index-YlQxkFIi.js";import"./index-U8bfBs9H.js";import"./index-B5E0DaZi.js";import"./Link-BmbvCigV.js";import"./index-BRPp-7oG.js";import"./index-B8eg2o8m.js";import"./index-D_3xpPA0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3bZPHjv.js";import"./addCustomCSSWithScoping-B_aL8aFh.js";import"./index-DK4LsWgA.js";import"./Carousel-DLzdtqAd.js";import"./ScrollEnablement-SOer0rOa.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B1R6B0aI.js";import"./slim-arrow-left-DEqbR2YV.js";import"./DemoProps-BWga5Hcn.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-VXxfHWIG.js";import"./ChartContainer-Be5tQTQ9.js";import"./index-DTqNuwcc.js";import"./useCancelAnimationFallback-Ddw1MMvD.js";import"./YAxisTicks-C5yqRxaC.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-1UCKNWul.js";import"./ChartDataLabel-CzDW88h3.js";import"./useOnClickInternal-DEI9JcM_.js";import"./react-content-loader.es-BdMjux3U.js";import"./useIsRTL-xF7iXHP9.js";import"./useLongestYAxisLabel-CHmNli8H.js";import"./ComposedChart-DAGmyyzo.js";import"./Line-Dpvo4xFW.js";import"./Scatter-BYkj65MG.js";import"./index-CsDiPss3.js";import"./index-DyGXQzyg.js";import"./Placeholder-jydZJZVT.js";import"./index-BVVdeH7z.js";const $=`# @ui5/webcomponents-react-charts

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
