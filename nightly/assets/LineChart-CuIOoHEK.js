import{j as e}from"./iframe-D9fHiNXF.js";import{useMDXComponents as a}from"./index-DRx499Oz.js";import{M as d,C as r}from"./blocks-BHC48FnS.js";import"./Tag-D1pdGQFQ.js";import"./index-CsAQ2Eng.js";import{C as c}from"./ControlsWithNote-_PgGUMw2.js";import{D as h}from"./DocsHeader-fdSKAoIc.js";import{F as m}from"./CommandsAndQueries-CDyFXIce.js";import{M as l,a as p}from"./LegendConfig-DsTTZ9XQ.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-5RbkMvSA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-wNu5DDkV.js";import"./sys-enter-2-NNUjaus9.js";import"./alert-DnsJPzcv.js";import"./index-BVc7ik8a.js";import"./index-79vX-IjV.js";import"./Link-UWQK2ZBb.js";import"./copy-ClYjzaDz.js";import"./copy-FG9bHXhV.js";import"./GitHub-Mark-BVG-IHke.js";import"./TableOfContent-BNFLd8cv.js";import"./index-CJoLxfl_.js";import"./index-BYfLRpIA.js";import"./index-D9W7JLGJ.js";import"./index-C7nfqaAP.js";import"./index-DN7QVpUQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOEmcw1X.js";import"./addCustomCSSWithScoping-QhFRL0Bb.js";import"./DemoProps-krfuUyya.js";import"./index-D61EXjcN.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-BtNH6-QN.js";import"./ChartContainer-BJoRRUT_.js";import"./index-C-gG0abr.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CxA0m0gf.js";import"./staticProps-Cf4pGQmy.js";import"./ChartDataLabel-oBsJEkmr.js";import"./useLongestYAxisLabel-DSClFqFs.js";import"./react-content-loader.es-BiijIT4A.js";import"./Line-DPTzo9dR.js";import"./useIsRTL-ByZPFV9T.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
