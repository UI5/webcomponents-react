import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{Ci as r,Cm as i,Si as a,Su as o,Wg as s,af as c,d as l,df as u,lf as d,mh as f,of as p,pf as m,wm as h,xu as g}from"./iframe-fmONFB0_.js";var _=e({Default:()=>x,RadioButtonGroups:()=>S,RadioButtonStates:()=>C,__namedExportsOrder:()=>w,default:()=>b}),v,y,b,x,S,C,w,T=n((()=>{i(),v=t(s(),1),p(),l(),o(),r(),y=f(),b={title:`Inputs / RadioButton`,component:a,argTypes:{},args:{valueState:h.None,text:`RadioButton`},tags:[`package:@ui5/webcomponents`]},x={},S={name:`RadioButton Groups`,render(){let e=(0,v.useId)();return(0,y.jsxs)(c,{style:{width:`600px`},justifyContent:d.SpaceBetween,children:[(0,y.jsxs)(c,{alignItems:m.Center,"aria-labelledby":`${e}-horizontal`,role:`radiogroup`,children:[(0,y.jsx)(g,{id:`${e}-horizontal`,children:`Horizontal Group: `}),(0,y.jsx)(a,{name:`GroupA`,text:`Option A`}),(0,y.jsx)(a,{name:`GroupA`,text:`Option B`}),(0,y.jsx)(a,{name:`GroupA`,text:`Option C`})]}),(0,y.jsxs)(c,{direction:u.Column,"aria-labelledby":`${e}-vertical`,role:`radiogroup`,children:[(0,y.jsx)(g,{id:`${e}-vertical`,children:`Vertical Group: `}),(0,y.jsx)(a,{name:`GroupB`,text:`Neutral`,valueState:h.None}),(0,y.jsx)(a,{name:`GroupB`,text:`Warning`,valueState:h.Critical}),(0,y.jsx)(a,{name:`GroupB`,text:`Critical`,valueState:h.Negative})]})]})}},C={name:`RadioButton States`,render(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{text:`Error`,valueState:h.Negative}),(0,y.jsx)(a,{text:`Warning`,valueState:h.Critical}),(0,y.jsx)(a,{text:`Disabled`,disabled:!0,checked:!0}),(0,y.jsx)(a,{text:`Readonly`,readonly:!0,checked:!0}),(0,y.jsx)(a,{text:`Error disabled`,disabled:!0,valueState:h.Negative,checked:!0}),(0,y.jsx)(a,{text:`Warning disabled `,disabled:!0,valueState:h.Critical,checked:!0}),(0,y.jsx)(a,{text:`Error readonly`,readonly:!0,valueState:h.Negative,checked:!0}),(0,y.jsx)(a,{text:`Warning readonly`,readonly:!0,valueState:h.Critical,checked:!0})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'RadioButton Groups',
  render() {
    const uniqueId = useId();
    return <FlexBox style={{
      width: '600px'
    }} justifyContent={FlexBoxJustifyContent.SpaceBetween}>
        <FlexBox alignItems={FlexBoxAlignItems.Center} aria-labelledby={\`\${uniqueId}-horizontal\`} role="radiogroup">
          <Label id={\`\${uniqueId}-horizontal\`}>Horizontal Group: </Label>
          <RadioButton name="GroupA" text="Option A" />
          <RadioButton name="GroupA" text="Option B" />
          <RadioButton name="GroupA" text="Option C" />
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column} aria-labelledby={\`\${uniqueId}-vertical\`} role="radiogroup">
          <Label id={\`\${uniqueId}-vertical\`}>Vertical Group: </Label>
          <RadioButton name="GroupB" text="Neutral" valueState={ValueState.None} />
          <RadioButton name="GroupB" text="Warning" valueState={ValueState.Critical} />
          <RadioButton name="GroupB" text="Critical" valueState={ValueState.Negative} />
        </FlexBox>
      </FlexBox>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'RadioButton States',
  render() {
    return <>
        <RadioButton text="Error" valueState={ValueState.Negative} />
        <RadioButton text="Warning" valueState={ValueState.Critical} />
        <RadioButton text="Disabled" disabled checked />
        <RadioButton text="Readonly" readonly checked />
        <RadioButton text="Error disabled" disabled valueState={ValueState.Negative} checked />
        <RadioButton text="Warning disabled " disabled valueState={ValueState.Critical} checked />
        <RadioButton text="Error readonly" readonly valueState={ValueState.Negative} checked />
        <RadioButton text="Warning readonly" readonly valueState={ValueState.Critical} checked />
      </>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`RadioButtonGroups`,`RadioButtonStates`]}));T();export{x as Default,S as RadioButtonGroups,C as RadioButtonStates,w as __namedExportsOrder,b as default,T as n,_ as t};