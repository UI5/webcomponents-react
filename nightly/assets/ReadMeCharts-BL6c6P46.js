import{r as i,j as t,T as l}from"./iframe-_UyBg_Hl.js";import{useMDXComponents as p}from"./index-DEEVvvo3.js";import{M as u,a as h,k as f}from"./blocks-CYzyNaRH.js";import"./Tag-CQlNZs2z.js";import"./index-5woB_pVn.js";import{F as d}from"./CommandsAndQueries-0B2XTB0a.js";import"./copy-BX3zmcvZ.js";import{T as b}from"./TableOfContent-Dd45oQBu.js";import{C}from"./index-DumkaKyA.js";import{D}from"./BarChart.stories-CUeU_xn_.js";import{D as y}from"./BulletChart.stories-BDRqX-ET.js";import{D as g}from"./ColumnChart.stories-DlOv6DNQ.js";import{D as v}from"./ColumnChartWithTrend.stories-DUPUDYfO.js";import{D as x}from"./ComposedChart.stories-TzAckY3y.js";import{D as j}from"./DonutChart.stories-Cwd7ixC0.js";import{D as w}from"./LineChart.stories-BMkWkyhu.js";import{D as R}from"./PieChart.stories-BGV_KQ8C.js";import{D as S}from"./RadarChart.stories-B1IAvsL0.js";import{D as I}from"./RadialChart.stories-CW8JFsR2.js";import{D as T}from"./ScatterChart.stories-DUev6Ov0.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DYJp_bgk.js";import"./sys-enter-2-Bc61YsW4.js";import"./alert-Vjb3s5VB.js";import"./index-DpskCw-c.js";import"./index-e_5k1_Nn.js";import"./index-DXgH8OvD.js";import"./Link-5ArX67S2.js";import"./addCustomCSSWithScoping-BV_2mez6.js";import"./index-LcJnWxTb.js";import"./index-x1moOr2G.js";import"./index-CbWaderx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-SEMy8FFe.js";import"./index-CCQAf2jY.js";import"./Carousel-CBEdr8F1.js";import"./ScrollEnablement-BddgiWpw.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Deb6QiBc.js";import"./slim-arrow-left-CPuuMSv-.js";import"./DemoProps-CkzFaB9b.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CyrJS21-.js";import"./ChartContainer-DubY5Tot.js";import"./index-Q841TG4t.js";import"./useCancelAnimationFallback--L22GHI7.js";import"./YAxisTicks-Bfv8ilNb.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BuCNc8Uv.js";import"./ChartDataLabel-zq7U0Zrr.js";import"./useOnClickInternal-Bw1AXlab.js";import"./react-content-loader.es-DiOEJoME.js";import"./useIsRTL-BKJsyXLQ.js";import"./useLongestYAxisLabel-1gwEFFcr.js";import"./ComposedChart-bSW4RuVX.js";import"./Line-DMfFG7vn.js";import"./Scatter-F8qbqHv3.js";import"./index-SNesiWUW.js";import"./index-BKkTt6MU.js";import"./Placeholder-CuO6Fkh3.js";import"./index-CKjiMmza.js";const $=`# @ui5/webcomponents-react-charts

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

If you’ve enabled \`staticCSSInjected\` on the \`ThemeProvider\` component ([learn more here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-server-side-rendering--docs#add-to-existing-project)), make sure to also import the \`charts\` stylesheet. Otherwise, charts won’t be rendered correctly.

\`\`\`ts
import '@ui5/webcomponents-react-charts/styles.css';
\`\`\`

## Documentation

You can find an interactive documentation in our [Storybook](https://sap.github.io/ui5-webcomponents-react/).

## Contribute

Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/SAP/ui5-webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/UI5/webcomponents-react).

<!-- Use the force -->
`;function E(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:$.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(E,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:S},{name:"RadialChart",component:I},{name:"ScatterChart",component:T}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
