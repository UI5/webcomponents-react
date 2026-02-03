import{r as i,j as t,O as l}from"./iframe-CmEyKRpD.js";import{useMDXComponents as p}from"./index-BFnFrbBZ.js";import{M as u,a as h,n as f}from"./blocks-DsGvGcEm.js";import"./Tag-mVH7vrSv.js";import"./index-DfQFYAIc.js";import{F as d}from"./CommandsAndQueries-D0beJAEb.js";import"./copy-BKqOupip.js";import{T as b}from"./TableOfContent-BxBIlvnm.js";import{C}from"./index-PNCJK1eH.js";import{D}from"./BarChart.stories-Ct-_x_Uw.js";import{D as y}from"./BulletChart.stories-miiwvszk.js";import{D as g}from"./ColumnChart.stories-Bkynnc4U.js";import{D as v}from"./ColumnChartWithTrend.stories-Bj3CFDX3.js";import{D as x}from"./ComposedChart.stories-v0eDg0FY.js";import{D as j}from"./DonutChart.stories-BplO2wuN.js";import{D as w}from"./LineChart.stories-B96rHAzu.js";import{D as R}from"./PieChart.stories-f8Lu-kk8.js";import{D as I}from"./RadarChart.stories-ChEThFuu.js";import{D as S}from"./RadialChart.stories-BKerXpWR.js";import{D as $}from"./ScatterChart.stories-BnInZhbM.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Dw0vaUoh.js";import"./sys-enter-2-BCiCiomL.js";import"./alert-ClWdEWiH.js";import"./index-BzwroZCy.js";import"./index-Cd1X9zdd.js";import"./index-CSRfU7vi.js";import"./Link-D1koUNpv.js";import"./index-BlD9QPif.js";import"./index-DbVfD_Wp.js";import"./index-dQ_ejieb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-eGz8eTqY.js";import"./addCustomCSSWithScoping-DZlJgGLS.js";import"./index-DEFXD6K8.js";import"./Carousel-CgxKhVPz.js";import"./ScrollEnablement-Dl5z94x_.js";import"./animate-JylhYHXj.js";import"./AnimationMode-0zjRJYus.js";import"./slim-arrow-left-a6O3bMAg.js";import"./DemoProps-neIeUdmO.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CbLMCGXI.js";import"./ChartContainer-BKTzuDn9.js";import"./index-DAcFrEXC.js";import"./useCancelAnimationFallback-CyyFJD9R.js";import"./YAxisTicks-CYCRsCLR.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BIvLJfQa.js";import"./ChartDataLabel-CyxB6QmX.js";import"./useOnClickInternal-Dm_xlJYw.js";import"./react-content-loader.es-hHUZW94B.js";import"./useIsRTL-wTt9rp2-.js";import"./useLongestYAxisLabel-CHmMiyGa.js";import"./ComposedChart-DDk04ttw.js";import"./Line-DPpB4sII.js";import"./Scatter-Bfy0marF.js";import"./index-DuPpMw1k.js";import"./index-CNb8dqb2.js";import"./Placeholder-BRz3rUMJ.js";import"./index-CxJ2y6Ya.js";const E=`# @ui5/webcomponents-react-charts

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
`,t.jsx(b,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
