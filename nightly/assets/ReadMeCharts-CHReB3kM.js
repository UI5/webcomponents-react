import{r as i,j as t,O as l}from"./iframe-DK_3t7HQ.js";import{useMDXComponents as p}from"./index-Bn4DIwe1.js";import{M as u,a as h,n as f}from"./blocks-BYCX_D4a.js";import"./Tag-CMm3ArFn.js";import"./index-DM6dIB46.js";import{F as d}from"./CommandsAndQueries-8GqG6vck.js";import"./copy-Cen_7za9.js";import{T as b}from"./TableOfContent-B9G4Qsdi.js";import{C}from"./index-CdTlq-AX.js";import{D}from"./BarChart.stories-CrtUjqE_.js";import{D as y}from"./BulletChart.stories-BHIAdeph.js";import{D as g}from"./ColumnChart.stories-DsfQNYYI.js";import{D as v}from"./ColumnChartWithTrend.stories-DnldwdQm.js";import{D as x}from"./ComposedChart.stories-Bmo4I0wD.js";import{D as j}from"./DonutChart.stories-MfyGXHEv.js";import{D as w}from"./LineChart.stories-B6uHhPZi.js";import{D as R}from"./PieChart.stories-B-WzZR41.js";import{D as I}from"./RadarChart.stories-BbCHYKtr.js";import{D as S}from"./RadialChart.stories-zObxIrod.js";import{D as $}from"./ScatterChart.stories-D8L_fVJ1.js";import"./preload-helper-PPVm8Dsz.js";import"./information-MEtG0nZR.js";import"./sys-enter-2-DcwCthWV.js";import"./alert-CP9vtKnc.js";import"./index-DcvukCsl.js";import"./index-W3t_MBGP.js";import"./index-BD65A0G0.js";import"./Link-s9SylKhD.js";import"./index-BLsgqlPC.js";import"./index-Bw6wQW8K.js";import"./index-BlpaDNQk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyNtnc-C.js";import"./addCustomCSSWithScoping-BS7bnaiL.js";import"./index-DGhVTpl9.js";import"./Carousel-BSBfHVtv.js";import"./ScrollEnablement-MqyRN0-M.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DONb2y27.js";import"./slim-arrow-left-CUYR6F5s.js";import"./DemoProps-C362hgFd.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B1Ka3SUC.js";import"./ChartContainer-CN8M1AGF.js";import"./index-CjVM0U5d.js";import"./useCancelAnimationFallback-qq-QP6w9.js";import"./YAxisTicks-BlRzyXLd.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BRPdu0Tf.js";import"./ChartDataLabel-BdL7Bhgk.js";import"./useOnClickInternal-D9PMyBbp.js";import"./react-content-loader.es-Da_28grq.js";import"./useIsRTL-9GnEdIyA.js";import"./useLongestYAxisLabel-BK1mZ9Zx.js";import"./ComposedChart-CB-SH72s.js";import"./Line-DC4flQs1.js";import"./Scatter-Kzw9SG9J.js";import"./index-CC2j2pyv.js";import"./index-BeUG81jD.js";import"./Placeholder-CWdJHyhT.js";import"./index-DTfpHoti.js";const E=`# @ui5/webcomponents-react-charts

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
