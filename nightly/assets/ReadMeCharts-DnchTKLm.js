import{r as i,j as t,T as l}from"./iframe-DfTuu2Qs.js";import{useMDXComponents as p}from"./index-tu9Knfll.js";import{M as u,a as h,n as f}from"./blocks-DwvFSYgT.js";import"./Tag-a-ykqmZl.js";import"./index-D59W5J0R.js";import{F as d}from"./CommandsAndQueries-CbObYkDi.js";import"./copy-CAppfZ8d.js";import{T as b}from"./TableOfContent-DgWjSnAE.js";import{C}from"./index-D21tVvoZ.js";import{D}from"./BarChart.stories-CGAt7Tu5.js";import{D as y}from"./BulletChart.stories-CUzoe2lW.js";import{D as g}from"./ColumnChart.stories-DUMIoiR6.js";import{D as v}from"./ColumnChartWithTrend.stories-CKjsZzyt.js";import{D as x}from"./ComposedChart.stories-B54LuyI8.js";import{D as j}from"./DonutChart.stories-Bhly12ar.js";import{D as w}from"./LineChart.stories-Ow4dt_zm.js";import{D as R}from"./PieChart.stories-BeFjD4Cr.js";import{D as I}from"./RadarChart.stories-DBNiWrNc.js";import{D as S}from"./RadialChart.stories-BnCH1OKc.js";import{D as T}from"./ScatterChart.stories-w5EQSwfo.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DFuUDpiC.js";import"./sys-enter-2-B3GhyP7w.js";import"./alert-CmUExS0E.js";import"./index-CEqB_Mrf.js";import"./index-4cmdIwXv.js";import"./index-upgMd0Ps.js";import"./Link-DQEzecZX.js";import"./index-DV0Q9niH.js";import"./index-CHJ4eeD3.js";import"./index-B1cc6DOE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BlYlCK6x.js";import"./addCustomCSSWithScoping-l0p7E_oS.js";import"./index-D-5EknuX.js";import"./Carousel-DQqGbWLw.js";import"./ScrollEnablement-CRIFALzU.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D5F4MeiJ.js";import"./slim-arrow-left-BV02_GL3.js";import"./DemoProps-BbDyWMDI.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Ce6i2zOK.js";import"./ChartContainer-D8YPN604.js";import"./index-DzevBiS7.js";import"./useCancelAnimationFallback-e0GqQ5Ks.js";import"./YAxisTicks-C1Tctu4S.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CosFkbB9.js";import"./ChartDataLabel-Dkp3Bwfw.js";import"./useOnClickInternal-BBr6HbYW.js";import"./react-content-loader.es-DUfJ0xJP.js";import"./useIsRTL-BXblpA9j.js";import"./useLongestYAxisLabel-W8DajAK6.js";import"./ComposedChart-CzHN8iKG.js";import"./Line-D6GJQhnl.js";import"./Scatter-CMcBikpv.js";import"./index-CHmY3Qyz.js";import"./index-C2w5z4GS.js";import"./Placeholder-CKqZMWSA.js";import"./index-D2HTuN2S.js";const $=`# @ui5/webcomponents-react-charts

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
