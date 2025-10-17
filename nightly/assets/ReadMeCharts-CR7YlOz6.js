import{r as i,j as t,T as l}from"./iframe-sx-xxOBR.js";import{useMDXComponents as p}from"./index-BuQKvIRW.js";import{M as u,a as h,k as f}from"./blocks-aDd-3g3c.js";import"./Tag-CA4Gam3K.js";import"./index-Dp445doz.js";import{F as d}from"./CommandsAndQueries-kGwhyxXS.js";import"./copy-XBbKngNP.js";import{T as b}from"./TableOfContent-CU3p1ulK.js";import{C}from"./index-Ck4ymsVs.js";import{D}from"./BarChart.stories-CnGthNU6.js";import{D as y}from"./BulletChart.stories-Dt4tlkHj.js";import{D as g}from"./ColumnChart.stories-CqkadjrP.js";import{D as v}from"./ColumnChartWithTrend.stories-Ce1wPE9p.js";import{D as x}from"./ComposedChart.stories-w_NkuxfS.js";import{D as j}from"./DonutChart.stories-BlgVx6CD.js";import{D as w}from"./LineChart.stories-CHfy3K9y.js";import{D as R}from"./PieChart.stories-CeLHkNt3.js";import{D as I}from"./RadarChart.stories-C842BfCE.js";import{D as S}from"./RadialChart.stories-D0aWK44e.js";import{D as T}from"./ScatterChart.stories-QDjG5bbE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C7RaeOmw.js";import"./sys-enter-2-CEfOZp2B.js";import"./alert-DrhbDEmw.js";import"./index-DWZ78BHI.js";import"./index-C5D1K9-k.js";import"./index-DWVCty5U.js";import"./Link-Bcw7GIzc.js";import"./index-CHQv5ZFl.js";import"./index-CHIAWjx6.js";import"./index-CGT84HkW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-PUGMtL6z.js";import"./addCustomCSSWithScoping-ByQ6RofR.js";import"./index-FBk0AP6g.js";import"./Carousel-dIpotxky.js";import"./ScrollEnablement-C51h3RWn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BiWT3O-H.js";import"./slim-arrow-left-DuxPGXiI.js";import"./DemoProps-CgsVMouG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C5gSLgwP.js";import"./ChartContainer-DS7vVVQB.js";import"./index-eIt60uOw.js";import"./useCancelAnimationFallback-7uoxA-Tn.js";import"./YAxisTicks-BDcr1pyO.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CAsUkq34.js";import"./ChartDataLabel-COoOGhV1.js";import"./useOnClickInternal-BP1zFWqg.js";import"./react-content-loader.es-Bnk1R8Uc.js";import"./useIsRTL-CV_tHasf.js";import"./useLongestYAxisLabel-C6hoTkuE.js";import"./ComposedChart-BWT5ap5J.js";import"./Line-Cu9vR8f8.js";import"./Scatter-D-0Had6R.js";import"./index-CoWdE8dF.js";import"./index-C7Z7L-kp.js";import"./Placeholder-BMFRX-fN.js";import"./index-u7XJGPGy.js";const $=`# @ui5/webcomponents-react-charts

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
