import{n as e,r as t}from"./chunk-jRWAZmH_.js";import{a as n,c as r,o as i,p as a,s as o}from"./DemoProps-DZSI9XWr.js";import{n as s,t as c}from"./ScatterChart-CW5CVrW1.js";var l=t({Default:()=>d,LoadingPlaceholder:()=>p,WithCustomColor:()=>f,WithCustomLegendConfig:()=>h,WithCustomTooltipConfig:()=>m,__namedExportsOrder:()=>g,default:()=>u}),u,d,f,p,m,h,g,_=e((()=>{n(),s(),u={title:`ScatterChart`,component:c,argTypes:{children:{control:{disable:!0}}},tags:[`package:@ui5/webcomponents-react-charts`],args:{dataset:r,measures:[{accessor:`users`,label:`Users`,axis:`x`},{accessor:`sessions`,label:`Sessions`,formatter:e=>`${e}k`,axis:`y`},{accessor:`volume`,axis:`z`}]}},d={},f={args:{dataset:o,measures:[{accessor:`users`,label:`Users`,axis:`x`},{accessor:`sessions`,label:`Sessions`,axis:`y`},{accessor:`volume`,axis:`z`}]}},p={args:{dataset:[]}},m={args:a},h={args:i},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithCustomColor`,`LoadingPlaceholder`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));_();export{d as Default,p as LoadingPlaceholder,f as WithCustomColor,h as WithCustomLegendConfig,m as WithCustomTooltipConfig,g as __namedExportsOrder,u as default,_ as n,l as t};