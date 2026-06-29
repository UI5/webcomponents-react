import{a as e,c as t,i as n}from"./preload-helper-B45gAKPr.js";import{t as r}from"./react-CymAsZIc.js";import{h as i,i as a,r as ee}from"./utils-CyMRdZ0A.js";import{a as te,c as o,l as s,t as c}from"./hooks-CWcdFIe9.js";import{t as l}from"./jsx-runtime-BBQGix-2.js";import{A as ne,I as re,M as ie,P as ae,Q as oe,_t as se,b as ce,ft as le,m as ue,n as u,r as de,t as fe,ut as pe,v as me}from"./ChartContainer-B8c0spVe.js";import{a as d,d as f,i as p,m as he,p as ge,s as _e,t as ve,u as ye}from"./DemoProps-GvALUr4m.js";import{a as be,c as m,d as h,i as xe,l as g,n as _,r as Se,s as v,t as Ce,u as we}from"./staticProps-BDGEdXqn.js";import{n as Te,t as y}from"./useCancelAnimationFallback-U9cDiHDu.js";import{a as Ee,c as De,i as Oe,n as b,o as ke,r as x,s as S,t as Ae}from"./YAxisTicks-BW0vwXyz.js";import{i as je,n as C,r as w,t as Me}from"./ChartDataLabel-DpgI1J4x.js";import{a as Ne,c as Pe,i as Fe,n as Ie,o as T,r as Le,s as E,t as Re}from"./useTooltipFormatter-DTiDF3eo.js";import{n as ze,t as Be}from"./useOnClickInternal-X2C7GQj1.js";import{i as Ve,n as He,r as Ue,t as We}from"./StackedTooltipContent-8HRu82Jp.js";import{n as Ge,t as Ke}from"./react-content-loader.es-D44Iw7up.js";var D,O,qe,Je=n((()=>{D=t(r(),1),O=h(),m(),E(),qe=(e,t,n=``)=>(0,D.useMemo)(()=>{let r=Array(t.length).fill(0),i=0;return e instanceof Array&&t&&(e.map(e=>t.map(t=>t.formatter((0,O.getValueByDataKey)(e,t.accessor,``)))).forEach(e=>{e.forEach((e,t)=>{r[t]=Math.max(T(e),r[t])})}),r=r.map(e=>Math.min(200,e)),i=r.reduce((e,t)=>e+t,0)),n===`middle`?[r,{width:`auto`}]:[r,{marginLeft:i,maxWidth:`calc(100% - ${i+8}px)`}]},[e,t,n])})),k,Ye,A=n((()=>{s(),Ge(),k=l(),Ye=()=>(0,k.jsxs)(Ke,{viewBox:`0 0 165 145`,preserveAspectRatio:`xMidYMid meet`,width:`100%`,height:`100%`,speed:2,backgroundColor:o.sapContent_ImagePlaceholderBackground,foregroundColor:o.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:o.sapContent_DisabledOpacity,children:[(0,k.jsx)(`rect`,{x:`20`,y:`10`,width:`1`,height:`135`}),(0,k.jsx)(`rect`,{x:`20`,y:`20`,width:`85`,height:`15`}),(0,k.jsx)(`rect`,{x:`20`,y:`40`,width:`117`,height:`15`}),(0,k.jsx)(`rect`,{x:`20`,y:`60`,width:`67`,height:`15`}),(0,k.jsx)(`rect`,{x:`20`,y:`80`,width:`75`,height:`15`}),(0,k.jsx)(`rect`,{x:`20`,y:`100`,width:`125`,height:`15`}),(0,k.jsx)(`rect`,{x:`20`,y:`120`,width:`60`,height:`15`})]})})),j,M,N,Xe,Ze,P,F,Qe=n((()=>{c(),a(),s(),j=t(r(),1),de(),M=h(),y(),S(),w(),g(),Je(),Ee(),Be(),Le(),Re(),u(),C(),m(),Ve(),He(),_(),E(),Oe(),b(),A(),N=l(),Xe={formatter:v},Ze={formatter:v,opacity:1},P=e=>({payload:t})=>(0,M.getValueByDataKey)(t,e),F=(0,j.forwardRef)((e,t)=>{let{loading:n,loadingDelay:r,dataset:a,noLegend:s,noAnimation:c,tooltipConfig:l,onDataPointClick:u,onLegendClick:de,onClick:d,style:f,className:p,slot:he,syncId:ge,ChartPlaceholder:_e,children:ve,alignLabels:ye=`insideRight`,...m}=e,h={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:o.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:`bottom`,legendHorizontalAlign:`left`,barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...e.chartConfig},g=h.referenceLine,{dimensions:_,measures:v,stackGroups:y,lastInStack:Ee}=Fe(e.dimensions,e.measures,Xe,Ze,h.showStackAggregateTotals),Oe=Ie(v),b=_[0],{primaryMeasure:S,secondaryMeasure:C}=Pe(v,h?.secondYAxis?.dataKey),w=v.map(({accessor:e})=>e),T=h.secondYAxis?w.findIndex(e=>e===h.secondYAxis?.dataKey):0,[Le,E]=i(t),Re=we(de),Be=je(b?.formatter),Ve=(0,j.useCallback)((e,t,n)=>{if(e&&u){let r=e.value.length?e.value[1]-e.value[0]:e.value;u(ee(n,{dataKey:Object.keys(e).filter(e=>e!==`value`).find(t=>e[t]===r),value:r,payload:e.payload,dataIndex:t}))}},[u]),He=ze(d),Ge=a?.length>30,Ke=b?.accessor,[D,O]=qe(a,_,h.legendPosition),Je=De(h.margin,h.zoomingTool),[k]=ke(E,1),A=te(E),{isMounted:M,handleBarAnimationStart:F,handleBarAnimationEnd:Qe}=Te(c),I=Object.keys(y),L=h.showStackAggregateTotals&&I.length===1&&v.every(e=>e.stackId!=null),{chartConfig:R,dimensions:z,measures:B,...V}=m;return(0,N.jsx)(fe,{dataset:a,loading:n,loadingDelay:r,Placeholder:_e??Ye,ref:Le,style:f,className:p,slot:he,resizeDebounce:h.resizeDebounce,...V,children:(0,N.jsxs)(ue,{syncId:ge,onClick:He,stackOffset:`sign`,margin:Je,layout:`vertical`,data:a,barGap:h.barGap,accessibilityLayer:h.accessibilityLayer,className:typeof u==`function`||typeof d==`function`?`has-click-handler`:void 0,children:[(0,N.jsx)(ne,{vertical:h.gridVertical,horizontal:h.gridHorizontal,stroke:h.gridStroke}),h.xAxisVisible&&(0,N.jsx)(ce,{interval:0,type:`number`,tick:(0,N.jsx)(x,{formatter:S?.formatter}),axisLine:h.xAxisVisible,tickLine:Se,height:k,reversed:A,...h.xAxisConfig}),h.secondYAxis?.dataKey&&(0,N.jsx)(ce,{dataKey:h.secondYAxis.dataKey,axisLine:{stroke:h.secondYAxis.color??`var(--sapChart_OrderedColor_${T%12+1})`},tick:(0,N.jsx)(x,{formatter:C?.formatter,secondYAxisConfig:{color:h.secondYAxis.color??`var(--sapChart_OrderedColor_${T%12+1})`}}),tickLine:{stroke:h.secondYAxis.color??`var(--sapChart_OrderedColor_${T%12+1})`},label:{value:h.secondYAxis.name,offset:2,angle:90,position:`center`},orientation:`top`,interval:0,xAxisId:`secondary`,type:`number`,...h.secondXAxisConfig}),h.yAxisVisible&&_.map((e,t)=>(0,N.jsx)(me,{interval:e?.interval??`preserveStartEnd`,minTickGap:Ge?void 0:-10,type:`category`,dataKey:e.accessor,tick:(0,N.jsx)(Ae,{formatter:e?.formatter}),tickLine:t<1,axisLine:t<1,yAxisId:t,width:D[t],allowDuplicatedCategory:t===0,orientation:A?`right`:`left`,...h.yAxisConfig},e.reactKey)),M&&v.map((e,t)=>(0,N.jsxs)(ae,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:`monotone`,dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${t%12+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${t%12+1})`,barSize:e.width,onClick:Ve,isAnimationActive:!c,onAnimationStart:F,onAnimationEnd:Qe,children:[(0,N.jsx)(oe,{data:a,valueAccessor:P(e.accessor),content:(0,N.jsx)(Me,{config:e,chartType:`bar`,position:ye})}),h.showStackAggregateTotals&&e.stackId&&typeof e.accessor==`string`&&Ee.has(e.accessor)&&(0,N.jsx)(oe,{data:a,valueAccessor:P(e.accessor),position:`right`,content:(0,N.jsx)(Ue,{stackAccessors:y[e.stackId],dataset:a})}),a.map((n,r)=>(0,N.jsx)(pe,{fill:Ne(e,n,t),stroke:Ne(e,n,t)},r))]},e.reactKey)),!s&&(0,N.jsx)(se,{verticalAlign:h.legendPosition,align:h.legendHorizontalAlign,onClick:Re,wrapperStyle:O,...h.legendConfig}),g&&(0,N.jsx)(ie,{...g,stroke:g?.color??g?.stroke,x:g?.value??g?.x,label:g?.label}),l?.active!==!1&&(0,N.jsx)(le,{cursor:be,formatter:Oe,contentStyle:xe,labelFormatter:Be,...l,...L&&{content:(0,N.jsx)(We,{stackAccessors:y[I[0]],totalFormatter:h.stackAggregateTotalFormatter})}}),!!h.zoomingTool&&(0,N.jsx)(re,{dataKey:Ke,tickFormatter:b?.formatter,...Ce,...typeof h.zoomingTool==`object`?h.zoomingTool:{}}),ve]})})}),F.displayName=`BarChart`;try{F.displayName=`BarChart`,F.__docgenInfo={description:`A \`BarChart\` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.

__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.`,displayName:`BarChart`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/charts/dist/components/BarChart/index.d.ts`,methods:[],props:{alignLabels:{defaultValue:{value:`'insideRight'`},declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/BarChart/index.d.ts`,name:`BarChartProps`}],description:`Alignment of the labels of the data points.`,name:`alignLabels`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/BarChart/index.d.ts`,name:`BarChartProps`},required:!1,tags:{default:`'insideRight'`},type:{name:`enum`,raw:`LabelPosition`,value:[{value:`"end"`},{value:`"top"`},{value:`"bottom"`},{value:`"middle"`},{value:`"center"`},{value:`"left"`},{value:`"right"`},{value:`"inside"`},{value:`"outside"`},{value:`"insideLeft"`},{value:`"insideRight"`},{value:`"insideTop"`},{value:`"insideBottom"`},{value:`"insideTopLeft"`},{value:`"insideBottomLeft"`},{value:`"insideTopRight"`},{value:`"insideBottomRight"`},{value:`"insideStart"`},{value:`"insideEnd"`},{value:`"centerTop"`},{value:`"centerBottom"`},{value:`{ x?: number; y?: number; }`,description:``,fullComment:``,tags:{}}]}},dimensions:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/BarChart/index.d.ts`,name:`BarChartProps`}],description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:`dimensions`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/BarChart/index.d.ts`,name:`BarChartProps`},required:!0,tags:{},type:{name:`DimensionConfig[]`}},measures:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/BarChart/index.d.ts`,name:`BarChartProps`}],description:"An array of config objects. Each object is defining one bar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this bar.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: bar width, defaults to `auto`\n- `opacity`: bar opacity, defaults to `1`\n- `stackId`: bars with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:`measures`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/BarChart/index.d.ts`,name:`BarChartProps`},required:!0,tags:{},type:{name:`MeasureConfig[]`}},loading:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Flag whether the chart should display a loading indicator.

This can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a \`BusyIndicator\` on top of the chart (in case the chart has already some data to display).`,name:`loading`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},loadingDelay:{defaultValue:{value:`1000`},declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:`loadingDelay`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{default:`1000`},type:{name:`number`}},dataset:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:`dataset`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`Record<string, unknown>[]`}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:`children`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},noLegend:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:`noLegend`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Fired when clicked anywhere in the chart.`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void`}},onDataPointClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:`onDataPointClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`(event: CustomEvent<any>) => void`}},onLegendClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.`,name:`onLegendClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{param:`event`},type:{name:`(event: CustomEvent<any>) => void`}},noAnimation:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"`noAnimation` disables all chart animations when set to `true`.",name:`noAnimation`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},chartConfig:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:`chartConfig`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`ICartesianChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }`}},tooltipConfig:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:`tooltipConfig`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`TooltipProps<string | number | (string | number)[], string | number>`}},syncId:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:`syncId`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`string`}},ChartPlaceholder:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:`ChartPlaceholder`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`ComponentType`,value:[{value:`ComponentClass<{}, any>`,description:`Represents a component class in React.`,fullComment:`Represents a component class in React.
@template P The props the component accepts.
@template S The internal state of the component.`,tags:{template:`P The props the component accepts.
S The internal state of the component.`}},{value:`FunctionComponent<{}>`,description:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.`,fullComment:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.
@template P The props the component accepts.
@see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
@example \`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
@example \`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``,tags:{template:`P The props the component accepts.`,see:`{@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}`,example:`\`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
\`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``}}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}}},tags:{}}}catch{}})),I=e({Default:()=>z,LoadingPlaceholder:()=>W,WithCustomColor:()=>B,WithCustomLegendConfig:()=>Z,WithCustomTooltipConfig:()=>X,WithCustomTooltipTotal:()=>Y,WithDataLabels:()=>H,WithFormatter:()=>U,WithHighlightedMeasure:()=>K,WithNormalizedStacks:()=>q,WithReferenceLine:()=>G,WithSecondaryDimension:()=>V,WithStackAggregateTotalsAndTooltip:()=>J,__namedExportsOrder:()=>Q,default:()=>R}),L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=n((()=>{d(),Qe(),L=l(),R={title:`BarChart`,component:F,tags:[`package:@ui5/webcomponents-react-charts`],argTypes:{children:{control:{disable:!0}}},args:{dataset:p,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString(),opacity:.6},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`}]}},z={},B={args:{measures:[{accessor:`users`,color:`red`}],dataset:f}},V={args:{dimensions:[{accessor:`name`},{accessor:`dimension`}],measures:[{accessor:`users`,color:`red`}],dataset:ye}},H={args:{measures:[{accessor:`users`},{accessor:`sessions`},{accessor:`volume`}]}},U={args:{dimensions:[{accessor:`name`,formatter:e=>e.slice(0,3)}],measures:[{accessor:`users`,formatter:e=>`${e/10}`,label:`number of users`},{accessor:`sessions`},{accessor:`volume`}],chartConfig:{zoomingTool:!0}}},W={args:{dataset:[]}},G={args:{measures:[{accessor:`users`,stackId:`A`},{accessor:`sessions`,stackId:`A`},{accessor:`volume`}],chartConfig:{referenceLine:{color:`red`,label:`MAX`,value:650}}}},K={args:{measures:[{accessor:`users`,stackId:`A`},{accessor:`sessions`,stackId:`A`},{accessor:`volume`,highlightColor:(e,t,n)=>{if(n.name===`February`)return`red`}}]}},q={args:ge},J={name:`With Stack Aggregate Totals`,args:{dataset:p.slice(0,3),measures:[{accessor:`users`,stackId:`A`,label:`Users`},{accessor:`sessions`,stackId:`A`,label:`Active Sessions`}],chartConfig:{showStackAggregateTotals:!0}}},Y={args:{dataset:p.slice(0,5),measures:[{accessor:`users`,stackId:`A`,label:`Users`},{accessor:`sessions`,stackId:`A`,label:`Active Sessions`},{accessor:`volume`,label:`Vol.`}],chartConfig:{showStackAggregateTotals:!0},tooltipConfig:{content:(0,L.jsx)(ve,{})}}},X={args:he},Z={args:_e},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'With Stack Aggregate Totals',
  args: {
    dataset: complexDataSet.slice(0, 3),
    measures: [{
      accessor: 'users',
      stackId: 'A',
      label: 'Users'
    }, {
      accessor: 'sessions',
      stackId: 'A',
      label: 'Active Sessions'
    }],
    chartConfig: {
      showStackAggregateTotals: true
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: complexDataSet.slice(0, 5),
    measures: [{
      accessor: 'users',
      stackId: 'A',
      label: 'Users'
    }, {
      accessor: 'sessions',
      stackId: 'A',
      label: 'Active Sessions'
    }, {
      accessor: 'volume',
      label: 'Vol.'
    }],
    chartConfig: {
      showStackAggregateTotals: true
    },
    tooltipConfig: {
      content: <CustomTooltipContent />
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithCustomColor`,`WithSecondaryDimension`,`WithDataLabels`,`WithFormatter`,`LoadingPlaceholder`,`WithReferenceLine`,`WithHighlightedMeasure`,`WithNormalizedStacks`,`WithStackAggregateTotalsAndTooltip`,`WithCustomTooltipTotal`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));$();export{z as Default,W as LoadingPlaceholder,B as WithCustomColor,Z as WithCustomLegendConfig,X as WithCustomTooltipConfig,Y as WithCustomTooltipTotal,H as WithDataLabels,U as WithFormatter,K as WithHighlightedMeasure,q as WithNormalizedStacks,G as WithReferenceLine,V as WithSecondaryDimension,J as WithStackAggregateTotalsAndTooltip,Q as __namedExportsOrder,R as default,$ as n,I as t};