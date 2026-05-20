import{a as e,c as t,i as n}from"./preload-helper-DbRxMUml.js";import{Fm as r,ng as i}from"./iframe-cfOv__xb.js";import{a,d as o,f as s,m as c,o as l,s as u}from"./DemoProps-Bap25hHh.js";import{n as d,t as f}from"./DonutChart-B3CBBX0q.js";var p=e({Default:()=>_,HideLabels:()=>T,KeyboardNavigation:()=>w,LoadingPlaceholder:()=>x,WithActiveShape:()=>C,WithCustomColor:()=>v,WithCustomLegendConfig:()=>D,WithCustomRadius:()=>b,WithCustomTooltipConfig:()=>E,WithFormatter:()=>S,WithPaddedAngle:()=>y,__namedExportsOrder:()=>O,default:()=>g}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k=n((()=>{m=t(i(),1),a(),d(),h=r(),g={title:`DonutChart`,component:f,tags:[`package:@ui5/webcomponents-react-charts`],argTypes:{children:{control:{disable:!0}}},args:{dataset:o,dimension:{accessor:`name`},measure:{accessor:`users`}}},_={},v={args:{measure:{accessor:`users`,colors:[`#f00`,`green`,`var(--sapNegativeColor)`,`black`,`yellow`,`pink`]}}},y={args:{chartConfig:{paddingAngle:5}}},b={args:{chartConfig:{innerRadius:`20%`,outerRadius:`90%`}}},x={args:{dataset:[]}},S={args:{dimension:{accessor:`name`,formatter:e=>e.slice(0,3)},measure:{accessor:`users`,formatter:e=>`${e/10}`}}},C={args:{chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}},render(e){let[t,n]=(0,m.useState)(e.chartConfig.activeSegment),r=e=>{let{dataIndex:t}=e.detail;t!=null&&n(t)};return(0,m.useEffect)(()=>{n(e.chartConfig.activeSegment)},[e.chartConfig.activeSegment]),(0,h.jsx)(f,{...e,chartConfig:{...e.chartConfig,activeSegment:t},onClick:r})}},w=l(f),T={args:{measure:{accessor:`users`,hideDataLabel:e=>{if(e.percent<.01)return!0}},dataset:s}},E={args:c},D={args:u},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)', 'black', 'yellow', 'pink']
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      paddingAngle: 5
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      innerRadius: '20%',
      outerRadius: '90%'
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`keyboardNavigationStory(DonutChart)`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithCustomColor`,`WithPaddedAngle`,`WithCustomRadius`,`LoadingPlaceholder`,`WithFormatter`,`WithActiveShape`,`KeyboardNavigation`,`HideLabels`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));k();export{_ as Default,T as HideLabels,w as KeyboardNavigation,x as LoadingPlaceholder,C as WithActiveShape,v as WithCustomColor,D as WithCustomLegendConfig,b as WithCustomRadius,E as WithCustomTooltipConfig,S as WithFormatter,y as WithPaddedAngle,O as __namedExportsOrder,g as default,k as n,p as t};