import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{n as r,t as i}from"./ValueState-Dgqs87Xk.js";import{n as a,t as o}from"./Icon-CovOCkxT.js";import{a as s,r as c}from"./FlexBoxWrap-CcJK0Ofi.js";import{n as l,t as u}from"./Label-Ca_gj0Fj.js";import{n as d,t as f}from"./employee-JtKPSfXP.js";import{i as p,n as m,r as h,t as g}from"./ComboBoxItem-D3XdE-yk.js";import{n as _,t as v}from"./ComboBoxItemGroup-DscxcWl6.js";import{d as y,vt as b,yt as x}from"./iframe-BCsGPyEy.js";var S=e({Default:()=>T,FilterTypes:()=>D,WithGroups:()=>E,__namedExportsOrder:()=>O,default:()=>w}),C,w,T,E,D,O,k=t((()=>{i(),d(),x(),y(),m(),_(),a(),l(),p(),C=n(),w={title:`Inputs / ComboBox`,component:h,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:r.None,icon:(0,C.jsx)(o,{name:f})},tags:[`package:@ui5/webcomponents`]},T={render:e=>(0,C.jsxs)(h,{...e,children:[(0,C.jsx)(g,{text:`ComboBox Entry 1`}),(0,C.jsx)(g,{text:`ComboBox Entry 2`}),(0,C.jsx)(g,{text:`ComboBox Entry 3`}),(0,C.jsx)(g,{text:`ComboBox Entry 4`}),(0,C.jsx)(g,{text:`ComboBox Entry 5`})]})},E={render(e){return(0,C.jsxs)(h,{...e,children:[(0,C.jsxs)(v,{headerText:`Group 1`,children:[(0,C.jsx)(g,{text:`ComboBox Entry 1`}),(0,C.jsx)(g,{text:`ComboBox Entry 2`})]}),(0,C.jsxs)(v,{headerText:`Group 2`,children:[(0,C.jsx)(g,{text:`ComboBox Entry 3`}),(0,C.jsx)(g,{text:`ComboBox Entry 4`}),(0,C.jsx)(g,{text:`ComboBox Entry 5`})]})]})}},D={render:()=>(0,C.jsxs)(b,{justifyContent:c.SpaceBetween,children:[(0,C.jsxs)(b,{direction:s.Column,children:[(0,C.jsx)(u,{children:`StartsWithPerTerm (Default)`}),(0,C.jsxs)(h,{filter:`StartsWithPerTerm`,children:[(0,C.jsx)(g,{text:`Austria`}),(0,C.jsx)(g,{text:`United Arab Emirates`}),(0,C.jsx)(g,{text:`Czech Republic`}),(0,C.jsx)(g,{text:`United Kingdom`}),(0,C.jsx)(g,{text:`China`}),(0,C.jsx)(g,{text:`Ukraine`}),(0,C.jsx)(g,{text:`Australia`}),(0,C.jsx)(g,{text:`Russia`})]})]}),(0,C.jsxs)(b,{direction:s.Column,children:[(0,C.jsx)(u,{children:`StartsWith`}),(0,C.jsxs)(h,{filter:`StartsWith`,children:[(0,C.jsx)(g,{text:`Austria`}),(0,C.jsx)(g,{text:`United Arab Emirates`}),(0,C.jsx)(g,{text:`Czech Republic`}),(0,C.jsx)(g,{text:`United Kingdom`}),(0,C.jsx)(g,{text:`China`}),(0,C.jsx)(g,{text:`Ukraine`}),(0,C.jsx)(g,{text:`Australia`}),(0,C.jsx)(g,{text:`Russia`})]})]}),(0,C.jsxs)(b,{direction:s.Column,children:[(0,C.jsx)(u,{children:`Contains`}),(0,C.jsxs)(h,{filter:`Contains`,children:[(0,C.jsx)(g,{text:`Austria`}),(0,C.jsx)(g,{text:`United Arab Emirates`}),(0,C.jsx)(g,{text:`Czech Republic`}),(0,C.jsx)(g,{text:`United Kingdom`}),(0,C.jsx)(g,{text:`China`}),(0,C.jsx)(g,{text:`Ukraine`}),(0,C.jsx)(g,{text:`Australia`}),(0,C.jsx)(g,{text:`Russia`})]})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ComboBox {...args}>
        <ComboBoxItem text="ComboBox Entry 1" />
        <ComboBoxItem text="ComboBox Entry 2" />
        <ComboBoxItem text="ComboBox Entry 3" />
        <ComboBoxItem text="ComboBox Entry 4" />
        <ComboBoxItem text="ComboBox Entry 5" />
      </ComboBox>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <ComboBox {...args}>
        <ComboBoxItemGroup headerText="Group 1">
          <ComboBoxItem text="ComboBox Entry 1" />
          <ComboBoxItem text="ComboBox Entry 2" />
        </ComboBoxItemGroup>
        <ComboBoxItemGroup headerText="Group 2">
          <ComboBoxItem text="ComboBox Entry 3" />
          <ComboBoxItem text="ComboBox Entry 4" />
          <ComboBoxItem text="ComboBox Entry 5" />
        </ComboBoxItemGroup>
      </ComboBox>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
        <FlexBox direction={FlexBoxDirection.Column}>
          <Label>StartsWithPerTerm (Default)</Label>
          <ComboBox filter="StartsWithPerTerm">
            <ComboBoxItem text="Austria" />
            <ComboBoxItem text="United Arab Emirates" />
            <ComboBoxItem text="Czech Republic" />
            <ComboBoxItem text="United Kingdom" />
            <ComboBoxItem text="China" />
            <ComboBoxItem text="Ukraine" />
            <ComboBoxItem text="Australia" />
            <ComboBoxItem text="Russia" />
          </ComboBox>
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column}>
          <Label>StartsWith</Label>
          <ComboBox filter="StartsWith">
            <ComboBoxItem text="Austria" />
            <ComboBoxItem text="United Arab Emirates" />
            <ComboBoxItem text="Czech Republic" />
            <ComboBoxItem text="United Kingdom" />
            <ComboBoxItem text="China" />
            <ComboBoxItem text="Ukraine" />
            <ComboBoxItem text="Australia" />
            <ComboBoxItem text="Russia" />
          </ComboBox>
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column}>
          <Label>Contains</Label>
          <ComboBox filter="Contains">
            <ComboBoxItem text="Austria" />
            <ComboBoxItem text="United Arab Emirates" />
            <ComboBoxItem text="Czech Republic" />
            <ComboBoxItem text="United Kingdom" />
            <ComboBoxItem text="China" />
            <ComboBoxItem text="Ukraine" />
            <ComboBoxItem text="Australia" />
            <ComboBoxItem text="Russia" />
          </ComboBox>
        </FlexBox>
      </FlexBox>;
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithGroups`,`FilterTypes`]}));k();export{T as Default,D as FilterTypes,E as WithGroups,O as __namedExportsOrder,w as default,k as n,S as t};