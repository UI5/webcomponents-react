import{j as e}from"./iframe-BIP38Qmu.js";import{useMDXComponents as a}from"./index-CCzfQ4AK.js";import{M as d,C as n}from"./blocks-69-jnurL.js";import"./Tag-D0zcjL-3.js";import"./index-C_7tcSj3.js";import{C as m}from"./ControlsWithNote-DlY6D4bI.js";import{D as c}from"./DocsHeader-D4aiXO6T.js";import{F as h}from"./Footer-DAbghHc6.js";import"./CommandsAndQueries-BAg-w2Ve.js";import"./PageNotFound-z2fC1f6d.js";import{M as p,a as l}from"./LegendConfig-DrojK0yS.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-3U0atHzL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cf_JR6Aw.js";import"./sys-enter-2-D5AeNUHf.js";import"./alert-CMm7pEpj.js";import"./index-BEp_fWNn.js";import"./index-BlYNx0T3.js";import"./Link-B13MM4G6.js";import"./copy-q2hIMu45.js";import"./copy-nvOf1vVL.js";import"./GitHub-Mark-vHfAubj_.js";import"./TableOfContent-CAcSs8TN.js";import"./index-pu7JlX44.js";import"./index-C0fOqYC4.js";import"./index-Du9D3QZW.js";import"./index-DXmoRv88.js";import"./index-ZEQXSIQn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrBZ3oM5.js";import"./addCustomCSSWithScoping-3IpFFLGa.js";import"./Illustrations-BEksg9v0.js";import"./i18n-defaults-CFWtSmu6.js";import"./DemoProps-DEDmgkyL.js";import"./index-Bnk38A78.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-B19Q7-wU.js";import"./ChartContainer-C6ecvL91.js";import"./index-Bt4sAh6G.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CZEhkkxa.js";import"./staticProps-BxSJbs67.js";import"./ChartDataLabel-DVfqBtaM.js";import"./useLongestYAxisLabel-D0GRVCI7.js";import"./react-content-loader.es-LkqBRnYU.js";import"./Line-CHXdez7H.js";import"./useIsRTL-yBtQpEip.js";function s(o){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
