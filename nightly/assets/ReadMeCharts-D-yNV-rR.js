import{r as i,j as t,T as l}from"./iframe-T7Wqg8UQ.js";import{useMDXComponents as p}from"./index-B1_Kr1qi.js";import{M as u,a as h,n as f}from"./blocks-AtAGVbf3.js";import"./Tag-gMzT9-kJ.js";import"./index-1-SdBrMb.js";import{F as d}from"./CommandsAndQueries-BErUSC1w.js";import"./copy-D9NRoizO.js";import{T as b}from"./TableOfContent-NE_Wj6NX.js";import{C}from"./index-DPB6C6VA.js";import{D}from"./BarChart.stories-BL1E7gwh.js";import{D as y}from"./BulletChart.stories-CvhszuoX.js";import{D as g}from"./ColumnChart.stories-QU5cNmUf.js";import{D as v}from"./ColumnChartWithTrend.stories-11mLaxK5.js";import{D as x}from"./ComposedChart.stories-BZ7xosL8.js";import{D as j}from"./DonutChart.stories-BRB2lxi9.js";import{D as w}from"./LineChart.stories-_dxuZhFT.js";import{D as R}from"./PieChart.stories-DVHqgCMD.js";import{D as I}from"./RadarChart.stories-Xz8Q5_8h.js";import{D as S}from"./RadialChart.stories-DkYLUkp-.js";import{D as T}from"./ScatterChart.stories-BpDrGpis.js";import"./preload-helper-PPVm8Dsz.js";import"./information-fYaYVBJG.js";import"./sys-enter-2-CqaPP6tK.js";import"./alert-DdeG0Okn.js";import"./index-Do-8N8-4.js";import"./index-CSyU4Rfq.js";import"./index-B0vEPx1d.js";import"./Link-CS0U2zW0.js";import"./index-CuClVFCS.js";import"./index-Cpwr9m7H.js";import"./index-C36GduEZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ctd-T3Yg.js";import"./addCustomCSSWithScoping-SxSnbZxk.js";import"./index-OjQEK6Sv.js";import"./Carousel-DiSxRzdh.js";import"./ScrollEnablement-CeUSVHqn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BGIB0rXk.js";import"./slim-arrow-left-CCjtyarL.js";import"./DemoProps-BfABZjoa.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-cBgSkRNP.js";import"./ChartContainer-S32euazf.js";import"./index-SY1E5rmV.js";import"./useCancelAnimationFallback-DSuGVSmK.js";import"./YAxisTicks-Bl4Ad7wu.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C8U1gmRK.js";import"./ChartDataLabel-Dq-EwKxq.js";import"./useOnClickInternal-blKMimF5.js";import"./react-content-loader.es-DCC_fTEZ.js";import"./useIsRTL-JoNKXFI1.js";import"./useLongestYAxisLabel-3qRqGUqB.js";import"./ComposedChart-DhDhBuId.js";import"./Line-BVIZO_Qj.js";import"./Scatter-YNKUmBD0.js";import"./index-D8QW5ob1.js";import"./index-BFovFabN.js";import"./Placeholder-D-Op4TlD.js";import"./index-CTKU25MB.js";const $=`# @ui5/webcomponents-react-charts

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
