import{r as i,j as t,O as l}from"./iframe-BgKk_cUP.js";import{useMDXComponents as p}from"./index-DBhkOYZa.js";import{M as u,a as h,n as f}from"./blocks-Cov5-UrV.js";import"./Tag-14MrIsbi.js";import"./index-DoylA-Ui.js";import{F as d}from"./CommandsAndQueries-DJU-Boml.js";import"./copy-DsJBCyL-.js";import{T as b}from"./TableOfContent-D3wn4nZr.js";import{C}from"./index-FEmwiqed.js";import{D}from"./BarChart.stories-B9i7yqiM.js";import{D as y}from"./BulletChart.stories-12zG1br4.js";import{D as g}from"./ColumnChart.stories-CG5Qnj9U.js";import{D as v}from"./ColumnChartWithTrend.stories-Dn77f35r.js";import{D as x}from"./ComposedChart.stories-Ca516tM1.js";import{D as j}from"./DonutChart.stories-qglXAilC.js";import{D as w}from"./LineChart.stories-BWKHPncY.js";import{D as R}from"./PieChart.stories-_EMZRiom.js";import{D as I}from"./RadarChart.stories-BOFNQFZw.js";import{D as S}from"./RadialChart.stories-B_g9QQkf.js";import{D as $}from"./ScatterChart.stories-COl8tpSj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BIRyoqcd.js";import"./sys-enter-2--x49A3Er.js";import"./alert-ClVMPYjY.js";import"./index-CMckAL-E.js";import"./index-vrGX3w6P.js";import"./index-z-eYGt9k.js";import"./Link-CwQGN6kV.js";import"./index-DJcJ5x0R.js";import"./index-DtnoyOys.js";import"./index-DMwqR4Ak.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3WrIRKs.js";import"./addCustomCSSWithScoping-CEnWQwWy.js";import"./index-C-jp63Tn.js";import"./Carousel-CrX7ncO2.js";import"./ScrollEnablement-DdsHIuJL.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D-tbWKP8.js";import"./slim-arrow-left-BbJHj84H.js";import"./DemoProps-qfTJ2oJw.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-s30GIFJf.js";import"./ChartContainer-C7QLOWo_.js";import"./index-DMnT_E-9.js";import"./useCancelAnimationFallback-CK2shyG_.js";import"./YAxisTicks-CjpfVJrA.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-lrpXspOu.js";import"./ChartDataLabel-Cccnh82m.js";import"./useOnClickInternal-B0ux3yee.js";import"./react-content-loader.es-UdROi2se.js";import"./useIsRTL-Bcixplcr.js";import"./useLongestYAxisLabel-CJ52E_x4.js";import"./ComposedChart-D1XkRlC_.js";import"./Line-CbNzYwwm.js";import"./Scatter-BWSZVpzh.js";import"./index-BVL8CGi7.js";import"./index-C_jR0p30.js";import"./Placeholder-BPPRmnq7.js";import"./index-iSf-Yj0g.js";const E=`# @ui5/webcomponents-react-charts

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
