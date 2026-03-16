import{j as e}from"./iframe-BVmbmlmH.js";import{useMDXComponents as a}from"./index-BayNuhgZ.js";import{M as d,C as n}from"./blocks-DMMtyDnL.js";import"./Tag-CX0-uTWT.js";import"./index-DLhdihT5.js";import{C as m}from"./ControlsWithNote-DKY_t_-S.js";import{D as c}from"./DocsHeader-BnbiGjxt.js";import{F as h}from"./Footer-jyZDOgk8.js";import"./CommandsAndQueries-HKIzYk5f.js";import"./PageNotFound-Bx-Sm5Da.js";import{M as p,a as l}from"./LegendConfig-BtgisF3V.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-CzBoex5X.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BShnHlGL.js";import"./sys-enter-2-I6roqntb.js";import"./alert-D_-PGSyq.js";import"./index-BCEgOOyQ.js";import"./index-B9kq_n6z.js";import"./Link-mk6Fv6C7.js";import"./copy-B6G0dudT.js";import"./copy-GT2usG3-.js";import"./GitHub-Mark-C2JmqxPR.js";import"./TableOfContent-DlRBwInQ.js";import"./index-CGmvxCgE.js";import"./index-hq6INLou.js";import"./index-BxRkRPbG.js";import"./index-BJnbAjLN.js";import"./index-DOsMkDHm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY1Um-8U.js";import"./addCustomCSSWithScoping-BGYdQCs4.js";import"./Illustrations-CSa63wVD.js";import"./i18n-defaults-CFWtSmu6.js";import"./DemoProps-Dg4cDJhH.js";import"./index-DSGwGMHc.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-Cjil9wqk.js";import"./ChartContainer-ChH6ktQG.js";import"./index-CNlu7VXT.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Cs1UI0gs.js";import"./staticProps-DrPYRD8w.js";import"./ChartDataLabel-DjrmZzq3.js";import"./useLongestYAxisLabel-COAVt_J3.js";import"./react-content-loader.es-lWJuEsID.js";import"./Line-BlHAPlND.js";import"./useIsRTL-BtJvBTrm.js";function s(o){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
