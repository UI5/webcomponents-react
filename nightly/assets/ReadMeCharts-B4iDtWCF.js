import{r as i,j as t,T as l}from"./iframe-CGBVIl7z.js";import{useMDXComponents as p}from"./index-BD_J3XGh.js";import{M as u,a as h,n as f}from"./blocks-amwX2WGZ.js";import"./Tag-CKuoT6Wf.js";import"./index-Bflw6F-3.js";import{F as d}from"./CommandsAndQueries-C4N9Si-I.js";import"./copy-C7UfB3Pq.js";import{T as b}from"./TableOfContent-DbzcSDOZ.js";import{C}from"./index-DRfxA7BY.js";import{D}from"./BarChart.stories-BigeXZJ8.js";import{D as y}from"./BulletChart.stories-p4nJ_Nmy.js";import{D as g}from"./ColumnChart.stories-B-89brF2.js";import{D as v}from"./ColumnChartWithTrend.stories-DqFI2l8y.js";import{D as x}from"./ComposedChart.stories-CT7mJMFa.js";import{D as j}from"./DonutChart.stories-UoTF7Sef.js";import{D as w}from"./LineChart.stories-DYM_64Hw.js";import{D as R}from"./PieChart.stories-DKNOUlPa.js";import{D as I}from"./RadarChart.stories-BwVN_Ekk.js";import{D as S}from"./RadialChart.stories-2Chvo6-5.js";import{D as T}from"./ScatterChart.stories-BMvJaTjV.js";import"./preload-helper-PPVm8Dsz.js";import"./information-RMMgKPqE.js";import"./sys-enter-2-CjQpGHgC.js";import"./alert-B45RxjKS.js";import"./index-BpPbjuIA.js";import"./index-BSuCMsLZ.js";import"./index-CohLls_f.js";import"./Link-7Pc42Mkn.js";import"./index-DdaBmZIy.js";import"./index-739hgjkB.js";import"./index-DSjZIl8t.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bhku-quN.js";import"./addCustomCSSWithScoping-BVpL9dRN.js";import"./index-DBko667H.js";import"./Carousel-DvipEe_K.js";import"./ScrollEnablement--aZEG85r.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D0iZ_AlL.js";import"./slim-arrow-left-yxxrA9Ux.js";import"./DemoProps-BEHddAj4.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Bgodf8Cb.js";import"./ChartContainer-1fmeXJtk.js";import"./index-DMJbwVLL.js";import"./useCancelAnimationFallback-CyKdrasM.js";import"./YAxisTicks-DaLeFaQQ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D9gN49Rl.js";import"./ChartDataLabel-RpANYNWj.js";import"./useOnClickInternal-Bu8YbYcq.js";import"./react-content-loader.es-D6c0bnxe.js";import"./useIsRTL-BuSadHsH.js";import"./useLongestYAxisLabel-6UOIqCeY.js";import"./ComposedChart-DqPA6XWN.js";import"./Line-BMsKVSrk.js";import"./Scatter-BOfGBekA.js";import"./index-Nl-lcEcG.js";import"./index-CmkdELSV.js";import"./Placeholder-DBCfIx7g.js";import"./index-DhfXdzdE.js";const $=`# @ui5/webcomponents-react-charts

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
