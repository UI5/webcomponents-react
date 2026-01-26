import{r as i,j as t,T as l}from"./iframe-D_U86qCv.js";import{useMDXComponents as p}from"./index-Bg9tEBEE.js";import{M as u,a as h,n as f}from"./blocks-D61FyfHK.js";import"./Tag-B3d92F0E.js";import"./index-DY3WUczD.js";import{F as d}from"./CommandsAndQueries-TugN8T6l.js";import"./copy-Crjp4Ac1.js";import{T as b}from"./TableOfContent-CQJqnL0A.js";import{C}from"./index-D4D6EQns.js";import{D}from"./BarChart.stories-DB8OmA0o.js";import{D as y}from"./BulletChart.stories-DrawqJ6X.js";import{D as g}from"./ColumnChart.stories-C4ovFH2D.js";import{D as v}from"./ColumnChartWithTrend.stories-Dc2K6Bfx.js";import{D as x}from"./ComposedChart.stories-BzKeaVsC.js";import{D as j}from"./DonutChart.stories-DE5f6Cvs.js";import{D as w}from"./LineChart.stories-Cx7bo2dy.js";import{D as R}from"./PieChart.stories-C4biRhLz.js";import{D as I}from"./RadarChart.stories-DADK-gbH.js";import{D as S}from"./RadialChart.stories-CLLrIEaK.js";import{D as T}from"./ScatterChart.stories-BQdYARjQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DVWvWtO-.js";import"./sys-enter-2-CVo9vLlV.js";import"./alert-Dk_EKidz.js";import"./index-DfxZA3Js.js";import"./index-DQ8_SEuH.js";import"./index-D9Q3nud9.js";import"./Link-Cw10wX3R.js";import"./index-hUHwRYTv.js";import"./index-BgwtpBeW.js";import"./index-DjRObmYp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AccWPG8C.js";import"./addCustomCSSWithScoping-peiruV29.js";import"./index-WEtnzuU5.js";import"./Carousel-BcZSDQGB.js";import"./ScrollEnablement-Bn4R2vMs.js";import"./animate-JylhYHXj.js";import"./AnimationMode-uCcocOyC.js";import"./slim-arrow-left-DUqHtTNX.js";import"./DemoProps-Ce7T0wwE.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-wsAt-T7a.js";import"./ChartContainer-Bp72oIcy.js";import"./index-D3NSTpXZ.js";import"./useCancelAnimationFallback-BO4pM6Ld.js";import"./YAxisTicks-DcEz-k7I.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BPXUvOOU.js";import"./ChartDataLabel-t1hunQTw.js";import"./useOnClickInternal-CZJvux13.js";import"./react-content-loader.es-D8W-R58H.js";import"./useIsRTL-sMcBz9Ie.js";import"./useLongestYAxisLabel-DNgdc8cp.js";import"./ComposedChart-DKMDBNst.js";import"./Line-lRoFpcXa.js";import"./Scatter-BX8NtbLV.js";import"./index-Dn5VONcX.js";import"./index-0GpWmpSz.js";import"./Placeholder-DcYzqzv5.js";import"./index-dNgJEzY1.js";const $=`# @ui5/webcomponents-react-charts

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
