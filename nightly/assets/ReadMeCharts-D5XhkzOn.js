import{r as i,j as t,T as l}from"./iframe-DncksSc9.js";import{useMDXComponents as p}from"./index-DHwy2cP9.js";import{M as u,a as h,k as f}from"./blocks-CrR4TToZ.js";import"./Tag-CydY6GNK.js";import"./index-Bxx2fk60.js";import{F as d}from"./CommandsAndQueries-CDnFth_H.js";import"./copy-DLEpwWX6.js";import{T as b}from"./TableOfContent-CzqOl-iG.js";import{C}from"./index-9oYJVMaW.js";import{D}from"./BarChart.stories-n5X_4wtd.js";import{D as y}from"./BulletChart.stories-DooouS1O.js";import{D as g}from"./ColumnChart.stories-o_GRsyUc.js";import{D as v}from"./ColumnChartWithTrend.stories-DaX4uxza.js";import{D as x}from"./ComposedChart.stories-DvHoMkVi.js";import{D as j}from"./DonutChart.stories-CtPET6Xx.js";import{D as w}from"./LineChart.stories-B9MS1thl.js";import{D as R}from"./PieChart.stories-BiwJOJAG.js";import{D as I}from"./RadarChart.stories-DzeAYlZn.js";import{D as S}from"./RadialChart.stories-CZfz5Tk9.js";import{D as T}from"./ScatterChart.stories-CCc7lcOK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DaRpWkOX.js";import"./sys-enter-2-oWYvZ3n3.js";import"./alert-DDv07Q-F.js";import"./index--l4k2_pu.js";import"./index-LgvpS8l8.js";import"./index-DM-1F5s9.js";import"./Link-DA9rizI6.js";import"./index-DjMKVIn1.js";import"./index-9yiQ979H.js";import"./index-ozB3DgLW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0ZXAWvt.js";import"./addCustomCSSWithScoping-CHaIArZr.js";import"./index-Bbgh-_Am.js";import"./Carousel-2SZJJJSp.js";import"./ScrollEnablement-P--ZLWUn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DuK7gilv.js";import"./slim-arrow-left-CL4QuHsY.js";import"./DemoProps-Ddf6E5hr.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DdViSmMq.js";import"./ChartContainer-CzzLew-u.js";import"./index-83abA5iC.js";import"./useCancelAnimationFallback-GpH-Idkm.js";import"./YAxisTicks-B3E_JP2g.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Ctu7xyI7.js";import"./ChartDataLabel-DafdEANi.js";import"./useOnClickInternal-CB7DeGVM.js";import"./react-content-loader.es-ga3iBK2T.js";import"./useIsRTL-SpXXo_HP.js";import"./useLongestYAxisLabel-DlzBhjNz.js";import"./ComposedChart-CqjYRde2.js";import"./Line-CBJ_e_IV.js";import"./Scatter-jstJZJvV.js";import"./index-DtSn9-wP.js";import"./index-TnfbDCRL.js";import"./Placeholder-DF7FG4m9.js";import"./index-wD494YI6.js";const $=`# @ui5/webcomponents-react-charts

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
