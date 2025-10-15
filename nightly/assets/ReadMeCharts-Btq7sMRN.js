import{r as i,j as t,T as l}from"./iframe-Dpln3x91.js";import{useMDXComponents as p}from"./index-BwM4zX9M.js";import{M as u,a as h,k as f}from"./blocks-BU-hwsss.js";import"./Tag-CuuYxwWF.js";import"./index-gZoyk-EE.js";import{F as d}from"./CommandsAndQueries-D8ZM_J5V.js";import"./copy-BmZL0gFG.js";import{T as b}from"./TableOfContent-BGktvtZs.js";import{C}from"./index-CWqMJ0ii.js";import{D}from"./BarChart.stories-BmJ6JjMO.js";import{D as y}from"./BulletChart.stories-TVW5PaNB.js";import{D as g}from"./ColumnChart.stories-BiyRQxHh.js";import{D as v}from"./ColumnChartWithTrend.stories-CGMPsIoc.js";import{D as x}from"./ComposedChart.stories-ghWhDpGJ.js";import{D as j}from"./DonutChart.stories-CrZuLQrn.js";import{D as w}from"./LineChart.stories-kBXGTN53.js";import{D as R}from"./PieChart.stories-CQtugR87.js";import{D as I}from"./RadarChart.stories-BEVKHeSM.js";import{D as S}from"./RadialChart.stories-Cp-jeaHF.js";import{D as T}from"./ScatterChart.stories-CY8U0xv0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BNg_xE8V.js";import"./sys-enter-2-CRey8tmC.js";import"./alert-DebHUSqO.js";import"./index-C_G040s9.js";import"./index-R5iFeOqc.js";import"./index-B-tiWui7.js";import"./Link-B2EfPk0H.js";import"./index-BnwzWoqt.js";import"./index-BC7bHNAY.js";import"./index-C7xVtjbt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl1L_0sw.js";import"./addCustomCSSWithScoping-BEgX107E.js";import"./index-C9IWhIjk.js";import"./Carousel-vZpUELNe.js";import"./ScrollEnablement-DSS0lIGV.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DDAbP4dj.js";import"./slim-arrow-left-xYiEhFMw.js";import"./DemoProps-DjufS6aa.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-No0Z0N9_.js";import"./ChartContainer-BSTYqkIw.js";import"./index-DZSYYhge.js";import"./useCancelAnimationFallback-DTvQn6mR.js";import"./YAxisTicks-C2SUXxYB.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Cc6hS45z.js";import"./ChartDataLabel-BZnRm6Bj.js";import"./useOnClickInternal-DzgJVcCg.js";import"./react-content-loader.es-C15v3fgt.js";import"./useIsRTL-D7wro6Bb.js";import"./useLongestYAxisLabel-DiitEi8a.js";import"./ComposedChart-M2p8pHGw.js";import"./Line-CAbmvtV4.js";import"./Scatter-ClbbD0nU.js";import"./index-Cg1f3cta.js";import"./index-DPysozN-.js";import"./Placeholder-DCQjReHy.js";import"./index-S3x9Z4g8.js";const $=`# @ui5/webcomponents-react-charts

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
