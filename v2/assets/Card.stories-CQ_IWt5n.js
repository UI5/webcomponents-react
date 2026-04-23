import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-CNp2Ms8r.js";import{i as r,n as i,r as a,t as o}from"./NumericSideIndicator-CpPT3pu1.js";import{a as s,s as c,t as l}from"./enums-Bw9ymXWL.js";import{n as u,t as d}from"./Icon-B50uuhbw.js";import{i as f,n as p,r as m,t as h}from"./ListItemStandard-DGGdIRdw.js";import{n as g,t as _}from"./Card-DbmZ07eH.js";import{n as v,t as y}from"./CardHeader-D8XnKhVi.js";import{n as b,t as x}from"./person-placeholder-EG3Ieqju.js";import{t as S}from"./LineChart-URfpcNRf.js";import{t as C}from"./src-BDhySY1E.js";var w=t({Default:()=>D,WithAnalyticalCardHeader:()=>k,__namedExportsOrder:()=>A,default:()=>E}),T,E,D,O,k,A,j=e((()=>{x(),C(),r(),i(),l(),v(),u(),f(),p(),g(),T=n(),E={title:`Data Display / Card`,component:_,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:`300px`},header:(0,T.jsx)(y,{titleText:`TeamSpace`,subtitleText:`Direct Reports`,additionalText:`3 of 5`,avatar:(0,T.jsx)(d,{name:b})})},tags:[`package:@ui5/webcomponents`]},D={render:e=>(0,T.jsx)(_,{...e,children:(0,T.jsxs)(m,{children:[(0,T.jsx)(h,{description:`Software Architect`,text:`Richard Wilson`}),(0,T.jsx)(h,{description:`Visual Designer`,text:`Elena Petrova`}),(0,T.jsx)(h,{description:`Quality Specialist`,text:`John Miller`})]})})},O=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],k={render:()=>(0,T.jsx)(_,{header:(0,T.jsxs)(a,{titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:c.Down,value:`65.34`,state:s.Error,scale:`K`,description:`Q1, 2018`,children:[(0,T.jsx)(o,{titleText:`Target`,number:`100`,unit:`k`}),(0,T.jsx)(o,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:s.Critical})]}),children:(0,T.jsx)(S,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:O})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithAnalyticalCardHeader`]}));export{j as a,A as i,D as n,E as o,k as r,w as t};