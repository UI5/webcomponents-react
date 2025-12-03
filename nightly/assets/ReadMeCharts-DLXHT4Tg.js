import{r as i,j as t,T as l}from"./iframe-CJRlzZgA.js";import{useMDXComponents as p}from"./index-CbUzkcD0.js";import{M as u,a as h,m as f}from"./blocks-QclREKVQ.js";import"./Tag-D6uzQqkN.js";import"./index-B3EVM4WW.js";import{F as d}from"./CommandsAndQueries-BJK9fmCd.js";import"./copy-Dm16cUhk.js";import{T as b}from"./TableOfContent-CbWMIbhM.js";import{C}from"./index-D9K-Nccj.js";import{D}from"./BarChart.stories-mJY7Y1O1.js";import{D as y}from"./BulletChart.stories-DL9Ez6pu.js";import{D as g}from"./ColumnChart.stories-DICoMSuG.js";import{D as v}from"./ColumnChartWithTrend.stories-C805oCEC.js";import{D as x}from"./ComposedChart.stories-DHXybki3.js";import{D as j}from"./DonutChart.stories-Dm9qrVPs.js";import{D as w}from"./LineChart.stories-B04Mm5sx.js";import{D as R}from"./PieChart.stories-C9Q2gS59.js";import{D as I}from"./RadarChart.stories-D8T--hvT.js";import{D as S}from"./RadialChart.stories-CkR9EtXF.js";import{D as T}from"./ScatterChart.stories-DgrZN21P.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CTfPsGYk.js";import"./sys-enter-2-DT64nekl.js";import"./alert-D_x5VnX_.js";import"./index-DLQSfTW2.js";import"./index-CEHRPvSv.js";import"./index-CgUHdFlG.js";import"./Link-0WAKzVuH.js";import"./index-DNJOtG7U.js";import"./index-B-KWFPaJ.js";import"./index-DBGTLlVz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ckhrx5tI.js";import"./addCustomCSSWithScoping-CXI5gvd5.js";import"./index-CEi9QmXA.js";import"./Carousel-D2q3ecfm.js";import"./ScrollEnablement-C7OtmXds.js";import"./animate-JylhYHXj.js";import"./AnimationMode-23W7ZZAF.js";import"./slim-arrow-left-BUAX36we.js";import"./DemoProps-CFifOcdW.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DvDmT7B8.js";import"./ChartContainer-BdzgQbLp.js";import"./index-C5HXwY5m.js";import"./useCancelAnimationFallback-D-86tJXe.js";import"./YAxisTicks-BLP9DIO4.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CW6RJZhD.js";import"./ChartDataLabel-oo-qRx1J.js";import"./useOnClickInternal-2N5-iO6H.js";import"./react-content-loader.es-DdobTEno.js";import"./useIsRTL-C7Tcv1Md.js";import"./useLongestYAxisLabel-17D6Zz33.js";import"./ComposedChart-DAVaXuiW.js";import"./Line-CaEcy7dF.js";import"./Scatter-MQiGtmYy.js";import"./index-DWYBJYTf.js";import"./index-DwGw6LeS.js";import"./Placeholder-XLNINhBL.js";import"./index-Dqn6bnxQ.js";const $=`# @ui5/webcomponents-react-charts

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
