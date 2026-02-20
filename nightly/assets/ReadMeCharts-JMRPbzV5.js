import{r as i,j as t,O as l}from"./iframe-BxNMYsVp.js";import{useMDXComponents as p}from"./index-CEL_Mrqn.js";import{M as u,a as h,n as f}from"./blocks-CLtQlidJ.js";import"./Tag-CYWTluzA.js";import"./index-22bYdtLv.js";import{F as d}from"./CommandsAndQueries-CKT9ys9T.js";import"./copy-DFdPinc0.js";import{T as b}from"./TableOfContent-BSn9g2hl.js";import{C}from"./index-BrUm_ElN.js";import{D}from"./BarChart.stories-Dn9wuM5r.js";import{D as y}from"./BulletChart.stories-BB4Cf0CB.js";import{D as g}from"./ColumnChart.stories-CPx05H__.js";import{D as v}from"./ColumnChartWithTrend.stories-CATn3BLg.js";import{D as x}from"./ComposedChart.stories-BDZGDDfm.js";import{D as j}from"./DonutChart.stories-sSxSxPb1.js";import{D as w}from"./LineChart.stories-Cz8jcOps.js";import{D as R}from"./PieChart.stories-Dknk7Zam.js";import{D as I}from"./RadarChart.stories-BZ2XFfMh.js";import{D as S}from"./RadialChart.stories-Dthqk9d7.js";import{D as $}from"./ScatterChart.stories-qAmgMJfv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BR3I6cVC.js";import"./sys-enter-2-CKo5vDlS.js";import"./alert-BEt7QhXe.js";import"./index-lYnXb9lV.js";import"./index-jhZZ-U6H.js";import"./index-DKLNqf9R.js";import"./Link-DZt8_sp9.js";import"./index-CKGFui_U.js";import"./index-BQbr2ZNY.js";import"./index-7hnHpQRn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CG_dGq_W.js";import"./addCustomCSSWithScoping-CJX4iiEH.js";import"./index-CVOVci2N.js";import"./Carousel-BuXpEYs2.js";import"./ScrollEnablement-B37cnfhn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-HeN3jxrk.js";import"./slim-arrow-left-QmXsuOG2.js";import"./DemoProps-D9PiW05e.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-2mQSO2PE.js";import"./ChartContainer-z-l57iVm.js";import"./index-BjHRCZNh.js";import"./useCancelAnimationFallback-w_78Plfd.js";import"./YAxisTicks-BZSE4cGL.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DsVKMmtn.js";import"./ChartDataLabel-C6XKOHz3.js";import"./useOnClickInternal-CrHu6oZ3.js";import"./react-content-loader.es-DydIdTpI.js";import"./useIsRTL-BDi3O9wb.js";import"./useLongestYAxisLabel-Cg_mG6Rc.js";import"./ComposedChart-CbNzhgDU.js";import"./Line-D4kELGPf.js";import"./Scatter-CtVZd6xQ.js";import"./index-DwlyT9DS.js";import"./index-DQb6HUC0.js";import"./Placeholder-C_C6E3Yf.js";import"./index-D80EOMcq.js";const E=`# @ui5/webcomponents-react-charts

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
