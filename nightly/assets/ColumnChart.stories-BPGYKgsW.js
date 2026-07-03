import{a as e,c as t,i as n}from"./preload-helper-B45gAKPr.js";import{t as r}from"./react-CymAsZIc.js";import{h as ee,i,r as te}from"./utils-CyMRdZ0A.js";import{a as ne,c as a,l as o,t as s}from"./hooks-CWcdFIe9.js";import{t as c}from"./jsx-runtime-BBQGix-2.js";import{A as re,I as ie,M as ae,P as oe,Q as l,_t as se,b as ce,ft as le,m as ue,n as u,r as de,t as fe,ut as pe,v as me}from"./ChartContainer-B8c0spVe.js";import{a as d,d as he,i as f,m as ge,p as _e,s as ve,t as ye,u as be}from"./DemoProps-GvALUr4m.js";import{a as xe,c as Se,d as p,i as Ce,l as m,n as h,r as we,s as g,t as Te,u as Ee}from"./staticProps-BDGEdXqn.js";import{n as De,t as _}from"./useCancelAnimationFallback-U9cDiHDu.js";import{a as v,c as Oe,i as y,n as b,o as ke,r as Ae,s as x,t as S}from"./YAxisTicks-BMO41XsG.js";import{i as je,n as C,r as w,t as Me}from"./ChartDataLabel-DpgI1J4x.js";import{a as T,c as Ne,i as Pe,n as Fe,r as E,s as D,t as O}from"./useTooltipFormatter-DTiDF3eo.js";import{n as Ie,t as k}from"./useOnClickInternal-X2C7GQj1.js";import{i as Le,n as A,r as Re,t as ze}from"./StackedTooltipContent-8HRu82Jp.js";import{n as Be,t as Ve}from"./react-content-loader.es-D44Iw7up.js";import{n as He,t as Ue}from"./useLongestYAxisLabel-CM5_7dml.js";var j,M,We=n((()=>{o(),Be(),j=c(),M=e=>(0,j.jsxs)(Ve,{viewBox:`0 0 165 145`,preserveAspectRatio:`xMidYMid meet`,width:`100%`,height:`100%`,speed:2,backgroundColor:a.sapContent_ImagePlaceholderBackground,foregroundColor:a.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:a.sapContent_DisabledOpacity,...e,children:[(0,j.jsx)(`rect`,{x:`10`,y:`135`,width:`135`,height:`1`}),(0,j.jsx)(`rect`,{x:`20`,y:`50`,width:`15`,height:`85`}),(0,j.jsx)(`rect`,{x:`40`,y:`18`,width:`15`,height:`117`}),(0,j.jsx)(`rect`,{x:`60`,y:`68`,width:`15`,height:`67`}),(0,j.jsx)(`rect`,{x:`80`,y:`60`,width:`15`,height:`75`}),(0,j.jsx)(`rect`,{x:`100`,y:`10`,width:`15`,height:`125`}),(0,j.jsx)(`rect`,{x:`120`,y:`75`,width:`15`,height:`60`})]});try{M.displayName=`ColumnChartPlaceholder`,M.__docgenInfo={description:``,displayName:`ColumnChartPlaceholder`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/charts/dist/components/ColumnChart/Placeholder.d.ts`,methods:[],props:{},tags:{}}}catch{}})),N,P,F,Ge,Ke,I,L,R=n((()=>{s(),i(),o(),N=t(r(),1),de(),P=p(),_(),x(),w(),m(),Ue(),v(),k(),E(),O(),u(),C(),Se(),Le(),A(),h(),D(),y(),b(),We(),F=c(),Ge={formatter:g},Ke={formatter:g,opacity:1},I=e=>({payload:t})=>(0,P.getValueByDataKey)(t,e),L=(0,N.forwardRef)((e,t)=>{let{loading:n,loadingDelay:r,dataset:i,noLegend:o,noAnimation:s,tooltipConfig:c,onDataPointClick:u,onLegendClick:de,onClick:d,style:he,className:f,slot:ge,ChartPlaceholder:_e,syncId:ve,children:ye,alignLabels:be=`insideTop`,...Se}=e,p={yAxisVisible:!1,xAxisVisible:!0,gridStroke:a.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:`bottom`,legendHorizontalAlign:`left`,barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...e.chartConfig},{referenceLine:m}=p,{dimensions:h,measures:g,stackGroups:_,lastInStack:v}=Pe(e.dimensions,e.measures,Ge,Ke,p.showStackAggregateTotals),y=Fe(g),[b,x]=He(i,g,p.legendPosition),C=h[0],{primaryMeasure:w,secondaryMeasure:E}=Ne(g,p?.secondYAxis?.dataKey),D=je(C?.formatter),[O,k]=ee(t),Le=g.map(({accessor:e})=>e),A=p.secondYAxis?Le.findIndex(e=>e===p.secondYAxis?.dataKey):0,Be=Ee(de),Ve=(0,N.useCallback)((e,t,n)=>{e&&u&&u(te(n,{dataKey:Object.keys(e).filter(t=>e.value.length?e[t]===e.value[1]-e.value[0]:e[t]===e.value&&t!==`value`)[0],value:e.value.length?e.value[1]-e.value[0]:e.value,dataIndex:t,payload:e.payload}))},[u]),Ue=Ie(d),j=i?.length>30,We=C?.accessor,P=Oe(p.margin,p.zoomingTool),L=ke(k,e.dimensions.length),R=ne(k),{chartConfig:qe,dimensions:Je,measures:z,...B}=Se,{isMounted:V,handleBarAnimationStart:H,handleBarAnimationEnd:U}=De(s),W=Object.keys(_),G=p.showStackAggregateTotals&&W.length===1&&g.every(e=>e.stackId!=null);return(0,F.jsx)(fe,{dataset:i,loading:n,loadingDelay:r,Placeholder:_e??M,ref:O,style:he,className:f,slot:ge,resizeDebounce:p.resizeDebounce,...B,children:(0,F.jsxs)(ue,{syncId:ve,onClick:Ue,stackOffset:`sign`,margin:P,data:i,barGap:p.barGap,accessibilityLayer:p.accessibilityLayer,className:typeof u==`function`||typeof d==`function`?`has-click-handler`:void 0,children:[(0,F.jsx)(re,{vertical:p.gridVertical,horizontal:p.gridHorizontal,stroke:p.gridStroke}),p.xAxisVisible&&h.map((e,t)=>(0,F.jsx)(ce,{dataKey:e.accessor,xAxisId:t,interval:e?.interval??(j?`preserveStart`:0),tick:(0,F.jsx)(Ae,{formatter:e?.formatter}),tickLine:t<1,axisLine:t<1,height:L[t],allowDuplicatedCategory:t===0,reversed:R,...p.xAxisConfig},e.reactKey)),(0,F.jsx)(me,{orientation:R===!0?`right`:`left`,axisLine:p.yAxisVisible,tickLine:we,yAxisId:`left`,interval:0,tick:(0,F.jsx)(S,{formatter:w?.formatter}),width:b,...p.yAxisConfig}),p.secondYAxis?.dataKey&&(0,F.jsx)(me,{dataKey:p.secondYAxis.dataKey,axisLine:{stroke:p.secondYAxis.color??`var(--sapChart_OrderedColor_${A%12+1})`},tick:(0,F.jsx)(S,{formatter:E?.formatter,secondYAxisConfig:{color:p.secondYAxis.color??`var(--sapChart_OrderedColor_${A%12+1})`}}),tickLine:{stroke:p.secondYAxis.color??`var(--sapChart_OrderedColor_${A%12+1})`},label:{value:p.secondYAxis.name,offset:2,angle:90,position:`center`},orientation:R===!0?`left`:`right`,yAxisId:`right`,interval:0,...p.secondYAxisConfig}),V&&g.map((e,t)=>(0,F.jsxs)(oe,{yAxisId:p.secondYAxis?.dataKey===e.accessor?`right`:`left`,stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:`monotone`,dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${t%12+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${t%12+1})`,barSize:e.width,onClick:Ve,isAnimationActive:!s,onAnimationStart:H,onAnimationEnd:U,children:[(0,F.jsx)(l,{data:i,valueAccessor:I(e.accessor),content:(0,F.jsx)(Me,{config:e,chartType:`column`,position:be})}),p.showStackAggregateTotals&&e.stackId&&typeof e.accessor==`string`&&v.has(e.accessor)&&(0,F.jsx)(l,{data:i,valueAccessor:I(e.accessor),position:`top`,content:(0,F.jsx)(Re,{stackAccessors:_[e.stackId],dataset:i})}),i.map((n,r)=>(0,F.jsx)(pe,{fill:T(e,n,t),stroke:T(e,n,t)},r))]},e.reactKey)),!o&&(0,F.jsx)(se,{verticalAlign:p.legendPosition,align:p.legendHorizontalAlign,onClick:Be,wrapperStyle:x,...p.legendConfig}),m&&(0,F.jsx)(ae,{...m,stroke:m?.color??m?.stroke,y:m?.value??m?.y,yAxisId:m?.yAxisId??`left`,label:m?.label}),c?.active!==!1&&(0,F.jsx)(le,{cursor:xe,formatter:y,contentStyle:Ce,labelFormatter:D,...c,...G&&{content:(0,F.jsx)(ze,{stackAccessors:_[W[0]],totalFormatter:p.stackAggregateTotalFormatter})}}),!!p.zoomingTool&&(0,F.jsx)(ie,{dataKey:We,tickFormatter:C?.formatter,...Te,...typeof p.zoomingTool==`object`?p.zoomingTool:{}}),ye]})})}),L.displayName=`ColumnChart`;try{L.displayName=`ColumnChart`,L.__docgenInfo={description:`A \`ColumnChart\` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.

__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.`,displayName:`ColumnChart`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/charts/dist/components/ColumnChart/index.d.ts`,methods:[],props:{alignLabels:{defaultValue:{value:`'insideTop'`},declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/ColumnChart/index.d.ts`,name:`ColumnChartProps`}],description:`Alignment of the labels of the data points.`,name:`alignLabels`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/ColumnChart/index.d.ts`,name:`ColumnChartProps`},required:!1,tags:{default:`'insideTop'`},type:{name:`enum`,raw:`LabelPosition`,value:[{value:`"end"`},{value:`"top"`},{value:`"bottom"`},{value:`"middle"`},{value:`"center"`},{value:`"left"`},{value:`"right"`},{value:`"inside"`},{value:`"outside"`},{value:`"insideLeft"`},{value:`"insideRight"`},{value:`"insideTop"`},{value:`"insideBottom"`},{value:`"insideTopLeft"`},{value:`"insideBottomLeft"`},{value:`"insideTopRight"`},{value:`"insideBottomRight"`},{value:`"insideStart"`},{value:`"insideEnd"`},{value:`"centerTop"`},{value:`"centerBottom"`},{value:`{ x?: number; y?: number; }`,description:``,fullComment:``,tags:{}}]}},dimensions:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/ColumnChart/index.d.ts`,name:`ColumnChartProps`}],description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:`dimensions`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/ColumnChart/index.d.ts`,name:`ColumnChartProps`},required:!0,tags:{},type:{name:`DimensionConfig[]`}},measures:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/ColumnChart/index.d.ts`,name:`ColumnChartProps`}],description:"An array of config objects. Each object is defining one column in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: column width, defaults to `auto`\n- `opacity`: column opacity, defaults to `1`\n- `stackId`: columns with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:`measures`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/ColumnChart/index.d.ts`,name:`ColumnChartProps`},required:!0,tags:{},type:{name:`MeasureConfig[]`}},loading:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Flag whether the chart should display a loading indicator.

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
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}}},tags:{}}}catch{}})),qe=e({Default:()=>B,LoadingPlaceholder:()=>K,WithCustomColor:()=>V,WithCustomLegendConfig:()=>Q,WithCustomTooltipConfig:()=>Z,WithCustomTooltipTotal:()=>X,WithFormatter:()=>G,WithHighlightedMeasure:()=>J,WithNormalizedStacks:()=>W,WithReferenceLine:()=>q,WithSecondaryDimension:()=>H,WithStackAggregateTotals:()=>Y,WithStacks:()=>U,__namedExportsOrder:()=>$,default:()=>z}),Je,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ye=n((()=>{d(),R(),Je=c(),z={title:`ColumnChart`,component:L,tags:[`package:@ui5/webcomponents-react-charts`],argTypes:{children:{control:{disable:!0}}},args:{dataset:f,dimensions:[{accessor:`name`,formatter:e=>`${e} 2019`}],measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString()},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`}]}},B={},V={args:{measures:[{accessor:`users`,color:`red`}],dataset:he}},H={args:{dimensions:[{accessor:`name`},{accessor:`dimension`}],measures:[{accessor:`users`,color:`red`}],dataset:be}},U={args:{measures:[{accessor:`users`,stackId:`A`},{accessor:`sessions`,stackId:`A`},{accessor:`volume`}],dataset:f}},W={args:_e},G={args:{dimensions:[{accessor:`name`,formatter:e=>e.slice(0,3)}],measures:[{accessor:`users`,formatter:e=>`${e/10}`,label:`number of users`},{accessor:`sessions`},{accessor:`volume`}]}},K={args:{dataset:[]}},q={args:{chartConfig:{referenceLine:{color:`red`,label:`MAX`,value:650}}}},J={args:{measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString()},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`,highlightColor:e=>{if(e>750)return`red`}}]}},Y={args:{dataset:f.slice(0,3),dimensions:[{accessor:`name`}],measures:[{accessor:`users`,stackId:`A`,label:`Users`},{accessor:`sessions`,stackId:`A`,label:`Active Sessions`}],chartConfig:{showStackAggregateTotals:!0}}},X={args:{dataset:f.slice(0,5),dimensions:[{accessor:`name`}],measures:[{accessor:`users`,stackId:`A`,label:`Users`},{accessor:`sessions`,stackId:`A`,label:`Active Sessions`},{accessor:`volume`,label:`Vol.`}],chartConfig:{showStackAggregateTotals:!0},tooltipConfig:{content:(0,Je.jsx)(ye,{})}}},Z={args:ge},Q={args:ve},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: complexDataSet.slice(0, 3),
    dimensions: [{
      accessor: 'name'
    }],
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: complexDataSet.slice(0, 5),
    dimensions: [{
      accessor: 'name'
    }],
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithCustomColor`,`WithSecondaryDimension`,`WithStacks`,`WithNormalizedStacks`,`WithFormatter`,`LoadingPlaceholder`,`WithReferenceLine`,`WithHighlightedMeasure`,`WithStackAggregateTotals`,`WithCustomTooltipTotal`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));Ye();export{B as Default,K as LoadingPlaceholder,V as WithCustomColor,Q as WithCustomLegendConfig,Z as WithCustomTooltipConfig,X as WithCustomTooltipTotal,G as WithFormatter,J as WithHighlightedMeasure,W as WithNormalizedStacks,q as WithReferenceLine,H as WithSecondaryDimension,Y as WithStackAggregateTotals,U as WithStacks,$ as __namedExportsOrder,z as default,Ye as n,qe as t};