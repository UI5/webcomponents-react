import{r as i,j as t,T as l}from"./iframe-l0Gg6LLs.js";import{useMDXComponents as p}from"./index-Cae9Voso.js";import{M as u,a as h,n as f}from"./blocks-C2P3yVo4.js";import"./Tag-CjLUfCmJ.js";import"./index-DCqXNXQw.js";import{F as d}from"./CommandsAndQueries-Clw2dQJN.js";import"./copy-B13EJS-v.js";import{T as b}from"./TableOfContent-BdkB29Mz.js";import{C}from"./index-DSJqxfrS.js";import{D}from"./BarChart.stories-BvSRFfjg.js";import{D as y}from"./BulletChart.stories-BpMpJbuI.js";import{D as g}from"./ColumnChart.stories-Dqrr32Wv.js";import{D as v}from"./ColumnChartWithTrend.stories-C7oVGZj1.js";import{D as x}from"./ComposedChart.stories-BI1sPiOk.js";import{D as j}from"./DonutChart.stories-BZHc2Ooq.js";import{D as w}from"./LineChart.stories-XvomB0zm.js";import{D as R}from"./PieChart.stories-B2NuXGWe.js";import{D as I}from"./RadarChart.stories-anaIo24L.js";import{D as S}from"./RadialChart.stories-Cy12iPDS.js";import{D as T}from"./ScatterChart.stories-DXN0KXQT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BcS3rXju.js";import"./sys-enter-2-BSmamrdx.js";import"./alert-B368tBUy.js";import"./index-FAekmb_7.js";import"./index-I7Wz355y.js";import"./index-C2QpZOLo.js";import"./Link-BXQMs19K.js";import"./index-CihYjerb.js";import"./index-lxp-HdMJ.js";import"./index-hvU57qSB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DhC4Vn3X.js";import"./addCustomCSSWithScoping-DDpmsdIj.js";import"./index-Bwbvp4Wo.js";import"./Carousel-CdTN_QLw.js";import"./ScrollEnablement-CuGe7Q3J.js";import"./animate-JylhYHXj.js";import"./AnimationMode-srbS7PW1.js";import"./slim-arrow-left-Bu4aEQJY.js";import"./DemoProps-BsVuWou-.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BtsS8m3u.js";import"./ChartContainer-BAodkLFD.js";import"./index-Cad5KvVd.js";import"./useCancelAnimationFallback-DlzpyKkY.js";import"./YAxisTicks-BcDbu-fc.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CPYJe5j3.js";import"./ChartDataLabel-DM08-Y9j.js";import"./useOnClickInternal-BJUFUpv1.js";import"./react-content-loader.es-GsOBqLWk.js";import"./useIsRTL-CdRMpk74.js";import"./useLongestYAxisLabel-bk9H19Ee.js";import"./ComposedChart-ZiodQXGG.js";import"./Line-C2D2gxd9.js";import"./Scatter-B6IYAt2B.js";import"./index-Brl7IsRT.js";import"./index-BCrJbhtg.js";import"./Placeholder-D3y9uuhj.js";import"./index-CG6ceDKm.js";const $=`# @ui5/webcomponents-react-charts

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
