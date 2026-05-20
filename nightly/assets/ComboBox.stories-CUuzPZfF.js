import{a as e,i as t}from"./preload-helper-DbRxMUml.js";import{Ao as n,Cl as r,Do as i,Fm as a,Gd as o,Jd as s,Mo as c,Oo as l,Sl as u,Wd as d,Xd as f,d as p,du as m,jo as h,ko as g,lf as _,nm as v,tm as y,uf as b,uu as x}from"./iframe-DbOwuPFY.js";var S=e({Default:()=>T,FilterTypes:()=>D,WithGroups:()=>E,__namedExportsOrder:()=>O,default:()=>w}),C,w,T,E,D,O,k=t((()=>{y(),r(),o(),p(),n(),l(),b(),m(),c(),C=a(),w={title:`Inputs / ComboBox`,component:h,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:v.None,icon:(0,C.jsx)(_,{name:u})},tags:[`package:@ui5/webcomponents`]},T={render:e=>(0,C.jsxs)(h,{...e,children:[(0,C.jsx)(g,{text:`ComboBox Entry 1`}),(0,C.jsx)(g,{text:`ComboBox Entry 2`}),(0,C.jsx)(g,{text:`ComboBox Entry 3`}),(0,C.jsx)(g,{text:`ComboBox Entry 4`}),(0,C.jsx)(g,{text:`ComboBox Entry 5`})]})},E={render(e){return(0,C.jsxs)(h,{...e,children:[(0,C.jsxs)(i,{headerText:`Group 1`,children:[(0,C.jsx)(g,{text:`ComboBox Entry 1`}),(0,C.jsx)(g,{text:`ComboBox Entry 2`})]}),(0,C.jsxs)(i,{headerText:`Group 2`,children:[(0,C.jsx)(g,{text:`ComboBox Entry 3`}),(0,C.jsx)(g,{text:`ComboBox Entry 4`}),(0,C.jsx)(g,{text:`ComboBox Entry 5`})]})]})}},D={render:()=>(0,C.jsxs)(d,{justifyContent:s.SpaceBetween,children:[(0,C.jsxs)(d,{direction:f.Column,children:[(0,C.jsx)(x,{children:`StartsWithPerTerm (Default)`}),(0,C.jsxs)(h,{filter:`StartsWithPerTerm`,children:[(0,C.jsx)(g,{text:`Austria`}),(0,C.jsx)(g,{text:`United Arab Emirates`}),(0,C.jsx)(g,{text:`Czech Republic`}),(0,C.jsx)(g,{text:`United Kingdom`}),(0,C.jsx)(g,{text:`China`}),(0,C.jsx)(g,{text:`Ukraine`}),(0,C.jsx)(g,{text:`Australia`}),(0,C.jsx)(g,{text:`Russia`})]})]}),(0,C.jsxs)(d,{direction:f.Column,children:[(0,C.jsx)(x,{children:`StartsWith`}),(0,C.jsxs)(h,{filter:`StartsWith`,children:[(0,C.jsx)(g,{text:`Austria`}),(0,C.jsx)(g,{text:`United Arab Emirates`}),(0,C.jsx)(g,{text:`Czech Republic`}),(0,C.jsx)(g,{text:`United Kingdom`}),(0,C.jsx)(g,{text:`China`}),(0,C.jsx)(g,{text:`Ukraine`}),(0,C.jsx)(g,{text:`Australia`}),(0,C.jsx)(g,{text:`Russia`})]})]}),(0,C.jsxs)(d,{direction:f.Column,children:[(0,C.jsx)(x,{children:`Contains`}),(0,C.jsxs)(h,{filter:`Contains`,children:[(0,C.jsx)(g,{text:`Austria`}),(0,C.jsx)(g,{text:`United Arab Emirates`}),(0,C.jsx)(g,{text:`Czech Republic`}),(0,C.jsx)(g,{text:`United Kingdom`}),(0,C.jsx)(g,{text:`China`}),(0,C.jsx)(g,{text:`Ukraine`}),(0,C.jsx)(g,{text:`Australia`}),(0,C.jsx)(g,{text:`Russia`})]})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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