import{r as i,j as t,O as l}from"./iframe-DHpTrIAy.js";import{useMDXComponents as p}from"./index-BNdd_DZc.js";import{M as u,a as h,n as f}from"./blocks-81TV0E2-.js";import"./Tag-BMggxcvS.js";import"./index-o6k9VRwd.js";import{F as d}from"./CommandsAndQueries-D5kPRnn1.js";import"./copy-CUNi2x4z.js";import{T as b}from"./TableOfContent-BwEuKDvH.js";import{C}from"./index-CyqGnd2T.js";import{D}from"./BarChart.stories-DALVXsHl.js";import{D as y}from"./BulletChart.stories-L5a4h3dI.js";import{D as g}from"./ColumnChart.stories-Bh7v4Xsj.js";import{D as v}from"./ColumnChartWithTrend.stories-FB4biMKx.js";import{D as x}from"./ComposedChart.stories-BKukl6l8.js";import{D as j}from"./DonutChart.stories-DsiZ6AQV.js";import{D as w}from"./LineChart.stories-B9C1NRWQ.js";import{D as R}from"./PieChart.stories-XrEpY496.js";import{D as I}from"./RadarChart.stories-9mhfEWAb.js";import{D as S}from"./RadialChart.stories-BBbDpnqW.js";import{D as $}from"./ScatterChart.stories-BVbXs3xT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D34aykIE.js";import"./sys-enter-2-ELzebk4o.js";import"./alert-8s8s7RYv.js";import"./index-w0GUVkMu.js";import"./index-DA4wHaXp.js";import"./index-DbNixw4c.js";import"./Link-DUpBHPtC.js";import"./index-DpF6uZ0K.js";import"./index-C40hnbsn.js";import"./index-CAXkJF_S.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DrKfdXs7.js";import"./addCustomCSSWithScoping-CHvNzWcZ.js";import"./index-rxRuTrVR.js";import"./Carousel-CB0OtTZN.js";import"./ScrollEnablement-B1igU_IO.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BJ8uLKs0.js";import"./slim-arrow-left-Dk30MC2O.js";import"./DemoProps-B42k-LVi.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DVTsCIB6.js";import"./ChartContainer-CHjhM-VK.js";import"./index-BChvanZZ.js";import"./useCancelAnimationFallback-DuVoQp0M.js";import"./YAxisTicks-7zEG8t_0.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CcMkMW0f.js";import"./ChartDataLabel-BI2sqRuI.js";import"./useOnClickInternal-CxXOLWxS.js";import"./react-content-loader.es-CLAqOMDv.js";import"./useIsRTL-CxN0R0T5.js";import"./useLongestYAxisLabel-Bfc0lK2F.js";import"./ComposedChart-B0dLToMd.js";import"./Line-34F1lDew.js";import"./Scatter-0GtVGqb8.js";import"./index-ovBI6VEV.js";import"./index-Ct45wl2b.js";import"./Placeholder-OPsbKh93.js";import"./index-BeqWKLtA.js";const E=`# @ui5/webcomponents-react-charts

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
