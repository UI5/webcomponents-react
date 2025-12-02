import{r as i,j as t,T as l}from"./iframe-D-W-mmRj.js";import{useMDXComponents as p}from"./index-D8IyotA-.js";import{M as u,a as h,m as f}from"./blocks-CCgGLQdQ.js";import"./Tag-CcHwt-jC.js";import"./index-BjBbtVMa.js";import{F as d}from"./CommandsAndQueries-G8bd-Dz2.js";import"./copy-Bs2vU0sH.js";import{T as b}from"./TableOfContent-BCe3V_fU.js";import{C}from"./index-BmMint1B.js";import{D}from"./BarChart.stories-BG-8gmGj.js";import{D as y}from"./BulletChart.stories-DrDpm7fX.js";import{D as g}from"./ColumnChart.stories-CuZyaFhd.js";import{D as v}from"./ColumnChartWithTrend.stories-Bpck7du-.js";import{D as x}from"./ComposedChart.stories-CMK9f18X.js";import{D as j}from"./DonutChart.stories-CD8BYnze.js";import{D as w}from"./LineChart.stories-BfNvmNpx.js";import{D as R}from"./PieChart.stories-D4HWMbPK.js";import{D as I}from"./RadarChart.stories-Br2cU8in.js";import{D as S}from"./RadialChart.stories-DhUbuL9q.js";import{D as T}from"./ScatterChart.stories-CWNW9PXa.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CEG7gdih.js";import"./sys-enter-2-CEv4mC4Y.js";import"./alert-DtXDmWLr.js";import"./index-lPK_7vuA.js";import"./index-g5ZQYkE0.js";import"./index-BL1fd3ME.js";import"./Link-B8l4snGX.js";import"./index-B8f1MJrs.js";import"./index-CtoHKFWx.js";import"./index-C1eJkWnN.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_kQaGsI.js";import"./addCustomCSSWithScoping-IPWT__yW.js";import"./index-DkLrn4qm.js";import"./Carousel-Bmze4WCF.js";import"./ScrollEnablement-5T6hJhR0.js";import"./animate-JylhYHXj.js";import"./AnimationMode-r0AkudNP.js";import"./slim-arrow-left-DXEn4XmN.js";import"./DemoProps-DoPOAb1J.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DjmAHYaB.js";import"./ChartContainer-Bl-C7YaF.js";import"./index-C7KJciiD.js";import"./useCancelAnimationFallback-CSuFzesT.js";import"./YAxisTicks-DxYCMrNk.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BywybSfE.js";import"./ChartDataLabel-LF-AfS_v.js";import"./useOnClickInternal-D7r0eQj-.js";import"./react-content-loader.es-DeckpsH3.js";import"./useIsRTL-B5QWPvoz.js";import"./useLongestYAxisLabel-CSSg0B4z.js";import"./ComposedChart-D9sbqDGP.js";import"./Line-CIxHgqS8.js";import"./Scatter-OdTlBnty.js";import"./index-g0r8FWX4.js";import"./index-B5pXRmYw.js";import"./Placeholder-CQnSNdji.js";import"./index-BQHNAJKN.js";const $=`# @ui5/webcomponents-react-charts

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
