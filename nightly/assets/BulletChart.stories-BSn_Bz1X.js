import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{a as n,o as r,p as i,r as a}from"./DemoProps-DoRDAXhC.js";import{n as o,t as s}from"./BulletChart-BBOoYvpK.js";var c=t({Default:()=>u,LoadingPlaceholder:()=>p,WithCustomLegendConfig:()=>h,WithCustomSize:()=>d,WithCustomTooltipConfig:()=>m,WithHighlightedMeasures:()=>f,__namedExportsOrder:()=>g,default:()=>l}),l,u,d,f,p,m,h,g,_=e((()=>{n(),o(),l={title:`BulletChart`,component:s,tags:[`package:@ui5/webcomponents-react-charts`],argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:a,layout:`horizontal`,dimensions:[{accessor:`name`,formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:`sessions`,label:`Active Sessions`,type:`primary`},{accessor:`users`,label:`Users`,type:`additional`},{accessor:`volume`,label:`Volume`,formatter:e=>e.toLocaleString(),type:`comparison`}]}},u={},d={args:{layout:`vertical`,dimensions:[{accessor:`name`,formatter:e=>e.slice(0,3)}],measures:[{accessor:`users`,formatter:e=>`${e/10}`,type:`additional`,label:`Number of users`,width:10},{accessor:`sessions`,type:`primary`,width:10,opacity:.5},{accessor:`volume`,type:`comparison`,width:10}]}},f={args:{dimensions:[{accessor:`name`,formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:`sessions`,label:`Active Sessions`,type:`primary`},{accessor:`users`,label:`Users`,type:`additional`,highlightColor:e=>{if(e>100)return`red`}},{accessor:`volume`,label:`Volume`,formatter:e=>e.toLocaleString(),type:`comparison`}]}},p={args:{dataset:[]}},m={args:i},h={args:r},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    dimensions: [{
      accessor: 'name',
      formatter: element => element.slice(0, 3)
    }],
    measures: [{
      accessor: 'users',
      formatter: element => \`\${element / 10}\`,
      type: 'additional',
      label: 'Number of users',
      width: 10
    }, {
      accessor: 'sessions',
      type: 'primary',
      width: 10,
      opacity: 0.5
    }, {
      accessor: 'volume',
      type: 'comparison',
      width: 10
    }]
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name',
      formatter: d => \`\${d} 2019\`,
      interval: 0
    }],
    measures: [{
      accessor: 'sessions',
      label: 'Active Sessions',
      type: 'primary'
    }, {
      accessor: 'users',
      label: 'Users',
      type: 'additional',
      highlightColor: value => {
        if (value > 100) {
          return 'red';
        }
      }
    }, {
      accessor: 'volume',
      label: 'Volume',
      formatter: val => val.toLocaleString(),
      type: 'comparison'
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
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithCustomSize`,`WithHighlightedMeasures`,`LoadingPlaceholder`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`]}));_();export{u as Default,p as LoadingPlaceholder,h as WithCustomLegendConfig,d as WithCustomSize,m as WithCustomTooltipConfig,f as WithHighlightedMeasures,g as __namedExportsOrder,l as default,_ as n,c as t};