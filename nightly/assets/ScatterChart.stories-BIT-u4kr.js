import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{a as n,c as r,l as i,m as a,s as o}from"./DemoProps-CTuiSBOc.js";import{n as s,t as c}from"./ScatterChart-DgbXmAgT.js";var l=e({Default:()=>d,LoadingPlaceholder:()=>m,WithAccessibilityLayer:()=>p,WithCustomColor:()=>f,WithCustomLegendConfig:()=>g,WithCustomTooltipConfig:()=>h,__namedExportsOrder:()=>_,default:()=>u}),u,d,f,p,m,h,g,_,v=t((()=>{n(),s(),u={title:`ScatterChart`,component:c,argTypes:{children:{control:{disable:!0}}},tags:[`package:@ui5/webcomponents-react-charts`],args:{dataset:i,measures:[{accessor:`users`,label:`Users`,axis:`x`},{accessor:`sessions`,label:`Sessions`,formatter:e=>`${e}k`,axis:`y`},{accessor:`volume`,axis:`z`}]}},d={},f={args:{dataset:r,measures:[{accessor:`users`,label:`Users`,axis:`x`},{accessor:`sessions`,label:`Sessions`,axis:`y`},{accessor:`volume`,axis:`z`}]}},p={args:{chartConfig:{accessibilityLayer:!0}}},m={args:{dataset:[]}},h={args:a},g={args:o},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    chartConfig: {
      accessibilityLayer: true
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithCustomColor`,`WithAccessibilityLayer`,`LoadingPlaceholder`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));v();export{d as Default,m as LoadingPlaceholder,p as WithAccessibilityLayer,f as WithCustomColor,g as WithCustomLegendConfig,h as WithCustomTooltipConfig,_ as __namedExportsOrder,u as default,v as n,l as t};