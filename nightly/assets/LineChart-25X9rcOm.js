import{j as e}from"./iframe-D9xLC1tL.js";import{useMDXComponents as a}from"./index-DbpRZxa8.js";import{M as d,C as n}from"./blocks-BGODLmXA.js";import"./Tag-CzLAQHXA.js";import"./index-OpsV8Rzk.js";import{C as m}from"./ControlsWithNote-gH6JNsT6.js";import{D as c}from"./DocsHeader-tcOXqFyU.js";import{F as h}from"./Footer-C6v4bY5-.js";import"./CommandsAndQueries-Bb-ZfGVO.js";import"./PageNotFound-DoCPcVkS.js";import{M as p,a as l}from"./LegendConfig-2QaPYjTK.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-CgUFhl1R.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BC9P8f_O.js";import"./sys-enter-2-B7xp7QZ9.js";import"./alert-BEKLDx3c.js";import"./index-BDQMqb7U.js";import"./index-DNd0s4Kc.js";import"./Link-nPbeq8Ca.js";import"./copy-Dh_G7WDc.js";import"./copy-D8VIdABk.js";import"./GitHub-Mark-BUIl0sGl.js";import"./TableOfContent-CF23Zmfp.js";import"./index-Dursa8QF.js";import"./index-DAKihXgB.js";import"./index-D1uvdQ6M.js";import"./index-_EZjG3sX.js";import"./index-1koIOrPL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_OCG7dF.js";import"./addCustomCSSWithScoping-BP0mkxfq.js";import"./Illustrations-VmVh_pyg.js";import"./i18n-defaults-CFWtSmu6.js";import"./DemoProps-BCmt0-Es.js";import"./index-BkomFNK0.js";import"./ThemingParameters-BvhwmbYD.js";import"./YAxisTicks-BCojZcDo.js";import"./ChartContainer-Cb4wccBF.js";import"./index-C5uwD5iK.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C-gTfiMc.js";import"./staticProps-C3ueAk7W.js";import"./ChartDataLabel-Dd8JwZ03.js";import"./useLongestYAxisLabel-BPVBA_LX.js";import"./react-content-loader.es-C39dDwwv.js";import"./Line-DuhzX4Xq.js";import"./useIsRTL-Cjl0qmS-.js";function s(o){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
