import{r as i,j as t,O as l}from"./iframe-DJeYw3_T.js";import{useMDXComponents as p}from"./index-CAoJF-Ee.js";import{M as u,a as h,n as f}from"./blocks-CX606tiu.js";import"./Tag-CCm379UD.js";import"./index-D_iy8XUE.js";import{F as d}from"./CommandsAndQueries-BpKCXtjf.js";import"./copy-DmlYE796.js";import{T as b}from"./TableOfContent-CFuMbk9T.js";import{C}from"./index-DtzDN54B.js";import{D}from"./BarChart.stories-C3o-ZZNl.js";import{D as y}from"./BulletChart.stories-CEBBsFDq.js";import{D as g}from"./ColumnChart.stories-a2NswgXf.js";import{D as v}from"./ColumnChartWithTrend.stories-sxDqKCBo.js";import{D as x}from"./ComposedChart.stories-DCZENswh.js";import{D as j}from"./DonutChart.stories-YjsDspRn.js";import{D as w}from"./LineChart.stories-DSJC4wxW.js";import{D as R}from"./PieChart.stories-i3ddSz8R.js";import{D as I}from"./RadarChart.stories-D__62pk1.js";import{D as S}from"./RadialChart.stories-B3sK9R70.js";import{D as $}from"./ScatterChart.stories-B1Lx_IyU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CWuwvd7P.js";import"./sys-enter-2-CLYEOYwG.js";import"./alert-CTnjMkAD.js";import"./index-tnzxKSW0.js";import"./index-US2STizv.js";import"./index-ZZUuVpkh.js";import"./Link-D6M-iLai.js";import"./index-xs7bXSrN.js";import"./index-BldmH6cg.js";import"./index-BfDuZshB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bv4hvB9u.js";import"./addCustomCSSWithScoping-DdjgQkne.js";import"./index-ChAuXbDX.js";import"./Carousel-DAtmmT6W.js";import"./ScrollEnablement-Dx-9KAkj.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DWMnm8ef.js";import"./slim-arrow-left-CG9kD9v_.js";import"./DemoProps-BXRYcX5k.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-te-qwcKl.js";import"./ChartContainer-C7iBqNx_.js";import"./index-DgbNo39p.js";import"./useCancelAnimationFallback-BqXEkTta.js";import"./YAxisTicks-DqXA7qOR.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ha-8MoLZ.js";import"./ChartDataLabel-Dm_-q2y5.js";import"./useOnClickInternal-CMhEaCkL.js";import"./react-content-loader.es-9gLbJa6C.js";import"./useIsRTL-wyLkWFxP.js";import"./useLongestYAxisLabel-t0CX9miP.js";import"./ComposedChart-BZHbTOxt.js";import"./Line-BZRJZAch.js";import"./Scatter-Wa4w3elj.js";import"./index-BoO6nTEI.js";import"./index-IcP4Y_Sn.js";import"./Placeholder-DS0J0SmX.js";import"./index-FBBW_br4.js";const E=`# @ui5/webcomponents-react-charts

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
