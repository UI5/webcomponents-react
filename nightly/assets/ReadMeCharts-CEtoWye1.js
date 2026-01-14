import{r as i,j as t,T as l}from"./iframe-Cig4nsrF.js";import{useMDXComponents as p}from"./index-rt57_u-y.js";import{M as u,a as h,n as f}from"./blocks-DAEBkYYF.js";import"./Tag-Bs_1btou.js";import"./index-FKwq6U9j.js";import{F as d}from"./CommandsAndQueries-D3xhwJA5.js";import"./copy-C7r52zpO.js";import{T as b}from"./TableOfContent-CFzYaydv.js";import{C}from"./index-CbI7B2GS.js";import{D}from"./BarChart.stories-BiC1_fKd.js";import{D as y}from"./BulletChart.stories-CJvMU2I2.js";import{D as g}from"./ColumnChart.stories-CYq6lHkI.js";import{D as v}from"./ColumnChartWithTrend.stories-BhcyLgYc.js";import{D as x}from"./ComposedChart.stories-DxSTW-vq.js";import{D as j}from"./DonutChart.stories-Qt7DQODQ.js";import{D as w}from"./LineChart.stories-BX2o_6N0.js";import{D as R}from"./PieChart.stories-CP7xz5Jp.js";import{D as I}from"./RadarChart.stories-DemgNfoc.js";import{D as S}from"./RadialChart.stories-BCQzoE2j.js";import{D as T}from"./ScatterChart.stories-B1D2ZiJu.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B6HgxZBq.js";import"./sys-enter-2-BRRws0JK.js";import"./alert-Cb5ARKKh.js";import"./index-B2RnTjWc.js";import"./index-BB06tsQb.js";import"./index-5C4HFP5l.js";import"./Link-Br9IVr1w.js";import"./index-BrrdpEgt.js";import"./index-ftQeoy-6.js";import"./index-BmqXmyDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsK0-Mz_.js";import"./addCustomCSSWithScoping-BWNNT1nj.js";import"./index-BL2sJT6Z.js";import"./Carousel-BhIBq6uz.js";import"./ScrollEnablement-CSPhLIym.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BXvh3utI.js";import"./slim-arrow-left-1cSRRn6W.js";import"./DemoProps-DpcsTfzk.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CFCjwIaW.js";import"./ChartContainer-DrTNMDEH.js";import"./index-B3y-2zol.js";import"./useCancelAnimationFallback-BrPaw5yN.js";import"./YAxisTicks-K7qb-NlZ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Bz73cbqZ.js";import"./ChartDataLabel-DKkZ7_BJ.js";import"./useOnClickInternal-CPCLAxAV.js";import"./react-content-loader.es-aiMZq0ab.js";import"./useIsRTL-DQfggaPU.js";import"./useLongestYAxisLabel-BXQeY15e.js";import"./ComposedChart-WPjaJTt1.js";import"./Line-DF6rVOvL.js";import"./Scatter-CgF52FaZ.js";import"./index-I0T9iCDM.js";import"./index-BXL80P_7.js";import"./Placeholder-Byl3z0hg.js";import"./index-Bjo0dLaH.js";const $=`# @ui5/webcomponents-react-charts

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
