import{q as i,j as t,Q as l}from"./iframe-BQ3gAAxx.js";import{useMDXComponents as p}from"./index-B1lAiT1q.js";import{M as u,a as h,n as f}from"./blocks-n6pvGDI_.js";import"./Tag-eC6SmQhc.js";import"./index-DjTon6of.js";import"./CommandsAndQueries-wegYoAqu.js";import"./copy-Da1BKYtz.js";import{T as d}from"./TableOfContent-ByjnoHjI.js";import{F as b}from"./Footer-wX_u0Ai_.js";import"./PageNotFound-CYbLq2oD.js";import{C}from"./index-CdBsyjsc.js";import{D}from"./BarChart.stories-By02mo5g.js";import{D as y}from"./BulletChart.stories-CZ8ALMPG.js";import{D as g}from"./ColumnChart.stories-BC-Iff8j.js";import{D as v}from"./ColumnChartWithTrend.stories-rm3z929w.js";import{D as x}from"./ComposedChart.stories-C5Ts4N8l.js";import{D as j}from"./DonutChart.stories-juoo8odc.js";import{D as w}from"./LineChart.stories-CVesIqCQ.js";import{D as R}from"./PieChart.stories-7AiiYIW6.js";import{D as I}from"./RadarChart.stories-l8Yv3UAO.js";import{D as S}from"./RadialChart.stories-Dplp1KtH.js";import{D as $}from"./ScatterChart.stories-BQ8JNyaW.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D7DVbQHJ.js";import"./sys-enter-2-QGEZX0U8.js";import"./alert-BvhbOdWs.js";import"./Link-Cgpq4OBn.js";import"./index-C1GISjTX.js";import"./index-C1cP6C82.js";import"./index-C8VczBe0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D1UPUp-J.js";import"./addCustomCSSWithScoping-KaZd0g7m.js";import"./index-BlPBwMrJ.js";import"./index-CLyjGvZV.js";import"./index-C6vnN5EE.js";import"./index-D6YjU4up.js";import"./Illustrations-YW4WoylE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-4wJYoz8r.js";import"./ScrollEnablement-D9U2LTzA.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C0PEowNt.js";import"./slim-arrow-left-D3yJdniB.js";import"./DemoProps-BE2euYG3.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-C4UcuEQN.js";import"./ChartContainer-CiX271CF.js";import"./index-B-bCcjPK.js";import"./useCancelAnimationFallback-Dpr7Zp8D.js";import"./YAxisTicks-C_nsbksq.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-5_QB6qpF.js";import"./ChartDataLabel-YK0GGK1H.js";import"./useOnClickInternal-DKo9Hoh5.js";import"./react-content-loader.es-BAtPyxxC.js";import"./useIsRTL-D-PuQ608.js";import"./useLongestYAxisLabel-NyIA0A8U.js";import"./ComposedChart-ZJIaATjI.js";import"./Line-CcfDB8aT.js";import"./Scatter-C29-yvmx.js";import"./index-BO6G0ajJ.js";import"./index--blZR_sN.js";import"./Placeholder-Bmb-ZIlH.js";import"./index-CctO-R0Q.js";const E=`# @ui5/webcomponents-react-charts

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
