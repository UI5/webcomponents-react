import{r as i,j as t,O as l}from"./iframe-D6FNTQkK.js";import{useMDXComponents as p}from"./index-B6bRqhkI.js";import{M as u,a as h,n as f}from"./blocks-CncoMbCj.js";import"./Tag-BgsP26gD.js";import"./index-TUX9UWDf.js";import{F as d}from"./CommandsAndQueries-BXb9AdOB.js";import"./copy-CV5IiNGP.js";import{T as b}from"./TableOfContent-BUkQ1Gls.js";import{C}from"./index-L4Gn35W4.js";import{D}from"./BarChart.stories-st0O_61n.js";import{D as y}from"./BulletChart.stories-BBq7ZoWO.js";import{D as g}from"./ColumnChart.stories-C-w74tyt.js";import{D as v}from"./ColumnChartWithTrend.stories-CcP93peX.js";import{D as x}from"./ComposedChart.stories-Bx61OqSZ.js";import{D as j}from"./DonutChart.stories-Cecbt94H.js";import{D as w}from"./LineChart.stories-D7p-iSWD.js";import{D as R}from"./PieChart.stories-DhjuW-Pu.js";import{D as I}from"./RadarChart.stories-BzNeq1UT.js";import{D as S}from"./RadialChart.stories-DUxZGlR0.js";import{D as $}from"./ScatterChart.stories-BuCD5vvQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DX0Ia3Tr.js";import"./sys-enter-2-BXq7hn_D.js";import"./alert-Dc1BRwci.js";import"./index-CTSo6gsw.js";import"./index-Cn0-2HTO.js";import"./index-C01hHOib.js";import"./Link-ECkeIbxq.js";import"./index-i5JoI6q6.js";import"./index-CEtC1hdv.js";import"./index-_w6613cy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COKdY-da.js";import"./addCustomCSSWithScoping-BKP4itiy.js";import"./index-C8Bzh-c-.js";import"./Carousel-wERX6BIz.js";import"./ScrollEnablement-BnyFUzOB.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cx5uNVZj.js";import"./slim-arrow-left-BmYBuHfA.js";import"./DemoProps-JI8-OVcB.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DHqR6sjs.js";import"./ChartContainer-D3bcirhZ.js";import"./index-CvdFD22I.js";import"./useCancelAnimationFallback-B64ae8yb.js";import"./YAxisTicks-zlgzA5Ks.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BsI0Th25.js";import"./ChartDataLabel-Cy9if7cM.js";import"./useOnClickInternal-D9tBFRzu.js";import"./react-content-loader.es-TPrXoduL.js";import"./useIsRTL-BISPhePp.js";import"./useLongestYAxisLabel-C_IDYSsQ.js";import"./ComposedChart-CRRPTeLk.js";import"./Line-alZp9YBu.js";import"./Scatter-zBxpJ5F1.js";import"./index-BzHE9iyq.js";import"./index-FVtuZI5m.js";import"./Placeholder-DrWMm0-s.js";import"./index-8ymTFu2Z.js";const E=`# @ui5/webcomponents-react-charts

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
