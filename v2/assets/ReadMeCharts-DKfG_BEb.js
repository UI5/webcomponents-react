import{r as i,j as t,T as l}from"./iframe-DZzGW3BN.js";import{useMDXComponents as p}from"./index-4a2WG_Ci.js";import{M as u,a as h,n as f}from"./blocks-CBLhE6Mj.js";import"./Tag-DsKJkF-r.js";import"./index-CwFc8wWn.js";import{F as d}from"./CommandsAndQueries-agOrjqHb.js";import"./copy-Dn2hDQ0W.js";import{T as b}from"./TableOfContent-mBBS85_5.js";import{C}from"./index-BBZCuINm.js";import{D}from"./BarChart.stories-CW09dv9N.js";import{D as y}from"./BulletChart.stories-DQBNz-TF.js";import{D as g}from"./ColumnChart.stories-B-85SaQ4.js";import{D as v}from"./ColumnChartWithTrend.stories-BMjbqsZF.js";import{D as x}from"./ComposedChart.stories-ULHwNRwx.js";import{D as j}from"./DonutChart.stories-CO4BO54i.js";import{D as w}from"./LineChart.stories-C6qVMQFs.js";import{D as R}from"./PieChart.stories-BlRIcozN.js";import{D as I}from"./RadarChart.stories-D8xZ9yLV.js";import{D as S}from"./RadialChart.stories-fhs5eHTc.js";import{D as T}from"./ScatterChart.stories-CEfrakQe.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BknITroB.js";import"./sys-enter-2-KPnKgmjd.js";import"./alert-mneIjgbe.js";import"./index-DRP5oWUe.js";import"./index-kAqP9TvQ.js";import"./index-Dq5fA6-V.js";import"./Link-S_PR-7tK.js";import"./index-KWsyOko9.js";import"./index-Cwa4PueL.js";import"./index-DDMDh9Sd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BsBnjZtI.js";import"./addCustomCSSWithScoping-63LVGehW.js";import"./index-d1jeh3JQ.js";import"./Carousel-DWlNKaKG.js";import"./ScrollEnablement-Dlejz-Cm.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DNVc6hVG.js";import"./slim-arrow-left-BOhkEOzv.js";import"./DemoProps-CHE-FQEA.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BrqH0Vwb.js";import"./ChartContainer-CC0yN3fo.js";import"./index-5lzKqf_E.js";import"./useCancelAnimationFallback-BV8OawyO.js";import"./YAxisTicks-0lC-wpKK.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-i3rzHdQ-.js";import"./ChartDataLabel-DX4ylf6g.js";import"./useOnClickInternal-DhEJv9BH.js";import"./react-content-loader.es-CbtHqKXi.js";import"./useIsRTL-CgKuSHBl.js";import"./useLongestYAxisLabel-CfcE76kS.js";import"./ComposedChart-CjiV-r87.js";import"./Line-fNhIl-aB.js";import"./Scatter-Cn-6BHMk.js";import"./index-DAFopEo5.js";import"./index-sxzWA6qN.js";import"./Placeholder-BLVLCoGS.js";import"./index-CXtaxZ-Z.js";const $=`# @ui5/webcomponents-react-charts

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
