import{j as e}from"./iframe-BFWc6ije.js";import{useMDXComponents as a}from"./index-DIwiR8-R.js";import{M as d,C as r}from"./blocks-_C0Ko-FB.js";import"./Tag-BlcbvGrz.js";import"./index-S-jzd0og.js";import{C as c}from"./ControlsWithNote-qwvEwOvA.js";import{D as h}from"./DocsHeader-CTkr0wnQ.js";import{F as m}from"./CommandsAndQueries-RvyhHzLx.js";import{M as l,a as p}from"./LegendConfig-BY2ztVSM.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-iTHVgZqH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-gUiWTFs7.js";import"./sys-enter-2-Czjj6c4O.js";import"./alert-Dwrii-iz.js";import"./index-DYh3DUHT.js";import"./index-Ammjaz44.js";import"./Link-C0nE2LNS.js";import"./copy-4jYiu-nN.js";import"./copy-B0915CdE.js";import"./GitHub-Mark-C3CIiIRf.js";import"./TableOfContent-DeyQFnDl.js";import"./index-BWXRaFCB.js";import"./index-BJhTX5aa.js";import"./index-D6ti5Aap.js";import"./index-BNrsjj3y.js";import"./index-BeiCFHJ0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NyszqC-C.js";import"./addCustomCSSWithScoping-DHZr8-1Q.js";import"./DemoProps-D-mCqpYY.js";import"./index-6kNH_n1a.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-G0valUIG.js";import"./ChartContainer-9gQCQ6hm.js";import"./index-fezgehlA.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CcHJqr01.js";import"./staticProps-C777mOyL.js";import"./ChartDataLabel-LRJRq3Ma.js";import"./useLongestYAxisLabel-CRcrh3cD.js";import"./react-content-loader.es-CPmDa9rT.js";import"./Line-CvD9AL3_.js";import"./useIsRTL-DrH-Pm0z.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
