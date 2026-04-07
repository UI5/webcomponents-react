import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{Ar as n,Dr as r,Er as i,Jm as a,Mr as o,Nr as s,Or as c,jr as l,kr as u}from"./iframe-CyTG_Y9b.js";import{n as d,t as f}from"./home-B2OT96hT.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./chain-link-D1wZ9Nyd.js";import{n as y,t as b}from"./calendar-DKlX9-UR.js";import{n as x,t as S}from"./history-BDWLUEvr.js";var C=t({Default:()=>E,Grouped:()=>D,__namedExportsOrder:()=>O,default:()=>T}),w,T,E,D,O,k=e((()=>{y(),h(),g(),x(),d(),_(),l(),u(),r(),s(),w=a(),T={title:`Layouts & Floorplans / SideNavigation`,component:o,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}},header:{control:{disable:!0}}},args:{fixedItems:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c,{text:`External Link`,icon:v,href:`https://www.sap.com/index.html`,target:`_blank`}),(0,w.jsx)(c,{text:`History`,icon:S})]})},tags:[`package:@ui5/webcomponents-fiori`]},E={render:e=>(0,w.jsxs)(o,{...e,children:[(0,w.jsx)(c,{text:`Home`,icon:f}),(0,w.jsxs)(c,{text:`People`,expanded:!0,icon:p,children:[(0,w.jsx)(i,{text:`From My Team`}),(0,w.jsx)(i,{text:`From Other Teams`})]}),(0,w.jsx)(c,{text:`Locations`,icon:m,selected:!0}),(0,w.jsxs)(c,{text:`Events`,icon:b,children:[(0,w.jsx)(i,{text:`Local`}),(0,w.jsx)(i,{text:`Others`})]})]})},D={render:e=>(0,w.jsxs)(o,{...e,children:[(0,w.jsxs)(n,{text:`Group 1`,expanded:!0,children:[(0,w.jsx)(c,{text:`Home`,icon:f}),(0,w.jsxs)(c,{text:`People`,expanded:!0,icon:p,children:[(0,w.jsx)(i,{text:`From My Team`}),(0,w.jsx)(i,{text:`From Other Teams`})]})]}),(0,w.jsxs)(n,{text:`Group 2`,children:[(0,w.jsx)(c,{text:`Locations`,icon:m,selected:!0}),(0,w.jsxs)(c,{text:`Events`,icon:b,children:[(0,w.jsx)(i,{text:`Local`}),(0,w.jsx)(i,{text:`Others`})]})]})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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