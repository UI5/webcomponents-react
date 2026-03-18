import{q as i,j as t,Q as l}from"./iframe-CFWpN4R7.js";import{useMDXComponents as p}from"./index-dB03iz0B.js";import{M as u,a as h,n as f}from"./blocks-Aj9mLxPA.js";import"./Tag-B06DXZI6.js";import"./index-BhKFh4UU.js";import"./CommandsAndQueries-CCwXwUid.js";import"./copy-DSqUQhHe.js";import{T as d}from"./TableOfContent-5EAtsXjY.js";import{F as b}from"./Footer-DJewOY_X.js";import"./PageNotFound-CLSfRNnq.js";import{C}from"./index-B4I2ClJG.js";import{D}from"./BarChart.stories-CNSjbOQc.js";import{D as y}from"./BulletChart.stories-CGF7KL-Z.js";import{D as g}from"./ColumnChart.stories-CijyEZr7.js";import{D as v}from"./ColumnChartWithTrend.stories-CxgeZFuf.js";import{D as x}from"./ComposedChart.stories-D6UiktYK.js";import{D as j}from"./DonutChart.stories-DlO0DPxC.js";import{D as w}from"./LineChart.stories-Dl03fvRE.js";import{D as R}from"./PieChart.stories-D0NrJux3.js";import{D as I}from"./RadarChart.stories-LqhxWeOe.js";import{D as S}from"./RadialChart.stories-ClyodPN8.js";import{D as $}from"./ScatterChart.stories-BKZ4BKXg.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CkAnn-lR.js";import"./sys-enter-2-D36-WSJV.js";import"./alert-CoDmVWPa.js";import"./Link-RyF9dh8t.js";import"./index-D83xFEsI.js";import"./index-4-t9AGVk.js";import"./index-DnsyYKyj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_Q3wyl1.js";import"./addCustomCSSWithScoping-CJGgSOK2.js";import"./index-lnQyu4TM.js";import"./index-CeR8RWqv.js";import"./index-nHUwJst8.js";import"./index-B803YP9c.js";import"./Illustrations-dv6stKlC.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-rkgAPKcz.js";import"./ScrollEnablement-CctUY57C.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BBQhYjMT.js";import"./slim-arrow-left-C6Ad6Jon.js";import"./DemoProps-CEOgY30d.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-0gGMXwvg.js";import"./ChartContainer-BqzRb8w_.js";import"./index-DBJSqui-.js";import"./useCancelAnimationFallback-BP39LrTs.js";import"./YAxisTicks-ia7-CB7c.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C9Ab4jkQ.js";import"./ChartDataLabel-C63CFqE1.js";import"./useOnClickInternal-gFi0bUFc.js";import"./react-content-loader.es-CKJbR_5M.js";import"./useIsRTL-CXZT-kLk.js";import"./useLongestYAxisLabel-KG-cceHb.js";import"./ComposedChart-CqhohyKj.js";import"./Line-BFLM4cso.js";import"./Scatter-BoC2OJh6.js";import"./index-CTUZCU-b.js";import"./index-B8uJCrWF.js";import"./Placeholder-BlHbIKku.js";import"./index-BKOQ5PNp.js";const E=`# @ui5/webcomponents-react-charts

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
