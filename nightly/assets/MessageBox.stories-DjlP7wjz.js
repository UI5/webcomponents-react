import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{au as r,iu as i,lh as a,nt as o,nu as s,r as c,rt as l,ru as u,vp as d,yp as f,zg as p}from"./iframe-B05hXFda.js";var m=e({Default:()=>v,WithCustomActions:()=>y,__namedExportsOrder:()=>b,default:()=>_}),h,g,_,v,y,b,x=n((()=>{c(),h=t(p(),1),r(),u(),f(),l(),g=a(),_={title:`Modals & Popovers / MessageBox`,component:o,argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},args:{open:!1,type:s.Confirm,children:`You can close the MessageBox by pressing "Escape" or selecting one of the footer buttons.`},parameters:{chromatic:{delay:1e3}},tags:[`extends:@ui5/webcomponents`,`cem-module:Dialog`,`package:@ui5/webcomponents-react`]},v={render(e){let[t,n]=(0,h.useState)(e.open),r=()=>{n(!0)},i=t=>{n(!1),e.onClose(t)};return(0,h.useEffect)(()=>{n(e.open)},[e.open]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{onClick:r,children:`Open Messagebox`}),(0,g.jsx)(o,{...e,open:t,onClose:i})]})}},y={args:{actions:[i.OK,`Custom Action`,i.Cancel,(0,g.jsx)(d,{id:`custom-action`,children:`Custom Button`},`0`)]},render(e){let[t,n]=(0,h.useState)(!1),r=()=>{n(!0)},i=(t,r)=>{n(!1),e.onClose(t,r)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{onClick:r,children:`Open Messagebox`}),(0,g.jsx)(o,{...e,open:t,onClose:i})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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