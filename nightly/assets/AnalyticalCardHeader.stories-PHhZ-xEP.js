import{a as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./jsx-runtime-BBQGix-2.js";import{n as r,t as i}from"./Card-ih8vcrvj.js";import{Gt as a,H as o,Kt as s,U as c,Yt as l,d as u,qt as d}from"./iframe-eHAaW8PL.js";import{t as f}from"./LineChart-P5FJJrFD.js";import{t as p}from"./src-DN7l1Tmf.js";var m=e({Default:()=>v,__namedExportsOrder:()=>y,default:()=>_}),h,g,_,v,y,b=t((()=>{p(),u(),r(),c(),s(),h=n(),g=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],_={title:`Data Display / AnalyticalCardHeader`,component:a,argTypes:{children:{control:{disable:!0}}},args:{children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{titleText:`Target`,number:`100`,unit:`k`}),(0,h.jsx)(o,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:d.Critical})]}),titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:l.Down,value:`65.34`,state:d.Error,scale:`K`,description:`Q1, 2018`},tags:[`package:@ui5/webcomponents-react`]},v={render(e){return(0,h.jsx)(i,{header:(0,h.jsx)(a,{...e}),children:(0,h.jsx)(f,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:g})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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