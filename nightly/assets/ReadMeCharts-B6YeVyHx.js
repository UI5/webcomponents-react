import{r as i,j as t,T as l}from"./iframe-Xz6qaemo.js";import{useMDXComponents as p}from"./index-BLh1nTrf.js";import{M as u,a as h,m as f}from"./blocks-_9vvjoio.js";import"./Tag-B2Pydg-J.js";import"./index-_ZnAwLWJ.js";import{F as d}from"./CommandsAndQueries-oG0MSLdr.js";import"./copy-de1br5ux.js";import{T as b}from"./TableOfContent-CERgj7Ur.js";import{C}from"./index-DOJe6Spt.js";import{D}from"./BarChart.stories-DXI-553w.js";import{D as y}from"./BulletChart.stories-6ZPJ_mBh.js";import{D as g}from"./ColumnChart.stories-BSJ3Eg_r.js";import{D as v}from"./ColumnChartWithTrend.stories-CxLjdNrQ.js";import{D as x}from"./ComposedChart.stories-CWyW4Sue.js";import{D as j}from"./DonutChart.stories-CX43O41o.js";import{D as w}from"./LineChart.stories-HZZWRFZw.js";import{D as R}from"./PieChart.stories-CM5SLGoa.js";import{D as I}from"./RadarChart.stories-DIihRQQS.js";import{D as S}from"./RadialChart.stories-TxjnRHYB.js";import{D as T}from"./ScatterChart.stories-BqE0BgzE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-UOioa2-U.js";import"./sys-enter-2-03pme12N.js";import"./alert-BPtSnw9a.js";import"./index-CnWkVA6r.js";import"./index-AGYmHzMg.js";import"./index-CxA_57ir.js";import"./Link-H0aejI1H.js";import"./index-DlKRlgNQ.js";import"./index-CDFp-rVG.js";import"./index-B7c7-SiX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2LdFPij.js";import"./addCustomCSSWithScoping-DGLLVgG9.js";import"./index-BtaCUQLs.js";import"./Carousel-kTnXDmuX.js";import"./ScrollEnablement-BYIXzTaU.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D78BoOWO.js";import"./slim-arrow-left-iwGB3yoX.js";import"./DemoProps-88jsJcnf.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DZkccoxr.js";import"./ChartContainer-Q442E6P-.js";import"./index-ClQp6b9m.js";import"./useCancelAnimationFallback-Q2N5b0iW.js";import"./YAxisTicks-BtvCb28C.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CLrUFSo1.js";import"./ChartDataLabel-DPeV85Yd.js";import"./useOnClickInternal-BZmf-rdM.js";import"./react-content-loader.es-Cm8RFsBh.js";import"./useIsRTL-BOxscssR.js";import"./useLongestYAxisLabel-HGiHGv__.js";import"./ComposedChart-DcW8M91R.js";import"./Line-DBcQQNy8.js";import"./Scatter-BTphZqa0.js";import"./index-DeR0SDZ6.js";import"./index-DzjOHaAC.js";import"./Placeholder-CR2bXs7Q.js";import"./index-DOajlgWz.js";const $=`# @ui5/webcomponents-react-charts

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
