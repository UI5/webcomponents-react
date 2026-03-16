import{q as i,j as t,Q as l}from"./iframe-CIERqdmv.js";import{useMDXComponents as p}from"./index-DuJS4dN9.js";import{M as u,a as h,n as f}from"./blocks-CwsgKOP_.js";import"./Tag-0874imNl.js";import"./index-CMev4Q36.js";import"./CommandsAndQueries-CnFEaRrZ.js";import"./copy-Dk2sduK9.js";import{T as d}from"./TableOfContent-BXcIi_qC.js";import{F as b}from"./Footer-DeuiB6kc.js";import"./PageNotFound-C7dSWVQh.js";import{C}from"./index-L-UD1fZW.js";import{D}from"./BarChart.stories-Bf7u3iYe.js";import{D as y}from"./BulletChart.stories-BfnvdVlz.js";import{D as g}from"./ColumnChart.stories-CtIVZSnt.js";import{D as v}from"./ColumnChartWithTrend.stories-D-hsV5X9.js";import{D as x}from"./ComposedChart.stories---l5qeB1.js";import{D as j}from"./DonutChart.stories-1q73d0cC.js";import{D as w}from"./LineChart.stories-DJu_xGPl.js";import{D as R}from"./PieChart.stories-BYkTytHB.js";import{D as I}from"./RadarChart.stories-q9d0HVPk.js";import{D as S}from"./RadialChart.stories-BSB1Ehfm.js";import{D as $}from"./ScatterChart.stories-VoH_iolO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-90fB5V4h.js";import"./sys-enter-2-BkL_leH3.js";import"./alert-B9azflx9.js";import"./Link-B7T_f79Y.js";import"./index-Dub9x5-i.js";import"./index-DQGCwtV8.js";import"./index-C9od4SKd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkSzocmg.js";import"./addCustomCSSWithScoping-B8m6lHZs.js";import"./index-BEXhXSTj.js";import"./index-CeFrwZtC.js";import"./index-DmgJDP0k.js";import"./index-CJA8M3b4.js";import"./Illustrations-CMsXyloe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-By7kw92m.js";import"./ScrollEnablement-DGfUBP2Y.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D45ESRiL.js";import"./slim-arrow-left-CtdazLbO.js";import"./DemoProps-BPre6RkE.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CH5iz18q.js";import"./ChartContainer-DlwyRWvn.js";import"./index-CP7c8g3L.js";import"./useCancelAnimationFallback-fVKRr2ZB.js";import"./YAxisTicks-CKc-crGj.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DPFRgAx1.js";import"./ChartDataLabel-D-__kNoG.js";import"./useOnClickInternal-WB8dZu6i.js";import"./react-content-loader.es-DtC6mpLt.js";import"./useIsRTL-CMxRGrvK.js";import"./useLongestYAxisLabel-sIXnB8_3.js";import"./ComposedChart-CXXlRECw.js";import"./Line-Dd9PqzWz.js";import"./Scatter-rtr1BVys.js";import"./index-BWl-4Ogw.js";import"./index-Jlvz9s2v.js";import"./Placeholder-FmxTEydL.js";import"./index-Fli8PU-1.js";const E=`# @ui5/webcomponents-react-charts

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
