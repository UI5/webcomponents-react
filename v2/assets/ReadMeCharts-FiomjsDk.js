import{q as i,j as t,Q as l}from"./iframe-Ded5Mxh2.js";import{useMDXComponents as p}from"./index-CBfl9quq.js";import{M as u,a as h,n as f}from"./blocks-wt3pPbD-.js";import"./Tag-CDOQSrMR.js";import"./index-DFifKHPS.js";import"./CommandsAndQueries-Ddo3tZ3K.js";import"./copy-IKAWbId8.js";import{T as d}from"./TableOfContent-BE7CFaYX.js";import{F as b}from"./Footer-1OmcbI64.js";import"./PageNotFound-CXW0ieku.js";import{C}from"./index-L7C1AzaL.js";import{D}from"./BarChart.stories-DibHWkPF.js";import{D as y}from"./BulletChart.stories-BxsG94kl.js";import{D as g}from"./ColumnChart.stories-CQc5dHFk.js";import{D as v}from"./ColumnChartWithTrend.stories-C8R2ISuj.js";import{D as x}from"./ComposedChart.stories-CX3K5FZd.js";import{D as j}from"./DonutChart.stories-DBR3oyiq.js";import{D as w}from"./LineChart.stories-Cq3EECFV.js";import{D as R}from"./PieChart.stories-DfaxBsvo.js";import{D as I}from"./RadarChart.stories-Ds0xCA5D.js";import{D as S}from"./RadialChart.stories-DHzva3A5.js";import{D as $}from"./ScatterChart.stories-B3fgeqk0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-YHPlo4lO.js";import"./sys-enter-2-C0FqqFCv.js";import"./alert-K2R8mcWk.js";import"./Link-DSsFOfLn.js";import"./index-jHFtLiCf.js";import"./index-BmNOE6G0.js";import"./index-BfPsTBbY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DHMdvhLY.js";import"./addCustomCSSWithScoping-CBqV9zN1.js";import"./index-CU0yEW5I.js";import"./index-BiAFWhEK.js";import"./index-Cmea41Uz.js";import"./index-DNd61viN.js";import"./Illustrations-Btxulb8H.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-CtiVdqgc.js";import"./ScrollEnablement-DENm7iV6.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B31xnoNy.js";import"./slim-arrow-left-CUYvr6z6.js";import"./DemoProps-Kf_VKn2Y.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Q1NVFsVt.js";import"./ChartContainer-Dg0frXUK.js";import"./index-kph-pUw5.js";import"./useCancelAnimationFallback-CVyGr_b2.js";import"./YAxisTicks-BfVhZ61n.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Cjpy2eLn.js";import"./ChartDataLabel-DmRPJR3d.js";import"./useOnClickInternal-DBcdK4Tz.js";import"./react-content-loader.es-5lhdhZkO.js";import"./useIsRTL-UbDyFkqU.js";import"./useLongestYAxisLabel-DEsJeCzE.js";import"./ComposedChart-DCAGg9kK.js";import"./Line-BnphnL1o.js";import"./Scatter-whdV-8Lm.js";import"./index-CHbk0-gH.js";import"./index-BbO9aFcx.js";import"./Placeholder-B8ht7ABX.js";import"./index-Ci3rRtOu.js";const E=`# @ui5/webcomponents-react-charts

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
