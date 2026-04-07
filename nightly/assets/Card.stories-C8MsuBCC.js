import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{Bo as n,Ho as r,I as i,Ju as a,L as o,Nt as s,Nu as c,Pt as l,Pu as u,Uo as d,Vo as f,Wm as p,af as m,d as h,if as g,nf as _,of as v,qu as y,rf as b,tf as x}from"./iframe-CfLcoMHk.js";import{t as S}from"./LineChart-DC0Eq8Ri.js";import{t as C}from"./src-BtJ7FGOA.js";var w=t({Default:()=>D,WithAnalyticalCardHeader:()=>k,__namedExportsOrder:()=>A,default:()=>E}),T,E,D,O,k,A,j=e((()=>{s(),C(),_(),o(),h(),f(),g(),a(),u(),d(),T=p(),E={title:`Data Display / Card`,component:r,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:`300px`},header:(0,T.jsx)(n,{titleText:`TeamSpace`,subtitleText:`Direct Reports`,additionalText:`3 of 5`,avatar:(0,T.jsx)(b,{name:l})})},tags:[`package:@ui5/webcomponents`]},D={render:e=>(0,T.jsx)(r,{...e,children:(0,T.jsxs)(y,{children:[(0,T.jsx)(c,{description:`Software Architect`,text:`Richard Wilson`}),(0,T.jsx)(c,{description:`Visual Designer`,text:`Elena Petrova`}),(0,T.jsx)(c,{description:`Quality Specialist`,text:`John Miller`})]})})},O=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],k={render:()=>(0,T.jsx)(r,{header:(0,T.jsxs)(x,{titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:v.Down,value:`65.34`,state:m.Error,scale:`K`,description:`Q1, 2018`,children:[(0,T.jsx)(i,{titleText:`Target`,number:`100`,unit:`k`}),(0,T.jsx)(i,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:m.Critical})]}),children:(0,T.jsx)(S,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:O})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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