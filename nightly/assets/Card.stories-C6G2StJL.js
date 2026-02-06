import{j as e,I as c}from"./iframe-D_72XrxV.js";import{p as d}from"./person-placeholder-DsSavNqu.js";import{L as l}from"./index-wrL0ZnID.js";import{A as m,V as n,D as u,N as o}from"./index-C8wVPDDs.js";import{C as p}from"./index-CawoDp7x.js";import{L as x}from"./index-BHGBSUlQ.js";import{L as s}from"./index-5Qz0hHSk.js";import{C as i}from"./index-DhXDNTqP.js";const C={title:"Data Display / Card",component:i,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:"300px"},header:e.jsx(p,{titleText:"TeamSpace",subtitleText:"Direct Reports",additionalText:"3 of 5",avatar:e.jsx(c,{name:d})})},tags:["package:@ui5/webcomponents"]},t={render:a=>e.jsx(i,{...a,children:e.jsxs(x,{children:[e.jsx(s,{description:"Software Architect",text:"Richard Wilson"}),e.jsx(s,{description:"Visual Designer",text:"Elena Petrova"}),e.jsx(s,{description:"Quality Specialist",text:"John Miller"})]})})},h=[{name:"January",users:76},{name:"February",users:230},{name:"March",users:240},{name:"April",users:280},{name:"May",users:100}],r={render:()=>e.jsx(i,{header:e.jsxs(m,{titleText:"Project Cloud Transformation",subtitleText:"Revenue",unitOfMeasurement:"EUR",trend:u.Down,value:"65.34",state:n.Error,scale:"K",description:"Q1, 2018",children:[e.jsx(o,{titleText:"Target",number:"100",unit:"k"}),e.jsx(o,{titleText:"Deviation",number:"34.7",unit:"%",state:n.Critical})]}),children:e.jsx(l,{className:"chromatic-ignore",noLegend:!0,dimensions:[{accessor:"name"}],measures:[{accessor:"users",formatter:a=>`${a}k`}],dataset:h})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Card {...args}>
        <List>
          <ListItemStandard description="Software Architect" text="Richard Wilson" />
          <ListItemStandard description="Visual Designer" text="Elena Petrova" />
          <ListItemStandard description="Quality Specialist" text="John Miller" />
        </List>
      </Card>;
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Card header={<AnalyticalCardHeader titleText="Project Cloud Transformation" subtitleText="Revenue" unitOfMeasurement="EUR" trend={DeviationIndicator.Down} value="65.34" state={ValueColor.Error} scale="K" description="Q1, 2018">
            <NumericSideIndicator titleText="Target" number="100" unit="k" />
            <NumericSideIndicator titleText="Deviation" number="34.7" unit="%" state={ValueColor.Critical} />
          </AnalyticalCardHeader>}>
        <LineChart className="chromatic-ignore" noLegend dimensions={[{
        accessor: 'name'
      }]} measures={[{
        accessor: 'users',
        formatter: val => \`\${val}k\`
      }]} dataset={simpleDataSet} />
      </Card>;
  }
}`,...r.parameters?.docs?.source}}};const f=["Default","WithAnalyticalCardHeader"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithAnalyticalCardHeader:r,__namedExportsOrder:f,default:C},Symbol.toStringTag,{value:"Module"}));export{L as C,t as D,r as W};
