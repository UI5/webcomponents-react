import{q as i,j as t,Q as l}from"./iframe-a0uMhM0K.js";import{useMDXComponents as p}from"./index-BsqnGYZV.js";import{M as u,a as h,n as f}from"./blocks-GWXZJNmq.js";import"./Tag-BaNCkHdE.js";import"./index-BfgNdjah.js";import"./CommandsAndQueries-Daj0tnDY.js";import"./copy-Ba79n2H6.js";import{T as d}from"./TableOfContent-D-FWXZzb.js";import{F as b}from"./Footer-UprvpWI8.js";import"./PageNotFound-C4t5kuHt.js";import{C}from"./index-Czpi2yVg.js";import{D}from"./BarChart.stories-PJtntZc2.js";import{D as y}from"./BulletChart.stories-BhNjxaK2.js";import{D as g}from"./ColumnChart.stories-Db2PEIfU.js";import{D as v}from"./ColumnChartWithTrend.stories-BH74tI0M.js";import{D as x}from"./ComposedChart.stories-Cwfvij1c.js";import{D as j}from"./DonutChart.stories-Bvg46w3K.js";import{D as w}from"./LineChart.stories-jU2_XgGe.js";import{D as R}from"./PieChart.stories-DTRBbKaW.js";import{D as I}from"./RadarChart.stories-DPSey_2Q.js";import{D as S}from"./RadialChart.stories-BzzZ7iRE.js";import{D as $}from"./ScatterChart.stories-5kt97q6b.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DnAoFJ5t.js";import"./sys-enter-2-DG20pJAR.js";import"./alert-CaXXBJy4.js";import"./Link-C9XRs14a.js";import"./index-BwlpwmJL.js";import"./index-1tRSjVgF.js";import"./index-CSZ4nu-Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-F25ehqhC.js";import"./addCustomCSSWithScoping-DssrUnNY.js";import"./index-BsmCDa7r.js";import"./index-CqObD5eZ.js";import"./index-C3E6FzVb.js";import"./index-Dk4guAK8.js";import"./Illustrations-Do7SV7fL.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-PmTLZAV0.js";import"./ScrollEnablement-BVy3cq7b.js";import"./animate-JylhYHXj.js";import"./AnimationMode-1j-Z4JtS.js";import"./slim-arrow-left-DC2bAjBe.js";import"./DemoProps-C2rPtYhz.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-E4uwCcbU.js";import"./ChartContainer--t_WIo5w.js";import"./index-CDAiDCq4.js";import"./useCancelAnimationFallback-DH1dX5Tg.js";import"./YAxisTicks-C-a_5xVJ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CFY9X1VN.js";import"./ChartDataLabel-CFWQxHDi.js";import"./useOnClickInternal-BxyHjokr.js";import"./react-content-loader.es-Cdz7Pxlm.js";import"./useIsRTL-9TsxZjtE.js";import"./useLongestYAxisLabel-CKeKBUxS.js";import"./ComposedChart-CjyTel5C.js";import"./Line-BYKXKiMz.js";import"./Scatter-B-LfEOhb.js";import"./index-DaH4jn_o.js";import"./index-BHokpEaP.js";import"./Placeholder-DD49SnMV.js";import"./index-CG2xLwB6.js";const E=`# @ui5/webcomponents-react-charts

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
