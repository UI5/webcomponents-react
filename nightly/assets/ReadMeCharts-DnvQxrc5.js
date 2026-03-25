import{n as i,j as t,N as l}from"./iframe-aMG4Hi1W.js";import{useMDXComponents as p}from"./index-BxeVDhrM.js";import{M as u,a as h,n as f}from"./blocks-DBdj8k-3.js";import"./Tag-DjBNrtqu.js";import"./index-BneSHkIo.js";import"./CommandsAndQueries-BfziQu2M.js";import"./copy-WJgdbAvd.js";import{T as d}from"./TableOfContent-RUI6YfVk.js";import{F as b}from"./Footer-CaqpNArb.js";import"./PageNotFound-BtQ0dC4g.js";import{C}from"./index-qLmloh4F.js";import{D}from"./BarChart.stories-DZ667unq.js";import{D as y}from"./BulletChart.stories-CqBSR_vQ.js";import{D as g}from"./ColumnChart.stories-fdbrKaC-.js";import{D as v}from"./ColumnChartWithTrend.stories-xFIsi7N5.js";import{D as x}from"./ComposedChart.stories-YYJwlNVt.js";import{D as j}from"./DonutChart.stories-ztHsQB7v.js";import{D as w}from"./LineChart.stories-Dvnf08DB.js";import{D as R}from"./PieChart.stories-BMNvLg6M.js";import{D as I}from"./RadarChart.stories-oqFiw7wV.js";import{D as S}from"./RadialChart.stories-Cjjz1yBW.js";import{D as $}from"./ScatterChart.stories-DPLIqPAM.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CeS9aeh9.js";import"./sys-enter-2-qcEAkOuO.js";import"./alert-a4vfwAyT.js";import"./Link-CIXppVOK.js";import"./index-D79dGm1P.js";import"./index-CRZddsOj.js";import"./index-D40aHtue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NZCpAmvM.js";import"./addCustomCSSWithScoping-DZGBI863.js";import"./index-S-kDMFzJ.js";import"./index-D8GAgpXJ.js";import"./index-CkonQXRu.js";import"./index-BkkgvrV5.js";import"./Illustrations-Dkeiu4Tv.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-CQx2763v.js";import"./ScrollEnablement-CcG50b_d.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DMTX8hHK.js";import"./slim-arrow-left-DMsQ40Of.js";import"./DemoProps-2q-ryAta.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-uOwRHvwK.js";import"./ChartContainer-mn1FZHyb.js";import"./index-BZDIEYti.js";import"./useCancelAnimationFallback-4GpU1YnN.js";import"./YAxisTicks-hN2eGrdk.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CvU78n71.js";import"./ChartDataLabel-D71BE-Gr.js";import"./useOnClickInternal-D_8bNWiE.js";import"./react-content-loader.es-DeihSt9t.js";import"./useIsRTL-D2FLcBfN.js";import"./useLongestYAxisLabel-p_VsE4i_.js";import"./ComposedChart-0C3OQ3L6.js";import"./Line-DWXViz_I.js";import"./Scatter-rw4m3-MZ.js";import"./index-B0oFcuUE.js";import"./index-cR4wGu9D.js";import"./Placeholder-3xT4mKQz.js";import"./index-Blsp94V6.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),m=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const s=e.current;return s&&o.length&&(r.current=setInterval(()=>{a.current++,s.navigateTo(a.current%o.length)},5e3)),()=>{m()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{m()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function _t(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{_t as default};
