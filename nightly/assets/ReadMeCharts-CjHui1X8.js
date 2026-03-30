import{n as i,j as t,N as l}from"./iframe-vcfuMEkL.js";import{u as p,M as u,a as h,k as f}from"./blocks-CzMAxM7Q.js";import"./Tag-D032LoeK.js";import"./index-D5a6L_9E.js";import"./CommandsAndQueries-BLcCgFEg.js";import"./copy-CTlr8Wzd.js";import{T as d}from"./TableOfContent-DCSvZ8GC.js";import{F as b}from"./Footer-B8luth97.js";import"./PageNotFound-DOCrqF52.js";import{C}from"./index-DUCaIC6e.js";import{D}from"./BarChart.stories-BfWBCm9_.js";import{D as y}from"./BulletChart.stories-CADadW9M.js";import{D as g}from"./ColumnChart.stories-CTOgc43H.js";import{D as v}from"./ColumnChartWithTrend.stories-Nc31lMGS.js";import{D as x}from"./ComposedChart.stories-6HQ4Dd1X.js";import{D as j}from"./DonutChart.stories-D0f6RfIa.js";import{D as w}from"./LineChart.stories-Cla1LstK.js";import{D as R}from"./PieChart.stories-ytCrEdtS.js";import{D as I}from"./RadarChart.stories-C774yXMC.js";import{D as S}from"./RadialChart.stories-BssHOpcR.js";import{D as $}from"./ScatterChart.stories-Cel15EF8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DGdr23sZ.js";import"./sys-enter-2-BtTk1NF5.js";import"./alert-C2W9yseD.js";import"./Link-DAzSfgZb.js";import"./index-wWex-oQF.js";import"./index-Cbp9ERwo.js";import"./index-BMMtw8na.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7Mkof57M.js";import"./addCustomCSSWithScoping-BGtNyFBv.js";import"./index-CY4n9r1V.js";import"./index-BgY_pwT7.js";import"./index-C5MkOTN8.js";import"./index-CPCjGKn0.js";import"./Illustrations-DEQ9OpIe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DdDLU0Kd.js";import"./ScrollEnablement-BEZ0Hhjc.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BOTjXZXw.js";import"./slim-arrow-left-CbPf205R.js";import"./DemoProps-DTF8q-jA.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-Btf8pYHW.js";import"./ChartContainer-CG5VZJGg.js";import"./index-B95IPvM7.js";import"./useCancelAnimationFallback-Dz6cM9gO.js";import"./YAxisTicks-Bg_1VKST.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-32H0vUDx.js";import"./ChartDataLabel-C63W8I1l.js";import"./useOnClickInternal-BsxTrSef.js";import"./react-content-loader.es-BHg-3RiN.js";import"./useIsRTL-D4Wf5-Pu.js";import"./useLongestYAxisLabel-BNgR9W3x.js";import"./ComposedChart-M9gZcUIO.js";import"./Line-DFkqqj6Z.js";import"./Scatter-D1z9gfm1.js";import"./index-DRSlWGxe.js";import"./index-CBeKKMJu.js";import"./Placeholder-Trww7nza.js";import"./index-PuGhsR5_.js";const E=`# @ui5/webcomponents-react-charts

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
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function Gt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Gt as default};
