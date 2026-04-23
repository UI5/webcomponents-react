import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-CNp2Ms8r.js";import{a as r,c as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./SideNavigationSubItem-B7-vlMiS.js";import{n as d,t as f}from"./home-B3j1AsYW.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./chain-link-DjyScXjQ.js";import{n as y,t as b}from"./calendar-7p5Eo2YU.js";import{n as x,t as S}from"./history-DVtBljBm.js";var C=t({Default:()=>E,Grouped:()=>D,__namedExportsOrder:()=>O,default:()=>T}),w,T,E,D,O,k=e((()=>{y(),h(),g(),x(),d(),_(),s(),a(),o(),i(),w=n(),T={title:`Layouts & Floorplans / SideNavigation`,component:l,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}},header:{control:{disable:!0}}},args:{fixedItems:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c,{text:`External Link`,icon:v,href:`https://www.sap.com/index.html`,target:`_blank`}),(0,w.jsx)(c,{text:`History`,icon:S})]})},tags:[`package:@ui5/webcomponents-fiori`]},E={render:e=>(0,w.jsxs)(l,{...e,children:[(0,w.jsx)(c,{text:`Home`,icon:f}),(0,w.jsxs)(c,{text:`People`,expanded:!0,icon:p,children:[(0,w.jsx)(u,{text:`From My Team`}),(0,w.jsx)(u,{text:`From Other Teams`})]}),(0,w.jsx)(c,{text:`Locations`,icon:m,selected:!0}),(0,w.jsxs)(c,{text:`Events`,icon:b,children:[(0,w.jsx)(u,{text:`Local`}),(0,w.jsx)(u,{text:`Others`})]})]})},D={render:e=>(0,w.jsxs)(l,{...e,children:[(0,w.jsxs)(r,{text:`Group 1`,expanded:!0,children:[(0,w.jsx)(c,{text:`Home`,icon:f}),(0,w.jsxs)(c,{text:`People`,expanded:!0,icon:p,children:[(0,w.jsx)(u,{text:`From My Team`}),(0,w.jsx)(u,{text:`From Other Teams`})]})]}),(0,w.jsxs)(r,{text:`Group 2`,children:[(0,w.jsx)(c,{text:`Locations`,icon:m,selected:!0}),(0,w.jsxs)(c,{text:`Events`,icon:b,children:[(0,w.jsx)(u,{text:`Local`}),(0,w.jsx)(u,{text:`Others`})]})]})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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