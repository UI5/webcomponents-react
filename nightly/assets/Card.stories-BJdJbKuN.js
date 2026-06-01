import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Cf as n,Df as r,H as i,Sf as a,Tf as o,U as s,Ut as c,Wt as l,as as u,cd as d,d as f,ed as p,is as m,ld as h,lh as g,ns as _,rs as v,td as y,wf as b,xf as x}from"./iframe-phTYoWf1.js";import{t as S}from"./LineChart-DkoSt47b.js";import{t as C}from"./src-CyNVeaW4.js";var w=e({Default:()=>D,WithAnalyticalCardHeader:()=>k,__namedExportsOrder:()=>A,default:()=>E}),T,E,D,O,k,A,j=t((()=>{c(),C(),a(),s(),f(),v(),b(),h(),y(),u(),T=g(),E={title:`Data Display / Card`,component:m,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:`300px`},header:(0,T.jsx)(_,{titleText:`TeamSpace`,subtitleText:`Direct Reports`,additionalText:`3 of 5`,avatar:(0,T.jsx)(n,{name:l})})},tags:[`package:@ui5/webcomponents`]},D={render:e=>(0,T.jsx)(m,{...e,children:(0,T.jsxs)(d,{children:[(0,T.jsx)(p,{description:`Software Architect`,text:`Richard Wilson`}),(0,T.jsx)(p,{description:`Visual Designer`,text:`Elena Petrova`}),(0,T.jsx)(p,{description:`Quality Specialist`,text:`John Miller`})]})})},O=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],k={render:()=>(0,T.jsx)(m,{header:(0,T.jsxs)(x,{titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:r.Down,value:`65.34`,state:o.Error,scale:`K`,description:`Q1, 2018`,children:[(0,T.jsx)(i,{titleText:`Target`,number:`100`,unit:`k`}),(0,T.jsx)(i,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:o.Critical})]}),children:(0,T.jsx)(S,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:O})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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