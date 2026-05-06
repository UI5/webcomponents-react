import{n as e,r as t}from"./chunk-jRWAZmH_.js";import{Ho as n,I as r,L as i,Uo as a,Xm as o,d as s,lf as c,mf as l,pf as u,uf as d}from"./iframe-DS6J8V1f.js";import{t as f}from"./LineChart-Cdsye-NO.js";import{t as p}from"./src-CjNhsgzz.js";var m=t({Default:()=>v,__namedExportsOrder:()=>y,default:()=>_}),h,g,_,v,y,b=e((()=>{p(),s(),a(),i(),d(),h=o(),g=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],_={title:`Data Display / AnalyticalCardHeader`,component:c,argTypes:{children:{control:{disable:!0}}},args:{children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{titleText:`Target`,number:`100`,unit:`k`}),(0,h.jsx)(r,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:u.Critical})]}),titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:l.Down,value:`65.34`,state:u.Error,scale:`K`,description:`Q1, 2018`},tags:[`package:@ui5/webcomponents-react`]},v={render(e){return(0,h.jsx)(n,{header:(0,h.jsx)(c,{...e}),children:(0,h.jsx)(f,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:g})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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