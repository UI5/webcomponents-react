import{q as i,j as t,Q as l}from"./iframe-CLRwe_KU.js";import{useMDXComponents as p}from"./index-zMDfw_hp.js";import{M as u,a as h,n as f}from"./blocks-B36l4j9a.js";import"./Tag-DLCMnG64.js";import"./index-Di2mC61N.js";import"./CommandsAndQueries-Qa8JAgCb.js";import"./copy-C_QN3LWn.js";import{T as d}from"./TableOfContent-Cm92Ha4S.js";import{F as b}from"./Footer-CY1WkGvT.js";import"./PageNotFound-Et84DOUJ.js";import{C}from"./index-D4Ttc5_l.js";import{D}from"./BarChart.stories-CrhKyJ5R.js";import{D as y}from"./BulletChart.stories-DukfGVsv.js";import{D as g}from"./ColumnChart.stories-aWfpx4ZU.js";import{D as v}from"./ColumnChartWithTrend.stories-D6wg1P1g.js";import{D as x}from"./ComposedChart.stories--dQsgwX-.js";import{D as j}from"./DonutChart.stories-w47K1hXw.js";import{D as w}from"./LineChart.stories-BeI1RL9x.js";import{D as R}from"./PieChart.stories-D89IFQwx.js";import{D as I}from"./RadarChart.stories-B_c4XrVm.js";import{D as S}from"./RadialChart.stories-Do6pg5Xt.js";import{D as $}from"./ScatterChart.stories-DwI6aHYa.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BHtbew5c.js";import"./sys-enter-2-CeQJ4tH7.js";import"./alert-DGiHprsp.js";import"./Link-CQgjpXoE.js";import"./index-BFFCZnKZ.js";import"./index-CZmIgKIQ.js";import"./index-B905PbE4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5LoBpt5.js";import"./addCustomCSSWithScoping-BmaQonB-.js";import"./index-DhQiji0Y.js";import"./index-9xLRD1c-.js";import"./index-rGV23ifs.js";import"./index-BqJblJml.js";import"./Illustrations-BsZAm-cT.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BgVn0n2f.js";import"./ScrollEnablement-Bh4ROjF7.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C1ImxyXE.js";import"./slim-arrow-left-CYTcMLJg.js";import"./DemoProps-BryMngQP.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D77S4Mde.js";import"./ChartContainer-ARyc4Gmz.js";import"./index-CWV1r8Rz.js";import"./useCancelAnimationFallback-8unJcim4.js";import"./YAxisTicks-CUTsyX4N.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DI05Wjso.js";import"./ChartDataLabel-C8moYHvl.js";import"./useOnClickInternal-Cc-LN5SN.js";import"./react-content-loader.es-D5ushkRL.js";import"./useIsRTL-DPDPb-rh.js";import"./useLongestYAxisLabel-Bn81XtB6.js";import"./ComposedChart-DCHSxKH1.js";import"./Line-DGopRUde.js";import"./Scatter-DeX3gIq0.js";import"./index-CnY9ZkdF.js";import"./index-DoV50CPX.js";import"./Placeholder-DYzWTchI.js";import"./index-l7M0Clta.js";const E=`# @ui5/webcomponents-react-charts

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
