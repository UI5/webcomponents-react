import{r as i,j as t,T as l}from"./iframe-CDzsgyAV.js";import{useMDXComponents as p}from"./index-DP2UBTat.js";import{M as u,a as h,m as f}from"./blocks-CJQxsMoI.js";import"./Tag-CH-8xgRY.js";import"./index-B8A9WhwY.js";import{F as d}from"./CommandsAndQueries-CpE7A47V.js";import"./copy-DpKoQtQP.js";import{T as b}from"./TableOfContent-DQmVPUjd.js";import{C}from"./index-B2nmpbDT.js";import{D}from"./BarChart.stories-USkuGUF6.js";import{D as y}from"./BulletChart.stories-WbRL4W5i.js";import{D as g}from"./ColumnChart.stories-BvEt0MG8.js";import{D as v}from"./ColumnChartWithTrend.stories-D4FEa_uJ.js";import{D as x}from"./ComposedChart.stories-1OOkHjrc.js";import{D as j}from"./DonutChart.stories-VCwwYfvM.js";import{D as w}from"./LineChart.stories-cGTcdHul.js";import{D as R}from"./PieChart.stories-DF5_wRIB.js";import{D as I}from"./RadarChart.stories-DjGW4_Lo.js";import{D as S}from"./RadialChart.stories-DxnYwEQZ.js";import{D as T}from"./ScatterChart.stories-idmgXD0p.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DHwZAzkU.js";import"./sys-enter-2-DVWP7zgo.js";import"./alert-Fp8ziM7f.js";import"./index-CLSChxqE.js";import"./index-C2LW5088.js";import"./index-2og1ClCO.js";import"./Link-Dp8FrNqY.js";import"./index-Df65psIj.js";import"./index-CiXhxUFY.js";import"./index-BToOU55N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_XXs48A.js";import"./addCustomCSSWithScoping-B27SJBwy.js";import"./index-spzGnsRF.js";import"./Carousel-o8J9omKL.js";import"./ScrollEnablement-BI3MOl7l.js";import"./animate-JylhYHXj.js";import"./AnimationMode-gVl6iLBc.js";import"./slim-arrow-left-CPyNxsub.js";import"./DemoProps-lojaVwiz.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BGOu4E4Z.js";import"./ChartContainer-CXa_q6mg.js";import"./index-DnHq6C4h.js";import"./useCancelAnimationFallback-1woPOnFz.js";import"./YAxisTicks-Df9uF3qZ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DMSQT7yy.js";import"./ChartDataLabel-JYv65-9k.js";import"./useOnClickInternal-Cgc7S2oY.js";import"./react-content-loader.es-C0MY_q9w.js";import"./useIsRTL-Do2kY7uP.js";import"./useLongestYAxisLabel-vG-mknIJ.js";import"./ComposedChart-D2afvzoC.js";import"./Line-DoW_Tm65.js";import"./Scatter-C4bt2RSC.js";import"./index-DQ2cTz01.js";import"./index-Dl1UktGh.js";import"./Placeholder-CChkhVkD.js";import"./index-098Bi_qX.js";const $=`# @ui5/webcomponents-react-charts

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
