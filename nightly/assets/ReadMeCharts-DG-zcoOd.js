import{q as i,j as t,Q as l}from"./iframe-CEsx9pS5.js";import{useMDXComponents as p}from"./index-gmjnJOv_.js";import{M as u,a as h,n as f}from"./blocks-8Wtp1Sju.js";import"./Tag-HQWMt5YG.js";import"./index-CTv8OR9t.js";import"./CommandsAndQueries-KRiBOwvQ.js";import"./copy-BKv99Y3s.js";import{T as d}from"./TableOfContent-BT3myzbQ.js";import{F as b}from"./Footer-BzqBC082.js";import"./PageNotFound-Dm-lShwt.js";import{C}from"./index-CoaML05L.js";import{D}from"./BarChart.stories-lm4L5GMG.js";import{D as y}from"./BulletChart.stories-CJ3-uNnE.js";import{D as g}from"./ColumnChart.stories-ChYNmOZJ.js";import{D as v}from"./ColumnChartWithTrend.stories-C0qfpMZl.js";import{D as x}from"./ComposedChart.stories-CEcC3MVQ.js";import{D as j}from"./DonutChart.stories-CyZNT1Ye.js";import{D as w}from"./LineChart.stories-B3PglBpK.js";import{D as R}from"./PieChart.stories-2iay7qVJ.js";import{D as I}from"./RadarChart.stories-D9Bpxppi.js";import{D as S}from"./RadialChart.stories-DxuzaLBb.js";import{D as $}from"./ScatterChart.stories-mHCIFC0H.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BsgOGoHr.js";import"./sys-enter-2-QXPkX9VX.js";import"./alert-C6xGNNq6.js";import"./Link-Op-ol6Yv.js";import"./index-LEy71z39.js";import"./index-C0Wj8jmE.js";import"./index-CNLVL7wa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-dF5rg7Pk.js";import"./addCustomCSSWithScoping-C93rkw8E.js";import"./index-C3LB4ZIk.js";import"./index-BUd2Yp1O.js";import"./index-CYl2KpDn.js";import"./index-D0QmD1oJ.js";import"./Illustrations-B8Nne3o3.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-nNLkj_L3.js";import"./ScrollEnablement-BgQUKBhv.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BvP0AMXx.js";import"./slim-arrow-left-B-25LsPh.js";import"./DemoProps-B_VjXe_X.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-DQYVQNoE.js";import"./ChartContainer-HTPweDrH.js";import"./index-BWmFDyId.js";import"./useCancelAnimationFallback-CSv5UwtC.js";import"./YAxisTicks-LwAW3DLM.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CWxJ7fov.js";import"./ChartDataLabel-DqWawTLg.js";import"./useOnClickInternal-xV8ihtDr.js";import"./react-content-loader.es-w2JISh-i.js";import"./useIsRTL-Dq-8_1ru.js";import"./useLongestYAxisLabel-CKBAqY7a.js";import"./ComposedChart-DF_Fcmbe.js";import"./Line-B00lDa_G.js";import"./Scatter-Aj93IlRs.js";import"./index-Dt6l6D_m.js";import"./index-DaLy9DoZ.js";import"./Placeholder-D4C61Dof.js";import"./index-AKq2DohW.js";const E=`# @ui5/webcomponents-react-charts

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
