import{r as i,j as t,O as l}from"./iframe-ouw07lhn.js";import{useMDXComponents as p}from"./index-Cip0-ov6.js";import{M as u,a as h,n as f}from"./blocks-Bw5GcbeR.js";import"./Tag-DRYfjFpo.js";import"./index-CiN9pZLU.js";import{F as d}from"./CommandsAndQueries-vCNbGeur.js";import"./copy-B_ty4mVH.js";import{T as b}from"./TableOfContent-CGKwH133.js";import{C}from"./index-COdgjw_1.js";import{D}from"./BarChart.stories-hpmWFQl7.js";import{D as y}from"./BulletChart.stories-D2j4wSow.js";import{D as g}from"./ColumnChart.stories-CeAlGhLe.js";import{D as v}from"./ColumnChartWithTrend.stories-DppIt_jv.js";import{D as x}from"./ComposedChart.stories-Cjx3SzTn.js";import{D as j}from"./DonutChart.stories-BYeApEeL.js";import{D as w}from"./LineChart.stories-B4wDJTj2.js";import{D as R}from"./PieChart.stories-C53Y8I1Z.js";import{D as I}from"./RadarChart.stories-DdgZRVlQ.js";import{D as S}from"./RadialChart.stories-DYkcdXLB.js";import{D as $}from"./ScatterChart.stories-CWK2AZu8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bs_aR9DP.js";import"./sys-enter-2-C-Nxg2w-.js";import"./alert-D5Y3hKT1.js";import"./index-DKdSXnqp.js";import"./index-ByxVEtyu.js";import"./index-COqVCE1o.js";import"./Link-DkIKsy6A.js";import"./index-C2ZF5Jpp.js";import"./index-CrUz0E6u.js";import"./index-COELAX_g.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzV-vkfR.js";import"./addCustomCSSWithScoping-vWKRTHDz.js";import"./index-BPh4j9eE.js";import"./Carousel-Bbny4nRZ.js";import"./ScrollEnablement-Cp3P35Wp.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DDIn8tLy.js";import"./slim-arrow-left-B4F7JxrS.js";import"./DemoProps-BctUPpAI.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B3a3U4Vc.js";import"./ChartContainer-DA3T_U6i.js";import"./index-DovX1QRr.js";import"./useCancelAnimationFallback-BJ6TUWK5.js";import"./YAxisTicks-DRwI-cT9.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-HS4L8X_x.js";import"./ChartDataLabel-B4ClpYt3.js";import"./useOnClickInternal-BPyYA-73.js";import"./react-content-loader.es-Cvp5ffnk.js";import"./useIsRTL-BrfX5x8-.js";import"./useLongestYAxisLabel-CrcQWWlK.js";import"./ComposedChart-CxcBv4xK.js";import"./Line-fdRVDkIP.js";import"./Scatter-C90gO7ut.js";import"./index-irOi2GH-.js";import"./index-BvRyW0k1.js";import"./Placeholder-Q597RN64.js";import"./index-OkbcnAoI.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
