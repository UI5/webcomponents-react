import{j as e}from"./iframe-BbmPNBZw.js";import{useMDXComponents as a}from"./index-D87-8-cY.js";import{M as d,C as r}from"./blocks-B7C-sP0U.js";import"./Tag-DFYl0ftZ.js";import"./index-fQ6fbGsc.js";import{C as c}from"./ControlsWithNote-D8-T1xFb.js";import{D as h}from"./DocsHeader-CcOnB5U6.js";import{F as m}from"./CommandsAndQueries-C-B3vcHW.js";import{M as l,a as p}from"./LegendConfig-DGPbRhIS.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-C39M861z.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BpKTV1Df.js";import"./sys-enter-2-Cjjs2hNu.js";import"./alert-DEEsEFWu.js";import"./index-CoFaLD2a.js";import"./index-DPh3hFjM.js";import"./Link-CATCrkJf.js";import"./copy-BfGXYHSu.js";import"./copy-BgTszgJK.js";import"./GitHub-Mark-C0DNn0i9.js";import"./TableOfContent-Cit66x7d.js";import"./index-Dqb4-3Ox.js";import"./index-upku0ICQ.js";import"./index-BaS8undN.js";import"./index-DuOlzjbj.js";import"./index-Cj4eX-xQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRGip9L6.js";import"./addCustomCSSWithScoping-DXbMFExg.js";import"./DemoProps-BOcnAcvk.js";import"./index-DIZtrkc5.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-CFBBVfq3.js";import"./ChartContainer-DJDy-G_s.js";import"./index-BhkJT34d.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-7T3WtCsk.js";import"./staticProps-DMXDoZPL.js";import"./ChartDataLabel-BH-KU_HB.js";import"./useLongestYAxisLabel-BJ6Ao3cl.js";import"./react-content-loader.es-bW8WQ_2g.js";import"./Line-BCmQAMPF.js";import"./useIsRTL-CWRMKF8W.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
