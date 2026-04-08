import{n as e}from"./chunk-zsgVPwQN.js";import{Jm as t}from"./iframe-8AoQMRkO.js";import{r as n}from"./react-Dkp7Gkqo.js";import{_ as r,o as i,p as a,s as o,t as s}from"./components-BqfxXYZI.js";import{_ as c,d as l,r as u}from"./blocks-CkwZDgP9.js";import{Default as d,LoadingPlaceholder as f,WithCustomColor as p,WithCustomLegendConfig as m,WithCustomTooltipConfig as h,WithCustomTooltipTotal as g,WithDataLabels as _,WithFormatter as v,WithHighlightedMeasure as y,WithNormalizedStacks as b,WithReferenceLine as x,WithSecondaryDimension as S,WithStackAggregateTotalsAndTooltip as C,n as w,t as T}from"./BarChart.stories-DE2TAgqG.js";import{i as E,n as D,r as O,t as k}from"./LegendConfig-EzrSXk_G.js";import{n as A,t as j}from"./NormalizedStackedChart-CGpw7SRe.js";import{i as M,n as N,r as P,t as F}from"./CustomTooltipTotal-Yaw1RWSp.js";function I(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(l,{of:T}),`
`,(0,R.jsx)(o,{of:T,isChart:!0}),`
`,(0,R.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,R.jsx)(u,{of:d}),`
`,(0,R.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,R.jsx)(a,{of:d}),`
`,(0,R.jsx)(`br`,{}),`
`,(0,R.jsx)(`br`,{}),`
`,(0,R.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,R.jsx)(t.h3,{id:`with-custom-color`,children:`With Custom Color`}),`
`,(0,R.jsx)(u,{of:p}),`
`,(0,R.jsx)(t.h3,{id:`with-secondary-dimension`,children:`With Secondary Dimension`}),`
`,(0,R.jsx)(u,{of:S}),`
`,(0,R.jsx)(t.h3,{id:`with-data-labels`,children:`With Data Labels`}),`
`,(0,R.jsx)(u,{of:_}),`
`,(0,R.jsx)(t.h3,{id:`with-formatter`,children:`With Formatter`}),`
`,(0,R.jsx)(u,{of:v}),`
`,(0,R.jsx)(j,{of:b}),`
`,(0,R.jsx)(t.h3,{id:`loading-placeholder`,children:`Loading Placeholder`}),`
`,(0,R.jsx)(u,{of:f}),`
`,(0,R.jsx)(t.h3,{id:`with-reference-line`,children:`With Reference Line`}),`
`,(0,R.jsxs)(t.p,{children:[`You can set a reference line to any value by using the `,(0,R.jsx)(t.code,{children:`referenceLine`}),` `,(0,R.jsx)(t.code,{children:`chartConfig`}),` property. `,(0,R.jsx)(t.code,{children:`referenceLine`}),` accepts all properties described `,(0,R.jsx)(t.a,{href:`https://recharts.org/en-US/api/ReferenceLine`,rel:`nofollow`,children:`here`}),`, but it's recommended to only use `,(0,R.jsx)(t.code,{children:`label`}),`,`,(0,R.jsx)(t.code,{children:`value`}),` and `,(0,R.jsx)(t.code,{children:`color`}),` to preserve the intended design.`]}),`
`,(0,R.jsx)(t.pre,{children:(0,R.jsx)(t.code,{className:`language-jsx`,children:`<BarChart
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
`,(0,R.jsx)(u,{of:x}),`
`,(0,R.jsx)(t.h3,{id:`with-highlighted-measure`,children:`With Highlighted Measure`}),`
`,(0,R.jsx)(u,{of:y}),`
`,(0,R.jsx)(P,{of:C,description:(0,R.jsxs)(R.Fragment,{children:[`You can display a total label at the end of each stacked bar group by setting `,(0,R.jsx)(t.code,{children:`chartConfig.showStackAggregateTotals`}),` to `,(0,R.jsx)(t.code,{children:`true`}),`. The tooltip includes the total automatically when only a single bar per dimension is present.`]})}),`
`,(0,R.jsx)(F,{of:g,description:(0,R.jsxs)(R.Fragment,{children:[`When multiple bars per dimension are present (e.g. stacked + standalone), the built-in tooltip total is not available. You can provide a custom tooltip via the `,(0,R.jsx)(t.code,{children:`tooltipConfig.content`}),` prop to display a total for specific measures.`]})}),`
`,(0,R.jsx)(O,{of:h}),`
`,(0,R.jsx)(k,{of:m}),`
`,(0,R.jsx)(`br`,{}),`
`,(0,R.jsx)(`br`,{}),`
`,(0,R.jsx)(i,{})]})}function L(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,R.jsx)(t,{...e,children:(0,R.jsx)(I,{...e})}):I(e)}var R;e((()=>{R=t(),r(),s(),c(),E(),D(),A(),M(),N(),w()}))();export{L as default};