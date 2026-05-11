import{n as e,r as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./jsx-runtime-CeCnFQbk.js";import{n as r,t as i}from"./ValueState-DD4evZYJ.js";import{n as a,t as o}from"./Icon-ClVtz2hF.js";import{a as s,r as c}from"./FlexBoxWrap-Bk3KBAvP.js";import{n as l,t as u}from"./FlexBox--m408lZ7.js";import{n as d,t as f}from"./Label-0amqqGPL.js";import{n as p,t as m}from"./employee-BbOP3Dvh.js";import{i as h,n as g,r as _,t as v}from"./ComboBoxItem-C90PcO8A.js";import{n as y,t as b}from"./ComboBoxItemGroup-FU-s59FJ.js";import{d as x}from"./iframe-DJRlLyTh.js";var S=t({Default:()=>T,FilterTypes:()=>D,WithGroups:()=>E,__namedExportsOrder:()=>O,default:()=>w}),C,w,T,E,D,O,k=e((()=>{i(),p(),l(),x(),g(),y(),a(),d(),h(),C=n(),w={title:`Inputs / ComboBox`,component:_,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:r.None,icon:(0,C.jsx)(o,{name:m})},tags:[`package:@ui5/webcomponents`]},T={render:e=>(0,C.jsxs)(_,{...e,children:[(0,C.jsx)(v,{text:`ComboBox Entry 1`}),(0,C.jsx)(v,{text:`ComboBox Entry 2`}),(0,C.jsx)(v,{text:`ComboBox Entry 3`}),(0,C.jsx)(v,{text:`ComboBox Entry 4`}),(0,C.jsx)(v,{text:`ComboBox Entry 5`})]})},E={render(e){return(0,C.jsxs)(_,{...e,children:[(0,C.jsxs)(b,{headerText:`Group 1`,children:[(0,C.jsx)(v,{text:`ComboBox Entry 1`}),(0,C.jsx)(v,{text:`ComboBox Entry 2`})]}),(0,C.jsxs)(b,{headerText:`Group 2`,children:[(0,C.jsx)(v,{text:`ComboBox Entry 3`}),(0,C.jsx)(v,{text:`ComboBox Entry 4`}),(0,C.jsx)(v,{text:`ComboBox Entry 5`})]})]})}},D={render:()=>(0,C.jsxs)(u,{justifyContent:c.SpaceBetween,children:[(0,C.jsxs)(u,{direction:s.Column,children:[(0,C.jsx)(f,{children:`StartsWithPerTerm (Default)`}),(0,C.jsxs)(_,{filter:`StartsWithPerTerm`,children:[(0,C.jsx)(v,{text:`Austria`}),(0,C.jsx)(v,{text:`United Arab Emirates`}),(0,C.jsx)(v,{text:`Czech Republic`}),(0,C.jsx)(v,{text:`United Kingdom`}),(0,C.jsx)(v,{text:`China`}),(0,C.jsx)(v,{text:`Ukraine`}),(0,C.jsx)(v,{text:`Australia`}),(0,C.jsx)(v,{text:`Russia`})]})]}),(0,C.jsxs)(u,{direction:s.Column,children:[(0,C.jsx)(f,{children:`StartsWith`}),(0,C.jsxs)(_,{filter:`StartsWith`,children:[(0,C.jsx)(v,{text:`Austria`}),(0,C.jsx)(v,{text:`United Arab Emirates`}),(0,C.jsx)(v,{text:`Czech Republic`}),(0,C.jsx)(v,{text:`United Kingdom`}),(0,C.jsx)(v,{text:`China`}),(0,C.jsx)(v,{text:`Ukraine`}),(0,C.jsx)(v,{text:`Australia`}),(0,C.jsx)(v,{text:`Russia`})]})]}),(0,C.jsxs)(u,{direction:s.Column,children:[(0,C.jsx)(f,{children:`Contains`}),(0,C.jsxs)(_,{filter:`Contains`,children:[(0,C.jsx)(v,{text:`Austria`}),(0,C.jsx)(v,{text:`United Arab Emirates`}),(0,C.jsx)(v,{text:`Czech Republic`}),(0,C.jsx)(v,{text:`United Kingdom`}),(0,C.jsx)(v,{text:`China`}),(0,C.jsx)(v,{text:`Ukraine`}),(0,C.jsx)(v,{text:`Australia`}),(0,C.jsx)(v,{text:`Russia`})]})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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