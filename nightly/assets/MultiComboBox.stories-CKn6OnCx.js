import{a as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./jsx-runtime-BBQGix-2.js";import{n as r,t as i}from"./ValueState-BxZVFhX3.js";import{r as a}from"./FlexBoxWrap-D5LV9P_x.js";import{n as o,t as s}from"./Label-Dj7j1Cx0.js";import{i as c,n as l,r as u,t as d}from"./MultiComboBoxItem-jbO7NIU8.js";import{i as f,n as p,r as m,t as h}from"./MultiComboBoxItemGroup-NzxSU-xm.js";import{d as g,vt as _,yt as v}from"./iframe-BRxRbVZA.js";var y=e({Default:()=>S,Grouping:()=>w,WithCustomItems:()=>C,__namedExportsOrder:()=>T,default:()=>x}),b,x,S,C,w,T,E=t((()=>{i(),v(),g(),o(),l(),f(),p(),c(),b=n(),x={title:`Inputs / MultiComboBox`,component:u,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:r.None},tags:[`package:@ui5/webcomponents`]},S={render:e=>(0,b.jsxs)(u,{...e,children:[(0,b.jsx)(d,{text:`Item 1`}),(0,b.jsx)(d,{text:`Item 2`}),(0,b.jsx)(d,{text:`Item 3`}),(0,b.jsx)(d,{text:`Item 4`}),(0,b.jsx)(d,{text:`Item 5`})]})},C={name:`MultiComboBoxItemCustom`,render:e=>(0,b.jsxs)(u,{...e,children:[(0,b.jsx)(m,{text:`Austria`,children:(0,b.jsxs)(_,{justifyContent:a.SpaceBetween,style:{width:`100%`},children:[(0,b.jsx)(s,{children:`Austria`}),(0,b.jsx)(s,{children:`AT`})]})}),(0,b.jsx)(m,{text:`Germany`,children:(0,b.jsxs)(_,{justifyContent:a.SpaceBetween,style:{width:`100%`},children:[(0,b.jsx)(s,{children:`Germany`}),(0,b.jsx)(s,{children:`DE`})]})}),(0,b.jsx)(m,{text:`Switzerland`,children:(0,b.jsxs)(_,{justifyContent:a.SpaceBetween,style:{width:`100%`},children:[(0,b.jsx)(s,{children:`Switzerland`}),(0,b.jsx)(s,{children:`CH`})]})})]})},w={render:e=>(0,b.jsxs)(u,{...e,children:[(0,b.jsxs)(h,{headerText:`Asia`,children:[(0,b.jsx)(d,{text:`Afghanistan`}),(0,b.jsx)(d,{text:`China`}),(0,b.jsx)(d,{text:`India`}),(0,b.jsx)(d,{text:`Indonesia`})]}),(0,b.jsxs)(h,{headerText:`Europe`,children:[(0,b.jsx)(d,{text:`Austria`}),(0,b.jsx)(d,{text:`Bulgaria`}),(0,b.jsx)(d,{text:`Germany`}),(0,b.jsx)(d,{text:`Italy`})]}),(0,b.jsxs)(h,{headerText:`North America`,children:[(0,b.jsx)(d,{text:`Canada`}),(0,b.jsx)(d,{text:`Granada`}),(0,b.jsx)(d,{text:`Haiti`}),(0,b.jsx)(d,{text:`United States`})]})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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