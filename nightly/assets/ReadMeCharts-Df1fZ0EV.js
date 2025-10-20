import{r as i,j as t,T as l}from"./iframe-BFWc6ije.js";import{useMDXComponents as p}from"./index-DIwiR8-R.js";import{M as u,a as h,k as f}from"./blocks-_C0Ko-FB.js";import"./Tag-BlcbvGrz.js";import"./index-S-jzd0og.js";import{F as d}from"./CommandsAndQueries-RvyhHzLx.js";import"./copy-B0915CdE.js";import{T as b}from"./TableOfContent-DeyQFnDl.js";import{C}from"./index-Cun5h1pS.js";import{D}from"./BarChart.stories-Br-fnUPY.js";import{D as y}from"./BulletChart.stories-CDLwg6Sj.js";import{D as g}from"./ColumnChart.stories-B0ALeIPX.js";import{D as v}from"./ColumnChartWithTrend.stories-BSymaxNZ.js";import{D as x}from"./ComposedChart.stories-D-BzvSyF.js";import{D as j}from"./DonutChart.stories-pofI_6EU.js";import{D as w}from"./LineChart.stories-iTHVgZqH.js";import{D as R}from"./PieChart.stories-DYLpGhy3.js";import{D as I}from"./RadarChart.stories-FMN4ykhG.js";import{D as S}from"./RadialChart.stories-CK6jNlzC.js";import{D as T}from"./ScatterChart.stories-BOm5omkq.js";import"./preload-helper-PPVm8Dsz.js";import"./information-gUiWTFs7.js";import"./sys-enter-2-Czjj6c4O.js";import"./alert-Dwrii-iz.js";import"./index-BWXRaFCB.js";import"./index-BJhTX5aa.js";import"./index-Ammjaz44.js";import"./Link-C0nE2LNS.js";import"./index-D6ti5Aap.js";import"./index-BNrsjj3y.js";import"./index-BeiCFHJ0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NyszqC-C.js";import"./addCustomCSSWithScoping-DHZr8-1Q.js";import"./index-DYh3DUHT.js";import"./Carousel-DuD0Vfgn.js";import"./ScrollEnablement-BS-59KGT.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BCSEgmTX.js";import"./slim-arrow-left-DEKWgFXB.js";import"./DemoProps-D-mCqpYY.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C777mOyL.js";import"./ChartContainer-9gQCQ6hm.js";import"./index-fezgehlA.js";import"./useCancelAnimationFallback-DViM0lIg.js";import"./YAxisTicks-G0valUIG.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CcHJqr01.js";import"./ChartDataLabel-LRJRq3Ma.js";import"./useOnClickInternal-aETiBnbi.js";import"./react-content-loader.es-CPmDa9rT.js";import"./useIsRTL-DrH-Pm0z.js";import"./useLongestYAxisLabel-CRcrh3cD.js";import"./ComposedChart-IIo1fwuh.js";import"./Line-CvD9AL3_.js";import"./Scatter-Da2pQRWe.js";import"./index-eTwpyipw.js";import"./index-Bd7MD_MN.js";import"./Placeholder-Ce-mnZuJ.js";import"./index-6kNH_n1a.js";const $=`# @ui5/webcomponents-react-charts

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
