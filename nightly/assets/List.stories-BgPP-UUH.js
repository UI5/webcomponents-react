import{a as e,i as t}from"./preload-helper-DbRxMUml.js";import{$u as n,Ca as r,Dm as i,Fm as a,Gd as o,Gu as s,Jd as c,Ku as l,Qu as u,Rd as d,Sa as f,Wd as p,Wu as m,cd as h,d as g,dd as _,fd as v,jm as y,ld as b,pd as x,qu as S,ud as C,vi as w,yi as T,zd as E}from"./iframe-CzbhIHxX.js";var D=e({Default:()=>A,ListItemCustomStory:()=>j,ListItemGroupStory:()=>M,__namedExportsOrder:()=>N,default:()=>k}),O,k,A,j,M,N,P=t((()=>{_(),x(),b(),i(),o(),g(),E(),S(),r(),s(),T(),n(),O=a(),k={title:`Data Display / List`,component:u,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`List with ListItemStandard`,selectionMode:v.None,separators:h.All,growing:C.None},tags:[`package:@ui5/webcomponents`]},A={render:e=>(0,O.jsxs)(u,{...e,children:[(0,O.jsx)(m,{additionalText:`3`,text:`List Item 1`}),(0,O.jsx)(m,{additionalText:`2`,text:`List Item 2`}),(0,O.jsx)(m,{additionalText:`1`,text:`List Item 3`})]})},j={name:`ListItemCustom`,args:{headerText:`List with a ListItemCustom`},render:e=>(0,O.jsxs)(u,{...e,children:[(0,O.jsx)(l,{children:(0,O.jsxs)(p,{justifyContent:c.SpaceAround,style:{width:`100%`},children:[(0,O.jsx)(d,{style:{fontWeight:`bold`},children:`FULLY`}),(0,O.jsx)(d,{style:{color:`red`},children:`CUSTOMIZABLE`}),(0,O.jsx)(d,{style:{color:`white`,backgroundColor:y.sapButton_Emphasized_Background},children:`CHILDREN`})]})}),(0,O.jsx)(l,{children:(0,O.jsx)(w,{value:50})})]})},M={name:`ListItemGroup`,args:{headerText:`List with a ListItemGroup`},render:e=>(0,O.jsxs)(u,{...e,children:[(0,O.jsxs)(f,{headerText:`ListItemGroup 1`,children:[(0,O.jsx)(m,{text:`List Item`}),(0,O.jsx)(m,{text:`List Item`})]}),(0,O.jsx)(f,{headerText:`ListItemGroup 2`,children:(0,O.jsx)(m,{text:`List Item`})})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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