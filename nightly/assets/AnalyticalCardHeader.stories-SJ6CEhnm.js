import{n as e,r as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./jsx-runtime-CeCnFQbk.js";import{n as r,t as i}from"./Card-Du4-j-Xh.js";import{F as a,P as o,at as s,d as c,it as l,ot as u,st as d}from"./iframe-D-AuPFQa.js";import{t as f}from"./LineChart-BEp9kIdQ.js";import{t as p}from"./src-DQ168wDt.js";var m=t({Default:()=>v,__namedExportsOrder:()=>y,default:()=>_}),h,g,_,v,y,b=e((()=>{p(),c(),r(),a(),s(),h=n(),g=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],_={title:`Data Display / AnalyticalCardHeader`,component:l,argTypes:{children:{control:{disable:!0}}},args:{children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{titleText:`Target`,number:`100`,unit:`k`}),(0,h.jsx)(o,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:u.Critical})]}),titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:d.Down,value:`65.34`,state:u.Error,scale:`K`,description:`Q1, 2018`},tags:[`package:@ui5/webcomponents-react`]},v={render(e){return(0,h.jsx)(i,{header:(0,h.jsx)(l,{...e}),children:(0,h.jsx)(f,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:g})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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