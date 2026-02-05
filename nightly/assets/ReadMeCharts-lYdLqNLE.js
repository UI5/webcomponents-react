import{r as i,j as t,O as l}from"./iframe-BTfUB26H.js";import{useMDXComponents as p}from"./index-D3NtTefK.js";import{M as u,a as h,n as f}from"./blocks-AWBgpAl3.js";import"./Tag-BGFP3IN9.js";import"./index-B9IZul2P.js";import{F as d}from"./CommandsAndQueries-BWcq9mTF.js";import"./copy-D6Vht5qr.js";import{T as b}from"./TableOfContent-CzONlPB9.js";import{C}from"./index-CVhHV9t4.js";import{D}from"./BarChart.stories-Gcu2yOzp.js";import{D as y}from"./BulletChart.stories-BM1LgJQC.js";import{D as g}from"./ColumnChart.stories-iVSOisX-.js";import{D as v}from"./ColumnChartWithTrend.stories-r_mUfZnw.js";import{D as x}from"./ComposedChart.stories-C13KL4DB.js";import{D as j}from"./DonutChart.stories-7-zOlSl7.js";import{D as w}from"./LineChart.stories-S5Pajf99.js";import{D as R}from"./PieChart.stories-CNruQao3.js";import{D as I}from"./RadarChart.stories-CvJer8-U.js";import{D as S}from"./RadialChart.stories-BxWG-Zfv.js";import{D as $}from"./ScatterChart.stories-BhFOUu6r.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CLBM1nY5.js";import"./sys-enter-2-BbIZ6tOc.js";import"./alert-Dqm1dR2l.js";import"./index-DlJoRRYt.js";import"./index-BBFhDjTC.js";import"./index-Cuze-7Fn.js";import"./Link-BMxWJfW1.js";import"./index-BzZqyp7s.js";import"./index-BgDIorry.js";import"./index-BtUK59WI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-nj-G9WCr.js";import"./addCustomCSSWithScoping-BuL6JqQV.js";import"./index-F0g47Tza.js";import"./Carousel-BbN_54Fo.js";import"./ScrollEnablement-BXX9C0K8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Ciup4C22.js";import"./slim-arrow-left-D_8F8rjK.js";import"./DemoProps-BBx_rsvM.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B4x2xT1O.js";import"./ChartContainer-tkJpLsmp.js";import"./index-kc3KkV9f.js";import"./useCancelAnimationFallback-B9DcJwrW.js";import"./YAxisTicks-CjGMwwba.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Cxxe6y6C.js";import"./ChartDataLabel-Dbt1NL_Y.js";import"./useOnClickInternal-CiHkfrGj.js";import"./react-content-loader.es-Du99qtM4.js";import"./useIsRTL-b3M525lM.js";import"./useLongestYAxisLabel-DPY4T8VD.js";import"./ComposedChart-CjZexlae.js";import"./Line-CuD5W9L9.js";import"./Scatter-X31QqTHf.js";import"./index-C0hcjgeQ.js";import"./index-CL9rTb2P.js";import"./Placeholder-DK4tgC0z.js";import"./index-luMagoGO.js";const E=`# @ui5/webcomponents-react-charts

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
