import{r as i,j as t,T as l}from"./iframe-CmCInUUM.js";import{useMDXComponents as p}from"./index-NXwP46VZ.js";import{M as u,a as h,m as f}from"./blocks-Cl0pXsJo.js";import"./Tag-CGuAaCB9.js";import"./index-dx9tkoNT.js";import{F as d}from"./CommandsAndQueries-5W0lVTAB.js";import"./copy-DcIDD3Wq.js";import{T as b}from"./TableOfContent-Fd1ozcTL.js";import{C}from"./index-WJvGY6OQ.js";import{D}from"./BarChart.stories-GbsCRSxn.js";import{D as y}from"./BulletChart.stories-Cu1CwsuN.js";import{D as g}from"./ColumnChart.stories-TwQ4JzZc.js";import{D as v}from"./ColumnChartWithTrend.stories-ChJKD5yZ.js";import{D as x}from"./ComposedChart.stories-D-tEAQly.js";import{D as j}from"./DonutChart.stories-CF9KNopn.js";import{D as w}from"./LineChart.stories-BnkCcLz7.js";import{D as R}from"./PieChart.stories-B_XQvZkv.js";import{D as I}from"./RadarChart.stories-BY6gVeYc.js";import{D as S}from"./RadialChart.stories-CM4YEl6n.js";import{D as T}from"./ScatterChart.stories-DZXotmZ8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CRsOZ4kf.js";import"./sys-enter-2-CasWdLF0.js";import"./alert-BeT31Ncd.js";import"./index-B5gdlwKM.js";import"./index-Booqb8sh.js";import"./index-DMcZQwaV.js";import"./Link-7Zm1Qi1d.js";import"./index-DXLeTiXI.js";import"./index-CVcma5Dd.js";import"./index-BKQYdjqz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BwmvQWIh.js";import"./addCustomCSSWithScoping-CwKscpVm.js";import"./index-DUfO3zu2.js";import"./Carousel-jyBxRGD3.js";import"./ScrollEnablement-D5S2g6lr.js";import"./animate-JylhYHXj.js";import"./AnimationMode-qTB3pSgZ.js";import"./slim-arrow-left-D4XS7Kkx.js";import"./DemoProps-CiqrPif6.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CSojp-4e.js";import"./ChartContainer-DACOCIZl.js";import"./index-BqyE9dt2.js";import"./useCancelAnimationFallback-CroKv8eI.js";import"./YAxisTicks-DTfp1Vos.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Doe5oobJ.js";import"./ChartDataLabel-BpooL5o3.js";import"./useOnClickInternal-DFg5F73u.js";import"./react-content-loader.es-Dy4VyDW4.js";import"./useIsRTL-DQYLjazp.js";import"./useLongestYAxisLabel-Butao5Fm.js";import"./ComposedChart-Bc2GOXOX.js";import"./Line-B-G1DStm.js";import"./Scatter-BRmkAJVz.js";import"./index-DFQ0_Dvk.js";import"./index-COwNIK0s.js";import"./Placeholder-CB_mfn1x.js";import"./index-DzwC_nOQ.js";const $=`# @ui5/webcomponents-react-charts

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
