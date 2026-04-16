import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-1ARNaUmP.js";import{a as r,f as i,i as a,l as o,o as s,p as c,t as l,u}from"./DemoProps-BnWENVlA.js";import{n as d,t as f}from"./ColumnChart-DGYMDwYM.js";var p=t({Default:()=>g,LoadingPlaceholder:()=>S,WithCustomColor:()=>_,WithCustomLegendConfig:()=>O,WithCustomTooltipConfig:()=>D,WithCustomTooltipTotal:()=>E,WithFormatter:()=>x,WithHighlightedMeasure:()=>w,WithNormalizedStacks:()=>b,WithReferenceLine:()=>C,WithSecondaryDimension:()=>v,WithStackAggregateTotals:()=>T,WithStacks:()=>y,__namedExportsOrder:()=>k,default:()=>h}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A=e((()=>{r(),d(),m=n(),h={title:`ColumnChart`,component:f,tags:[`package:@ui5/webcomponents-react-charts`],argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:a,dimensions:[{accessor:`name`,formatter:e=>`${e} 2019`}],measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString()},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`}]}},g={},_={args:{measures:[{accessor:`users`,color:`red`}],dataset:u}},v={args:{dimensions:[{accessor:`name`},{accessor:`dimension`}],measures:[{accessor:`users`,color:`red`}],dataset:o}},y={args:{measures:[{accessor:`users`,stackId:`A`},{accessor:`sessions`,stackId:`A`},{accessor:`volume`}],dataset:a}},b={args:i},x={args:{dimensions:[{accessor:`name`,formatter:e=>e.slice(0,3)}],measures:[{accessor:`users`,formatter:e=>`${e/10}`,label:`number of users`},{accessor:`sessions`},{accessor:`volume`}]}},S={args:{dataset:[]}},C={args:{chartConfig:{referenceLine:{color:`red`,label:`MAX`,value:650}}}},w={args:{measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString()},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`,highlightColor:e=>{if(e>750)return`red`}}]}},T={args:{dataset:a.slice(0,3),dimensions:[{accessor:`name`}],measures:[{accessor:`users`,stackId:`A`,label:`Users`},{accessor:`sessions`,stackId:`A`,label:`Active Sessions`}],chartConfig:{showStackAggregateTotals:!0}}},E={args:{dataset:a.slice(0,5),dimensions:[{accessor:`name`}],measures:[{accessor:`users`,stackId:`A`,label:`Users`},{accessor:`sessions`,stackId:`A`,label:`Active Sessions`},{accessor:`volume`,label:`Vol.`}],chartConfig:{showStackAggregateTotals:!0},tooltipConfig:{content:(0,m.jsx)(l,{})}}},D={args:c},O={args:s},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    dataset: complexDataSet
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: complexDataSet.slice(0, 3),
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users',
      stackId: 'A',
      label: 'Users'
    }, {
      accessor: 'sessions',
      stackId: 'A',
      label: 'Active Sessions'
    }],
    chartConfig: {
      showStackAggregateTotals: true
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: complexDataSet.slice(0, 5),
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users',
      stackId: 'A',
      label: 'Users'
    }, {
      accessor: 'sessions',
      stackId: 'A',
      label: 'Active Sessions'
    }, {
      accessor: 'volume',
      label: 'Vol.'
    }],
    chartConfig: {
      showStackAggregateTotals: true
    },
    tooltipConfig: {
      content: <CustomTooltipContent />
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...O.parameters?.docs?.source}}},k=[`Default`,`WithCustomColor`,`WithSecondaryDimension`,`WithStacks`,`WithNormalizedStacks`,`WithFormatter`,`LoadingPlaceholder`,`WithReferenceLine`,`WithHighlightedMeasure`,`WithStackAggregateTotals`,`WithCustomTooltipTotal`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));A();export{g as Default,S as LoadingPlaceholder,_ as WithCustomColor,O as WithCustomLegendConfig,D as WithCustomTooltipConfig,E as WithCustomTooltipTotal,x as WithFormatter,w as WithHighlightedMeasure,b as WithNormalizedStacks,C as WithReferenceLine,v as WithSecondaryDimension,T as WithStackAggregateTotals,y as WithStacks,k as __namedExportsOrder,h as default,A as n,p as t};