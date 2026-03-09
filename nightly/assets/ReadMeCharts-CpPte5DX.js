import{q as i,j as t,Q as l}from"./iframe-1ixiCrn4.js";import{useMDXComponents as p}from"./index-2ZsnEyB9.js";import{M as u,a as h,n as f}from"./blocks-CwvJzyWa.js";import"./Tag-DxuCzySC.js";import"./index-DCoPFbKG.js";import"./CommandsAndQueries-Bsuql65l.js";import"./copy-D9dip1OG.js";import{T as d}from"./TableOfContent-BapB0lYb.js";import{F as b}from"./Footer-BCWgdeK4.js";import"./PageNotFound-C5oFz4Y3.js";import{C}from"./index-BfGvCrHO.js";import{D}from"./BarChart.stories-_iLAcxId.js";import{D as y}from"./BulletChart.stories-CtkF8JNw.js";import{D as g}from"./ColumnChart.stories-CZDhKFce.js";import{D as v}from"./ColumnChartWithTrend.stories-CuwLwcU3.js";import{D as x}from"./ComposedChart.stories-9a9bG2SA.js";import{D as j}from"./DonutChart.stories-k9L8d17J.js";import{D as w}from"./LineChart.stories-B3FhLrBx.js";import{D as R}from"./PieChart.stories-BOHd6CbC.js";import{D as I}from"./RadarChart.stories-C8vdVBdP.js";import{D as S}from"./RadialChart.stories-BPXuJmub.js";import{D as $}from"./ScatterChart.stories-C66sYcPP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CNHKSbA7.js";import"./sys-enter-2-0xYCNe_8.js";import"./alert-tzZ5a9nx.js";import"./Link-342TA0WQ.js";import"./index-D3khTefu.js";import"./index-D-IU78TD.js";import"./index-DQdp7GQC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMCl2W9z.js";import"./addCustomCSSWithScoping-BlChbTB-.js";import"./index-hCYkbxY8.js";import"./index-CfOzkRmu.js";import"./index-DPL6_Akv.js";import"./index-Bwh9lIWA.js";import"./Illustrations-BCjcVikr.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-eFimFi8m.js";import"./ScrollEnablement-DX3vc3nf.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DSUlvJr8.js";import"./slim-arrow-left-BC5GQC_g.js";import"./DemoProps-CZFCjm29.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-FiGH6pY6.js";import"./ChartContainer-Bu4jgWgy.js";import"./index-Bw57cGbJ.js";import"./useCancelAnimationFallback-B_eGJ48q.js";import"./YAxisTicks-DdPIoPnz.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BGvF_lJa.js";import"./ChartDataLabel-BQgT2Ie7.js";import"./useOnClickInternal-pdIKUbDo.js";import"./react-content-loader.es-B38xdJkH.js";import"./useIsRTL-Dhvckhyy.js";import"./useLongestYAxisLabel-DOmpMqLP.js";import"./ComposedChart-7g4RLEy2.js";import"./Line-D75c7mSu.js";import"./Scatter-CYirinjM.js";import"./index-D-m7yq14.js";import"./index-Di1hMFtf.js";import"./Placeholder-GT5ONqDL.js";import"./index-Cw1ytRbH.js";const E=`# @ui5/webcomponents-react-charts

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
