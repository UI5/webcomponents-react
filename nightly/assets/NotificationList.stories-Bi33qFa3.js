import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-1ARNaUmP.js";import{n as r,t as i}from"./WrappingType-sxTZlbWt.js";import{n as a,t as o}from"./Label-BlNG6-4A.js";import{a as s,n as c,o as l,t as u}from"./Avatar-hpbyOfB7.js";import{n as d,t as f}from"./employee-C7I62fmu.js";import{n as p,t as m}from"./AvatarColorScheme-COHAj6DH.js";import{i as h,n as g,r as _,t as v}from"./MenuItem-Dvpv578L.js";import{a as y,c as b,i as x,n as S,o as C,r as w,s as T,t as E}from"./NotificationListItem-DgtoFBdP.js";var D=t({Default:()=>A,Grouped:()=>j,__namedExportsOrder:()=>M,default:()=>k}),O,k,A,j,M,N=e((()=>{p(),l(),r(),x(),d(),c(),a(),h(),g(),C(),S(),b(),O=n(),k={title:`Data Display / NotificationList`,component:T,argTypes:{children:{control:{disable:!0}}},args:{},tags:[`package:@ui5/webcomponents-fiori`]},A={render:e=>(0,O.jsxs)(T,{...e,children:[(0,O.jsx)(E,{showClose:!0,avatar:(0,O.jsx)(u,{size:s.XS,icon:f}),footnotes:(0,O.jsx)(o,{children:`3 Days`}),titleText:`New order (#2526) with multiple NotificationAction buttons and close button`,menu:(0,O.jsxs)(_,{children:[(0,O.jsx)(v,{text:`Accept All Requested Information`}),(0,O.jsx)(v,{text:`Reject All Requested Information`})]}),children:`Short description`}),(0,O.jsx)(E,{avatar:(0,O.jsx)(u,{size:s.XS,icon:f,colorScheme:m.Accent1}),footnotes:(0,O.jsx)(o,{children:`3 Days`}),titleText:`New order (#2527) with single NotificationAction and close button`,showClose:!0,menu:(0,O.jsx)(_,{children:(0,O.jsx)(v,{text:`Accept All Requested Information`})}),children:`Short description`}),(0,O.jsxs)(E,{wrappingType:i.Normal,titleText:`New high priority order (#2528) without close button`,importance:w.Important,avatar:(0,O.jsx)(u,{size:s.XS,children:(0,O.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png`})}),footnotes:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(o,{children:`John Smith`}),(0,O.jsx)(o,{children:`1 hour`})]}),children:[`And with a very long description that will not be ellipsed:`,(0,O.jsx)(`br`,{}),`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. `,(0,O.jsx)(`br`,{}),`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.`]})]})},j={render:e=>(0,O.jsx)(T,{...e,children:(0,O.jsxs)(y,{titleText:`Orders`,children:[(0,O.jsx)(E,{importance:w.Standard,titleText:`New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.`,avatar:(0,O.jsx)(u,{size:s.XS,children:(0,O.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png`})}),footnotes:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`span`,{children:`Monique Legrand`}),(0,O.jsx)(`span`,{children:`2 Days`})]}),menu:(0,O.jsxs)(_,{children:[(0,O.jsx)(v,{icon:`accept`,text:`Accept`}),(0,O.jsx)(v,{icon:`message-error`,text:`Reject`})]}),children:`And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.`}),(0,O.jsx)(E,{showClose:!0,titleText:`New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.`,importance:w.Important,avatar:(0,O.jsx)(u,{size:s.XS,children:(0,O.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png`})}),footnotes:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`span`,{children:`Alain Devalier`}),(0,O.jsx)(`span`,{children:`2 Days`})]}),menu:(0,O.jsxs)(_,{children:[(0,O.jsx)(v,{icon:`accept`,text:`Accept`}),(0,O.jsx)(v,{icon:`message-error`,text:`Reject`})]}),children:`And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.`})]})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <NotificationList {...args}>
        <NotificationListItem showClose avatar={<Avatar size={AvatarSize.XS} icon={employeeIcon} />} footnotes={<Label>3 Days</Label>} titleText="New order (#2526) with multiple NotificationAction buttons and close button" menu={<Menu>
              <MenuItem text="Accept All Requested Information" />
              <MenuItem text="Reject All Requested Information" />
            </Menu>}>
          Short description
        </NotificationListItem>
        <NotificationListItem avatar={<Avatar size={AvatarSize.XS} icon={employeeIcon} colorScheme={AvatarColorScheme.Accent1} />} footnotes={<Label>3 Days</Label>} titleText="New order (#2527) with single NotificationAction and close button" showClose menu={<Menu>
              <MenuItem text="Accept All Requested Information" />
            </Menu>}>
          Short description
        </NotificationListItem>
        <NotificationListItem wrappingType={WrappingType.Normal} titleText="New high priority order (#2528) without close button" importance={NotificationListItemImportance.Important} avatar={<Avatar size={AvatarSize.XS}>
              <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>} footnotes={<>
              <Label>John Smith</Label>
              <Label>1 hour</Label>
            </>}>
          And with a very long description that will not be ellipsed:
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra,
          tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum
          lectus turpis at nunc. <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra,
          tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum
          lectus turpis at nunc.
        </NotificationListItem>
      </NotificationList>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <NotificationList {...args}>
        <NotificationListGroupItem titleText="Orders">
          <NotificationListItem importance={NotificationListItemImportance.Standard} titleText={'New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.'} avatar={<Avatar size={AvatarSize.XS}>
                <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png" />
              </Avatar>} footnotes={<>
                <span>Monique Legrand</span>
                <span>2 Days</span>
              </>} menu={<Menu>
                <MenuItem icon="accept" text="Accept" />
                <MenuItem icon="message-error" text="Reject" />
              </Menu>}>
            And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
            nec elementum lectus turpis at nunc.
          </NotificationListItem>
          <NotificationListItem showClose titleText="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." importance={NotificationListItemImportance.Important} avatar={<Avatar size={AvatarSize.XS}>
                <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png" />
              </Avatar>} footnotes={<>
                <span>Alain Devalier</span>
                <span>2 Days</span>
              </>} menu={<Menu>
                <MenuItem icon="accept" text="Accept" />
                <MenuItem icon="message-error" text="Reject" />
              </Menu>}>
            And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
            nec elementum lectus turpis at nunc.
          </NotificationListItem>
        </NotificationListGroupItem>
      </NotificationList>;
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Grouped`]}));N();export{A as Default,j as Grouped,M as __namedExportsOrder,k as default,N as n,D as t};