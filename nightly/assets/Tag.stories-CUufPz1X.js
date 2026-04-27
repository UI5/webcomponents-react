import{n as e,r as t}from"./chunk-jRWAZmH_.js";import{As as n,Bd as r,Fn as i,Gd as a,Gm as o,In as s,Kd as c,Ud as l,Wd as u,cf as d,fl as f,js as p,pl as m,sf as h,zd as g}from"./iframe-S6__9jAv.js";var _=t({AllColors:()=>x,Default:()=>b,__namedExportsOrder:()=>S,default:()=>y}),v,y,b,x,S,C=e((()=>{p(),m(),u(),c(),r(),d(),s(),v=o(),y={title:`Data Display / Tag`,component:i,argTypes:{children:{control:`text`},icon:{control:{disable:!0}}},args:{children:`Tag Text`,icon:(0,v.jsx)(h,{name:f})},tags:[`package:@ui5/webcomponents`]},b={},x={render(){return(0,v.jsxs)(l,{wrap:a.Wrap,style:{gap:`0.5rem`},children:[(0,v.jsx)(g,{style:{flexGrow:1,width:`100%`},children:`Value States:`}),Object.values(n).filter(e=>!e.startsWith(`Set`)).map(e=>(0,v.jsx)(i,{design:e,children:e},e)),(0,v.jsx)(g,{style:{flexGrow:1,width:`100%`},children:`Set1:`}),Array(10).fill(``).map((e,t)=>(0,v.jsxs)(i,{design:`Set1`,colorScheme:`${t+1}`,children:[`colorScheme: "`,t+1,`"`]},t)),(0,v.jsx)(g,{style:{flexGrow:1,width:`100%`},children:`Set2:`}),Array(10).fill(``).map((e,t)=>(0,v.jsxs)(i,{design:`Set2`,colorScheme:`${t+1}`,children:[`colorScheme: "`,t+1,`"`]},t))]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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