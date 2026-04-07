import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{Jm as r,yg as i}from"./iframe-DGn8PGW2.js";import{a,d as o,o as s,p as c,u as l}from"./DemoProps-DY9_dgse.js";import{n as u,t as d}from"./PieChart-aw_T8y7Z.js";var f=n({Default:()=>g,HideLabels:()=>x,LoadingPlaceholder:()=>v,WithActiveShape:()=>b,WithCustomColor:()=>_,WithCustomLegendConfig:()=>C,WithCustomTooltipConfig:()=>S,WithFormatter:()=>y,__namedExportsOrder:()=>w,default:()=>h}),p,m,h,g,_,v,y,b,x,S,C,w,T=e((()=>{p=t(i(),1),a(),u(),m=r(),h={title:`PieChart`,component:d,tags:[`package:@ui5/webcomponents-react-charts`],args:{dimension:{accessor:`name`},measure:{accessor:`users`},dataset:l},argTypes:{dataset:{control:{disable:!0}}}},g={},_={args:{measure:{accessor:`users`,colors:[`#f00`,`green`,`var(--sapNegativeColor)`]}}},v={args:{dataset:[]}},y={args:{measure:{accessor:`users`,formatter:e=>e>200?`over 200`:`lower`},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}},render(e){let[t,n]=(0,p.useState)(1),r=e=>{let{dataIndex:t}=e.detail;t!=null&&n(t)};return(0,m.jsx)(d,{...e,chartConfig:{...e.chartConfig,activeSegment:t},onClick:r})}},b={args:{chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}},render(e){let[t,n]=(0,p.useState)(e.chartConfig.activeSegment),r=e=>{let{dataIndex:t}=e.detail;t!=null&&n(t)};return(0,p.useEffect)(()=>{n(e.chartConfig.activeSegment)},[e.chartConfig.activeSegment]),(0,m.jsx)(d,{...e,chartConfig:{...e.chartConfig,activeSegment:t},onClick:r})}},x={args:{measure:{accessor:`users`,hideDataLabel:e=>{if(e.percent<.01)return!0}},dataset:o}},S={args:c},C={args:s},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)']
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithCustomColor`,`LoadingPlaceholder`,`WithFormatter`,`WithActiveShape`,`HideLabels`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));T();export{g as Default,x as HideLabels,v as LoadingPlaceholder,b as WithActiveShape,_ as WithCustomColor,C as WithCustomLegendConfig,S as WithCustomTooltipConfig,y as WithFormatter,w as __namedExportsOrder,h as default,T as n,f as t};