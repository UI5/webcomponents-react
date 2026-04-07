import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{Gd as r,Hd as i,Jd as a,Kd as o,Vd as s,Wm as c,d as l,di as u,eu as d,fi as f,mg as p,om as m,sm as h,tu as g}from"./iframe-CHoWihFp.js";var _=n({Default:()=>x,RadioButtonGroups:()=>S,RadioButtonStates:()=>C,__namedExportsOrder:()=>w,default:()=>b}),v,y,b,x,S,C,w,T=e((()=>{m(),v=t(p(),1),i(),l(),g(),f(),y=c(),b={title:`Inputs / RadioButton`,component:u,argTypes:{},args:{valueState:h.None,text:`RadioButton`},tags:[`package:@ui5/webcomponents`]},x={},S={name:`RadioButton Groups`,render(){let e=(0,v.useId)();return(0,y.jsxs)(s,{style:{width:`600px`},justifyContent:r.SpaceBetween,children:[(0,y.jsxs)(s,{alignItems:a.Center,"aria-labelledby":`${e}-horizontal`,role:`radiogroup`,children:[(0,y.jsx)(d,{id:`${e}-horizontal`,children:`Horizontal Group: `}),(0,y.jsx)(u,{name:`GroupA`,text:`Option A`}),(0,y.jsx)(u,{name:`GroupA`,text:`Option B`}),(0,y.jsx)(u,{name:`GroupA`,text:`Option C`})]}),(0,y.jsxs)(s,{direction:o.Column,"aria-labelledby":`${e}-vertical`,role:`radiogroup`,children:[(0,y.jsx)(d,{id:`${e}-vertical`,children:`Vertical Group: `}),(0,y.jsx)(u,{name:`GroupB`,text:`Neutral`,valueState:h.None}),(0,y.jsx)(u,{name:`GroupB`,text:`Warning`,valueState:h.Critical}),(0,y.jsx)(u,{name:`GroupB`,text:`Critical`,valueState:h.Negative})]})]})}},C={name:`RadioButton States`,render(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u,{text:`Error`,valueState:h.Negative}),(0,y.jsx)(u,{text:`Warning`,valueState:h.Critical}),(0,y.jsx)(u,{text:`Disabled`,disabled:!0,checked:!0}),(0,y.jsx)(u,{text:`Readonly`,readonly:!0,checked:!0}),(0,y.jsx)(u,{text:`Error disabled`,disabled:!0,valueState:h.Negative,checked:!0}),(0,y.jsx)(u,{text:`Warning disabled `,disabled:!0,valueState:h.Critical,checked:!0}),(0,y.jsx)(u,{text:`Error readonly`,readonly:!0,valueState:h.Negative,checked:!0}),(0,y.jsx)(u,{text:`Warning readonly`,readonly:!0,valueState:h.Critical,checked:!0})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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