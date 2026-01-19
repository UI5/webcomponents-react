import{r as i,j as t,T as l}from"./iframe-CGYWU8Zw.js";import{useMDXComponents as p}from"./index-CiFONtpN.js";import{M as u,a as h,n as f}from"./blocks-DZmaAmAP.js";import"./Tag-DxQZH2nA.js";import"./index-C8k79uzV.js";import{F as d}from"./CommandsAndQueries-3p6jyLf7.js";import"./copy-ButtKxyE.js";import{T as b}from"./TableOfContent-Cii8m0Gq.js";import{C}from"./index-BoBTuigI.js";import{D}from"./BarChart.stories-CtlXqLMq.js";import{D as y}from"./BulletChart.stories-207eCC6U.js";import{D as g}from"./ColumnChart.stories-3SqDPhCJ.js";import{D as v}from"./ColumnChartWithTrend.stories-BxBXqbZ0.js";import{D as x}from"./ComposedChart.stories-DAIIgEAP.js";import{D as j}from"./DonutChart.stories-Aev9YI57.js";import{D as w}from"./LineChart.stories-ChFpLMy4.js";import{D as R}from"./PieChart.stories-Dsw57KDQ.js";import{D as I}from"./RadarChart.stories-DRIFqVKA.js";import{D as S}from"./RadialChart.stories-DjIQO2yf.js";import{D as T}from"./ScatterChart.stories-2jcyCAGC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Dv2HF6Ui.js";import"./sys-enter-2-vy1Ip4uQ.js";import"./alert-BcA2abtX.js";import"./index-Cn68RHh4.js";import"./index-IcIo-7M4.js";import"./index-Bi-laTlO.js";import"./Link-BAlxiTXd.js";import"./index-BpDmHZtn.js";import"./index-DOxDv7Xi.js";import"./index-mH5f_RVl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DRQkasjF.js";import"./addCustomCSSWithScoping-DNAczkus.js";import"./index-C1_F4VAw.js";import"./Carousel-BmUQ29vx.js";import"./ScrollEnablement-SG6LJXEq.js";import"./animate-JylhYHXj.js";import"./AnimationMode-_9S5DY8K.js";import"./slim-arrow-left-aNk8AuC1.js";import"./DemoProps-BxMAT6b5.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-9uAMli9N.js";import"./ChartContainer-DYZ84RWY.js";import"./index-DrrvpZW3.js";import"./useCancelAnimationFallback-C49ISkCW.js";import"./YAxisTicks-DYflC9Rf.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-4ReGY-nv.js";import"./ChartDataLabel--GDvJ9Ad.js";import"./useOnClickInternal-DMty2Isz.js";import"./react-content-loader.es-jebDBQV6.js";import"./useIsRTL-DQbatNcW.js";import"./useLongestYAxisLabel-DEKqaaci.js";import"./ComposedChart-BXmpuXIF.js";import"./Line-DQeZOPfD.js";import"./Scatter-lasligEO.js";import"./index-Bu0FWGen.js";import"./index-lJFM0-HJ.js";import"./Placeholder-L-Uu06dZ.js";import"./index-BiLEhAPu.js";const $=`# @ui5/webcomponents-react-charts

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
