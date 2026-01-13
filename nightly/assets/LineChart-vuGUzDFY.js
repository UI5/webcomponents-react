import{j as e}from"./iframe-BX6l_vT-.js";import{useMDXComponents as a}from"./index-Bzy26fup.js";import{M as d,C as r}from"./blocks-dv2dOEr1.js";import"./Tag-CPbL9Jm0.js";import"./index-Brt5lPnV.js";import{C as c}from"./ControlsWithNote-DT25iZ0d.js";import{D as h}from"./DocsHeader-Dd5Ldadt.js";import{F as m}from"./CommandsAndQueries-BQamr4MW.js";import{M as l,a as p}from"./LegendConfig-BtZ9QvEd.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-Dl63TP84.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BHJaLhAv.js";import"./sys-enter-2-EZBfp4iZ.js";import"./alert-DUVH4PBA.js";import"./index-DKRKom99.js";import"./index-CPY8w0If.js";import"./Link-LBAuQHud.js";import"./copy-IRAbc-Qz.js";import"./copy-DJpI-ZKv.js";import"./GitHub-Mark-BYqQpMuY.js";import"./TableOfContent-DfjT9NBm.js";import"./index-JvehRoeP.js";import"./index-DN8AW8ib.js";import"./index-5GNX0CLe.js";import"./index-CdanIUAH.js";import"./index-CUja4hYj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJYHkaYl.js";import"./addCustomCSSWithScoping-DPpaQSds.js";import"./DemoProps-DpMIbTdm.js";import"./index-DwFVJz_t.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-By5HAz1p.js";import"./ChartContainer-GKcvFG5t.js";import"./index-Dr11T0CO.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DPCiFLSu.js";import"./staticProps-C5ZQlQKv.js";import"./ChartDataLabel-De10asms.js";import"./useLongestYAxisLabel-BlTIdk7Y.js";import"./react-content-loader.es-Bf18-ts6.js";import"./Line-BH8kOH3y.js";import"./useIsRTL-Cr-hHSan.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
