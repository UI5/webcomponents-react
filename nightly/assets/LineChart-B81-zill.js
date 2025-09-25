import{j as e}from"./iframe-DncksSc9.js";import{useMDXComponents as a}from"./index-DHwy2cP9.js";import{M as d,C as r}from"./blocks-CrR4TToZ.js";import"./Tag-CydY6GNK.js";import"./index-Bxx2fk60.js";import{C as c}from"./ControlsWithNote-Diaxfqvl.js";import{D as h}from"./DocsHeader-BqrZT3Oi.js";import{F as m}from"./CommandsAndQueries-CDnFth_H.js";import{M as l,a as p}from"./LegendConfig-B7Rp4AfU.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-B9MS1thl.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DaRpWkOX.js";import"./sys-enter-2-oWYvZ3n3.js";import"./alert-DDv07Q-F.js";import"./index-Bbgh-_Am.js";import"./index-DM-1F5s9.js";import"./Link-DA9rizI6.js";import"./copy-BCvo8Ym1.js";import"./copy-DLEpwWX6.js";import"./GitHub-Mark-D-UOdu-9.js";import"./TableOfContent-CzqOl-iG.js";import"./index--l4k2_pu.js";import"./index-LgvpS8l8.js";import"./index-DjMKVIn1.js";import"./index-9yiQ979H.js";import"./index-ozB3DgLW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0ZXAWvt.js";import"./addCustomCSSWithScoping-CHaIArZr.js";import"./DemoProps-Ddf6E5hr.js";import"./index-wD494YI6.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-B3E_JP2g.js";import"./ChartContainer-CzzLew-u.js";import"./index-83abA5iC.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Ctu7xyI7.js";import"./staticProps-DdViSmMq.js";import"./ChartDataLabel-DafdEANi.js";import"./useLongestYAxisLabel-DlzBhjNz.js";import"./react-content-loader.es-ga3iBK2T.js";import"./Line-CBJ_e_IV.js";import"./useIsRTL-SpXXo_HP.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
