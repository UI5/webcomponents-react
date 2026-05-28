import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Df as n,H as r,Sf as i,Tf as a,U as o,as as s,d as c,is as l,lh as u,xf as d}from"./iframe-zvqSp8iY.js";import{t as f}from"./LineChart-DIROOX22.js";import{t as p}from"./src-CXAM1Zjk.js";var m=e({Default:()=>v,__namedExportsOrder:()=>y,default:()=>_}),h,g,_,v,y,b=t((()=>{p(),c(),s(),o(),i(),h=u(),g=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],_={title:`Data Display / AnalyticalCardHeader`,component:d,argTypes:{children:{control:{disable:!0}}},args:{children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{titleText:`Target`,number:`100`,unit:`k`}),(0,h.jsx)(r,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:a.Critical})]}),titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:n.Down,value:`65.34`,state:a.Error,scale:`K`,description:`Q1, 2018`},tags:[`package:@ui5/webcomponents-react`]},v={render(e){return(0,h.jsx)(l,{header:(0,h.jsx)(d,{...e}),children:(0,h.jsx)(f,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:g})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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