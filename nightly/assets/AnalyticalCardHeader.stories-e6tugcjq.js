import{n as e,r as t}from"./chunk-jRWAZmH_.js";import{Gm as n,Ho as r,I as i,L as a,Uo as o,af as s,d as c,lf as l,of as u,uf as d}from"./iframe-C2-neVvG.js";import{t as f}from"./LineChart-BW2WHntv.js";import{t as p}from"./src-BDUXjTWq.js";var m=t({Default:()=>v,__namedExportsOrder:()=>y,default:()=>_}),h,g,_,v,y,b=e((()=>{p(),c(),o(),a(),u(),h=n(),g=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],_={title:`Data Display / AnalyticalCardHeader`,component:s,argTypes:{children:{control:{disable:!0}}},args:{children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{titleText:`Target`,number:`100`,unit:`k`}),(0,h.jsx)(i,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:l.Critical})]}),titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:d.Down,value:`65.34`,state:l.Error,scale:`K`,description:`Q1, 2018`},tags:[`package:@ui5/webcomponents-react`]},v={render(e){return(0,h.jsx)(r,{header:(0,h.jsx)(s,{...e}),children:(0,h.jsx)(f,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:g})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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