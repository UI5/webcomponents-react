import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-1ARNaUmP.js";import{n as r,t as i}from"./ValueState-AjdmyFaS.js";import{n as a,t as o}from"./CheckBox-C5uFpL7z.js";var s=t({CheckBoxStates:()=>d,Default:()=>u,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f,p=e((()=>{i(),a(),c=n(),l={title:`Inputs / CheckBox`,component:o,argTypes:{},args:{valueState:r.None,text:`CheckBox`},tags:[`package:@ui5/webcomponents`]},u={},d={name:`CheckBox States`,render(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{text:`Error`,valueState:r.Negative}),(0,c.jsx)(o,{text:`Warning`,valueState:r.Critical}),(0,c.jsx)(o,{text:`Disabled`,disabled:!0,checked:!0}),(0,c.jsx)(o,{text:`Readonly`,readonly:!0,checked:!0}),(0,c.jsx)(o,{text:`Error disabled`,disabled:!0,valueState:r.Negative,checked:!0}),(0,c.jsx)(o,{text:`Warning disabled `,disabled:!0,valueState:r.Critical,checked:!0}),(0,c.jsx)(o,{text:`Error readonly`,readonly:!0,valueState:r.Negative,checked:!0}),(0,c.jsx)(o,{text:`Warning readonly`,readonly:!0,valueState:r.Critical,checked:!0})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'CheckBox States',
  render() {
    return <>
        <CheckBox text="Error" valueState={ValueState.Negative} />
        <CheckBox text="Warning" valueState={ValueState.Critical} />
        <CheckBox text="Disabled" disabled checked />
        <CheckBox text="Readonly" readonly checked />
        <CheckBox text="Error disabled" disabled valueState={ValueState.Negative} checked />
        <CheckBox text="Warning disabled " disabled valueState={ValueState.Critical} checked />
        <CheckBox text="Error readonly" readonly valueState={ValueState.Negative} checked />
        <CheckBox text="Warning readonly" readonly valueState={ValueState.Critical} checked />
      </>;
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`CheckBoxStates`]}));p();export{d as CheckBoxStates,u as Default,f as __namedExportsOrder,l as default,p as n,s as t};