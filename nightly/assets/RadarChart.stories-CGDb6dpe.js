import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-BUD3sqOU.js";import{i,r as a}from"./utils-CKscj7m1.js";import{c as o,l as s}from"./hooks-NjW65OOE.js";import{t as c}from"./jsx-runtime-CFwixLRt.js";import{B as l,J as u,K as ee,W as te,_t as d,ft as f,n as p,r as m,t as h,u as g}from"./ChartContainer-D_YORGyX.js";import{a as _,d as v,i as y,m as b,s as x}from"./DemoProps-DN4z3kdx.js";import{a as S,c as C,i as w,l as T,n as E,s as D,u as ne}from"./staticProps-BDKcaSjG.js";import{i as O,n as k,r as A,t as j}from"./ChartDataLabel-rd-a_rJ9.js";import{i as M,n as N,r as P,t as F}from"./useTooltipFormatter-C0FLCVR2.js";import{n as I,t as re}from"./Placeholder-BVdA3XW_.js";var L,R,z,B,V,H=e((()=>{i(),s(),L=t(r(),1),m(),A(),T(),P(),F(),p(),k(),C(),E(),I(),R=c(),z={formatter:e=>e},B={formatter:D,opacity:.5},V=(0,L.forwardRef)((e,t)=>{let{loading:n,loadingDelay:r,dataset:i,noLegend:s,noAnimation:c,tooltipConfig:p,onDataPointClick:m,onLegendClick:_,onClick:v,style:y,className:b,slot:x,ChartPlaceholder:C,children:T,...E}=e,D={legendPosition:`bottom`,legendHorizontalAlign:`center`,dataLabel:!0,polarGridType:`circle`,resizeDebounce:250,...e.chartConfig},{dimensions:k,measures:A}=M(e.dimensions,e.measures,z,B),P=N(A),F=k[0],I=O(F?.formatter),V=F?.accessor,H=ne(_),U=(0,L.useRef)(!1),W=(0,L.useCallback)((e,t)=>{typeof v==`function`&&!U.current&&v(a(t,{payload:e?.activePayload?.[0]?.payload,activePayloads:e?.activePayload})),U.current&&=!1},[v,U.current]),G=(0,L.useCallback)((e,t)=>{t.value&&m&&(m(a({},{value:t.value,dataKey:t.dataKey,name:t.payload.label,dataIndex:t.index,payload:t.payload})),U.current=!0)},[m,U.current]),{chartConfig:K,dimensions:q,measures:J,...Y}=E;return(0,R.jsx)(h,{dataset:i,ref:t,loading:n,loadingDelay:r,Placeholder:C??re,style:y,className:b,slot:x,resizeDebounce:D.resizeDebounce,...Y,children:(0,R.jsxs)(g,{onClick:W,data:i,margin:D.margin,accessibilityLayer:D.accessibilityLayer,className:typeof m==`function`?`has-click-handler`:void 0,children:[(0,R.jsx)(u,{gridType:D.polarGridType}),(0,R.jsx)(te,{dataKey:V,tickFormatter:F?.formatter,tick:{fill:o.sapContent_LabelColor}}),(0,R.jsx)(ee,{}),A.map((e,t)=>(0,R.jsx)(l,{activeDot:{onClick:G},name:e.label??e.accessor,dataKey:e.accessor,stroke:e.color??`var(--sapChart_OrderedColor_${t%12+1})`,fill:e.color??`var(--sapChart_OrderedColor_${t%12+1})`,fillOpacity:e.opacity,label:(0,R.jsx)(j,{config:e,chartType:`radar`,position:`outside`}),isAnimationActive:!c},e.reactKey)),p?.active!==!1&&(0,R.jsx)(f,{cursor:S,formatter:P,contentStyle:w,labelFormatter:I,...p}),!s&&(0,R.jsx)(d,{verticalAlign:D.legendPosition,align:D.legendHorizontalAlign,onClick:H,...D.legendConfig}),T]})})}),V.displayName=`RadarChart`;try{V.displayName=`RadarChart`,V.__docgenInfo={description:`A radar or spider or web chart is a two-dimensional chart type designed to plot one or more series of values over multiple quantitative variables.

__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.`,displayName:`RadarChart`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/charts/dist/components/RadarChart/index.d.ts`,methods:[],props:{dimensions:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/RadarChart/index.d.ts`,name:`RadarChartProps`}],description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties*
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:`dimensions`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/RadarChart/index.d.ts`,name:`RadarChartProps`},required:!0,tags:{},type:{name:`IChartDimension[]`}},measures:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/RadarChart/index.d.ts`,name:`RadarChartProps`}],description:"An array of config objects. Each object is defining one radar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this radar should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this radar.\n- `DataLabel`: a custom component to be used for the data label\n- `opacity`: radar opacity, defaults to `0.5`",name:`measures`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/RadarChart/index.d.ts`,name:`RadarChartProps`},required:!0,tags:{},type:{name:`MeasureConfig[]`}},loading:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Flag whether the chart should display a loading indicator.

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
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}}},tags:{}}}catch{}})),U=n({Default:()=>G,LoadingPlaceholder:()=>Y,Polygon:()=>J,WithCustomColor:()=>K,WithCustomLegendConfig:()=>Z,WithCustomTooltipConfig:()=>X,WithDataLabels:()=>q,__namedExportsOrder:()=>Q,default:()=>W}),W,G,K,q,J,Y,X,Z,Q,$=e((()=>{_(),H(),W={title:`RadarChart`,component:V,tags:[`package:@ui5/webcomponents-react-charts`],args:{dimensions:[{accessor:`name`,formatter:e=>`${e} 2019`}],measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString()},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`}],dataset:y}},G={},K={args:{dimensions:[{accessor:`name`}],measures:[{accessor:`users`,color:`red`}],dataset:v}},q={args:{dimensions:[{accessor:`name`}],measures:[{accessor:`users`},{accessor:`sessions`},{accessor:`volume`}]}},J={args:{dimensions:[{accessor:`name`,formatter:e=>e.slice(0,3)}],measures:[{accessor:`users`,formatter:e=>`${e/10}`,label:`number of users`},{accessor:`sessions`},{accessor:`volume`}],chartConfig:{polarGridType:`polygon`}}},Y={args:{dataset:[]}},X={args:b},Z={args:x},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
      polarGridType: 'polygon'
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithCustomColor`,`WithDataLabels`,`Polygon`,`LoadingPlaceholder`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));$();export{G as Default,Y as LoadingPlaceholder,J as Polygon,K as WithCustomColor,Z as WithCustomLegendConfig,X as WithCustomTooltipConfig,q as WithDataLabels,Q as __namedExportsOrder,W as default,$ as n,U as t};