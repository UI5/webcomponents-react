import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-IGKVQItS.js";import{t as i}from"./jsx-runtime-O9QVJvLM.js";import{n as a,t as o}from"./Button-Bhd66_19.js";import{n as s,t as c}from"./BarcodeScannerDialog-oJy45-8F.js";var l=e({Default:()=>p,__namedExportsOrder:()=>m,default:()=>f}),u,d,f,p,m,h=n((()=>{u=t(r(),1),a(),s(),d=i(),f={title:`Modals & Popovers / BarcodeScannerDialog`,component:c,argTypes:{},args:{},tags:[`package:@ui5/webcomponents-fiori`]},p={render(e){let[t,n]=(0,u.useState)(e.open);return(0,u.useEffect)(()=>{n(e.open)},[e.open]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{onClick:()=>{n(!0)},children:`Open BarcodeScannerDialog`}),(0,d.jsx)(c,{...e,open:t,onClose:t=>{e.onClose(t),n(!1)}})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={() => {
        setOpen(true);
      }}>
          Open BarcodeScannerDialog
        </Button>
        <BarcodeScannerDialog {...args} open={open} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }} />
      </>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`]}));h();export{p as Default,m as __namedExportsOrder,f as default,h as n,l as t};