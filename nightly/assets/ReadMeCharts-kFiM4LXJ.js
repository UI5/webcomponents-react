import{q as i,j as t,Q as l}from"./iframe-B8dw45Pm.js";import{useMDXComponents as p}from"./index-CDTgJgbW.js";import{M as u,a as h,n as f}from"./blocks-CPHZ0sq-.js";import"./Tag-WXORlQvy.js";import"./index-D7N30NY8.js";import"./CommandsAndQueries-Bl0bAz-u.js";import"./copy-KGIzxzBV.js";import{T as d}from"./TableOfContent-BCSvRamV.js";import{F as b}from"./Footer-DGDb1ilk.js";import"./PageNotFound-DfoC1Yw_.js";import{C}from"./index-HaFhZ1NL.js";import{D}from"./BarChart.stories-BaxvxkKk.js";import{D as y}from"./BulletChart.stories-DS53ZCmb.js";import{D as g}from"./ColumnChart.stories-CzT43yOG.js";import{D as v}from"./ColumnChartWithTrend.stories-CzJvdWZ0.js";import{D as x}from"./ComposedChart.stories-D-eupXSX.js";import{D as j}from"./DonutChart.stories-DBTeU2Do.js";import{D as w}from"./LineChart.stories-ACb8FFdQ.js";import{D as R}from"./PieChart.stories-XquJEoJE.js";import{D as I}from"./RadarChart.stories-DA68MqlU.js";import{D as S}from"./RadialChart.stories-H3-t8i7r.js";import{D as $}from"./ScatterChart.stories-DscT2QmS.js";import"./preload-helper-PPVm8Dsz.js";import"./information-SmgVOr7y.js";import"./sys-enter-2-CP5yuJAd.js";import"./alert-8CVWRnEr.js";import"./Link-BB11RQL1.js";import"./index-C46a650J.js";import"./index-BGlbQvkZ.js";import"./index-QyvR-n2-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B1CIx6RM.js";import"./addCustomCSSWithScoping-CsB8TxAm.js";import"./index-DOUsK0Sd.js";import"./index-6NVZEy4N.js";import"./index-DMbxZG4m.js";import"./index-S966bfr_.js";import"./Illustrations-Df2_smGK.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-BXRIFUIl.js";import"./ScrollEnablement-D1x-dzeA.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DYP2HwFm.js";import"./slim-arrow-left-D9I76yk6.js";import"./DemoProps-D5qUrLo6.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-BX_vMtkW.js";import"./ChartContainer-BEgzmyqo.js";import"./index-B_Jr5JgK.js";import"./useCancelAnimationFallback-Ri7D55-G.js";import"./YAxisTicks-UyLwU8pJ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DqpbvpbR.js";import"./ChartDataLabel-DthUo-45.js";import"./useOnClickInternal-TmaNOIjB.js";import"./react-content-loader.es-Atyj7_tp.js";import"./useIsRTL-DwcAc9uO.js";import"./useLongestYAxisLabel-DnwFg2ED.js";import"./ComposedChart-DsXeHfdh.js";import"./Line-DZWek0rQ.js";import"./Scatter-BxqpcSzk.js";import"./index-BCf_E0mU.js";import"./index-DGMHoX7u.js";import"./Placeholder-CEk7rOP3.js";import"./index-DsBrH08d.js";const E=`# @ui5/webcomponents-react-charts

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
