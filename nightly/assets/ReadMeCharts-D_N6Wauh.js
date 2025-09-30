import{r as i,j as t,T as l}from"./iframe-D-p-3OCM.js";import{useMDXComponents as p}from"./index-DJLiOc38.js";import{M as u,a as h,k as f}from"./blocks-D8nJ9XLJ.js";import"./Tag-3bv5cfrS.js";import"./index-4PsYVbCm.js";import{F as d}from"./CommandsAndQueries-GFFu71sG.js";import"./copy-ORsTAKbB.js";import{T as b}from"./TableOfContent-BcwnDCh5.js";import{C}from"./index-BocQSUjn.js";import{D}from"./BarChart.stories-DFlbupdx.js";import{D as y}from"./BulletChart.stories-BlpWgdL0.js";import{D as g}from"./ColumnChart.stories-oX--YqQj.js";import{D as v}from"./ColumnChartWithTrend.stories-C33vt6o5.js";import{D as x}from"./ComposedChart.stories-BcM4qqgN.js";import{D as j}from"./DonutChart.stories-BKLfRX4O.js";import{D as w}from"./LineChart.stories-CXGEGJ13.js";import{D as R}from"./PieChart.stories-zUlaDvbw.js";import{D as I}from"./RadarChart.stories-CfBCA2u7.js";import{D as S}from"./RadialChart.stories-CqRLYlZ2.js";import{D as T}from"./ScatterChart.stories-C99XKy5E.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BQJXeVKx.js";import"./sys-enter-2-CYyiWANR.js";import"./alert-YvrQf4Kz.js";import"./index--P1CcwOi.js";import"./index-TBDKK4_L.js";import"./index-BwwgwqQS.js";import"./Link-BjWHArC4.js";import"./index-DqKaYphS.js";import"./index-sDY_tTy_.js";import"./index-DzbvANjW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-sPN7n5XP.js";import"./addCustomCSSWithScoping-BzKWOZDH.js";import"./index-C326ykrp.js";import"./Carousel-CccrQ5eV.js";import"./ScrollEnablement-Dx2bfBZK.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DiMKicZj.js";import"./slim-arrow-left-BV4jGVph.js";import"./DemoProps-CL5CGsQM.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-66MI5Xpw.js";import"./ChartContainer-BSeaLw5h.js";import"./index-DqIlF11a.js";import"./useCancelAnimationFallback-CRd9JNrw.js";import"./YAxisTicks-BGaTu1NH.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CWalki6K.js";import"./ChartDataLabel-D1IQ0lQv.js";import"./useOnClickInternal-B5lil1Zv.js";import"./react-content-loader.es-BqLvmvs-.js";import"./useIsRTL-BGlVHb77.js";import"./useLongestYAxisLabel-DdGVdQ5f.js";import"./ComposedChart-8OldXipr.js";import"./Line-Dc_MY85G.js";import"./Scatter-BCfKggY_.js";import"./index-CKVI7vR5.js";import"./index-BHoM4ktd.js";import"./Placeholder-D2HaqAZw.js";import"./index-CZp5IGam.js";const $=`# @ui5/webcomponents-react-charts

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
