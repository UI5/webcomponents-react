import{a as e,c as t,i as n}from"./preload-helper-B45gAKPr.js";import{t as r}from"./react-CymAsZIc.js";import{t as i}from"./jsx-runtime-BBQGix-2.js";import{t as a}from"./Button-QRNLbXr1.js";import{a as o,r as s}from"./FlexBoxWrap-D5LV9P_x.js";import{t as c}from"./Label-CrEjJS5t.js";import{t as l}from"./MessageBoxType-bFIrObY6.js";import{t as u}from"./webComponents-BZi6ias_.js";import{t as d}from"./MenuItem-C52sHQjV.js";import{t as f}from"./Switch-DNA_LVr4.js";import{G as p,W as m,d as h,vt as g,yt as _}from"./iframe-r5j7_TIs.js";var v=e({Dialog:()=>S,Menu:()=>T,MessageBox:()=>E,Popover:()=>C,ResponsivePopover:()=>w,Toast:()=>D,__namedExportsOrder:()=>O,default:()=>x}),y,b,x,S,C,w,T,E,D,O,k=n((()=>{y=t(r(),1),h(),u(),_(),p(),b=i(),x={title:`User Feedback / Modals`,component:m,tags:[`package:@ui5/webcomponents-react`]},S={render:()=>(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(a,{onClick:()=>{let{close:e}=m.showDialog({headerText:`Dialog Title`,children:`I'm a Dialog!`,footer:(0,b.jsxs)(g,{justifyContent:s.End,fitContainer:!0,style:{paddingBlock:`0.25rem`},children:[(0,b.jsx)(a,{onClick:()=>e(),children:`Close`}),` `]})})},children:`Show Dialog`})})},C={render:()=>{let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(g,{direction:o.Column,alignItems:`Start`,gap:`1rem`,children:[(0,b.jsxs)(g,{alignItems:`Center`,gap:`0.5rem`,children:[(0,b.jsx)(f,{checked:e,onChange:e=>t(e.target.checked)}),(0,b.jsx)(c,{children:`autoClosePopovers`})]}),(0,b.jsx)(a,{id:`modals-show-popover`,onClick:()=>{m.showPopover({opener:`modals-show-popover`,headerText:`Popover Title`,children:`I'm a Popover!`},{autoClosePopovers:e})},children:`Show Popover`})]})}},w={render:()=>{let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(g,{direction:o.Column,alignItems:`Start`,gap:`1rem`,children:[(0,b.jsxs)(g,{alignItems:`Center`,gap:`0.5rem`,children:[(0,b.jsx)(f,{checked:e,onChange:e=>t(e.target.checked)}),(0,b.jsx)(c,{children:`autoClosePopovers`})]}),(0,b.jsx)(a,{id:`modals-show-responsive-popover`,onClick:()=>{m.showResponsivePopover({opener:`modals-show-responsive-popover`,headerText:`Responsive Popover Title`,children:`I'm a Responsive Popover!`},{autoClosePopovers:e})},children:`Show ResponsivePopover`})]})}},T={render:()=>{let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(g,{direction:o.Column,alignItems:`Start`,gap:`1rem`,children:[(0,b.jsxs)(g,{alignItems:`Center`,gap:`0.5rem`,children:[(0,b.jsx)(f,{checked:e,onChange:e=>t(e.target.checked)}),(0,b.jsx)(c,{children:`autoClosePopovers`})]}),(0,b.jsx)(a,{id:`modals-show-menu`,onClick:()=>{m.showMenu({opener:`modals-show-menu`,headerText:`Menu Title`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d,{text:`New File`,icon:`add-document`}),(0,b.jsx)(d,{text:`New Folder`,icon:`add-folder`,disabled:!0})]})},{autoClosePopovers:e})},children:`Show Menu`})]})}},E={render:()=>(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(a,{onClick:()=>{m.showMessageBox({type:l.Confirm,children:`Can you see this MessageBox?`})},children:`Show MessageBox`})})},D={render:()=>(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(a,{onClick:()=>{m.showToast({children:`I'm a Message Toast!`})},children:`Show Toast`})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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