import{j as e}from"./iframe-BKYtcRXv.js";import{useMDXComponents as a}from"./index-D1nSvVZo.js";import{M as d,C as n}from"./blocks-C1gp0dCe.js";import"./Tag-DHmTMk4C.js";import"./index-BHofxaIm.js";import{C as m}from"./ControlsWithNote-BcvFcJ1w.js";import{D as c}from"./DocsHeader-CGFr-N59.js";import{F as h}from"./Footer-CV4xu3yB.js";import"./CommandsAndQueries-CUyuiRf6.js";import"./PageNotFound-vT0hMOra.js";import{M as p,a as l}from"./LegendConfig-D6KF2xKP.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-9I2klvsb.js";import"./preload-helper-PPVm8Dsz.js";import"./information-xnBwopqv.js";import"./sys-enter-2-CNvKNMds.js";import"./alert-CToXuYXU.js";import"./index-qZc2Xmmm.js";import"./index-ewdSxNga.js";import"./Link-DoqDiayo.js";import"./copy-DrIA0QZ4.js";import"./copy-Dd5cryj7.js";import"./GitHub-Mark-CdbwaB6F.js";import"./TableOfContent-DOsZXCWq.js";import"./index-BVN1tX5Y.js";import"./index-CruiZV6T.js";import"./index-C0tgyAAj.js";import"./index-BKTLLMG4.js";import"./index-Gx-AmRBv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cc6AlvW2.js";import"./addCustomCSSWithScoping-CxGG2dIU.js";import"./Illustrations-C92Wb11w.js";import"./i18n-defaults-CFWtSmu6.js";import"./DemoProps-B0v1jIhG.js";import"./index-BqkbF1wJ.js";import"./ThemingParameters-BvhwmbYD.js";import"./YAxisTicks-Cs3QdKAP.js";import"./ChartContainer-BqE4pJcu.js";import"./index-QLH2EeXs.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BQ6tyQMw.js";import"./staticProps-BGmKX5Vn.js";import"./ChartDataLabel-CyDMDlfk.js";import"./useLongestYAxisLabel-BQNKrUGf.js";import"./react-content-loader.es-tDphjWxn.js";import"./Line-BUTEXgwk.js";import"./useIsRTL-DvpK_1n5.js";function s(o){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
