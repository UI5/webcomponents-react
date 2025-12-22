import{r as i,j as t,T as l}from"./iframe-BH4bVelf.js";import{useMDXComponents as p}from"./index-BZqT0YF1.js";import{M as u,a as h,n as f}from"./blocks-CeYDMKuM.js";import"./Tag-BXnIP2dS.js";import"./index-CJTqi7uU.js";import{F as d}from"./CommandsAndQueries-D9wpOiDr.js";import"./copy-Dqlw1cCi.js";import{T as b}from"./TableOfContent-CmqsyGDI.js";import{C}from"./index-BPCpBweG.js";import{D}from"./BarChart.stories-BhvJCHWu.js";import{D as y}from"./BulletChart.stories-C0rU6jf2.js";import{D as g}from"./ColumnChart.stories-40WWP1eZ.js";import{D as v}from"./ColumnChartWithTrend.stories-C10htxAa.js";import{D as x}from"./ComposedChart.stories-9Pwzwb19.js";import{D as j}from"./DonutChart.stories-CJdVDKRl.js";import{D as w}from"./LineChart.stories-ALFHCpmS.js";import{D as R}from"./PieChart.stories-D2SjW4gv.js";import{D as I}from"./RadarChart.stories-D0vA5chX.js";import{D as S}from"./RadialChart.stories-D1Gtq-WF.js";import{D as T}from"./ScatterChart.stories-c-oGpV8B.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BFXgiRFQ.js";import"./sys-enter-2-IrFhFhIl.js";import"./alert-2wR6R_Um.js";import"./index-Clh4Efsf.js";import"./index-CF882nWm.js";import"./index-CaNjf1Vn.js";import"./Link-CWmFbngj.js";import"./index-BD7TNiZv.js";import"./index-BoC02bGf.js";import"./index-DwqLEbZm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C83XHNHQ.js";import"./addCustomCSSWithScoping-BSRRxoii.js";import"./index-AtaZxDlU.js";import"./Carousel-DIzIKQAn.js";import"./ScrollEnablement-Dz8a2847.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D6l9oiP2.js";import"./slim-arrow-left-DK99C42d.js";import"./DemoProps-rd0-yKI6.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Wug0QQbH.js";import"./ChartContainer-CTMLvRkT.js";import"./index-DldxGphJ.js";import"./useCancelAnimationFallback-DmMIDBeq.js";import"./YAxisTicks-BHWiD4BB.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CFac9uK9.js";import"./ChartDataLabel-CT2dYo0U.js";import"./useOnClickInternal-7PMMjqYx.js";import"./react-content-loader.es-C3dz3EoH.js";import"./useIsRTL-DsU26iOF.js";import"./useLongestYAxisLabel-BjVMZbaO.js";import"./ComposedChart-DG5PkJBQ.js";import"./Line-D58z7kJM.js";import"./Scatter-DLLHJ7eK.js";import"./index-DlRS1Z63.js";import"./index-BgO4QHQ4.js";import"./Placeholder-CR-od3JW.js";import"./index-YjMJngSc.js";const $=`# @ui5/webcomponents-react-charts

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
