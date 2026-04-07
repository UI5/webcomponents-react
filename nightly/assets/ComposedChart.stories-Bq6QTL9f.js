import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{a as n,f as r,i,l as a,r as o,t as s}from"./DemoProps-l84Qgj2T.js";import{n as c,t as l}from"./ComposedChart-DTrF48fS.js";var u=t({Default:()=>f,LoadingPlaceholder:()=>y,WithCustomColor:()=>p,WithCustomLegendConfig:()=>x,WithCustomTooltipConfig:()=>b,WithDataLabels:()=>m,WithFormattedSecondaryAxis:()=>v,WithFormatter:()=>h,WithHighlightedMeasures:()=>_,WithReferenceLine:()=>g,__namedExportsOrder:()=>S,default:()=>d}),d,f,p,m,h,g,_,v,y,b,x,S,C=e((()=>{i(),c(),d={title:`ComposedChart`,component:l,tags:[`package:@ui5/webcomponents-react-charts`],argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:o,dimensions:[{accessor:`name`,formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:`sessions`,label:`Active Sessions`,type:`bar`},{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString(),type:`area`},{accessor:`volume`,label:`Vol.`,formatter:e=>`${e} sessions`,type:`line`}]}},f={},p={args:{dataset:a,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,color:`red`,type:`bar`}]}},m={args:{measures:[{accessor:`users`,type:`area`},{accessor:`sessions`,type:`bar`,opacity:.6},{accessor:`volume`,type:`line`}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:`sessions`}}}},h={args:{dimensions:[{accessor:`name`,formatter:e=>e.slice(0,3)}],measures:[{accessor:`users`,formatter:e=>`${e/10}`,type:`bar`,label:`number of users`,stackId:`A`,width:30},{accessor:`sessions`,type:`bar`,stackId:`A`,width:30},{accessor:`volume`,type:`line`,width:2}]}},g={args:{chartConfig:{zoomingTool:!0,referenceLine:{color:`red`,label:`MAX`,value:650}},dataset:s,measures:[{accessor:`users`,type:`bar`,width:2},{accessor:`sessions`,type:`line`},{accessor:`volume`,type:`line`}]}},_={args:{dimensions:[{accessor:`name`,formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:`sessions`,label:`Active Sessions`,type:`bar`,highlightColor:e=>{if(e>400)return`red`}},{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString(),type:`area`},{accessor:`volume`,label:`Vol.`,formatter:e=>`${e} sessions`,type:`line`}]}},v={args:{measures:[{accessor:`volume`,type:`line`},{accessor:`sessions`,type:`bar`,opacity:.6,formatter:e=>`$`+e}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:`sessions`}}}},y={args:{dataset:[]}},b={args:r},x={args:n},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: simpleDataSet,
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users',
      color: 'red',
      type: 'bar'
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      type: 'area'
    }, {
      accessor: 'sessions',
      type: 'bar',
      opacity: 0.6
    }, {
      accessor: 'volume',
      type: 'line'
    }],
    chartConfig: {
      zoomingTool: true,
      secondYAxis: {
        dataKey: 'sessions'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name',
      formatter: element => element.slice(0, 3)
    }],
    measures: [{
      accessor: 'users',
      formatter: element => \`\${element / 10}\`,
      type: 'bar',
      label: 'number of users',
      stackId: 'A',
      width: 30
    }, {
      accessor: 'sessions',
      type: 'bar',
      stackId: 'A',
      width: 30
    }, {
      accessor: 'volume',
      type: 'line',
      width: 2
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      zoomingTool: true,
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    },
    dataset: bigDataSet,
    measures: [{
      accessor: 'users',
      type: 'bar',
      width: 2
    }, {
      accessor: 'sessions',
      type: 'line'
    }, {
      accessor: 'volume',
      type: 'line'
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name',
      formatter: d => \`\${d} 2019\`,
      interval: 0
    }],
    measures: [{
      accessor: 'sessions',
      label: 'Active Sessions',
      type: 'bar',
      highlightColor: value => {
        if (value > 400) {
          return 'red';
        }
      }
    }, {
      accessor: 'users',
      label: 'Users',
      formatter: val => val.toLocaleString(),
      type: 'area'
    }, {
      accessor: 'volume',
      label: 'Vol.',
      formatter: val => \`\${val} sessions\`,
      type: 'line'
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'volume',
      type: 'line'
    }, {
      accessor: 'sessions',
      type: 'bar',
      opacity: 0.6,
      formatter: e => '$' + e
    }],
    chartConfig: {
      zoomingTool: true,
      secondYAxis: {
        dataKey: 'sessions'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithCustomColor`,`WithDataLabels`,`WithFormatter`,`WithReferenceLine`,`WithHighlightedMeasures`,`WithFormattedSecondaryAxis`,`LoadingPlaceholder`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));C();export{f as Default,y as LoadingPlaceholder,p as WithCustomColor,x as WithCustomLegendConfig,b as WithCustomTooltipConfig,m as WithDataLabels,v as WithFormattedSecondaryAxis,h as WithFormatter,_ as WithHighlightedMeasures,g as WithReferenceLine,S as __namedExportsOrder,d as default,C as n,u as t};