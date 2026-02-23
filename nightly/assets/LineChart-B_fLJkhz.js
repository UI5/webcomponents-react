import{j as e}from"./iframe-DJeYw3_T.js";import{useMDXComponents as a}from"./index-CAoJF-Ee.js";import{M as d,C as r}from"./blocks-CX606tiu.js";import"./Tag-CCm379UD.js";import"./index-D_iy8XUE.js";import{C as c}from"./ControlsWithNote-Cd4-1WaE.js";import{D as h}from"./DocsHeader-Cu-Z-sJO.js";import{F as m}from"./CommandsAndQueries-BpKCXtjf.js";import{M as l,a as p}from"./LegendConfig--FTvbpnt.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-DSJC4wxW.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CWuwvd7P.js";import"./sys-enter-2-CLYEOYwG.js";import"./alert-CTnjMkAD.js";import"./index-ChAuXbDX.js";import"./index-ZZUuVpkh.js";import"./Link-D6M-iLai.js";import"./copy-CbTRvlP6.js";import"./copy-DmlYE796.js";import"./GitHub-Mark-CwfSp5YR.js";import"./TableOfContent-CFuMbk9T.js";import"./index-tnzxKSW0.js";import"./index-US2STizv.js";import"./index-xs7bXSrN.js";import"./index-BldmH6cg.js";import"./index-BfDuZshB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bv4hvB9u.js";import"./addCustomCSSWithScoping-DdjgQkne.js";import"./DemoProps-BXRYcX5k.js";import"./index-FBBW_br4.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-DqXA7qOR.js";import"./ChartContainer-C7iBqNx_.js";import"./index-DgbNo39p.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ha-8MoLZ.js";import"./staticProps-te-qwcKl.js";import"./ChartDataLabel-Dm_-q2y5.js";import"./useLongestYAxisLabel-t0CX9miP.js";import"./react-content-loader.es-9gLbJa6C.js";import"./Line-BZRJZAch.js";import"./useIsRTL-wyLkWFxP.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
