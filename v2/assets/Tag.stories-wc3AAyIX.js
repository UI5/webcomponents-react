import{n as e,r as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./jsx-runtime-CeCnFQbk.js";import{n as r,t as i}from"./Icon-CBKhb2yj.js";import{n as a,t as o}from"./FlexBoxWrap-Bk3KBAvP.js";import{n as s,t as c}from"./FlexBox-DUCCh4zS.js";import{n as l,t as u}from"./Text-Db-7hLVI.js";import{i as d,r as f}from"./Tag-Dfvy8PGs.js";import{n as p,t as m}from"./employee-CJOTKTTZ.js";import{n as h,t as g}from"./Tag-D3dPGZGc.js";var _=t({AllColors:()=>x,Default:()=>b,__namedExportsOrder:()=>S,default:()=>y}),v,y,b,x,S,C=e((()=>{d(),p(),s(),a(),l(),r(),h(),v=n(),y={title:`Data Display / Tag`,component:g,argTypes:{children:{control:`text`},icon:{control:{disable:!0}}},args:{children:`Tag Text`,icon:(0,v.jsx)(i,{name:m})},tags:[`package:@ui5/webcomponents`]},b={},x={render(){return(0,v.jsxs)(c,{wrap:o.Wrap,style:{gap:`0.5rem`},children:[(0,v.jsx)(u,{style:{flexGrow:1,width:`100%`},children:`Value States:`}),Object.values(f).filter(e=>!e.startsWith(`Set`)).map(e=>(0,v.jsx)(g,{design:e,children:e},e)),(0,v.jsx)(u,{style:{flexGrow:1,width:`100%`},children:`Set1:`}),Array(10).fill(``).map((e,t)=>(0,v.jsxs)(g,{design:`Set1`,colorScheme:`${t+1}`,children:[`colorScheme: "`,t+1,`"`]},t)),(0,v.jsx)(u,{style:{flexGrow:1,width:`100%`},children:`Set2:`}),Array(10).fill(``).map((e,t)=>(0,v.jsxs)(g,{design:`Set2`,colorScheme:`${t+1}`,children:[`colorScheme: "`,t+1,`"`]},t))]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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