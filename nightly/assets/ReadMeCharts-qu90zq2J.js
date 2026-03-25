import{q as i,j as t,Q as l}from"./iframe-DDwr9UO6.js";import{useMDXComponents as p}from"./index-CQ-nOjPT.js";import{M as u,a as h,n as f}from"./blocks-4n5he8k4.js";import"./Tag-85Xc8Sa5.js";import"./index-Vbr96S-1.js";import"./CommandsAndQueries-CW-He0gJ.js";import"./copy-DiJyffUH.js";import{T as d}from"./TableOfContent-DjWz_Doe.js";import{F as b}from"./Footer-DJ4mPzj6.js";import"./PageNotFound-4kcWV7p6.js";import{C}from"./index-_e9rq755.js";import{D}from"./BarChart.stories-BNhg_5Gg.js";import{D as y}from"./BulletChart.stories-Dh7KLEBh.js";import{D as g}from"./ColumnChart.stories-CL01VqOk.js";import{D as v}from"./ColumnChartWithTrend.stories-SEie8GUW.js";import{D as x}from"./ComposedChart.stories-CDxAcIcs.js";import{D as j}from"./DonutChart.stories-P18SW9yJ.js";import{D as w}from"./LineChart.stories-BFCZaxhC.js";import{D as R}from"./PieChart.stories-Bt8Ce-i_.js";import{D as I}from"./RadarChart.stories-BUR98qtQ.js";import{D as S}from"./RadialChart.stories-DKJZi7fb.js";import{D as $}from"./ScatterChart.stories-BkKDbzeY.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B0DjFwsh.js";import"./sys-enter-2-CHn1eYD9.js";import"./alert-t6gJkZ57.js";import"./Link-ioSKjh9y.js";import"./index-BlO2ebQP.js";import"./index-DBFNlRvR.js";import"./index-DlsPhuqx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B4AOINVU.js";import"./addCustomCSSWithScoping-BY1iD3uW.js";import"./index-BmgPGln0.js";import"./index-BubbpkEs.js";import"./index-CwOzyR0V.js";import"./index-DJm0resn.js";import"./Illustrations-CKFjYZ6M.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-CjdLalN6.js";import"./ScrollEnablement-BO8X0bLa.js";import"./animate-JylhYHXj.js";import"./AnimationMode-ClJ1ghIF.js";import"./slim-arrow-left-npZkqinY.js";import"./DemoProps-DjQERDn0.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-gmxUXFNW.js";import"./ChartContainer-BuTUb0Y_.js";import"./index-CgeWzUMI.js";import"./useCancelAnimationFallback-Dpk_RI6H.js";import"./YAxisTicks-BnQGgiWW.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CIGlqUJ8.js";import"./ChartDataLabel-mqjGlfxZ.js";import"./useOnClickInternal-vOnqDw4t.js";import"./react-content-loader.es-BWxfxLHc.js";import"./useIsRTL-CL5Aty9r.js";import"./useLongestYAxisLabel-CqePHRKj.js";import"./ComposedChart-B5YdJ2Gk.js";import"./Line-CPxB2K7I.js";import"./Scatter-DZSZ85f-.js";import"./index-Dox9j-sh.js";import"./index-RHWKQY2S.js";import"./Placeholder-BFl6Gh91.js";import"./index-D6WgWxYe.js";const E=`# @ui5/webcomponents-react-charts

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
