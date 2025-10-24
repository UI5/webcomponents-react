import{r as i,j as t,T as l}from"./iframe-DGliVLqx.js";import{useMDXComponents as p}from"./index-BKdQ_dPP.js";import{M as u,a as h,k as f}from"./blocks-DSVMoi0f.js";import"./Tag-D0qHMP--.js";import"./index-CUMj3eTR.js";import{F as d}from"./CommandsAndQueries-DhC-K5aV.js";import"./copy-BXMLotg5.js";import{T as b}from"./TableOfContent-Dui3Dwpi.js";import{C}from"./index-CyGR7Q5Q.js";import{D}from"./BarChart.stories-BRPQ15vg.js";import{D as y}from"./BulletChart.stories-DDrufbvg.js";import{D as g}from"./ColumnChart.stories-BBaISZFw.js";import{D as v}from"./ColumnChartWithTrend.stories-DOF3_kPf.js";import{D as x}from"./ComposedChart.stories-BBm2NsxM.js";import{D as j}from"./DonutChart.stories-DvE5l8Ye.js";import{D as w}from"./LineChart.stories-DbjB1uze.js";import{D as R}from"./PieChart.stories-B5ta0iGO.js";import{D as I}from"./RadarChart.stories-UYT4wvmN.js";import{D as S}from"./RadialChart.stories-AtqTo5f4.js";import{D as T}from"./ScatterChart.stories-DzoJjiuu.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DwX5G7SH.js";import"./sys-enter-2-CLhjZKEg.js";import"./alert-D8WWgafc.js";import"./index-0zoKCck7.js";import"./index-DDYQS3It.js";import"./index-C2z7U0T0.js";import"./Link-NPuKH9vo.js";import"./index-xskusYgR.js";import"./index-usRBaxBR.js";import"./index-Bnhuo37k.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xhvQd63o.js";import"./addCustomCSSWithScoping-H3JndsVD.js";import"./index-C-ihtk73.js";import"./Carousel-Du1fgUIC.js";import"./ScrollEnablement-7T92gtzO.js";import"./animate-JylhYHXj.js";import"./AnimationMode-oll89pK8.js";import"./slim-arrow-left-CB_VCzVs.js";import"./DemoProps-DFWV8hxP.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DHh5a2Ps.js";import"./ChartContainer-CFmO68lw.js";import"./index-B9jV6fm0.js";import"./useCancelAnimationFallback-Bz7406Kh.js";import"./YAxisTicks-BO-7Ii-8.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CRegMJX7.js";import"./ChartDataLabel-bewo7DdX.js";import"./useOnClickInternal-BX-_dLYH.js";import"./react-content-loader.es-BFlaQfP0.js";import"./useIsRTL-CbsPXVbG.js";import"./useLongestYAxisLabel-Fg2m4Qiv.js";import"./ComposedChart-DK4LL9YS.js";import"./Line-s6ye1QcC.js";import"./Scatter-CDhyRcqn.js";import"./index-lEdKXDKA.js";import"./index-BTqugv9p.js";import"./Placeholder-Xhb-cwE2.js";import"./index-BAAmR65X.js";const $=`# @ui5/webcomponents-react-charts

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
