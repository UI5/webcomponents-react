import{r as i,j as t,O as l}from"./iframe-COmYM7FM.js";import{useMDXComponents as p}from"./index-nJK3ZT8W.js";import{M as u,a as h,n as f}from"./blocks-DAY1TuCU.js";import"./Tag-C7vo2194.js";import"./index-8dZG1YHw.js";import{F as d}from"./CommandsAndQueries-BOWLtTE6.js";import"./copy-CXZAgH3a.js";import{T as b}from"./TableOfContent-tjnC9ti3.js";import{C}from"./index-D5B7TUFw.js";import{D}from"./BarChart.stories-Ckb3apIl.js";import{D as y}from"./BulletChart.stories-CMBm2TDu.js";import{D as g}from"./ColumnChart.stories-Bj1ki59l.js";import{D as v}from"./ColumnChartWithTrend.stories-C-QXrE2H.js";import{D as x}from"./ComposedChart.stories-BE5xP4sr.js";import{D as j}from"./DonutChart.stories-CE28lYCK.js";import{D as w}from"./LineChart.stories-DxA4BjE7.js";import{D as R}from"./PieChart.stories-BMVJrQcj.js";import{D as I}from"./RadarChart.stories-Bv0qn8aK.js";import{D as S}from"./RadialChart.stories-W-1P-WW3.js";import{D as $}from"./ScatterChart.stories-wXhmQU5U.js";import"./preload-helper-PPVm8Dsz.js";import"./information-le6myuh6.js";import"./sys-enter-2-CL75I8bf.js";import"./alert-lhOUxaTm.js";import"./index-Bf48pKls.js";import"./index-Baj766Uq.js";import"./index-YGBVCLbI.js";import"./Link-CcuckqWN.js";import"./index-C84ZyqAr.js";import"./index-WRRg6L2_.js";import"./index-CGzRflPR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJJkccm1.js";import"./addCustomCSSWithScoping-CPOeZ7S_.js";import"./index-DFr8Hmr1.js";import"./Carousel-BWrxaN-k.js";import"./ScrollEnablement-DvHuSSVb.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DG99sFGB.js";import"./slim-arrow-left-Dk61mTAO.js";import"./DemoProps-C3SfZTEf.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-J6DCSJGf.js";import"./ChartContainer-DkQHSAtg.js";import"./index-BMQcik-b.js";import"./useCancelAnimationFallback-DnV8R5of.js";import"./YAxisTicks-_P90rRu6.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CrYP5wiw.js";import"./ChartDataLabel-igNATclI.js";import"./useOnClickInternal-Dk79iTEf.js";import"./react-content-loader.es-Dip5DFmJ.js";import"./useIsRTL-B9v40RyR.js";import"./useLongestYAxisLabel-wjQ0GYSw.js";import"./ComposedChart-BeGW5Fx3.js";import"./Line-sJtvmyMT.js";import"./Scatter-B_ZGf4Gm.js";import"./index-BaD9l1wB.js";import"./index-DHknBWJX.js";import"./Placeholder-tCZYdM8q.js";import"./index-BpiftUfn.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
