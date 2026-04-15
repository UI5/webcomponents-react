import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{t as i}from"./jsx-runtime-1ARNaUmP.js";import{n as a,t as o}from"./ValueState-AjdmyFaS.js";import{t as s}from"./enums-B63pHPP-.js";import{a as c,l,n as u,s as d,t as f}from"./FlexBox-ajQA924I.js";import{n as p,t as m}from"./Label-DBi07sen.js";import{n as h,t as g}from"./RadioButton-C7P_pRWQ.js";var _=n({Default:()=>x,RadioButtonGroups:()=>S,RadioButtonStates:()=>C,__namedExportsOrder:()=>w,default:()=>b}),v,y,b,x,S,C,w,T=e((()=>{o(),v=t(r(),1),u(),s(),p(),h(),y=i(),b={title:`Inputs / RadioButton`,component:g,argTypes:{},args:{valueState:a.None,text:`RadioButton`},tags:[`package:@ui5/webcomponents`]},x={},S={name:`RadioButton Groups`,render(){let e=(0,v.useId)();return(0,y.jsxs)(f,{style:{width:`600px`},justifyContent:c.SpaceBetween,children:[(0,y.jsxs)(f,{alignItems:l.Center,"aria-labelledby":`${e}-horizontal`,role:`radiogroup`,children:[(0,y.jsx)(m,{id:`${e}-horizontal`,children:`Horizontal Group: `}),(0,y.jsx)(g,{name:`GroupA`,text:`Option A`}),(0,y.jsx)(g,{name:`GroupA`,text:`Option B`}),(0,y.jsx)(g,{name:`GroupA`,text:`Option C`})]}),(0,y.jsxs)(f,{direction:d.Column,"aria-labelledby":`${e}-vertical`,role:`radiogroup`,children:[(0,y.jsx)(m,{id:`${e}-vertical`,children:`Vertical Group: `}),(0,y.jsx)(g,{name:`GroupB`,text:`Neutral`,valueState:a.None}),(0,y.jsx)(g,{name:`GroupB`,text:`Warning`,valueState:a.Critical}),(0,y.jsx)(g,{name:`GroupB`,text:`Critical`,valueState:a.Negative})]})]})}},C={name:`RadioButton States`,render(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g,{text:`Error`,valueState:a.Negative}),(0,y.jsx)(g,{text:`Warning`,valueState:a.Critical}),(0,y.jsx)(g,{text:`Disabled`,disabled:!0,checked:!0}),(0,y.jsx)(g,{text:`Readonly`,readonly:!0,checked:!0}),(0,y.jsx)(g,{text:`Error disabled`,disabled:!0,valueState:a.Negative,checked:!0}),(0,y.jsx)(g,{text:`Warning disabled `,disabled:!0,valueState:a.Critical,checked:!0}),(0,y.jsx)(g,{text:`Error readonly`,readonly:!0,valueState:a.Negative,checked:!0}),(0,y.jsx)(g,{text:`Warning readonly`,readonly:!0,valueState:a.Critical,checked:!0})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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