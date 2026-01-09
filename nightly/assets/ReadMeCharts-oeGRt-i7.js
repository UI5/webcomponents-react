import{r as i,j as t,T as l}from"./iframe-Cofg3NYG.js";import{useMDXComponents as p}from"./index-IvWpiXeJ.js";import{M as u,a as h,n as f}from"./blocks-2ghgTj-P.js";import"./Tag-BxZYpQJm.js";import"./index-DSsCdZng.js";import{F as d}from"./CommandsAndQueries-84NNvrTK.js";import"./copy-CvrT2nje.js";import{T as b}from"./TableOfContent-Critm5DJ.js";import{C}from"./index-SxdY92rB.js";import{D}from"./BarChart.stories-6YQf3ECC.js";import{D as y}from"./BulletChart.stories-Dmb1lCiZ.js";import{D as g}from"./ColumnChart.stories-C2NRTXbo.js";import{D as v}from"./ColumnChartWithTrend.stories-CVJdnA4b.js";import{D as x}from"./ComposedChart.stories-DKXu8J9P.js";import{D as j}from"./DonutChart.stories-D3wPkM1u.js";import{D as w}from"./LineChart.stories-qMsjQztZ.js";import{D as R}from"./PieChart.stories-rF4bfMeA.js";import{D as I}from"./RadarChart.stories-ekxw8J32.js";import{D as S}from"./RadialChart.stories-DGP0xVwo.js";import{D as T}from"./ScatterChart.stories-hWLyG2cc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BJciHBvQ.js";import"./sys-enter-2-BCByF-gd.js";import"./alert-bPEScLdE.js";import"./index-CzRl8rAY.js";import"./index-CuRMS7av.js";import"./index-CBua_waR.js";import"./Link-CQPXWWzt.js";import"./index-DF1YQmtO.js";import"./index-BRqSe85k.js";import"./index-BLGq_g5y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCAV-AOe.js";import"./addCustomCSSWithScoping-BkkC1l0R.js";import"./index-DsO0qxxT.js";import"./Carousel-DezomzFX.js";import"./ScrollEnablement-Bd2IYKOt.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BEEd-oJ1.js";import"./slim-arrow-left-C_ji_1zJ.js";import"./DemoProps-a9NvCAbD.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Clr7P3A7.js";import"./ChartContainer-f_Rfcs_v.js";import"./index-eAFdqwk5.js";import"./useCancelAnimationFallback-C_V5xcnu.js";import"./YAxisTicks-DNlJ1dvQ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BBJ948oi.js";import"./ChartDataLabel-DgxAs8Zl.js";import"./useOnClickInternal-DlPQrQlY.js";import"./react-content-loader.es-DpibK2op.js";import"./useIsRTL-DBrJUf6F.js";import"./useLongestYAxisLabel-BLHUcDhS.js";import"./ComposedChart-CFs259so.js";import"./Line-DOUm-_x3.js";import"./Scatter-CwGwXuJv.js";import"./index-CpDxAIh6.js";import"./index-DDhN4x4k.js";import"./Placeholder-CMfe4DMY.js";import"./index-C9wjzyXO.js";const $=`# @ui5/webcomponents-react-charts

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
