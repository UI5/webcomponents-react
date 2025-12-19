import{j as e}from"./iframe-By2gmFxc.js";import{useMDXComponents as a}from"./index-gKb_GMnq.js";import{M as d,C as r}from"./blocks-D2uzjwbj.js";import"./Tag-Q4xsur8Q.js";import"./index-CIY2e3dX.js";import{C as c}from"./ControlsWithNote-J_FS3ar_.js";import{D as h}from"./DocsHeader-BQhjxotY.js";import{F as m}from"./CommandsAndQueries-MwhWu1jt.js";import{M as l,a as p}from"./LegendConfig-CWB8TFXc.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-EGq1A23q.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DZbn4exg.js";import"./sys-enter-2-D1EL9sqg.js";import"./alert-Dj00yiIa.js";import"./index-c5NRQxKp.js";import"./index-CYEIBPim.js";import"./Link-nWDhDuhI.js";import"./copy-BckvoikG.js";import"./copy-jhrg3Bh5.js";import"./GitHub-Mark-C0HJUWkv.js";import"./TableOfContent-DNYBmsFN.js";import"./index-DjdoJ-R-.js";import"./index-JdoT9BRG.js";import"./index-4iQpwXEW.js";import"./index-XAF-DZNA.js";import"./index-BlQvs7kx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl2hQFWK.js";import"./addCustomCSSWithScoping-BCT2RHCk.js";import"./DemoProps-Cu5eLVBa.js";import"./index-B5LyocLd.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-GRBYYxX1.js";import"./ChartContainer-DvWWB_TN.js";import"./index-BrqX3Vme.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CQImiB8O.js";import"./staticProps-gefo3yID.js";import"./ChartDataLabel-BzYEBwXb.js";import"./useLongestYAxisLabel-QDWNQKrU.js";import"./react-content-loader.es-BY8WFCVf.js";import"./Line-BMbEo7oL.js";import"./useIsRTL-T3phyLSC.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
