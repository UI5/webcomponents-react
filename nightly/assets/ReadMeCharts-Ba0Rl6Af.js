import{r as i,j as t,T as l}from"./iframe-CqyMw63j.js";import{useMDXComponents as p}from"./index-GHxgs1Oh.js";import{M as u,a as h,k as f}from"./blocks-gNAN3wnS.js";import"./Tag-9sg0d6U8.js";import"./index-DZeMBOtb.js";import{F as d}from"./CommandsAndQueries-Ckqtj5q6.js";import"./copy-CygH_bff.js";import{T as b}from"./TableOfContent-CyJZKYaH.js";import{C}from"./index-g1HTUwTu.js";import{D}from"./BarChart.stories-DNwo2DCn.js";import{D as y}from"./BulletChart.stories-BVZ6m8wK.js";import{D as g}from"./ColumnChart.stories-D1RDMjRQ.js";import{D as v}from"./ColumnChartWithTrend.stories-NuNw-XKL.js";import{D as x}from"./ComposedChart.stories-B90vFgmA.js";import{D as j}from"./DonutChart.stories-cQ6EEBXw.js";import{D as w}from"./LineChart.stories-DaKd1q-e.js";import{D as R}from"./PieChart.stories-BiOjWebo.js";import{D as I}from"./RadarChart.stories-CDqeb1tE.js";import{D as S}from"./RadialChart.stories-B2X6P9hq.js";import{D as T}from"./ScatterChart.stories-De5bnQTk.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B-SB47kj.js";import"./sys-enter-2-8wJJb_fs.js";import"./alert-DS7w9_j5.js";import"./index-Ccu9AWNy.js";import"./index-CyG-uGBl.js";import"./index-CRtLMoP1.js";import"./Link-8hzPxLpd.js";import"./index-B8X3UXQy.js";import"./index-DqKKFvdB.js";import"./index-CEokL_Ra.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hBi7rm2H.js";import"./addCustomCSSWithScoping-C9ZUc-46.js";import"./index-fW-mpTRV.js";import"./Carousel-Bjp0N1YZ.js";import"./ScrollEnablement-BwuxTfsa.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DF6yXF1j.js";import"./slim-arrow-left-D3Hl3bgo.js";import"./DemoProps-DKVI6hP7.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-FpFFzoeI.js";import"./ChartContainer-DDKr-WvT.js";import"./index-uyWLtESg.js";import"./useCancelAnimationFallback-BgynlK_1.js";import"./YAxisTicks-B6dbYDj3.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BQOwAE6r.js";import"./ChartDataLabel-dZbhIqfR.js";import"./useOnClickInternal-D1QKNagT.js";import"./react-content-loader.es-DRhBXHr7.js";import"./useIsRTL-DGuc5LLn.js";import"./useLongestYAxisLabel-B_ElAV50.js";import"./ComposedChart-B6YRmfuw.js";import"./Line-RPglVJbD.js";import"./Scatter-DjxzbmVr.js";import"./index-BRPurLGF.js";import"./index-BiirklPk.js";import"./Placeholder-BVCw0hD1.js";import"./index-CFH112fk.js";const $=`# @ui5/webcomponents-react-charts

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
