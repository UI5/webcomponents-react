import{g as oe,h as ne,t as se,l as re}from"./DemoProps-C9Y2DzpB.js";import{j as e,r as C,aF as ie,q as L}from"./iframe-BiIJdVyr.js";import{T as x}from"./ThemingParameters-pyhX3s39.js";import{c as T,b as D,a as le,u as ce,C as de,X as pe,Y as ue}from"./YAxisTicks-DYMDTjfc.js";import{u as he,x as me,t as fe,a as ge,b as ye,e as be}from"./staticProps-DMsWCyNQ.js";import{u as Ce}from"./useLongestYAxisLabel-B0TChpwG.js";import{u as xe,a as ve}from"./useTooltipFormatter-B4oVbliz.js";import{o as ke,p as we,k as Se,l as Ae,R as P,T as _e}from"./ChartContainer-DxVD-LC7.js";import{C as je}from"./react-content-loader.es-Cb2dZdKQ.js";import{S as z,Z as V}from"./Scatter-DCyehV65.js";import{u as Le}from"./useIsRTL-J8i0PIKg.js";var Pe=ke({chartName:"ScatterChart",GraphicalChild:z,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:T},{axisType:"yAxis",AxisComp:D},{axisType:"zAxis",AxisComp:V}],formatAxisMap:we});const S=n=>e.jsxs(je,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:x.sapContent_ImagePlaceholderBackground,foregroundColor:x.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:x.sapContent_DisabledOpacity,...n,children:[e.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),e.jsx("circle",{cx:"20",cy:"90",r:"2"}),e.jsx("circle",{cx:"40",cy:"58",r:"3"}),e.jsx("circle",{cx:"60",cy:"108",r:"14"}),e.jsx("circle",{cx:"85",cy:"87",r:"8"}),e.jsx("circle",{cx:"105",cy:"50",r:"6"}),e.jsx("circle",{cx:"125",cy:"115",r:"4"}),e.jsx("circle",{cx:"78",cy:"58",r:"10"}),e.jsx("circle",{cx:"28",cy:"115",r:"4"})]});try{S.displayName="ScatterChartPlaceholder",S.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}const Te={formatter:be},v=C.forwardRef((n,I)=>{const{dataset:y,loading:q,loadingDelay:R,noLegend:N,noAnimation:M,tooltipConfig:A,onDataPointClick:c,onLegendClick:O,onClick:k,style:E,className:W,slot:F,ChartPlaceholder:H,children:B,...Y}=n,a={yAxisVisible:!1,xAxisVisible:!0,gridStroke:x.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,...n.chartConfig},{referenceLine:r,referenceLineX:i}=a,{measures:b}=xe([],n.measures,{},Te),U=ve(b),[K,_]=ie(I),l=C.useRef(!1),X=he(O),$=C.useCallback((t,p)=>{typeof k=="function"&&!l.current&&k(L(p,{payload:t?.activePayload?.[0]?.payload,activePayloads:t?.activePayload})),l.current&&(l.current=!1)},[k,l.current]),G=C.useCallback((t,p,ae)=>{t&&c&&(c(L(ae,{value:t.node,dataKey:t.zAxis.dataKey,dataIndex:p,payload:t.payload})),l.current=!0)},[c,l.current]),Z=y?.length>30,s=b.find(({axis:t})=>t==="x"),o=b.find(({axis:t})=>t==="y"),d=b.find(({axis:t})=>t==="z"),[j,J]=Ce(y?.[0]?.data,[o],a.legendPosition),Q=le(_,1),ee=ce(a.margin,a.zoomingTool),{chartConfig:Ve,measures:Ie,...te}=Y,w=Le(_);return e.jsx(Se,{dataset:y,loading:q,loadingDelay:R,Placeholder:H??S,ref:K,style:E,className:W,slot:F,resizeDebounce:a.resizeDebounce,...te,children:e.jsxs(Pe,{onClick:$,margin:ee,accessibilityLayer:a.accessibilityLayer,className:typeof c=="function"?"has-click-handler":void 0,children:[e.jsx(de,{vertical:a.gridVertical,horizontal:a.gridHorizontal,stroke:a.gridStroke}),a.xAxisVisible&&e.jsx(T,{type:"number",name:s?.label,dataKey:s?.accessor,xAxisId:0,interval:s?.interval??(Z?"preserveStart":0),tick:e.jsx(pe,{formatter:s?.formatter}),padding:me,height:Q[0],reversed:w,label:s?.label?{value:s?.label,dy:15,position:"insideRight"}:0},typeof s?.accessor!="function"?s?.accessor:s?.label),e.jsx(D,{label:o?.label?{value:o?.label,angle:-90,position:w?"insideRight":"insideLeft"}:null,type:"number",name:o?.label,axisLine:a.yAxisVisible,tickLine:fe,dataKey:o?.accessor,interval:0,tick:e.jsx(ue,{formatter:o?.formatter}),width:o?.label?j+10:j,orientation:w===!0?"right":"left"},typeof o?.accessor!="function"?o?.accessor:o?.label),e.jsx(V,{name:d?.label,dataKey:d?.accessor,range:[0,5e3]},typeof d?.accessor!="function"?d?.accessor:d?.label),y?.map((t,p)=>e.jsx(z,{className:typeof c=="function"?"has-click-handler":void 0,onMouseDown:G,opacity:t.opacity,data:t?.data,name:t?.label,fill:t?.color??`var(--sapChart_OrderedColor_${p%12+1})`,isAnimationActive:!M},t?.label)),!N&&e.jsx(Ae,{verticalAlign:a.legendPosition,align:a.legendHorizontalAlign,onClick:X,wrapperStyle:J,...a.legendConfig}),r&&e.jsx(P,{...r,stroke:r?.color??r?.stroke,y:r?.value??r?.y,label:r?.label}),i&&e.jsx(P,{...i,stroke:i?.color??i?.stroke,x:i?.value??i?.x,label:i?.label}),A?.active!==!1&&e.jsx(_e,{cursor:ye,formatter:U,contentStyle:ge,...A}),B]})})});v.displayName="ScatterChart";try{v.displayName="ScatterChart",v.__docgenInfo={description:`
A \`ScatterChart\` is a data visualization that displays multiple circles (bubbles) in a two-dimensional plot.

Most commonly, a scatter chart displays the values of three numeric variables,where each observation's data is
shown by a circle, while the horizontal and vertical positions of the bubble show the values of two other variables.

__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.`,displayName:"ScatterChart",props:{dataset:{defaultValue:null,description:`An array of dataset objects. Each object defines a dataset which is displayed.

**Required properties**
 - \`data\`: array of objects which contains the data.

**Optional properties**
 - \`label\`: string containing the label of the dataset which is also displayed in the legend.
 - \`color\`: any valid CSS color or CSS variable. Defaults to the \`sapChart_Ordinal\` colors.
 - \`opacity\`: number contains value of opacity of dataset

**Example of dataset:**

<code>
  <pre>
   [
     {
      label: 'America',
      opacity: 0.7,
      data: [
        {
          users: 120,
          sessions: 200,
          volume: 302
        },
        {
          users: 20,
          sessions: 230,
          volume: 392
        }
      ]
     }
   ]
  </pre>
</code>`,name:"dataset",required:!1,type:{name:"ScatterDataObject[]"}},measures:{defaultValue:null,description:`An array of config objects. Each object is defining one axis in the chart.

**Required properties**
 - \`accessor\`: string containing the path to the dataset key this line should display. Supports object structures by using <code>'parent.child'</code>.
    Can also be a getter.
 - \`axis\`: string containing definition of axis. Must be x, y or z data to the axis.

**Optional properties**
 - \`label\`: Label to display in tooltips. Falls back to the <code>accessor</code> if not present.
 - \`formatter\`: function will be called for each data label and allows you to format it according to your needs. Also addresses labels of axis.`,name:"measures",required:!0,type:{name:"[MeasureConfig, MeasureConfig, MeasureConfig, ...MeasureConfig[]]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'IScatterChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}const De={title:"ScatterChart",component:v,argTypes:{children:{control:{disable:!0}}},tags:["package:@ui5/webcomponents-react-charts"],args:{dataset:oe,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",formatter:n=>`${n}k`,axis:"y"},{accessor:"volume",axis:"z"}]}},u={},h={args:{dataset:ne,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",axis:"y"},{accessor:"volume",axis:"z"}]}},m={args:{dataset:[]}},f={args:se},g={args:re};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: scatterColorDataSet,
    measures: [{
      accessor: 'users',
      label: 'Users',
      axis: 'x'
    }, {
      accessor: 'sessions',
      label: 'Sessions',
      axis: 'y'
    }, {
      accessor: 'volume',
      axis: 'z'
    }]
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...g.parameters?.docs?.source}}};const ze=["Default","WithCustomColor","LoadingPlaceholder","WithCustomTooltipConfig","WithCustomLegendConfig"],Ue=Object.freeze(Object.defineProperty({__proto__:null,Default:u,LoadingPlaceholder:m,WithCustomColor:h,WithCustomLegendConfig:g,WithCustomTooltipConfig:f,__namedExportsOrder:ze,default:De},Symbol.toStringTag,{value:"Module"}));export{Ue as C,u as D,m as L,h as W,f as a,g as b};
