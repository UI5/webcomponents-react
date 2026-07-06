import{a as e,i as t}from"./preload-helper-B45gAKPr.js";import{c as n}from"./hooks--eFHevZl.js";import{t as r}from"./src-bW-z1E8k.js";import{t as i}from"./jsx-runtime-BBQGix-2.js";import{r as a}from"./FlexBoxWrap-D5LV9P_x.js";import{n as o,t as s}from"./Text-D-iFEDVL.js";import{a as c,c as l,i as u,o as d,r as f,s as p}from"./List-gAL1BiOT.js";import{i as m,n as h,r as g,t as _}from"./ListItemStandard-r9ma9Pdk.js";import{n as v,t as y}from"./ListItemCustom-BcY_OOTu.js";import{n as b,t as x}from"./ListItemGroup-YLIAme4n.js";import{n as S,t as C}from"./ProgressIndicator-Bzx_UH7G.js";import{d as w,vt as T,yt as E}from"./iframe-BUDRSanT.js";var D=e({Default:()=>A,ListItemCustomStory:()=>j,ListItemGroupStory:()=>M,__namedExportsOrder:()=>N,default:()=>k}),O,k,A,j,M,N,P=t((()=>{d(),l(),u(),r(),E(),w(),o(),v(),b(),h(),S(),m(),O=i(),k={title:`Data Display / List`,component:g,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`List with ListItemStandard`,selectionMode:p.None,separators:f.All,growing:c.None},tags:[`package:@ui5/webcomponents`]},A={render:e=>(0,O.jsxs)(g,{...e,children:[(0,O.jsx)(_,{additionalText:`3`,text:`List Item 1`}),(0,O.jsx)(_,{additionalText:`2`,text:`List Item 2`}),(0,O.jsx)(_,{additionalText:`1`,text:`List Item 3`})]})},j={name:`ListItemCustom`,args:{headerText:`List with a ListItemCustom`},render:e=>(0,O.jsxs)(g,{...e,children:[(0,O.jsx)(y,{children:(0,O.jsxs)(T,{justifyContent:a.SpaceAround,style:{width:`100%`},children:[(0,O.jsx)(s,{style:{fontWeight:`bold`},children:`FULLY`}),(0,O.jsx)(s,{style:{color:`red`},children:`CUSTOMIZABLE`}),(0,O.jsx)(s,{style:{color:`white`,backgroundColor:n.sapButton_Emphasized_Background},children:`CHILDREN`})]})}),(0,O.jsx)(y,{children:(0,O.jsx)(C,{value:50})})]})},M={name:`ListItemGroup`,args:{headerText:`List with a ListItemGroup`},render:e=>(0,O.jsxs)(g,{...e,children:[(0,O.jsxs)(x,{headerText:`ListItemGroup 1`,children:[(0,O.jsx)(_,{text:`List Item`}),(0,O.jsx)(_,{text:`List Item`})]}),(0,O.jsx)(x,{headerText:`ListItemGroup 2`,children:(0,O.jsx)(_,{text:`List Item`})})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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