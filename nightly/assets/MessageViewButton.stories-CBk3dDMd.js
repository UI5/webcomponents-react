import{n as e,r as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{n as r,t as i}from"./ValueState-D2NAsvuR.js";import{n as a,t as o}from"./FlexBox-Dxzw0yJk.js";import{n as s,t as c}from"./Text-BGpaBiln.js";import{L as l,R as u}from"./iframe-Coh27dv5.js";var d=t({Default:()=>m,Severities:()=>h,__namedExportsOrder:()=>g,default:()=>p}),f,p,m,h,g,_=e((()=>{i(),s(),a(),u(),f=n(),p={title:`Inputs / MessageViewButton`,component:l,argTypes:{},args:{},tags:[`package:@ui5/webcomponents-react`]},m={},h={render(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c,{children:`These buttons are ordered by severity, from high to low.`}),(0,f.jsxs)(o,{style:{gap:`1rem`},children:[(0,f.jsx)(l,{type:r.Negative}),(0,f.jsx)(l,{type:r.Critical}),(0,f.jsx)(l,{type:r.Positive}),(0,f.jsx)(l,{type:r.Information})]})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render() {
    return <>
        <Text>These buttons are ordered by severity, from high to low.</Text>
        <FlexBox style={{
        gap: '1rem'
      }}>
          <MessageViewButton type={ValueState.Negative} />
          <MessageViewButton type={ValueState.Critical} />
          <MessageViewButton type={ValueState.Positive} />
          <MessageViewButton type={ValueState.Information} />
        </FlexBox>
      </>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Severities`]}));_();export{m as Default,h as Severities,g as __namedExportsOrder,p as default,_ as n,d as t};