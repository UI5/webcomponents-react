import{n as e,r as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./hooks-5RAOWczo.js";import{t as r}from"./src-BmzGicKA.js";import{t as i}from"./jsx-runtime-CeCnFQbk.js";import{r as a}from"./FlexBoxWrap-Bk3KBAvP.js";import{n as o,t as s}from"./FlexBox-DUCCh4zS.js";import{n as c,t as l}from"./Text-Db-7hLVI.js";import{a as u,c as d,i as f,o as p,r as m,s as h}from"./List-oJmggCLr.js";import{i as g,n as _,r as v,t as y}from"./ListItemStandard-BMmlAR7t.js";import{n as b,t as x}from"./ListItemCustom-JXXljKfc.js";import{n as S,t as C}from"./ListItemGroup-irwk5PI8.js";import{n as w,t as T}from"./ProgressIndicator-DLi-x5-z.js";import{d as E}from"./iframe-CCXnanTr.js";var D=t({Default:()=>A,ListItemCustomStory:()=>j,ListItemGroupStory:()=>M,__namedExportsOrder:()=>N,default:()=>k}),O,k,A,j,M,N,P=e((()=>{p(),d(),f(),r(),o(),E(),c(),b(),S(),_(),w(),g(),O=i(),k={title:`Data Display / List`,component:v,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`List with ListItemStandard`,selectionMode:h.None,separators:m.All,growing:u.None},tags:[`package:@ui5/webcomponents`]},A={render:e=>(0,O.jsxs)(v,{...e,children:[(0,O.jsx)(y,{additionalText:`3`,text:`List Item 1`}),(0,O.jsx)(y,{additionalText:`2`,text:`List Item 2`}),(0,O.jsx)(y,{additionalText:`1`,text:`List Item 3`})]})},j={name:`ListItemCustom`,args:{headerText:`List with a ListItemCustom`},render:e=>(0,O.jsxs)(v,{...e,children:[(0,O.jsx)(x,{children:(0,O.jsxs)(s,{justifyContent:a.SpaceAround,style:{width:`100%`},children:[(0,O.jsx)(l,{style:{fontWeight:`bold`},children:`FULLY`}),(0,O.jsx)(l,{style:{color:`red`},children:`CUSTOMIZABLE`}),(0,O.jsx)(l,{style:{color:`white`,backgroundColor:n.sapButton_Emphasized_Background},children:`CHILDREN`})]})}),(0,O.jsx)(x,{children:(0,O.jsx)(T,{value:50})})]})},M={name:`ListItemGroup`,args:{headerText:`List with a ListItemGroup`},render:e=>(0,O.jsxs)(v,{...e,children:[(0,O.jsxs)(C,{headerText:`ListItemGroup 1`,children:[(0,O.jsx)(y,{text:`List Item`}),(0,O.jsx)(y,{text:`List Item`})]}),(0,O.jsx)(C,{headerText:`ListItemGroup 2`,children:(0,O.jsx)(y,{text:`List Item`})})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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