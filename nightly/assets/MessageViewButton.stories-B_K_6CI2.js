import{a as e,i as t}from"./preload-helper-DbRxMUml.js";import{Fm as n,Gd as r,H as i,Rd as a,V as o,Wd as s,nm as c,tm as l,zd as u}from"./iframe-C3dtzO-R.js";var d=e({Default:()=>m,Severities:()=>h,__namedExportsOrder:()=>g,default:()=>p}),f,p,m,h,g,_=t((()=>{l(),u(),r(),i(),f=n(),p={title:`Inputs / MessageViewButton`,component:o,argTypes:{},args:{},tags:[`package:@ui5/webcomponents-react`]},m={},h={render(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{children:`These buttons are ordered by severity, from high to low.`}),(0,f.jsxs)(s,{style:{gap:`1rem`},children:[(0,f.jsx)(o,{type:c.Negative}),(0,f.jsx)(o,{type:c.Critical}),(0,f.jsx)(o,{type:c.Positive}),(0,f.jsx)(o,{type:c.Information})]})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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