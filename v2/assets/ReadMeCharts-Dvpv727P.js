import{r as i,j as t,T as l}from"./iframe-BOeFyVYO.js";import{useMDXComponents as p}from"./index-CHR9lzRO.js";import{M as u,a as h,k as f}from"./blocks-DZQepsVR.js";import"./Tag-B2OWKeSz.js";import"./index-CPvTgMMp.js";import{F as d}from"./CommandsAndQueries-B3uiYPSD.js";import"./copy-BJhtqyDJ.js";import{T as b}from"./TableOfContent-vIMd20js.js";import{C}from"./index-2x0INuZK.js";import{D}from"./BarChart.stories-DAVgLWkc.js";import{D as y}from"./BulletChart.stories-CMGIARXc.js";import{D as g}from"./ColumnChart.stories-PEMtDJjV.js";import{D as v}from"./ColumnChartWithTrend.stories-BCxxpcBD.js";import{D as x}from"./ComposedChart.stories-Dq__WlyG.js";import{D as j}from"./DonutChart.stories-CPz3qyr9.js";import{D as w}from"./LineChart.stories-BbUjfV-j.js";import{D as R}from"./PieChart.stories-CoMo-TBS.js";import{D as I}from"./RadarChart.stories-DpMGpAEz.js";import{D as S}from"./RadialChart.stories-CZZ1zv4z.js";import{D as T}from"./ScatterChart.stories-DZQFF627.js";import"./preload-helper-PPVm8Dsz.js";import"./information-23pj5EQa.js";import"./sys-enter-2-DAsPAd7c.js";import"./alert-CPkxh21N.js";import"./index-BA2TdYHr.js";import"./index-C7pCL8XU.js";import"./index-BJHUXRax.js";import"./Link-gq5MBZLl.js";import"./index-BVr_O3zx.js";import"./index-CFpQMsbP.js";import"./index-XsNappkK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuyMWw-2.js";import"./addCustomCSSWithScoping-5MrgBdkN.js";import"./index-BcGyynfr.js";import"./Carousel-Bo9flvpI.js";import"./ScrollEnablement-C6K7-lBE.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BWU11REm.js";import"./slim-arrow-left-ComdjduU.js";import"./DemoProps-C7_gqemX.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BPICnLnc.js";import"./ChartContainer-CQFgufdc.js";import"./index-C3vfrSiy.js";import"./useCancelAnimationFallback-BS4i0hcv.js";import"./YAxisTicks-3qEBnj44.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-V9jCE_9n.js";import"./ChartDataLabel-BKIG4nkU.js";import"./useOnClickInternal-r4-EWXF7.js";import"./react-content-loader.es-CmoPmOL1.js";import"./useIsRTL-CVnkc0v4.js";import"./useLongestYAxisLabel-xDXDV5M2.js";import"./ComposedChart-vQvnG3eJ.js";import"./Line-DqMWBFyY.js";import"./Scatter-rR4o5sjn.js";import"./index-BBAD1YTh.js";import"./index-CRNH_eHA.js";import"./Placeholder-MDSbXEEe.js";import"./index-6Ncl1j0R.js";const $=`# @ui5/webcomponents-react-charts

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
