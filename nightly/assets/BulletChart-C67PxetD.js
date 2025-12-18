import{j as e}from"./iframe-C-IdMOTF.js";import{useMDXComponents as m}from"./index-8Reouw5a.js";import{M as a,C as r}from"./blocks-D6xfaR3T.js";import"./Tag-BJpDTkrR.js";import"./index-MVeIUVva.js";import{C as p}from"./ControlsWithNote-DUmHhhde.js";import{D as h}from"./DocsHeader-B5-aSgVt.js";import{F as l}from"./CommandsAndQueries-BrMhh7sy.js";import{M as d,a as c}from"./LegendConfig-B2Ouef4g.js";import{C as i,D as n,W as x,a as u,L as j,b as f,c as g}from"./BulletChart.stories-BDfuT0gL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BEN_uXq9.js";import"./sys-enter-2-Bq6u4lfD.js";import"./alert-6-dTv6Ft.js";import"./index-D6nYdynl.js";import"./index-CZVRMt16.js";import"./Link-pmU5zsTc.js";import"./copy-DqMtsEgu.js";import"./copy-F55MzcCW.js";import"./GitHub-Mark-CM1egXrj.js";import"./TableOfContent-Dx5PRGec.js";import"./index-hTsIN61t.js";import"./index-D23QN9vi.js";import"./index-gC0QYgWs.js";import"./index-DtAqbdZo.js";import"./index-C0vIcEg8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKAG68DO.js";import"./addCustomCSSWithScoping-D9pslfxW.js";import"./DemoProps-BeYw6cbu.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-BT0GG6yQ.js";import"./ChartContainer-HRO_0uoA.js";import"./index-DqEr8g6K.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-6Klrf1B_.js";import"./staticProps-Bti4BQPk.js";import"./ChartDataLabel-A46FpxID.js";import"./useLongestYAxisLabel-DmESPXkE.js";import"./useOnClickInternal-X9xxm496.js";import"./react-content-loader.es-D46DL5ZJ.js";import"./ComposedChart-BbZLJTMD.js";import"./Line-CBgohXu4.js";import"./Scatter-7Qr5033e.js";import"./useIsRTL-CFrls0z0.js";function s(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i}),`
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
