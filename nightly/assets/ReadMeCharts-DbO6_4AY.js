import{r as i,j as t,T as l}from"./iframe-DjyPEesV.js";import{useMDXComponents as p}from"./index-Pyz_59sj.js";import{M as u,a as h,n as f}from"./blocks-BJpyRAuR.js";import"./Tag-BDoCQY53.js";import"./index-R19sOJmE.js";import{F as d}from"./CommandsAndQueries-CflBmGXr.js";import"./copy-E37vjZto.js";import{T as b}from"./TableOfContent-DxJDBDn2.js";import{C}from"./index-t8NeTeoz.js";import{D}from"./BarChart.stories-B9OZHxPs.js";import{D as y}from"./BulletChart.stories-CVgJ9nNZ.js";import{D as g}from"./ColumnChart.stories-IqE9YQsM.js";import{D as v}from"./ColumnChartWithTrend.stories-DInA0fNY.js";import{D as x}from"./ComposedChart.stories-CQSukFxa.js";import{D as j}from"./DonutChart.stories-CjU5lYEf.js";import{D as w}from"./LineChart.stories-CXTu_4yR.js";import{D as R}from"./PieChart.stories-Bep8INZr.js";import{D as I}from"./RadarChart.stories-D8TIErjf.js";import{D as S}from"./RadialChart.stories-DS1-yz0Z.js";import{D as T}from"./ScatterChart.stories-rHXNpDS3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DUvIlTxn.js";import"./sys-enter-2-BNMMIV_0.js";import"./alert-BdGD6eLJ.js";import"./index-Ctou3RkN.js";import"./index-D4GABIF8.js";import"./index-JsLIkweC.js";import"./Link-nHS21YG4.js";import"./index-DIAyR9_V.js";import"./index-BBJM4hPn.js";import"./index-u05KfZkG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BW1MFNTm.js";import"./addCustomCSSWithScoping-fFr9nqx3.js";import"./index-CGGAhfVP.js";import"./Carousel-CrUK4AUf.js";import"./ScrollEnablement-80w6Waas.js";import"./animate-JylhYHXj.js";import"./AnimationMode-qPbcgzUd.js";import"./slim-arrow-left-BIBfL3co.js";import"./DemoProps-D0D237Nq.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Br6LNWjX.js";import"./ChartContainer-BB7wIZ_n.js";import"./index-Bgg2l2DV.js";import"./useCancelAnimationFallback-CExfBw5V.js";import"./YAxisTicks-CqA0HBPp.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BPprpaiT.js";import"./ChartDataLabel-DQpEv17p.js";import"./useOnClickInternal-DcDr7C-Z.js";import"./react-content-loader.es-Bo7Rj-TM.js";import"./useIsRTL-_YfBcCD_.js";import"./useLongestYAxisLabel-DxG1k0e1.js";import"./ComposedChart-BnlHEYOB.js";import"./Line-WhXXeIjX.js";import"./Scatter-wwpH6WGh.js";import"./index-CmaR_l_i.js";import"./index-DMc08vXJ.js";import"./Placeholder-YPa6YF9i.js";import"./index-DtO2yyx2.js";const $=`# @ui5/webcomponents-react-charts

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
