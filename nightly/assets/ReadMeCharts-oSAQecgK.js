import{r as i,j as t,T as l}from"./iframe-RmeQ8XGC.js";import{useMDXComponents as p}from"./index-kR0XEGhk.js";import{M as u,a as h,m as f}from"./blocks-DaxiJjGb.js";import"./Tag-SV0H5ODo.js";import"./index-1jGrAlxH.js";import{F as d}from"./CommandsAndQueries-C1TIWg_l.js";import"./copy-Bxjpqlrz.js";import{T as b}from"./TableOfContent-BD56OkoI.js";import{C}from"./index-nvRXdXRc.js";import{D}from"./BarChart.stories-C4qPR70o.js";import{D as y}from"./BulletChart.stories-Cyik8JdX.js";import{D as g}from"./ColumnChart.stories-D_2Pcduc.js";import{D as v}from"./ColumnChartWithTrend.stories-B1zEtvle.js";import{D as x}from"./ComposedChart.stories-TDjy0fVc.js";import{D as j}from"./DonutChart.stories-D9FDE2E6.js";import{D as w}from"./LineChart.stories-w1xlAb9J.js";import{D as R}from"./PieChart.stories-LH8bbRGs.js";import{D as I}from"./RadarChart.stories-CIqNI3Xy.js";import{D as S}from"./RadialChart.stories-Ct4Xl5g-.js";import{D as T}from"./ScatterChart.stories-DEehpF71.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BGE1sBpB.js";import"./sys-enter-2-CFWWj7rX.js";import"./alert-DOCQy2rj.js";import"./index-BIaOPhno.js";import"./index-CaXdH-JM.js";import"./index-Dg9UiDQJ.js";import"./Link-DiD1re6X.js";import"./index-P4hNb3E_.js";import"./index-BzAkCwZQ.js";import"./index-ICvStq6z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCSTig2E.js";import"./addCustomCSSWithScoping-D6LA06yL.js";import"./index-Dn-It_jb.js";import"./Carousel-DSkTVlXY.js";import"./ScrollEnablement-ZXEMw5No.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BempXm_a.js";import"./slim-arrow-left-Dft_WWw6.js";import"./DemoProps-DsNN9cT5.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-R2xIkqXF.js";import"./ChartContainer-pc198hTU.js";import"./index-B6z1BRDU.js";import"./useCancelAnimationFallback-BbO1DU5o.js";import"./YAxisTicks-BdQUidiS.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BWqYoHeA.js";import"./ChartDataLabel-C9ocJf9t.js";import"./useOnClickInternal-CRPf2q6G.js";import"./react-content-loader.es-vTx9dUET.js";import"./useIsRTL-BCtUW8tC.js";import"./useLongestYAxisLabel-CwcNVBih.js";import"./ComposedChart-MeVqkW1d.js";import"./Line-BCO9YQjF.js";import"./Scatter-CdgjwBMF.js";import"./index-DwaGLYgP.js";import"./index-BOtMqlK9.js";import"./Placeholder-BTLte3fX.js";import"./index-ufT4_IJM.js";const $=`# @ui5/webcomponents-react-charts

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
