import{n as i,j as t,N as l}from"./iframe-Dr24b1_2.js";import{u as p,M as u,a as h,k as f}from"./blocks-DOkdIKLK.js";import"./Tag-BIxdINB7.js";import"./index-CL-oiXYR.js";import"./CommandsAndQueries-D2RSxAeU.js";import"./copy-D1SgAW06.js";import{T as d}from"./TableOfContent-CTShD90n.js";import{F as b}from"./Footer-B2LKGocf.js";import"./PageNotFound-t4KH-Yk6.js";import{C}from"./index-DgfupuAb.js";import{D}from"./BarChart.stories-DL1OailW.js";import{D as y}from"./BulletChart.stories-DDM00Ewx.js";import{D as g}from"./ColumnChart.stories-DgKfB18u.js";import{D as v}from"./ColumnChartWithTrend.stories-C8KhoZlR.js";import{D as x}from"./ComposedChart.stories-BZQ4-mQ7.js";import{D as j}from"./DonutChart.stories-CTh4oSu7.js";import{D as w}from"./LineChart.stories-DlPwtJhu.js";import{D as R}from"./PieChart.stories-BkIN-WUT.js";import{D as I}from"./RadarChart.stories-Da5BlYVd.js";import{D as S}from"./RadialChart.stories-BlFd7JNV.js";import{D as $}from"./ScatterChart.stories-vmqzvixo.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C20uFQS0.js";import"./sys-enter-2-CQd_0MF7.js";import"./alert-B9PmGrag.js";import"./Link-CG4ImuUx.js";import"./index-_maGeclj.js";import"./index-aTzn3I1m.js";import"./index-B_PGO6aF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dh4aGlp7.js";import"./addCustomCSSWithScoping-BCzlWLsZ.js";import"./index-VF4msgJe.js";import"./index-CjU6u75C.js";import"./index-DrqpZzSV.js";import"./index-DcUuq1aq.js";import"./Illustrations-Dt9P8lxH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-CXVuOtMM.js";import"./ScrollEnablement-B1S99Wzm.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CdSuOSSG.js";import"./slim-arrow-left-D7QJRdkl.js";import"./DemoProps-BHJ6AWTi.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-l9IXS5uI.js";import"./ChartContainer-C-1o_phy.js";import"./index-CJOj_130.js";import"./useCancelAnimationFallback-BHweDi9j.js";import"./YAxisTicks-BYVCXC1t.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D8TxQYcM.js";import"./ChartDataLabel-DaRX_8SC.js";import"./useOnClickInternal-xdY8cJ0S.js";import"./react-content-loader.es-B7RQtwj4.js";import"./useIsRTL-BcSpX-QV.js";import"./useLongestYAxisLabel-CKr_oxOA.js";import"./ComposedChart-CAUbWwze.js";import"./Line-mc0M3XmI.js";import"./Scatter-BDIIUo6S.js";import"./index-ujnp3wxu.js";import"./index-DXnvE25t.js";import"./Placeholder-BXQ-fOJn.js";import"./index-qdfYSK8X.js";const E=`# @ui5/webcomponents-react-charts

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
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function Gt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Gt as default};
