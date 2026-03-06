import{q as i,j as t,Q as l}from"./iframe-geaynzT-.js";import{useMDXComponents as p}from"./index-Dy0P-MTk.js";import{M as u,a as h,n as f}from"./blocks-DvwiWHqk.js";import"./Tag-B3QRrnQ_.js";import"./index-D-nFJC4E.js";import"./CommandsAndQueries-B6i0zlBz.js";import"./copy-ww3KL2rX.js";import{T as d}from"./TableOfContent-p5b2KUMj.js";import{F as b}from"./Footer-BsbiOiC7.js";import"./PageNotFound-BfSR_Vk2.js";import{C}from"./index-djj150wz.js";import{D}from"./BarChart.stories-Dirh4Fjx.js";import{D as y}from"./BulletChart.stories-B3rzpVGE.js";import{D as g}from"./ColumnChart.stories-BvPJzf3L.js";import{D as v}from"./ColumnChartWithTrend.stories-ChR0eqcX.js";import{D as x}from"./ComposedChart.stories-BPdrYXEY.js";import{D as j}from"./DonutChart.stories-DcNUyRgU.js";import{D as w}from"./LineChart.stories-Bovzj92E.js";import{D as R}from"./PieChart.stories-BQEhFgb_.js";import{D as I}from"./RadarChart.stories-CjtbDX6d.js";import{D as S}from"./RadialChart.stories-DnsXNJFq.js";import{D as $}from"./ScatterChart.stories-D-ZisOpP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BPLaT9Ap.js";import"./sys-enter-2-BM-hyHpl.js";import"./alert-BbpVY6El.js";import"./Link-nEWS4oVx.js";import"./index-D5uUZfuG.js";import"./index-CG-HWMDU.js";import"./index-CKM0CrDr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-HivzyS7T.js";import"./addCustomCSSWithScoping-xbUSRjKw.js";import"./index-Bp_EOu-Q.js";import"./index-CTwiS7Jw.js";import"./index-sZJqmiwE.js";import"./index-_qPK30Mb.js";import"./Illustrations-Da51eylt.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BeJ8ONJ-.js";import"./ScrollEnablement-DPeWyNUe.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C7agwqmM.js";import"./slim-arrow-left-CSnitg4h.js";import"./DemoProps-_eiU5eXw.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BvOUMTSA.js";import"./ChartContainer-ColGpnni.js";import"./index-vaOvjXNl.js";import"./useCancelAnimationFallback-YxvOg_Ro.js";import"./YAxisTicks-DqAuGruV.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-1KDkJY1t.js";import"./ChartDataLabel-BNyzLjwt.js";import"./useOnClickInternal-DNOa01eK.js";import"./react-content-loader.es-BIYRft28.js";import"./useIsRTL-D19__XCT.js";import"./useLongestYAxisLabel-Op0cO6kA.js";import"./ComposedChart-Dsy3EAZy.js";import"./Line-BrkPEUK3.js";import"./Scatter-BtvN8x0n.js";import"./index-ANgMKfFv.js";import"./index-CeTuXCWA.js";import"./Placeholder-BeX8OkF0.js";import"./index-D104HpwR.js";const E=`# @ui5/webcomponents-react-charts

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
