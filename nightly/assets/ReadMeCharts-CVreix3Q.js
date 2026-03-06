import{q as i,j as t,Q as l}from"./iframe-BsLeblbZ.js";import{useMDXComponents as p}from"./index-SmDsT-ZV.js";import{M as u,a as h,n as f}from"./blocks-MuC3nZ17.js";import"./Tag-YXcZfnM7.js";import"./index-RHsqj3O6.js";import"./CommandsAndQueries-BIrmUykn.js";import"./copy-D-f_NdBO.js";import{T as d}from"./TableOfContent-B8KE4qVO.js";import{F as b}from"./Footer-Bbw4uFwB.js";import"./PageNotFound-DD-eOCZR.js";import{C}from"./index-DYD6uytW.js";import{D}from"./BarChart.stories-CY8Ouxwu.js";import{D as y}from"./BulletChart.stories-BfEFMVhL.js";import{D as g}from"./ColumnChart.stories-goB97Nme.js";import{D as v}from"./ColumnChartWithTrend.stories-ufYgxuEZ.js";import{D as x}from"./ComposedChart.stories-Bn41XiGF.js";import{D as j}from"./DonutChart.stories-BrV9pHyL.js";import{D as w}from"./LineChart.stories-BvsC2m8m.js";import{D as R}from"./PieChart.stories-CbEKMWU0.js";import{D as I}from"./RadarChart.stories-B58A3MMb.js";import{D as S}from"./RadialChart.stories-drOYZ0pP.js";import{D as $}from"./ScatterChart.stories-Btb96wzs.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CyWeW3Ip.js";import"./sys-enter-2-0MhMJNjS.js";import"./alert-CqXBa80-.js";import"./Link-CBQ0neVT.js";import"./index-B-MH-ZOH.js";import"./index-B9PkCo2j.js";import"./index-Hl67y25M.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtKzQDtt.js";import"./addCustomCSSWithScoping-BnenMixx.js";import"./index-Xah-ddNA.js";import"./index-BxpRwQAU.js";import"./index-B-umVgsK.js";import"./index-DOfJ-lzX.js";import"./Illustrations-BpmOpW1L.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-COOGWBpu.js";import"./ScrollEnablement-B2JTzChl.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DtINLn7c.js";import"./slim-arrow-left-CFKy4vAa.js";import"./DemoProps-B322YW4D.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DRB3IQ2b.js";import"./ChartContainer-CBAmGJlF.js";import"./index-dvi0XJ6b.js";import"./useCancelAnimationFallback-CPLgRsBD.js";import"./YAxisTicks-JZNCf8v5.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-K3Q9xfKB.js";import"./ChartDataLabel-CMIJi4V3.js";import"./useOnClickInternal-CwdQUEyb.js";import"./react-content-loader.es-DHsQuVpZ.js";import"./useIsRTL-BkunmVQ4.js";import"./useLongestYAxisLabel-K1pgykuE.js";import"./ComposedChart-B5XB_mwz.js";import"./Line-C74UBwAB.js";import"./Scatter-BU2688wl.js";import"./index-Cwd_-6XZ.js";import"./index-gvNq4kMo.js";import"./Placeholder-B0ivIL0C.js";import"./index-tYg6Ofdx.js";const E=`# @ui5/webcomponents-react-charts

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
