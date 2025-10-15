import{r as i,j as t,T as l}from"./iframe-DNwXmN6w.js";import{useMDXComponents as p}from"./index-Dbs3KJZC.js";import{M as u,a as h,k as f}from"./blocks-ClaQShTE.js";import"./Tag-9F78ZQdp.js";import"./index-CYGT2EhP.js";import{F as d}from"./CommandsAndQueries-BAoKQ9N_.js";import"./copy-EN-_ABXk.js";import{T as b}from"./TableOfContent-BZ8zuPOd.js";import{C}from"./index-CBgtYK0z.js";import{D}from"./BarChart.stories-2rnCZ2dD.js";import{D as y}from"./BulletChart.stories-DM0grizw.js";import{D as g}from"./ColumnChart.stories-ycwLsgGo.js";import{D as v}from"./ColumnChartWithTrend.stories-CLGeFV97.js";import{D as x}from"./ComposedChart.stories-D2kCh15t.js";import{D as j}from"./DonutChart.stories-oy0eZAUq.js";import{D as w}from"./LineChart.stories-DyOyO6Ob.js";import{D as R}from"./PieChart.stories-CMkzhGiU.js";import{D as I}from"./RadarChart.stories-l9pfaDG7.js";import{D as S}from"./RadialChart.stories-D40n3xBX.js";import{D as T}from"./ScatterChart.stories-DC04x-8N.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BcSrdT-8.js";import"./sys-enter-2-D4ODuMey.js";import"./alert-Dl0J_z1v.js";import"./index-DuyT38UB.js";import"./index-aVApIanM.js";import"./index-B8OlZcJ4.js";import"./Link-C02NJVw1.js";import"./index-BLy7Rxlq.js";import"./index-nHmWKiTx.js";import"./index-rN24S36o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNrVdT-5.js";import"./addCustomCSSWithScoping-os-Xpktn.js";import"./index-CBh039oE.js";import"./Carousel-XgjW1mEZ.js";import"./ScrollEnablement-COWapJBB.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C8Us1xhH.js";import"./slim-arrow-left-gva1hkGO.js";import"./DemoProps-BzAZR9k-.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dp8hxCJT.js";import"./ChartContainer-3wIslztw.js";import"./index-DJpZsV5v.js";import"./useCancelAnimationFallback-t9lEVStP.js";import"./YAxisTicks-TLRlUYTZ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D0aDaBIh.js";import"./ChartDataLabel-6WEgg_vu.js";import"./useOnClickInternal-RnlKkvBH.js";import"./react-content-loader.es-Dat4FH03.js";import"./useIsRTL-ClLbQDrb.js";import"./useLongestYAxisLabel-C_y7fEeg.js";import"./ComposedChart-BdWjc1g8.js";import"./Line-BwBXqfKN.js";import"./Scatter-zt40tyJS.js";import"./index-DuaOEWOZ.js";import"./index-CCf1TkFH.js";import"./Placeholder-w0u69cO8.js";import"./index-BZb7idWf.js";const $=`# @ui5/webcomponents-react-charts

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
