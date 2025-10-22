import{r as i,j as t,T as l}from"./iframe-N-CkNuQp.js";import{useMDXComponents as p}from"./index-vMZrjKLN.js";import{M as u,a as h,k as f}from"./blocks-BlmowjXe.js";import"./Tag-BjR1DXbQ.js";import"./index-C6U4q-s3.js";import{F as d}from"./CommandsAndQueries-C649emYA.js";import"./copy-a5vlqc1O.js";import{T as b}from"./TableOfContent-BnP61JFB.js";import{C}from"./index-i6h8Jg9T.js";import{D}from"./BarChart.stories-wMAjEVaJ.js";import{D as y}from"./BulletChart.stories-HmB0s714.js";import{D as g}from"./ColumnChart.stories-BfqC3J4n.js";import{D as v}from"./ColumnChartWithTrend.stories-BCi5KXKb.js";import{D as x}from"./ComposedChart.stories-BVLEYKAm.js";import{D as j}from"./DonutChart.stories-BWPoCesC.js";import{D as w}from"./LineChart.stories-Dg6kewOv.js";import{D as R}from"./PieChart.stories-eUIZtjCG.js";import{D as I}from"./RadarChart.stories-D1-Y3irw.js";import{D as S}from"./RadialChart.stories-ChBRvLk6.js";import{D as T}from"./ScatterChart.stories-XCkagWNd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DXCMx7jp.js";import"./sys-enter-2-DJK47xX9.js";import"./alert-DxAb-ai_.js";import"./index-Dctc1ZtL.js";import"./index-Cfq8WB4R.js";import"./index-DbFvQ9Ev.js";import"./Link-DUQLkHF0.js";import"./index-Bw-Px9rd.js";import"./index-nkckj2JT.js";import"./index-CNxEFs14.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIbW1rrN.js";import"./addCustomCSSWithScoping-h_aYe486.js";import"./index-CnaiImML.js";import"./Carousel-_JTUElt8.js";import"./ScrollEnablement--YCWq2yu.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dzwpsq0o.js";import"./slim-arrow-left-CgDo0k1u.js";import"./DemoProps-DIo6_088.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-C_I9hUf7.js";import"./ChartContainer-DAXVeLnN.js";import"./index-BvTJX50d.js";import"./useCancelAnimationFallback-BMIXY64S.js";import"./YAxisTicks-BzytFKNd.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BHscGsYw.js";import"./ChartDataLabel-7xGI752t.js";import"./useOnClickInternal-CT9uDbdg.js";import"./react-content-loader.es-CC9OCmYG.js";import"./useIsRTL-DSfev3_E.js";import"./useLongestYAxisLabel-BSbOcTID.js";import"./ComposedChart-BKOZXSke.js";import"./Line-yX2RE6hc.js";import"./Scatter-BoVomDcE.js";import"./index-D1OmCt-b.js";import"./index-Drt4nGNu.js";import"./Placeholder-XMM3bP7E.js";import"./index-0w0nlfkZ.js";const $=`# @ui5/webcomponents-react-charts

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
