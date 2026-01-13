import{r as i,j as t,T as l}from"./iframe-M6Wvc0fq.js";import{useMDXComponents as p}from"./index-Jmw_4WZV.js";import{M as u,a as h,n as f}from"./blocks-9PHEB2Ze.js";import"./Tag-DEHlwQE8.js";import"./index-D-NAUCyd.js";import{F as d}from"./CommandsAndQueries--8Ahr2u6.js";import"./copy-ClXhTaxL.js";import{T as b}from"./TableOfContent-C_C39Km7.js";import{C}from"./index-B4oGwrSs.js";import{D}from"./BarChart.stories-D8kmuXH7.js";import{D as y}from"./BulletChart.stories-C9fNGn9Y.js";import{D as g}from"./ColumnChart.stories-CCYvzBU5.js";import{D as v}from"./ColumnChartWithTrend.stories-B3qQefp7.js";import{D as x}from"./ComposedChart.stories-BliUDDED.js";import{D as j}from"./DonutChart.stories-DjbD5b7t.js";import{D as w}from"./LineChart.stories-Debg8Mh5.js";import{D as R}from"./PieChart.stories-CVnIw3ta.js";import{D as I}from"./RadarChart.stories-C7BJpt6G.js";import{D as S}from"./RadialChart.stories-o4FxiWX6.js";import{D as T}from"./ScatterChart.stories-pKRuzact.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cj4hRV-U.js";import"./sys-enter-2-CYdmpg8V.js";import"./alert-BNoNYb7g.js";import"./index-CUPsZJD9.js";import"./index-C-FSsThx.js";import"./index-_LwCcPZx.js";import"./Link-DpL14GXS.js";import"./index-0vFd8GUO.js";import"./index-BinHysAW.js";import"./index-CWMf0NSb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Y-KB0uhX.js";import"./addCustomCSSWithScoping-B-5QqUkV.js";import"./index-CNLcYPCr.js";import"./Carousel-vdeWrgVB.js";import"./ScrollEnablement-CAzFMa-6.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B7XSq23P.js";import"./slim-arrow-left-CTXJmeeE.js";import"./DemoProps-BiVIZ8Lm.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-JVUJdgI5.js";import"./ChartContainer-CGe6j5RJ.js";import"./index-DPn7F17k.js";import"./useCancelAnimationFallback-40RjTQx7.js";import"./YAxisTicks-B8F9lLLD.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B9oYr9aa.js";import"./ChartDataLabel-Lum1PJBW.js";import"./useOnClickInternal-B3OW2FBy.js";import"./react-content-loader.es-B8tRkyMQ.js";import"./useIsRTL-D7MijIiv.js";import"./useLongestYAxisLabel-DLy0DE2Z.js";import"./ComposedChart-BUiDZj8B.js";import"./Line-DznYB-4L.js";import"./Scatter-BMXpzq8r.js";import"./index-BrNAGaNm.js";import"./index-tuBuN031.js";import"./Placeholder-BOYmRXug.js";import"./index-Jl_NZbrd.js";const $=`# @ui5/webcomponents-react-charts

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
