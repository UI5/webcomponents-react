import{r as i,j as t,T as l}from"./iframe-DcVE_SyB.js";import{useMDXComponents as p}from"./index-ABq4qJq0.js";import{M as u,a as h,m as f}from"./blocks-dRinqquH.js";import"./Tag-n6X7AHU2.js";import"./index-DZbYLiGZ.js";import{F as d}from"./CommandsAndQueries-DAZF1NdY.js";import"./copy-qTVa6Rxc.js";import{T as b}from"./TableOfContent-BSsBxi4p.js";import{C}from"./index-CsP6J60z.js";import{D}from"./BarChart.stories-DpBjuj7o.js";import{D as y}from"./BulletChart.stories-B47qMkhP.js";import{D as g}from"./ColumnChart.stories-DRR-o3k0.js";import{D as v}from"./ColumnChartWithTrend.stories-CNIMN8vm.js";import{D as x}from"./ComposedChart.stories-DpvZpmIK.js";import{D as j}from"./DonutChart.stories-85b9zMwu.js";import{D as w}from"./LineChart.stories-rp44QDM8.js";import{D as R}from"./PieChart.stories-pJJDom-N.js";import{D as I}from"./RadarChart.stories-DZJ10Sdf.js";import{D as S}from"./RadialChart.stories-D0guuNPH.js";import{D as T}from"./ScatterChart.stories-B4f5xCeQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cg8MaXEH.js";import"./sys-enter-2-d1HQr0rP.js";import"./alert-CDirY_rF.js";import"./index-C8wszqvC.js";import"./index-C2IoMvXB.js";import"./index-DAALXQvw.js";import"./Link-LjC7fwET.js";import"./index-DF4i9ljf.js";import"./index-DOSi9OrP.js";import"./index-_uRePxm1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWDpOxWr.js";import"./addCustomCSSWithScoping-CuYK4DUc.js";import"./index-DbL7CbMN.js";import"./Carousel-YnwBnyDR.js";import"./ScrollEnablement-CIsN21aQ.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DPQz8VTw.js";import"./slim-arrow-left-CQMshFMS.js";import"./DemoProps-jdW-8b15.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Be5XRSOc.js";import"./ChartContainer-DHJKSZ3y.js";import"./index-EYM3a7UD.js";import"./useCancelAnimationFallback-DpCeWNpR.js";import"./YAxisTicks-ysc0yeKx.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BYSZqgAZ.js";import"./ChartDataLabel-f5JNgpWJ.js";import"./useOnClickInternal-D151ykRh.js";import"./react-content-loader.es-DG77WTCz.js";import"./useIsRTL-BX1EXUwa.js";import"./useLongestYAxisLabel-DRQlfIqU.js";import"./ComposedChart-bNKX9M6T.js";import"./Line-f5dZgzY9.js";import"./Scatter-DNihkqvh.js";import"./index-BUzbrBCx.js";import"./index-V1w6-pdy.js";import"./Placeholder-CVDhZ2hq.js";import"./index-CCp3X5jq.js";const $=`# @ui5/webcomponents-react-charts

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
