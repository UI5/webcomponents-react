import{j as e}from"./iframe-XNJfvnKd.js";import{useMDXComponents as a}from"./index-BB1Z__gZ.js";import{M as d,C as n}from"./blocks-70fHpzfh.js";import"./Tag-Bt3S_y8X.js";import"./index-CCPENXhC.js";import{C as m}from"./ControlsWithNote-BTUTR6nF.js";import{D as c}from"./DocsHeader-D0j_puV4.js";import{F as h}from"./Footer-BCJuC1pH.js";import"./CommandsAndQueries-BhkfH5lW.js";import"./PageNotFound-DNJSaIYV.js";import{M as p,a as l}from"./LegendConfig-Bv1US_uO.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-BpIVQrMQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CaeHS7Lo.js";import"./sys-enter-2-D6Lk4332.js";import"./alert-Dalf8wRK.js";import"./index-X0L_7D7a.js";import"./index-Cr8k8bpx.js";import"./Link-By03J9gW.js";import"./copy-C0grvfKX.js";import"./copy-AwcTHtit.js";import"./GitHub-Mark-DfQ8VauP.js";import"./TableOfContent-D_tQ1GzJ.js";import"./index-CnSjbRE7.js";import"./index-CONBdBFK.js";import"./index-DJvc2tfl.js";import"./index-BGH8cR_1.js";import"./index-C23si5qK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjHnjWqf.js";import"./addCustomCSSWithScoping-Uu6mKzaL.js";import"./Illustrations-CJz4mowS.js";import"./i18n-defaults-CFWtSmu6.js";import"./DemoProps-CZiXZUaB.js";import"./index-CorSBwiH.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-FqoYc-k8.js";import"./ChartContainer-AaT_9pYH.js";import"./index-BpPLeT54.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-LhI74Xdb.js";import"./staticProps-Cl3moE2T.js";import"./ChartDataLabel-D4kN4Dr4.js";import"./useLongestYAxisLabel-B7BLiPQI.js";import"./react-content-loader.es-B8VsM-V0.js";import"./Line-DvhubKmC.js";import"./useIsRTL-0aovCf59.js";function s(o){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
