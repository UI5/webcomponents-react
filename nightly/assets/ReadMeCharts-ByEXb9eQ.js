import{r as i,j as t,T as l}from"./iframe-Cg7074Vs.js";import{useMDXComponents as p}from"./index-B5B2jkkb.js";import{M as u,a as h,k as f}from"./blocks-BJCse0Pu.js";import"./Tag-8TeQfEXQ.js";import"./index-BdM5BPiw.js";import{F as d}from"./CommandsAndQueries-DSm4BCv_.js";import"./copy-elFt8Bkr.js";import{T as b}from"./TableOfContent-fQuHL319.js";import{C}from"./index-D8hHP9Xp.js";import{D}from"./BarChart.stories-iKHcqz4B.js";import{D as y}from"./BulletChart.stories-Dxo1X3lm.js";import{D as g}from"./ColumnChart.stories-i7vp5ksC.js";import{D as v}from"./ColumnChartWithTrend.stories-nQJYTrKp.js";import{D as x}from"./ComposedChart.stories-CQYA1C6G.js";import{D as j}from"./DonutChart.stories-DN6YxnQl.js";import{D as w}from"./LineChart.stories-BsjiUWjy.js";import{D as R}from"./PieChart.stories-BCyStZhW.js";import{D as I}from"./RadarChart.stories-IYmwPmT5.js";import{D as S}from"./RadialChart.stories-Dx4iqmCt.js";import{D as T}from"./ScatterChart.stories-CyJDpfPN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BmRqz6it.js";import"./sys-enter-2-Cd9kQ7Q4.js";import"./alert-D-Gn0uBT.js";import"./index-C5-_BJit.js";import"./index-Do95mp1G.js";import"./index--0v3kDPT.js";import"./Link-C9B0XqeU.js";import"./index-B-O0M522.js";import"./index-DBdMynWP.js";import"./index-mxRvftJc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Co8Bnzh8.js";import"./addCustomCSSWithScoping-CQZolqZ7.js";import"./index-mLpQh_nH.js";import"./Carousel-DCnh_Vna.js";import"./ScrollEnablement-Dvz9XJ8X.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BgOul9Uo.js";import"./slim-arrow-left-BVBL4guZ.js";import"./DemoProps-BwV3HuLk.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BMtxy-ia.js";import"./ChartContainer-LwHm3XtB.js";import"./index-DjuwfncQ.js";import"./useCancelAnimationFallback-D7iqEXpE.js";import"./YAxisTicks-CHjKmTlq.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CGsoP7B8.js";import"./ChartDataLabel-DMg9xV55.js";import"./useOnClickInternal-Dxm71Q7H.js";import"./react-content-loader.es-BrTSFkVq.js";import"./useIsRTL-CFLUuD9e.js";import"./useLongestYAxisLabel-oJkgfLg0.js";import"./ComposedChart-BVJApB47.js";import"./Line-CdQGPG2H.js";import"./Scatter-RLjTrEYX.js";import"./index-DEAFaNds.js";import"./index-Cb-Sta5b.js";import"./Placeholder-CuC5RS0r.js";import"./index-BL2F6jm-.js";const $=`# @ui5/webcomponents-react-charts

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
