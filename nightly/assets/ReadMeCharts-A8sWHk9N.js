import{r as i,j as t,O as l}from"./iframe-BHRyWWCK.js";import{useMDXComponents as p}from"./index-vmzMr3GX.js";import{M as u,a as h,n as f}from"./blocks-DoCMQEa0.js";import"./Tag-R17NMrYt.js";import"./index-CZEJadic.js";import{F as d}from"./CommandsAndQueries-BrUcvXA7.js";import"./copy-rEHIQTke.js";import{T as b}from"./TableOfContent-B7GL1Cos.js";import{C}from"./index-DZtDmzfV.js";import{D}from"./BarChart.stories-BdH7nzpm.js";import{D as y}from"./BulletChart.stories-D7L40erl.js";import{D as g}from"./ColumnChart.stories-hXdaobcg.js";import{D as v}from"./ColumnChartWithTrend.stories-8BBhh9gW.js";import{D as x}from"./ComposedChart.stories-pLomDz3D.js";import{D as j}from"./DonutChart.stories-Cu4pXNOj.js";import{D as w}from"./LineChart.stories-D2ketNoS.js";import{D as R}from"./PieChart.stories-CESNbZ0h.js";import{D as I}from"./RadarChart.stories-KGb6HPjX.js";import{D as S}from"./RadialChart.stories-Bqirn0o0.js";import{D as $}from"./ScatterChart.stories-j5SzUZpV.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Nr6PmwbG.js";import"./sys-enter-2--GTeHKCC.js";import"./alert-CaNIaeyx.js";import"./index-UnB73Rnf.js";import"./index-DibDZuef.js";import"./index-BKKHGvr5.js";import"./Link-v8HZQWxp.js";import"./index-Cm33Vcx3.js";import"./index-DCtea6ve.js";import"./index-CJXqjvvM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEXhzcrM.js";import"./addCustomCSSWithScoping-W1ZwlwrN.js";import"./index-CBZ8EfYd.js";import"./Carousel-B5ZS-EVb.js";import"./ScrollEnablement-DFn_AcWU.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cpacf1DT.js";import"./slim-arrow-left-D7UW5AmD.js";import"./DemoProps-BSRlRGmz.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-dcgAXHBw.js";import"./ChartContainer-1eDA9-gW.js";import"./index-BDlnLxSo.js";import"./useCancelAnimationFallback-B7KEWfFz.js";import"./YAxisTicks-CSyLSiTI.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B3yx7avm.js";import"./ChartDataLabel-D8g_zifk.js";import"./useOnClickInternal-Dk_dPn9x.js";import"./react-content-loader.es-ClIjPX36.js";import"./useIsRTL-BTNxBqyX.js";import"./useLongestYAxisLabel-ji_Vkrpj.js";import"./ComposedChart-DKvE52Dg.js";import"./Line-BsqBPWj6.js";import"./Scatter-BDxb99hM.js";import"./index-CoUicoa-.js";import"./index-DdDdzWWM.js";import"./Placeholder-DZzaYjJi.js";import"./index-t9JmkSuz.js";const E=`# @ui5/webcomponents-react-charts

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
