import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-1ARNaUmP.js";import{C as r,m as i,p as a,w as o}from"./src-qBi55Ytp.js";import{a as s,s as c,t as l}from"./enums-65Pyx8aO.js";import{i as u,r as d}from"./CardHeader-CR5I6YoM.js";import{t as f}from"./LineChart-J3PCeIz3.js";import{t as p}from"./src-DZgTOZ1n.js";var m=t({Default:()=>v,__namedExportsOrder:()=>y,default:()=>_}),h,g,_,v,y,b=e((()=>{p(),l(),u(),i(),o(),h=n(),g=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],_={title:`Data Display / AnalyticalCardHeader`,component:r,argTypes:{children:{control:{disable:!0}}},args:{children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{titleText:`Target`,number:`100`,unit:`k`}),(0,h.jsx)(a,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:s.Critical})]}),titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:c.Down,value:`65.34`,state:s.Error,scale:`K`,description:`Q1, 2018`},tags:[`package:@ui5/webcomponents-react`]},v={render(e){return(0,h.jsx)(d,{header:(0,h.jsx)(r,{...e}),children:(0,h.jsx)(f,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:g})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render(props) {
    return <Card header={<AnalyticalCardHeader {...props} />}>
        <LineChart className="chromatic-ignore" noLegend dimensions={[{
        accessor: 'name'
      }]} measures={[{
        accessor: 'users',
        formatter: val => \`\${val}k\`
      }]} dataset={simpleDataSet} />
      </Card>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`]}));b();export{v as Default,y as __namedExportsOrder,_ as default,b as n,m as t};