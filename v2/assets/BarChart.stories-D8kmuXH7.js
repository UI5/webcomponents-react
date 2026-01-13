import{c as fe,s as ye,a as be,e as Ce,t as xe,l as ve}from"./DemoProps-BiVIZ8Lm.js";import{r as W,j as t,aF as ke,q as Ae}from"./iframe-M6Wvc0fq.js";import{T as D}from"./ThemingParameters-pyhX3s39.js";import{d as we,C as N,u as Le,t as Se,a as De,b as _e,c as je,e as Y}from"./staticProps-JVUJdgI5.js";import{u as Ie,B as Te}from"./useCancelAnimationFallback-40RjTQx7.js";import{u as Pe,a as ze,C as Ve,c as F,X as R,b as We,Y as Be}from"./YAxisTicks-B8F9lLLD.js";import{u as Oe,C as qe}from"./ChartDataLabel-Lum1PJBW.js";import{g as Fe,u as Re,a as Me,r as Ne,b as M}from"./useTooltipFormatter-B9oYr9aa.js";import{u as Ye}from"./useOnClickInternal-B3OW2FBy.js";import{k as Ee,B as Ke,e as He,m as $e,l as Xe,R as Ge,T as Ue,n as Je}from"./ChartContainer-CGe6j5RJ.js";import{C as Qe}from"./react-content-loader.es-B8tRkyMQ.js";import{u as Ze}from"./useIsRTL-D7MijIiv.js";const ea=(s,c,u="")=>W.useMemo(()=>{let l=Array(c.length).fill(0),n=0;if(s instanceof Array&&c){const j=i=>c.map(r=>r.formatter(N.getValueByDataKey(i,r.accessor,"")));s.map(j).forEach(i=>{i.forEach((r,A)=>{l[A]=Math.max(Fe(r),l[A])})}),l=l.map(i=>Math.min(we,i)),n=l.reduce((i,r)=>i+r,0)}return u==="middle"?[l,{width:"auto"}]:[l,{marginLeft:n,maxWidth:`calc(100% - ${n+8}px)`}]},[s,c,u]),aa=()=>t.jsxs(Qe,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:D.sapContent_ImagePlaceholderBackground,foregroundColor:D.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:D.sapContent_DisabledOpacity,children:[t.jsx("rect",{x:"20",y:"10",width:"1",height:"135"}),t.jsx("rect",{x:"20",y:"20",width:"85",height:"15"}),t.jsx("rect",{x:"20",y:"40",width:"117",height:"15"}),t.jsx("rect",{x:"20",y:"60",width:"67",height:"15"}),t.jsx("rect",{x:"20",y:"80",width:"75",height:"15"}),t.jsx("rect",{x:"20",y:"100",width:"125",height:"15"}),t.jsx("rect",{x:"20",y:"120",width:"60",height:"15"})]}),ta={formatter:Y},sa={formatter:Y,opacity:1},oa=s=>({payload:c})=>N.getValueByDataKey(c,s),_=W.forwardRef((s,c)=>{const{loading:u,loadingDelay:l,dataset:n,noLegend:j,noAnimation:I,tooltipConfig:i,onDataPointClick:r,onLegendClick:A,onClick:B,style:E,className:K,slot:H,syncId:$,ChartPlaceholder:X,children:G,...U}=s,a={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:D.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...s.chartConfig},d=a.referenceLine,{dimensions:T,measures:w}=Re(s.dimensions,s.measures,ta,sa),J=Me(w),P=T[0],{primaryMeasure:Q,secondaryMeasure:Z}=Ne(w,a?.secondYAxis?.dataKey),ee=w.map(({accessor:e})=>e),z=a.secondYAxis?ee.findIndex(e=>e===a.secondYAxis?.dataKey):0,[ae,O]=ke(c),te=Le(A),se=Oe(P?.formatter),oe=W.useCallback((e,o,L)=>{if(e&&r){const S=e.value.length?e.value[1]-e.value[0]:e.value;r(Ae(L,{dataKey:Object.keys(e).filter(V=>V!=="value").find(V=>e[V]===S),value:S,payload:e.payload,dataIndex:o}))}},[r]),re=Ye(B),ne=n?.length>30,ie=P?.accessor,[ce,le]=ea(n,T,a.legendPosition),de=Pe(a.margin,a.zoomingTool),[ue]=ze(O,1),q=Ze(O),{isMounted:me,handleBarAnimationStart:he,handleBarAnimationEnd:pe}=Ie(I),{chartConfig:ia,dimensions:ca,measures:la,...ge}=U;return t.jsx(Ee,{dataset:n,loading:u,loadingDelay:l,Placeholder:X??aa,ref:ae,style:E,className:K,slot:H,resizeDebounce:a.resizeDebounce,...ge,children:t.jsxs(Te,{syncId:$,onClick:re,stackOffset:"sign",margin:de,layout:"vertical",data:n,barGap:a.barGap,accessibilityLayer:a.accessibilityLayer,className:typeof r=="function"||typeof B=="function"?"has-click-handler":void 0,children:[t.jsx(Ve,{vertical:a.gridVertical,horizontal:a.gridHorizontal,stroke:a.gridStroke}),a.xAxisVisible&&t.jsx(F,{interval:0,type:"number",tick:t.jsx(R,{formatter:Q?.formatter}),axisLine:a.xAxisVisible,tickLine:Se,height:ue,reversed:q,...a.xAxisConfig}),a.secondYAxis?.dataKey&&t.jsx(F,{dataKey:a.secondYAxis.dataKey,axisLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${z%12+1})`},tick:t.jsx(R,{formatter:Z?.formatter,secondYAxisConfig:{color:a.secondYAxis.color??`var(--sapChart_OrderedColor_${z%12+1})`}}),tickLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${z%12+1})`},label:{value:a.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...a.secondXAxisConfig}),a.yAxisVisible&&T.map((e,o)=>t.jsx(We,{interval:e?.interval??"preserveStartEnd",minTickGap:ne?void 0:-10,type:"category",dataKey:e.accessor,tick:t.jsx(Be,{formatter:e?.formatter}),tickLine:o<1,axisLine:o<1,yAxisId:o,width:ce[o],allowDuplicatedCategory:o===0,orientation:q?"right":"left",...a.yAxisConfig},e.reactKey)),me&&w.map((e,o)=>t.jsxs(Ke,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${o%12+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${o%12+1})`,barSize:e.width,onClick:oe,isAnimationActive:!I,onAnimationStart:he,onAnimationEnd:pe,children:[t.jsx(He,{data:n,valueAccessor:oa(e.accessor),content:t.jsx(qe,{config:e,chartType:"bar",position:"insideRight"})}),n.map((L,S)=>t.jsx($e,{fill:M(e,L,o),stroke:M(e,L,o)},S))]},e.reactKey)),!j&&t.jsx(Xe,{verticalAlign:a.legendPosition,align:a.legendHorizontalAlign,onClick:te,wrapperStyle:le,...a.legendConfig}),d&&t.jsx(Ge,{...d,stroke:d?.color??d?.stroke,x:d?.value??d?.x,label:d?.label}),i?.active!==!1&&t.jsx(Ue,{cursor:_e,formatter:J,contentStyle:De,labelFormatter:se,...i}),!!a.zoomingTool&&t.jsx(Je,{dataKey:ie,tickFormatter:P?.formatter,...je,...typeof a.zoomingTool=="object"?a.zoomingTool:{}}),G]})})});_.displayName="BarChart";try{_.displayName="BarChart",_.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.\n\n__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.",displayName:"BarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one bar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this bar.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: bar width, defaults to `auto`\n- `opacity`: bar opacity, defaults to `1`\n- `stackId`: bars with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'ICartesianChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ra={title:"BarChart",component:_,tags:["package:@ui5/webcomponents-react-charts"],argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:fe,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:s=>s.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:s=>`${s} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},m={},h={args:{measures:[{accessor:"users",color:"red"}],dataset:ye}},p={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:be}},g={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},f={args:{dimensions:[{accessor:"name",formatter:s=>s.slice(0,3)}],measures:[{accessor:"users",formatter:s=>`${s/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},y={args:{dataset:[]}},b={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},C={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(s,c,u)=>{if(u.name==="February")return"red"}}]}},x={args:Ce},v={args:xe},k={args:ve};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    }],
    chartConfig: {
      zoomingTool: true
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      stackId: 'A'
    }, {
      accessor: 'sessions',
      stackId: 'A'
    }, {
      accessor: 'volume',
      highlightColor: (value, measure, data) => {
        if (data.name === 'February') {
          return 'red';
        }
      }
    }]
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...k.parameters?.docs?.source}}};const na=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure","WithNormalizedStacks","WithCustomTooltipConfig","WithCustomLegendConfig"],ka=Object.freeze(Object.defineProperty({__proto__:null,Default:m,LoadingPlaceholder:y,WithCustomColor:h,WithCustomLegendConfig:k,WithCustomTooltipConfig:v,WithDataLabels:g,WithFormatter:f,WithHighlightedMeasure:C,WithNormalizedStacks:x,WithReferenceLine:b,WithSecondaryDimension:p,__namedExportsOrder:na,default:ra},Symbol.toStringTag,{value:"Module"}));export{ka as C,m as D,y as L,h as W,p as a,g as b,f as c,x as d,b as e,C as f,v as g,k as h};
