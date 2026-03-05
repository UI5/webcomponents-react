import{q as i,j as t,Q as l}from"./iframe-Dp_0Yhmg.js";import{useMDXComponents as p}from"./index-BMV3GZRz.js";import{M as u,a as h,n as f}from"./blocks-CKlkgOe3.js";import"./Tag-CNZu_-1j.js";import"./index-nFX3Pl_S.js";import"./CommandsAndQueries-DDLi5yBU.js";import"./copy-BMHKKbyO.js";import{T as d}from"./TableOfContent-aahjcOKG.js";import{F as b}from"./Footer-Pq4yDBwS.js";import"./PageNotFound-BsRlbC58.js";import{C}from"./index-JXhLfQ9y.js";import{D}from"./BarChart.stories-BEa9Xo6y.js";import{D as y}from"./BulletChart.stories-BASu5kDE.js";import{D as g}from"./ColumnChart.stories-D5FY7h3q.js";import{D as v}from"./ColumnChartWithTrend.stories-CeyZNwwm.js";import{D as x}from"./ComposedChart.stories-CHiDZdGV.js";import{D as j}from"./DonutChart.stories-DOK1c0m5.js";import{D as w}from"./LineChart.stories-BEEfc4RE.js";import{D as R}from"./PieChart.stories-1T4Cf6VM.js";import{D as I}from"./RadarChart.stories-GTbuBDFV.js";import{D as S}from"./RadialChart.stories-BUDpWe2a.js";import{D as $}from"./ScatterChart.stories-CqXm8Gqn.js";import"./preload-helper-PPVm8Dsz.js";import"./information-gl9SwVgW.js";import"./sys-enter-2-0WtHGlhQ.js";import"./alert-Bcw4Fg6E.js";import"./Link-DcMDvp4G.js";import"./index-DzgaNcC5.js";import"./index-C5vcogVt.js";import"./index-T5J1jf5G.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCqFx9Uj.js";import"./addCustomCSSWithScoping-CZYJlNXb.js";import"./index-Cu_XsrMy.js";import"./index-DXry597q.js";import"./index-DjJhZI7Y.js";import"./index-DpBR8FGa.js";import"./Illustrations-bZxTgUi1.js";import"./i18n-defaults-C7ICj5-E.js";import"./Carousel-DDiNC9Dw.js";import"./ScrollEnablement-DIUnalZp.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CHnKl5AW.js";import"./slim-arrow-left-CTK7XE9r.js";import"./DemoProps-BbOQXZeg.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BSXT0zRv.js";import"./ChartContainer-DeAa14Mg.js";import"./index-cGopohf8.js";import"./useCancelAnimationFallback-n9-vibuU.js";import"./YAxisTicks-Dd-ZERVk.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BspUp9Of.js";import"./ChartDataLabel-B14NsF7V.js";import"./useOnClickInternal-STNd1f1y.js";import"./react-content-loader.es-BkKoa4nm.js";import"./useIsRTL-anVy-FXS.js";import"./useLongestYAxisLabel-B-cHhv1k.js";import"./ComposedChart-D5rhZSx6.js";import"./Line-DTCqlo0f.js";import"./Scatter-D9gLMBog.js";import"./index-CiGTHCkk.js";import"./index-BU0GtBbB.js";import"./Placeholder-Cse12yEr.js";import"./index-D3ssRAjy.js";const E=`# @ui5/webcomponents-react-charts

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
