import{r as i,j as t,T as l}from"./iframe-xM6TWZ2z.js";import{useMDXComponents as p}from"./index-itFp6RcL.js";import{M as u,a as h,m as f}from"./blocks-CPrCvPPD.js";import"./Tag-By3SowoB.js";import"./index-9AHy9ejx.js";import{F as d}from"./CommandsAndQueries-DU6Rn88_.js";import"./copy-uYDkz2OX.js";import{T as b}from"./TableOfContent-BLRz9hjD.js";import{C}from"./index-BXrQqxfN.js";import{D}from"./BarChart.stories-BoHTRQmC.js";import{D as y}from"./BulletChart.stories-BbZLSFWc.js";import{D as g}from"./ColumnChart.stories-COeu7NaM.js";import{D as v}from"./ColumnChartWithTrend.stories-CUF2LalE.js";import{D as x}from"./ComposedChart.stories-BqRc_9EM.js";import{D as j}from"./DonutChart.stories-Bhl4755z.js";import{D as w}from"./LineChart.stories-BMu83Z3u.js";import{D as R}from"./PieChart.stories-DcsCuvAB.js";import{D as I}from"./RadarChart.stories-BeOfYl90.js";import{D as S}from"./RadialChart.stories-CrkCAGUV.js";import{D as T}from"./ScatterChart.stories-B2BCrCGG.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BKDOtRK0.js";import"./sys-enter-2-CnIu4SDT.js";import"./alert-BSwF_aSo.js";import"./index-AzHYcBiG.js";import"./index-D8_xEbiF.js";import"./index-Dro0XmDs.js";import"./Link-BDcFUJ6P.js";import"./index-BDByza4Q.js";import"./index-B3SnxoaH.js";import"./index-Ce3vdOnG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BkjEqAjP.js";import"./addCustomCSSWithScoping-CN9Nv2gA.js";import"./index-D0vFHCq5.js";import"./Carousel-B3FXHHph.js";import"./ScrollEnablement-CzBIaYtg.js";import"./animate-JylhYHXj.js";import"./AnimationMode-NgHSQi4x.js";import"./slim-arrow-left-CK4Gkme-.js";import"./DemoProps-Cax4qRYp.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BFVOeWDU.js";import"./ChartContainer-DHIOIJUg.js";import"./index-AWueUsQI.js";import"./useCancelAnimationFallback-CrNRym0b.js";import"./YAxisTicks-LDRc03Id.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DsVuJPWj.js";import"./ChartDataLabel-Cf1CAeST.js";import"./useOnClickInternal-DLIYO7jO.js";import"./react-content-loader.es-VKtqsUfH.js";import"./useIsRTL-Tj0-8HEj.js";import"./useLongestYAxisLabel-B1Zz0euw.js";import"./ComposedChart-CR5SXFpr.js";import"./Line-BwHOpPns.js";import"./Scatter-DNp4c-oo.js";import"./index-BmFCAexc.js";import"./index-DII6Wqup.js";import"./Placeholder-C2o3VgXX.js";import"./index-DPCxObN8.js";const $=`# @ui5/webcomponents-react-charts

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
