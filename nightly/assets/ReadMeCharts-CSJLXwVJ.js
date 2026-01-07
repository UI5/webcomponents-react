import{r as i,j as t,T as l}from"./iframe-BS2TrvrN.js";import{useMDXComponents as p}from"./index-Dp4awxsz.js";import{M as u,a as h,n as f}from"./blocks-AG6GRa5B.js";import"./Tag-CAsjs9Yd.js";import"./index-CnogY8gl.js";import{F as d}from"./CommandsAndQueries-C7ISLnYa.js";import"./copy-DWHxAwDZ.js";import{T as b}from"./TableOfContent-8pCqyB_x.js";import{C}from"./index-BBaqmlUO.js";import{D}from"./BarChart.stories-CKyAXCvQ.js";import{D as y}from"./BulletChart.stories-CcUk12a6.js";import{D as g}from"./ColumnChart.stories-dyCgd0o7.js";import{D as v}from"./ColumnChartWithTrend.stories-DgyMpkvE.js";import{D as x}from"./ComposedChart.stories-Cv1dAMfo.js";import{D as j}from"./DonutChart.stories-BHsBRGfN.js";import{D as w}from"./LineChart.stories-h6SRWpxX.js";import{D as R}from"./PieChart.stories-DKroUmXP.js";import{D as I}from"./RadarChart.stories-DDhmO19N.js";import{D as S}from"./RadialChart.stories-CKjrYif8.js";import{D as T}from"./ScatterChart.stories-CSkFVkqU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B1mkkoXe.js";import"./sys-enter-2-DnLeBeIW.js";import"./alert-BREJIvMW.js";import"./index-BTiu8q4c.js";import"./index-Mu4Fq_pN.js";import"./index-BmL9Xifd.js";import"./Link-o9RgLDgA.js";import"./index-DaCCo5vH.js";import"./index-DMDLslui.js";import"./index-BzQgfOUJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CXV-QRTV.js";import"./addCustomCSSWithScoping-BH8CiasF.js";import"./index-CJ7CYpRY.js";import"./Carousel-BbmU8W29.js";import"./ScrollEnablement-BmiTc29C.js";import"./animate-JylhYHXj.js";import"./AnimationMode-5zG9p5WM.js";import"./slim-arrow-left-C-lcqyRN.js";import"./DemoProps-fd_1t4dM.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DRVPZA-1.js";import"./ChartContainer-DSONNRUm.js";import"./index-DZmbJFEp.js";import"./useCancelAnimationFallback-aX7TYQzd.js";import"./YAxisTicks-B_11A8TG.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CA06YuKy.js";import"./ChartDataLabel-eoreVYW7.js";import"./useOnClickInternal-ulD7bVZh.js";import"./react-content-loader.es-DAEKEbuD.js";import"./useIsRTL-Dueog928.js";import"./useLongestYAxisLabel-C5cNWqJU.js";import"./ComposedChart-Cr1gdm8R.js";import"./Line-BCJvp86Z.js";import"./Scatter-C6BpTklq.js";import"./index-CSHz-TW8.js";import"./index-CB1_nbVb.js";import"./Placeholder-DO8fLhe3.js";import"./index-BE5yE1l3.js";const $=`# @ui5/webcomponents-react-charts

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
