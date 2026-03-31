import{n as i,j as t,N as l}from"./iframe-D2WvPMQO.js";import{u as p,M as u,a as h,k as f}from"./blocks-Cy8tSwuN.js";import"./Tag-77Zcvr-C.js";import"./index-iukRSAfG.js";import"./CommandsAndQueries-GHyhdZ5z.js";import"./copy-DEDrq7eG.js";import{T as d}from"./TableOfContent-BVPApRYH.js";import{F as b}from"./Footer-CcjLnWXZ.js";import"./PageNotFound--xUWQamC.js";import{C}from"./index-y-iiyTch.js";import{D}from"./BarChart.stories-DQmpjQNx.js";import{D as y}from"./BulletChart.stories-NSyThJAc.js";import{D as g}from"./ColumnChart.stories-DnDnYsUT.js";import{D as v}from"./ColumnChartWithTrend.stories-CX3eLF6Q.js";import{D as x}from"./ComposedChart.stories-CEHEzBJw.js";import{D as j}from"./DonutChart.stories-CcR1b3Kr.js";import{D as w}from"./LineChart.stories-BXP1Dfcr.js";import{D as R}from"./PieChart.stories-DvWF_MU2.js";import{D as I}from"./RadarChart.stories-BBJHpuSU.js";import{D as S}from"./RadialChart.stories-BbPtzhCS.js";import{D as $}from"./ScatterChart.stories-DNFcyb_A.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C8cZAxRB.js";import"./sys-enter-2-dY36Ay86.js";import"./alert-C9lTQ0KQ.js";import"./Link-B9O6M9m0.js";import"./index-D85ZyHtS.js";import"./index-BHdhu-GL.js";import"./index-PtvYek1_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BEnkyBc2.js";import"./addCustomCSSWithScoping-qrEX4tTM.js";import"./index-itXLTY8o.js";import"./index-CNWb7VVG.js";import"./index-35M5Bral.js";import"./index-CEhSDieG.js";import"./Illustrations-T5lVOB-y.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-B1k8ERrg.js";import"./ScrollEnablement-D_-WU9eX.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BCExZTNf.js";import"./slim-arrow-left-DZTJCEFz.js";import"./DemoProps-BRWhfuaI.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-DmQF0NMz.js";import"./ChartContainer-F8l5nBDI.js";import"./index-CHoH1lJm.js";import"./useCancelAnimationFallback-C3ryCsvp.js";import"./YAxisTicks-B60OZSr0.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CXaxtgFk.js";import"./ChartDataLabel-DJvB9rMG.js";import"./useOnClickInternal-BndPu6nc.js";import"./react-content-loader.es-D2jhQ-a4.js";import"./useIsRTL-DYwGEDjw.js";import"./useLongestYAxisLabel-00PT5-Wn.js";import"./ComposedChart-DAxyxJRQ.js";import"./Line-7qgv7nfH.js";import"./Scatter-BOebZawB.js";import"./index-6Hx1KN2R.js";import"./index-BBO1dGxQ.js";import"./Placeholder-U9n29wQy.js";import"./index-Bn5lBJY_.js";const E=`# @ui5/webcomponents-react-charts

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
