import{q as i,j as t,Q as l}from"./iframe-D6Dqvaj7.js";import{useMDXComponents as p}from"./index-p5hUqO5S.js";import{M as u,a as h,n as f}from"./blocks-mit6uJ90.js";import"./Tag-DSi4ilvu.js";import"./index-jRfJh9Ly.js";import"./CommandsAndQueries-CY2cNdhF.js";import"./copy-COwmxVeQ.js";import{T as d}from"./TableOfContent-_b60nv51.js";import{F as b}from"./Footer-CnbRw8mY.js";import"./PageNotFound-Dkn1r8pk.js";import{C}from"./index-DpjTBrpl.js";import{D}from"./BarChart.stories-DJ5kGhkm.js";import{D as y}from"./BulletChart.stories-YxeDE3Me.js";import{D as g}from"./ColumnChart.stories-Ds5rLOMe.js";import{D as v}from"./ColumnChartWithTrend.stories-B8t3AQ5s.js";import{D as x}from"./ComposedChart.stories-ByW7a9hQ.js";import{D as j}from"./DonutChart.stories-CA32DjPF.js";import{D as w}from"./LineChart.stories-DXMVaLnr.js";import{D as R}from"./PieChart.stories-BPbpTpwu.js";import{D as I}from"./RadarChart.stories-DG7j9C-G.js";import{D as S}from"./RadialChart.stories-BOJOaDbe.js";import{D as $}from"./ScatterChart.stories-B3i3E4pb.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C52MW-zn.js";import"./sys-enter-2-DfVfUeVZ.js";import"./alert-DmTYLDqH.js";import"./Link-BHPCDbiV.js";import"./index-BMaKwz0y.js";import"./index-XWn6EBIn.js";import"./index-BHa3uoaJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-MTFFpMQj.js";import"./addCustomCSSWithScoping-BENu44jJ.js";import"./index-CZdI0ebk.js";import"./index-C9RG4ln6.js";import"./index-kq9zSbaq.js";import"./index-DOs5kzts.js";import"./Illustrations-C58IHd-I.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-GB_uwE_n.js";import"./ScrollEnablement-geO1o17m.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dt8Zrq2L.js";import"./slim-arrow-left-C89HXeHJ.js";import"./DemoProps-Zc4ZhnnM.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-DX3kIxVO.js";import"./ChartContainer-BydGdS4Z.js";import"./index-Cp7SAe62.js";import"./useCancelAnimationFallback-1eYrg2C-.js";import"./YAxisTicks-BlP5FGyn.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DM0uhE3g.js";import"./ChartDataLabel-DMmDpPLW.js";import"./useOnClickInternal-D2akbLa1.js";import"./react-content-loader.es-Rl0NmrTa.js";import"./useIsRTL-BdqZbY6W.js";import"./useLongestYAxisLabel-Dj5AR5Vm.js";import"./ComposedChart-shBZNYVe.js";import"./Line-CV8Rpl6U.js";import"./Scatter-BStgLthD.js";import"./index-CMnpJwlN.js";import"./index-CxW7rN13.js";import"./Placeholder-BeYBD3ds.js";import"./index-Bnb5ILVd.js";const E=`# @ui5/webcomponents-react-charts

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
