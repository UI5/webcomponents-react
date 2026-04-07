import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{$f as r,Bl as i,Hl as a,Ul as o,Vl as s,Wm as c,X as l,Z as u,ep as d,mg as f,r as p}from"./iframe-DUpJRssK.js";var m=n({Default:()=>v,WithCustomActions:()=>y,__namedExportsOrder:()=>b,default:()=>_}),h,g,_,v,y,b,x=e((()=>{p(),h=t(f(),1),o(),s(),d(),u(),g=c(),_={title:`Modals & Popovers / MessageBox`,component:l,argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},args:{open:!1,type:i.Confirm,children:`You can close the MessageBox by pressing "Escape" or selecting one of the footer buttons.`},parameters:{chromatic:{delay:1e3}},tags:[`extends:@ui5/webcomponents`,`cem-module:Dialog`,`package:@ui5/webcomponents-react`]},v={render(e){let[t,n]=(0,h.useState)(e.open),i=()=>{n(!0)},a=t=>{n(!1),e.onClose(t)};return(0,h.useEffect)(()=>{n(e.open)},[e.open]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{onClick:i,children:`Open Messagebox`}),(0,g.jsx)(l,{...e,open:t,onClose:a})]})}},y={args:{actions:[a.OK,`Custom Action`,a.Cancel,(0,g.jsx)(r,{id:`custom-action`,children:`Custom Button`},`0`)]},render(e){let[t,n]=(0,h.useState)(!1),i=()=>{n(!0)},a=(t,r)=>{n(!1),e.onClose(t,r)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{onClick:i,children:`Open Messagebox`}),(0,g.jsx)(l,{...e,open:t,onClose:a})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(args.open);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = e => {
      setOpen(false);
      args.onClose(e);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={onButtonClick}>Open Messagebox</Button>
        <MessageBox {...args} open={open} onClose={handleClose} />
      </>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [MessageBoxAction.OK, 'Custom Action', MessageBoxAction.Cancel, <Button key="0" id="custom-action">
        Custom Button
      </Button>]
  },
  render(args) {
    const [open, setOpen] = useState(false);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = (action, escPressed) => {
      if (action === 'Custom Action') {
        // do something on "Custom Action" button click
      }
      setOpen(false);
      args.onClose(action, escPressed);
    };
    return <>
        <Button onClick={onButtonClick}>Open Messagebox</Button>
        <MessageBox {...args} open={open} onClose={handleClose} />
      </>;
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithCustomActions`]}));x();export{v as Default,y as WithCustomActions,b as __namedExportsOrder,_ as default,x as n,m as t};