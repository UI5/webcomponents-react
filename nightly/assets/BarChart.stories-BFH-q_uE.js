import{n as e,r as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-BWPDF9mI.js";import{i as r,r as i}from"./withWebComponent-Dcate6i_.js";import{i as a,r as ee}from"./utils-BN9p4kC0.js";import{t as o}from"./jsx-runtime-BB9-612F.js";import{n as s,t as c}from"./ThemingParameters-Dik62C4n.js";import{n as te,t as l}from"./useIsRTL-B3MofG_c.js";import{Ct as u,M as ne,N as re,St as ie,a as ae,b as oe,gt as d,ht as se,mt as ce,n as le,o as ue,pt as de,t as fe,v as pe,x as f,y as me}from"./ChartContainer-CIoMhqxM.js";import{a as he,c as ge,d as _e,f as p,i as m,l as ve,m as h,n as g,o as ye,p as be,r as xe,s as _,t as Se,u as v}from"./YAxisTicks-C8jXvKhU.js";import{i as y,n as Ce,r as we,t as Te}from"./useCancelAnimationFallback-D9DZ0_eN.js";import{a as Ee,d as b,i as x,m as S,p as C,s as w,t as T,u as E}from"./DemoProps-Dy4zi8p1.js";import{a as De,c as D,d as O,i as Oe,l as k,n as A,r as ke,s as j,t as Ae,u as je}from"./staticProps-CvVJVc4Y.js";import{i as Me,n as Ne,r as Pe,t as Fe}from"./ChartDataLabel-DIpwudu6.js";import{a as Ie,c as Le,i as Re,n as ze,o as M,r as Be,s as N,t as P}from"./useTooltipFormatter-DojOUYJE.js";import{n as Ve,t as He}from"./useOnClickInternal-Cn2Eb3tv.js";import{i as Ue,n as We,r as Ge,t as Ke}from"./StackedTooltipContent-C5Q591dj.js";import{n as F,t as qe}from"./react-content-loader.es-CX7UZSFx.js";var Je,Ye,Xe;function Ze(){return(Ze=e((()=>{Je=n(),Ye=O(),D(),N(),Xe=(e,t,n=``)=>(0,Je.useMemo)(()=>{let r=Array(t.length).fill(0),i=0;return e instanceof Array&&t&&(e.map(e=>t.map(t=>t.formatter((0,Ye.getValueByDataKey)(e,t.accessor,``)))).forEach(e=>{e.forEach((e,t)=>{r[t]=Math.max(M(e),r[t])})}),r=r.map(e=>Math.min(200,e)),i=r.reduce((e,t)=>e+t,0)),n===`middle`?[r,{width:`auto`}]:[r,{marginLeft:i,maxWidth:`calc(100% - ${i+8}px)`}]},[e,t,n])})))()}var I,Qe;function $e(){return($e=e((()=>{s(),F(),I=o(),Qe=()=>(0,I.jsxs)(qe,{viewBox:`0 0 165 145`,preserveAspectRatio:`xMidYMid meet`,width:`100%`,height:`100%`,speed:2,backgroundColor:c.sapContent_ImagePlaceholderBackground,foregroundColor:c.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:c.sapContent_DisabledOpacity,children:[(0,I.jsx)(`rect`,{x:`20`,y:`10`,width:`1`,height:`135`}),(0,I.jsx)(`rect`,{x:`20`,y:`20`,width:`85`,height:`15`}),(0,I.jsx)(`rect`,{x:`20`,y:`40`,width:`117`,height:`15`}),(0,I.jsx)(`rect`,{x:`20`,y:`60`,width:`67`,height:`15`}),(0,I.jsx)(`rect`,{x:`20`,y:`80`,width:`75`,height:`15`}),(0,I.jsx)(`rect`,{x:`20`,y:`100`,width:`125`,height:`15`}),(0,I.jsx)(`rect`,{x:`20`,y:`120`,width:`60`,height:`15`})]})})))()}var L,et,R,tt,nt,z,B;function rt(){return(rt=e((()=>{l(),i(),a(),s(),L=n(),me(),y(),f(),h(),ce(),re(),u(),ue(),d(),p(),v(),et=O(),Te(),_(),Pe(),k(),Ze(),he(),He(),Be(),P(),le(),Ne(),D(),Ue(),We(),A(),N(),m(),g(),$e(),R=o(),tt={formatter:j},nt={formatter:j,opacity:1},z=e=>({payload:t})=>(0,et.getValueByDataKey)(t,e),B=(0,L.forwardRef)((e,t)=>{let{loading:n,loadingDelay:i,dataset:a,noLegend:o,noAnimation:s,tooltipConfig:l,onDataPointClick:u,onLegendClick:re,onClick:d,style:ce,className:le,slot:ue,syncId:f,ChartPlaceholder:me,children:he,alignLabels:p=`insideRight`,...m}=e,h={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:c.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:`bottom`,legendHorizontalAlign:`left`,barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...e.chartConfig},g=h.referenceLine,{dimensions:_,measures:v,stackGroups:y,lastInStack:Te}=Re(e.dimensions,e.measures,tt,nt,h.showStackAggregateTotals),Ee=ze(v),b=_[0],{primaryMeasure:x,secondaryMeasure:S}=Le(v,h?.secondYAxis?.dataKey),C=v.map(({accessor:e})=>e),w=h.secondYAxis?C.findIndex(e=>e===h.secondYAxis?.dataKey):0,[T,E]=r(t),D=je(re),O=Me(b?.formatter),k=(0,L.useCallback)((e,t,n)=>{if(e&&u){let r=e.value.length?e.value[1]-e.value[0]:e.value;u(ee(n,{dataKey:Object.keys(e).filter(e=>e!==`value`).find(t=>e[t]===r),value:r,payload:e.payload,dataIndex:t}))}},[u]),A=Ve(d),j=a?.length>30,Ne=b?.accessor,[Pe,M]=Xe(a,_,h.legendPosition),Be=ge(h.margin,h.zoomingTool),[N]=ye(E,1),P=te(E),{isMounted:He,handleBarAnimationStart:Ue,handleBarAnimationEnd:We}=Ce(s),F=Object.keys(y),qe=h.showStackAggregateTotals&&F.length===1&&v.every(e=>e.stackId!=null),{chartConfig:Je,dimensions:Ye,measures:Ze,...I}=m;return(0,R.jsx)(fe,{dataset:a,loading:n,loadingDelay:i,Placeholder:me??Qe,ref:T,style:ce,className:le,slot:ue,resizeDebounce:h.resizeDebounce,...I,children:(0,R.jsxs)(we,{syncId:f,onClick:A,stackOffset:`sign`,margin:Be,layout:`vertical`,data:a,barGap:h.barGap,accessibilityLayer:h.accessibilityLayer,className:typeof u==`function`||typeof d==`function`?`has-click-handler`:void 0,children:[(0,R.jsx)(be,{vertical:h.gridVertical,horizontal:h.gridHorizontal,stroke:h.gridStroke}),h.xAxisVisible&&(0,R.jsx)(_e,{interval:0,type:`number`,tick:(0,R.jsx)(xe,{formatter:x?.formatter}),axisLine:h.xAxisVisible,tickLine:ke,height:N,reversed:P,...h.xAxisConfig}),h.secondYAxis?.dataKey&&(0,R.jsx)(_e,{dataKey:h.secondYAxis.dataKey,axisLine:{stroke:h.secondYAxis.color??`var(--sapChart_OrderedColor_${w%12+1})`},tick:(0,R.jsx)(xe,{formatter:S?.formatter,secondYAxisConfig:{color:h.secondYAxis.color??`var(--sapChart_OrderedColor_${w%12+1})`}}),tickLine:{stroke:h.secondYAxis.color??`var(--sapChart_OrderedColor_${w%12+1})`},label:{value:h.secondYAxis.name,offset:2,angle:90,position:`center`},orientation:`top`,interval:0,xAxisId:`secondary`,type:`number`,...h.secondXAxisConfig}),h.yAxisVisible&&_.map((e,t)=>(0,R.jsx)(ve,{interval:e?.interval??`preserveStartEnd`,minTickGap:j?void 0:-10,type:`category`,dataKey:e.accessor,tick:(0,R.jsx)(Se,{formatter:e?.formatter}),tickLine:t<1,axisLine:t<1,yAxisId:t,width:Pe[t],allowDuplicatedCategory:t===0,orientation:P?`right`:`left`,...h.yAxisConfig},e.reactKey)),He&&v.map((e,t)=>(0,R.jsxs)(pe,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:`monotone`,dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${t%12+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${t%12+1})`,barSize:e.width,onClick:k,isAnimationActive:!s,onAnimationStart:Ue,onAnimationEnd:We,children:[(0,R.jsx)(ne,{data:a,valueAccessor:z(e.accessor),content:(0,R.jsx)(Fe,{config:e,chartType:`bar`,position:p})}),h.showStackAggregateTotals&&e.stackId&&typeof e.accessor==`string`&&Te.has(e.accessor)&&(0,R.jsx)(ne,{data:a,valueAccessor:z(e.accessor),position:`right`,content:(0,R.jsx)(Ge,{stackAccessors:y[e.stackId],dataset:a})}),a.map((n,r)=>(0,R.jsx)(de,{fill:Ie(e,n,t),stroke:Ie(e,n,t)},r))]},e.reactKey)),!o&&(0,R.jsx)(ie,{verticalAlign:h.legendPosition,align:h.legendHorizontalAlign,onClick:D,wrapperStyle:M,...h.legendConfig}),g&&(0,R.jsx)(ae,{...g,stroke:g?.color??g?.stroke,x:g?.value??g?.x,label:g?.label}),l?.active!==!1&&(0,R.jsx)(se,{cursor:De,formatter:Ee,contentStyle:Oe,labelFormatter:O,...l,...qe&&{content:(0,R.jsx)(Ke,{stackAccessors:y[F[0]],totalFormatter:h.stackAggregateTotalFormatter})}}),!!h.zoomingTool&&(0,R.jsx)(oe,{dataKey:Ne,tickFormatter:b?.formatter,...Ae,...typeof h.zoomingTool==`object`?h.zoomingTool:{}}),he]})})}),B.displayName=`BarChart`;try{B.displayName=`BarChart`,B.__docgenInfo={description:`A \`BarChart\` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.

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
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}}},tags:{}}}catch{}})))()}var it=t({Default:()=>V,LoadingPlaceholder:()=>K,WithCustomColor:()=>H,WithCustomLegendConfig:()=>$,WithCustomTooltipConfig:()=>Q,WithCustomTooltipTotal:()=>Z,WithDataLabels:()=>W,WithFormatter:()=>G,WithHighlightedMeasure:()=>J,WithNormalizedStacks:()=>Y,WithReferenceLine:()=>q,WithSecondaryDimension:()=>U,WithStackAggregateTotalsAndTooltip:()=>X,__namedExportsOrder:()=>st,default:()=>ot}),at,ot,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,st;function ct(){return(ct=e((()=>{Ee(),rt(),at=o(),ot={title:`BarChart`,component:B,tags:[`package:@ui5/webcomponents-react-charts`],argTypes:{children:{control:{disable:!0}}},args:{dataset:x,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString(),opacity:.6},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`}]}},V={},H={args:{measures:[{accessor:`users`,color:`red`}],dataset:b}},U={args:{dimensions:[{accessor:`name`},{accessor:`dimension`}],measures:[{accessor:`users`,color:`red`}],dataset:E}},W={args:{measures:[{accessor:`users`},{accessor:`sessions`},{accessor:`volume`}]}},G={args:{dimensions:[{accessor:`name`,formatter:e=>e.slice(0,3)}],measures:[{accessor:`users`,formatter:e=>`${e/10}`,label:`number of users`},{accessor:`sessions`},{accessor:`volume`}],chartConfig:{zoomingTool:!0}}},K={args:{dataset:[]}},q={args:{measures:[{accessor:`users`,stackId:`A`},{accessor:`sessions`,stackId:`A`},{accessor:`volume`}],chartConfig:{referenceLine:{color:`red`,label:`MAX`,value:650}}}},J={args:{measures:[{accessor:`users`,stackId:`A`},{accessor:`sessions`,stackId:`A`},{accessor:`volume`,highlightColor:(e,t,n)=>{if(n.name===`February`)return`red`}}]}},Y={args:C},X={name:`With Stack Aggregate Totals`,args:{dataset:x.slice(0,3),measures:[{accessor:`users`,stackId:`A`,label:`Users`},{accessor:`sessions`,stackId:`A`,label:`Active Sessions`}],chartConfig:{showStackAggregateTotals:!0}}},Z={args:{dataset:x.slice(0,5),measures:[{accessor:`users`,stackId:`A`,label:`Users`},{accessor:`sessions`,stackId:`A`,label:`Active Sessions`},{accessor:`volume`,label:`Vol.`}],chartConfig:{showStackAggregateTotals:!0},tooltipConfig:{content:(0,at.jsx)(T,{})}}},Q={args:S},$={args:w},st=[`Default`,`WithCustomColor`,`WithSecondaryDimension`,`WithDataLabels`,`WithFormatter`,`LoadingPlaceholder`,`WithReferenceLine`,`WithHighlightedMeasure`,`WithNormalizedStacks`,`WithStackAggregateTotalsAndTooltip`,`WithCustomTooltipTotal`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
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
    }],
    chartConfig: {
      zoomingTool: true
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...$.parameters?.docs?.source}}}})))()}export{$ as a,W as c,Y as d,q as f,ct as h,H as i,G as l,X as m,V as n,Q as o,U as p,K as r,Z as s,it as t,J as u};