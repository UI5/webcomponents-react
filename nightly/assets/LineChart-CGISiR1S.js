import{j as e}from"./iframe-2x_0PLRY.js";import{useMDXComponents as a}from"./index-C4Rs_8Uq.js";import{M as d,C as n}from"./blocks-DrJbgW55.js";import"./Tag-CYhgI4gb.js";import"./index-C-fDGoUi.js";import{C as m}from"./ControlsWithNote-CB1LCTn_.js";import{D as c}from"./DocsHeader-BY_r8Kwk.js";import{F as h}from"./Footer-C23Ewd88.js";import"./CommandsAndQueries-CvWMTcrY.js";import"./PageNotFound-GiConHCM.js";import{M as p,a as l}from"./LegendConfig-C0ij-zQh.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-C9OgWz-V.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CQy15gwz.js";import"./sys-enter-2-fcqn0uC8.js";import"./alert-DZyPZUjF.js";import"./index-1eyneICk.js";import"./index-Bs9Uk8tv.js";import"./Link-Dg5-mm9g.js";import"./copy-w6aCSiGB.js";import"./copy-DSjSLU2X.js";import"./GitHub-Mark-Dkq8lTsj.js";import"./TableOfContent-CdwxKZEk.js";import"./index-Da9gu6ir.js";import"./index-DdARDxKZ.js";import"./index-CZ7o6xvr.js";import"./index-lA2D-rzF.js";import"./index-B75d9fwz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUHmvjuE.js";import"./addCustomCSSWithScoping-CuKwKJpy.js";import"./Illustrations-GJByOHnh.js";import"./i18n-defaults-CFWtSmu6.js";import"./DemoProps-0_bDTihP.js";import"./index-J4PdDbhz.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-DV2XiHpR.js";import"./ChartContainer-CWVVlaVw.js";import"./index-CE5xEOkh.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DGmTcMLk.js";import"./staticProps-CYEwfA0i.js";import"./ChartDataLabel-CXAlQg34.js";import"./useLongestYAxisLabel-BjcTvCJJ.js";import"./react-content-loader.es-L5JV6fNW.js";import"./Line-vvgYS44K.js";import"./useIsRTL-ZD4jjhta.js";function s(o){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(c,{of:i,isChart:!0}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:t}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(r.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(r.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(r.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(r.h3,{id:"with-formatter",children:"With Formatter"}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(r.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(r.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,e.jsxs(r.p,{children:["You can set a reference line to any value by using the ",e.jsx(r.code,{children:"referenceLine"})," ",e.jsx(r.code,{children:"chartConfig"})," property. ",e.jsx(r.code,{children:"referenceLine"})," accepts all properties described ",e.jsx(r.a,{href:"https://recharts.org/en-US/api/ReferenceLine",rel:"nofollow",children:"here"}),", but it's recommended to only use ",e.jsx(r.code,{children:"label"}),",",e.jsx(r.code,{children:"value"})," and ",e.jsx(r.code,{children:"color"})," to preserve the intended design."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`<LineChart
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
`,e.jsx(n,{of:g}),`
`,e.jsx(r.h3,{id:"with-linear-gradient",children:"With Linear Gradient"}),`
`,e.jsx(n,{of:L}),`
`,e.jsx(r.h4,{id:"code",children:"Code"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
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
`,e.jsx(p,{of:W}),`
`,e.jsx(l,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(h,{})]})}function fe(o={}){const{wrapper:r}={...a(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(s,{...o})}):s(o)}export{fe as default};
