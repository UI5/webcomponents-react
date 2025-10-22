import{r as i,j as t,T as l}from"./iframe-BgUChC8z.js";import{useMDXComponents as p}from"./index-Bt3QSaL1.js";import{M as u,a as h,k as f}from"./blocks-xGQg2Vw5.js";import"./Tag-C_OAQHPO.js";import"./index-Wo45_tYZ.js";import{F as d}from"./CommandsAndQueries-BiCzXToa.js";import"./copy-BTfIxGSH.js";import{T as b}from"./TableOfContent-zmIy0jA9.js";import{C}from"./index-CGTnznjo.js";import{D}from"./BarChart.stories-BdjRhyH-.js";import{D as y}from"./BulletChart.stories-DiNMt_Q-.js";import{D as g}from"./ColumnChart.stories-DvlFbjEV.js";import{D as v}from"./ColumnChartWithTrend.stories-CO2Rqzsz.js";import{D as x}from"./ComposedChart.stories-DZ1cuNLr.js";import{D as j}from"./DonutChart.stories-DWz1KAsU.js";import{D as w}from"./LineChart.stories-Dvxww10i.js";import{D as R}from"./PieChart.stories-BKag5X_e.js";import{D as I}from"./RadarChart.stories-BKik1-m0.js";import{D as S}from"./RadialChart.stories-COeR1HK5.js";import{D as T}from"./ScatterChart.stories-BmpVjMsV.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B5F-s1Wz.js";import"./sys-enter-2-pPHl1vwI.js";import"./alert-C-NbCkDs.js";import"./index-BQfpsC01.js";import"./index-BNFZf5J7.js";import"./index-D4lpRvQf.js";import"./Link-BaaJYg0_.js";import"./index-EZPmIbpG.js";import"./index-I7ioAdFJ.js";import"./index-C5F4agy_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNw7RwQP.js";import"./addCustomCSSWithScoping-CSlMgmu5.js";import"./index-DUpxdMFd.js";import"./Carousel-CGoGfGl9.js";import"./ScrollEnablement-4uXBpXRT.js";import"./animate-JylhYHXj.js";import"./AnimationMode-MhTdc1wH.js";import"./slim-arrow-left-LNH9NixG.js";import"./DemoProps-CeZB8SMi.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DBWevzGd.js";import"./ChartContainer-DSBsPzlO.js";import"./index-DxWPnaPh.js";import"./useCancelAnimationFallback-DveILzXt.js";import"./YAxisTicks-1KYS8EFQ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-2sAw8z01.js";import"./ChartDataLabel-4-ixGaE_.js";import"./useOnClickInternal-BDIq2yMU.js";import"./react-content-loader.es-BT8s_TaU.js";import"./useIsRTL-BuukhyP7.js";import"./useLongestYAxisLabel-D9yHx-U6.js";import"./ComposedChart-Diu-J5AF.js";import"./Line-g9QRH_ry.js";import"./Scatter-Brx1lzXw.js";import"./index-BU_LJ0_9.js";import"./index-l8FDiCxw.js";import"./Placeholder-Bg4sFGJK.js";import"./index-DFUSguwL.js";const $=`# @ui5/webcomponents-react-charts

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
