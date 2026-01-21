import{r as i,j as t,T as l}from"./iframe-Dn-CEP49.js";import{useMDXComponents as p}from"./index-CkYweSLX.js";import{M as u,a as h,n as f}from"./blocks-CpkBRtZ8.js";import"./Tag-DCXTYexA.js";import"./index-Buh7M_8w.js";import{F as d}from"./CommandsAndQueries-CJE7oJQ6.js";import"./copy-ZbpB2fNv.js";import{T as b}from"./TableOfContent-CrdJgPf8.js";import{C}from"./index-B_8XPkOf.js";import{D}from"./BarChart.stories-D7UqR2bC.js";import{D as y}from"./BulletChart.stories-Chzh96os.js";import{D as g}from"./ColumnChart.stories-CZXr6C2e.js";import{D as v}from"./ColumnChartWithTrend.stories-0NqbksyA.js";import{D as x}from"./ComposedChart.stories-yCPDavDy.js";import{D as j}from"./DonutChart.stories-Bj9S__CC.js";import{D as w}from"./LineChart.stories-BRjSBifo.js";import{D as R}from"./PieChart.stories-By8TREAq.js";import{D as I}from"./RadarChart.stories-C1fWPjZO.js";import{D as S}from"./RadialChart.stories-CI871J9d.js";import{D as T}from"./ScatterChart.stories-B6c8IVeN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bo7A1j3N.js";import"./sys-enter-2-XS_2r-qd.js";import"./alert-CjMhygJT.js";import"./index-Bm8hRwBU.js";import"./index-Cw6Uj_ev.js";import"./index-DzcQWg4n.js";import"./Link-CCOdGIG_.js";import"./index-BiP2f5WB.js";import"./index-DwdL8nG5.js";import"./index-pKV4gQju.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOWzKJJk.js";import"./addCustomCSSWithScoping-BIQAchjq.js";import"./index-6NbWjJvY.js";import"./Carousel-DmLKC2MQ.js";import"./ScrollEnablement-zAaUIY5k.js";import"./animate-JylhYHXj.js";import"./AnimationMode-2ZvQFWhL.js";import"./slim-arrow-left-Bxgee4iP.js";import"./DemoProps-sOi3Gwuj.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-ohBo6xrR.js";import"./ChartContainer-CuyoOVO1.js";import"./index-Ct561GKj.js";import"./useCancelAnimationFallback-6n4kyGkn.js";import"./YAxisTicks-89ow9nPQ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-9ajYTllI.js";import"./ChartDataLabel-DeypDCKB.js";import"./useOnClickInternal-B6iI4n1M.js";import"./react-content-loader.es-DWwU6xd3.js";import"./useIsRTL-C3EIIsQq.js";import"./useLongestYAxisLabel-BuUW3qjv.js";import"./ComposedChart-CJ9RqoXp.js";import"./Line-BPrRrpR_.js";import"./Scatter-D7U-ZBFa.js";import"./index-Dy2oEt42.js";import"./index-BDbUDBZD.js";import"./Placeholder-BbuhpyJf.js";import"./index-F4Ab5REj.js";const $=`# @ui5/webcomponents-react-charts

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
