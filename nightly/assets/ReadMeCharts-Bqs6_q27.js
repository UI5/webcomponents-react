import{q as i,j as t,Q as l}from"./iframe-BVmbmlmH.js";import{useMDXComponents as p}from"./index-BayNuhgZ.js";import{M as u,a as h,n as f}from"./blocks-DMMtyDnL.js";import"./Tag-CX0-uTWT.js";import"./index-DLhdihT5.js";import"./CommandsAndQueries-HKIzYk5f.js";import"./copy-GT2usG3-.js";import{T as d}from"./TableOfContent-DlRBwInQ.js";import{F as b}from"./Footer-jyZDOgk8.js";import"./PageNotFound-Bx-Sm5Da.js";import{C}from"./index-B95pOfED.js";import{D}from"./BarChart.stories-C4OHg_V1.js";import{D as y}from"./BulletChart.stories-Cu2HCAlS.js";import{D as g}from"./ColumnChart.stories-BnvT7bgk.js";import{D as v}from"./ColumnChartWithTrend.stories-CIdcbXYd.js";import{D as x}from"./ComposedChart.stories-CWytr34t.js";import{D as j}from"./DonutChart.stories-BmZXMEEf.js";import{D as w}from"./LineChart.stories-CzBoex5X.js";import{D as R}from"./PieChart.stories-CYnoZMFc.js";import{D as I}from"./RadarChart.stories-DirperyE.js";import{D as S}from"./RadialChart.stories-DxUR5rCm.js";import{D as $}from"./ScatterChart.stories-CMMnURse.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BShnHlGL.js";import"./sys-enter-2-I6roqntb.js";import"./alert-D_-PGSyq.js";import"./Link-mk6Fv6C7.js";import"./index-BxRkRPbG.js";import"./index-BJnbAjLN.js";import"./index-DOsMkDHm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY1Um-8U.js";import"./addCustomCSSWithScoping-BGYdQCs4.js";import"./index-B9kq_n6z.js";import"./index-hq6INLou.js";import"./index-BCEgOOyQ.js";import"./index-CGmvxCgE.js";import"./Illustrations-CSa63wVD.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-EzGaqIfK.js";import"./ScrollEnablement-yNv_w-S6.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cc8ZNwKK.js";import"./slim-arrow-left-B82-1YJi.js";import"./DemoProps-Dg4cDJhH.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DrPYRD8w.js";import"./ChartContainer-ChH6ktQG.js";import"./index-CNlu7VXT.js";import"./useCancelAnimationFallback-CgZIPqWz.js";import"./YAxisTicks-Cjil9wqk.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Cs1UI0gs.js";import"./ChartDataLabel-DjrmZzq3.js";import"./useOnClickInternal-CtrKv3p5.js";import"./react-content-loader.es-lWJuEsID.js";import"./useIsRTL-BtJvBTrm.js";import"./useLongestYAxisLabel-COAVt_J3.js";import"./ComposedChart-CMsg7hW2.js";import"./Line-BlHAPlND.js";import"./Scatter-DgqCaKI0.js";import"./index-CMxiQBZy.js";import"./index-BzWtksv7.js";import"./Placeholder-BUw6y-Ti.js";import"./index-DSGwGMHc.js";const E=`# @ui5/webcomponents-react-charts

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
