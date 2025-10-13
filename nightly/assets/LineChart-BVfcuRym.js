import{j as e}from"./iframe-B2H5__qL.js";import{useMDXComponents as a}from"./index-Bc3WoLXB.js";import{M as d,C as r}from"./blocks-CV5yz-FR.js";import"./Tag-7r6nRPOe.js";import"./index-Cm-x3hEF.js";import{C as c}from"./ControlsWithNote-4ZbwV_xc.js";import{D as h}from"./DocsHeader-Ma5Prb85.js";import{F as m}from"./CommandsAndQueries-CP6cnX5g.js";import{M as l,a as p}from"./LegendConfig-B2sBC2j7.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-CUHy8vi_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C3uad2Xw.js";import"./sys-enter-2-cAFQMIU-.js";import"./alert-D25r9vgu.js";import"./index-CF6OSC7N.js";import"./index-BLSBFNnV.js";import"./Link-CBNkHCq_.js";import"./copy-Dq1vVsOW.js";import"./copy-BwEcpAyC.js";import"./GitHub-Mark-Dm1fGQmx.js";import"./TableOfContent-CbIy2CJ0.js";import"./index-CPEAIHq6.js";import"./index-8OksVI4W.js";import"./index-BNOYEhs3.js";import"./index-CwqZMpwP.js";import"./index-BCbtyila.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVsneHI1.js";import"./addCustomCSSWithScoping-cFAolBzW.js";import"./DemoProps-CC117j3T.js";import"./index-IjcaC_SD.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-B6m0hGUh.js";import"./ChartContainer-BI1DfPm6.js";import"./index-CuufOZMl.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CCHpmb2K.js";import"./staticProps-CEA3WGQK.js";import"./ChartDataLabel-C50FGoTC.js";import"./useLongestYAxisLabel-B2-Yz0eL.js";import"./react-content-loader.es-DfRAcAPk.js";import"./Line-DlE4PsoE.js";import"./useIsRTL-DhOh-sF-.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(h,{of:i,isChart:!0}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(n.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(n.h3,{id:"with-formatter",children:"With Formatter"}),`
`,e.jsx(r,{of:C}),`
`,e.jsx(n.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,e.jsxs(n.p,{children:["You can set a reference line to any value by using the ",e.jsx(n.code,{children:"referenceLine"})," ",e.jsx(n.code,{children:"chartConfig"})," property. ",e.jsx(n.code,{children:"referenceLine"})," accepts all properties described ",e.jsx(n.a,{href:"https://recharts.org/en-US/api/ReferenceLine",rel:"nofollow",children:"here"}),", but it's recommended to only use ",e.jsx(n.code,{children:"label"}),",",e.jsx(n.code,{children:"value"})," and ",e.jsx(n.code,{children:"color"})," to preserve the intended design."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<LineChart
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
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"with-linear-gradient",children:"With Linear Gradient"}),`
`,e.jsx(r,{of:L}),`
`,e.jsx(n.h4,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
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
`,e.jsx(l,{of:W}),`
`,e.jsx(p,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(m,{})]})}function le(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{le as default};
