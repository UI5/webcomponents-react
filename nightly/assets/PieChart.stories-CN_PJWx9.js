import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{Wg as r,mh as i}from"./iframe-BULObFlw.js";import{a,d as o,f as s,m as c,o as l,s as u}from"./DemoProps-BAffRiAl.js";import{n as d,t as f}from"./PieChart-ZU4f4T9c.js";var p=e({Default:()=>_,HideLabels:()=>C,KeyboardNavigation:()=>S,LoadingPlaceholder:()=>y,WithActiveShape:()=>x,WithCustomColor:()=>v,WithCustomLegendConfig:()=>T,WithCustomTooltipConfig:()=>w,WithFormatter:()=>b,__namedExportsOrder:()=>E,default:()=>g}),m,h,g,_,v,y,b,x,S,C,w,T,E,D=n((()=>{m=t(r(),1),a(),d(),h=i(),g={title:`PieChart`,component:f,tags:[`package:@ui5/webcomponents-react-charts`],args:{dimension:{accessor:`name`},measure:{accessor:`users`},dataset:o}},_={},v={args:{measure:{accessor:`users`,colors:[`#f00`,`green`,`var(--sapNegativeColor)`]}}},y={args:{dataset:[]}},b={args:{measure:{accessor:`users`,formatter:e=>e>200?`over 200`:`lower`},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}},render(e){let[t,n]=(0,m.useState)(1),r=e=>{let{dataIndex:t}=e.detail;t!=null&&n(t)};return(0,h.jsx)(f,{...e,chartConfig:{...e.chartConfig,activeSegment:t},onClick:r})}},x={args:{chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}},render(e){let[t,n]=(0,m.useState)(e.chartConfig.activeSegment),r=e=>{let{dataIndex:t}=e.detail;t!=null&&n(t)};return(0,m.useEffect)(()=>{n(e.chartConfig.activeSegment)},[e.chartConfig.activeSegment]),(0,h.jsx)(f,{...e,chartConfig:{...e.chartConfig,activeSegment:t},onClick:r})}},S=l(f),C={args:{measure:{accessor:`users`,hideDataLabel:e=>{if(e.percent<.01)return!0}},dataset:s}},w={args:c},T={args:u},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)']
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      formatter: d => d > 200 ? 'over 200' : 'lower'
    },
    chartConfig: {
      activeSegment: 1,
      showActiveSegmentDataLabel: true
    }
  },
  render(args) {
    const [activeSegment, setActiveSegment] = useState(1);
    const handleChartClick = e => {
      const {
        dataIndex
      } = e.detail;
      if (dataIndex != null) {
        setActiveSegment(dataIndex);
      }
    };
    return <PieChart {...args} chartConfig={{
      ...args.chartConfig,
      activeSegment
    }} onClick={handleChartClick} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      activeSegment: 1,
      showActiveSegmentDataLabel: true
    }
  },
  render(args) {
    const [activeSegment, setActiveSegment] = useState(args.chartConfig.activeSegment);
    const handleChartClick = e => {
      const {
        dataIndex
      } = e.detail;
      if (dataIndex != null) {
        setActiveSegment(dataIndex);
      }
    };
    useEffect(() => {
      setActiveSegment(args.chartConfig.activeSegment);
    }, [args.chartConfig.activeSegment]);
    return <PieChart {...args} chartConfig={{
      ...args.chartConfig,
      activeSegment
    }} onClick={handleChartClick} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`keyboardNavigationStory(PieChart)`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      hideDataLabel: chartConfig => {
        if (chartConfig.percent < 0.01) {
          return true;
        }
      }
    },
    dataset: simpleDataSetWithSmallValues
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithCustomColor`,`LoadingPlaceholder`,`WithFormatter`,`WithActiveShape`,`KeyboardNavigation`,`HideLabels`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));D();export{_ as Default,C as HideLabels,S as KeyboardNavigation,y as LoadingPlaceholder,x as WithActiveShape,v as WithCustomColor,T as WithCustomLegendConfig,w as WithCustomTooltipConfig,b as WithFormatter,E as __namedExportsOrder,g as default,D as n,p as t};