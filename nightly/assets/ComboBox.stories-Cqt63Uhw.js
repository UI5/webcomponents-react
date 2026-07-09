import{a as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./jsx-runtime-BBQGix-2.js";import{n as r,t as i}from"./ValueState-BxZVFhX3.js";import{n as a,t as o}from"./Icon-D-Ym6z9Z.js";import{a as s,r as c}from"./FlexBoxWrap-D5LV9P_x.js";import{n as l,t as u}from"./Label-PizvhwIN.js";import{n as d,t as f}from"./employee-DktfKQFv.js";import{i as p,n as m,r as h,t as g}from"./ComboBoxItem-BTipCpWt.js";import{i as _,n as v,r as y,t as b}from"./ComboBoxItemGroup-CI9ab9mv.js";import{d as x,vt as S,yt as C}from"./iframe-blGNFfAI.js";var w=e({Default:()=>D,FilterTypes:()=>A,WithCustomItems:()=>k,WithGroups:()=>O,__namedExportsOrder:()=>j,default:()=>E}),T,E,D,O,k,A,j,M=t((()=>{i(),d(),C(),x(),m(),_(),v(),a(),l(),p(),T=n(),E={title:`Inputs / ComboBox`,component:h,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:r.None,icon:(0,T.jsx)(o,{name:f})},tags:[`package:@ui5/webcomponents`]},D={render:e=>(0,T.jsxs)(h,{...e,children:[(0,T.jsx)(g,{text:`ComboBox Entry 1`}),(0,T.jsx)(g,{text:`ComboBox Entry 2`}),(0,T.jsx)(g,{text:`ComboBox Entry 3`}),(0,T.jsx)(g,{text:`ComboBox Entry 4`}),(0,T.jsx)(g,{text:`ComboBox Entry 5`})]})},O={render(e){return(0,T.jsxs)(h,{...e,children:[(0,T.jsxs)(b,{headerText:`Group 1`,children:[(0,T.jsx)(g,{text:`ComboBox Entry 1`}),(0,T.jsx)(g,{text:`ComboBox Entry 2`})]}),(0,T.jsxs)(b,{headerText:`Group 2`,children:[(0,T.jsx)(g,{text:`ComboBox Entry 3`}),(0,T.jsx)(g,{text:`ComboBox Entry 4`}),(0,T.jsx)(g,{text:`ComboBox Entry 5`})]})]})}},k={name:`ComboBoxItemCustom`,render(e){return(0,T.jsxs)(h,{...e,children:[(0,T.jsx)(y,{text:`Austria`,children:(0,T.jsxs)(S,{justifyContent:c.SpaceBetween,style:{width:`100%`},children:[(0,T.jsx)(u,{children:`Austria`}),(0,T.jsx)(u,{children:`AT`})]})}),(0,T.jsx)(y,{text:`Germany`,children:(0,T.jsxs)(S,{justifyContent:c.SpaceBetween,style:{width:`100%`},children:[(0,T.jsx)(u,{children:`Germany`}),(0,T.jsx)(u,{children:`DE`})]})}),(0,T.jsx)(y,{text:`Switzerland`,children:(0,T.jsxs)(S,{justifyContent:c.SpaceBetween,style:{width:`100%`},children:[(0,T.jsx)(u,{children:`Switzerland`}),(0,T.jsx)(u,{children:`CH`})]})})]})}},A={render:()=>(0,T.jsxs)(S,{justifyContent:c.SpaceBetween,children:[(0,T.jsxs)(S,{direction:s.Column,children:[(0,T.jsx)(u,{children:`StartsWithPerTerm (Default)`}),(0,T.jsxs)(h,{filter:`StartsWithPerTerm`,children:[(0,T.jsx)(g,{text:`Austria`}),(0,T.jsx)(g,{text:`United Arab Emirates`}),(0,T.jsx)(g,{text:`Czech Republic`}),(0,T.jsx)(g,{text:`United Kingdom`}),(0,T.jsx)(g,{text:`China`}),(0,T.jsx)(g,{text:`Ukraine`}),(0,T.jsx)(g,{text:`Australia`}),(0,T.jsx)(g,{text:`Russia`})]})]}),(0,T.jsxs)(S,{direction:s.Column,children:[(0,T.jsx)(u,{children:`StartsWith`}),(0,T.jsxs)(h,{filter:`StartsWith`,children:[(0,T.jsx)(g,{text:`Austria`}),(0,T.jsx)(g,{text:`United Arab Emirates`}),(0,T.jsx)(g,{text:`Czech Republic`}),(0,T.jsx)(g,{text:`United Kingdom`}),(0,T.jsx)(g,{text:`China`}),(0,T.jsx)(g,{text:`Ukraine`}),(0,T.jsx)(g,{text:`Australia`}),(0,T.jsx)(g,{text:`Russia`})]})]}),(0,T.jsxs)(S,{direction:s.Column,children:[(0,T.jsx)(u,{children:`Contains`}),(0,T.jsxs)(h,{filter:`Contains`,children:[(0,T.jsx)(g,{text:`Austria`}),(0,T.jsx)(g,{text:`United Arab Emirates`}),(0,T.jsx)(g,{text:`Czech Republic`}),(0,T.jsx)(g,{text:`United Kingdom`}),(0,T.jsx)(g,{text:`China`}),(0,T.jsx)(g,{text:`Ukraine`}),(0,T.jsx)(g,{text:`Australia`}),(0,T.jsx)(g,{text:`Russia`})]})]})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ComboBox {...args}>
        <ComboBoxItem text="ComboBox Entry 1" />
        <ComboBoxItem text="ComboBox Entry 2" />
        <ComboBoxItem text="ComboBox Entry 3" />
        <ComboBoxItem text="ComboBox Entry 4" />
        <ComboBoxItem text="ComboBox Entry 5" />
      </ComboBox>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'ComboBoxItemCustom',
  render(args) {
    return <ComboBox {...args}>
        <ComboBoxItemCustom text="Austria">
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} style={{
          width: '100%'
        }}>
            <Label>Austria</Label>
            <Label>AT</Label>
          </FlexBox>
        </ComboBoxItemCustom>
        <ComboBoxItemCustom text="Germany">
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} style={{
          width: '100%'
        }}>
            <Label>Germany</Label>
            <Label>DE</Label>
          </FlexBox>
        </ComboBoxItemCustom>
        <ComboBoxItemCustom text="Switzerland">
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} style={{
          width: '100%'
        }}>
            <Label>Switzerland</Label>
            <Label>CH</Label>
          </FlexBox>
        </ComboBoxItemCustom>
      </ComboBox>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithGroups`,`WithCustomItems`,`FilterTypes`]}));M();export{D as Default,A as FilterTypes,k as WithCustomItems,O as WithGroups,j as __namedExportsOrder,E as default,M as n,w as t};