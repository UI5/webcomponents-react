import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,c as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./NumericSideIndicator-q6ZyNPnR.js";import{n as d,t as f}from"./Icon-CnymcL6d.js";import{n as p,t as m}from"./List-DPJCxiCd.js";import{n as h,t as g}from"./ListItemStandard-ClpP2ok7.js";import{n as _,t as v}from"./Card-D3bKYdv1.js";import{n as y,t as b}from"./CardHeader-EDrI5KL7.js";import{n as x,t as S}from"./person-placeholder-C-osR7pd.js";import{n as C,t as w}from"./LineChart-DUyLHkTK.js";var T=t({Default:()=>O,WithAnalyticalCardHeader:()=>A,__namedExportsOrder:()=>j,default:()=>D}),E,D,O,k,A,j;function M(){return(M=e((()=>{S(),C(),a(),o(),i(),s(),y(),d(),p(),h(),_(),E=n(),D={title:`Data Display / Card`,component:v,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:`300px`},header:(0,E.jsx)(b,{titleText:`TeamSpace`,subtitleText:`Direct Reports`,additionalText:`3 of 5`,avatar:(0,E.jsx)(f,{name:x})})},tags:[`package:@ui5/webcomponents`]},O={render:e=>(0,E.jsx)(v,{...e,children:(0,E.jsxs)(m,{children:[(0,E.jsx)(g,{description:`Software Architect`,text:`Richard Wilson`}),(0,E.jsx)(g,{description:`Visual Designer`,text:`Elena Petrova`}),(0,E.jsx)(g,{description:`Quality Specialist`,text:`John Miller`})]})})},k=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],A={render:()=>(0,E.jsx)(v,{header:(0,E.jsxs)(c,{titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:l.Down,value:`65.34`,state:r.Error,scale:`K`,description:`Q1, 2018`,children:[(0,E.jsx)(u,{titleText:`Target`,number:`100`,unit:`k`}),(0,E.jsx)(u,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:r.Critical})]}),children:(0,E.jsx)(w,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:k})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Card {...args}>
        <List>
          <ListItemStandard description="Software Architect" text="Richard Wilson" />
          <ListItemStandard description="Visual Designer" text="Elena Petrova" />
          <ListItemStandard description="Quality Specialist" text="John Miller" />
        </List>
      </Card>;
  }
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithAnalyticalCardHeader`]})))()}export{M as i,O as n,A as r,T as t};