import{j as e}from"./iframe-DVGWhCAE.js";import{useMDXComponents as a}from"./index-B9xkaSV0.js";import{M as d,C as r}from"./blocks-BJbIBXfd.js";import"./Tag-BSVrbtw1.js";import"./index-8G75QKe0.js";import{C as c}from"./ControlsWithNote-C60QK1TR.js";import{D as h}from"./DocsHeader-DgEUA2RG.js";import{F as m}from"./CommandsAndQueries-dho9FID6.js";import{M as l,a as p}from"./LegendConfig-pL5PJGW1.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-CnVABhW-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-omXjQTPD.js";import"./sys-enter-2-C04ebACG.js";import"./alert-BHqxLN4g.js";import"./index-BJLS4IRc.js";import"./index-BHsujjCW.js";import"./Link-Dgw-_ZOU.js";import"./copy-CZDbwxXZ.js";import"./copy-BlV96bJM.js";import"./GitHub-Mark-BYCuHz4P.js";import"./TableOfContent-B3yr3fci.js";import"./index-CRrKr04f.js";import"./index-Q2-fVCzE.js";import"./index-Nk5G6RU7.js";import"./index-DGKs15kB.js";import"./index-NT87e1sK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DANVMAHb.js";import"./addCustomCSSWithScoping-5Jg_uRZD.js";import"./DemoProps-Fxt1F_nd.js";import"./index-DapqJWcN.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-BO6G1iD6.js";import"./ChartContainer-CAoTfbxD.js";import"./index-D2OD1CJk.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DJ9TKuH2.js";import"./staticProps-CNEPXEG8.js";import"./ChartDataLabel-odrhXzAa.js";import"./useLongestYAxisLabel-CStxLTCc.js";import"./react-content-loader.es-CB52qDV3.js";import"./Line-CvQJcCta.js";import"./useIsRTL-BrbgBhCS.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
