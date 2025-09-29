import{r as i,j as t,T as l}from"./iframe-CfR5iN1B.js";import{useMDXComponents as p}from"./index-WDvIe_cH.js";import{M as u,a as h,k as f}from"./blocks-CfXjvcLO.js";import"./Tag-BTK-zFQw.js";import"./index-DekWkQZr.js";import{F as d}from"./CommandsAndQueries-Cn01gt7T.js";import"./copy-CaX7ddbO.js";import{T as b}from"./TableOfContent-WJhDVAFL.js";import{C}from"./index-pZylwqXG.js";import{D}from"./BarChart.stories-DFEV0rVQ.js";import{D as y}from"./BulletChart.stories-Bl0yVkvg.js";import{D as g}from"./ColumnChart.stories-CqxN6LTI.js";import{D as v}from"./ColumnChartWithTrend.stories-B5PlOzMu.js";import{D as x}from"./ComposedChart.stories-DzH1rcFY.js";import{D as j}from"./DonutChart.stories-uswz2ePf.js";import{D as w}from"./LineChart.stories-vdlgwTN9.js";import{D as R}from"./PieChart.stories-DxrLGvB6.js";import{D as I}from"./RadarChart.stories-ByDdHDvJ.js";import{D as S}from"./RadialChart.stories-CoRJeIa6.js";import{D as T}from"./ScatterChart.stories-CPNWypoL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DTEN63Fk.js";import"./sys-enter-2-DpY8LIaY.js";import"./alert-C8yZ5BF8.js";import"./index-DqPScGjh.js";import"./index-s45nBPnw.js";import"./index-Dow-CDJC.js";import"./Link-DJBSV0Mu.js";import"./index-3b3tgeGr.js";import"./index-BlanoaUa.js";import"./index-B5r1lcgY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSc69HNM.js";import"./addCustomCSSWithScoping-Bvh6JLqq.js";import"./index-DImzYd9b.js";import"./Carousel-BKi-uXc0.js";import"./ScrollEnablement-BjfNoSEh.js";import"./animate-JylhYHXj.js";import"./AnimationMode-a6hLNNmg.js";import"./slim-arrow-left-FXp1mFSs.js";import"./DemoProps-BMlH0QAB.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CY-Fbfu4.js";import"./ChartContainer-CNZG5jZz.js";import"./index-D1nK-6X7.js";import"./useCancelAnimationFallback-CgC4GCVS.js";import"./YAxisTicks-NS4X96yQ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D_Tuexut.js";import"./ChartDataLabel-BWpRHlri.js";import"./useOnClickInternal-DSimHGe_.js";import"./react-content-loader.es-BQmHIcYe.js";import"./useIsRTL-Dlms__fq.js";import"./useLongestYAxisLabel-BTD6yoaR.js";import"./ComposedChart-CRsNa08O.js";import"./Line-BxXjTlpP.js";import"./Scatter-D7IWMUgJ.js";import"./index-nQ1q-10s.js";import"./index-BL2fbv4o.js";import"./Placeholder-OJmrb_ib.js";import"./index-CFV5DOCg.js";const $=`# @ui5/webcomponents-react-charts

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
