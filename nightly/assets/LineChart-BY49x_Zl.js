import{j as e}from"./iframe-B3T0Oj7B.js";import{useMDXComponents as a}from"./index-D3UxDze4.js";import{M as d,C as r}from"./blocks-CyPgi3fl.js";import"./Tag-BebiXErc.js";import"./index-dJAxIfZY.js";import{C as c}from"./ControlsWithNote-C1V9eZ5n.js";import{D as h}from"./DocsHeader-QqmuRAQk.js";import{F as m}from"./CommandsAndQueries-DvsDK9ZB.js";import{M as l,a as p}from"./LegendConfig-DVYVap0M.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-BXbDWYGc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CDiFrRjk.js";import"./sys-enter-2-CspjHMoa.js";import"./alert-BsEVUmBp.js";import"./index-BywqBC1y.js";import"./index-BctJwJOg.js";import"./Link-Bk4EX_BP.js";import"./copy-DfWvHyjG.js";import"./copy-_Qj_KEfj.js";import"./GitHub-Mark-Jk8JGZzB.js";import"./TableOfContent-zwMPdMlr.js";import"./index-D37akpKi.js";import"./index-B8hvCU9O.js";import"./index-Bik-cKeX.js";import"./index-D_qT_Ogl.js";import"./index-CpVd5OAx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVuzLNiB.js";import"./addCustomCSSWithScoping-BR9GACjU.js";import"./DemoProps-Bfx-4ei2.js";import"./index-DIlEcuLZ.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-BHcP-fyT.js";import"./ChartContainer-DevNOGjl.js";import"./index-4zbN5094.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CrqqmaG8.js";import"./staticProps--b5gejPN.js";import"./ChartDataLabel-CU5aBMwD.js";import"./useLongestYAxisLabel-BKOTmpH2.js";import"./react-content-loader.es-Bfs_XO5c.js";import"./Line-CYLhi5a5.js";import"./useIsRTL-BlmVpLoY.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
