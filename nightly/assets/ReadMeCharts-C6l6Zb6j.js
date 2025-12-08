import{r as i,j as t,T as l}from"./iframe-BF6vIVo6.js";import{useMDXComponents as p}from"./index-LfmOxbs8.js";import{M as u,a as h,m as f}from"./blocks-BEVYxzM4.js";import"./Tag-Bbrw4Mg6.js";import"./index-COzDMtK9.js";import{F as d}from"./CommandsAndQueries-BZWG0qBB.js";import"./copy-BsYfEWuv.js";import{T as b}from"./TableOfContent-D6SS1QPi.js";import{C}from"./index-n1eYXeYD.js";import{D}from"./BarChart.stories-DWUOLx2v.js";import{D as y}from"./BulletChart.stories-Nc9FLXxi.js";import{D as g}from"./ColumnChart.stories-ZVA_W0o3.js";import{D as v}from"./ColumnChartWithTrend.stories-C5Nt5eDe.js";import{D as x}from"./ComposedChart.stories-y4IErCFJ.js";import{D as j}from"./DonutChart.stories-DNwU60Ef.js";import{D as w}from"./LineChart.stories-W4sfmsQj.js";import{D as R}from"./PieChart.stories-B83LjUt1.js";import{D as I}from"./RadarChart.stories-30ZvZ3vz.js";import{D as S}from"./RadialChart.stories-BTgot6zJ.js";import{D as T}from"./ScatterChart.stories-CVSWSGC_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-v6F873AP.js";import"./sys-enter-2-WuXn7rus.js";import"./alert-C89y0cfE.js";import"./index-DdhWaCX8.js";import"./index-CTIQkpgO.js";import"./index-DdICQhrF.js";import"./Link-C3nR6kZV.js";import"./index-DoBDF59y.js";import"./index-B5sOe_-e.js";import"./index-CKX87Paa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BsUQb2cX.js";import"./addCustomCSSWithScoping-B22aBF7H.js";import"./index-Do8jjW18.js";import"./Carousel-C19RGQD-.js";import"./ScrollEnablement-Shykj-eY.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CQNSjjK8.js";import"./slim-arrow-left-BiwJJPt_.js";import"./DemoProps-BLtCOXG7.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B19yzFky.js";import"./ChartContainer-DQt-wtu6.js";import"./index-DStEZLfo.js";import"./useCancelAnimationFallback-D7Sr9oRL.js";import"./YAxisTicks-BG12tgOH.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dj6b54DB.js";import"./ChartDataLabel-DKZ90gb-.js";import"./useOnClickInternal-BDHuDRzD.js";import"./react-content-loader.es-DGsBfP3W.js";import"./useIsRTL-MBIUA1Lt.js";import"./useLongestYAxisLabel-CGAh68zu.js";import"./ComposedChart-iw_J218g.js";import"./Line-Bs2x3sT5.js";import"./Scatter-DvP2FfJ3.js";import"./index-BAV7ePHo.js";import"./index-CM8OQuO-.js";import"./Placeholder-likvoFwz.js";import"./index-jjPgJXB_.js";const $=`# @ui5/webcomponents-react-charts

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
