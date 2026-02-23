import{r as i,j as t,O as l}from"./iframe-COnm-5Wq.js";import{useMDXComponents as p}from"./index-BScb0EKa.js";import{M as u,a as h,n as f}from"./blocks-DdnCkDeP.js";import"./Tag-B6PukD9x.js";import"./index-DuYLDSkg.js";import{F as d}from"./CommandsAndQueries-fIm6tI_s.js";import"./copy-qxwrkOPO.js";import{T as b}from"./TableOfContent-CgktCJnI.js";import{C}from"./index-C-A1ewLx.js";import{D}from"./BarChart.stories-Bxf0ySab.js";import{D as y}from"./BulletChart.stories-CQo2DfUn.js";import{D as g}from"./ColumnChart.stories-CzDuRzXl.js";import{D as v}from"./ColumnChartWithTrend.stories-0AqwjSIi.js";import{D as x}from"./ComposedChart.stories-g9uUO3gw.js";import{D as j}from"./DonutChart.stories-Dv4dCPHj.js";import{D as w}from"./LineChart.stories-Bo4IR83e.js";import{D as R}from"./PieChart.stories-DQeyRcoe.js";import{D as I}from"./RadarChart.stories-BWuSH0Oc.js";import{D as S}from"./RadialChart.stories-DKYzk3UE.js";import{D as $}from"./ScatterChart.stories-BNOgV39F.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B-WRmTFj.js";import"./sys-enter-2-CoP1Serd.js";import"./alert-CyV5UnQC.js";import"./index-Be7TM_X2.js";import"./index-P97YIdW0.js";import"./index-nBIeIwBJ.js";import"./Link-HYZaoUUQ.js";import"./index-B7Tpi00A.js";import"./index-AzkmjRNO.js";import"./index-D0jCTq5s.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BgIs3PmD.js";import"./addCustomCSSWithScoping-6qkiGAQG.js";import"./index-CEwTdt5x.js";import"./Carousel-CAaAcpge.js";import"./ScrollEnablement-DxmmW8DX.js";import"./animate-JylhYHXj.js";import"./AnimationMode-msNSlslB.js";import"./slim-arrow-left-CY8P-Gx3.js";import"./DemoProps-9RgS4hfs.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dz8qfkcH.js";import"./ChartContainer-D6TD2exH.js";import"./index-DZ_u1ZQX.js";import"./useCancelAnimationFallback-CR6Gs9Qj.js";import"./YAxisTicks-dPcQRCm_.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ChZjuc_7.js";import"./ChartDataLabel-D0MW6GCG.js";import"./useOnClickInternal-DTPL2Ygg.js";import"./react-content-loader.es-CzVXh3M-.js";import"./useIsRTL-CKV0TO4b.js";import"./useLongestYAxisLabel-VWW15DRA.js";import"./ComposedChart-CPNlmRYu.js";import"./Line-BN5xshvc.js";import"./Scatter-B4_TcwZy.js";import"./index-Bjd5Vi7o.js";import"./index-DJDzc6SN.js";import"./Placeholder-BikCdOfH.js";import"./index-XVcED60U.js";const E=`# @ui5/webcomponents-react-charts

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
