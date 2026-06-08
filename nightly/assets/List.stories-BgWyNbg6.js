import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{$m as n,Cd as r,Da as i,Ea as a,Jd as o,Sd as s,Si as c,Yd as l,ah as u,bd as d,cd as f,d as p,ed as m,ef as h,if as g,ld as _,lh as v,nd as y,rd as b,td as x,tf as S,vd as C,xd as w,xi as T,yd as E}from"./iframe-CJMjH-8W.js";var D=e({Default:()=>A,ListItemCustomStory:()=>j,ListItemGroupStory:()=>M,__namedExportsOrder:()=>N,default:()=>k}),O,k,A,j,M,N,P=t((()=>{w(),r(),E(),n(),S(),p(),l(),b(),i(),x(),c(),_(),O=v(),k={title:`Data Display / List`,component:f,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`List with ListItemStandard`,selectionMode:s.None,separators:C.All,growing:d.None},tags:[`package:@ui5/webcomponents`]},A={render:e=>(0,O.jsxs)(f,{...e,children:[(0,O.jsx)(m,{additionalText:`3`,text:`List Item 1`}),(0,O.jsx)(m,{additionalText:`2`,text:`List Item 2`}),(0,O.jsx)(m,{additionalText:`1`,text:`List Item 3`})]})},j={name:`ListItemCustom`,args:{headerText:`List with a ListItemCustom`},render:e=>(0,O.jsxs)(f,{...e,children:[(0,O.jsx)(y,{children:(0,O.jsxs)(h,{justifyContent:g.SpaceAround,style:{width:`100%`},children:[(0,O.jsx)(o,{style:{fontWeight:`bold`},children:`FULLY`}),(0,O.jsx)(o,{style:{color:`red`},children:`CUSTOMIZABLE`}),(0,O.jsx)(o,{style:{color:`white`,backgroundColor:u.sapButton_Emphasized_Background},children:`CHILDREN`})]})}),(0,O.jsx)(y,{children:(0,O.jsx)(T,{value:50})})]})},M={name:`ListItemGroup`,args:{headerText:`List with a ListItemGroup`},render:e=>(0,O.jsxs)(f,{...e,children:[(0,O.jsxs)(a,{headerText:`ListItemGroup 1`,children:[(0,O.jsx)(m,{text:`List Item`}),(0,O.jsx)(m,{text:`List Item`})]}),(0,O.jsx)(a,{headerText:`ListItemGroup 2`,children:(0,O.jsx)(m,{text:`List Item`})})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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