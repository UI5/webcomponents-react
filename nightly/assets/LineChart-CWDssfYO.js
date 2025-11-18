import{j as e}from"./iframe-B_Wb0L56.js";import{useMDXComponents as a}from"./index-307InIrT.js";import{M as d,C as r}from"./blocks-BG9i3u3d.js";import"./Tag-BJqa-9S6.js";import"./index-IQMTO30I.js";import{C as c}from"./ControlsWithNote-B2GD3nsm.js";import{D as h}from"./DocsHeader-CzpamC24.js";import{F as m}from"./CommandsAndQueries-DZD1CEEu.js";import{M as l,a as p}from"./LegendConfig-BuiZxpUy.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-DWsJU8Qz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CNVdTL1g.js";import"./sys-enter-2-YeZbpBvt.js";import"./alert-BrJW2BAH.js";import"./index-DOJ9CtkL.js";import"./index-6_sfbhaU.js";import"./Link-mQObbT4s.js";import"./copy-CswcPv5A.js";import"./copy-B8s392ic.js";import"./GitHub-Mark-B2qKopO1.js";import"./TableOfContent-C8-rfcah.js";import"./index-C1-6BxML.js";import"./index-CTXSjodk.js";import"./index-B6cUzUVp.js";import"./index-DKVx4eTx.js";import"./index-BzKebhUC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CNNLg8qF.js";import"./addCustomCSSWithScoping-CLC5si1k.js";import"./DemoProps-KB78w-ay.js";import"./index-CeJE_oAN.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-DWEIZ4d6.js";import"./ChartContainer-BxjeHd6L.js";import"./index-744O76gW.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DfJtEcA3.js";import"./staticProps-CSvCHozW.js";import"./ChartDataLabel-BbskrOCP.js";import"./useLongestYAxisLabel-BTkqLrME.js";import"./react-content-loader.es-BaOxwS_c.js";import"./Line-BHK7uYrW.js";import"./useIsRTL-7XnIEYeH.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
