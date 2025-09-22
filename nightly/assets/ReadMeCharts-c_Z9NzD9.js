import{r as i,j as t,T as l}from"./iframe-DBihyX6B.js";import{useMDXComponents as p}from"./index-7EvsRGh_.js";import{M as u,a as h,k as f}from"./blocks-4x6sD7LX.js";import"./Tag-DcWV-u9n.js";import"./index-DLEor5QI.js";import{F as d}from"./CommandsAndQueries-CFIgGEta.js";import"./copy-Bf9mIKpj.js";import{T as b}from"./TableOfContent-CBdAmSq8.js";import{C}from"./index-CM5whWdI.js";import{D}from"./BarChart.stories-C3DaIwOy.js";import{D as y}from"./BulletChart.stories-CSOrezO4.js";import{D as g}from"./ColumnChart.stories-CHvZ_-AY.js";import{D as v}from"./ColumnChartWithTrend.stories-tSDVhjTc.js";import{D as x}from"./ComposedChart.stories-CTw_tUWH.js";import{D as j}from"./DonutChart.stories-dC9PS-3L.js";import{D as w}from"./LineChart.stories-CFgvU2P6.js";import{D as R}from"./PieChart.stories-DPvnZ34W.js";import{D as I}from"./RadarChart.stories-DHtJz31q.js";import{D as S}from"./RadialChart.stories-BupCEAfA.js";import{D as T}from"./ScatterChart.stories-DTon61ly.js";import"./preload-helper-PPVm8Dsz.js";import"./information-5R3zdDEl.js";import"./sys-enter-2-DGkUJwI9.js";import"./alert-DQd1blb9.js";import"./index-Bht8mt-d.js";import"./index-BXD3v3ss.js";import"./index-tKXjFGfd.js";import"./Link-DylgBeIF.js";import"./addCustomCSSWithScoping-CH8klGw7.js";import"./index-HwCsdfjY.js";import"./index-BYBUQOBO.js";import"./index-CCW-kbw5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ZTIhRr7S.js";import"./index-d0ALq1QU.js";import"./Carousel-C995aM0v.js";import"./ScrollEnablement-DqE26vCK.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BWj3yyJk.js";import"./slim-arrow-left-CyFBS53N.js";import"./DemoProps-DTreQkjr.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CDTWOO71.js";import"./ChartContainer-Wn3n4-0D.js";import"./index-fzBRU-3G.js";import"./useCancelAnimationFallback-CZDT5Ajy.js";import"./YAxisTicks-Csp5Lwed.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DXK_X2px.js";import"./ChartDataLabel-LtaziYoz.js";import"./useOnClickInternal-B24gIHPy.js";import"./react-content-loader.es-BcyChxVw.js";import"./useIsRTL-CjbK0HRk.js";import"./useLongestYAxisLabel-GhrKJZAk.js";import"./ComposedChart-Csv9zHql.js";import"./Line-C9rggOau.js";import"./Scatter-DPak543i.js";import"./index-BVZESItq.js";import"./index-CUembOnY.js";import"./Placeholder-DfdjSon6.js";import"./index-vt3rRCOw.js";const $=`# @ui5/webcomponents-react-charts

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
