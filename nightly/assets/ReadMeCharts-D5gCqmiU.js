import{r as i,j as t,T as l}from"./iframe-cRRiQYmf.js";import{useMDXComponents as p}from"./index-Bs0WiH3G.js";import{M as u,a as h,m as f}from"./blocks-BE5V3uJk.js";import"./Tag-CfbQk3KA.js";import"./index-ByOWo14Z.js";import{F as d}from"./CommandsAndQueries-6fQDSTza.js";import"./copy-B18ZHZAg.js";import{T as b}from"./TableOfContent-9GtC9JLm.js";import{C}from"./index-BaC6YWO2.js";import{D}from"./BarChart.stories-DAdaoC6t.js";import{D as y}from"./BulletChart.stories-Lz9e8UTW.js";import{D as g}from"./ColumnChart.stories-48XGj9Mp.js";import{D as v}from"./ColumnChartWithTrend.stories-B6pwwWzL.js";import{D as x}from"./ComposedChart.stories-u67r0nwH.js";import{D as j}from"./DonutChart.stories-DqFKiNj9.js";import{D as w}from"./LineChart.stories-DSMwzbYx.js";import{D as R}from"./PieChart.stories-CYYooVtl.js";import{D as I}from"./RadarChart.stories-D0t8ZqJs.js";import{D as S}from"./RadialChart.stories-ik0zr5Rn.js";import{D as T}from"./ScatterChart.stories-8QHU0FQB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-De5Q3Snv.js";import"./sys-enter-2-D3hJu-L0.js";import"./alert-B4Rl3843.js";import"./index-DBZCyEHT.js";import"./index-DUKoRTQU.js";import"./index-BO1H95-d.js";import"./Link-CLMkrIwX.js";import"./index-BFR5idok.js";import"./index-DtECOzdu.js";import"./index-CIJf_Fw_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AOA_k-Lh.js";import"./addCustomCSSWithScoping-OHQyl5Vz.js";import"./index-CSUcx8X8.js";import"./Carousel-BuVeCUXa.js";import"./ScrollEnablement-C_xMDTEO.js";import"./animate-JylhYHXj.js";import"./AnimationMode-8Ixktwmg.js";import"./slim-arrow-left-C1fRLgUy.js";import"./DemoProps-BqlEM3SU.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-KNM0fBm1.js";import"./ChartContainer-VkS_0HHF.js";import"./index-BoMEYoEg.js";import"./useCancelAnimationFallback-doctaEMt.js";import"./YAxisTicks-_SVcrQnp.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-aWDjwtXi.js";import"./ChartDataLabel-CPWBD_o5.js";import"./useOnClickInternal-CSoVZaia.js";import"./react-content-loader.es-D-XBbShR.js";import"./useIsRTL-CENrkM0D.js";import"./useLongestYAxisLabel-CcwXF4LI.js";import"./ComposedChart-Bym05j3m.js";import"./Line-aqxn2YqD.js";import"./Scatter-DrHpwAr5.js";import"./index-cKogbL3D.js";import"./index-CNCZxdB3.js";import"./Placeholder-mvz_E9Xc.js";import"./index-DEmRCsM2.js";const $=`# @ui5/webcomponents-react-charts

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
