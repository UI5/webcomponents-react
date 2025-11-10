import{r as i,j as t,T as l}from"./iframe-DwaN3YOb.js";import{useMDXComponents as p}from"./index-DJkPMHl0.js";import{M as u,a as h,m as f}from"./blocks-VOPJhWRb.js";import"./Tag-CvvDTrwW.js";import"./index-CeIuBzgz.js";import{F as d}from"./CommandsAndQueries-celHgEKj.js";import"./copy-CKG1fqk8.js";import{T as b}from"./TableOfContent-CSJmcthz.js";import{C}from"./index-DnJXb_TK.js";import{D}from"./BarChart.stories-CIWDocqd.js";import{D as y}from"./BulletChart.stories-UCFs88Zp.js";import{D as g}from"./ColumnChart.stories-zaXKo4G7.js";import{D as v}from"./ColumnChartWithTrend.stories-CwV8gQ1G.js";import{D as x}from"./ComposedChart.stories-DB-1btxt.js";import{D as j}from"./DonutChart.stories-BVxg1xxB.js";import{D as w}from"./LineChart.stories-VsR_YSkg.js";import{D as R}from"./PieChart.stories-zIYazElR.js";import{D as I}from"./RadarChart.stories-C432n3dR.js";import{D as S}from"./RadialChart.stories-DbUBdIA2.js";import{D as T}from"./ScatterChart.stories-QJdnAMMw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DlBGosYj.js";import"./sys-enter-2-D6KHkFFC.js";import"./alert-CbpKaM9g.js";import"./index-CVTJV5Os.js";import"./index-DjYkOeBC.js";import"./index-CUaYuXp6.js";import"./Link-DCuWG7Zr.js";import"./index-C3ayLo5Y.js";import"./index-Bi8h6EAq.js";import"./index-D4NPnlzD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-pPwV4WuA.js";import"./addCustomCSSWithScoping-CDiHCMLw.js";import"./index-DTu_z_3g.js";import"./Carousel-CT0vCsU1.js";import"./ScrollEnablement-lcRjFW01.js";import"./animate-JylhYHXj.js";import"./AnimationMode-UNINsDPM.js";import"./slim-arrow-left-CBm8HomQ.js";import"./DemoProps-CjMj_yff.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BRZG_yOm.js";import"./ChartContainer-C9AfL9N6.js";import"./index-xilM6z0g.js";import"./useCancelAnimationFallback-COh8YBiE.js";import"./YAxisTicks-CQA2lv2s.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CKAIcbiM.js";import"./ChartDataLabel-BYvrIFCi.js";import"./useOnClickInternal-DToXmjnJ.js";import"./react-content-loader.es-7WCfmpnC.js";import"./useIsRTL-DjGMBWnz.js";import"./useLongestYAxisLabel-BUVp8UMd.js";import"./ComposedChart-rMwGN5WZ.js";import"./Line-DH0eRH9b.js";import"./Scatter-QYhIEhbb.js";import"./index-BR8UIGKF.js";import"./index-BGFL67VT.js";import"./Placeholder-BTefsEJ0.js";import"./index-DBJCdiwJ.js";const $=`# @ui5/webcomponents-react-charts

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
