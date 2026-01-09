import{r as i,j as t,T as l}from"./iframe-DfIU3iRi.js";import{useMDXComponents as p}from"./index-BAUWkqwx.js";import{M as u,a as h,n as f}from"./blocks-DKKhajQJ.js";import"./Tag-CF4VAGn3.js";import"./index-_jZ5OE_X.js";import{F as d}from"./CommandsAndQueries-CCvlfqZe.js";import"./copy-C8IsFnQF.js";import{T as b}from"./TableOfContent-UJCpwmXi.js";import{C}from"./index-j2zeq1GL.js";import{D}from"./BarChart.stories-D2Rp5GOI.js";import{D as y}from"./BulletChart.stories-B6qeCXGx.js";import{D as g}from"./ColumnChart.stories-frxHiz2c.js";import{D as v}from"./ColumnChartWithTrend.stories-CrP37owC.js";import{D as x}from"./ComposedChart.stories-Bb3kjbCN.js";import{D as j}from"./DonutChart.stories-mJgB4PDi.js";import{D as w}from"./LineChart.stories-KP9Uqmfl.js";import{D as R}from"./PieChart.stories-CEEmOjfb.js";import{D as I}from"./RadarChart.stories-1by2l8xs.js";import{D as S}from"./RadialChart.stories-Y2TMr7O5.js";import{D as T}from"./ScatterChart.stories-rzUykOoy.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BagB6Da7.js";import"./sys-enter-2-BiNE0Ouk.js";import"./alert-2mu58sd7.js";import"./index-CoTITwqN.js";import"./index-CqJNVQT5.js";import"./index-dA_mFJJw.js";import"./Link-C-uHXK5B.js";import"./index-CIxyPlXE.js";import"./index-YCl-_jCh.js";import"./index-BGfN_eSt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ohosJA7I.js";import"./addCustomCSSWithScoping-CtydAM5n.js";import"./index-DeDDTWfB.js";import"./Carousel-EIaz8yp1.js";import"./ScrollEnablement-aPqXwvy5.js";import"./animate-JylhYHXj.js";import"./AnimationMode-GK-G-YKO.js";import"./slim-arrow-left-Bd_wzJgJ.js";import"./DemoProps-BFaYpoD3.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DrQwEU-K.js";import"./ChartContainer-S8RpIA5o.js";import"./index-DOZNbDJp.js";import"./useCancelAnimationFallback-BVC6XgHQ.js";import"./YAxisTicks-D4cyNHug.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C3F_YdZN.js";import"./ChartDataLabel-CyzzHbKr.js";import"./useOnClickInternal-DXR8IHS7.js";import"./react-content-loader.es-CzJ9VOlT.js";import"./useIsRTL-BiwRRP9a.js";import"./useLongestYAxisLabel-B7kWLGia.js";import"./ComposedChart-Wwxugkwe.js";import"./Line-BlRJRRuQ.js";import"./Scatter-CpEmTQw9.js";import"./index-CqqZblo4.js";import"./index-Cz1rHXjm.js";import"./Placeholder-Bvsepf_t.js";import"./index-BVNZy_iA.js";const $=`# @ui5/webcomponents-react-charts

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
