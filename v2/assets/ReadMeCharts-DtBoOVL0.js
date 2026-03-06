import{q as i,j as t,Q as l}from"./iframe-BoiPRijN.js";import{useMDXComponents as p}from"./index-BRummw3t.js";import{M as u,a as h,n as f}from"./blocks-CPrA8iQB.js";import"./Tag-B1iwkrJ0.js";import"./index-BTDY8alR.js";import"./CommandsAndQueries-BnJUOm3t.js";import"./copy-Dvt_rD-U.js";import{T as d}from"./TableOfContent-B1AorxcV.js";import{F as b}from"./Footer-iiNA2dGD.js";import"./PageNotFound-MgXkehwz.js";import{C}from"./index-C4OOfnd1.js";import{D}from"./BarChart.stories-CvcWYTMS.js";import{D as y}from"./BulletChart.stories-BaD0db8C.js";import{D as g}from"./ColumnChart.stories-BEPKC7vJ.js";import{D as v}from"./ColumnChartWithTrend.stories-D_kijHBR.js";import{D as x}from"./ComposedChart.stories--7DoC5sR.js";import{D as j}from"./DonutChart.stories-CIsX6XmT.js";import{D as w}from"./LineChart.stories-DGfMEW5r.js";import{D as R}from"./PieChart.stories-DlFZJkXj.js";import{D as I}from"./RadarChart.stories-Lkjqfd-N.js";import{D as S}from"./RadialChart.stories-BRmLEF6H.js";import{D as $}from"./ScatterChart.stories-CDCnHNpH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BC9xfD2K.js";import"./sys-enter-2-CswPN__J.js";import"./alert-BvdiGKEq.js";import"./Link-CFo8_Djp.js";import"./index-BQY5khtD.js";import"./index-Jd5qJzJh.js";import"./index-DlyFbgdQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpV6XLVk.js";import"./addCustomCSSWithScoping-DTHpZRZB.js";import"./index-C15uyf0A.js";import"./index-BP_Slc-J.js";import"./index-dkrwuiwP.js";import"./index-XewTnCmy.js";import"./Illustrations-CKlojL9Q.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BL2EtJU0.js";import"./ScrollEnablement-DLJduNw8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CqFvkYd_.js";import"./slim-arrow-left-CPTOMFFz.js";import"./DemoProps-BcZoRpgA.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-mGIxNTX6.js";import"./ChartContainer-BNON7G1k.js";import"./index-CGSreYF0.js";import"./useCancelAnimationFallback-BroxMa65.js";import"./YAxisTicks-BixRUZU7.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BdoAcABW.js";import"./ChartDataLabel-BICjfcdT.js";import"./useOnClickInternal-C2cB7lso.js";import"./react-content-loader.es-B3lPldqH.js";import"./useIsRTL-DETi-hVj.js";import"./useLongestYAxisLabel-BTigIO41.js";import"./ComposedChart-C4yf9a0o.js";import"./Line-Bbq5yBoy.js";import"./Scatter-BCGC7IuN.js";import"./index-BWbDMfwK.js";import"./index-Dtr19_QX.js";import"./Placeholder-CV_GgdAm.js";import"./index-_GtOJDkU.js";const E=`# @ui5/webcomponents-react-charts

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
