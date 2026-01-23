import{r as i,j as t,T as l}from"./iframe-D9-OPwVR.js";import{useMDXComponents as p}from"./index-rQrCyh78.js";import{M as u,a as h,n as f}from"./blocks-yWwHjaca.js";import"./Tag-C4h9s18a.js";import"./index-C0yJm7_O.js";import{F as d}from"./CommandsAndQueries-CGaVhEZZ.js";import"./copy-kqUatD9Y.js";import{T as b}from"./TableOfContent-CWXv45_X.js";import{C}from"./index-CwVj7NLB.js";import{D}from"./BarChart.stories-C8pj4pw0.js";import{D as y}from"./BulletChart.stories-VKgK-EkG.js";import{D as g}from"./ColumnChart.stories-C8Dr0sT7.js";import{D as v}from"./ColumnChartWithTrend.stories-BbRjapGs.js";import{D as x}from"./ComposedChart.stories-CtpDSQPp.js";import{D as j}from"./DonutChart.stories-aLD_M6Ik.js";import{D as w}from"./LineChart.stories-DKVnzdx4.js";import{D as R}from"./PieChart.stories-CuILdxq_.js";import{D as I}from"./RadarChart.stories-C49AfLw_.js";import{D as S}from"./RadialChart.stories-C0pYVRTY.js";import{D as T}from"./ScatterChart.stories-CAlrPBv3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CXuNnhF_.js";import"./sys-enter-2-CpLLk16Q.js";import"./alert-DmoPAb-1.js";import"./index-BqY2NvOe.js";import"./index-DWSshsP3.js";import"./index-D2zbla8P.js";import"./Link-C0FJUUPf.js";import"./index-C2LtXiVH.js";import"./index-B7FHygPg.js";import"./index-BKtOrYz7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHNrYRTW.js";import"./addCustomCSSWithScoping-BMu8GK7h.js";import"./index-CARCmcfE.js";import"./Carousel-SWkpwjRW.js";import"./ScrollEnablement-Co_z5fSg.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CLyQiLIr.js";import"./slim-arrow-left-DImzNuJK.js";import"./DemoProps-DfaUFEed.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B9b3LbQe.js";import"./ChartContainer-BArZi2RY.js";import"./index-BZtku0It.js";import"./useCancelAnimationFallback-B4sLh8pS.js";import"./YAxisTicks-BXiilSZm.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-_9bhepto.js";import"./ChartDataLabel-DyOkzh8R.js";import"./useOnClickInternal-B2SF7PbN.js";import"./react-content-loader.es-B_hCqaZo.js";import"./useIsRTL-B0oRJVLp.js";import"./useLongestYAxisLabel--llT47Eh.js";import"./ComposedChart-JTrzF4sE.js";import"./Line-DbDWVZ4P.js";import"./Scatter-DblNoYfo.js";import"./index-CxtrOVPS.js";import"./index-DpYjVKqK.js";import"./Placeholder-CSUPL7i8.js";import"./index-PE4btvtn.js";const $=`# @ui5/webcomponents-react-charts

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
