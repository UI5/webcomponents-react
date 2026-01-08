import{r as i,j as t,T as l}from"./iframe-D_OBvCft.js";import{useMDXComponents as p}from"./index-B_S0g7ME.js";import{M as u,a as h,n as f}from"./blocks-DYLPI3Ra.js";import"./Tag-DR4TT7Tz.js";import"./index-DHlu5N_c.js";import{F as d}from"./CommandsAndQueries-BZ-3zH0-.js";import"./copy-DQgNVeWA.js";import{T as b}from"./TableOfContent-OaCRgHX_.js";import{C}from"./index-CN0f-trC.js";import{D}from"./BarChart.stories-BHLkOPh8.js";import{D as y}from"./BulletChart.stories-CrqBulNb.js";import{D as g}from"./ColumnChart.stories-CPIR_3Yu.js";import{D as v}from"./ColumnChartWithTrend.stories-ByA2kD0K.js";import{D as x}from"./ComposedChart.stories-CL3FhBRv.js";import{D as j}from"./DonutChart.stories-Dw6S5PKk.js";import{D as w}from"./LineChart.stories-fpY9pftw.js";import{D as R}from"./PieChart.stories-Biucpx87.js";import{D as I}from"./RadarChart.stories-CBHaBGh2.js";import{D as S}from"./RadialChart.stories-BSJlXxcY.js";import{D as T}from"./ScatterChart.stories-BSytDo6o.js";import"./preload-helper-PPVm8Dsz.js";import"./information-PDp2XxR-.js";import"./sys-enter-2-CTjcKc0d.js";import"./alert-BulXizwQ.js";import"./index-BKEI8mWg.js";import"./index-S0He3U_1.js";import"./index-CTJhmHbW.js";import"./Link-ubTR8kdT.js";import"./index-CgmBhunw.js";import"./index-CT9F8jkM.js";import"./index-BxzyntYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CYQDt8WV.js";import"./addCustomCSSWithScoping-DGwiZ6Qr.js";import"./index-Dss8LBVA.js";import"./Carousel-CgdKmmup.js";import"./ScrollEnablement-BPZ45FDB.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CGUEkzxq.js";import"./slim-arrow-left-1NLuYSsO.js";import"./DemoProps-rzevxB1V.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CRIQkiY8.js";import"./ChartContainer-Bt3X6n6r.js";import"./index-DtrCS052.js";import"./useCancelAnimationFallback-29DsUqGq.js";import"./YAxisTicks-Cnl3yunw.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DxA9j5k3.js";import"./ChartDataLabel-CDsE7kx0.js";import"./useOnClickInternal-D5JvmqeT.js";import"./react-content-loader.es-m65-UgrZ.js";import"./useIsRTL-C-113p4z.js";import"./useLongestYAxisLabel-Cjzq-KJH.js";import"./ComposedChart-zzidTCoM.js";import"./Line-CeQCkSok.js";import"./Scatter-Bww8TCpP.js";import"./index-BF0cqbS-.js";import"./index-ZYJGU3qn.js";import"./Placeholder-0jrJEf5y.js";import"./index-BwSrKuN_.js";const $=`# @ui5/webcomponents-react-charts

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
