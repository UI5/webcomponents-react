import{r as i,j as t,T as l}from"./iframe-DTHPT7iA.js";import{useMDXComponents as p}from"./index-74UlZZJj.js";import{M as u,a as h,k as f}from"./blocks-BEm3tjb6.js";import"./Tag-CJADm4_M.js";import"./index-C3HgU9VG.js";import{F as d}from"./CommandsAndQueries-BD3jeLaK.js";import"./copy-mCNoL2s6.js";import{T as b}from"./TableOfContent-DcI8r7Mg.js";import{C}from"./index-CH1WEO4l.js";import{D}from"./BarChart.stories-BD6hsXKG.js";import{D as y}from"./BulletChart.stories-DUkasy2C.js";import{D as g}from"./ColumnChart.stories-D7y5KQ2x.js";import{D as v}from"./ColumnChartWithTrend.stories-BOJHij4_.js";import{D as x}from"./ComposedChart.stories-OJ4TzcIf.js";import{D as j}from"./DonutChart.stories-DXZS0jD9.js";import{D as w}from"./LineChart.stories-BTmvq0MR.js";import{D as R}from"./PieChart.stories-BZ7u2m3s.js";import{D as I}from"./RadarChart.stories-DihKPE0q.js";import{D as S}from"./RadialChart.stories-D0Ycz_7e.js";import{D as T}from"./ScatterChart.stories-B83CP3IG.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DoW4IMVD.js";import"./sys-enter-2-ByI7nkKd.js";import"./alert-COIhFOls.js";import"./index-DwOvcXXK.js";import"./index-Cj0CYz_p.js";import"./index-C6-xBNa3.js";import"./Link-BbcZTKOL.js";import"./addCustomCSSWithScoping-DApCUjf-.js";import"./index-D_aw5Z2j.js";import"./index-dqQUzE09.js";import"./index-ig2sn1RW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BENd75qS.js";import"./index-t5gVEC_D.js";import"./Carousel-CKm0oLMI.js";import"./ScrollEnablement-C6hn1rKU.js";import"./animate-JylhYHXj.js";import"./AnimationMode-KQ1hjrgp.js";import"./slim-arrow-left-Bx99pQYK.js";import"./DemoProps-DLO0uyXT.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-oUzP1RgO.js";import"./ChartContainer-DfCAAmXu.js";import"./index-CzjWFvA4.js";import"./useCancelAnimationFallback-tDZY82h4.js";import"./YAxisTicks-BV3Ymk0D.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BLVzp3rr.js";import"./ChartDataLabel-B7_RTzf4.js";import"./useOnClickInternal-BLTRVDL6.js";import"./react-content-loader.es-B2ebLik-.js";import"./useIsRTL-DmdXpOjP.js";import"./useLongestYAxisLabel-BcuRKNNa.js";import"./ComposedChart-Czf2IwwR.js";import"./Line-DOaekq9p.js";import"./Scatter-CUzW-iuZ.js";import"./index-Du-KWyIV.js";import"./index-mcS5NWjK.js";import"./Placeholder-BDJxdQzA.js";import"./index-D9Urcwo6.js";const $=`# @ui5/webcomponents-react-charts

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
