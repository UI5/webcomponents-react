import{r as i,j as t,O as l}from"./iframe-oB-4R5Rt.js";import{useMDXComponents as p}from"./index-CPM_KuJ1.js";import{M as u,a as h,n as f}from"./blocks-BSJ2p1aB.js";import"./Tag-D-nP8Atk.js";import"./index-D9a9y2w1.js";import{F as d}from"./CommandsAndQueries-V7DYmci2.js";import"./copy-BEsfMMdz.js";import{T as b}from"./TableOfContent-BkN1VTUA.js";import{C}from"./index-Cpv0hfiA.js";import{D}from"./BarChart.stories-C18PIg0q.js";import{D as y}from"./BulletChart.stories-x5YCGrEr.js";import{D as g}from"./ColumnChart.stories-KSW8xuYY.js";import{D as v}from"./ColumnChartWithTrend.stories-1uBlGq1q.js";import{D as x}from"./ComposedChart.stories-SH9BrQl4.js";import{D as j}from"./DonutChart.stories-C7K3AAGM.js";import{D as w}from"./LineChart.stories-BHmpZW5f.js";import{D as R}from"./PieChart.stories-8cSoYU8L.js";import{D as I}from"./RadarChart.stories-8vkmhK98.js";import{D as S}from"./RadialChart.stories-DsFhlQjB.js";import{D as $}from"./ScatterChart.stories-DLew-2w5.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BRyOdl2D.js";import"./sys-enter-2-DyCH1cMA.js";import"./alert-BVT2hG_8.js";import"./index-BgFkqkoM.js";import"./index-ByTtsog6.js";import"./index-QtLlbt_o.js";import"./Link-DOQS5UBs.js";import"./index-CTKLJSsf.js";import"./index-DzeBy8FO.js";import"./index-CQQbQqNg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D1pBRLIk.js";import"./addCustomCSSWithScoping-Bfd00zUa.js";import"./index-BRbXVYQh.js";import"./Carousel-BL8NBDF_.js";import"./ScrollEnablement-oY_T1yvo.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BOiRH45V.js";import"./slim-arrow-left-DDNh0Lee.js";import"./DemoProps-DtAd7jem.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DAzbETZc.js";import"./ChartContainer-PAIGuG3l.js";import"./index-Crwyz8ZA.js";import"./useCancelAnimationFallback-BhcmutSz.js";import"./YAxisTicks-CM8eQiba.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BxZoBcht.js";import"./ChartDataLabel-IwWcK8lo.js";import"./useOnClickInternal-QCplTK4S.js";import"./react-content-loader.es-DSmcDi41.js";import"./useIsRTL-C-6qlPxf.js";import"./useLongestYAxisLabel-Dh3gvR_H.js";import"./ComposedChart-Du4X2pwc.js";import"./Line-B5OgHyre.js";import"./Scatter-eXCkAaQB.js";import"./index-DTUT3KmI.js";import"./index-P1rjuZ_z.js";import"./Placeholder-Bc4WYQZC.js";import"./index-B4Yk76U0.js";const E=`# @ui5/webcomponents-react-charts

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
