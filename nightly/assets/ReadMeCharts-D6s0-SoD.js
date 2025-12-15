import{r as i,j as t,T as l}from"./iframe-DBAXgyPJ.js";import{useMDXComponents as p}from"./index-DeQCSiR4.js";import{M as u,a as h,n as f}from"./blocks-DNEJwZiK.js";import"./Tag-BnY7EcLs.js";import"./index-BcpDNXQJ.js";import{F as d}from"./CommandsAndQueries-Cf1MLqXD.js";import"./copy-Be-lNgbc.js";import{T as b}from"./TableOfContent-C8GiN2RX.js";import{C}from"./index-pTXBDIwq.js";import{D}from"./BarChart.stories-8NSoNg-4.js";import{D as y}from"./BulletChart.stories-CiwkHaml.js";import{D as g}from"./ColumnChart.stories-BYB9aSA-.js";import{D as v}from"./ColumnChartWithTrend.stories-BwBePFYF.js";import{D as x}from"./ComposedChart.stories-Acwf9GnG.js";import{D as j}from"./DonutChart.stories-DAczQitH.js";import{D as w}from"./LineChart.stories-ChOBL_qx.js";import{D as R}from"./PieChart.stories-CaOoz4Sl.js";import{D as I}from"./RadarChart.stories-KruHNdHX.js";import{D as S}from"./RadialChart.stories-ZT0IHv9d.js";import{D as T}from"./ScatterChart.stories-B_Q1iUP8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DLrkR3Ug.js";import"./sys-enter-2-6buniplq.js";import"./alert-C9HPjUKN.js";import"./index-iFpZKkV_.js";import"./index-DBjIxNL0.js";import"./index-DtoZ2Fe-.js";import"./Link-CKvSDmqR.js";import"./index-Duoz4br-.js";import"./index-DQ_Wvw6H.js";import"./index-BPy_kvjb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlXvTyjP.js";import"./addCustomCSSWithScoping-BR1T3wHP.js";import"./index-CYYeCl2u.js";import"./Carousel-BvA7MyPW.js";import"./ScrollEnablement-CAGdg6Bw.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CTSPDVZk.js";import"./slim-arrow-left-_ih6brVX.js";import"./DemoProps-DIOJT8vV.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D0k8aVQx.js";import"./ChartContainer-UI1d1zfX.js";import"./index-DXiNIq2l.js";import"./useCancelAnimationFallback-DMDU3Ni7.js";import"./YAxisTicks-BN6RS0CB.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dmr9gKEU.js";import"./ChartDataLabel-CNMG57Br.js";import"./useOnClickInternal-DFrgBYfx.js";import"./react-content-loader.es-0SiguE5p.js";import"./useIsRTL-eqRVZ4IM.js";import"./useLongestYAxisLabel-BTNngW4b.js";import"./ComposedChart-COUdxjnA.js";import"./Line-BnGDOc9I.js";import"./Scatter-BBMV5zvn.js";import"./index-CHteSO3D.js";import"./index-ChaQg173.js";import"./Placeholder-7ogeDJjd.js";import"./index-CBo7CwMZ.js";const $=`# @ui5/webcomponents-react-charts

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
