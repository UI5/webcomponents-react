import{r as i,j as t,T as l}from"./iframe-CGHDmI6F.js";import{useMDXComponents as p}from"./index-vmg_VptB.js";import{M as u,a as h,n as f}from"./blocks-CLJ0TMRL.js";import"./Tag-CNB8wsWP.js";import"./index-weaEi3VY.js";import{F as d}from"./CommandsAndQueries-Xpj75dw6.js";import"./copy-_Dvyc5eh.js";import{T as b}from"./TableOfContent-CuLj-Tpo.js";import{C}from"./index-Cgm7gJqa.js";import{D}from"./BarChart.stories-CiShwqC-.js";import{D as y}from"./BulletChart.stories-Djo7u_By.js";import{D as g}from"./ColumnChart.stories-BRNr9iwY.js";import{D as v}from"./ColumnChartWithTrend.stories-DbLc3uyv.js";import{D as x}from"./ComposedChart.stories-DYsXvE8H.js";import{D as j}from"./DonutChart.stories-Ct6BdjG1.js";import{D as w}from"./LineChart.stories-lq05SFXA.js";import{D as R}from"./PieChart.stories-BT2ybNbR.js";import{D as I}from"./RadarChart.stories-CvuprwwH.js";import{D as S}from"./RadialChart.stories-CtJLuhps.js";import{D as T}from"./ScatterChart.stories-Btv5ip_o.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CjscpLC3.js";import"./sys-enter-2-B9ZMSpbA.js";import"./alert-B6YshAIH.js";import"./index-CQzAmjvO.js";import"./index-B2jKXsJA.js";import"./index-DmbY-g5r.js";import"./Link-Cf4Rypri.js";import"./index-W3wBcX-G.js";import"./index-C2rF-vpI.js";import"./index-BCCC4ZMt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BxMyXeCI.js";import"./addCustomCSSWithScoping-C1fbuE3M.js";import"./index-DikhnyC-.js";import"./Carousel-TvYD-vNF.js";import"./ScrollEnablement-CQbg5YPQ.js";import"./animate-JylhYHXj.js";import"./AnimationMode-tAXgjtNo.js";import"./slim-arrow-left-BOOX9oLY.js";import"./DemoProps-i8TZ6j06.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-6LsU-Hcw.js";import"./ChartContainer-B6DP3Cq6.js";import"./index-B0mnhl2M.js";import"./useCancelAnimationFallback-sZ28FR47.js";import"./YAxisTicks-Rol-1Hws.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Cd0c035_.js";import"./ChartDataLabel-CfWvpHuP.js";import"./useOnClickInternal-DbZKYv8p.js";import"./react-content-loader.es-9bZgD_SG.js";import"./useIsRTL-Cp-zKd6f.js";import"./useLongestYAxisLabel-CjGhkchi.js";import"./ComposedChart-CqI_JKXY.js";import"./Line-rgJJceNW.js";import"./Scatter-BwGNvw15.js";import"./index-CNgFpLKL.js";import"./index-BsVKU0cY.js";import"./Placeholder-D8Z_IfK_.js";import"./index-DD_nWrmB.js";const $=`# @ui5/webcomponents-react-charts

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
