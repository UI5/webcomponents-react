import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{t as i}from"./jsx-runtime-1ARNaUmP.js";import{a,d as o,o as s,p as c,u as l}from"./DemoProps-krMXZQ3V.js";import{n as u,t as d}from"./DonutChart-CX3XJLod.js";var f=n({Default:()=>g,HideLabels:()=>S,LoadingPlaceholder:()=>b,WithActiveShape:()=>T,WithCustomColor:()=>_,WithCustomLegendConfig:()=>w,WithCustomRadius:()=>y,WithCustomTooltipConfig:()=>C,WithFormatter:()=>x,WithPaddedAngle:()=>v,__namedExportsOrder:()=>E,default:()=>h}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D=e((()=>{p=t(r(),1),a(),u(),m=i(),h={title:`DonutChart`,component:d,tags:[`package:@ui5/webcomponents-react-charts`],argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:l,dimension:{accessor:`name`},measure:{accessor:`users`}}},g={},_={args:{measure:{accessor:`users`,colors:[`#f00`,`green`,`var(--sapNegativeColor)`,`black`,`yellow`,`pink`]}}},v={args:{chartConfig:{paddingAngle:5}}},y={args:{chartConfig:{innerRadius:`20%`,outerRadius:`90%`}}},b={args:{dataset:[]}},x={args:{dimension:{accessor:`name`,formatter:e=>e.slice(0,3)},measure:{accessor:`users`,formatter:e=>`${e/10}`}}},S={args:{measure:{accessor:`users`,hideDataLabel:e=>{if(e.percent<.01)return!0}},dataset:o}},C={args:c},w={args:s},T={args:{chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}},render(e){let[t,n]=(0,p.useState)(e.chartConfig.activeSegment),r=e=>{let{dataIndex:t}=e.detail;t!=null&&n(t)};return(0,p.useEffect)(()=>{n(e.chartConfig.activeSegment)},[e.chartConfig.activeSegment]),(0,m.jsx)(d,{...e,chartConfig:{...e.chartConfig,activeSegment:t},onClick:r})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)', 'black', 'yellow', 'pink']
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      paddingAngle: 5
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      innerRadius: '20%',
      outerRadius: '90%'
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    dimension: {
      accessor: 'name',
      formatter: el => el.slice(0, 3)
    },
    measure: {
      accessor: 'users',
      formatter: el => \`\${el / 10}\`
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    return <DonutChart {...args} chartConfig={{
      ...args.chartConfig,
      activeSegment
    }} onClick={handleChartClick} />;
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithCustomColor`,`WithPaddedAngle`,`WithCustomRadius`,`LoadingPlaceholder`,`WithFormatter`,`HideLabels`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`,`WithActiveShape`]}));D();export{g as Default,S as HideLabels,b as LoadingPlaceholder,T as WithActiveShape,_ as WithCustomColor,w as WithCustomLegendConfig,y as WithCustomRadius,C as WithCustomTooltipConfig,x as WithFormatter,v as WithPaddedAngle,E as __namedExportsOrder,h as default,D as n,f as t};