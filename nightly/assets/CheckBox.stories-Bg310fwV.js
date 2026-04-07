import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{Wm as n,bp as r,om as i,sm as a,xp as o}from"./iframe-Cka0UKMq.js";var s=t({CheckBoxStates:()=>d,Default:()=>u,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f,p=e((()=>{i(),o(),c=n(),l={title:`Inputs / CheckBox`,component:r,argTypes:{},args:{valueState:a.None,text:`CheckBox`},tags:[`package:@ui5/webcomponents`]},u={},d={name:`CheckBox States`,render(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{text:`Error`,valueState:a.Negative}),(0,c.jsx)(r,{text:`Warning`,valueState:a.Critical}),(0,c.jsx)(r,{text:`Disabled`,disabled:!0,checked:!0}),(0,c.jsx)(r,{text:`Readonly`,readonly:!0,checked:!0}),(0,c.jsx)(r,{text:`Error disabled`,disabled:!0,valueState:a.Negative,checked:!0}),(0,c.jsx)(r,{text:`Warning disabled `,disabled:!0,valueState:a.Critical,checked:!0}),(0,c.jsx)(r,{text:`Error readonly`,readonly:!0,valueState:a.Negative,checked:!0}),(0,c.jsx)(r,{text:`Warning readonly`,readonly:!0,valueState:a.Critical,checked:!0})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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