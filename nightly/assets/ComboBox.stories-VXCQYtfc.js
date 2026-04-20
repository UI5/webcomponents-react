import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-CNp2Ms8r.js";import{n as r,t as i}from"./ValueState-BUbtrWoD.js";import{t as a}from"./enums-Bw9ymXWL.js";import{n as o,t as s}from"./Icon-D-tCRKww.js";import{a as c,r as l}from"./FlexBoxWrap-R8l13u1Y.js";import{n as u,t as d}from"./FlexBox-DIs0eIK-.js";import{n as f,t as p}from"./Label-DM3sXzRc.js";import{n as m,t as h}from"./employee-BQg2fU8R.js";import{i as g,n as _,r as v,t as y}from"./ComboBoxItem-BEP_8G_A.js";import{n as b,t as x}from"./ComboBoxItemGroup-BJGE7-VQ.js";var S=t({Default:()=>T,FilterTypes:()=>D,WithGroups:()=>E,__namedExportsOrder:()=>O,default:()=>w}),C,w,T,E,D,O,k=e((()=>{i(),m(),u(),a(),_(),b(),o(),f(),g(),C=n(),w={title:`Inputs / ComboBox`,component:v,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:r.None,icon:(0,C.jsx)(s,{name:h})},tags:[`package:@ui5/webcomponents`]},T={render:e=>(0,C.jsxs)(v,{...e,children:[(0,C.jsx)(y,{text:`ComboBox Entry 1`}),(0,C.jsx)(y,{text:`ComboBox Entry 2`}),(0,C.jsx)(y,{text:`ComboBox Entry 3`}),(0,C.jsx)(y,{text:`ComboBox Entry 4`}),(0,C.jsx)(y,{text:`ComboBox Entry 5`})]})},E={render(e){return(0,C.jsxs)(v,{...e,children:[(0,C.jsxs)(x,{headerText:`Group 1`,children:[(0,C.jsx)(y,{text:`ComboBox Entry 1`}),(0,C.jsx)(y,{text:`ComboBox Entry 2`})]}),(0,C.jsxs)(x,{headerText:`Group 2`,children:[(0,C.jsx)(y,{text:`ComboBox Entry 3`}),(0,C.jsx)(y,{text:`ComboBox Entry 4`}),(0,C.jsx)(y,{text:`ComboBox Entry 5`})]})]})}},D={render:()=>(0,C.jsxs)(d,{justifyContent:l.SpaceBetween,children:[(0,C.jsxs)(d,{direction:c.Column,children:[(0,C.jsx)(p,{children:`StartsWithPerTerm (Default)`}),(0,C.jsxs)(v,{filter:`StartsWithPerTerm`,children:[(0,C.jsx)(y,{text:`Austria`}),(0,C.jsx)(y,{text:`United Arab Emirates`}),(0,C.jsx)(y,{text:`Czech Republic`}),(0,C.jsx)(y,{text:`United Kingdom`}),(0,C.jsx)(y,{text:`China`}),(0,C.jsx)(y,{text:`Ukraine`}),(0,C.jsx)(y,{text:`Australia`}),(0,C.jsx)(y,{text:`Russia`})]})]}),(0,C.jsxs)(d,{direction:c.Column,children:[(0,C.jsx)(p,{children:`StartsWith`}),(0,C.jsxs)(v,{filter:`StartsWith`,children:[(0,C.jsx)(y,{text:`Austria`}),(0,C.jsx)(y,{text:`United Arab Emirates`}),(0,C.jsx)(y,{text:`Czech Republic`}),(0,C.jsx)(y,{text:`United Kingdom`}),(0,C.jsx)(y,{text:`China`}),(0,C.jsx)(y,{text:`Ukraine`}),(0,C.jsx)(y,{text:`Australia`}),(0,C.jsx)(y,{text:`Russia`})]})]}),(0,C.jsxs)(d,{direction:c.Column,children:[(0,C.jsx)(p,{children:`Contains`}),(0,C.jsxs)(v,{filter:`Contains`,children:[(0,C.jsx)(y,{text:`Austria`}),(0,C.jsx)(y,{text:`United Arab Emirates`}),(0,C.jsx)(y,{text:`Czech Republic`}),(0,C.jsx)(y,{text:`United Kingdom`}),(0,C.jsx)(y,{text:`China`}),(0,C.jsx)(y,{text:`Ukraine`}),(0,C.jsx)(y,{text:`Australia`}),(0,C.jsx)(y,{text:`Russia`})]})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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