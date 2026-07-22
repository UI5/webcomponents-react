import{n as e,r as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{n as r,t as i}from"./ValueState-D2NAsvuR.js";import{t as a}from"./enums-Cmq13P-3.js";import{r as o}from"./FlexBoxWrap-CqUwz-ch.js";import{n as s,t as c}from"./FlexBox-B9FTl8ns.js";import{n as l,t as u}from"./Label-StrK3iNE.js";import{i as d,n as f,r as p,t as m}from"./MultiComboBoxItem-ImA003G2.js";import{i as h,n as g,r as _,t as v}from"./MultiComboBoxItemGroup-BJr8HI4U.js";var y=t({Default:()=>S,Grouping:()=>w,WithCustomItems:()=>C,__namedExportsOrder:()=>T,default:()=>x}),b,x,S,C,w,T,E=e((()=>{i(),s(),a(),l(),f(),h(),g(),d(),b=n(),x={title:`Inputs / MultiComboBox`,component:p,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:r.None},tags:[`package:@ui5/webcomponents`]},S={render:e=>(0,b.jsxs)(p,{...e,children:[(0,b.jsx)(m,{text:`Item 1`}),(0,b.jsx)(m,{text:`Item 2`}),(0,b.jsx)(m,{text:`Item 3`}),(0,b.jsx)(m,{text:`Item 4`}),(0,b.jsx)(m,{text:`Item 5`})]})},C={name:`MultiComboBoxItemCustom`,render:e=>(0,b.jsxs)(p,{...e,children:[(0,b.jsx)(_,{text:`Austria`,children:(0,b.jsxs)(c,{justifyContent:o.SpaceBetween,style:{width:`100%`},children:[(0,b.jsx)(u,{children:`Austria`}),(0,b.jsx)(u,{children:`AT`})]})}),(0,b.jsx)(_,{text:`Germany`,children:(0,b.jsxs)(c,{justifyContent:o.SpaceBetween,style:{width:`100%`},children:[(0,b.jsx)(u,{children:`Germany`}),(0,b.jsx)(u,{children:`DE`})]})}),(0,b.jsx)(_,{text:`Switzerland`,children:(0,b.jsxs)(c,{justifyContent:o.SpaceBetween,style:{width:`100%`},children:[(0,b.jsx)(u,{children:`Switzerland`}),(0,b.jsx)(u,{children:`CH`})]})})]})},w={render:e=>(0,b.jsxs)(p,{...e,children:[(0,b.jsxs)(v,{headerText:`Asia`,children:[(0,b.jsx)(m,{text:`Afghanistan`}),(0,b.jsx)(m,{text:`China`}),(0,b.jsx)(m,{text:`India`}),(0,b.jsx)(m,{text:`Indonesia`})]}),(0,b.jsxs)(v,{headerText:`Europe`,children:[(0,b.jsx)(m,{text:`Austria`}),(0,b.jsx)(m,{text:`Bulgaria`}),(0,b.jsx)(m,{text:`Germany`}),(0,b.jsx)(m,{text:`Italy`})]}),(0,b.jsxs)(v,{headerText:`North America`,children:[(0,b.jsx)(m,{text:`Canada`}),(0,b.jsx)(m,{text:`Granada`}),(0,b.jsx)(m,{text:`Haiti`}),(0,b.jsx)(m,{text:`United States`})]})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxItem text="Item 1" />
        <MultiComboBoxItem text="Item 2" />
        <MultiComboBoxItem text="Item 3" />
        <MultiComboBoxItem text="Item 4" />
        <MultiComboBoxItem text="Item 5" />
      </MultiComboBox>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'MultiComboBoxItemCustom',
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxItemCustom text="Austria">
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} style={{
          width: '100%'
        }}>
            <Label>Austria</Label>
            <Label>AT</Label>
          </FlexBox>
        </MultiComboBoxItemCustom>
        <MultiComboBoxItemCustom text="Germany">
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} style={{
          width: '100%'
        }}>
            <Label>Germany</Label>
            <Label>DE</Label>
          </FlexBox>
        </MultiComboBoxItemCustom>
        <MultiComboBoxItemCustom text="Switzerland">
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} style={{
          width: '100%'
        }}>
            <Label>Switzerland</Label>
            <Label>CH</Label>
          </FlexBox>
        </MultiComboBoxItemCustom>
      </MultiComboBox>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxItemGroup headerText="Asia">
          <MultiComboBoxItem text="Afghanistan"></MultiComboBoxItem>
          <MultiComboBoxItem text="China"></MultiComboBoxItem>
          <MultiComboBoxItem text="India"></MultiComboBoxItem>
          <MultiComboBoxItem text="Indonesia"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
        <MultiComboBoxItemGroup headerText="Europe">
          <MultiComboBoxItem text="Austria"></MultiComboBoxItem>
          <MultiComboBoxItem text="Bulgaria"></MultiComboBoxItem>
          <MultiComboBoxItem text="Germany"></MultiComboBoxItem>
          <MultiComboBoxItem text="Italy"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
        <MultiComboBoxItemGroup headerText="North America">
          <MultiComboBoxItem text="Canada"></MultiComboBoxItem>
          <MultiComboBoxItem text="Granada"></MultiComboBoxItem>
          <MultiComboBoxItem text="Haiti"></MultiComboBoxItem>
          <MultiComboBoxItem text="United States"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
      </MultiComboBox>;
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithCustomItems`,`Grouping`]}));E();export{S as Default,w as Grouping,C as WithCustomItems,T as __namedExportsOrder,x as default,E as n,y as t};