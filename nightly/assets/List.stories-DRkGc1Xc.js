import{n as e,r as t}from"./chunk-jRWAZmH_.js";import{Bd as n,Hm as r,Iu as i,Kd as a,Km as o,Lu as s,Ru as c,Vd as l,Xd as u,Xm as d,Xu as f,Zu as p,cd as m,d as h,dd as g,fa as _,fd as v,ld as y,mi as b,pa as x,pd as S,pi as C,qd as w,ud as T,zu as E}from"./iframe-MUaCAfBu.js";var D=t({Default:()=>A,ListItemCustomStory:()=>j,ListItemGroupStory:()=>M,__namedExportsOrder:()=>N,default:()=>k}),O,k,A,j,M,N,P=e((()=>{g(),S(),y(),r(),w(),h(),l(),E(),x(),s(),b(),p(),O=d(),k={title:`Data Display / List`,component:f,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`List with ListItemStandard`,selectionMode:v.None,separators:m.All,growing:T.None},tags:[`package:@ui5/webcomponents`]},A={render:e=>(0,O.jsxs)(f,{...e,children:[(0,O.jsx)(i,{additionalText:`3`,text:`List Item 1`}),(0,O.jsx)(i,{additionalText:`2`,text:`List Item 2`}),(0,O.jsx)(i,{additionalText:`1`,text:`List Item 3`})]})},j={name:`ListItemCustom`,args:{headerText:`List with a ListItemCustom`},render:e=>(0,O.jsxs)(f,{...e,children:[(0,O.jsx)(c,{children:(0,O.jsxs)(a,{justifyContent:u.SpaceAround,style:{width:`100%`},children:[(0,O.jsx)(n,{style:{fontWeight:`bold`},children:`FULLY`}),(0,O.jsx)(n,{style:{color:`red`},children:`CUSTOMIZABLE`}),(0,O.jsx)(n,{style:{color:`white`,backgroundColor:o.sapButton_Emphasized_Background},children:`CHILDREN`})]})}),(0,O.jsx)(c,{children:(0,O.jsx)(C,{value:50})})]})},M={name:`ListItemGroup`,args:{headerText:`List with a ListItemGroup`},render:e=>(0,O.jsxs)(f,{...e,children:[(0,O.jsxs)(_,{headerText:`ListItemGroup 1`,children:[(0,O.jsx)(i,{text:`List Item`}),(0,O.jsx)(i,{text:`List Item`})]}),(0,O.jsx)(_,{headerText:`ListItemGroup 2`,children:(0,O.jsx)(i,{text:`List Item`})})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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