import{n as i,j as t,N as l}from"./iframe-EDZrvS0_.js";import{useMDXComponents as p}from"./index-D_Zuzn6o.js";import{M as u,a as h,n as f}from"./blocks-CJ57z4uw.js";import"./Tag-Cv2B1DS4.js";import"./index-Bz0BV9YI.js";import"./CommandsAndQueries-DeBGirNK.js";import"./copy-Duyva9GD.js";import{T as d}from"./TableOfContent-CKHhbrGg.js";import{F as b}from"./Footer-BqU25DvW.js";import"./PageNotFound-BnvHWpv6.js";import{C}from"./index-BfqzSEdV.js";import{D}from"./BarChart.stories-Du97oc_N.js";import{D as y}from"./BulletChart.stories-8dvNM2vX.js";import{D as g}from"./ColumnChart.stories-CqNYi3ln.js";import{D as v}from"./ColumnChartWithTrend.stories-CAxT0zFk.js";import{D as x}from"./ComposedChart.stories-spcz2gl7.js";import{D as j}from"./DonutChart.stories-C5sfymmn.js";import{D as w}from"./LineChart.stories-D-3HY8r1.js";import{D as R}from"./PieChart.stories-BhJT4KlF.js";import{D as I}from"./RadarChart.stories-DzuYHGwE.js";import{D as S}from"./RadialChart.stories-DW-V7HQd.js";import{D as $}from"./ScatterChart.stories-DdRtpbvL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CAvj8-k7.js";import"./sys-enter-2-Eez9oUbi.js";import"./alert-nmCIz_tp.js";import"./Link-B5fvjtF5.js";import"./index-bU8se7-X.js";import"./index-C-NT2IXI.js";import"./index-dnOa7Ewn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_EBjNmUx.js";import"./addCustomCSSWithScoping-2V-LQLPO.js";import"./index-CZdLboFr.js";import"./index-cZywnC0F.js";import"./index-DezAYIwY.js";import"./index-D6CBwRDo.js";import"./Illustrations-Cp5J5qhx.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DBuryREk.js";import"./ScrollEnablement-K7_frRGH.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DawvsCNg.js";import"./slim-arrow-left-D9JeyCdI.js";import"./DemoProps-C3mspuvD.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-BDfOch32.js";import"./ChartContainer-Bqh2Mkn1.js";import"./index-jH6Hh22w.js";import"./useCancelAnimationFallback-6SMvj-Cq.js";import"./YAxisTicks-DFPA8eoZ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CFzPhDVh.js";import"./ChartDataLabel-DkQ47Nqr.js";import"./useOnClickInternal-B0GPM35T.js";import"./react-content-loader.es-LwvilXBB.js";import"./useIsRTL-BXcDMPx8.js";import"./useLongestYAxisLabel-xPXOuD1i.js";import"./ComposedChart-DqokKELt.js";import"./Line-yyfQXtF5.js";import"./Scatter-B4JzYOyc.js";import"./index-BcI17fZl.js";import"./index-DZyh5-Yn.js";import"./Placeholder-DqUKLEGG.js";import"./index-CHrS4HqW.js";const E=`# @ui5/webcomponents-react-charts

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
