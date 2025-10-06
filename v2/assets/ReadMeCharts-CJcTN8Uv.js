import{r as i,j as t,T as l}from"./iframe-CIFZFrG2.js";import{useMDXComponents as p}from"./index-CzlgAQtr.js";import{M as u,a as h,k as f}from"./blocks-ClculhSc.js";import"./Tag-C9R72Ii-.js";import"./index-B9QNJxWD.js";import{F as d}from"./CommandsAndQueries-BlZNZtUo.js";import"./copy-CVO7dQ0j.js";import{T as b}from"./TableOfContent-Db9cMdlQ.js";import{C}from"./index-DxhIBlhh.js";import{D}from"./BarChart.stories-CSgCeDLN.js";import{D as y}from"./BulletChart.stories-CxutGQHd.js";import{D as g}from"./ColumnChart.stories-B1D6jg0L.js";import{D as v}from"./ColumnChartWithTrend.stories-DJbFID_u.js";import{D as x}from"./ComposedChart.stories-qUua-jzB.js";import{D as j}from"./DonutChart.stories-DDvuOt5L.js";import{D as w}from"./LineChart.stories-CRQ0Gqa7.js";import{D as R}from"./PieChart.stories-Cuoq8AAz.js";import{D as I}from"./RadarChart.stories-8L0nJHlV.js";import{D as S}from"./RadialChart.stories-CFmIo5Zb.js";import{D as T}from"./ScatterChart.stories-DSTbZkdd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C9kryg9s.js";import"./sys-enter-2-Dnan1hPQ.js";import"./alert-OVbD1hF6.js";import"./index-D2ynVlET.js";import"./index-Raa53yj5.js";import"./index-BRYLHUCr.js";import"./Link-C5_8cjV3.js";import"./index-CyeOYd2G.js";import"./index-CysqO__p.js";import"./index--ZLvsvkR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CxDbWVSp.js";import"./addCustomCSSWithScoping-Bq-MB79n.js";import"./index-Ddm49m6x.js";import"./Carousel-CCr42AkW.js";import"./ScrollEnablement-BkzfVfom.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CuMiG5uf.js";import"./slim-arrow-left-DRS3pS5A.js";import"./DemoProps-CLFrF4AG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CkRPB4kb.js";import"./ChartContainer-BP244j6s.js";import"./index-DlBqic0j.js";import"./useCancelAnimationFallback-DPZveB9S.js";import"./YAxisTicks-DsQDpAZH.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-0iEi--I5.js";import"./ChartDataLabel-CFfo3NPy.js";import"./useOnClickInternal-B-fPYzal.js";import"./react-content-loader.es-DZ-nmVRf.js";import"./useIsRTL-BCLO5KRo.js";import"./useLongestYAxisLabel-BqPW9K2U.js";import"./ComposedChart-pnD9epzX.js";import"./Line-BdA4NdGb.js";import"./Scatter-BRduYZjl.js";import"./index-ewETQ9Ml.js";import"./index-BrrNK0sp.js";import"./Placeholder-C6hKUaGm.js";import"./index-CpvVZqx1.js";const $=`# @ui5/webcomponents-react-charts

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
