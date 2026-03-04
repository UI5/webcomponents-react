import{r as i,j as t,O as l}from"./iframe-DLRMrfR_.js";import{useMDXComponents as p}from"./index-7UnH5ZCU.js";import{M as u,a as h,n as f}from"./blocks--r6oFhly.js";import"./Tag-zetZkNsl.js";import"./index-qvcEmQpJ.js";import{F as d}from"./CommandsAndQueries-D6NirpIC.js";import"./copy-Loq6ZFpK.js";import{T as b}from"./TableOfContent-DuwFMUzK.js";import{C}from"./index-BgBHDpmI.js";import{D}from"./BarChart.stories-w9kf5apF.js";import{D as y}from"./BulletChart.stories-BuWaDFtU.js";import{D as g}from"./ColumnChart.stories-DrX4nfX_.js";import{D as v}from"./ColumnChartWithTrend.stories-9rUmAC-l.js";import{D as x}from"./ComposedChart.stories-BDXpvDTE.js";import{D as j}from"./DonutChart.stories-CyOgHMxX.js";import{D as w}from"./LineChart.stories-fLNeJsxa.js";import{D as R}from"./PieChart.stories-CFAmAa6n.js";import{D as I}from"./RadarChart.stories-DOINl7Xr.js";import{D as S}from"./RadialChart.stories-Sp3SjLKd.js";import{D as $}from"./ScatterChart.stories-_DWohuK0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-zAO2pP7J.js";import"./sys-enter-2-CCKngdgf.js";import"./alert-B3SXl-8D.js";import"./index-DwoJQxQH.js";import"./index-D2MDEhSl.js";import"./index-tVwrcd6W.js";import"./Link-CBt9loeM.js";import"./index-kj7rqJLC.js";import"./index-DsFidw_9.js";import"./index-xtEoLRb_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMq-LIht.js";import"./addCustomCSSWithScoping-Ca5vBaM2.js";import"./index-BPd73hWD.js";import"./Carousel-BXgoqMgN.js";import"./ScrollEnablement-Bz5iwlCG.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BXSUZRBY.js";import"./slim-arrow-left-Ck3si4Zb.js";import"./DemoProps-BXP8ekOv.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CgvyQ1Sg.js";import"./ChartContainer-BCYyrj7N.js";import"./index-1oIhOKBZ.js";import"./useCancelAnimationFallback-DMUkUz0K.js";import"./YAxisTicks-D_oCDIy5.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ChugyuT8.js";import"./ChartDataLabel-Bmz8fajo.js";import"./useOnClickInternal-Dx0fGEUx.js";import"./react-content-loader.es-DhaKsK03.js";import"./useIsRTL-OpbkKVuD.js";import"./useLongestYAxisLabel-C4_3ogGV.js";import"./ComposedChart-sfxniPse.js";import"./Line-D0CHEJEc.js";import"./Scatter-qIHQfI16.js";import"./index-DzZTqcbT.js";import"./index-CRZL92xb.js";import"./Placeholder-BW3m2uZU.js";import"./index-B4R9bZoR.js";const E=`# @ui5/webcomponents-react-charts

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
