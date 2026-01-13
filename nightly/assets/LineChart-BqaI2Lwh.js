import{j as e}from"./iframe-DfTuu2Qs.js";import{useMDXComponents as a}from"./index-tu9Knfll.js";import{M as d,C as r}from"./blocks-DwvFSYgT.js";import"./Tag-a-ykqmZl.js";import"./index-D59W5J0R.js";import{C as c}from"./ControlsWithNote-w7aNvimh.js";import{D as h}from"./DocsHeader-COdzN9GK.js";import{F as m}from"./CommandsAndQueries-CbObYkDi.js";import{M as l,a as p}from"./LegendConfig-6jpEhqBm.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-Ow4dt_zm.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DFuUDpiC.js";import"./sys-enter-2-B3GhyP7w.js";import"./alert-CmUExS0E.js";import"./index-D-5EknuX.js";import"./index-upgMd0Ps.js";import"./Link-DQEzecZX.js";import"./copy-Bd7XhTys.js";import"./copy-CAppfZ8d.js";import"./GitHub-Mark-D0XkxXbP.js";import"./TableOfContent-DgWjSnAE.js";import"./index-CEqB_Mrf.js";import"./index-4cmdIwXv.js";import"./index-DV0Q9niH.js";import"./index-CHJ4eeD3.js";import"./index-B1cc6DOE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BlYlCK6x.js";import"./addCustomCSSWithScoping-l0p7E_oS.js";import"./DemoProps-BbDyWMDI.js";import"./index-D2HTuN2S.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-C1Tctu4S.js";import"./ChartContainer-D8YPN604.js";import"./index-DzevBiS7.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CosFkbB9.js";import"./staticProps-Ce6i2zOK.js";import"./ChartDataLabel-Dkp3Bwfw.js";import"./useLongestYAxisLabel-W8DajAK6.js";import"./react-content-loader.es-DUfJ0xJP.js";import"./Line-D6GJQhnl.js";import"./useIsRTL-BXblpA9j.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
