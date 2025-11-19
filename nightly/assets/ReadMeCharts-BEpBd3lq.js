import{r as i,j as t,T as l}from"./iframe-5N9GXz7D.js";import{useMDXComponents as p}from"./index-DlTuiQlt.js";import{M as u,a as h,m as f}from"./blocks-CPyIL7dB.js";import"./Tag-B4RC7Xxt.js";import"./index-D8q95YVM.js";import{F as d}from"./CommandsAndQueries-CMJc_Han.js";import"./copy-BLtz8zcP.js";import{T as b}from"./TableOfContent-cYZQnLhR.js";import{C}from"./index-CxGAHGuR.js";import{D}from"./BarChart.stories-DzbisTx4.js";import{D as y}from"./BulletChart.stories-DT8Ids6o.js";import{D as g}from"./ColumnChart.stories-BUnhvYaw.js";import{D as v}from"./ColumnChartWithTrend.stories-CXr7Gmus.js";import{D as x}from"./ComposedChart.stories-CsrVaaBr.js";import{D as j}from"./DonutChart.stories-D8o9dW8x.js";import{D as w}from"./LineChart.stories-Cr4IPmJr.js";import{D as R}from"./PieChart.stories-nNOHGMiZ.js";import{D as I}from"./RadarChart.stories-BHw8E-1J.js";import{D as S}from"./RadialChart.stories-B8u-NjWf.js";import{D as T}from"./ScatterChart.stories-DYzaf6Mf.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B48tg30u.js";import"./sys-enter-2-CQaZAGEJ.js";import"./alert-Ct7A8pBg.js";import"./index-CJR2SGfI.js";import"./index-DDb99OCc.js";import"./index-DZUtpbBW.js";import"./Link-oEEjXqRZ.js";import"./index-D5QSQPRG.js";import"./index-l_lQT3oU.js";import"./index-DHTSiNH5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ieHBSwsk.js";import"./addCustomCSSWithScoping-B8HVYEKl.js";import"./index-FxCKqbN1.js";import"./Carousel-yM1-Hesq.js";import"./ScrollEnablement-DVuWUxs9.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BQr8aD0-.js";import"./slim-arrow-left-D_iOlWqL.js";import"./DemoProps-BzEHBkrW.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DZ1KFLmx.js";import"./ChartContainer-C2w-02dV.js";import"./index-CP2quE6c.js";import"./useCancelAnimationFallback-DhwLf0FH.js";import"./YAxisTicks-Dv6wEzqa.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-UBYaz_OE.js";import"./ChartDataLabel-BddvJJ_y.js";import"./useOnClickInternal-py5uO1K0.js";import"./react-content-loader.es-B_KkWJcK.js";import"./useIsRTL-v4UuOtzV.js";import"./useLongestYAxisLabel-DZZOs6c6.js";import"./ComposedChart-Cvi5uTWs.js";import"./Line-uFakX79A.js";import"./Scatter-C_h2W26h.js";import"./index-Ce0rEmQL.js";import"./index-Bo6YWRGJ.js";import"./Placeholder-CXsrR7M-.js";import"./index-r6-W2f3U.js";const $=`# @ui5/webcomponents-react-charts

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
`;function E(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:$.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(E,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:T}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Ft(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Ft as default};
