import{n as e}from"./chunk-zsgVPwQN.js";import{Jm as t}from"./iframe-D7mhIjGl.js";import{r as n}from"./react-B1Gr-yDw.js";import{_ as r,o as i,p as a,s as o,t as s}from"./components-CHLK79db.js";import{_ as c,d as l,r as u}from"./blocks-B9Rv6Ujp.js";import{Default as d,LoadingPlaceholder as f,WithCustomColor as p,WithCustomLegendConfig as m,WithCustomTooltipConfig as h,WithDataLabels as g,WithFormatter as _,WithLinearGradient as v,WithReferenceLine as y,WithSecondaryDimension as b,n as x,t as S}from"./LineChart.stories-CPMSvivi.js";import{i as C,n as w,r as T,t as E}from"./LegendConfig-BwKduy-2.js";function D(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,...n(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(l,{of:S}),`
`,(0,k.jsx)(o,{of:S,isChart:!0}),`
`,(0,k.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,k.jsx)(u,{of:d}),`
`,(0,k.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,k.jsx)(a,{of:d}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,k.jsx)(t.h3,{id:`with-custom-color`,children:`With Custom Color`}),`
`,(0,k.jsx)(u,{of:p}),`
`,(0,k.jsx)(t.h3,{id:`with-secondary-dimension`,children:`With Secondary Dimension`}),`
`,(0,k.jsx)(u,{of:b}),`
`,(0,k.jsx)(t.h3,{id:`with-data-labels`,children:`With Data Labels`}),`
`,(0,k.jsx)(u,{of:g}),`
`,(0,k.jsx)(t.h3,{id:`with-formatter`,children:`With Formatter`}),`
`,(0,k.jsx)(u,{of:_}),`
`,(0,k.jsx)(t.h3,{id:`loading-placeholder`,children:`Loading Placeholder`}),`
`,(0,k.jsx)(u,{of:f}),`
`,(0,k.jsx)(t.h3,{id:`with-reference-line`,children:`With Reference Line`}),`
`,(0,k.jsxs)(t.p,{children:[`You can set a reference line to any value by using the `,(0,k.jsx)(t.code,{children:`referenceLine`}),` `,(0,k.jsx)(t.code,{children:`chartConfig`}),` property. `,(0,k.jsx)(t.code,{children:`referenceLine`}),` accepts all properties described `,(0,k.jsx)(t.a,{href:`https://recharts.org/en-US/api/ReferenceLine`,rel:`nofollow`,children:`here`}),`, but it's recommended to only use `,(0,k.jsx)(t.code,{children:`label`}),`,`,(0,k.jsx)(t.code,{children:`value`}),` and `,(0,k.jsx)(t.code,{children:`color`}),` to preserve the intended design.`]}),`
`,(0,k.jsx)(t.pre,{children:(0,k.jsx)(t.code,{className:`language-jsx`,children:`<LineChart
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
`,(0,k.jsx)(u,{of:y}),`
`,(0,k.jsx)(t.h3,{id:`with-linear-gradient`,children:`With Linear Gradient`}),`
`,(0,k.jsx)(u,{of:v}),`
`,(0,k.jsx)(t.h4,{id:`code`,children:`Code`}),`
`,(0,k.jsx)(t.pre,{children:(0,k.jsx)(t.code,{className:`language-jsx`,children:`export const LineChartWithLinearGradient = () => {
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
`,(0,k.jsx)(T,{of:h}),`
`,(0,k.jsx)(E,{of:m}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(i,{})]})}function O(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;e((()=>{k=t(),r(),c(),s(),C(),x(),w()}))();export{O as default};