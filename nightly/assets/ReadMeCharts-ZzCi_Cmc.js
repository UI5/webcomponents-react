import{r as i,j as t,T as l}from"./iframe-RbfDHgLf.js";import{useMDXComponents as p}from"./index-DqV7dpjg.js";import{M as u,a as h,k as f}from"./blocks-B3C8l8xN.js";import"./Tag-HesnxFVA.js";import"./index-COZ8g4Eg.js";import{F as d}from"./CommandsAndQueries-zsQY2vaX.js";import"./copy-DMiueq1X.js";import{T as b}from"./TableOfContent-CFiX9KPt.js";import{C}from"./index-goTNe-vg.js";import{D}from"./BarChart.stories-DNycQzeB.js";import{D as y}from"./BulletChart.stories-ChotqOvz.js";import{D as g}from"./ColumnChart.stories-DY3ZoemJ.js";import{D as v}from"./ColumnChartWithTrend.stories-fE7cCwXr.js";import{D as x}from"./ComposedChart.stories-lRwr6GpY.js";import{D as j}from"./DonutChart.stories-eeNrmJXB.js";import{D as w}from"./LineChart.stories-Zbk4O6FZ.js";import{D as R}from"./PieChart.stories-mWrCCcEE.js";import{D as I}from"./RadarChart.stories-DjYiCarn.js";import{D as S}from"./RadialChart.stories-CUTufO97.js";import{D as T}from"./ScatterChart.stories-CkueeHts.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DD6Au7ei.js";import"./sys-enter-2-CTkUcSDp.js";import"./alert-CtWiOE8L.js";import"./index-CHnVbXcX.js";import"./index-BJgLq48U.js";import"./index-CDE_0yIR.js";import"./Link-CqIOijGY.js";import"./index-T-3zE_IB.js";import"./index-CfYa6cQq.js";import"./index-CCjAf9sJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGqdfIsV.js";import"./addCustomCSSWithScoping-BLrotaH2.js";import"./index-Krk892ln.js";import"./Carousel-Dbp0Tk8S.js";import"./ScrollEnablement-BhIRzZQ-.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BBqY9SlW.js";import"./slim-arrow-left-CWgGS_ke.js";import"./DemoProps-_jYAFJi7.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Djjervi5.js";import"./ChartContainer-zb_ejWWr.js";import"./index-Bf3cZXmJ.js";import"./useCancelAnimationFallback-VZ9Czbes.js";import"./YAxisTicks-BFJuoczb.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CVyKFdEa.js";import"./ChartDataLabel-Dp0Z0qBs.js";import"./useOnClickInternal-DIA15wuQ.js";import"./react-content-loader.es-B5MJyrMr.js";import"./useIsRTL-BkQwBtqx.js";import"./useLongestYAxisLabel-DiJab_IC.js";import"./ComposedChart-C8ARvSfs.js";import"./Line-Cuqikdjc.js";import"./Scatter-Cf62DBLb.js";import"./index-BVdpvOfB.js";import"./index-CFL64CBM.js";import"./Placeholder-BzsK0tIO.js";import"./index-aiwkuE4d.js";const $=`# @ui5/webcomponents-react-charts

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
