import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Bo as n,Cm as r,Ho as i,Nl as a,Of as o,Pl as s,Ro as c,Su as l,Uo as u,Vo as d,af as f,d as p,df as m,kf as h,lf as g,mh as _,of as v,wm as y,xu as b,zo as x}from"./iframe-B3_8Vy_N.js";var S=e({Default:()=>T,FilterTypes:()=>D,WithGroups:()=>E,__namedExportsOrder:()=>O,default:()=>w}),C,w,T,E,D,O,k=t((()=>{r(),s(),v(),p(),d(),x(),h(),l(),u(),C=_(),w={title:`Inputs / ComboBox`,component:i,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:y.None,icon:(0,C.jsx)(o,{name:a})},tags:[`package:@ui5/webcomponents`]},T={render:e=>(0,C.jsxs)(i,{...e,children:[(0,C.jsx)(n,{text:`ComboBox Entry 1`}),(0,C.jsx)(n,{text:`ComboBox Entry 2`}),(0,C.jsx)(n,{text:`ComboBox Entry 3`}),(0,C.jsx)(n,{text:`ComboBox Entry 4`}),(0,C.jsx)(n,{text:`ComboBox Entry 5`})]})},E={render(e){return(0,C.jsxs)(i,{...e,children:[(0,C.jsxs)(c,{headerText:`Group 1`,children:[(0,C.jsx)(n,{text:`ComboBox Entry 1`}),(0,C.jsx)(n,{text:`ComboBox Entry 2`})]}),(0,C.jsxs)(c,{headerText:`Group 2`,children:[(0,C.jsx)(n,{text:`ComboBox Entry 3`}),(0,C.jsx)(n,{text:`ComboBox Entry 4`}),(0,C.jsx)(n,{text:`ComboBox Entry 5`})]})]})}},D={render:()=>(0,C.jsxs)(f,{justifyContent:g.SpaceBetween,children:[(0,C.jsxs)(f,{direction:m.Column,children:[(0,C.jsx)(b,{children:`StartsWithPerTerm (Default)`}),(0,C.jsxs)(i,{filter:`StartsWithPerTerm`,children:[(0,C.jsx)(n,{text:`Austria`}),(0,C.jsx)(n,{text:`United Arab Emirates`}),(0,C.jsx)(n,{text:`Czech Republic`}),(0,C.jsx)(n,{text:`United Kingdom`}),(0,C.jsx)(n,{text:`China`}),(0,C.jsx)(n,{text:`Ukraine`}),(0,C.jsx)(n,{text:`Australia`}),(0,C.jsx)(n,{text:`Russia`})]})]}),(0,C.jsxs)(f,{direction:m.Column,children:[(0,C.jsx)(b,{children:`StartsWith`}),(0,C.jsxs)(i,{filter:`StartsWith`,children:[(0,C.jsx)(n,{text:`Austria`}),(0,C.jsx)(n,{text:`United Arab Emirates`}),(0,C.jsx)(n,{text:`Czech Republic`}),(0,C.jsx)(n,{text:`United Kingdom`}),(0,C.jsx)(n,{text:`China`}),(0,C.jsx)(n,{text:`Ukraine`}),(0,C.jsx)(n,{text:`Australia`}),(0,C.jsx)(n,{text:`Russia`})]})]}),(0,C.jsxs)(f,{direction:m.Column,children:[(0,C.jsx)(b,{children:`Contains`}),(0,C.jsxs)(i,{filter:`Contains`,children:[(0,C.jsx)(n,{text:`Austria`}),(0,C.jsx)(n,{text:`United Arab Emirates`}),(0,C.jsx)(n,{text:`Czech Republic`}),(0,C.jsx)(n,{text:`United Kingdom`}),(0,C.jsx)(n,{text:`China`}),(0,C.jsx)(n,{text:`Ukraine`}),(0,C.jsx)(n,{text:`Australia`}),(0,C.jsx)(n,{text:`Russia`})]})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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