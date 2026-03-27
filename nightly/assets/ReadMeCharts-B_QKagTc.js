import{n as i,j as t,N as l}from"./iframe-GiALwnwk.js";import{useMDXComponents as p}from"./index-D5Br25pp.js";import{M as u,a as h,n as f}from"./blocks-CWQEoHYq.js";import"./Tag-LkaAJwXo.js";import"./index-Df-74Kk_.js";import"./CommandsAndQueries-C_IHadBx.js";import"./copy-BjtWQX8c.js";import{T as d}from"./TableOfContent-B7J8UzQ4.js";import{F as b}from"./Footer-CTpmUzQu.js";import"./PageNotFound-lhidYwaf.js";import{C}from"./index-DVRQARZx.js";import{D}from"./BarChart.stories-QRzdZ9wS.js";import{D as y}from"./BulletChart.stories-CYHBMAeT.js";import{D as g}from"./ColumnChart.stories-ND9E0pyl.js";import{D as v}from"./ColumnChartWithTrend.stories-BDBpUrWg.js";import{D as x}from"./ComposedChart.stories-BJhvZlWN.js";import{D as j}from"./DonutChart.stories-C-_O6eTw.js";import{D as w}from"./LineChart.stories-BIBlUpwc.js";import{D as R}from"./PieChart.stories-BpKmnMgt.js";import{D as I}from"./RadarChart.stories-QD6fmw98.js";import{D as S}from"./RadialChart.stories-C5dmHivB.js";import{D as $}from"./ScatterChart.stories-B87_0wO3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DVV2_7m2.js";import"./sys-enter-2-BLXa0HBj.js";import"./alert-C-pLX4kq.js";import"./Link-Cl18BXak.js";import"./index-j7N-4kUz.js";import"./index-DsAl_UTx.js";import"./index-Q6Oco0u-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3O-UdkwG.js";import"./addCustomCSSWithScoping-DYkoSNAv.js";import"./index-C2OBDsL0.js";import"./index-_Dwwjvl6.js";import"./index-D48RNIki.js";import"./index-DmWjxGkj.js";import"./Illustrations-OXUCAhva.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-qRIP7sxy.js";import"./ScrollEnablement-Dfwd2yQV.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CRlALB9q.js";import"./slim-arrow-left-pRQ5LieD.js";import"./DemoProps-BThY4yFe.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-BuSG93-H.js";import"./ChartContainer-ZP0uvUkY.js";import"./index-CSIhU0w2.js";import"./useCancelAnimationFallback-Ctif1KwT.js";import"./YAxisTicks-lZmayLPT.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C_4kzHjX.js";import"./ChartDataLabel-B95wEX-r.js";import"./useOnClickInternal-DVsYTbLr.js";import"./react-content-loader.es-BCf08hgl.js";import"./useIsRTL-EHylbWiC.js";import"./useLongestYAxisLabel-CdaQhf63.js";import"./ComposedChart-DtVF3kUi.js";import"./Line-C37w1Ny3.js";import"./Scatter-Bg_oL0Yf.js";import"./index-B7uyX2O8.js";import"./index-VLgzg6eb.js";import"./Placeholder-BMh__HN9.js";import"./index-CEy0jQ3X.js";const E=`# @ui5/webcomponents-react-charts

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
