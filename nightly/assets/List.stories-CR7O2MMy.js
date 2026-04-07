import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{Fu as n,Gd as r,Hd as i,Iu as a,Ju as o,Ld as s,Nu as c,Pm as l,Pu as u,Rd as d,Vd as f,Wm as p,ad as m,cd as h,d as g,fa as _,jm as v,ld as y,mi as b,od as x,pa as S,pi as C,qu as w,sd as T,ud as E}from"./iframe-Cka0UKMq.js";var D=t({Default:()=>A,ListItemCustomStory:()=>j,ListItemGroupStory:()=>M,__namedExportsOrder:()=>N,default:()=>k}),O,k,A,j,M,N,P=e((()=>{h(),E(),x(),v(),i(),g(),d(),a(),S(),u(),b(),o(),O=p(),k={title:`Data Display / List`,component:w,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`List with ListItemStandard`,selectionMode:y.None,separators:m.All,growing:T.None},tags:[`package:@ui5/webcomponents`]},A={render:e=>(0,O.jsxs)(w,{...e,children:[(0,O.jsx)(c,{additionalText:`3`,text:`List Item 1`}),(0,O.jsx)(c,{additionalText:`2`,text:`List Item 2`}),(0,O.jsx)(c,{additionalText:`1`,text:`List Item 3`})]})},j={name:`ListItemCustom`,args:{headerText:`List with a ListItemCustom`},render:e=>(0,O.jsxs)(w,{...e,children:[(0,O.jsx)(n,{children:(0,O.jsxs)(f,{justifyContent:r.SpaceAround,style:{width:`100%`},children:[(0,O.jsx)(s,{style:{fontWeight:`bold`},children:`FULLY`}),(0,O.jsx)(s,{style:{color:`red`},children:`CUSTOMIZABLE`}),(0,O.jsx)(s,{style:{color:`white`,backgroundColor:l.sapButton_Emphasized_Background},children:`CHILDREN`})]})}),(0,O.jsx)(n,{children:(0,O.jsx)(C,{value:50})})]})},M={name:`ListItemGroup`,args:{headerText:`List with a ListItemGroup`},render:e=>(0,O.jsxs)(w,{...e,children:[(0,O.jsxs)(_,{headerText:`ListItemGroup 1`,children:[(0,O.jsx)(c,{text:`List Item`}),(0,O.jsx)(c,{text:`List Item`})]}),(0,O.jsx)(_,{headerText:`ListItemGroup 2`,children:(0,O.jsx)(c,{text:`List Item`})})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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