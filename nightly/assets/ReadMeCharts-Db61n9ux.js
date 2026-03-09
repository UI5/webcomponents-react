import{q as i,j as t,Q as l}from"./iframe-XNJfvnKd.js";import{useMDXComponents as p}from"./index-BB1Z__gZ.js";import{M as u,a as h,n as f}from"./blocks-70fHpzfh.js";import"./Tag-Bt3S_y8X.js";import"./index-CCPENXhC.js";import"./CommandsAndQueries-BhkfH5lW.js";import"./copy-AwcTHtit.js";import{T as d}from"./TableOfContent-D_tQ1GzJ.js";import{F as b}from"./Footer-BCJuC1pH.js";import"./PageNotFound-DNJSaIYV.js";import{C}from"./index-B5Jk8inY.js";import{D}from"./BarChart.stories-CH1Vwuwt.js";import{D as y}from"./BulletChart.stories-B49BuPD_.js";import{D as g}from"./ColumnChart.stories-DBY6j5ai.js";import{D as v}from"./ColumnChartWithTrend.stories-B33ykiuV.js";import{D as x}from"./ComposedChart.stories-BEtxgUrz.js";import{D as j}from"./DonutChart.stories-DxnE2-ib.js";import{D as w}from"./LineChart.stories-BpIVQrMQ.js";import{D as R}from"./PieChart.stories-Ct0DhCda.js";import{D as I}from"./RadarChart.stories-DssvvThw.js";import{D as S}from"./RadialChart.stories-Bjdj1SfU.js";import{D as $}from"./ScatterChart.stories-kUV1msDP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CaeHS7Lo.js";import"./sys-enter-2-D6Lk4332.js";import"./alert-Dalf8wRK.js";import"./Link-By03J9gW.js";import"./index-DJvc2tfl.js";import"./index-BGH8cR_1.js";import"./index-C23si5qK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjHnjWqf.js";import"./addCustomCSSWithScoping-Uu6mKzaL.js";import"./index-Cr8k8bpx.js";import"./index-CONBdBFK.js";import"./index-X0L_7D7a.js";import"./index-CnSjbRE7.js";import"./Illustrations-CJz4mowS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-CrMli9ee.js";import"./ScrollEnablement-DWDTXslq.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D447gBV8.js";import"./slim-arrow-left-DhwFXD06.js";import"./DemoProps-CZiXZUaB.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Cl3moE2T.js";import"./ChartContainer-AaT_9pYH.js";import"./index-BpPLeT54.js";import"./useCancelAnimationFallback-DmpcqTiF.js";import"./YAxisTicks-FqoYc-k8.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-LhI74Xdb.js";import"./ChartDataLabel-D4kN4Dr4.js";import"./useOnClickInternal-kexzSjeZ.js";import"./react-content-loader.es-B8VsM-V0.js";import"./useIsRTL-0aovCf59.js";import"./useLongestYAxisLabel-B7BLiPQI.js";import"./ComposedChart-DrnJqZou.js";import"./Line-DvhubKmC.js";import"./Scatter-3bSu7gek.js";import"./index-BCdkGEwm.js";import"./index-DYeifYlD.js";import"./Placeholder-CdNOzW8A.js";import"./index-CorSBwiH.js";const E=`# @ui5/webcomponents-react-charts

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
