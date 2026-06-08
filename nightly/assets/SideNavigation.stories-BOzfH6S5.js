import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Br as n,Fr as r,Ir as i,Lr as a,Pr as o,Rr as s,Vr as c,lh as l,zr as u}from"./iframe-5oGcgQet.js";import{n as d,t as f}from"./home-BHpCLxM4.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./chain-link-CCk0aV3r.js";import{n as y,t as b}from"./calendar-BBWuY2cS.js";import{n as x,t as S}from"./history-JcMpcQ-U.js";var C=e({Default:()=>E,Grouped:()=>D,__namedExportsOrder:()=>O,default:()=>T}),w,T,E,D,O,k=t((()=>{y(),h(),g(),x(),d(),_(),u(),a(),r(),c(),w=l(),T={title:`Layouts & Floorplans / SideNavigation`,component:n,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}},header:{control:{disable:!0}}},args:{fixedItems:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i,{text:`External Link`,icon:v,href:`https://www.sap.com/index.html`,target:`_blank`}),(0,w.jsx)(i,{text:`History`,icon:S})]})},tags:[`package:@ui5/webcomponents-fiori`]},E={render:e=>(0,w.jsxs)(n,{...e,children:[(0,w.jsx)(i,{text:`Home`,icon:f}),(0,w.jsxs)(i,{text:`People`,expanded:!0,icon:p,children:[(0,w.jsx)(o,{text:`From My Team`}),(0,w.jsx)(o,{text:`From Other Teams`})]}),(0,w.jsx)(i,{text:`Locations`,icon:m,selected:!0}),(0,w.jsxs)(i,{text:`Events`,icon:b,children:[(0,w.jsx)(o,{text:`Local`}),(0,w.jsx)(o,{text:`Others`})]})]})},D={render:e=>(0,w.jsxs)(n,{...e,children:[(0,w.jsxs)(s,{text:`Group 1`,expanded:!0,children:[(0,w.jsx)(i,{text:`Home`,icon:f}),(0,w.jsxs)(i,{text:`People`,expanded:!0,icon:p,children:[(0,w.jsx)(o,{text:`From My Team`}),(0,w.jsx)(o,{text:`From Other Teams`})]})]}),(0,w.jsxs)(s,{text:`Group 2`,children:[(0,w.jsx)(i,{text:`Locations`,icon:m,selected:!0}),(0,w.jsxs)(i,{text:`Events`,icon:b,children:[(0,w.jsx)(o,{text:`Local`}),(0,w.jsx)(o,{text:`Others`})]})]})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <SideNavigation {...args}>
        <SideNavigationItem text="Home" icon={homeIcon} />
        <SideNavigationItem text="People" expanded icon={groupIcon}>
          <SideNavigationSubItem text="From My Team" />
          <SideNavigationSubItem text="From Other Teams" />
        </SideNavigationItem>
        <SideNavigationItem text="Locations" icon={locateMeIcon} selected />
        <SideNavigationItem text="Events" icon={calendarIcon}>
          <SideNavigationSubItem text="Local" />
          <SideNavigationSubItem text="Others" />
        </SideNavigationItem>
      </SideNavigation>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <SideNavigation {...args}>
        <SideNavigationGroup text="Group 1" expanded>
          <SideNavigationItem text="Home" icon={homeIcon} />
          <SideNavigationItem text="People" expanded icon={groupIcon}>
            <SideNavigationSubItem text="From My Team" />
            <SideNavigationSubItem text="From Other Teams" />
          </SideNavigationItem>
        </SideNavigationGroup>
        <SideNavigationGroup text="Group 2">
          <SideNavigationItem text="Locations" icon={locateMeIcon} selected />
          <SideNavigationItem text="Events" icon={calendarIcon}>
            <SideNavigationSubItem text="Local" />
            <SideNavigationSubItem text="Others" />
          </SideNavigationItem>
        </SideNavigationGroup>
      </SideNavigation>;
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Grouped`]}));k();export{E as Default,D as Grouped,O as __namedExportsOrder,T as default,k as n,C as t};