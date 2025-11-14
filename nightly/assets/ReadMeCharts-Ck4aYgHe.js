import{r as i,j as t,T as l}from"./iframe-C7IxwDmR.js";import{useMDXComponents as p}from"./index-CbSg1oVF.js";import{M as u,a as h,m as f}from"./blocks-3mjErVLE.js";import"./Tag-C9e9pWXA.js";import"./index-BN5pmzGS.js";import{F as d}from"./CommandsAndQueries-D3KUBOYC.js";import"./copy-D-VhlFxG.js";import{T as b}from"./TableOfContent-BnKOdT6F.js";import{C}from"./index-CEXWD5NR.js";import{D}from"./BarChart.stories-CYE9b-8H.js";import{D as y}from"./BulletChart.stories-CWnp7fad.js";import{D as g}from"./ColumnChart.stories-D6M11ATF.js";import{D as v}from"./ColumnChartWithTrend.stories-Ck56EDSd.js";import{D as x}from"./ComposedChart.stories-DwuVv5lE.js";import{D as j}from"./DonutChart.stories-CJmP0WVn.js";import{D as w}from"./LineChart.stories-C_TSdzG5.js";import{D as R}from"./PieChart.stories-CLy9gg5h.js";import{D as I}from"./RadarChart.stories-DM4LAHwZ.js";import{D as S}from"./RadialChart.stories-Cw8LJY2i.js";import{D as T}from"./ScatterChart.stories-BayJIHX7.js";import"./preload-helper-PPVm8Dsz.js";import"./information-wiA8vfAE.js";import"./sys-enter-2-j2JxX-0l.js";import"./alert-Cm08TFjk.js";import"./index-CfKFL4Pe.js";import"./index-DScPik_c.js";import"./index-BiORqeCW.js";import"./Link-CCpfCikN.js";import"./index-CHmX3iCn.js";import"./index-DifvSs4M.js";import"./index-C1RQfiDX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-me-lZqyi.js";import"./addCustomCSSWithScoping-Ddb1r2sC.js";import"./index-Btmndd9w.js";import"./Carousel-DNasOYre.js";import"./ScrollEnablement-BD9V_oV0.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cr3K1vQb.js";import"./slim-arrow-left-BTlSWt5G.js";import"./DemoProps-wpNke-Ll.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C2X64LQm.js";import"./ChartContainer-CxFlBjCV.js";import"./index-CR6Z_Rhf.js";import"./useCancelAnimationFallback-Dfj8nriY.js";import"./YAxisTicks-Cf7pDFbm.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DlsxPnAU.js";import"./ChartDataLabel-CaIai5Gk.js";import"./useOnClickInternal-LE__NOZQ.js";import"./react-content-loader.es-BI6XMBW7.js";import"./useIsRTL-DDhHKcDh.js";import"./useLongestYAxisLabel-CIif_Lfp.js";import"./ComposedChart-DdmijjPq.js";import"./Line-DibjaHkt.js";import"./Scatter-BkDdo_up.js";import"./index-ZUCHJvds.js";import"./index-CLa8Df60.js";import"./Placeholder-Br3pJ8ea.js";import"./index-BGEghQZP.js";const $=`# @ui5/webcomponents-react-charts

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
