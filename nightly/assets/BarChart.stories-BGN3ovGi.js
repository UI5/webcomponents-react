import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{a as n,c as r,d as i,f as a,i as o,l as s,r as c}from"./DemoProps-DC4QZBi2.js";import{n as l,t as u}from"./BarChart-BnBm7nMA.js";var d=t({Default:()=>p,LoadingPlaceholder:()=>v,WithCustomColor:()=>m,WithCustomLegendConfig:()=>C,WithCustomTooltipConfig:()=>S,WithDataLabels:()=>g,WithFormatter:()=>_,WithHighlightedMeasure:()=>b,WithNormalizedStacks:()=>x,WithReferenceLine:()=>y,WithSecondaryDimension:()=>h,__namedExportsOrder:()=>w,default:()=>f}),f,p,m,h,g,_,v,y,b,x,S,C,w,T=e((()=>{o(),l(),f={title:`BarChart`,component:u,tags:[`package:@ui5/webcomponents-react-charts`],argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:c,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString(),opacity:.6},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`}]}},p={},m={args:{measures:[{accessor:`users`,color:`red`}],dataset:s}},h={args:{dimensions:[{accessor:`name`},{accessor:`dimension`}],measures:[{accessor:`users`,color:`red`}],dataset:r}},g={args:{measures:[{accessor:`users`},{accessor:`sessions`},{accessor:`volume`}]}},_={args:{dimensions:[{accessor:`name`,formatter:e=>e.slice(0,3)}],measures:[{accessor:`users`,formatter:e=>`${e/10}`,label:`number of users`},{accessor:`sessions`},{accessor:`volume`}],chartConfig:{zoomingTool:!0}}},v={args:{dataset:[]}},y={args:{measures:[{accessor:`users`,stackId:`A`},{accessor:`sessions`,stackId:`A`},{accessor:`volume`}],chartConfig:{referenceLine:{color:`red`,label:`MAX`,value:650}}}},b={args:{measures:[{accessor:`users`,stackId:`A`},{accessor:`sessions`,stackId:`A`},{accessor:`volume`,highlightColor:(e,t,n)=>{if(n.name===`February`)return`red`}}]}},x={args:i},S={args:a},C={args:n},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithCustomColor`,`WithSecondaryDimension`,`WithDataLabels`,`WithFormatter`,`LoadingPlaceholder`,`WithReferenceLine`,`WithHighlightedMeasure`,`WithNormalizedStacks`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));T();export{p as Default,v as LoadingPlaceholder,m as WithCustomColor,C as WithCustomLegendConfig,S as WithCustomTooltipConfig,g as WithDataLabels,_ as WithFormatter,b as WithHighlightedMeasure,x as WithNormalizedStacks,y as WithReferenceLine,h as WithSecondaryDimension,w as __namedExportsOrder,f as default,T as n,d as t};