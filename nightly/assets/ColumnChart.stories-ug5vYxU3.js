import{c as N,s as fe,a as ye,e as Ce,t as be,l as ve}from"./DemoProps-Cu5eLVBa.js";import{j as o,r as z,aF as xe,q as ke}from"./iframe-By2gmFxc.js";import{T as k}from"./ThemingParameters-pyhX3s39.js";import{u as Ae,t as we,a as Se,b as _e,c as Le,e as Y,C as De}from"./staticProps-gefo3yID.js";import{u as je,B as Ie}from"./useCancelAnimationFallback-DczXj8Td.js";import{u as Pe,a as Te,C as Ve,c as ze,X as We,b as W,Y as O}from"./YAxisTicks-GRBYYxX1.js";import{u as Oe,C as qe}from"./ChartDataLabel-BzYEBwXb.js";import{u as Ne}from"./useLongestYAxisLabel-QDWNQKrU.js";import{u as Ye}from"./useOnClickInternal-oxmvgH_X.js";import{u as Re,a as Fe,r as Be,b as q}from"./useTooltipFormatter-CQImiB8O.js";import{k as Ee,B as Ke,e as Me,m as $e,l as He,R as Ue,T as Xe,n as Ge}from"./ChartContainer-DvWWB_TN.js";import{C as Je}from"./react-content-loader.es-BY8WFCVf.js";import{u as Qe}from"./useIsRTL-T3phyLSC.js";const D=a=>o.jsxs(Je,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:k.sapContent_ImagePlaceholderBackground,foregroundColor:k.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:k.sapContent_DisabledOpacity,...a,children:[o.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),o.jsx("rect",{x:"20",y:"50",width:"15",height:"85"}),o.jsx("rect",{x:"40",y:"18",width:"15",height:"117"}),o.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),o.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),o.jsx("rect",{x:"100",y:"10",width:"15",height:"125"}),o.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]});try{D.displayName="ColumnChartPlaceholder",D.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}const Ze={formatter:Y},et={formatter:Y,opacity:1},tt=a=>({payload:w})=>De.getValueByDataKey(w,a),A=z.forwardRef((a,w)=>{const{loading:R,loadingDelay:F,dataset:n,noLegend:B,noAnimation:j,tooltipConfig:I,onDataPointClick:v,onLegendClick:E,onClick:P,style:K,className:M,slot:$,ChartPlaceholder:H,syncId:U,children:X,...G}=a,t={yAxisVisible:!1,xAxisVisible:!0,gridStroke:k.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...a.chartConfig},{referenceLine:r}=t,{dimensions:T,measures:i}=Re(a.dimensions,a.measures,Ze,et),J=Fe(i),[Q,Z]=Ne(n,i,t.legendPosition),S=T[0],{primaryMeasure:ee,secondaryMeasure:te}=Be(i,t?.secondYAxis?.dataKey),ae=Oe(S?.formatter),[oe,V]=xe(w),se=i.map(({accessor:e})=>e),_=t.secondYAxis?se.findIndex(e=>e===t.secondYAxis?.dataKey):0,re=Ae(E),ne=z.useCallback((e,s,x)=>{e&&v&&v(ke(x,{dataKey:Object.keys(e).filter(l=>e.value.length?e[l]===e.value[1]-e.value[0]:e[l]===e.value&&l!=="value")[0],value:e.value.length?e.value[1]-e.value[0]:e.value,dataIndex:s,payload:e.payload}))},[v]),ie=Ye(P),le=n?.length>30,ce=S?.accessor,de=Pe(t.margin,t.zoomingTool),ue=Te(V,a.dimensions.length),L=Qe(V),{chartConfig:st,dimensions:rt,measures:nt,...me}=G,{isMounted:he,handleBarAnimationStart:pe,handleBarAnimationEnd:ge}=je(j);return o.jsx(Ee,{dataset:n,loading:R,loadingDelay:F,Placeholder:H??D,ref:oe,style:K,className:M,slot:$,resizeDebounce:t.resizeDebounce,...me,children:o.jsxs(Ie,{syncId:U,onClick:ie,stackOffset:"sign",margin:de,data:n,barGap:t.barGap,accessibilityLayer:t.accessibilityLayer,className:typeof v=="function"||typeof P=="function"?"has-click-handler":void 0,children:[o.jsx(Ve,{vertical:t.gridVertical,horizontal:t.gridHorizontal,stroke:t.gridStroke}),t.xAxisVisible&&T.map((e,s)=>o.jsx(ze,{dataKey:e.accessor,xAxisId:s,interval:e?.interval??(le?"preserveStart":0),tick:o.jsx(We,{formatter:e?.formatter}),tickLine:s<1,axisLine:s<1,height:ue[s],allowDuplicatedCategory:s===0,reversed:L,...t.xAxisConfig},e.reactKey)),o.jsx(W,{orientation:L===!0?"right":"left",axisLine:t.yAxisVisible,tickLine:we,yAxisId:"left",interval:0,tick:o.jsx(O,{formatter:ee?.formatter}),width:Q,...t.yAxisConfig}),t.secondYAxis?.dataKey&&o.jsx(W,{dataKey:t.secondYAxis.dataKey,axisLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${_%12+1})`},tick:o.jsx(O,{formatter:te?.formatter,secondYAxisConfig:{color:t.secondYAxis.color??`var(--sapChart_OrderedColor_${_%12+1})`}}),tickLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${_%12+1})`},label:{value:t.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:L===!0?"left":"right",yAxisId:"right",interval:0,...t.secondYAxisConfig}),he&&i.map((e,s)=>o.jsxs(Ke,{yAxisId:t.secondYAxis?.dataKey===e.accessor?"right":"left",stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${s%12+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${s%12+1})`,barSize:e.width,onClick:ne,isAnimationActive:!j,onAnimationStart:pe,onAnimationEnd:ge,children:[o.jsx(Me,{data:n,valueAccessor:tt(e.accessor),content:o.jsx(qe,{config:e,chartType:"column",position:"insideTop"})}),n.map((x,l)=>o.jsx($e,{fill:q(e,x,s),stroke:q(e,x,s)},l))]},e.reactKey)),!B&&o.jsx(He,{verticalAlign:t.legendPosition,align:t.legendHorizontalAlign,onClick:re,wrapperStyle:Z,...t.legendConfig}),r&&o.jsx(Ue,{...r,stroke:r?.color??r?.stroke,y:r?.value??r?.y,yAxisId:r?.yAxisId??"left",label:r?.label}),I?.active!==!1&&o.jsx(Xe,{cursor:_e,formatter:J,contentStyle:Se,labelFormatter:ae,...I}),!!t.zoomingTool&&o.jsx(Ge,{dataKey:ce,tickFormatter:S?.formatter,...Le,...typeof t.zoomingTool=="object"?t.zoomingTool:{}}),X]})})});A.displayName="ColumnChart";try{A.displayName="ColumnChart",A.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.\n\n__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.",displayName:"ColumnChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one column in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: column width, defaults to `auto`\n- `opacity`: column opacity, defaults to `1`\n- `stackId`: columns with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'ICartesianChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const at={title:"ColumnChart",component:A,tags:["package:@ui5/webcomponents-react-charts"],argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:N,dimensions:[{accessor:"name",formatter:a=>`${a} 2019`}],measures:[{accessor:"users",label:"Users",formatter:a=>a.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:a=>`${a} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},c={},d={args:{measures:[{accessor:"users",color:"red"}],dataset:fe}},u={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:ye}},m={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],dataset:N}},h={args:Ce},p={args:{dimensions:[{accessor:"name",formatter:a=>a.slice(0,3)}],measures:[{accessor:"users",formatter:a=>`${a/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},g={args:{dataset:[]}},f={args:{chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},y={args:{measures:[{accessor:"users",label:"Users",formatter:a=>a.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:a=>`${a} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol.",highlightColor:a=>{if(a>750)return"red"}}]}},C={args:be},b={args:ve};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name'
    }, {
      accessor: 'dimension'
    }],
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: secondaryDimensionDataSet
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      stackId: 'A'
    }, {
      accessor: 'sessions',
      stackId: 'A'
    }, {
      accessor: 'volume'
    }],
    dataset: complexDataSet
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name',
      formatter: element => element.slice(0, 3)
    }],
    measures: [{
      accessor: 'users',
      formatter: element => \`\${element / 10}\`,
      label: 'number of users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      label: 'Users',
      formatter: val => val.toLocaleString()
    }, {
      accessor: 'sessions',
      label: 'Active Sessions',
      formatter: val => \`\${val} sessions\`,
      hideDataLabel: true
    }, {
      accessor: 'volume',
      label: 'Vol.',
      highlightColor: value => {
        if (value > 750) {
          return 'red';
        }
      }
    }]
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...b.parameters?.docs?.source}}};const ot=["Default","WithCustomColor","WithSecondaryDimension","WithStacks","WithNormalizedStacks","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure","WithCustomTooltipConfig","WithCustomLegendConfig"],vt=Object.freeze(Object.defineProperty({__proto__:null,Default:c,LoadingPlaceholder:g,WithCustomColor:d,WithCustomLegendConfig:b,WithCustomTooltipConfig:C,WithFormatter:p,WithHighlightedMeasure:y,WithNormalizedStacks:h,WithReferenceLine:f,WithSecondaryDimension:u,WithStacks:m,__namedExportsOrder:ot,default:at},Symbol.toStringTag,{value:"Module"}));export{vt as C,c as D,g as L,d as W,u as a,m as b,h as c,p as d,f as e,y as f,C as g,b as h};
