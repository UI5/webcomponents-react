import{r as i,j as t,T as l}from"./iframe-Cr6oQmRd.js";import{useMDXComponents as p}from"./index-evhaF9WH.js";import{M as u,a as h,n as f}from"./blocks-BuJgXu1r.js";import"./Tag-BQohtkMw.js";import"./index-C0N3ti0U.js";import{F as d}from"./CommandsAndQueries-DyaEp24s.js";import"./copy-CZb07l2e.js";import{T as b}from"./TableOfContent-C6-4XiSf.js";import{C}from"./index-DrSu9WkD.js";import{D}from"./BarChart.stories-DmBgg2gi.js";import{D as y}from"./BulletChart.stories-DfgBkhMG.js";import{D as g}from"./ColumnChart.stories-G2CCHvb8.js";import{D as v}from"./ColumnChartWithTrend.stories-cOjkfWUq.js";import{D as x}from"./ComposedChart.stories-BWWmbj7W.js";import{D as j}from"./DonutChart.stories-bxAMlfT0.js";import{D as w}from"./LineChart.stories-BMwE-dRh.js";import{D as R}from"./PieChart.stories-C0hizMXu.js";import{D as I}from"./RadarChart.stories-0rb6poey.js";import{D as S}from"./RadialChart.stories-D1Wanlzj.js";import{D as T}from"./ScatterChart.stories-irv_sR-f.js";import"./preload-helper-PPVm8Dsz.js";import"./information-ClN6WTRB.js";import"./sys-enter-2-Bqn_SCi3.js";import"./alert-D5OzLbEL.js";import"./index-TJ6Pynu-.js";import"./index-ClHBD-hy.js";import"./index-D3MvNgPx.js";import"./Link-Zz-QOIrn.js";import"./index-DcIQ9jq2.js";import"./index-D6mcpJOs.js";import"./index-L71irp-N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN2SmbWo.js";import"./addCustomCSSWithScoping-zjLKSZUa.js";import"./index-1zaXUkR9.js";import"./Carousel-DJyZas_N.js";import"./ScrollEnablement-C96PrwAf.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dq2y2jpM.js";import"./slim-arrow-left-C-efJSqA.js";import"./DemoProps-eCQZGd58.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CO3fnPfY.js";import"./ChartContainer-CC6HFaC1.js";import"./index-DZthy7eH.js";import"./useCancelAnimationFallback-DUlsckJs.js";import"./YAxisTicks-Dmn_pqkj.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DtOV74jC.js";import"./ChartDataLabel-B8ULF588.js";import"./useOnClickInternal-RTp4ype3.js";import"./react-content-loader.es-BtWUD91Z.js";import"./useIsRTL-V7dBuQmF.js";import"./useLongestYAxisLabel-DYw2TPkg.js";import"./ComposedChart-EvJ9u9gB.js";import"./Line-Czg2cnwc.js";import"./Scatter-Cja7jpeX.js";import"./index-Bhp4rmBG.js";import"./index-bqwvGcWe.js";import"./Placeholder-DVNe8BbP.js";import"./index-BwWzLMD2.js";const $=`# @ui5/webcomponents-react-charts

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
