import{q as i,j as t,Q as l}from"./iframe-DJVbwX9i.js";import{useMDXComponents as p}from"./index-BFT6aOv2.js";import{M as u,a as h,n as f}from"./blocks-Cc72oRCz.js";import"./Tag-BNmglB2v.js";import"./index-hobvar2O.js";import"./CommandsAndQueries-B-krYIfz.js";import"./copy-CPWU3JMS.js";import{T as d}from"./TableOfContent-CCRGkolO.js";import{F as b}from"./Footer-DBSBdmEP.js";import"./PageNotFound-BtEXsBVj.js";import{C}from"./index-BLF0TDoL.js";import{D}from"./BarChart.stories-BebNE_Uz.js";import{D as y}from"./BulletChart.stories-aAyqUe4q.js";import{D as g}from"./ColumnChart.stories-CxEnviDM.js";import{D as v}from"./ColumnChartWithTrend.stories-B149JVBK.js";import{D as x}from"./ComposedChart.stories-CtwFokPd.js";import{D as j}from"./DonutChart.stories-CTOdY-LB.js";import{D as w}from"./LineChart.stories-CI6zc7vy.js";import{D as R}from"./PieChart.stories-CufY2xgc.js";import{D as I}from"./RadarChart.stories-z58owMCq.js";import{D as S}from"./RadialChart.stories-B2AnPNKD.js";import{D as $}from"./ScatterChart.stories-yAVZ9PTh.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DINAeq89.js";import"./sys-enter-2-CB2kIbje.js";import"./alert-CG9JhWyD.js";import"./Link-Dg00UQRP.js";import"./index-JKJcUc-Y.js";import"./index-BYdF4q6P.js";import"./index-D08ymWvo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeatdApf.js";import"./addCustomCSSWithScoping-UxNP_GOA.js";import"./index-BWAGkxsQ.js";import"./index-CZorzsLp.js";import"./index-B61X8BMU.js";import"./index-CRrLaMaU.js";import"./Illustrations-DPWSckqd.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-Df95Op04.js";import"./ScrollEnablement-CooUtaVi.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CxEx-sQG.js";import"./slim-arrow-left-BzpKHUxK.js";import"./DemoProps-7tyKnc73.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C6ps_dUI.js";import"./ChartContainer-CBovvtc6.js";import"./index-D9T3Iy8W.js";import"./useCancelAnimationFallback-BFBtSRHH.js";import"./YAxisTicks-sNi1ip4N.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CarCFDM1.js";import"./ChartDataLabel-Cn41csrY.js";import"./useOnClickInternal-hwKi64Gs.js";import"./react-content-loader.es-CGPyU9kn.js";import"./useIsRTL-CL2sk3kX.js";import"./useLongestYAxisLabel-9ucrk0zB.js";import"./ComposedChart-DMXBFnlP.js";import"./Line-BYvroXks.js";import"./Scatter-Dh_YRrrA.js";import"./index-fDXDBdJB.js";import"./index-BTenoaXk.js";import"./Placeholder-DShe_L2H.js";import"./index-B-2FTFQU.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),m=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const s=e.current;return s&&o.length&&(r.current=setInterval(()=>{a.current++,s.navigateTo(a.current%o.length)},5e3)),()=>{m()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{m()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function _t(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{_t as default};
