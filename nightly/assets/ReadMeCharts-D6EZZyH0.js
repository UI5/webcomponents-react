import{q as i,j as t,Q as l}from"./iframe-B9oS8Tdw.js";import{useMDXComponents as p}from"./index-DBcwplNT.js";import{M as u,a as h,n as f}from"./blocks-n99WgqUD.js";import"./Tag-C4hdjWJC.js";import"./index-Bpds4hIG.js";import"./CommandsAndQueries-NcZGCQIw.js";import"./copy-Bqdwh9J4.js";import{T as d}from"./TableOfContent-D0gNO-3P.js";import{F as b}from"./Footer-B2MFyv0P.js";import"./PageNotFound-CdK5m3jv.js";import{C}from"./index-D8ni-Kwg.js";import{D}from"./BarChart.stories-5Qygv8dy.js";import{D as y}from"./BulletChart.stories-cvaqVFLY.js";import{D as g}from"./ColumnChart.stories-CzouwQib.js";import{D as v}from"./ColumnChartWithTrend.stories-D4rZ_LJ9.js";import{D as x}from"./ComposedChart.stories-HkejbNPD.js";import{D as j}from"./DonutChart.stories-Bs5TNV8B.js";import{D as w}from"./LineChart.stories-BiqqAq10.js";import{D as R}from"./PieChart.stories-8LnhH1AC.js";import{D as I}from"./RadarChart.stories-DreZvUrZ.js";import{D as S}from"./RadialChart.stories-BrP9wpE9.js";import{D as $}from"./ScatterChart.stories-B4vNM_qs.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BlcYwQMc.js";import"./sys-enter-2-DdkiI-3L.js";import"./alert-D212h0_R.js";import"./Link-BttQiJAm.js";import"./index-MP9MDZQa.js";import"./index-CIPzfYgd.js";import"./index-XdY2VQGh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CKo2xI1N.js";import"./addCustomCSSWithScoping-BjXuQDKZ.js";import"./index-0NZf9e3S.js";import"./index-DzuQRrNG.js";import"./index-BYYicg2U.js";import"./index-C2K37CCg.js";import"./Illustrations-Hb5RsbMM.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-B_G7snb1.js";import"./ScrollEnablement-CuPUrrc1.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DWurwh0W.js";import"./slim-arrow-left-BW7j3SEb.js";import"./DemoProps-PzvIZHVC.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C9LzXqDz.js";import"./ChartContainer-BYhpkp2J.js";import"./index-BkXXTU95.js";import"./useCancelAnimationFallback-AKmQbpfA.js";import"./YAxisTicks-CSY5u28j.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DJpXTbRW.js";import"./ChartDataLabel-D7Lusymg.js";import"./useOnClickInternal-DIxuPbee.js";import"./react-content-loader.es-DdoesVtU.js";import"./useIsRTL-C-tn0cQ7.js";import"./useLongestYAxisLabel-3WcpvTbg.js";import"./ComposedChart-CHyETblp.js";import"./Line-DdRWmUvJ.js";import"./Scatter-BywbXoOb.js";import"./index-CzMbEnY6.js";import"./index-DZvKf5lk.js";import"./Placeholder-D-AkC8pk.js";import"./index-C6CpkoY9.js";const E=`# @ui5/webcomponents-react-charts

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
