import{r as i,j as t,O as l}from"./iframe-DjjZnZd-.js";import{useMDXComponents as p}from"./index-CHlimz1C.js";import{M as u,a as h,n as f}from"./blocks-BmkOoUGB.js";import"./Tag-CUGM_Neu.js";import"./index-CA-PQGxD.js";import{F as d}from"./CommandsAndQueries-WOCJDSHC.js";import"./copy-ZK04gjjU.js";import{T as b}from"./TableOfContent-D7cDbF3M.js";import{C}from"./index-iiAa641P.js";import{D}from"./BarChart.stories-UWhI0-Qf.js";import{D as y}from"./BulletChart.stories-RsfHhVbT.js";import{D as g}from"./ColumnChart.stories-CazaB71O.js";import{D as v}from"./ColumnChartWithTrend.stories-BTuiefnH.js";import{D as x}from"./ComposedChart.stories-BJ9uE6DH.js";import{D as j}from"./DonutChart.stories-BzfH4ID-.js";import{D as w}from"./LineChart.stories-COqzr54v.js";import{D as R}from"./PieChart.stories-JFQKrGR0.js";import{D as I}from"./RadarChart.stories-CW7gi__S.js";import{D as S}from"./RadialChart.stories-DXzoZ7hn.js";import{D as $}from"./ScatterChart.stories-BltSvwAs.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DMdo7dcL.js";import"./sys-enter-2-CptPzh8p.js";import"./alert-CrXk_arY.js";import"./index-CT-jhGw4.js";import"./index-BgVmtdEP.js";import"./index-BFZ4A4pM.js";import"./Link-DOn3kiwy.js";import"./index-DmOXd_eL.js";import"./index-nsJY5Xz1.js";import"./index-BB6l50am.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B12gaSwN.js";import"./addCustomCSSWithScoping-vHMhzzpD.js";import"./index-BcQoqGu9.js";import"./Carousel-dUK9HsMk.js";import"./ScrollEnablement-C0m6jxeW.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Diy24WyT.js";import"./slim-arrow-left-CXFWSr1U.js";import"./DemoProps-D415nwD9.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-dzvKaUxG.js";import"./ChartContainer-Dum2mTja.js";import"./index-Beu0nm3Q.js";import"./useCancelAnimationFallback-BqDc9Esy.js";import"./YAxisTicks-0dlRuCA8.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DE5qffeX.js";import"./ChartDataLabel-CglI3yjj.js";import"./useOnClickInternal-CUHZRE7_.js";import"./react-content-loader.es-DlNxc2gw.js";import"./useIsRTL-sDVY4Y6h.js";import"./useLongestYAxisLabel-D6TF12pm.js";import"./ComposedChart-NCNdA8Xf.js";import"./Line-DaB9fA36.js";import"./Scatter-yD5kKLbn.js";import"./index-VmWQT4xP.js";import"./index-DF3CWZeg.js";import"./Placeholder-241RkWKa.js";import"./index-BXL_3gHg.js";const E=`# @ui5/webcomponents-react-charts

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
