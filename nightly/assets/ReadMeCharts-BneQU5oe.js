import{r as i,j as t,T as l}from"./iframe-43wlDzrj.js";import{useMDXComponents as p}from"./index-XbeLC3PN.js";import{M as u,a as h,k as f}from"./blocks-VCr_TDgJ.js";import"./Tag-DvuRdu_J.js";import"./index-D_51MvSW.js";import{F as d}from"./CommandsAndQueries-BVePbTmS.js";import"./copy-CHCJaVsW.js";import{T as b}from"./TableOfContent-9wBzeoHq.js";import{C}from"./index-Bz1QVueC.js";import{D}from"./BarChart.stories-CL7b6uCu.js";import{D as y}from"./BulletChart.stories-B00kfLAA.js";import{D as g}from"./ColumnChart.stories-JYRxYBOr.js";import{D as v}from"./ColumnChartWithTrend.stories-D92cfTS9.js";import{D as x}from"./ComposedChart.stories-c7ASqfnD.js";import{D as j}from"./DonutChart.stories-9E3tSPvs.js";import{D as w}from"./LineChart.stories-DsvdXucp.js";import{D as R}from"./PieChart.stories-DLxpt6Nw.js";import{D as I}from"./RadarChart.stories-CxkiazjN.js";import{D as S}from"./RadialChart.stories-BVpdx1KW.js";import{D as T}from"./ScatterChart.stories-CqaCOREO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CaFqdV1q.js";import"./sys-enter-2-C8G6jLKW.js";import"./alert-Id5Wcp3M.js";import"./index-CeIthXDN.js";import"./index-NATKJxhC.js";import"./index-CYHyRuCO.js";import"./Link-N85W-l5g.js";import"./addCustomCSSWithScoping-iHDWQtL_.js";import"./index-DHTRveDi.js";import"./index-C_V3uMP5.js";import"./index-Cx3qav0q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D888T4vP.js";import"./index-CNoVY_XQ.js";import"./Carousel-Fxxocz6t.js";import"./ScrollEnablement-Cm1ZvOJx.js";import"./animate-JylhYHXj.js";import"./AnimationMode-pKT_3E8r.js";import"./slim-arrow-left-Ddv_lJ80.js";import"./DemoProps-B-0gs_zw.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DBgwlYr8.js";import"./ChartContainer-BXcgQ9dn.js";import"./index-BzUhYjna.js";import"./useCancelAnimationFallback-Bi7nRotF.js";import"./YAxisTicks-K_od8jgg.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-uLwXIywP.js";import"./ChartDataLabel-CoQ0UxYA.js";import"./useOnClickInternal-s0LY2DEk.js";import"./react-content-loader.es-BluIYI3p.js";import"./useIsRTL-DZbwhoX7.js";import"./useLongestYAxisLabel-BwtpHNe-.js";import"./ComposedChart-ComGHGZG.js";import"./Line-C89ZG6kJ.js";import"./Scatter-pP8QOrGd.js";import"./index-D4krKrrT.js";import"./index-BXIXhO3i.js";import"./Placeholder-BVwXEgIU.js";import"./index-mkjvpH5p.js";const $=`# @ui5/webcomponents-react-charts

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
