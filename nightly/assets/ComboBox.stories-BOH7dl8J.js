import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Cf as n,Fo as r,Io as i,Lo as a,No as o,Ol as s,Po as c,Ro as l,_u as u,d,ef as f,gu as p,if as m,kl as h,lh as g,of as _,tf as v,vm as y,wf as b,ym as x}from"./iframe-BSncZueC.js";var S=e({Default:()=>T,FilterTypes:()=>D,WithGroups:()=>E,__namedExportsOrder:()=>O,default:()=>w}),C,w,T,E,D,O,k=t((()=>{y(),h(),v(),d(),i(),c(),b(),u(),l(),C=g(),w={title:`Inputs / ComboBox`,component:a,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:x.None,icon:(0,C.jsx)(n,{name:s})},tags:[`package:@ui5/webcomponents`]},T={render:e=>(0,C.jsxs)(a,{...e,children:[(0,C.jsx)(r,{text:`ComboBox Entry 1`}),(0,C.jsx)(r,{text:`ComboBox Entry 2`}),(0,C.jsx)(r,{text:`ComboBox Entry 3`}),(0,C.jsx)(r,{text:`ComboBox Entry 4`}),(0,C.jsx)(r,{text:`ComboBox Entry 5`})]})},E={render(e){return(0,C.jsxs)(a,{...e,children:[(0,C.jsxs)(o,{headerText:`Group 1`,children:[(0,C.jsx)(r,{text:`ComboBox Entry 1`}),(0,C.jsx)(r,{text:`ComboBox Entry 2`})]}),(0,C.jsxs)(o,{headerText:`Group 2`,children:[(0,C.jsx)(r,{text:`ComboBox Entry 3`}),(0,C.jsx)(r,{text:`ComboBox Entry 4`}),(0,C.jsx)(r,{text:`ComboBox Entry 5`})]})]})}},D={render:()=>(0,C.jsxs)(f,{justifyContent:m.SpaceBetween,children:[(0,C.jsxs)(f,{direction:_.Column,children:[(0,C.jsx)(p,{children:`StartsWithPerTerm (Default)`}),(0,C.jsxs)(a,{filter:`StartsWithPerTerm`,children:[(0,C.jsx)(r,{text:`Austria`}),(0,C.jsx)(r,{text:`United Arab Emirates`}),(0,C.jsx)(r,{text:`Czech Republic`}),(0,C.jsx)(r,{text:`United Kingdom`}),(0,C.jsx)(r,{text:`China`}),(0,C.jsx)(r,{text:`Ukraine`}),(0,C.jsx)(r,{text:`Australia`}),(0,C.jsx)(r,{text:`Russia`})]})]}),(0,C.jsxs)(f,{direction:_.Column,children:[(0,C.jsx)(p,{children:`StartsWith`}),(0,C.jsxs)(a,{filter:`StartsWith`,children:[(0,C.jsx)(r,{text:`Austria`}),(0,C.jsx)(r,{text:`United Arab Emirates`}),(0,C.jsx)(r,{text:`Czech Republic`}),(0,C.jsx)(r,{text:`United Kingdom`}),(0,C.jsx)(r,{text:`China`}),(0,C.jsx)(r,{text:`Ukraine`}),(0,C.jsx)(r,{text:`Australia`}),(0,C.jsx)(r,{text:`Russia`})]})]}),(0,C.jsxs)(f,{direction:_.Column,children:[(0,C.jsx)(p,{children:`Contains`}),(0,C.jsxs)(a,{filter:`Contains`,children:[(0,C.jsx)(r,{text:`Austria`}),(0,C.jsx)(r,{text:`United Arab Emirates`}),(0,C.jsx)(r,{text:`Czech Republic`}),(0,C.jsx)(r,{text:`United Kingdom`}),(0,C.jsx)(r,{text:`China`}),(0,C.jsx)(r,{text:`Ukraine`}),(0,C.jsx)(r,{text:`Australia`}),(0,C.jsx)(r,{text:`Russia`})]})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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