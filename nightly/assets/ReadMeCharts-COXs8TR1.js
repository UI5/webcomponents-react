import{q as i,j as t,Q as l}from"./iframe-CZUFstmy.js";import{useMDXComponents as p}from"./index-CNbwg358.js";import{M as u,a as h,n as f}from"./blocks-DX4VSw2u.js";import"./Tag-CX2RPQC9.js";import"./index-Dh_fZ_AU.js";import"./CommandsAndQueries-BhlCA6ZS.js";import"./copy-DtLjTz9V.js";import{T as d}from"./TableOfContent-BsH3eRwE.js";import{F as b}from"./Footer-DYeNln-j.js";import"./PageNotFound-BJZaFG9t.js";import{C}from"./index-CTkGv6mJ.js";import{D}from"./BarChart.stories-Cie14aaJ.js";import{D as y}from"./BulletChart.stories-D3PCf8nZ.js";import{D as g}from"./ColumnChart.stories-_nALk7L-.js";import{D as v}from"./ColumnChartWithTrend.stories-moAro50C.js";import{D as x}from"./ComposedChart.stories-BmarHbpB.js";import{D as j}from"./DonutChart.stories-DorQdq55.js";import{D as w}from"./LineChart.stories-5ehDvzcp.js";import{D as R}from"./PieChart.stories-Bs1_fsiq.js";import{D as I}from"./RadarChart.stories-XGbzFiRK.js";import{D as S}from"./RadialChart.stories-NrRNt66-.js";import{D as $}from"./ScatterChart.stories-Cnigez4C.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D6yKBjSF.js";import"./sys-enter-2-BfHAZzl4.js";import"./alert-CE2QesT5.js";import"./Link-htzAGpr-.js";import"./index-BTnDvpxF.js";import"./index-BpjPalsU.js";import"./index-DrW2JSp2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2TR7fwJ.js";import"./addCustomCSSWithScoping-CYgyEKVM.js";import"./index-Q62qsF52.js";import"./index-gKv9WyUX.js";import"./index-6TF1-Ysc.js";import"./index-DQ321HEy.js";import"./Illustrations-BPYsG6-r.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-Cjg3Z3rj.js";import"./ScrollEnablement-Ba7PMo3V.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BuDlX5Sh.js";import"./slim-arrow-left-DzS-jevK.js";import"./DemoProps-BzJUk7jA.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Drwm7hZJ.js";import"./ChartContainer-DfBCdkoC.js";import"./index-DR9jmOc9.js";import"./useCancelAnimationFallback-BJA5LQiI.js";import"./YAxisTicks-DbXL3hpd.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-MXNGGV9K.js";import"./ChartDataLabel-C9j0Hw7m.js";import"./useOnClickInternal-ouadyCjj.js";import"./react-content-loader.es-Cy90KlB5.js";import"./useIsRTL-B6mPm6BW.js";import"./useLongestYAxisLabel-Cw1ekpky.js";import"./ComposedChart-BkU_IGKf.js";import"./Line-CDch2TcI.js";import"./Scatter-l2cnHiI_.js";import"./index-vOm4KDL7.js";import"./index-Brxa09ZF.js";import"./Placeholder-BouMW8xJ.js";import"./index-D1zJVbqe.js";const E=`# @ui5/webcomponents-react-charts

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
