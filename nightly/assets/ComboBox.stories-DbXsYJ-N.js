import{n as e,r as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{n as r,t as i}from"./ValueState-D2NAsvuR.js";import{t as a}from"./enums-Cmq13P-3.js";import{n as o,t as s}from"./Icon-_O7f1EFW.js";import{a as c,r as l}from"./FlexBoxWrap-CqUwz-ch.js";import{n as u,t as d}from"./FlexBox-18P7LBQb.js";import{n as f,t as p}from"./Label-StrK3iNE.js";import{n as m,t as h}from"./employee-BFaFR9tW.js";import{i as g,n as _,r as v,t as y}from"./ComboBoxItem-Abcpj0Fo.js";import{i as b,n as x,r as S,t as C}from"./ComboBoxItemGroup-8yJhRZV5.js";var w=t({Default:()=>D,FilterTypes:()=>A,WithCustomItems:()=>k,WithGroups:()=>O,__namedExportsOrder:()=>j,default:()=>E}),T,E,D,O,k,A,j,M=e((()=>{i(),m(),u(),a(),_(),b(),x(),o(),f(),g(),T=n(),E={title:`Inputs / ComboBox`,component:v,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:r.None,icon:(0,T.jsx)(s,{name:h})},tags:[`package:@ui5/webcomponents`]},D={render:e=>(0,T.jsxs)(v,{...e,children:[(0,T.jsx)(y,{text:`ComboBox Entry 1`}),(0,T.jsx)(y,{text:`ComboBox Entry 2`}),(0,T.jsx)(y,{text:`ComboBox Entry 3`}),(0,T.jsx)(y,{text:`ComboBox Entry 4`}),(0,T.jsx)(y,{text:`ComboBox Entry 5`})]})},O={render(e){return(0,T.jsxs)(v,{...e,children:[(0,T.jsxs)(C,{headerText:`Group 1`,children:[(0,T.jsx)(y,{text:`ComboBox Entry 1`}),(0,T.jsx)(y,{text:`ComboBox Entry 2`})]}),(0,T.jsxs)(C,{headerText:`Group 2`,children:[(0,T.jsx)(y,{text:`ComboBox Entry 3`}),(0,T.jsx)(y,{text:`ComboBox Entry 4`}),(0,T.jsx)(y,{text:`ComboBox Entry 5`})]})]})}},k={name:`ComboBoxItemCustom`,render(e){return(0,T.jsxs)(v,{...e,children:[(0,T.jsx)(S,{text:`Austria`,children:(0,T.jsxs)(d,{justifyContent:l.SpaceBetween,style:{width:`100%`},children:[(0,T.jsx)(p,{children:`Austria`}),(0,T.jsx)(p,{children:`AT`})]})}),(0,T.jsx)(S,{text:`Germany`,children:(0,T.jsxs)(d,{justifyContent:l.SpaceBetween,style:{width:`100%`},children:[(0,T.jsx)(p,{children:`Germany`}),(0,T.jsx)(p,{children:`DE`})]})}),(0,T.jsx)(S,{text:`Switzerland`,children:(0,T.jsxs)(d,{justifyContent:l.SpaceBetween,style:{width:`100%`},children:[(0,T.jsx)(p,{children:`Switzerland`}),(0,T.jsx)(p,{children:`CH`})]})})]})}},A={render:()=>(0,T.jsxs)(d,{justifyContent:l.SpaceBetween,children:[(0,T.jsxs)(d,{direction:c.Column,children:[(0,T.jsx)(p,{children:`StartsWithPerTerm (Default)`}),(0,T.jsxs)(v,{filter:`StartsWithPerTerm`,children:[(0,T.jsx)(y,{text:`Austria`}),(0,T.jsx)(y,{text:`United Arab Emirates`}),(0,T.jsx)(y,{text:`Czech Republic`}),(0,T.jsx)(y,{text:`United Kingdom`}),(0,T.jsx)(y,{text:`China`}),(0,T.jsx)(y,{text:`Ukraine`}),(0,T.jsx)(y,{text:`Australia`}),(0,T.jsx)(y,{text:`Russia`})]})]}),(0,T.jsxs)(d,{direction:c.Column,children:[(0,T.jsx)(p,{children:`StartsWith`}),(0,T.jsxs)(v,{filter:`StartsWith`,children:[(0,T.jsx)(y,{text:`Austria`}),(0,T.jsx)(y,{text:`United Arab Emirates`}),(0,T.jsx)(y,{text:`Czech Republic`}),(0,T.jsx)(y,{text:`United Kingdom`}),(0,T.jsx)(y,{text:`China`}),(0,T.jsx)(y,{text:`Ukraine`}),(0,T.jsx)(y,{text:`Australia`}),(0,T.jsx)(y,{text:`Russia`})]})]}),(0,T.jsxs)(d,{direction:c.Column,children:[(0,T.jsx)(p,{children:`Contains`}),(0,T.jsxs)(v,{filter:`Contains`,children:[(0,T.jsx)(y,{text:`Austria`}),(0,T.jsx)(y,{text:`United Arab Emirates`}),(0,T.jsx)(y,{text:`Czech Republic`}),(0,T.jsx)(y,{text:`United Kingdom`}),(0,T.jsx)(y,{text:`China`}),(0,T.jsx)(y,{text:`Ukraine`}),(0,T.jsx)(y,{text:`Australia`}),(0,T.jsx)(y,{text:`Russia`})]})]})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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