import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Br as n,Gr as r,Hr as i,Rr as a,Ur as o,Vr as s,Wr as c,lh as l,zr as u}from"./iframe-BFNrDpIh.js";import{n as d,t as f}from"./home-wnzMrmlb.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./chain-link-DbcUoIBf.js";import{n as y,t as b}from"./calendar-DUA8EeHX.js";import{n as x,t as S}from"./history-CsLCIdss.js";var C=e({Default:()=>E,Grouped:()=>D,__namedExportsOrder:()=>O,default:()=>T}),w,T,E,D,O,k=t((()=>{y(),h(),g(),x(),d(),_(),o(),s(),u(),r(),w=l(),T={title:`Layouts & Floorplans / SideNavigation`,component:c,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}},header:{control:{disable:!0}}},args:{fixedItems:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(n,{text:`External Link`,icon:v,href:`https://www.sap.com/index.html`,target:`_blank`}),(0,w.jsx)(n,{text:`History`,icon:S})]})},tags:[`package:@ui5/webcomponents-fiori`]},E={render:e=>(0,w.jsxs)(c,{...e,children:[(0,w.jsx)(n,{text:`Home`,icon:f}),(0,w.jsxs)(n,{text:`People`,expanded:!0,icon:p,children:[(0,w.jsx)(a,{text:`From My Team`}),(0,w.jsx)(a,{text:`From Other Teams`})]}),(0,w.jsx)(n,{text:`Locations`,icon:m,selected:!0}),(0,w.jsxs)(n,{text:`Events`,icon:b,children:[(0,w.jsx)(a,{text:`Local`}),(0,w.jsx)(a,{text:`Others`})]})]})},D={render:e=>(0,w.jsxs)(c,{...e,children:[(0,w.jsxs)(i,{text:`Group 1`,expanded:!0,children:[(0,w.jsx)(n,{text:`Home`,icon:f}),(0,w.jsxs)(n,{text:`People`,expanded:!0,icon:p,children:[(0,w.jsx)(a,{text:`From My Team`}),(0,w.jsx)(a,{text:`From Other Teams`})]})]}),(0,w.jsxs)(i,{text:`Group 2`,children:[(0,w.jsx)(n,{text:`Locations`,icon:m,selected:!0}),(0,w.jsxs)(n,{text:`Events`,icon:b,children:[(0,w.jsx)(a,{text:`Local`}),(0,w.jsx)(a,{text:`Others`})]})]})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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