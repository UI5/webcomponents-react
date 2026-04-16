import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{l as n,t as r}from"./src-DYqn5UzG.js";import{t as i}from"./jsx-runtime-1ARNaUmP.js";import{t as a}from"./enums-DtU7Tosq.js";import{a as o,n as s,t as c}from"./FlexBox-BFmTCPgM.js";import{n as l,t as u}from"./Text-CgJUXytC.js";import{a as d,c as f,i as p,o as m,r as h,s as g}from"./List-ClRFxBZr.js";import{i as _,n as v,r as y,t as b}from"./ListItemStandard-DF2VZgua.js";import{n as x,t as S}from"./ListItemCustom-6dsP2iRD.js";import{n as C,t as w}from"./ListItemGroup-CRf5aapE.js";import{n as T,t as E}from"./ProgressIndicator-BkAkPqQY.js";var D=t({Default:()=>A,ListItemCustomStory:()=>j,ListItemGroupStory:()=>M,__namedExportsOrder:()=>N,default:()=>k}),O,k,A,j,M,N,P=e((()=>{m(),f(),p(),r(),s(),a(),l(),x(),C(),v(),T(),_(),O=i(),k={title:`Data Display / List`,component:y,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`List with ListItemStandard`,selectionMode:g.None,separators:h.All,growing:d.None},tags:[`package:@ui5/webcomponents`]},A={render:e=>(0,O.jsxs)(y,{...e,children:[(0,O.jsx)(b,{additionalText:`3`,text:`List Item 1`}),(0,O.jsx)(b,{additionalText:`2`,text:`List Item 2`}),(0,O.jsx)(b,{additionalText:`1`,text:`List Item 3`})]})},j={name:`ListItemCustom`,args:{headerText:`List with a ListItemCustom`},render:e=>(0,O.jsxs)(y,{...e,children:[(0,O.jsx)(S,{children:(0,O.jsxs)(c,{justifyContent:o.SpaceAround,style:{width:`100%`},children:[(0,O.jsx)(u,{style:{fontWeight:`bold`},children:`FULLY`}),(0,O.jsx)(u,{style:{color:`red`},children:`CUSTOMIZABLE`}),(0,O.jsx)(u,{style:{color:`white`,backgroundColor:n.sapButton_Emphasized_Background},children:`CHILDREN`})]})}),(0,O.jsx)(S,{children:(0,O.jsx)(E,{value:50})})]})},M={name:`ListItemGroup`,args:{headerText:`List with a ListItemGroup`},render:e=>(0,O.jsxs)(y,{...e,children:[(0,O.jsxs)(w,{headerText:`ListItemGroup 1`,children:[(0,O.jsx)(b,{text:`List Item`}),(0,O.jsx)(b,{text:`List Item`})]}),(0,O.jsx)(w,{headerText:`ListItemGroup 2`,children:(0,O.jsx)(b,{text:`List Item`})})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <List {...args}>
        <ListItemStandard additionalText="3" text="List Item 1" />
        <ListItemStandard additionalText="2" text="List Item 2" />
        <ListItemStandard additionalText="1" text="List Item 3" />
      </List>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'ListItemCustom',
  args: {
    headerText: 'List with a ListItemCustom'
  },
  render: args => {
    return <List {...args}>
        <ListItemCustom>
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceAround} style={{
          width: '100%'
        }}>
            <Text style={{
            fontWeight: 'bold'
          }}>FULLY</Text>
            <Text style={{
            color: 'red'
          }}>CUSTOMIZABLE</Text>
            <Text style={{
            color: 'white',
            backgroundColor: ThemingParameters.sapButton_Emphasized_Background
          }}>
              CHILDREN
            </Text>
          </FlexBox>
        </ListItemCustom>
        <ListItemCustom>
          <ProgressIndicator value={50} />
        </ListItemCustom>
      </List>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'ListItemGroup',
  args: {
    headerText: 'List with a ListItemGroup'
  },
  render: args => {
    return <List {...args}>
        <ListItemGroup headerText="ListItemGroup 1">
          <ListItemStandard text="List Item" />
          <ListItemStandard text="List Item" />
        </ListItemGroup>
        <ListItemGroup headerText="ListItemGroup 2">
          <ListItemStandard text="List Item" />
        </ListItemGroup>
      </List>;
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`ListItemCustomStory`,`ListItemGroupStory`]}));P();export{A as Default,j as ListItemCustomStory,M as ListItemGroupStory,N as __namedExportsOrder,k as default,P as n,D as t};