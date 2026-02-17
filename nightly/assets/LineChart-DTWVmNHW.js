import{j as e}from"./iframe-Cs-5LFqP.js";import{useMDXComponents as a}from"./index-4_wYEVSM.js";import{M as d,C as r}from"./blocks-Ml05RtQw.js";import"./Tag-ChHbpWGO.js";import"./index-Bj7p5WqA.js";import{C as c}from"./ControlsWithNote-DkHNPNjQ.js";import{D as h}from"./DocsHeader-C63k-aiO.js";import{F as m}from"./CommandsAndQueries-pWQonQL4.js";import{M as l,a as p}from"./LegendConfig-CyRMEJus.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-CPKDK_5-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CG8AIpkm.js";import"./sys-enter-2-DunLLOB1.js";import"./alert-IqDG9ylo.js";import"./index-BUJAXr9p.js";import"./index-B7_af3sB.js";import"./Link-DZfJcWGy.js";import"./copy-CSR0A_Ed.js";import"./copy-DN4ABQ_i.js";import"./GitHub-Mark-CGoBiWKN.js";import"./TableOfContent-ebLhGbNZ.js";import"./index-tt3zNDS3.js";import"./index-DkXjtxgK.js";import"./index-k6loN7up.js";import"./index-CHkORph3.js";import"./index-CmIMKxCO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Oma2N1kf.js";import"./addCustomCSSWithScoping-BCQiyr6x.js";import"./DemoProps-CgPUYAcf.js";import"./index-BN7Zyf5B.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-Ce-SK6OS.js";import"./ChartContainer-qDadgmTb.js";import"./index-h8anB-3B.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BBPXSHwY.js";import"./staticProps-Dy3sZJes.js";import"./ChartDataLabel-D7iv77XQ.js";import"./useLongestYAxisLabel-CjIOXA5I.js";import"./react-content-loader.es-CNVRl1z8.js";import"./Line-CYEWVtVn.js";import"./useIsRTL-DzZietn_.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
