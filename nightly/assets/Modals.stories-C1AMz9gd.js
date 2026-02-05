import{a7 as t,j as e,X as s,r as m,$ as v}from"./iframe-BTfUB26H.js";import{F as r,a as P,d as h}from"./index-DlJoRRYt.js";import{S as x}from"./index-CsvZqpSl.js";import{L as g}from"./index-BBFhDjTC.js";import{M as C}from"./index-DLKqDLcO.js";const B={title:"User Feedback / Modals",component:t,tags:["package:@ui5/webcomponents-react"]},l={render:()=>e.jsx(e.Fragment,{children:e.jsx(s,{onClick:()=>{const{close:o}=t.showDialog({headerText:"Dialog Title",children:"I'm a Dialog!",footer:e.jsxs(r,{justifyContent:P.End,fitContainer:!0,style:{paddingBlock:"0.25rem"},children:[e.jsx(s,{onClick:()=>o(),children:"Close"})," "]})})},children:"Show Dialog"})})},i={render:()=>{const[o,a]=m.useState(!1);return e.jsxs(r,{direction:h.Column,alignItems:"Start",gap:"1rem",children:[e.jsxs(r,{alignItems:"Center",gap:"0.5rem",children:[e.jsx(x,{checked:o,onChange:n=>a(n.target.checked)}),e.jsx(g,{children:"autoClosePopovers"})]}),e.jsx(s,{id:"modals-show-popover",onClick:()=>{t.showPopover({opener:"modals-show-popover",headerText:"Popover Title",children:"I'm a Popover!"},{autoClosePopovers:o})},children:"Show Popover"})]})}},c={render:()=>{const[o,a]=m.useState(!1);return e.jsxs(r,{direction:h.Column,alignItems:"Start",gap:"1rem",children:[e.jsxs(r,{alignItems:"Center",gap:"0.5rem",children:[e.jsx(x,{checked:o,onChange:n=>a(n.target.checked)}),e.jsx(g,{children:"autoClosePopovers"})]}),e.jsx(s,{id:"modals-show-responsive-popover",onClick:()=>{t.showResponsivePopover({opener:"modals-show-responsive-popover",headerText:"Responsive Popover Title",children:"I'm a Responsive Popover!"},{autoClosePopovers:o})},children:"Show ResponsivePopover"})]})}},d={render:()=>{const[o,a]=m.useState(!1);return e.jsxs(r,{direction:h.Column,alignItems:"Start",gap:"1rem",children:[e.jsxs(r,{alignItems:"Center",gap:"0.5rem",children:[e.jsx(x,{checked:o,onChange:n=>a(n.target.checked)}),e.jsx(g,{children:"autoClosePopovers"})]}),e.jsx(s,{id:"modals-show-menu",onClick:()=>{t.showMenu({opener:"modals-show-menu",headerText:"Menu Title",children:e.jsxs(e.Fragment,{children:[e.jsx(C,{text:"New File",icon:"add-document"}),e.jsx(C,{text:"New Folder",icon:"add-folder",disabled:!0})]})},{autoClosePopovers:o})},children:"Show Menu"})]})}},p={render:()=>e.jsx(e.Fragment,{children:e.jsx(s,{onClick:()=>{t.showMessageBox({type:v.Confirm,children:"Can you see this MessageBox?"})},children:"Show MessageBox"})})},u={render:()=>e.jsx(e.Fragment,{children:e.jsx(s,{onClick:()=>{t.showToast({children:"I'm a Message Toast!"})},children:"Show Toast"})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const w=["Dialog","Popover","ResponsivePopover","Menu","MessageBox","Toast"],T=Object.freeze(Object.defineProperty({__proto__:null,Dialog:l,Menu:d,MessageBox:p,Popover:i,ResponsivePopover:c,Toast:u,__namedExportsOrder:w,default:B},Symbol.toStringTag,{value:"Module"}));export{T as C,l as D,d as M,i as P,c as R,u as T,p as a};
