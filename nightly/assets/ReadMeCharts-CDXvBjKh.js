import{r as i,j as t,T as l}from"./iframe-sSOxzerW.js";import{useMDXComponents as p}from"./index-C4N772Ec.js";import{M as u,a as h,k as f}from"./blocks-DZ5JcJjQ.js";import"./Tag-Bf5UwcWO.js";import"./index-DoYi49fY.js";import{F as d}from"./CommandsAndQueries-DN1a2yy9.js";import"./copy-VA4auTr6.js";import{T as b}from"./TableOfContent-BphLRplv.js";import{C}from"./index-DAaPRiCP.js";import{D}from"./BarChart.stories-CLi6eNV6.js";import{D as y}from"./BulletChart.stories-BiWD3X5Q.js";import{D as g}from"./ColumnChart.stories-ib7buGUb.js";import{D as v}from"./ColumnChartWithTrend.stories-C7xE7wR_.js";import{D as x}from"./ComposedChart.stories-DLKKFdnv.js";import{D as j}from"./DonutChart.stories-CnOxHpv0.js";import{D as w}from"./LineChart.stories-DYMdCpVa.js";import{D as R}from"./PieChart.stories-Bsyuq5Vz.js";import{D as I}from"./RadarChart.stories-AGsXw8lK.js";import{D as S}from"./RadialChart.stories-0OKI84DR.js";import{D as T}from"./ScatterChart.stories-DpTACsIn.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D7Jek_j9.js";import"./sys-enter-2-CJf9FrQN.js";import"./alert-BmkkzoHl.js";import"./index-PB68rHIj.js";import"./index-BcOGuNSc.js";import"./index-CbHc7dVQ.js";import"./Link-DXd90h-X.js";import"./index-pczPksUh.js";import"./index-DhmKmBvV.js";import"./index-AsGnG6fc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-k9gqQhIN.js";import"./addCustomCSSWithScoping-8kQXqHvm.js";import"./index-KAoDxHkF.js";import"./Carousel-mIIuM2gR.js";import"./ScrollEnablement-CK3trYvC.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BrXOmtZ5.js";import"./slim-arrow-left-D9r4e_3E.js";import"./DemoProps-x1O_h1bI.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DHHgpLNW.js";import"./ChartContainer-BH4m8fDR.js";import"./index-BsaHFzm2.js";import"./useCancelAnimationFallback-DoWAZ5EH.js";import"./YAxisTicks-6NHciKop.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DKdsiX19.js";import"./ChartDataLabel-cgomEl1K.js";import"./useOnClickInternal-CdH5e2Pz.js";import"./react-content-loader.es-yP__UvLl.js";import"./useIsRTL-BVd8EzLl.js";import"./useLongestYAxisLabel-B3Xp_Ah2.js";import"./ComposedChart-DTYQLdKA.js";import"./Line-DbbT1BMD.js";import"./Scatter-CSULXWMd.js";import"./index-C1qbe-kH.js";import"./index-Bub5cSI4.js";import"./Placeholder-CoPhLB75.js";import"./index-Bbi79NK-.js";const $=`# @ui5/webcomponents-react-charts

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
