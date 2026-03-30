import{n as i,j as t,N as l}from"./iframe-DoasxszC.js";import{u as p,M as u,a as h,k as f}from"./blocks-DBX_G92C.js";import"./Tag-DCvAsOsB.js";import"./index-Bkq6_nAR.js";import"./CommandsAndQueries-Bg5oLjv_.js";import"./copy-Bp1X0rrX.js";import{T as d}from"./TableOfContent-BL-dDNDX.js";import{F as b}from"./Footer-BMRkHXkr.js";import"./PageNotFound-DlCPYtCu.js";import{C}from"./index-BZAhFs2G.js";import{D}from"./BarChart.stories-rIRx0ONW.js";import{D as y}from"./BulletChart.stories-D5XmRToJ.js";import{D as g}from"./ColumnChart.stories-DG49uyWk.js";import{D as v}from"./ColumnChartWithTrend.stories-Bo4K_PVa.js";import{D as x}from"./ComposedChart.stories-32lQXWD7.js";import{D as j}from"./DonutChart.stories-DiOeQaNB.js";import{D as w}from"./LineChart.stories-7zbCZ5NH.js";import{D as R}from"./PieChart.stories-DHKU0DHU.js";import{D as I}from"./RadarChart.stories-Dk4Fqv2O.js";import{D as S}from"./RadialChart.stories-Dym4ggg4.js";import{D as $}from"./ScatterChart.stories-BLE1xZNZ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C1mBwnJc.js";import"./sys-enter-2-D2TESZyh.js";import"./alert-CWEkUWZv.js";import"./Link-CvHgBQZc.js";import"./index-Dl7LQ4u1.js";import"./index-BxFkVED5.js";import"./index-UQi-W-Cc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwB0h3WK.js";import"./addCustomCSSWithScoping-D15HIh5y.js";import"./index-CY9OUOeY.js";import"./index-C3bV2_l1.js";import"./index-DUsiHM8W.js";import"./index-BuSM4uik.js";import"./Illustrations-B4E_SvFf.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-tvcU9KeG.js";import"./ScrollEnablement-Ct30bxH4.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DV6UQMQM.js";import"./slim-arrow-left-BIWg94tb.js";import"./DemoProps-BemLNKf6.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-2LgXHBui.js";import"./ChartContainer-D_LK2zcq.js";import"./index-DXinWdIe.js";import"./useCancelAnimationFallback-EJudqWrI.js";import"./YAxisTicks-R874hDDG.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dgc_aC5S.js";import"./ChartDataLabel-B0JHlQM3.js";import"./useOnClickInternal-C-IJUcCh.js";import"./react-content-loader.es-D2A94Anr.js";import"./useIsRTL-BFJsr9kq.js";import"./useLongestYAxisLabel-CXmkHld3.js";import"./ComposedChart-DTnpFAxc.js";import"./Line-D93jZ6dw.js";import"./Scatter-HwNWgIce.js";import"./index-BZ6ROI8P.js";import"./index-1SDtYG-o.js";import"./Placeholder-CwJpREzK.js";import"./index-B-qRaG9i.js";const E=`# @ui5/webcomponents-react-charts

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
