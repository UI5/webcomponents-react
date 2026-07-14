import{n as e,r as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{c as r,o as i,t as a}from"./enums-Cmq13P-3.js";import{n as o,t as s}from"./Icon-_O7f1EFW.js";import{i as c,n as l,r as u,t as d}from"./ListItemStandard-CVl5r8jp.js";import{n as f,t as p}from"./Card-BfKrJ4pt.js";import{n as m,t as h}from"./CardHeader-DO9wE3xU.js";import{n as g,t as _}from"./person-placeholder-BRz8-XFF.js";import{N as v,P as y,it as b,rt as x}from"./iframe-CC_5aWpT.js";import{t as S}from"./LineChart-DZ1qUUzx.js";import{t as C}from"./src-DYJ1eWqQ.js";var w=t({Default:()=>D,WithAnalyticalCardHeader:()=>k,__namedExportsOrder:()=>A,default:()=>E}),T,E,D,O,k,A,j=e((()=>{_(),C(),b(),y(),a(),m(),o(),c(),l(),f(),T=n(),E={title:`Data Display / Card`,component:p,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:`300px`},header:(0,T.jsx)(h,{titleText:`TeamSpace`,subtitleText:`Direct Reports`,additionalText:`3 of 5`,avatar:(0,T.jsx)(s,{name:g})})},tags:[`package:@ui5/webcomponents`]},D={render:e=>(0,T.jsx)(p,{...e,children:(0,T.jsxs)(u,{children:[(0,T.jsx)(d,{description:`Software Architect`,text:`Richard Wilson`}),(0,T.jsx)(d,{description:`Visual Designer`,text:`Elena Petrova`}),(0,T.jsx)(d,{description:`Quality Specialist`,text:`John Miller`})]})})},O=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],k={render:()=>(0,T.jsx)(p,{header:(0,T.jsxs)(x,{titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:r.Down,value:`65.34`,state:i.Error,scale:`K`,description:`Q1, 2018`,children:[(0,T.jsx)(v,{titleText:`Target`,number:`100`,unit:`k`}),(0,T.jsx)(v,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:i.Critical})]}),children:(0,T.jsx)(S,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:O})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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