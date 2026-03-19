import{q as i,j as t,Q as l}from"./iframe-D9XQThMB.js";import{useMDXComponents as p}from"./index-BFkPJIs4.js";import{M as u,a as h,n as f}from"./blocks-CsZckq-p.js";import"./Tag-NpQQnYo4.js";import"./index-BWcAyF8h.js";import"./CommandsAndQueries-BBuqlp9J.js";import"./copy-CyvuSNR_.js";import{T as d}from"./TableOfContent-Bpyqe4Fu.js";import{F as b}from"./Footer-8Yr8m1IV.js";import"./PageNotFound-DktVNoBl.js";import{C}from"./index-yLzdp2Lk.js";import{D}from"./BarChart.stories-C8OkGAZb.js";import{D as y}from"./BulletChart.stories-flz4_WjI.js";import{D as g}from"./ColumnChart.stories-C1neypuE.js";import{D as v}from"./ColumnChartWithTrend.stories-Qhv39eiQ.js";import{D as x}from"./ComposedChart.stories-Cg2SIk2u.js";import{D as j}from"./DonutChart.stories-S17emvOn.js";import{D as w}from"./LineChart.stories-BNm3WJy9.js";import{D as R}from"./PieChart.stories-B2Wp4w8q.js";import{D as I}from"./RadarChart.stories-geLjLosZ.js";import{D as S}from"./RadialChart.stories-fo2o3FJw.js";import{D as $}from"./ScatterChart.stories-CUOpXoFl.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bvi0jW5b.js";import"./sys-enter-2-Bex-whDb.js";import"./alert-CKQIr3Jj.js";import"./Link-CJ7-xxSX.js";import"./index-BDim0UZ8.js";import"./index-C40uNmLM.js";import"./index-9BnKq7JY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DrummEDM.js";import"./addCustomCSSWithScoping-BEVVchOt.js";import"./index-CjxO355V.js";import"./index-CxgWM8Dp.js";import"./index-BlKrBUMf.js";import"./index-BtpxSXz8.js";import"./Illustrations-DGm-82Ik.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DRfm32rR.js";import"./ScrollEnablement-D_xuZieI.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DYOzjrFa.js";import"./slim-arrow-left-BTZnTu-V.js";import"./DemoProps-CClbgzpT.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-kJ1HRIwM.js";import"./ChartContainer-DxLjV_1S.js";import"./index-B3U-GzKE.js";import"./useCancelAnimationFallback-Dt8I-W71.js";import"./YAxisTicks-DSK53XsO.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DKrFs8M_.js";import"./ChartDataLabel-BKO2W6tT.js";import"./useOnClickInternal-CBfq9ruc.js";import"./react-content-loader.es-DcFIPiF3.js";import"./useIsRTL-BRqaQsDk.js";import"./useLongestYAxisLabel-B0609Lqo.js";import"./ComposedChart-8FPjftgJ.js";import"./Line-pvJTkAHp.js";import"./Scatter-Ct0eBGeh.js";import"./index-Bhg5x7La.js";import"./index-BGmscd3z.js";import"./Placeholder-BHFB1pss.js";import"./index-DRhBuvEx.js";const E=`# @ui5/webcomponents-react-charts

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
