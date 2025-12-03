import{r as i,j as t,T as l}from"./iframe-B13aKv6v.js";import{useMDXComponents as p}from"./index-jGGDFlkx.js";import{M as u,a as h,m as f}from"./blocks-BRIltIP5.js";import"./Tag-HMLNjm9Q.js";import"./index-CFkX7Uxi.js";import{F as d}from"./CommandsAndQueries-7UV00q7g.js";import"./copy-Cbp2BA1I.js";import{T as b}from"./TableOfContent-DaHf-bNu.js";import{C}from"./index-BXQG0D53.js";import{D}from"./BarChart.stories-C_Goir_k.js";import{D as y}from"./BulletChart.stories-l3956Fa8.js";import{D as g}from"./ColumnChart.stories-B20clixR.js";import{D as v}from"./ColumnChartWithTrend.stories-CZJGjvB0.js";import{D as x}from"./ComposedChart.stories-DurMG88g.js";import{D as j}from"./DonutChart.stories-4If3fvjd.js";import{D as w}from"./LineChart.stories-CtfcbbwC.js";import{D as R}from"./PieChart.stories-D9OVqjWg.js";import{D as I}from"./RadarChart.stories-Djj-Fo9D.js";import{D as S}from"./RadialChart.stories-Bqh3Xwfs.js";import{D as T}from"./ScatterChart.stories-CVSIoS_-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C04ctOuE.js";import"./sys-enter-2-BKiD2CPA.js";import"./alert-CBEx5R4q.js";import"./index-hEU5-O_h.js";import"./index-xeEGs0j3.js";import"./index-Ccfu3Okh.js";import"./Link-Ch0RD6vq.js";import"./index-BTTMPEs9.js";import"./index-CEC3Cwv3.js";import"./index-BNwKsAav.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DC9Otah0.js";import"./addCustomCSSWithScoping-PHSG-stG.js";import"./index-DGzKTrI0.js";import"./Carousel-pEAMX2rF.js";import"./ScrollEnablement-DWkIXjW5.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Bm735qsp.js";import"./slim-arrow-left-BLtklwQx.js";import"./DemoProps-Dpn4kPSo.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DLjUSxIO.js";import"./ChartContainer-CaBMg-nh.js";import"./index-CK1a2hlY.js";import"./useCancelAnimationFallback-CAKeQiGc.js";import"./YAxisTicks-BNBSomgx.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BibHmTRK.js";import"./ChartDataLabel-BpRK-s05.js";import"./useOnClickInternal-Du_d7HD1.js";import"./react-content-loader.es-BX7vc7-w.js";import"./useIsRTL-SKaXeoMK.js";import"./useLongestYAxisLabel-A9BKpHji.js";import"./ComposedChart-CNor8vVC.js";import"./Line-CAckQ8Ja.js";import"./Scatter-DAbS5HHD.js";import"./index-CNT3kUyC.js";import"./index-oEkjcWQr.js";import"./Placeholder-B_BDu91P.js";import"./index-B96n3upC.js";const $=`# @ui5/webcomponents-react-charts

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
