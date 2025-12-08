import{j as e}from"./iframe-pGkg1yhx.js";import{useMDXComponents as a}from"./index-zZGraQiW.js";import{M as d,C as r}from"./blocks-h-E2EZ8G.js";import"./Tag-au1p2NGj.js";import"./index-Dhkbob0y.js";import{C as c}from"./ControlsWithNote-B93C_YVi.js";import{D as h}from"./DocsHeader-D3Z603yd.js";import{F as m}from"./CommandsAndQueries-0d0cMNfY.js";import{M as l,a as p}from"./LegendConfig-DqR6UcZg.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-Msg8Fv93.js";import"./preload-helper-PPVm8Dsz.js";import"./information-cXVVKah4.js";import"./sys-enter-2-hj8-ImHG.js";import"./alert-B1o_Hsr7.js";import"./index-Bw9Ab4ZS.js";import"./index-DdsduAWA.js";import"./Link-D-i4oyZF.js";import"./copy-CYAZ_Ukm.js";import"./copy-DnSu0Tnk.js";import"./GitHub-Mark-I5I5hI39.js";import"./TableOfContent-DvuGEVlp.js";import"./index-2g5O9IIc.js";import"./index-CfRPSEYz.js";import"./index-BwnLifZ4.js";import"./index-Wi1PYVS4.js";import"./index-D6ltds-N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Do_htNQl.js";import"./addCustomCSSWithScoping-BX6PI_rc.js";import"./DemoProps-BL69xuI3.js";import"./index-Cq3TDk0z.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-WtFqTYes.js";import"./ChartContainer-DnVNjs9F.js";import"./index-Byr0e0RY.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CNTEkco9.js";import"./staticProps-IcyKgr4n.js";import"./ChartDataLabel-Cw0O4_1x.js";import"./useLongestYAxisLabel-CYaTfkfM.js";import"./react-content-loader.es-_kiUch2K.js";import"./Line-D-xwPIti.js";import"./useIsRTL-CMMVd0W8.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
