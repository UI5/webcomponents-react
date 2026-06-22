import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{n as r,t as i}from"./Icon-hp6yXVHv.js";import{n as a,t as o}from"./FlexBoxWrap-CcJK0Ofi.js";import{n as s,t as c}from"./Text-DrxEQokd.js";import{i as l,r as u}from"./Tag-BL2z3FPm.js";import{n as d,t as f}from"./employee-JtKPSfXP.js";import{n as p,t as m}from"./Tag-CcOk4Bhm.js";import{vt as h,yt as g}from"./iframe--wZ8miGa.js";var _=e({AllColors:()=>x,Default:()=>b,__namedExportsOrder:()=>S,default:()=>y}),v,y,b,x,S,C=t((()=>{l(),d(),g(),a(),s(),r(),p(),v=n(),y={title:`Data Display / Tag`,component:m,argTypes:{children:{control:`text`},icon:{control:{disable:!0}}},args:{children:`Tag Text`,icon:(0,v.jsx)(i,{name:f})},tags:[`package:@ui5/webcomponents`]},b={},x={render(){return(0,v.jsxs)(h,{wrap:o.Wrap,style:{gap:`0.5rem`},children:[(0,v.jsx)(c,{style:{flexGrow:1,width:`100%`},children:`Value States:`}),Object.values(u).filter(e=>!e.startsWith(`Set`)).map(e=>(0,v.jsx)(m,{design:e,children:e},e)),(0,v.jsx)(c,{style:{flexGrow:1,width:`100%`},children:`Set1:`}),Array(10).fill(``).map((e,t)=>(0,v.jsxs)(m,{design:`Set1`,colorScheme:`${t+1}`,children:[`colorScheme: "`,t+1,`"`]},t)),(0,v.jsx)(c,{style:{flexGrow:1,width:`100%`},children:`Set2:`}),Array(10).fill(``).map((e,t)=>(0,v.jsxs)(m,{design:`Set2`,colorScheme:`${t+1}`,children:[`colorScheme: "`,t+1,`"`]},t))]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render() {
    return <FlexBox wrap={FlexBoxWrap.Wrap} style={{
      gap: '0.5rem'
    }}>
        <Text style={{
        flexGrow: 1,
        width: '100%'
      }}>Value States:</Text>
        {Object.values(TagDesign).filter(item => !item.startsWith('Set')).map(vs => <Tag key={vs} design={vs}>
              {vs}
            </Tag>)}
        <Text style={{
        flexGrow: 1,
        width: '100%'
      }}>Set1:</Text>
        {new Array(10).fill('').map((_, index) => <Tag key={index} design="Set1" colorScheme={\`\${index + 1}\`}>
            colorScheme: "{index + 1}"
          </Tag>)}
        <Text style={{
        flexGrow: 1,
        width: '100%'
      }}>Set2:</Text>
        {new Array(10).fill('').map((_, index) => <Tag key={index} design="Set2" colorScheme={\`\${index + 1}\`}>
            colorScheme: "{index + 1}"
          </Tag>)}
      </FlexBox>;
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`AllColors`]}));C();export{x as AllColors,b as Default,S as __namedExportsOrder,y as default,C as n,_ as t};