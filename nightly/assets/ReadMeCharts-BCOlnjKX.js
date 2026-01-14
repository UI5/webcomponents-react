import{r as i,j as t,T as l}from"./iframe-DsoLxTrs.js";import{useMDXComponents as p}from"./index-BYp40d_0.js";import{M as u,a as h,n as f}from"./blocks-BdFCA8eW.js";import"./Tag-CTTSF-tU.js";import"./index-DgqU0bHc.js";import{F as d}from"./CommandsAndQueries-CnpygbQ5.js";import"./copy-BFj7VYi7.js";import{T as b}from"./TableOfContent-CLxSJm3z.js";import{C}from"./index-Bz3zlILY.js";import{D}from"./BarChart.stories-DUjKO1Nw.js";import{D as y}from"./BulletChart.stories-BLEJcSue.js";import{D as g}from"./ColumnChart.stories-BAsc8kMW.js";import{D as v}from"./ColumnChartWithTrend.stories--yHoOOER.js";import{D as x}from"./ComposedChart.stories-D0CkkoNI.js";import{D as j}from"./DonutChart.stories-C6UIYLhq.js";import{D as w}from"./LineChart.stories-uDoU3yGe.js";import{D as R}from"./PieChart.stories-Dod5iMiA.js";import{D as I}from"./RadarChart.stories-jOEIe0Zd.js";import{D as S}from"./RadialChart.stories-zHaHk841.js";import{D as T}from"./ScatterChart.stories-Dnth1tx4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Dif64wGJ.js";import"./sys-enter-2-CF1sb48s.js";import"./alert-DcNO-1uE.js";import"./index-DoD5C1cK.js";import"./index-CgwlM72N.js";import"./index-BUCXDqHN.js";import"./Link-B3HsQBkt.js";import"./index-_wPX9_fg.js";import"./index-CcP8H8eG.js";import"./index-DUtNsIlX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CN1rIyKa.js";import"./addCustomCSSWithScoping-Bri9Hmu_.js";import"./index-CNxSz0Hc.js";import"./Carousel-Cp1JTRD4.js";import"./ScrollEnablement-DmTjTt1h.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BVyU55ws.js";import"./slim-arrow-left-B8h2YTKy.js";import"./DemoProps-PsScBbZi.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-kp6zP1RX.js";import"./ChartContainer-BAeO45KX.js";import"./index-CBWozBn3.js";import"./useCancelAnimationFallback-DzOniKQP.js";import"./YAxisTicks-CvvY9nHc.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C8V8dbD0.js";import"./ChartDataLabel-B-4gxwdY.js";import"./useOnClickInternal-D7HnEkNT.js";import"./react-content-loader.es-n8SC2ukU.js";import"./useIsRTL-gvYB5pwp.js";import"./useLongestYAxisLabel-n0vx4p2B.js";import"./ComposedChart-DCCTnoXD.js";import"./Line-BlTY1d7t.js";import"./Scatter-DwgYOeZu.js";import"./index-Bw1P3_5I.js";import"./index-r6Q2idt-.js";import"./Placeholder-Ch95s31w.js";import"./index-BCD1bght.js";const $=`# @ui5/webcomponents-react-charts

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
