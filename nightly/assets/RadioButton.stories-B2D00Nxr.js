import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{$d as r,Dg as i,Gd as a,Kd as o,Yd as s,Ym as c,Zd as l,d as u,di as d,eu as f,fi as p,gm as m,hm as h,tu as g}from"./iframe-CVxYcULu.js";var _=n({Default:()=>x,RadioButtonGroups:()=>S,RadioButtonStates:()=>C,__namedExportsOrder:()=>w,default:()=>b}),v,y,b,x,S,C,w,T=e((()=>{h(),v=t(i(),1),o(),u(),g(),p(),y=c(),b={title:`Inputs / RadioButton`,component:d,argTypes:{},args:{valueState:m.None,text:`RadioButton`},tags:[`package:@ui5/webcomponents`]},x={},S={name:`RadioButton Groups`,render(){let e=(0,v.useId)();return(0,y.jsxs)(a,{style:{width:`600px`},justifyContent:s.SpaceBetween,children:[(0,y.jsxs)(a,{alignItems:r.Center,"aria-labelledby":`${e}-horizontal`,role:`radiogroup`,children:[(0,y.jsx)(f,{id:`${e}-horizontal`,children:`Horizontal Group: `}),(0,y.jsx)(d,{name:`GroupA`,text:`Option A`}),(0,y.jsx)(d,{name:`GroupA`,text:`Option B`}),(0,y.jsx)(d,{name:`GroupA`,text:`Option C`})]}),(0,y.jsxs)(a,{direction:l.Column,"aria-labelledby":`${e}-vertical`,role:`radiogroup`,children:[(0,y.jsx)(f,{id:`${e}-vertical`,children:`Vertical Group: `}),(0,y.jsx)(d,{name:`GroupB`,text:`Neutral`,valueState:m.None}),(0,y.jsx)(d,{name:`GroupB`,text:`Warning`,valueState:m.Critical}),(0,y.jsx)(d,{name:`GroupB`,text:`Critical`,valueState:m.Negative})]})]})}},C={name:`RadioButton States`,render(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d,{text:`Error`,valueState:m.Negative}),(0,y.jsx)(d,{text:`Warning`,valueState:m.Critical}),(0,y.jsx)(d,{text:`Disabled`,disabled:!0,checked:!0}),(0,y.jsx)(d,{text:`Readonly`,readonly:!0,checked:!0}),(0,y.jsx)(d,{text:`Error disabled`,disabled:!0,valueState:m.Negative,checked:!0}),(0,y.jsx)(d,{text:`Warning disabled `,disabled:!0,valueState:m.Critical,checked:!0}),(0,y.jsx)(d,{text:`Error readonly`,readonly:!0,valueState:m.Negative,checked:!0}),(0,y.jsx)(d,{text:`Warning readonly`,readonly:!0,valueState:m.Critical,checked:!0})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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