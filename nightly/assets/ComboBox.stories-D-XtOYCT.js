import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Bo as n,Cf as r,Ho as i,Lo as a,Ml as o,Nl as s,Ro as c,Vo as l,bu as u,d,ef as f,if as p,lh as m,of as h,tf as g,vm as _,wf as v,xu as y,ym as b,zo as x}from"./iframe-BFNrDpIh.js";var S=e({Default:()=>T,FilterTypes:()=>D,WithGroups:()=>E,__namedExportsOrder:()=>O,default:()=>w}),C,w,T,E,D,O,k=t((()=>{_(),s(),g(),d(),n(),c(),v(),y(),i(),C=m(),w={title:`Inputs / ComboBox`,component:l,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:b.None,icon:(0,C.jsx)(r,{name:o})},tags:[`package:@ui5/webcomponents`]},T={render:e=>(0,C.jsxs)(l,{...e,children:[(0,C.jsx)(x,{text:`ComboBox Entry 1`}),(0,C.jsx)(x,{text:`ComboBox Entry 2`}),(0,C.jsx)(x,{text:`ComboBox Entry 3`}),(0,C.jsx)(x,{text:`ComboBox Entry 4`}),(0,C.jsx)(x,{text:`ComboBox Entry 5`})]})},E={render(e){return(0,C.jsxs)(l,{...e,children:[(0,C.jsxs)(a,{headerText:`Group 1`,children:[(0,C.jsx)(x,{text:`ComboBox Entry 1`}),(0,C.jsx)(x,{text:`ComboBox Entry 2`})]}),(0,C.jsxs)(a,{headerText:`Group 2`,children:[(0,C.jsx)(x,{text:`ComboBox Entry 3`}),(0,C.jsx)(x,{text:`ComboBox Entry 4`}),(0,C.jsx)(x,{text:`ComboBox Entry 5`})]})]})}},D={render:()=>(0,C.jsxs)(f,{justifyContent:p.SpaceBetween,children:[(0,C.jsxs)(f,{direction:h.Column,children:[(0,C.jsx)(u,{children:`StartsWithPerTerm (Default)`}),(0,C.jsxs)(l,{filter:`StartsWithPerTerm`,children:[(0,C.jsx)(x,{text:`Austria`}),(0,C.jsx)(x,{text:`United Arab Emirates`}),(0,C.jsx)(x,{text:`Czech Republic`}),(0,C.jsx)(x,{text:`United Kingdom`}),(0,C.jsx)(x,{text:`China`}),(0,C.jsx)(x,{text:`Ukraine`}),(0,C.jsx)(x,{text:`Australia`}),(0,C.jsx)(x,{text:`Russia`})]})]}),(0,C.jsxs)(f,{direction:h.Column,children:[(0,C.jsx)(u,{children:`StartsWith`}),(0,C.jsxs)(l,{filter:`StartsWith`,children:[(0,C.jsx)(x,{text:`Austria`}),(0,C.jsx)(x,{text:`United Arab Emirates`}),(0,C.jsx)(x,{text:`Czech Republic`}),(0,C.jsx)(x,{text:`United Kingdom`}),(0,C.jsx)(x,{text:`China`}),(0,C.jsx)(x,{text:`Ukraine`}),(0,C.jsx)(x,{text:`Australia`}),(0,C.jsx)(x,{text:`Russia`})]})]}),(0,C.jsxs)(f,{direction:h.Column,children:[(0,C.jsx)(u,{children:`Contains`}),(0,C.jsxs)(l,{filter:`Contains`,children:[(0,C.jsx)(x,{text:`Austria`}),(0,C.jsx)(x,{text:`United Arab Emirates`}),(0,C.jsx)(x,{text:`Czech Republic`}),(0,C.jsx)(x,{text:`United Kingdom`}),(0,C.jsx)(x,{text:`China`}),(0,C.jsx)(x,{text:`Ukraine`}),(0,C.jsx)(x,{text:`Australia`}),(0,C.jsx)(x,{text:`Russia`})]})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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