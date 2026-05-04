import{n as e,r as t}from"./chunk-jRWAZmH_.js";import{Bo as n,Fu as r,Ho as i,I as a,Iu as o,L as s,Nt as c,Pt as l,Uo as u,Vo as d,Xu as f,Ym as p,Yu as m,cf as h,d as g,df as _,ff as v,lf as y,pf as b,uf as x}from"./iframe-DHV3kOrJ.js";import{t as S}from"./LineChart-BR8hwCU9.js";import{t as C}from"./src-KU7ldEPP.js";var w=t({Default:()=>D,WithAnalyticalCardHeader:()=>k,__namedExportsOrder:()=>A,default:()=>E}),T,E,D,O,k,A,j=e((()=>{c(),C(),y(),s(),g(),d(),_(),f(),o(),u(),T=p(),E={title:`Data Display / Card`,component:i,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:`300px`},header:(0,T.jsx)(n,{titleText:`TeamSpace`,subtitleText:`Direct Reports`,additionalText:`3 of 5`,avatar:(0,T.jsx)(x,{name:l})})},tags:[`package:@ui5/webcomponents`]},D={render:e=>(0,T.jsx)(i,{...e,children:(0,T.jsxs)(m,{children:[(0,T.jsx)(r,{description:`Software Architect`,text:`Richard Wilson`}),(0,T.jsx)(r,{description:`Visual Designer`,text:`Elena Petrova`}),(0,T.jsx)(r,{description:`Quality Specialist`,text:`John Miller`})]})})},O=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],k={render:()=>(0,T.jsx)(i,{header:(0,T.jsxs)(h,{titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:b.Down,value:`65.34`,state:v.Error,scale:`K`,description:`Q1, 2018`,children:[(0,T.jsx)(a,{titleText:`Target`,number:`100`,unit:`k`}),(0,T.jsx)(a,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:v.Critical})]}),children:(0,T.jsx)(S,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:O})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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