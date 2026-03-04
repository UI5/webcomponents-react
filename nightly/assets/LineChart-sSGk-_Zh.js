import{j as e}from"./iframe-CLKwUGEX.js";import{useMDXComponents as a}from"./index-DCuwspND.js";import{M as d,C as r}from"./blocks-Dh7hbfcJ.js";import"./Tag-CfLVXJVc.js";import"./index-h52TWGHx.js";import{C as c}from"./ControlsWithNote-gpbOfeMG.js";import{D as h}from"./DocsHeader-BOmvn_ug.js";import{F as m}from"./CommandsAndQueries-dz6NHoyr.js";import{M as l,a as p}from"./LegendConfig-BrNL5-EX.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-kFP4ER7Y.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0EfmlkL.js";import"./sys-enter-2-CbYR1yRQ.js";import"./alert-B6Esz0N1.js";import"./index-CuwqMzEM.js";import"./index-CkL1gWNe.js";import"./Link-Bqvbz9lT.js";import"./copy-BsKGEA4X.js";import"./copy-BrK10eH_.js";import"./GitHub-Mark-DHhMRLzL.js";import"./TableOfContent-Dt1l8u5g.js";import"./index-Veg9_1qu.js";import"./index-ZH4BIl7e.js";import"./index-CL8a7czm.js";import"./index-CRtbNwl1.js";import"./index-BIRKClWd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYpAqTMA.js";import"./addCustomCSSWithScoping-Ckj5BS6-.js";import"./DemoProps-B2xEWaqI.js";import"./index-CpZ6o78u.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-D3R9_DNH.js";import"./ChartContainer-CcMKwZIL.js";import"./index-FsTUQbBQ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-EZCFXVjw.js";import"./staticProps-D-3vQJJN.js";import"./ChartDataLabel-vsGg9Qom.js";import"./useLongestYAxisLabel-CUMA18g5.js";import"./react-content-loader.es-Cl_y3aGQ.js";import"./Line-DD8VY82D.js";import"./useIsRTL-YHsws3VW.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
