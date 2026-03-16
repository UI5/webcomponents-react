import{q as i,j as t,Q as l}from"./iframe-BDg7FSoj.js";import{useMDXComponents as p}from"./index-CfS6z3MT.js";import{M as u,a as h,n as f}from"./blocks-D274WTCA.js";import"./Tag-D7GKpW6g.js";import"./index-BfRGPCU-.js";import"./CommandsAndQueries-BgLg0c2t.js";import"./copy-LtMPx_h3.js";import{T as d}from"./TableOfContent-LJE63-X7.js";import{F as b}from"./Footer-DcSScdvn.js";import"./PageNotFound-Cz7A_GPz.js";import{C}from"./index-du6TehkM.js";import{D}from"./BarChart.stories-DnNmSXGO.js";import{D as y}from"./BulletChart.stories-DHWYAIy5.js";import{D as g}from"./ColumnChart.stories-D_SGxFqs.js";import{D as v}from"./ColumnChartWithTrend.stories-DR4vWFQB.js";import{D as x}from"./ComposedChart.stories-B-1AxZNZ.js";import{D as j}from"./DonutChart.stories-fB0dwUGc.js";import{D as w}from"./LineChart.stories-De3RFfHB.js";import{D as R}from"./PieChart.stories-rdMjTswv.js";import{D as I}from"./RadarChart.stories-BGbbIWci.js";import{D as S}from"./RadialChart.stories-B1Ch9Ray.js";import{D as $}from"./ScatterChart.stories-DuVa2Vhq.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DD__sQ7N.js";import"./sys-enter-2-Dp2sy9f7.js";import"./alert-C6BvEboW.js";import"./Link-DweKFefr.js";import"./index-YYn2-nAM.js";import"./index-Cr06KJoh.js";import"./index-Cs36UH1Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CX4riDWF.js";import"./addCustomCSSWithScoping-DjKpxhL9.js";import"./index-CtXj8tW6.js";import"./index-Ca5wJMxN.js";import"./index-DKaIOimk.js";import"./index-ClFnafIK.js";import"./Illustrations-BhEYUAiS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DZKcufPp.js";import"./ScrollEnablement-CJNzrglF.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Bzdk6-rk.js";import"./slim-arrow-left-Dibcwihs.js";import"./DemoProps-CruXY61h.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-6MksgYd7.js";import"./ChartContainer-Se4WcvM5.js";import"./index-XZbO5RWz.js";import"./useCancelAnimationFallback-B-ndSe1Y.js";import"./YAxisTicks-B20iO2Nt.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DeosmEQT.js";import"./ChartDataLabel-Br18TId9.js";import"./useOnClickInternal-ROZjRgpc.js";import"./react-content-loader.es-6CydVA8R.js";import"./useIsRTL-BQKn5Zaa.js";import"./useLongestYAxisLabel-k9d4nBEh.js";import"./ComposedChart-BaPoXx4K.js";import"./Line-CoXfOOCW.js";import"./Scatter-h_8ZpGWL.js";import"./index-CZUFf9dE.js";import"./index-EKUuLVRp.js";import"./Placeholder-Cv1XJsgx.js";import"./index-DzYczeIb.js";const E=`# @ui5/webcomponents-react-charts

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
