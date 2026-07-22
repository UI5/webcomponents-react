import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-BUD3sqOU.js";import{h as i,i as a,r as o}from"./utils-CKscj7m1.js";import{a as s,c,l,r as u,t as d}from"./hooks-NjW65OOE.js";import{t as f}from"./jsx-runtime-CFwixLRt.js";import{n as p,t as m}from"./clsx-DtTNkXd0.js";import{A as h,M as g,S as ee,_t as _,b as v,c as y,ft as te,n as b,r as x,t as ne,v as re,w as ie}from"./ChartContainer-D_YORGyX.js";import{a as ae,c as oe,l as S,m as se,s as ce}from"./DemoProps-DN4z3kdx.js";import{a as le,c as ue,i as de,l as C,n as w,o as fe,r as pe,s as T,u as me}from"./staticProps-BDKcaSjG.js";import{a as E,c as he,i as D,n as O,o as ge,r as _e,s as k,t as ve}from"./YAxisTicks-KjBIvRcP.js";import{i as ye,n as be,r as A,t as j}from"./useTooltipFormatter-C0FLCVR2.js";import{n as M,t as N}from"./react-content-loader.es-2jDyrhHm.js";import{n as xe,t as P}from"./useLongestYAxisLabel-BZPvuWzD.js";var F,I,L=e((()=>{l(),M(),F=f(),I=e=>(0,F.jsxs)(N,{viewBox:`0 0 165 145`,preserveAspectRatio:`xMidYMid meet`,width:`100%`,height:`100%`,speed:2,backgroundColor:c.sapContent_ImagePlaceholderBackground,foregroundColor:c.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:c.sapContent_DisabledOpacity,...e,children:[(0,F.jsx)(`rect`,{x:`10`,y:`135`,width:`135`,height:`1`}),(0,F.jsx)(`circle`,{cx:`20`,cy:`90`,r:`2`}),(0,F.jsx)(`circle`,{cx:`40`,cy:`58`,r:`3`}),(0,F.jsx)(`circle`,{cx:`60`,cy:`108`,r:`14`}),(0,F.jsx)(`circle`,{cx:`85`,cy:`87`,r:`8`}),(0,F.jsx)(`circle`,{cx:`105`,cy:`50`,r:`6`}),(0,F.jsx)(`circle`,{cx:`125`,cy:`115`,r:`4`}),(0,F.jsx)(`circle`,{cx:`78`,cy:`58`,r:`10`}),(0,F.jsx)(`circle`,{cx:`28`,cy:`115`,r:`4`})]});try{I.displayName=`ScatterChartPlaceholder`,I.__docgenInfo={description:``,displayName:`ScatterChartPlaceholder`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/charts/dist/components/ScatterChart/Placeholder.d.ts`,methods:[],props:{},tags:{}}}catch{}})),R,z,B=e((()=>{R=`@layer ui5-webcomponents-react{._scatterchart_174ln_1{g:focus,path:focus{outline:none}.recharts-scatter-symbol:focus path,.recharts-scatter-symbol[data-point-focused] path{stroke:var(--sapContent_FocusColor);stroke-width:calc(var(--sapContent_FocusWidth)*2);paint-order:stroke}}}`,z={scatterchart:`_scatterchart_174ln_1`}}));function V(e,t){return typeof t==`function`?t(e):e[t]}function Se(e,t){let n=[];e.datasetLabel&&n.push(e.datasetLabel);for(let r of t){let t=V(e.raw,r.accessor),i=r.formatter?r.formatter(t):String(t??``),a=r.label||(typeof r.accessor==`string`?r.accessor:r.axis);n.push(`${a}: ${i}`)}return n.join(`, `)}function Ce({chartRef:e,enabled:t,dataset:n,measures:r,onSelect:i,consumerOnBlur:a,consumerOnFocus:o,consumerOnKeyDownCapture:s}){let c=(0,H.useRef)(-1),l=(0,H.useRef)(!1),u=(0,H.useId)(),d=r.find(e=>e.axis===`x`),f=(0,H.useMemo)(()=>{if(!n?.length||!d)return[];let e=[];return n.forEach((t,n)=>{t.data?.forEach((r,i)=>{e.push({datasetIndex:n,pointIndex:i,datasetLabel:t.label??``,raw:r})})}),e.sort((e,t)=>{let n=Number(V(e.raw,d.accessor))||0,r=Number(V(t.raw,d.accessor))||0;return n===r?e.datasetIndex-t.datasetIndex:n-r}),e},[n,d]),p=(0,H.useRef)(f);(0,H.useEffect)(()=>{p.current=f,c.current=-1},[f]),(0,H.useEffect)(()=>{if(!t)return;let n=e.current;if(!n)return;let i=[];if(n.querySelectorAll(`.recharts-scatter`).forEach(e=>{i.push(Array.from(e.querySelectorAll(`:scope .recharts-scatter-symbol`)))}),i.length===0)return;for(let e=0;e<f.length;e++){let t=f[e],n=i[t.datasetIndex]?.[t.pointIndex];n&&(n.setAttribute(`id`,`${u}-point-${e}`),n.setAttribute(`role`,`img`),n.setAttribute(`aria-label`,Se(t,r)))}let a=c.current;if(a>=0&&n.contains(document.activeElement)){let e=n.querySelector(`#${CSS.escape(u)}-point-${a}`);e&&(e.setAttribute(`data-point-focused`,``),n.setAttribute(`aria-activedescendant`,`${u}-point-${a}`))}});let m=(0,H.useCallback)(t=>{let n=e.current;if(!n)return;n.querySelector(`.recharts-scatter-symbol[data-point-focused]`)?.removeAttribute(`data-point-focused`),c.current=t;let r=n.querySelector(`#${CSS.escape(u)}-point-${t}`);r&&(r.setAttribute(`data-point-focused`,``),n.setAttribute(`aria-activedescendant`,`${u}-point-${t}`))},[u,e]),h=(0,H.useCallback)(()=>{let t=e.current;t&&(t.querySelector(`.recharts-scatter-symbol[data-point-focused]`)?.removeAttribute(`data-point-focused`),t.removeAttribute(`aria-activedescendant`))},[e]),g=(0,H.useCallback)(e=>{let t=p.current;if(t.length)switch(e.key){case`ArrowRight`:case`ArrowDown`:{e.preventDefault();let n=Math.min(c.current+1,t.length-1);m(n);break}case`ArrowLeft`:case`ArrowUp`:{e.preventDefault();let t=Math.max(c.current-1,0);m(t);break}case`Enter`:e.preventDefault(),c.current>=0&&typeof i==`function`&&i(t[c.current],e);break;case` `:e.preventDefault(),l.current=!0;break}},[m,i]),ee=(0,H.useCallback)(e=>{if(e.key===` `&&l.current){l.current=!1;let t=p.current;c.current>=0&&typeof i==`function`&&i(t[c.current],e)}},[i]),_=(0,H.useCallback)(e=>{if(e.target===e.currentTarget){let e=c.current>=0?c.current:0;m(e)}typeof o==`function`&&o(e)},[m,o]),v=(0,H.useCallback)(e=>{e.currentTarget.contains(e.relatedTarget)||(h(),l.current=!1),typeof a==`function`&&a(e)},[h,a]),y=(0,H.useCallback)(e=>{g(e),typeof s==`function`&&s(e)},[g,s]),te=(0,H.useCallback)((e,t)=>{let n=p.current.findIndex(n=>n.datasetIndex===e&&n.pointIndex===t);n>=0&&m(n)},[m]);return t?f.length===0?{containerProps:{tabIndex:0,"aria-roledescription":`chart`},handlePointClick:void 0}:{containerProps:{tabIndex:0,role:`application`,"aria-roledescription":`chart`,onKeyDownCapture:y,onKeyUp:ee,onBlur:v,onFocus:_},handlePointClick:te}:{containerProps:{},handlePointClick:void 0}}var H,we=e((()=>{H=t(r(),1)})),U,W,Te,G,Ee=e((()=>{d(),a(),l(),p(),U=t(r(),1),x(),k(),C(),P(),E(),A(),j(),b(),ue(),w(),D(),O(),L(),B(),we(),W=f(),Te={formatter:T},G=(0,U.forwardRef)((e,t)=>{let{dataset:n,loading:r,loadingDelay:a,noLegend:l,noAnimation:d,tooltipConfig:f,onDataPointClick:p,onLegendClick:b,onClick:x,style:ae,className:oe,slot:S,ChartPlaceholder:se,children:ce,...ue}=e,C={yAxisVisible:!1,xAxisVisible:!0,gridStroke:c.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:`bottom`,legendHorizontalAlign:`left`,zoomingTool:!1,resizeDebounce:250,...e.chartConfig},{referenceLine:w,referenceLineX:T}=C,{measures:E}=ye([],e.measures,{},Te),D=be(E),[O,k]=i(t),A=(0,U.useRef)(!1),j=me(b),M=(0,U.useCallback)((e,t)=>{typeof x==`function`&&!A.current&&x(o(t,{payload:e?.activePayload?.[0]?.payload,activePayloads:e?.activePayload})),A.current&&=!1},[x,A.current]),N=(0,U.useCallback)((e,t,n)=>{e&&p&&(p(o(n,{value:e.node,dataKey:e.zAxis.dataKey,dataIndex:t,payload:e.payload})),A.current=!0)},[p,A.current]),P=n?.length>30,F=E.find(({axis:e})=>e===`x`),L=E.find(({axis:e})=>e===`y`),B=E.find(({axis:e})=>e===`z`),[V,Se]=xe(n?.[0]?.data,[L],C.legendPosition),H=ge(k,1),we=he(C.margin,C.zoomingTool),{chartConfig:Ee,measures:De,onBlur:K,onFocus:q,onKeyDownCapture:J,...Y}=ue,X=s(k);u(R,G.displayName);let{containerProps:Z,handlePointClick:Q}=Ce({chartRef:k,enabled:!!C.accessibilityLayer,dataset:n??[],measures:E,consumerOnBlur:K,consumerOnFocus:q,consumerOnKeyDownCapture:J,onSelect:(0,U.useCallback)((e,t)=>{typeof p==`function`&&p(o(t,{value:e.raw,dataIndex:e.pointIndex,payload:e.raw}))},[p])});return(0,W.jsx)(ne,{dataset:n,loading:r,loadingDelay:a,Placeholder:se??I,ref:O,style:ae,className:oe,slot:S,resizeDebounce:C.resizeDebounce,...Z,...Y,children:(0,W.jsxs)(y,{onClick:M,margin:we,className:m(typeof p==`function`?`has-click-handler`:void 0,z.scatterchart),children:[(0,W.jsx)(h,{vertical:C.gridVertical,horizontal:C.gridHorizontal,stroke:C.gridStroke}),C.xAxisVisible&&(0,W.jsx)(v,{type:`number`,name:F?.label,dataKey:F?.accessor,xAxisId:0,interval:F?.interval??(P?`preserveStart`:0),tick:(0,W.jsx)(_e,{formatter:F?.formatter}),padding:fe,height:H[0],reversed:X,label:F?.label?{value:F?.label,dy:15,position:`insideRight`}:0},typeof F?.accessor==`function`?F?.label:F?.accessor),(0,W.jsx)(re,{label:L?.label?{value:L?.label,angle:-90,position:X?`insideRight`:`insideLeft`}:null,type:`number`,name:L?.label,axisLine:C.yAxisVisible,tickLine:pe,dataKey:L?.accessor,interval:0,tick:(0,W.jsx)(ve,{formatter:L?.formatter}),width:L?.label?V+10:V,orientation:X===!0?`right`:`left`},typeof L?.accessor==`function`?L?.label:L?.accessor),(0,W.jsx)(ie,{name:B?.label,dataKey:B?.accessor,range:[0,5e3]},typeof B?.accessor==`function`?B?.label:B?.accessor),n?.map((e,t)=>(0,W.jsx)(ee,{className:typeof p==`function`?`has-click-handler`:void 0,onMouseDown:(e,n,r)=>{N(e,n,r),Q?.(t,n)},opacity:e.opacity,data:e?.data,name:e?.label,fill:e?.color??`var(--sapChart_OrderedColor_${t%12+1})`,isAnimationActive:!d&&!C.accessibilityLayer},e?.label)),!l&&(0,W.jsx)(_,{verticalAlign:C.legendPosition,align:C.legendHorizontalAlign,onClick:j,wrapperStyle:Se,...C.legendConfig}),w&&(0,W.jsx)(g,{...w,stroke:w?.color??w?.stroke,y:w?.value??w?.y,label:w?.label}),T&&(0,W.jsx)(g,{...T,stroke:T?.color??T?.stroke,x:T?.value??T?.x,label:T?.label}),f?.active!==!1&&(0,W.jsx)(te,{cursor:le,formatter:D,contentStyle:de,...f}),ce]})})}),G.displayName=`ScatterChart`;try{G.displayName=`ScatterChart`,G.__docgenInfo={description:`
A \`ScatterChart\` is a data visualization that displays multiple circles (bubbles) in a two-dimensional plot.

Most commonly, a scatter chart displays the values of three numeric variables,where each observation's data is
shown by a circle, while the horizontal and vertical positions of the bubble show the values of two other variables.

__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.`,displayName:`ScatterChart`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/charts/dist/components/ScatterChart/index.d.ts`,methods:[],props:{dataset:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/ScatterChart/index.d.ts`,name:`ScatterChartProps`}],description:`An array of dataset objects. Each object defines a dataset which is displayed.

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
</code>`,name:`dataset`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/ScatterChart/index.d.ts`,name:`ScatterChartProps`},required:!1,tags:{},type:{name:`ScatterDataObject[]`}},measures:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/ScatterChart/index.d.ts`,name:`ScatterChartProps`}],description:`An array of config objects. Each object is defining one axis in the chart.

**Required properties**
 - \`accessor\`: string containing the path to the dataset key this line should display. Supports object structures by using <code>'parent.child'</code>.
    Can also be a getter.
 - \`axis\`: string containing definition of axis. Must be x, y or z data to the axis.

**Optional properties**
 - \`label\`: Label to display in tooltips. Falls back to the <code>accessor</code> if not present.
 - \`formatter\`: function will be called for each data label and allows you to format it according to your needs. Also addresses labels of axis.`,name:`measures`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/ScatterChart/index.d.ts`,name:`ScatterChartProps`},required:!0,tags:{},type:{name:`[MeasureConfig, MeasureConfig, MeasureConfig, ...MeasureConfig[]]`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:`children`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Fired when clicked anywhere in the chart.`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void`}},loading:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Flag whether the chart should display a loading indicator.

This can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a \`BusyIndicator\` on top of the chart (in case the chart has already some data to display).`,name:`loading`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},loadingDelay:{defaultValue:{value:`1000`},declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:`loadingDelay`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{default:`1000`},type:{name:`number`}},noAnimation:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"`noAnimation` disables all chart animations when set to `true`.",name:`noAnimation`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},syncId:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:`syncId`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`string`}},noLegend:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:`noLegend`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},onDataPointClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:`onDataPointClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`(event: CustomEvent<any>) => void`}},onLegendClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.`,name:`onLegendClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{param:`event`},type:{name:`(event: CustomEvent<any>) => void`}},chartConfig:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:`chartConfig`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`IScatterChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }`}},tooltipConfig:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:`tooltipConfig`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`TooltipProps<string | number | (string | number)[], string | number>`}},ChartPlaceholder:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
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
\`\`\``}}]}}},tags:{}}}catch{}})),De=n({Default:()=>q,LoadingPlaceholder:()=>X,WithAccessibilityLayer:()=>Y,WithCustomColor:()=>J,WithCustomLegendConfig:()=>Q,WithCustomTooltipConfig:()=>Z,__namedExportsOrder:()=>$,default:()=>K}),K,q,J,Y,X,Z,Q,$,Oe=e((()=>{ae(),Ee(),K={title:`ScatterChart`,component:G,argTypes:{children:{control:{disable:!0}}},tags:[`package:@ui5/webcomponents-react-charts`],args:{dataset:S,measures:[{accessor:`users`,label:`Users`,axis:`x`},{accessor:`sessions`,label:`Sessions`,formatter:e=>`${e}k`,axis:`y`},{accessor:`volume`,axis:`z`}]}},q={},J={args:{dataset:oe,measures:[{accessor:`users`,label:`Users`,axis:`x`},{accessor:`sessions`,label:`Sessions`,axis:`y`},{accessor:`volume`,axis:`z`}]}},Y={args:{chartConfig:{accessibilityLayer:!0}}},X={args:{dataset:[]}},Z={args:se},Q={args:ce},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      accessibilityLayer: true
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithCustomColor`,`WithAccessibilityLayer`,`LoadingPlaceholder`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));Oe();export{q as Default,X as LoadingPlaceholder,Y as WithAccessibilityLayer,J as WithCustomColor,Q as WithCustomLegendConfig,Z as WithCustomTooltipConfig,$ as __namedExportsOrder,K as default,Oe as n,De as t};