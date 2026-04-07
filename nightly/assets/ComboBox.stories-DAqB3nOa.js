import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{Jd as n,Jm as r,So as i,Ud as a,Wd as o,_o as s,af as c,bo as l,d as u,dm as d,eu as f,fl as p,of as m,pl as h,qd as g,tu as _,um as v,vo as y,xo as b,yo as x}from"./iframe-DGn8PGW2.js";var S=t({Default:()=>T,FilterTypes:()=>D,WithGroups:()=>E,__namedExportsOrder:()=>O,default:()=>w}),C,w,T,E,D,O,k=e((()=>{v(),h(),o(),u(),l(),y(),m(),_(),i(),C=r(),w={title:`Inputs / ComboBox`,component:b,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:d.None,icon:(0,C.jsx)(c,{name:p})},tags:[`package:@ui5/webcomponents`]},T={render:e=>(0,C.jsxs)(b,{...e,children:[(0,C.jsx)(x,{text:`ComboBox Entry 1`}),(0,C.jsx)(x,{text:`ComboBox Entry 2`}),(0,C.jsx)(x,{text:`ComboBox Entry 3`}),(0,C.jsx)(x,{text:`ComboBox Entry 4`}),(0,C.jsx)(x,{text:`ComboBox Entry 5`})]})},E={render(e){return(0,C.jsxs)(b,{...e,children:[(0,C.jsxs)(s,{headerText:`Group 1`,children:[(0,C.jsx)(x,{text:`ComboBox Entry 1`}),(0,C.jsx)(x,{text:`ComboBox Entry 2`})]}),(0,C.jsxs)(s,{headerText:`Group 2`,children:[(0,C.jsx)(x,{text:`ComboBox Entry 3`}),(0,C.jsx)(x,{text:`ComboBox Entry 4`}),(0,C.jsx)(x,{text:`ComboBox Entry 5`})]})]})}},D={render:()=>(0,C.jsxs)(a,{justifyContent:g.SpaceBetween,children:[(0,C.jsxs)(a,{direction:n.Column,children:[(0,C.jsx)(f,{children:`StartsWithPerTerm (Default)`}),(0,C.jsxs)(b,{filter:`StartsWithPerTerm`,children:[(0,C.jsx)(x,{text:`Austria`}),(0,C.jsx)(x,{text:`United Arab Emirates`}),(0,C.jsx)(x,{text:`Czech Republic`}),(0,C.jsx)(x,{text:`United Kingdom`}),(0,C.jsx)(x,{text:`China`}),(0,C.jsx)(x,{text:`Ukraine`}),(0,C.jsx)(x,{text:`Australia`}),(0,C.jsx)(x,{text:`Russia`})]})]}),(0,C.jsxs)(a,{direction:n.Column,children:[(0,C.jsx)(f,{children:`StartsWith`}),(0,C.jsxs)(b,{filter:`StartsWith`,children:[(0,C.jsx)(x,{text:`Austria`}),(0,C.jsx)(x,{text:`United Arab Emirates`}),(0,C.jsx)(x,{text:`Czech Republic`}),(0,C.jsx)(x,{text:`United Kingdom`}),(0,C.jsx)(x,{text:`China`}),(0,C.jsx)(x,{text:`Ukraine`}),(0,C.jsx)(x,{text:`Australia`}),(0,C.jsx)(x,{text:`Russia`})]})]}),(0,C.jsxs)(a,{direction:n.Column,children:[(0,C.jsx)(f,{children:`Contains`}),(0,C.jsxs)(b,{filter:`Contains`,children:[(0,C.jsx)(x,{text:`Austria`}),(0,C.jsx)(x,{text:`United Arab Emirates`}),(0,C.jsx)(x,{text:`Czech Republic`}),(0,C.jsx)(x,{text:`United Kingdom`}),(0,C.jsx)(x,{text:`China`}),(0,C.jsx)(x,{text:`Ukraine`}),(0,C.jsx)(x,{text:`Australia`}),(0,C.jsx)(x,{text:`Russia`})]})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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