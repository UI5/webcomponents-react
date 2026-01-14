import{r as i,j as t,T as l}from"./iframe-B1b_brho.js";import{useMDXComponents as p}from"./index-D7Qzgic5.js";import{M as u,a as h,n as f}from"./blocks-CVoG47OJ.js";import"./Tag-Ch3HOxAY.js";import"./index-KKxhZSNI.js";import{F as d}from"./CommandsAndQueries-CtGN4dkM.js";import"./copy-Dph3WiPG.js";import{T as b}from"./TableOfContent-DsWGhJxF.js";import{C}from"./index-BEuqRAR6.js";import{D}from"./BarChart.stories-SkFhCE7x.js";import{D as y}from"./BulletChart.stories-Ba4NYnc2.js";import{D as g}from"./ColumnChart.stories-BL6eiMSl.js";import{D as v}from"./ColumnChartWithTrend.stories-Bqhjc9fh.js";import{D as x}from"./ComposedChart.stories-CQrudAJG.js";import{D as j}from"./DonutChart.stories-YJPSPz-j.js";import{D as w}from"./LineChart.stories-CbfDaIt9.js";import{D as R}from"./PieChart.stories-b--uHtRn.js";import{D as I}from"./RadarChart.stories-CxIUAaXd.js";import{D as S}from"./RadialChart.stories-BdwCAadr.js";import{D as T}from"./ScatterChart.stories-BnEWoBRS.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cn-hRts7.js";import"./sys-enter-2-dderIbO6.js";import"./alert-Bjr3m2l0.js";import"./index-D5FuCmER.js";import"./index-BVeNd2GI.js";import"./index-8EjJ8GJV.js";import"./Link-Pv2BqkKv.js";import"./index-Bk9hFp20.js";import"./index-h6jImvMY.js";import"./index-8w0MsWgV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CC0Swz4-.js";import"./addCustomCSSWithScoping-Dg_rT4l9.js";import"./index-Dk0QMB33.js";import"./Carousel-BdXox6tN.js";import"./ScrollEnablement-Ci1uix4q.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CBHDB-90.js";import"./slim-arrow-left-4dZ-BWog.js";import"./DemoProps-BGt0rp9p.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BDwF1LXw.js";import"./ChartContainer-DlzxOCWh.js";import"./index-MTq0gWz9.js";import"./useCancelAnimationFallback-D1xmD_5D.js";import"./YAxisTicks-B1TinTXl.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DtPkdbYN.js";import"./ChartDataLabel-BLbkao-I.js";import"./useOnClickInternal-0WA7uZvt.js";import"./react-content-loader.es-ByYtXiuS.js";import"./useIsRTL-BBS2P8Pi.js";import"./useLongestYAxisLabel-CMmrOz4C.js";import"./ComposedChart-B8TFCfqJ.js";import"./Line-DfFKRl5X.js";import"./Scatter-C-QFMcaq.js";import"./index-CTwX9kMW.js";import"./index-wgK86RMz.js";import"./Placeholder-Bgsm24rx.js";import"./index-CZ8X7tvc.js";const $=`# @ui5/webcomponents-react-charts

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
