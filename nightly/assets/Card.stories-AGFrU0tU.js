import{a as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./jsx-runtime-BBQGix-2.js";import{n as r,t as i}from"./Icon-CgZ9gZut.js";import{i as a,n as o,r as s,t as c}from"./ListItemStandard-BkV1ZdP_.js";import{n as l,t as u}from"./Card-BhOw6ZEK.js";import{n as d,t as f}from"./CardHeader-C6uUkaW1.js";import{n as p,t as m}from"./person-placeholder-CUYu2CYj.js";import{Ct as h,H as g,St as _,Tt as v,U as y,d as b,xt as x}from"./iframe-BMDN21Mt.js";import{t as S}from"./LineChart-BtI-RXAf.js";import{t as C}from"./src-C06iSxZB.js";var w=e({Default:()=>D,WithAnalyticalCardHeader:()=>k,__namedExportsOrder:()=>A,default:()=>E}),T,E,D,O,k,A,j=t((()=>{m(),C(),_(),y(),b(),d(),r(),a(),o(),l(),T=n(),E={title:`Data Display / Card`,component:u,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:`300px`},header:(0,T.jsx)(f,{titleText:`TeamSpace`,subtitleText:`Direct Reports`,additionalText:`3 of 5`,avatar:(0,T.jsx)(i,{name:p})})},tags:[`package:@ui5/webcomponents`]},D={render:e=>(0,T.jsx)(u,{...e,children:(0,T.jsxs)(s,{children:[(0,T.jsx)(c,{description:`Software Architect`,text:`Richard Wilson`}),(0,T.jsx)(c,{description:`Visual Designer`,text:`Elena Petrova`}),(0,T.jsx)(c,{description:`Quality Specialist`,text:`John Miller`})]})})},O=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],k={render:()=>(0,T.jsx)(u,{header:(0,T.jsxs)(x,{titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:v.Down,value:`65.34`,state:h.Error,scale:`K`,description:`Q1, 2018`,children:[(0,T.jsx)(g,{titleText:`Target`,number:`100`,unit:`k`}),(0,T.jsx)(g,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:h.Critical})]}),children:(0,T.jsx)(S,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:O})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Card {...args}>
        <List>
          <ListItemStandard description="Software Architect" text="Richard Wilson" />
          <ListItemStandard description="Visual Designer" text="Elena Petrova" />
          <ListItemStandard description="Quality Specialist" text="John Miller" />
        </List>
      </Card>;
  }
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithAnalyticalCardHeader`]}));export{j as i,D as n,k as r,w as t};