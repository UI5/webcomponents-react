import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{Bl as r,Kd as i,Og as a,Q as o,Qd as s,R as c,Xd as l,Xi as u,Xm as d,cr as f,d as p,eu as m,qd as h,sp as g,z as _}from"./iframe-DS6J8V1f.js";var v=n({Dialog:()=>S,Menu:()=>T,MessageBox:()=>E,Popover:()=>C,ResponsivePopover:()=>w,Toast:()=>D,__namedExportsOrder:()=>O,default:()=>x}),y,b,x,S,C,w,T,E,D,O,k=e((()=>{y=t(a(),1),p(),o(),h(),_(),b=d(),x={title:`User Feedback / Modals`,component:c,tags:[`package:@ui5/webcomponents-react`]},S={render:()=>(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(g,{onClick:()=>{let{close:e}=c.showDialog({headerText:`Dialog Title`,children:`I'm a Dialog!`,footer:(0,b.jsxs)(i,{justifyContent:l.End,fitContainer:!0,style:{paddingBlock:`0.25rem`},children:[(0,b.jsx)(g,{onClick:()=>e(),children:`Close`}),` `]})})},children:`Show Dialog`})})},C={render:()=>{let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(i,{direction:s.Column,alignItems:`Start`,gap:`1rem`,children:[(0,b.jsxs)(i,{alignItems:`Center`,gap:`0.5rem`,children:[(0,b.jsx)(f,{checked:e,onChange:e=>t(e.target.checked)}),(0,b.jsx)(m,{children:`autoClosePopovers`})]}),(0,b.jsx)(g,{id:`modals-show-popover`,onClick:()=>{c.showPopover({opener:`modals-show-popover`,headerText:`Popover Title`,children:`I'm a Popover!`},{autoClosePopovers:e})},children:`Show Popover`})]})}},w={render:()=>{let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(i,{direction:s.Column,alignItems:`Start`,gap:`1rem`,children:[(0,b.jsxs)(i,{alignItems:`Center`,gap:`0.5rem`,children:[(0,b.jsx)(f,{checked:e,onChange:e=>t(e.target.checked)}),(0,b.jsx)(m,{children:`autoClosePopovers`})]}),(0,b.jsx)(g,{id:`modals-show-responsive-popover`,onClick:()=>{c.showResponsivePopover({opener:`modals-show-responsive-popover`,headerText:`Responsive Popover Title`,children:`I'm a Responsive Popover!`},{autoClosePopovers:e})},children:`Show ResponsivePopover`})]})}},T={render:()=>{let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(i,{direction:s.Column,alignItems:`Start`,gap:`1rem`,children:[(0,b.jsxs)(i,{alignItems:`Center`,gap:`0.5rem`,children:[(0,b.jsx)(f,{checked:e,onChange:e=>t(e.target.checked)}),(0,b.jsx)(m,{children:`autoClosePopovers`})]}),(0,b.jsx)(g,{id:`modals-show-menu`,onClick:()=>{c.showMenu({opener:`modals-show-menu`,headerText:`Menu Title`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(u,{text:`New File`,icon:`add-document`}),(0,b.jsx)(u,{text:`New Folder`,icon:`add-folder`,disabled:!0})]})},{autoClosePopovers:e})},children:`Show Menu`})]})}},E={render:()=>(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(g,{onClick:()=>{c.showMessageBox({type:r.Confirm,children:`Can you see this MessageBox?`})},children:`Show MessageBox`})})},D={render:()=>(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(g,{onClick:()=>{c.showToast({children:`I'm a Message Toast!`})},children:`Show Toast`})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Button onClick={() => {
        const {
          close
        } = Modals.showDialog({
          headerText: 'Dialog Title',
          children: "I'm a Dialog!",
          footer: <FlexBox justifyContent={FlexBoxJustifyContent.End} fitContainer style={{
            paddingBlock: '0.25rem'
          }}>
                  <Button onClick={() => close()}>Close</Button>{' '}
                </FlexBox>
        });
      }}>
          Show Dialog
        </Button>
      </>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [autoClosePopovers, setAutoClosePopovers] = useState(false);
    return <FlexBox direction={FlexBoxDirection.Column} alignItems="Start" gap="1rem">
        <FlexBox alignItems="Center" gap="0.5rem">
          <Switch checked={autoClosePopovers} onChange={e => setAutoClosePopovers(e.target.checked)} />
          <Label>autoClosePopovers</Label>
        </FlexBox>
        <Button id="modals-show-popover" onClick={() => {
        Modals.showPopover({
          opener: 'modals-show-popover',
          headerText: 'Popover Title',
          children: "I'm a Popover!"
        }, {
          autoClosePopovers
        });
      }}>
          Show Popover
        </Button>
      </FlexBox>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [autoClosePopovers, setAutoClosePopovers] = useState(false);
    return <FlexBox direction={FlexBoxDirection.Column} alignItems="Start" gap="1rem">
        <FlexBox alignItems="Center" gap="0.5rem">
          <Switch checked={autoClosePopovers} onChange={e => setAutoClosePopovers(e.target.checked)} />
          <Label>autoClosePopovers</Label>
        </FlexBox>
        <Button id="modals-show-responsive-popover" onClick={() => {
        Modals.showResponsivePopover({
          opener: 'modals-show-responsive-popover',
          headerText: 'Responsive Popover Title',
          children: "I'm a Responsive Popover!"
        }, {
          autoClosePopovers
        });
      }}>
          Show ResponsivePopover
        </Button>
      </FlexBox>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [autoClosePopovers, setAutoClosePopovers] = useState(false);
    return <FlexBox direction={FlexBoxDirection.Column} alignItems="Start" gap="1rem">
        <FlexBox alignItems="Center" gap="0.5rem">
          <Switch checked={autoClosePopovers} onChange={e => setAutoClosePopovers(e.target.checked)} />
          <Label>autoClosePopovers</Label>
        </FlexBox>
        <Button id="modals-show-menu" onClick={() => {
        Modals.showMenu({
          opener: 'modals-show-menu',
          headerText: 'Menu Title',
          children: <>
                    <MenuItem text="New File" icon="add-document" />
                    <MenuItem text="New Folder" icon="add-folder" disabled />
                  </>
        }, {
          autoClosePopovers
        });
      }}>
          Show Menu
        </Button>
      </FlexBox>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Button onClick={() => {
        Modals.showMessageBox({
          type: MessageBoxType.Confirm,
          children: 'Can you see this MessageBox?'
        });
      }}>
          Show MessageBox
        </Button>
      </>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Button onClick={() => {
        Modals.showToast({
          children: "I'm a Message Toast!"
        });
      }}>
          Show Toast
        </Button>
      </>;
  }
}`,...D.parameters?.docs?.source}}},O=[`Dialog`,`Popover`,`ResponsivePopover`,`Menu`,`MessageBox`,`Toast`]}));k();export{S as Dialog,T as Menu,E as MessageBox,C as Popover,w as ResponsivePopover,D as Toast,O as __namedExportsOrder,x as default,k as n,v as t};