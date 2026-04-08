import{n as e}from"./chunk-zsgVPwQN.js";import{Jm as t}from"./iframe-CYHA5bK3.js";import{r as n}from"./react-Dkna-1WJ.js";import{_ as r,o as i,p as a,s as o,t as s}from"./components-cGRmDsHx.js";import{_ as c,d as l,r as u}from"./blocks-CwKyPBt0.js";import{Default as d,LoadingPlaceholder as f,WithCustomColor as p,WithCustomLegendConfig as m,WithCustomTooltipConfig as h,WithCustomTooltipTotal as g,WithFormatter as _,WithHighlightedMeasure as v,WithNormalizedStacks as y,WithReferenceLine as b,WithSecondaryDimension as x,WithStackAggregateTotals as S,WithStacks as C,n as w,t as T}from"./ColumnChart.stories-Cz8m0GpU.js";import{i as E,n as D,r as O,t as k}from"./LegendConfig-CNFl-8OX.js";import{n as A,t as j}from"./NormalizedStackedChart-BIDGT0Y0.js";import{i as M,n as N,r as P,t as F}from"./CustomTooltipTotal-B9RWQ4tA.js";function I(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(l,{of:T}),`
`,(0,R.jsx)(o,{of:T,isChart:!0}),`
`,(0,R.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,R.jsx)(u,{of:d}),`
`,(0,R.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,R.jsx)(a,{of:d}),`
`,(0,R.jsx)(`br`,{}),`
`,(0,R.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,R.jsx)(t.h3,{id:`with-custom-color`,children:`With custom color`}),`
`,(0,R.jsx)(u,{of:p}),`
`,(0,R.jsx)(t.h3,{id:`with-secondary-dimension`,children:`With Secondary Dimension`}),`
`,(0,R.jsx)(u,{of:x}),`
`,(0,R.jsx)(t.h3,{id:`with-stacks`,children:`With Stacks`}),`
`,(0,R.jsx)(u,{of:C}),`
`,(0,R.jsx)(j,{of:y}),`
`,(0,R.jsx)(t.h3,{id:`with-formatter`,children:`With Formatter`}),`
`,(0,R.jsx)(u,{of:_}),`
`,(0,R.jsx)(t.h3,{id:`loading-placeholder`,children:`Loading Placeholder`}),`
`,(0,R.jsx)(u,{of:f}),`
`,(0,R.jsx)(t.h3,{id:`with-reference-line`,children:`With Reference Line`}),`
`,(0,R.jsxs)(t.p,{children:[`You can set a reference line to any value by using the `,(0,R.jsx)(t.code,{children:`referenceLine`}),` `,(0,R.jsx)(t.code,{children:`chartConfig`}),` property. `,(0,R.jsx)(t.code,{children:`referenceLine`}),` accepts all properties described `,(0,R.jsx)(t.a,{href:`https://recharts.org/en-US/api/ReferenceLine`,rel:`nofollow`,children:`here`}),`, but it's recommended to only use `,(0,R.jsx)(t.code,{children:`label`}),`,`,(0,R.jsx)(t.code,{children:`value`}),` and `,(0,R.jsx)(t.code,{children:`color`}),` to preserve the intended design.`]}),`
`,(0,R.jsx)(t.pre,{children:(0,R.jsx)(t.code,{className:`language-jsx`,children:`<ColumnChart
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
`,(0,R.jsx)(u,{of:b}),`
`,(0,R.jsx)(t.h3,{id:`with-highlighted-measures`,children:`With Highlighted Measures`}),`
`,(0,R.jsx)(u,{of:v}),`
`,(0,R.jsx)(P,{of:S,description:(0,R.jsxs)(R.Fragment,{children:[`You can display a total label at the top of each stacked column group by setting `,(0,R.jsx)(t.code,{children:`chartConfig.showStackAggregateTotals`}),` to `,(0,R.jsx)(t.code,{children:`true`}),`. The tooltip includes the total automatically when only a single column per dimension is present.`]})}),`
`,(0,R.jsx)(F,{of:g,description:(0,R.jsxs)(R.Fragment,{children:[`When multiple columns per dimension are present (e.g. stacked + standalone), the built-in tooltip total is not available. You can provide a custom tooltip via the `,(0,R.jsx)(t.code,{children:`tooltipConfig.content`}),` prop to display a total for specific measures.`]})}),`
`,(0,R.jsxs)(t.p,{children:[(0,R.jsx)(O,{of:h}),`;`]}),`
`,(0,R.jsx)(k,{of:m}),`
`,(0,R.jsx)(`br`,{}),`
`,(0,R.jsx)(`br`,{}),`
`,(0,R.jsx)(i,{})]})}function L(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,R.jsx)(t,{...e,children:(0,R.jsx)(I,{...e})}):I(e)}var R;e((()=>{R=t(),r(),s(),c(),E(),D(),A(),M(),N(),w()}))();export{L as default};