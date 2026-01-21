import{r as i,j as t,T as l}from"./iframe-C9GC-4U4.js";import{useMDXComponents as p}from"./index-vmj4hVH3.js";import{M as u,a as h,n as f}from"./blocks-B1Qu1Zwa.js";import"./Tag-C_vOYGvY.js";import"./index-NAfB8FFO.js";import{F as d}from"./CommandsAndQueries-DYyMzrOI.js";import"./copy-Bj7tGZK9.js";import{T as b}from"./TableOfContent-CiwDTzv8.js";import{C}from"./index-BWUWGgpS.js";import{D}from"./BarChart.stories-Dl8_z6al.js";import{D as y}from"./BulletChart.stories-D8_5nFJ9.js";import{D as g}from"./ColumnChart.stories-Dhp4FvbS.js";import{D as v}from"./ColumnChartWithTrend.stories-CoyRg_od.js";import{D as x}from"./ComposedChart.stories-B5bYzYIj.js";import{D as j}from"./DonutChart.stories-jkooTDfH.js";import{D as w}from"./LineChart.stories-SrJOVM9c.js";import{D as R}from"./PieChart.stories-1U08f--I.js";import{D as I}from"./RadarChart.stories-DAwUFFbQ.js";import{D as S}from"./RadialChart.stories-DU0Btb0s.js";import{D as T}from"./ScatterChart.stories-DcoT14XG.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cj8yu0bT.js";import"./sys-enter-2-pae_51W8.js";import"./alert-CNeVkGHK.js";import"./index-f0Iqf0o1.js";import"./index-B091rt76.js";import"./index-BNt_KmI_.js";import"./Link-DZICkDEv.js";import"./index--mOIC-D9.js";import"./index-BpGBt1Ec.js";import"./index-CN9xEViq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CrDmJKcm.js";import"./addCustomCSSWithScoping-C3bBYzrj.js";import"./index-Bas8y3YG.js";import"./Carousel-BnrXmafo.js";import"./ScrollEnablement-CG9VZkld.js";import"./animate-JylhYHXj.js";import"./AnimationMode-qdb4hMlW.js";import"./slim-arrow-left-QYdi-qQ7.js";import"./DemoProps-DuybixtJ.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CmZ3RBlh.js";import"./ChartContainer-gy3QoKWh.js";import"./index-C5oysK-n.js";import"./useCancelAnimationFallback-BLSDH4Fg.js";import"./YAxisTicks-D07S5pRS.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-s9MdSB76.js";import"./ChartDataLabel-D6uUs4LA.js";import"./useOnClickInternal-D9duCA_J.js";import"./react-content-loader.es-vhFQ8brZ.js";import"./useIsRTL-BPtpEu5k.js";import"./useLongestYAxisLabel-CVo2gl88.js";import"./ComposedChart-B7MsvnOl.js";import"./Line-DtvcnPQs.js";import"./Scatter-BO3xDsh6.js";import"./index-cbel4yDi.js";import"./index-CfZkc415.js";import"./Placeholder-DpRJMCSA.js";import"./index-CTM8jDST.js";const $=`# @ui5/webcomponents-react-charts

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
