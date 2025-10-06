import{r as i,j as t,T as l}from"./iframe-BbmPNBZw.js";import{useMDXComponents as p}from"./index-D87-8-cY.js";import{M as u,a as h,k as f}from"./blocks-B7C-sP0U.js";import"./Tag-DFYl0ftZ.js";import"./index-fQ6fbGsc.js";import{F as d}from"./CommandsAndQueries-C-B3vcHW.js";import"./copy-BgTszgJK.js";import{T as b}from"./TableOfContent-Cit66x7d.js";import{C}from"./index-CmGq5TXi.js";import{D}from"./BarChart.stories-CL7D36CP.js";import{D as y}from"./BulletChart.stories-Tf3nbrSE.js";import{D as g}from"./ColumnChart.stories-B1TWEEwU.js";import{D as v}from"./ColumnChartWithTrend.stories-Bv7U-axV.js";import{D as x}from"./ComposedChart.stories-B0LEYUHG.js";import{D as j}from"./DonutChart.stories-BMRmW2l3.js";import{D as w}from"./LineChart.stories-C39M861z.js";import{D as R}from"./PieChart.stories-pKoOuz5h.js";import{D as I}from"./RadarChart.stories-BczDr6XE.js";import{D as S}from"./RadialChart.stories-CFy3qrxX.js";import{D as T}from"./ScatterChart.stories-CJS48kFP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BpKTV1Df.js";import"./sys-enter-2-Cjjs2hNu.js";import"./alert-DEEsEFWu.js";import"./index-Dqb4-3Ox.js";import"./index-upku0ICQ.js";import"./index-DPh3hFjM.js";import"./Link-CATCrkJf.js";import"./index-BaS8undN.js";import"./index-DuOlzjbj.js";import"./index-Cj4eX-xQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRGip9L6.js";import"./addCustomCSSWithScoping-DXbMFExg.js";import"./index-CoFaLD2a.js";import"./Carousel-BEHscc4w.js";import"./ScrollEnablement-CnRiCY6V.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DcDG4tOS.js";import"./slim-arrow-left-GVJuY9P_.js";import"./DemoProps-BOcnAcvk.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DMXDoZPL.js";import"./ChartContainer-DJDy-G_s.js";import"./index-BhkJT34d.js";import"./useCancelAnimationFallback-BhVYL_Vv.js";import"./YAxisTicks-CFBBVfq3.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-7T3WtCsk.js";import"./ChartDataLabel-BH-KU_HB.js";import"./useOnClickInternal-Brs342fI.js";import"./react-content-loader.es-bW8WQ_2g.js";import"./useIsRTL-CWRMKF8W.js";import"./useLongestYAxisLabel-BJ6Ao3cl.js";import"./ComposedChart-COODAxWA.js";import"./Line-BCmQAMPF.js";import"./Scatter-B0nJwvIP.js";import"./index-D6Bduo9X.js";import"./index-BXjcdwrA.js";import"./Placeholder-CS3ZLXbM.js";import"./index-DIZtrkc5.js";const $=`# @ui5/webcomponents-react-charts

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
