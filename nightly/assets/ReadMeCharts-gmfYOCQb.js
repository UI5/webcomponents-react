import{n as i,j as t,N as l}from"./iframe-QfBB5oxv.js";import{u as p,M as u,a as h,k as f}from"./blocks-BNoxk89Z.js";import"./Tag-jV4rQ7he.js";import"./index-CXwzMtEr.js";import"./CommandsAndQueries-CHXq-8GX.js";import"./copy-Ddev0qyd.js";import{T as d}from"./TableOfContent-F4sRBeye.js";import{F as b}from"./Footer-Djb8KmT2.js";import"./PageNotFound-BF3CKwDf.js";import{C}from"./index-DABxyWAf.js";import{D}from"./BarChart.stories-CCmI2jmM.js";import{D as y}from"./BulletChart.stories--eFzv64c.js";import{D as g}from"./ColumnChart.stories-D7fVWa4s.js";import{D as v}from"./ColumnChartWithTrend.stories-CAkDVPF6.js";import{D as x}from"./ComposedChart.stories-hdO_9nvm.js";import{D as j}from"./DonutChart.stories-CA3lM3Ym.js";import{D as w}from"./LineChart.stories-BEyXlfvJ.js";import{D as R}from"./PieChart.stories-Dvxr_4Rl.js";import{D as I}from"./RadarChart.stories-DR-qt1v6.js";import{D as S}from"./RadialChart.stories-CNzWWqGL.js";import{D as $}from"./ScatterChart.stories-BsdyKjB9.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DnhNkDB3.js";import"./sys-enter-2-BMzcK94M.js";import"./alert-Djbx4OhD.js";import"./Link-CjKrRSzJ.js";import"./index-CKPcWxBG.js";import"./index-qK3ZRsrU.js";import"./index-mR2WMj9r.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4b8nEvCn.js";import"./addCustomCSSWithScoping-BzEIPtCm.js";import"./index-BP6rOJzd.js";import"./index-CMW9Znni.js";import"./index-C23APlHe.js";import"./index-B0PZpUdZ.js";import"./Illustrations-B1Eex0pq.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BEx2yY6o.js";import"./ScrollEnablement-D9-XNTBn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-F5e9duxH.js";import"./slim-arrow-left-BbHd42yF.js";import"./DemoProps-qOHogF-i.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-UPVdOz4s.js";import"./ChartContainer-DGFIDlY_.js";import"./index-CEP4QNMA.js";import"./useCancelAnimationFallback-D6qrbfAz.js";import"./YAxisTicks-BAHwDAyf.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DwGOShRw.js";import"./ChartDataLabel-DqrIfGz1.js";import"./useOnClickInternal-DpndU4EM.js";import"./react-content-loader.es-C-18WN2p.js";import"./useIsRTL-BPTRgBT8.js";import"./useLongestYAxisLabel-BRGa5bAW.js";import"./ComposedChart-Cgc0mbV_.js";import"./Line-C5a6DOep.js";import"./Scatter-Bi8oKFJ2.js";import"./index-D7Raijxa.js";import"./index-BZCpN2wu.js";import"./Placeholder-CsV4Wu-n.js";import"./index-mzV3MM3S.js";const E=`# @ui5/webcomponents-react-charts

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
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function Gt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Gt as default};
