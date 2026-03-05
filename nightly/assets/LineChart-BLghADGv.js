import{j as e}from"./iframe-JepDsySv.js";import{useMDXComponents as a}from"./index-BGpK8Gfn.js";import{M as d,C as n}from"./blocks-BbBU6U9u.js";import"./Tag-B5HHC3_D.js";import"./index-CgzvULcW.js";import{C as m}from"./ControlsWithNote-CirU9jF3.js";import{D as c}from"./DocsHeader-DU5w_HiK.js";import{F as h}from"./Footer-DkGRGaaK.js";import"./CommandsAndQueries-BpbXUgFJ.js";import"./PageNotFound-BYj9CuoF.js";import{M as p,a as l}from"./LegendConfig-DXxSTnCy.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-CUGE3Mg7.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DXY6cLV_.js";import"./sys-enter-2-e1zqJEbk.js";import"./alert-BXOPntd7.js";import"./index-CIXtBD0J.js";import"./index-Bd6WgbUi.js";import"./Link-BLuv4AbX.js";import"./copy-Bmpb5kaN.js";import"./copy-D2Pke32f.js";import"./GitHub-Mark-CxBZqW50.js";import"./TableOfContent-DzhvbQtx.js";import"./index-8tSJZtFG.js";import"./index-0BxTwmFy.js";import"./index-BKoJ8bur.js";import"./index-C220bubu.js";import"./index-CcxcRSha.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzfOud-0.js";import"./addCustomCSSWithScoping-f93Oozyz.js";import"./Illustrations-sShT8n29.js";import"./i18n-defaults-C7ICj5-E.js";import"./DemoProps-BuKU3M_X.js";import"./index-DiiP1G2I.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-Bwf8U3mY.js";import"./ChartContainer-BaGe5tcT.js";import"./index-Dd7JImE6.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BrJIs6Ai.js";import"./staticProps-CAEftThE.js";import"./ChartDataLabel-D2DycsnV.js";import"./useLongestYAxisLabel-L3KEj0uW.js";import"./react-content-loader.es-BDjwwJjD.js";import"./Line-C9clCnt_.js";import"./useIsRTL-Cj9ds3Xk.js";function s(o){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(c,{of:i,isChart:!0}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:t}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(r.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(r.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(r.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(r.h3,{id:"with-formatter",children:"With Formatter"}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(r.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(r.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,e.jsxs(r.p,{children:["You can set a reference line to any value by using the ",e.jsx(r.code,{children:"referenceLine"})," ",e.jsx(r.code,{children:"chartConfig"})," property. ",e.jsx(r.code,{children:"referenceLine"})," accepts all properties described ",e.jsx(r.a,{href:"https://recharts.org/en-US/api/ReferenceLine",rel:"nofollow",children:"here"}),", but it's recommended to only use ",e.jsx(r.code,{children:"label"}),",",e.jsx(r.code,{children:"value"})," and ",e.jsx(r.code,{children:"color"})," to preserve the intended design."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`<LineChart
  {...props}
  chartConfig={{
    referenceLine: {
      color: 'red',
      label: 'MAX',
      value: 650
    }
  }}
/>
`})}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(r.h3,{id:"with-linear-gradient",children:"With Linear Gradient"}),`
`,e.jsx(n,{of:L}),`
`,e.jsx(r.h4,{id:"code",children:"Code"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
  return (
    <LineChart
      dataset={bigDataSet}
      dimensions={[{ accessor: 'name' }]}
      measures={[
        {
          accessor: 'users',
          width: 2,
          color: 'url(#colorUsers)'
        }
      ]}
    >
      <defs>
        <linearGradient id="colorUsers" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
      </defs>
    </LineChart>
  );
};
`})}),`
`,e.jsx(p,{of:W}),`
`,e.jsx(l,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(h,{})]})}function fe(o={}){const{wrapper:r}={...a(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(s,{...o})}):s(o)}export{fe as default};
