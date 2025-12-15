import{r as i,j as t,T as l}from"./iframe-B1ai2N1H.js";import{useMDXComponents as p}from"./index-QfN2DAp7.js";import{M as u,a as h,n as f}from"./blocks-B9fqlxEZ.js";import"./Tag-EPgIaOhk.js";import"./index-BtwVlylG.js";import{F as d}from"./CommandsAndQueries-DatNYL2t.js";import"./copy-BJY5YA9D.js";import{T as b}from"./TableOfContent-BuogqNJV.js";import{C}from"./index-CKGchJgz.js";import{D}from"./BarChart.stories-B0u25GYw.js";import{D as y}from"./BulletChart.stories-Bfg_-jzG.js";import{D as g}from"./ColumnChart.stories-ClkSUsUH.js";import{D as v}from"./ColumnChartWithTrend.stories-KZJRBU-q.js";import{D as x}from"./ComposedChart.stories-x95wJg2g.js";import{D as j}from"./DonutChart.stories-Dc9mPZBu.js";import{D as w}from"./LineChart.stories-BQ3OD5V9.js";import{D as R}from"./PieChart.stories-ClN1K76i.js";import{D as I}from"./RadarChart.stories-B3K2w1h6.js";import{D as S}from"./RadialChart.stories-DBN_iA62.js";import{D as T}from"./ScatterChart.stories-CMYgep5v.js";import"./preload-helper-PPVm8Dsz.js";import"./information-qjJpsO9c.js";import"./sys-enter-2-DLuIUMMQ.js";import"./alert-DxSQeXz_.js";import"./index-DIMi93Lv.js";import"./index-BqK1QrYY.js";import"./index-B8JztijY.js";import"./Link-DxXALuG4.js";import"./index-BD5BVNKc.js";import"./index-Dq21p-7K.js";import"./index-BL80uiBy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3b7w9-j.js";import"./addCustomCSSWithScoping-BigzftYf.js";import"./index-BZxParGj.js";import"./Carousel-CdXsb-Fw.js";import"./ScrollEnablement-CYJKPk5p.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DiR9WyNG.js";import"./slim-arrow-left-CpuH8JPy.js";import"./DemoProps-DEDWC2wl.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-vmIOlBWg.js";import"./ChartContainer-Bej1WS6C.js";import"./index-CEbRZ6tf.js";import"./useCancelAnimationFallback-EitBEVa3.js";import"./YAxisTicks-BIWUGaIY.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dp7XZGsq.js";import"./ChartDataLabel-w-y5s4Ui.js";import"./useOnClickInternal-ChUoyzqO.js";import"./react-content-loader.es-BkCdLe0l.js";import"./useIsRTL-DlOSzz73.js";import"./useLongestYAxisLabel-nea5Ty2f.js";import"./ComposedChart-Dn0_2cRo.js";import"./Line-DMlRDUOV.js";import"./Scatter-DEtTbnvc.js";import"./index-Dy57ZV5x.js";import"./index-DoQ4dqB1.js";import"./Placeholder-D_qst9-h.js";import"./index-Bet1M3uo.js";const $=`# @ui5/webcomponents-react-charts

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
