import{r as i,j as t,T as l}from"./iframe-CXDBwaXf.js";import{useMDXComponents as p}from"./index-Dq-vd5Ev.js";import{M as u,a as h,n as f}from"./blocks-BAIBAw_h.js";import"./Tag-BGtFiUzo.js";import"./index-CdM50YVo.js";import{F as d}from"./CommandsAndQueries-EFbMjjAa.js";import"./copy-tKRdoNaC.js";import{T as b}from"./TableOfContent-Beyzx59M.js";import{C}from"./index-JC8Jv5RF.js";import{D}from"./BarChart.stories-pBO9xmQ5.js";import{D as y}from"./BulletChart.stories-maK911yu.js";import{D as g}from"./ColumnChart.stories-hJiexxwE.js";import{D as v}from"./ColumnChartWithTrend.stories-CXan64y8.js";import{D as x}from"./ComposedChart.stories-CjIPbAgR.js";import{D as j}from"./DonutChart.stories-D4HV0Y0a.js";import{D as w}from"./LineChart.stories-BR_84XKW.js";import{D as R}from"./PieChart.stories-BpCK-b4n.js";import{D as I}from"./RadarChart.stories-C5teNqqx.js";import{D as S}from"./RadialChart.stories-DEqoyoI1.js";import{D as T}from"./ScatterChart.stories-CRYQfX4G.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BIroKfax.js";import"./sys-enter-2-a30AyDBZ.js";import"./alert-Bp9zzpf6.js";import"./index-CdFEqecu.js";import"./index-Dkyq4U7I.js";import"./index-CNRdJAzz.js";import"./Link-Cn9jKhUL.js";import"./index-Ekr32cnm.js";import"./index-BZ8xLssE.js";import"./index-C2VBEgX9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BhiljY7Y.js";import"./addCustomCSSWithScoping-DOTw8Y7k.js";import"./index-74IMF4Fu.js";import"./Carousel-DUoPsUQJ.js";import"./ScrollEnablement-CPJHMdd5.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BXVEeoB7.js";import"./slim-arrow-left-8SL4afUv.js";import"./DemoProps-lpsOacuF.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Bxf6-SRa.js";import"./ChartContainer-XJjKDUtj.js";import"./index-sCYpguPS.js";import"./useCancelAnimationFallback-2D3n1Z4V.js";import"./YAxisTicks-DzMP81Ji.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-KrSM0oDe.js";import"./ChartDataLabel-Cnh5I42Q.js";import"./useOnClickInternal-DgKF58_7.js";import"./react-content-loader.es-BGCzla9P.js";import"./useIsRTL-zoi03cJM.js";import"./useLongestYAxisLabel-CSfPsqMd.js";import"./ComposedChart-BX6c4_4R.js";import"./Line-G0KlNaBH.js";import"./Scatter-B1qg7EOu.js";import"./index-DtNwCdSI.js";import"./index-ixoQKsge.js";import"./Placeholder-BlfzsJjB.js";import"./index-DNXjXXQ2.js";const $=`# @ui5/webcomponents-react-charts

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
