import{r as i,j as t,T as l}from"./iframe-Cq4aPHLo.js";import{useMDXComponents as p}from"./index-DtjXbTDz.js";import{M as u,a as h,k as f}from"./blocks-DS_hC92x.js";import"./Tag-C40beB3s.js";import"./index-CmKxyzHV.js";import{F as d}from"./CommandsAndQueries-CXjPz3Rk.js";import"./copy-D9etBJkT.js";import{T as b}from"./TableOfContent-BZ6I3xU6.js";import{C}from"./index-Cecn1XU7.js";import{D}from"./BarChart.stories-C1YX23_Z.js";import{D as y}from"./BulletChart.stories-D1uLAEOi.js";import{D as g}from"./ColumnChart.stories-BWW9T237.js";import{D as v}from"./ColumnChartWithTrend.stories-BJLH3IXP.js";import{D as x}from"./ComposedChart.stories-DcE0e4h4.js";import{D as j}from"./DonutChart.stories-By8O8uoO.js";import{D as w}from"./LineChart.stories-CHlqXnMs.js";import{D as R}from"./PieChart.stories-BgOWTlUu.js";import{D as I}from"./RadarChart.stories-YGtoyvAD.js";import{D as S}from"./RadialChart.stories-CFQlas_G.js";import{D as T}from"./ScatterChart.stories-BoaNOid3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DhBkhQvI.js";import"./sys-enter-2-CiSpLSDz.js";import"./alert-2iAYPloM.js";import"./index-CkXTOe1d.js";import"./index-Dc8fq3Wn.js";import"./index-AjPpxwQf.js";import"./Link-BfHdWWup.js";import"./index-CCLlvQbb.js";import"./index-BEk2R1hN.js";import"./index-Bj4AjQ7z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Crxlx4bK.js";import"./addCustomCSSWithScoping-CwGFzfIe.js";import"./index-BRBHL30E.js";import"./Carousel-D-NbG_ir.js";import"./ScrollEnablement-aZYLZB-E.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C-yz35Dt.js";import"./slim-arrow-left-Pacui3xu.js";import"./DemoProps-C4W-NuBH.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DQynUUdb.js";import"./ChartContainer-DBQD0iYD.js";import"./index-B_YXqDWP.js";import"./useCancelAnimationFallback-B7CCas0B.js";import"./YAxisTicks-CiNHKIrx.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Pt55K-g4.js";import"./ChartDataLabel-hjUtt6Lk.js";import"./useOnClickInternal-8y6KJBBl.js";import"./react-content-loader.es-CQRwZSV5.js";import"./useIsRTL-xz9tTNk8.js";import"./useLongestYAxisLabel-FpT9SBNZ.js";import"./ComposedChart-vxhlBLAW.js";import"./Line-bXaAAnYO.js";import"./Scatter-LwHxtEzF.js";import"./index-Cz7fAg82.js";import"./index-DHjgNTK0.js";import"./Placeholder-DMFMrRfi.js";import"./index-ULdmc7bU.js";const $=`# @ui5/webcomponents-react-charts

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
