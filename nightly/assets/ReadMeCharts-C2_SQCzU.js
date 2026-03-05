import{q as i,j as t,Q as l}from"./iframe-D89K97gv.js";import{useMDXComponents as p}from"./index-BJvRQfhi.js";import{M as u,a as h,n as f}from"./blocks-Cy4BDnT1.js";import"./Tag-BMl9amXb.js";import"./index-CG_fwaJ_.js";import"./CommandsAndQueries-CkqpoGcY.js";import"./copy-BeHvABnn.js";import{T as d}from"./TableOfContent-Bl5qcHLc.js";import{F as b}from"./Footer-a85ddGr6.js";import"./PageNotFound-Btnag6Vx.js";import{C}from"./index-6RF6Vi1w.js";import{D}from"./BarChart.stories-B_KopK8S.js";import{D as y}from"./BulletChart.stories-DBNbsX5W.js";import{D as g}from"./ColumnChart.stories-CA8J37BH.js";import{D as v}from"./ColumnChartWithTrend.stories-D-emv5HD.js";import{D as x}from"./ComposedChart.stories-QxrrLNyz.js";import{D as j}from"./DonutChart.stories-Bm714Uwv.js";import{D as w}from"./LineChart.stories-D0iPq54b.js";import{D as R}from"./PieChart.stories-DdRhPa07.js";import{D as I}from"./RadarChart.stories-BFA1wBm3.js";import{D as S}from"./RadialChart.stories-BwXqXxwW.js";import{D as $}from"./ScatterChart.stories-kcr7cBkp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DxfKMTg6.js";import"./sys-enter-2-aIi16_BZ.js";import"./alert-CzEHD23R.js";import"./Link-vvC1wc11.js";import"./index-BFDU-uR3.js";import"./index-BmDAlwXN.js";import"./index-CSxOLZlI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JuHHWHgI.js";import"./addCustomCSSWithScoping-D0msxKTR.js";import"./index-CHwgMgjy.js";import"./index-CD-X_9j4.js";import"./index-_KpWx7_H.js";import"./index-D9Orgelb.js";import"./Illustrations-llDvpFiy.js";import"./i18n-defaults-C7ICj5-E.js";import"./Carousel-DXrpo3A5.js";import"./ScrollEnablement-B2bIFiiq.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C26Wu7O7.js";import"./slim-arrow-left-BDnMwCFz.js";import"./DemoProps-BKyG9ncl.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CI9RxwyI.js";import"./ChartContainer-BoC1bdYe.js";import"./index-Cra91enV.js";import"./useCancelAnimationFallback-CW4wmuLA.js";import"./YAxisTicks-DjrVGyeJ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ALxZ-lYW.js";import"./ChartDataLabel-BBIzJF28.js";import"./useOnClickInternal-BhN_4xBq.js";import"./react-content-loader.es-_X_5Haqf.js";import"./useIsRTL-cIjYlE45.js";import"./useLongestYAxisLabel-nWzWhXpz.js";import"./ComposedChart-Dfj7hRqm.js";import"./Line-CLLH9a8b.js";import"./Scatter-DriIJgGy.js";import"./index-CqMZKzHm.js";import"./index-RfVF7RZ5.js";import"./Placeholder-XTt386c4.js";import"./index-Diz3WCRZ.js";const E=`# @ui5/webcomponents-react-charts

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
