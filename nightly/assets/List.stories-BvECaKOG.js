import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{$d as n,Aa as r,Cd as i,Dd as a,Ed as o,Od as s,Td as c,Ti as l,ad as u,af as d,cd as f,d as p,ef as m,ih as h,ka as g,lf as _,md as v,mh as y,od as b,of as x,pd as S,sd as C,uh as w,wd as T,wi as E}from"./iframe-CW5nZQTM.js";var D=e({Default:()=>A,ListItemCustomStory:()=>j,ListItemGroupStory:()=>M,__namedExportsOrder:()=>N,default:()=>k}),O,k,A,j,M,N,P=t((()=>{o(),s(),T(),h(),x(),p(),m(),f(),r(),b(),l(),v(),O=y(),k={title:`Data Display / List`,component:S,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`List with ListItemStandard`,selectionMode:a.None,separators:i.All,growing:c.None},tags:[`package:@ui5/webcomponents`]},A={render:e=>(0,O.jsxs)(S,{...e,children:[(0,O.jsx)(u,{additionalText:`3`,text:`List Item 1`}),(0,O.jsx)(u,{additionalText:`2`,text:`List Item 2`}),(0,O.jsx)(u,{additionalText:`1`,text:`List Item 3`})]})},j={name:`ListItemCustom`,args:{headerText:`List with a ListItemCustom`},render:e=>(0,O.jsxs)(S,{...e,children:[(0,O.jsx)(C,{children:(0,O.jsxs)(d,{justifyContent:_.SpaceAround,style:{width:`100%`},children:[(0,O.jsx)(n,{style:{fontWeight:`bold`},children:`FULLY`}),(0,O.jsx)(n,{style:{color:`red`},children:`CUSTOMIZABLE`}),(0,O.jsx)(n,{style:{color:`white`,backgroundColor:w.sapButton_Emphasized_Background},children:`CHILDREN`})]})}),(0,O.jsx)(C,{children:(0,O.jsx)(E,{value:50})})]})},M={name:`ListItemGroup`,args:{headerText:`List with a ListItemGroup`},render:e=>(0,O.jsxs)(S,{...e,children:[(0,O.jsxs)(g,{headerText:`ListItemGroup 1`,children:[(0,O.jsx)(u,{text:`List Item`}),(0,O.jsx)(u,{text:`List Item`})]}),(0,O.jsx)(g,{headerText:`ListItemGroup 2`,children:(0,O.jsx)(u,{text:`List Item`})})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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