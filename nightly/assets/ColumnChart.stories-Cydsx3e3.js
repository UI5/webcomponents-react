import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{a as n,c as r,d as i,f as a,i as o,l as s,r as c}from"./DemoProps-CydiYB0E.js";import{n as l,t as u}from"./ColumnChart-Bwgc0sTD.js";var d=t({Default:()=>p,LoadingPlaceholder:()=>y,WithCustomColor:()=>m,WithCustomLegendConfig:()=>C,WithCustomTooltipConfig:()=>S,WithFormatter:()=>v,WithHighlightedMeasure:()=>x,WithNormalizedStacks:()=>_,WithReferenceLine:()=>b,WithSecondaryDimension:()=>h,WithStacks:()=>g,__namedExportsOrder:()=>w,default:()=>f}),f,p,m,h,g,_,v,y,b,x,S,C,w,T=e((()=>{o(),l(),f={title:`ColumnChart`,component:u,tags:[`package:@ui5/webcomponents-react-charts`],argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:c,dimensions:[{accessor:`name`,formatter:e=>`${e} 2019`}],measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString()},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`}]}},p={},m={args:{measures:[{accessor:`users`,color:`red`}],dataset:s}},h={args:{dimensions:[{accessor:`name`},{accessor:`dimension`}],measures:[{accessor:`users`,color:`red`}],dataset:r}},g={args:{measures:[{accessor:`users`,stackId:`A`},{accessor:`sessions`,stackId:`A`},{accessor:`volume`}],dataset:c}},_={args:i},v={args:{dimensions:[{accessor:`name`,formatter:e=>e.slice(0,3)}],measures:[{accessor:`users`,formatter:e=>`${e/10}`,label:`number of users`},{accessor:`sessions`},{accessor:`volume`}]}},y={args:{dataset:[]}},b={args:{chartConfig:{referenceLine:{color:`red`,label:`MAX`,value:650}}}},x={args:{measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString()},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`,highlightColor:e=>{if(e>750)return`red`}}]}},S={args:a},C={args:n},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      accessor: 'users',
      stackId: 'A'
    }, {
      accessor: 'sessions',
      stackId: 'A'
    }, {
      accessor: 'volume'
    }],
    dataset: complexDataSet
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      label: 'Users',
      formatter: val => val.toLocaleString()
    }, {
      accessor: 'sessions',
      label: 'Active Sessions',
      formatter: val => \`\${val} sessions\`,
      hideDataLabel: true
    }, {
      accessor: 'volume',
      label: 'Vol.',
      highlightColor: value => {
        if (value > 750) {
          return 'red';
        }
      }
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithCustomColor`,`WithSecondaryDimension`,`WithStacks`,`WithNormalizedStacks`,`WithFormatter`,`LoadingPlaceholder`,`WithReferenceLine`,`WithHighlightedMeasure`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));T();export{p as Default,y as LoadingPlaceholder,m as WithCustomColor,C as WithCustomLegendConfig,S as WithCustomTooltipConfig,v as WithFormatter,x as WithHighlightedMeasure,_ as WithNormalizedStacks,b as WithReferenceLine,h as WithSecondaryDimension,g as WithStacks,w as __namedExportsOrder,f as default,T as n,d as t};