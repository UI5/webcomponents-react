import{j as e}from"./iframe-datodc_T.js";import{useMDXComponents as m}from"./index-c_OJYfdv.js";import{M as a,C as r}from"./blocks-C83taKT5.js";import"./Tag-aYNaIA2f.js";import"./index-BxYLcFT1.js";import{C as p}from"./ControlsWithNote-robc0igz.js";import{D as h}from"./DocsHeader-CoIEvMOx.js";import{F as l}from"./CommandsAndQueries-9K4be_0B.js";import{M as d,a as c}from"./LegendConfig-BDBKXoAM.js";import{C as i,D as n,W as x,a as u,L as j,b as f,c as g}from"./BulletChart.stories-Dn3w05lG.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BVFOZm1x.js";import"./sys-enter-2-D-jHJs9Q.js";import"./alert-Bayru5wq.js";import"./index-CjE0y9ul.js";import"./index-DHA5QYCq.js";import"./Link-CguLCm0R.js";import"./copy-CcixpzPp.js";import"./copy-fv_X0Lju.js";import"./GitHub-Mark-DdJzrJIo.js";import"./TableOfContent-C9390aIY.js";import"./index-CaqpJvlq.js";import"./index-D2t_qzWG.js";import"./index-Dsm5uoLy.js";import"./index-Be6r5cNn.js";import"./index-D6USDY88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpNALNgF.js";import"./addCustomCSSWithScoping-DKvV4UVz.js";import"./DemoProps-B_LLuewx.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-F1QZPbJ1.js";import"./ChartContainer-D0qZ5oI2.js";import"./index-C_9-hdCb.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DjsBmqye.js";import"./staticProps-DKZWv88w.js";import"./ChartDataLabel-BS6N1dyt.js";import"./useLongestYAxisLabel-rHNiLVh1.js";import"./useOnClickInternal-SrUz2p1-.js";import"./react-content-loader.es-xAnqoBlP.js";import"./ComposedChart-b06lRBO7.js";import"./Line-BlryrwcP.js";import"./Scatter-CMpAH0Vo.js";import"./useIsRTL-Csf7JH7H.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i}),`
`,e.jsx(h,{of:i,isChart:!0}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:n}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:n}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"usage-notes",children:"Usage Notes"}),`
`,e.jsxs(o.p,{children:[`In order to display the "Bullet" lines in the chart, you have to configure which measure should be rendered as bullet line.
You can do this via the `,e.jsx(o.code,{children:"measures"})," array:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<BulletChart
  data={
    [
      /* data */
    ]
  }
  dimensions={
    [
      /* dimensions */
    ]
  }
  measures={[
    {
      accessor: 'actuals',
      label: 'Actual Revenue',
      type: 'primary' // this will be the primary bar
    },
    {
      accessor: 'target',
      label: 'Planned Target Revenue',
      type: 'comparison' // this will be the bullet line
    }
  ]}
/>
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(o.h3,{id:"with-custom-size",children:"With Custom Size"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(o.h3,{id:"with-highlighted-measures",children:"With Highlighted Measures"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(o.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(d,{of:f}),`
`,e.jsx(c,{of:g}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(l,{})]})}function he(t={}){const{wrapper:o}={...m(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{he as default};
