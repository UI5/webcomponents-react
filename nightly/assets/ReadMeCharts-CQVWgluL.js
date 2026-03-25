import{n as i,j as t,N as l}from"./iframe-iYU5spAk.js";import{useMDXComponents as p}from"./index-BzD2IrSQ.js";import{M as u,a as h,n as f}from"./blocks-BI7QxqeB.js";import"./Tag-BusGuvh6.js";import"./index-Cq3_Xc9J.js";import"./CommandsAndQueries-BRXiW4dn.js";import"./copy-DCVJQWNc.js";import{T as d}from"./TableOfContent-ZERqextU.js";import{F as b}from"./Footer-BTHx_eA0.js";import"./PageNotFound-C8n2TUKE.js";import{C}from"./index-BeEh2xqJ.js";import{D}from"./BarChart.stories-Bt0GSbgq.js";import{D as y}from"./BulletChart.stories-BOIler8l.js";import{D as g}from"./ColumnChart.stories-CnFlbMcW.js";import{D as v}from"./ColumnChartWithTrend.stories-BurUg8-F.js";import{D as x}from"./ComposedChart.stories-Bsb-9YRI.js";import{D as j}from"./DonutChart.stories-CbrpFSuO.js";import{D as w}from"./LineChart.stories-0WoMP2y6.js";import{D as R}from"./PieChart.stories-DFRo4RLG.js";import{D as I}from"./RadarChart.stories-CyFxTF9h.js";import{D as S}from"./RadialChart.stories-BCtc-l1U.js";import{D as $}from"./ScatterChart.stories-B899mBtF.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0J7LS4n.js";import"./sys-enter-2-De6BCoo5.js";import"./alert-Dh59S2xt.js";import"./Link-DNrZNopF.js";import"./index-D_eTNKvK.js";import"./index-9CESre8T.js";import"./index-B5WhhwGp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-LCeBFvC9.js";import"./addCustomCSSWithScoping-Pos0RdE7.js";import"./index-DqeVDsPv.js";import"./index-BWMAVmh3.js";import"./index-DUNXsDMC.js";import"./index-B2lbw_UO.js";import"./Illustrations-B_rOPeGm.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BEWj3spD.js";import"./ScrollEnablement-BzR7P6Ev.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CbzK4aM-.js";import"./slim-arrow-left-D1xNjrHC.js";import"./DemoProps-ozuBAPnI.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-ffi4H4MD.js";import"./ChartContainer-CuXYJ1A_.js";import"./index-BO0iryfq.js";import"./useCancelAnimationFallback-DfTFHX4d.js";import"./YAxisTicks-DarjMfAq.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-COkuIN-A.js";import"./ChartDataLabel-_nEAp9O3.js";import"./useOnClickInternal-gDWcWDEE.js";import"./react-content-loader.es-D-dC2FN7.js";import"./useIsRTL-CmURE4St.js";import"./useLongestYAxisLabel-BZFmKj_P.js";import"./ComposedChart-VaSTRkMz.js";import"./Line-DHrrgfPd.js";import"./Scatter-_Aj7ymMe.js";import"./index-CmElWHPQ.js";import"./index-bEuf-bXy.js";import"./Placeholder-Bg_yfOQc.js";import"./index-DdI3ITlJ.js";const E=`# @ui5/webcomponents-react-charts

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
