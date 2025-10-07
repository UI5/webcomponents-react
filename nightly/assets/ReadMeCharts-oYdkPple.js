import{r as i,j as t,T as l}from"./iframe-8PJ6_3g2.js";import{useMDXComponents as p}from"./index-C0ovl4HQ.js";import{M as u,a as h,k as f}from"./blocks-BEb05MJo.js";import"./Tag-z4B_wt0s.js";import"./index-BcmoHwde.js";import{F as d}from"./CommandsAndQueries-DwoVClSd.js";import"./copy-Bfeap7lu.js";import{T as b}from"./TableOfContent-CYf3VMvE.js";import{C}from"./index-atVfskav.js";import{D}from"./BarChart.stories-D8pAPvOZ.js";import{D as y}from"./BulletChart.stories-Dbve59iD.js";import{D as g}from"./ColumnChart.stories-DkXHrgCq.js";import{D as v}from"./ColumnChartWithTrend.stories-DyY0TgBJ.js";import{D as x}from"./ComposedChart.stories-BMiCjb_A.js";import{D as j}from"./DonutChart.stories-C14xBKbb.js";import{D as w}from"./LineChart.stories-ZNfVSy0X.js";import{D as R}from"./PieChart.stories-Cl2aWiOG.js";import{D as I}from"./RadarChart.stories-Cl5vEOp6.js";import{D as S}from"./RadialChart.stories-DD5r71O9.js";import{D as T}from"./ScatterChart.stories-BlHp_OoA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-aKABhmx8.js";import"./sys-enter-2-BFUBKj9Z.js";import"./alert-yjyGEikw.js";import"./index-CYfjdXMS.js";import"./index-BDwyo_3E.js";import"./index-GTIQmPyl.js";import"./Link-BhglMJXJ.js";import"./index-DOdcY3p9.js";import"./index-BGjlJLGo.js";import"./index-BysWD4q1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsI0QAy3.js";import"./addCustomCSSWithScoping-DJAGr2gu.js";import"./index-DwEBrLAz.js";import"./Carousel-CKJjx2Tm.js";import"./ScrollEnablement-CI1lcBXS.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DcqQK3U8.js";import"./slim-arrow-left-Dm5U2r_g.js";import"./DemoProps-CzTwEaQT.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BGC3jb8p.js";import"./ChartContainer-92ox2crv.js";import"./index-DmBbmPAO.js";import"./useCancelAnimationFallback-jM6pg-h1.js";import"./YAxisTicks-Db-ttxIr.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-rwD-PPLP.js";import"./ChartDataLabel-ze82RArR.js";import"./useOnClickInternal-BjEf3krw.js";import"./react-content-loader.es-BRg3J7nr.js";import"./useIsRTL-DxBvBx4N.js";import"./useLongestYAxisLabel-DQIvw94q.js";import"./ComposedChart-CrjpDraM.js";import"./Line-C-ZNGzfv.js";import"./Scatter-B10Z5YRE.js";import"./index-DQOXS9Ez.js";import"./index-DRSNRc1X.js";import"./Placeholder-FZ0egVzN.js";import"./index-BrsmofaH.js";const $=`# @ui5/webcomponents-react-charts

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
