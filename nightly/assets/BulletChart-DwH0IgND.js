import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-1ARNaUmP.js";import{r as n}from"./react-BZibOG70.js";import{_ as r,o as i,p as a,s as o,t as s}from"./components-DymCpMBB.js";import{_ as c,d as l,r as u}from"./blocks-Crdq0CXF.js";import{Default as d,LoadingPlaceholder as f,WithCustomLegendConfig as p,WithCustomSize as m,WithCustomTooltipConfig as h,WithHighlightedMeasures as g,n as _,t as v}from"./BulletChart.stories-DIX11r_M.js";import{i as y,n as b,r as x,t as S}from"./LegendConfig-yX3TSZdD.js";function C(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(l,{of:v}),`
`,(0,T.jsx)(o,{of:v,isChart:!0}),`
`,(0,T.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,T.jsx)(u,{of:d}),`
`,(0,T.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,T.jsx)(a,{of:d}),`
`,(0,T.jsx)(`br`,{}),`
`,(0,T.jsx)(t.h2,{id:`usage-notes`,children:`Usage Notes`}),`
`,(0,T.jsxs)(t.p,{children:[`In order to display the "Bullet" lines in the chart, you have to configure which measure should be rendered as bullet line.
You can do this via the `,(0,T.jsx)(t.code,{children:`measures`}),` array:`]}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-jsx`,children:`<BulletChart
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
`,(0,T.jsx)(`br`,{}),`
`,(0,T.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,T.jsx)(t.h3,{id:`with-custom-size`,children:`With Custom Size`}),`
`,(0,T.jsx)(u,{of:m}),`
`,(0,T.jsx)(t.h3,{id:`with-highlighted-measures`,children:`With Highlighted Measures`}),`
`,(0,T.jsx)(u,{of:g}),`
`,(0,T.jsx)(t.h3,{id:`loading-placeholder`,children:`Loading Placeholder`}),`
`,(0,T.jsx)(u,{of:f}),`
`,(0,T.jsx)(x,{of:h}),`
`,(0,T.jsx)(S,{of:p}),`
`,(0,T.jsx)(`br`,{}),`
`,(0,T.jsx)(`br`,{}),`
`,(0,T.jsx)(i,{})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),r(),s(),c(),y(),b(),_()}))();export{w as default};