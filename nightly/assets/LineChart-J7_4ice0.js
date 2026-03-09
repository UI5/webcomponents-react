import{j as e}from"./iframe-CzTCZe7v.js";import{useMDXComponents as a}from"./index-CDGFt6A1.js";import{M as d,C as n}from"./blocks-DeBlAQEU.js";import"./Tag-Czdm_FZb.js";import"./index-C0tHrsgM.js";import{C as m}from"./ControlsWithNote-CDLlK38r.js";import{D as c}from"./DocsHeader-BMnK1C50.js";import{F as h}from"./Footer-DxyUJb9o.js";import"./CommandsAndQueries-DvEFwabB.js";import"./PageNotFound-BAD2GAcl.js";import{M as p,a as l}from"./LegendConfig-Cl0nREIx.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-C2XDE7jC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bqvi10T6.js";import"./sys-enter-2-DyCO0gh_.js";import"./alert-9P0VyDJW.js";import"./index-CXe4MOnZ.js";import"./index-DIk2IhoZ.js";import"./Link-CZjSyYly.js";import"./copy-CNRutDQV.js";import"./copy-BOjVvS6l.js";import"./GitHub-Mark-BjX2VLOB.js";import"./TableOfContent-Bn2gWDi_.js";import"./index-B7_ymrud.js";import"./index-wip9afZ2.js";import"./index-DKruw7SF.js";import"./index-DzASyxpH.js";import"./index-C8dlP9nE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DPTQrRIc.js";import"./addCustomCSSWithScoping-Cq2MgCDz.js";import"./Illustrations-D7TiwfCu.js";import"./i18n-defaults-CFWtSmu6.js";import"./DemoProps-DunX9-KO.js";import"./index-C4jJeUUo.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-BzxBWzvr.js";import"./ChartContainer-CsnZbGvA.js";import"./index-CnvUSw0N.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BHVfaYCS.js";import"./staticProps-DIy79DwH.js";import"./ChartDataLabel-BSP4qwdD.js";import"./useLongestYAxisLabel-BuYQL6Oy.js";import"./react-content-loader.es-DEllolSw.js";import"./Line-DxknOqYJ.js";import"./useIsRTL-DxJ1Nm0H.js";function s(o){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
