import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{a as n,i as r,o as i,p as a,u as o}from"./DemoProps-DoRDAXhC.js";import{n as s,t as c}from"./RadarChart-BFkRQsBV.js";var l=t({Default:()=>d,LoadingPlaceholder:()=>h,Polygon:()=>m,WithCustomColor:()=>f,WithCustomLegendConfig:()=>_,WithCustomTooltipConfig:()=>g,WithDataLabels:()=>p,__namedExportsOrder:()=>v,default:()=>u}),u,d,f,p,m,h,g,_,v,y=e((()=>{n(),s(),u={title:`RadarChart`,component:c,tags:[`package:@ui5/webcomponents-react-charts`],args:{dimensions:[{accessor:`name`,formatter:e=>`${e} 2019`}],measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString()},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`}],dataset:r},argTypes:{dataset:{control:{disable:!0}}}},d={},f={args:{dimensions:[{accessor:`name`}],measures:[{accessor:`users`,color:`red`}],dataset:o}},p={args:{dimensions:[{accessor:`name`}],measures:[{accessor:`users`},{accessor:`sessions`},{accessor:`volume`}]}},m={args:{dimensions:[{accessor:`name`,formatter:e=>e.slice(0,3)}],measures:[{accessor:`users`,formatter:e=>`${e/10}`,label:`number of users`},{accessor:`sessions`},{accessor:`volume`}],chartConfig:{polarGridType:`polygon`}}},h={args:{dataset:[]}},g={args:a},_={args:i},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithCustomColor`,`WithDataLabels`,`Polygon`,`LoadingPlaceholder`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));y();export{d as Default,h as LoadingPlaceholder,m as Polygon,f as WithCustomColor,_ as WithCustomLegendConfig,g as WithCustomTooltipConfig,p as WithDataLabels,v as __namedExportsOrder,u as default,y as n,l as t};