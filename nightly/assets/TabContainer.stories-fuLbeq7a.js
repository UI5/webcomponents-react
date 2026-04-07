import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{Ch as n,Dh as r,Ln as i,Rn as a,Sh as o,Wm as s,_r as c,ar as l,fl as u,ir as d,nr as f,or as p,pl as m,rr as h,sr as g}from"./iframe-DE4w57_p.js";import{n as _,t as v}from"./settings-B2MC2fzS.js";import{n as y,t as b}from"./menu-8M2vg-IP.js";var x,S,C=e((()=>{(function(e){e.Solid=`Solid`,e.Transparent=`Transparent`,e.Translucent=`Translucent`})(x||={}),S=x})),w,T,E=e((()=>{o(),w=`activities`,T=`M480 32q13 0 22.5 9t9.5 23v384q0 13-9.5 22.5T480 480H32q-14 0-23-9.5T0 448V64q0-14 9-23t23-9h448zm0 32H32v384h448V64zM117 252l-53-53 17-19 36 36 71-88 18 17zm0 164l-53-54 17-18 36 36 71-89 18 18zm283-96q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zm0-160q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128z`,n(w,{pathData:T,ltr:!0,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})),D,O,k=e((()=>{o(),D=`activities`,O=`M181 71q7-7 17-7 11 0 18.5 7.5T224 90q0 10-8 18L101 217q-7 7-17 7-11 0-18-7L8 162q-8-8-8-19t7.5-18 18.5-7q10 0 17 7l41 38zm133 89q-11 0-18.5-7.5T288 134t7.5-18 18.5-7h172q11 0 18.5 7t7.5 18-7.5 18.5T486 160H314zM181 295q7-7 17-7 11 0 18.5 7.5T224 314q0 10-8 18L101 441q-7 7-17 7-11 0-18-7L8 386q-8-8-8-19t7.5-18 18.5-7q10 0 17 7l41 38zm305 38q11 0 18.5 7t7.5 18-7.5 18.5T486 384H314q-11 0-18.5-7.5T288 358t7.5-18 18.5-7h172z`,n(D,{pathData:O,ltr:!0,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})),A,j=e((()=>{r(),E(),k(),A=`activities`})),M=t({Default:()=>F,WithNestedTabs:()=>L,WithTabSeparator:()=>I,__namedExportsOrder:()=>R,default:()=>P}),N,P,F,I,L,R,z=e((()=>{C(),g(),j(),c(),m(),b(),v(),l(),a(),h(),N=s(),P={title:`Layouts & Floorplans / TabContainer`,component:f,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{tabLayout:p.Standard,contentBackgroundDesign:S.Solid,headerBackgroundDesign:S.Solid},tags:[`package:@ui5/webcomponents`]},F={render:e=>(0,N.jsxs)(f,{...e,children:[(0,N.jsx)(d,{text:`Tab One`,icon:y,selected:!0,additionalText:`5`,children:`Content Tab 1`}),(0,N.jsx)(d,{text:`Tab Two`,icon:A,additionalText:`20`,children:`Content Tab 2`}),(0,N.jsx)(d,{text:`Tab Three`,icon:`add`,children:`Content Tab 3`}),(0,N.jsx)(d,{text:`Tab Four`,icon:u,children:`Content Tab 4`}),(0,N.jsx)(d,{text:`Tab Five`,icon:_,children:`Content Tab 5`})]})},I={name:`with TabSeparator`,render:e=>(0,N.jsxs)(f,{...e,children:[(0,N.jsx)(d,{text:`Tab One`,icon:y,selected:!0,additionalText:`5`,children:`Content Tab 1`}),(0,N.jsx)(i,{}),(0,N.jsx)(d,{text:`Tab Two`,icon:A,additionalText:`20`,children:`Content Tab 2`})]})},L={name:`with nested tabs`,render:e=>(0,N.jsxs)(f,{...e,children:[(0,N.jsx)(d,{text:`Tab One`,selected:!0,items:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(d,{text:`Tab 1.1`}),(0,N.jsx)(d,{text:`Tab 1.2`}),(0,N.jsx)(d,{text:`Tab 1.3`})]}),children:(0,N.jsx)(`div`,{style:{display:`none`}})}),(0,N.jsx)(i,{}),(0,N.jsx)(d,{text:`Tab Two`}),(0,N.jsx)(d,{text:`Tab Three`,items:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(d,{text:`Tab 3.1`}),(0,N.jsx)(d,{text:`Tab 3.2`}),(0,N.jsx)(d,{text:`Tab 3.3`})]})})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <TabContainer {...args}>
        <Tab text="Tab One" icon={menuIcon} selected additionalText="5">
          Content Tab 1
        </Tab>
        <Tab text="Tab Two" icon={activitiesIcon} additionalText="20">
          Content Tab 2
        </Tab>
        <Tab text="Tab Three" icon={addIcon}>
          Content Tab 3
        </Tab>
        <Tab text="Tab Four" icon={employeeIcon}>
          Content Tab 4
        </Tab>
        <Tab text="Tab Five" icon={settingsIcon}>
          Content Tab 5
        </Tab>
      </TabContainer>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'with TabSeparator',
  render: args => {
    return <TabContainer {...args}>
        <Tab text="Tab One" icon={menuIcon} selected additionalText="5">
          Content Tab 1
        </Tab>
        <TabSeparator />
        <Tab text="Tab Two" icon={activitiesIcon} additionalText="20">
          Content Tab 2
        </Tab>
      </TabContainer>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'with nested tabs',
  render: args => {
    return <TabContainer {...args}>
        <Tab text="Tab One" selected items={<>
              <Tab text="Tab 1.1" />
              <Tab text="Tab 1.2" />
              <Tab text="Tab 1.3" />
            </>}>
          <div style={{
          display: 'none'
        }} />
        </Tab>
        <TabSeparator />
        <Tab text="Tab Two" />
        <Tab text="Tab Three" items={<>
              <Tab text="Tab 3.1" />
              <Tab text="Tab 3.2" />
              <Tab text="Tab 3.3" />
            </>} />
      </TabContainer>;
  }
}`,...L.parameters?.docs?.source}}},R=[`Default`,`WithTabSeparator`,`WithNestedTabs`]}));z();export{F as Default,L as WithNestedTabs,I as WithTabSeparator,R as __namedExportsOrder,P as default,z as n,M as t};