import{n as e,r as t}from"./chunk-jRWAZmH_.js";import{Bd as n,Fu as r,Gd as i,Gm as a,Iu as o,Kd as s,Lu as c,Ru as l,Vm as u,Xu as d,Yd as f,Ym as p,Yu as m,cd as h,d as g,dd as _,fa as v,fd as y,ld as b,mi as x,pa as S,pi as C,sd as w,ud as T,zd as E}from"./iframe-7BBQ1-aT.js";var D=t({Default:()=>A,ListItemCustomStory:()=>j,ListItemGroupStory:()=>M,__namedExportsOrder:()=>N,default:()=>k}),O,k,A,j,M,N,P=e((()=>{T(),y(),h(),u(),s(),g(),n(),l(),S(),o(),x(),d(),O=p(),k={title:`Data Display / List`,component:m,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`List with ListItemStandard`,selectionMode:_.None,separators:w.All,growing:b.None},tags:[`package:@ui5/webcomponents`]},A={render:e=>(0,O.jsxs)(m,{...e,children:[(0,O.jsx)(r,{additionalText:`3`,text:`List Item 1`}),(0,O.jsx)(r,{additionalText:`2`,text:`List Item 2`}),(0,O.jsx)(r,{additionalText:`1`,text:`List Item 3`})]})},j={name:`ListItemCustom`,args:{headerText:`List with a ListItemCustom`},render:e=>(0,O.jsxs)(m,{...e,children:[(0,O.jsx)(c,{children:(0,O.jsxs)(i,{justifyContent:f.SpaceAround,style:{width:`100%`},children:[(0,O.jsx)(E,{style:{fontWeight:`bold`},children:`FULLY`}),(0,O.jsx)(E,{style:{color:`red`},children:`CUSTOMIZABLE`}),(0,O.jsx)(E,{style:{color:`white`,backgroundColor:a.sapButton_Emphasized_Background},children:`CHILDREN`})]})}),(0,O.jsx)(c,{children:(0,O.jsx)(C,{value:50})})]})},M={name:`ListItemGroup`,args:{headerText:`List with a ListItemGroup`},render:e=>(0,O.jsxs)(m,{...e,children:[(0,O.jsxs)(v,{headerText:`ListItemGroup 1`,children:[(0,O.jsx)(r,{text:`List Item`}),(0,O.jsx)(r,{text:`List Item`})]}),(0,O.jsx)(v,{headerText:`ListItemGroup 2`,children:(0,O.jsx)(r,{text:`List Item`})})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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