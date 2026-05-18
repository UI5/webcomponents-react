import{a as e,i as t}from"./preload-helper-DbRxMUml.js";import{$o as n,$u as r,Fm as i,Gu as a,L as o,Qo as s,Qu as c,R as l,Rt as u,Wu as d,Xo as f,Zo as p,cf as m,d as h,df as g,ff as _,lf as v,sf as y,uf as b,zt as x}from"./iframe-DLyN7Gg6.js";import{t as S}from"./LineChart--QIz5fNt.js";import{t as C}from"./src-C7rJ93RB.js";var w=e({Default:()=>D,WithAnalyticalCardHeader:()=>k,__namedExportsOrder:()=>A,default:()=>E}),T,E,D,O,k,A,j=t((()=>{u(),C(),m(),l(),h(),p(),b(),r(),a(),n(),T=i(),E={title:`Data Display / Card`,component:s,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:`300px`},header:(0,T.jsx)(f,{titleText:`TeamSpace`,subtitleText:`Direct Reports`,additionalText:`3 of 5`,avatar:(0,T.jsx)(v,{name:x})})},tags:[`package:@ui5/webcomponents`]},D={render:e=>(0,T.jsx)(s,{...e,children:(0,T.jsxs)(c,{children:[(0,T.jsx)(d,{description:`Software Architect`,text:`Richard Wilson`}),(0,T.jsx)(d,{description:`Visual Designer`,text:`Elena Petrova`}),(0,T.jsx)(d,{description:`Quality Specialist`,text:`John Miller`})]})})},O=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],k={render:()=>(0,T.jsx)(s,{header:(0,T.jsxs)(y,{titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:_.Down,value:`65.34`,state:g.Error,scale:`K`,description:`Q1, 2018`,children:[(0,T.jsx)(o,{titleText:`Target`,number:`100`,unit:`k`}),(0,T.jsx)(o,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:g.Critical})]}),children:(0,T.jsx)(S,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:O})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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