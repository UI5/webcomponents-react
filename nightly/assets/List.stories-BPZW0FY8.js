import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./ThemingParameters-ActMyMz4.js";import{a,n as o,o as s,t as c}from"./FlexBox-DibMTZY7.js";import{n as l,t as u}from"./Text-CYyELznM.js";import{_ as d,g as f,h as p,m,p as h,v as g}from"./List-CusyNPuk.js";import{n as _,t as v}from"./List-vL7c9VJI.js";import{n as y,t as b}from"./ListItemCustom-Desjyo_N.js";import{n as x,t as S}from"./ListItemStandard-uB82Rb9I.js";import{n as C,t as w}from"./ListItemGroup-DPfPD12r.js";import{n as T,t as E}from"./ProgressIndicator-C8LB2PWw.js";var D=t({Default:()=>A,ListItemCustomStory:()=>j,ListItemGroupStory:()=>M,__namedExportsOrder:()=>N,default:()=>k}),O,k,A,j,M,N;function P(){return(P=e((()=>{f(),g(),m(),r(),o(),s(),l(),y(),C(),x(),T(),_(),O=n(),k={title:`Data Display / List`,component:v,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`List with ListItemStandard`,selectionMode:d.None,separators:h.All,growing:p.None},tags:[`package:@ui5/webcomponents`]},A={render:e=>(0,O.jsxs)(v,{...e,children:[(0,O.jsx)(S,{additionalText:`3`,text:`List Item 1`}),(0,O.jsx)(S,{additionalText:`2`,text:`List Item 2`}),(0,O.jsx)(S,{additionalText:`1`,text:`List Item 3`})]})},j={name:`ListItemCustom`,args:{headerText:`List with a ListItemCustom`},render:e=>(0,O.jsxs)(v,{...e,children:[(0,O.jsx)(b,{children:(0,O.jsxs)(c,{justifyContent:a.SpaceAround,style:{width:`100%`},children:[(0,O.jsx)(u,{style:{fontWeight:`bold`},children:`FULLY`}),(0,O.jsx)(u,{style:{color:`red`},children:`CUSTOMIZABLE`}),(0,O.jsx)(u,{style:{color:`white`,backgroundColor:i.sapButton_Emphasized_Background},children:`CHILDREN`})]})}),(0,O.jsx)(b,{children:(0,O.jsx)(E,{value:50})})]})},M={name:`ListItemGroup`,args:{headerText:`List with a ListItemGroup`},render:e=>(0,O.jsxs)(v,{...e,children:[(0,O.jsxs)(w,{headerText:`ListItemGroup 1`,children:[(0,O.jsx)(S,{text:`List Item`}),(0,O.jsx)(S,{text:`List Item`})]}),(0,O.jsx)(w,{headerText:`ListItemGroup 2`,children:(0,O.jsx)(S,{text:`List Item`})})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N=[`Default`,`ListItemCustomStory`,`ListItemGroupStory`]})))()}export{P as a,D as i,j as n,M as r,A as t};