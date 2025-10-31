import{r as i,j as t,T as l}from"./iframe-Do6vb0_F.js";import{useMDXComponents as p}from"./index-CjAG28Zi.js";import{M as u,a as h,m as f}from"./blocks-BSmhBV8W.js";import"./Tag-Bm_1Oa-G.js";import"./index-DFaXcVzr.js";import{F as d}from"./CommandsAndQueries-DNVLBibD.js";import"./copy-CtSFAv-a.js";import{T as b}from"./TableOfContent-DFD41kkG.js";import{C}from"./index-CBBU2qoz.js";import{D}from"./BarChart.stories-e1EPfVA0.js";import{D as y}from"./BulletChart.stories-gya02D41.js";import{D as g}from"./ColumnChart.stories-B20t5-r-.js";import{D as v}from"./ColumnChartWithTrend.stories-BuF1QhE9.js";import{D as x}from"./ComposedChart.stories-WOYelBi7.js";import{D as j}from"./DonutChart.stories-BqrSqN_z.js";import{D as w}from"./LineChart.stories-C-io7q-c.js";import{D as R}from"./PieChart.stories-DiW7GxVM.js";import{D as I}from"./RadarChart.stories-CjEe7gTQ.js";import{D as S}from"./RadialChart.stories-C575Qlzk.js";import{D as T}from"./ScatterChart.stories-Cd1JTo_G.js";import"./preload-helper-PPVm8Dsz.js";import"./information-kf1Y_V0y.js";import"./sys-enter-2-Dgg9scSJ.js";import"./alert-eluNIvxZ.js";import"./index-Bn7jdYPg.js";import"./index-CjAZJ6mP.js";import"./index-CRpB2mc_.js";import"./Link-DfSClIn0.js";import"./index-B7DmSRaZ.js";import"./index-euaiQ6-T.js";import"./index-BKzdQw4A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-x3ovOdYp.js";import"./addCustomCSSWithScoping-DMyk9VX6.js";import"./index-CziNROS9.js";import"./Carousel-duov8I7R.js";import"./ScrollEnablement-Bcn9GtV2.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BBmhBMfu.js";import"./slim-arrow-left-CAQVu1T7.js";import"./DemoProps-nRedOgu2.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-wmzh62g2.js";import"./ChartContainer-Csf7Cugx.js";import"./index-0fgUCGZZ.js";import"./useCancelAnimationFallback-SoACnwq4.js";import"./YAxisTicks-1TIvihV4.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DShv0GJJ.js";import"./ChartDataLabel-hoISasX6.js";import"./useOnClickInternal-CR2SOTht.js";import"./react-content-loader.es-D19rKULH.js";import"./useIsRTL-BQccTeWy.js";import"./useLongestYAxisLabel-XLmjblQz.js";import"./ComposedChart-DAaUJa3n.js";import"./Line-B5R_WzIk.js";import"./Scatter-olPo-Czs.js";import"./index-DDeFFDgr.js";import"./index-SefED654.js";import"./Placeholder-7UyZFB7V.js";import"./index-_2SP9UUi.js";const $=`# @ui5/webcomponents-react-charts

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
