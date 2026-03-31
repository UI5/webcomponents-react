import{n as i,j as t,N as l}from"./iframe-GXp7lrSQ.js";import{u as p,M as u,a as h,k as f}from"./blocks-XkJ722q3.js";import"./Tag-CUfffkkD.js";import"./index-D9hIm448.js";import"./CommandsAndQueries-CVcJVi5r.js";import"./copy-_WAqiJ1e.js";import{T as d}from"./TableOfContent-BLO4MxbM.js";import{F as b}from"./Footer-uVHBRSQb.js";import"./PageNotFound-VnOdSsgo.js";import{C}from"./index-J6v1zG7B.js";import{D}from"./BarChart.stories-CXyVW1xJ.js";import{D as y}from"./BulletChart.stories-C4aKXVij.js";import{D as g}from"./ColumnChart.stories-B5W75qOm.js";import{D as v}from"./ColumnChartWithTrend.stories-BOyDRhMs.js";import{D as x}from"./ComposedChart.stories-B6RPFd9S.js";import{D as j}from"./DonutChart.stories-BTKF4ZF1.js";import{D as w}from"./LineChart.stories-D_ohdVc3.js";import{D as R}from"./PieChart.stories-D-fztJut.js";import{D as I}from"./RadarChart.stories-BzgA_A7V.js";import{D as S}from"./RadialChart.stories-D-4fH32-.js";import{D as $}from"./ScatterChart.stories-DpWfpFom.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CwevoeOo.js";import"./sys-enter-2-BSdQUe02.js";import"./alert-Ds801M6U.js";import"./Link-B8HUwSLv.js";import"./index-BLkFX4jD.js";import"./index-C-99lkBL.js";import"./index-CrV5gfjE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHLtduuY.js";import"./addCustomCSSWithScoping-lRpYguTz.js";import"./index-CMKcbagv.js";import"./index-CmMI2aTL.js";import"./index-BXKqqHdE.js";import"./index-TceWecEs.js";import"./Illustrations-C-7wSXd8.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-Der92seb.js";import"./ScrollEnablement-BbZ7dfG4.js";import"./animate-JylhYHXj.js";import"./AnimationMode-By1XSApB.js";import"./slim-arrow-left-BgtEjWal.js";import"./DemoProps-DTtSE9kh.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-ks__4Fcs.js";import"./ChartContainer-CJ8CrEn8.js";import"./index-IufG6BAY.js";import"./useCancelAnimationFallback-XmYvcGjp.js";import"./YAxisTicks-EQ9_aigc.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B1Zn57cy.js";import"./ChartDataLabel-RUEZqwXE.js";import"./useOnClickInternal-YKX9zEaK.js";import"./react-content-loader.es-CgDKLbxw.js";import"./useIsRTL-BZHvydOv.js";import"./useLongestYAxisLabel-CoJVzDBy.js";import"./ComposedChart-DMP0bHXE.js";import"./Line-ClCii57E.js";import"./Scatter-CV_Sit5P.js";import"./index-Cwna6kD_.js";import"./index-CW9FSaDh.js";import"./Placeholder-DhI6zZ5m.js";import"./index-CY5TIbZg.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function Gt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Gt as default};
