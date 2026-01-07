import{r as i,j as t,T as l}from"./iframe-Lvl9yzry.js";import{useMDXComponents as p}from"./index-DtnS30Y7.js";import{M as u,a as h,n as f}from"./blocks-DE-pS5pt.js";import"./Tag-Ntj2WoJZ.js";import"./index-Z8W5RiOf.js";import{F as d}from"./CommandsAndQueries-r8pG5JEL.js";import"./copy-BqWuakZq.js";import{T as b}from"./TableOfContent-DTkppLuE.js";import{C}from"./index-tPX0gcMX.js";import{D}from"./BarChart.stories-B29-8XdA.js";import{D as y}from"./BulletChart.stories-BT0h0i4R.js";import{D as g}from"./ColumnChart.stories-CVlBewWO.js";import{D as v}from"./ColumnChartWithTrend.stories-DAfNG58m.js";import{D as x}from"./ComposedChart.stories-BHEJshBv.js";import{D as j}from"./DonutChart.stories-NKxl2RxL.js";import{D as w}from"./LineChart.stories-grZSNXe5.js";import{D as R}from"./PieChart.stories-D_GlxlLX.js";import{D as I}from"./RadarChart.stories-Bvs8i3Og.js";import{D as S}from"./RadialChart.stories-Dyojeij6.js";import{D as T}from"./ScatterChart.stories-BIhqcKT1.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BnCFwrSd.js";import"./sys-enter-2-Ct5ni-AG.js";import"./alert-1cuYh9Xz.js";import"./index-XWeRb-Rp.js";import"./index-NhuzyApy.js";import"./index-BVP3-7sd.js";import"./Link-BJMT4XUv.js";import"./index-CtS6x3f8.js";import"./index-CNh112J7.js";import"./index-BNlSxjfl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VTbkLDop.js";import"./addCustomCSSWithScoping-aRHntRG4.js";import"./index-ilzt6YAk.js";import"./Carousel-B-oQAPAL.js";import"./ScrollEnablement-BzfTcoR4.js";import"./animate-JylhYHXj.js";import"./AnimationMode-tkK7DucU.js";import"./slim-arrow-left-jcX3KJfC.js";import"./DemoProps-DrYwW6iN.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BZKTFoR0.js";import"./ChartContainer-WZ6rA1uz.js";import"./index-CYmJcLDK.js";import"./useCancelAnimationFallback-Di6x3347.js";import"./YAxisTicks-BDOoN04U.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DWxvcSI8.js";import"./ChartDataLabel-BRRKahKM.js";import"./useOnClickInternal-DZjrdH0g.js";import"./react-content-loader.es-CLBirfku.js";import"./useIsRTL-hJE8aY9K.js";import"./useLongestYAxisLabel-BRVaDIdc.js";import"./ComposedChart-BxYLYyMm.js";import"./Line-VuYGBI_K.js";import"./Scatter-BZC-2omO.js";import"./index-C5uV_5lR.js";import"./index-7m6VH08z.js";import"./Placeholder-5zt2Qnxc.js";import"./index-D5yhqvKn.js";const $=`# @ui5/webcomponents-react-charts

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
