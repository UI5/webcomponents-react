import{q as i,j as t,Q as l}from"./iframe-DMsBkhV6.js";import{useMDXComponents as p}from"./index-DRmP5vAG.js";import{M as u,a as h,n as f}from"./blocks-DLa5hkYX.js";import"./Tag-BmcB_JoS.js";import"./index-DCIOC28Z.js";import"./CommandsAndQueries-DpukJ1Hp.js";import"./copy-CD95AZM0.js";import{T as d}from"./TableOfContent-YryckjTo.js";import{F as b}from"./Footer-BOw4Z5DY.js";import"./PageNotFound-DjLaegFZ.js";import{C}from"./index-BsJlT5Hg.js";import{D}from"./BarChart.stories-Beuf83WK.js";import{D as y}from"./BulletChart.stories-DJPKNce0.js";import{D as g}from"./ColumnChart.stories-CqRn2-D0.js";import{D as v}from"./ColumnChartWithTrend.stories-CsGHnlwh.js";import{D as x}from"./ComposedChart.stories-BwiSw3iz.js";import{D as j}from"./DonutChart.stories-Cmpq4W-e.js";import{D as w}from"./LineChart.stories-Dt-dc0CH.js";import{D as R}from"./PieChart.stories-_k5htXx4.js";import{D as I}from"./RadarChart.stories-iW_SJfvV.js";import{D as S}from"./RadialChart.stories-7o6zDohF.js";import{D as $}from"./ScatterChart.stories-sX5dYg7U.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B9kPmlYt.js";import"./sys-enter-2-DFXWrXkU.js";import"./alert-BM02Ke2L.js";import"./Link-CSEVwGcN.js";import"./index-Bz_iFKqi.js";import"./index-bqOHt3_F.js";import"./index-Ct0KsXWt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSKWwKcd.js";import"./addCustomCSSWithScoping-BbL9ROxJ.js";import"./index-DsnyfM-a.js";import"./index-D8IUoaKA.js";import"./index-CsdED7a8.js";import"./index-BzYJTbyT.js";import"./Illustrations-BuKaE0Lu.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-B3PNA6zT.js";import"./ScrollEnablement-COba7ibi.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BW5Awl9V.js";import"./slim-arrow-left-C3g7dE-e.js";import"./DemoProps-CQnlnS2R.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-CHN8EX-k.js";import"./ChartContainer-Bm0Z51b1.js";import"./index-BYW_tyTv.js";import"./useCancelAnimationFallback-Br35_LUq.js";import"./YAxisTicks-DuEtawfH.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D5hqfkwB.js";import"./ChartDataLabel-DhjSQv09.js";import"./useOnClickInternal-DEDM7inN.js";import"./react-content-loader.es-SYpaohXy.js";import"./useIsRTL-D_v8Eyxn.js";import"./useLongestYAxisLabel-C466EDM2.js";import"./ComposedChart-OkvqWjqm.js";import"./Line-DUCm2DsS.js";import"./Scatter-C7zaPl23.js";import"./index-BsklI5p3.js";import"./index-16uc-DBN.js";import"./Placeholder-DrLIdrTE.js";import"./index-D5cwt9_G.js";const E=`# @ui5/webcomponents-react-charts

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
