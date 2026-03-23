import{j as e}from"./iframe-DcVQn4h7.js";import{useMDXComponents as a}from"./index-DjjpMNLx.js";import{M as d,C as n}from"./blocks-DpuwUxz9.js";import"./Tag-DIkCdjNz.js";import"./index-DQQWkI0N.js";import{C as m}from"./ControlsWithNote-Cjn4CI-t.js";import{D as c}from"./DocsHeader-UHsRexcK.js";import{F as h}from"./Footer-NfYngWNA.js";import"./CommandsAndQueries-BQOFWNIa.js";import"./PageNotFound-CVfCATZz.js";import{M as p,a as l}from"./LegendConfig-DFrGy8B-.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-60O0w1AN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cy8WRBMY.js";import"./sys-enter-2-BclYTqTi.js";import"./alert-YdCtzqbp.js";import"./index-CqxmVbMG.js";import"./index-DdVtCCP3.js";import"./Link-CVy3lCMm.js";import"./copy-BiurfHxj.js";import"./copy-Bc0coMMf.js";import"./GitHub-Mark-eGrRYaWL.js";import"./TableOfContent-CNL8YZr2.js";import"./index-DAQytdMa.js";import"./index-C5tsWYzj.js";import"./index-fZCQALbq.js";import"./index-CEU1rAw4.js";import"./index-CwCoovk9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BldFJeaD.js";import"./addCustomCSSWithScoping-BZ_vF02V.js";import"./Illustrations-Bw1pJyGV.js";import"./i18n-defaults-CFWtSmu6.js";import"./DemoProps-B4YezX9l.js";import"./index-JthdVXg-.js";import"./ThemingParameters-BvhwmbYD.js";import"./YAxisTicks-C7Gn2016.js";import"./ChartContainer-BgTHST9o.js";import"./index-BD8zH4rA.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Ltb3YTFo.js";import"./staticProps-x_s2xJIx.js";import"./ChartDataLabel-CJNBPG_g.js";import"./useLongestYAxisLabel-C7ruQHPq.js";import"./react-content-loader.es-DwTprCZj.js";import"./Line-D189y-j3.js";import"./useIsRTL-CkS_OTKg.js";function s(o){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
