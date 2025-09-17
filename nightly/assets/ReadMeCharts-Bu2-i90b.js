import{r as i,j as t,T as l}from"./iframe-DUkvwiCH.js";import{useMDXComponents as p}from"./index-CmOOmEq_.js";import{M as u,a as h,k as f}from"./blocks-BEyioZmC.js";import"./Tag-DEWD3xtk.js";import"./index-mzCfuMGx.js";import{F as d}from"./CommandsAndQueries-PDY51fAI.js";import"./copy-B0dtT-T1.js";import{T as b}from"./TableOfContent-D10h03Op.js";import{C}from"./index-wJHOPubp.js";import{D}from"./BarChart.stories-CgkRr0q0.js";import{D as y}from"./BulletChart.stories-Bep9dPDH.js";import{D as g}from"./ColumnChart.stories-CV9KD5d6.js";import{D as v}from"./ColumnChartWithTrend.stories-CkS6HMlr.js";import{D as x}from"./ComposedChart.stories-CzpHSbHP.js";import{D as j}from"./DonutChart.stories-BGgpvWUH.js";import{D as w}from"./LineChart.stories-WkQ3RoQZ.js";import{D as R}from"./PieChart.stories-CMfjhu7M.js";import{D as S}from"./RadarChart.stories-w05SCBtA.js";import{D as I}from"./RadialChart.stories-DKqm76J_.js";import{D as T}from"./ScatterChart.stories-mSAERw--.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DXx8yVKj.js";import"./sys-enter-2-DohaKpz7.js";import"./alert-DS7-1sye.js";import"./index-B92FdrSK.js";import"./index-XPJfZ8Rp.js";import"./index-BtWSXXzR.js";import"./Link-DPkQciON.js";import"./addCustomCSSWithScoping-CPXzOUpZ.js";import"./index-_2a7rjiJ.js";import"./index-qYUxj7eK.js";import"./index-B-fuFZPz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOPJEYH-.js";import"./index-DhtGVRhj.js";import"./Carousel-C0JlqdAU.js";import"./ScrollEnablement-B_COiRMd.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BIrd10sF.js";import"./slim-arrow-left-Cw1CldGU.js";import"./DemoProps-CvDFc2C_.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DK68z0eO.js";import"./ChartContainer-Dz8GlDTp.js";import"./index-CfgMfPc4.js";import"./useCancelAnimationFallback-D4R5pRdg.js";import"./YAxisTicks-Ch3gOpU2.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-9-sQaYxf.js";import"./ChartDataLabel-Beucr4KB.js";import"./useOnClickInternal-Bv8ALfar.js";import"./react-content-loader.es-Bg02Pk30.js";import"./useIsRTL-CJjpUbvq.js";import"./useLongestYAxisLabel-C9eOBIRL.js";import"./ComposedChart-Ct28xAc5.js";import"./Line-Cft7ZwmD.js";import"./Scatter-C0CZuXCk.js";import"./index-Cjst7mZY.js";import"./index-Cfe4vPLw.js";import"./Placeholder-Doi5yNSG.js";import"./index-C3yOEU24.js";const $=`# @ui5/webcomponents-react-charts

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

If you’ve enabled \`staticCSSInjected\` on the \`ThemeProvider\` component ([learn more here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-server-side-rendering--docs#add-to-existing-project)), make sure to also import the \`charts\` stylesheet. Otherwise, charts won’t be rendered correctly.

\`\`\`ts
import '@ui5/webcomponents-react-charts/styles.css';
\`\`\`

## Documentation

You can find an interactive documentation in our [Storybook](https://sap.github.io/ui5-webcomponents-react/).

## Contribute

Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/SAP/ui5-webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/UI5/webcomponents-react).

<!-- Use the force -->
`;function E(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:$.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(E,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:S},{name:"RadialChart",component:I},{name:"ScatterChart",component:T}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
