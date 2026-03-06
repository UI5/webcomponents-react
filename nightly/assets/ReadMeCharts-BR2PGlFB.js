import{q as i,j as t,Q as l}from"./iframe-2x_0PLRY.js";import{useMDXComponents as p}from"./index-C4Rs_8Uq.js";import{M as u,a as h,n as f}from"./blocks-DrJbgW55.js";import"./Tag-CYhgI4gb.js";import"./index-C-fDGoUi.js";import"./CommandsAndQueries-CvWMTcrY.js";import"./copy-DSjSLU2X.js";import{T as d}from"./TableOfContent-CdwxKZEk.js";import{F as b}from"./Footer-C23Ewd88.js";import"./PageNotFound-GiConHCM.js";import{C}from"./index-e6WZ3V-1.js";import{D}from"./BarChart.stories-hHD0-VlJ.js";import{D as y}from"./BulletChart.stories-CLawHzxb.js";import{D as g}from"./ColumnChart.stories-edvqn34R.js";import{D as v}from"./ColumnChartWithTrend.stories-Cx6aNgGb.js";import{D as x}from"./ComposedChart.stories-TUB1VS5l.js";import{D as j}from"./DonutChart.stories-wgjAHHMa.js";import{D as w}from"./LineChart.stories-C9OgWz-V.js";import{D as R}from"./PieChart.stories-D9z8yH4L.js";import{D as I}from"./RadarChart.stories-R3bpMiIW.js";import{D as S}from"./RadialChart.stories-DnY9z9Yo.js";import{D as $}from"./ScatterChart.stories-CS-6f8Z2.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CQy15gwz.js";import"./sys-enter-2-fcqn0uC8.js";import"./alert-DZyPZUjF.js";import"./Link-Dg5-mm9g.js";import"./index-CZ7o6xvr.js";import"./index-lA2D-rzF.js";import"./index-B75d9fwz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUHmvjuE.js";import"./addCustomCSSWithScoping-CuKwKJpy.js";import"./index-Bs9Uk8tv.js";import"./index-DdARDxKZ.js";import"./index-1eyneICk.js";import"./index-Da9gu6ir.js";import"./Illustrations-GJByOHnh.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-CB8rCzD0.js";import"./ScrollEnablement-B0eGwDT6.js";import"./animate-JylhYHXj.js";import"./AnimationMode-NR2rHhq9.js";import"./slim-arrow-left-CFz2GRas.js";import"./DemoProps-0_bDTihP.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CYEwfA0i.js";import"./ChartContainer-CWVVlaVw.js";import"./index-CE5xEOkh.js";import"./useCancelAnimationFallback-CMrCluJI.js";import"./YAxisTicks-DV2XiHpR.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DGmTcMLk.js";import"./ChartDataLabel-CXAlQg34.js";import"./useOnClickInternal-BylWWqaw.js";import"./react-content-loader.es-L5JV6fNW.js";import"./useIsRTL-ZD4jjhta.js";import"./useLongestYAxisLabel-BjcTvCJJ.js";import"./ComposedChart-CCmBqcSq.js";import"./Line-vvgYS44K.js";import"./Scatter-CtTFVlsC.js";import"./index-DmZWhG70.js";import"./index-wti6grSZ.js";import"./Placeholder-BQ6fLZL0.js";import"./index-J4PdDbhz.js";const E=`# @ui5/webcomponents-react-charts

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
