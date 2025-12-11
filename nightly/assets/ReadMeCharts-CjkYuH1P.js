import{r as i,j as t,T as l}from"./iframe-BO0jLSss.js";import{useMDXComponents as p}from"./index-DKYRdGJC.js";import{M as u,a as h,n as f}from"./blocks-B4u3eIrx.js";import"./Tag-GPe-hxqe.js";import"./index-CblgVrgk.js";import{F as d}from"./CommandsAndQueries-CgQBaZ0f.js";import"./copy-D8dGmaRo.js";import{T as b}from"./TableOfContent-BGsE7-dd.js";import{C}from"./index-D20OfiaR.js";import{D}from"./BarChart.stories-Eb2xFTQ_.js";import{D as y}from"./BulletChart.stories-BZKvYsG4.js";import{D as g}from"./ColumnChart.stories-mZEFDwW5.js";import{D as v}from"./ColumnChartWithTrend.stories-DAT939Hj.js";import{D as x}from"./ComposedChart.stories-CF98O6pB.js";import{D as j}from"./DonutChart.stories-DZSIclh4.js";import{D as w}from"./LineChart.stories-BIE1C5PS.js";import{D as R}from"./PieChart.stories-BJie_vtI.js";import{D as I}from"./RadarChart.stories-DSkCYkp7.js";import{D as S}from"./RadialChart.stories-DphR0veZ.js";import{D as T}from"./ScatterChart.stories-D7KgFpmf.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D3uCnnkd.js";import"./sys-enter-2-wxpj1ZiR.js";import"./alert-BevRZGbf.js";import"./index-DelbaEfh.js";import"./index-ZGr5TJVA.js";import"./index-CpvGRbxq.js";import"./Link-C1ayfMxn.js";import"./index-CEuImug1.js";import"./index-MgaH4Bh7.js";import"./index-CQJ8H28h.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3DyNz5yK.js";import"./addCustomCSSWithScoping-tlJvF9vw.js";import"./index-Cxn0-wv1.js";import"./Carousel-mrV7ZD93.js";import"./ScrollEnablement-Dc2oxzPB.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CCIt0hHM.js";import"./slim-arrow-left-zbmQ5IiO.js";import"./DemoProps-rMjEceMX.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BzYWpRwy.js";import"./ChartContainer-CVoQSu3A.js";import"./index-BWlaxzMP.js";import"./useCancelAnimationFallback-l19hTeHl.js";import"./YAxisTicks-CXwad1gj.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BdI3ckHA.js";import"./ChartDataLabel-BalBeQMu.js";import"./useOnClickInternal-CZbUd-xo.js";import"./react-content-loader.es-Vk806rpv.js";import"./useIsRTL-BupaFKFa.js";import"./useLongestYAxisLabel-Cs7nCnW7.js";import"./ComposedChart-DEtnBrjM.js";import"./Line-Dn7JLg0E.js";import"./Scatter-LPF9FwAj.js";import"./index-DjC4QMCY.js";import"./index-6nJEi4fH.js";import"./Placeholder-C7XGAe-Y.js";import"./index-bznVx6BQ.js";const $=`# @ui5/webcomponents-react-charts

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
