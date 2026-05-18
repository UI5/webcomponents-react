import{a as e,c as t,i as n}from"./preload-helper-DbRxMUml.js";import{Fm as r,Qs as i,Zs as a,ng as o,np as s,rp as c}from"./iframe-DLyN7Gg6.js";var l=e({Default:()=>p,__namedExportsOrder:()=>m,default:()=>f}),u,d,f,p,m,h=n((()=>{u=t(o(),1),c(),i(),d=r(),f={title:`Modals & Popovers / BarcodeScannerDialog`,component:a,argTypes:{},args:{},tags:[`package:@ui5/webcomponents-fiori`]},p={render(e){let[t,n]=(0,u.useState)(e.open);return(0,u.useEffect)(()=>{n(e.open)},[e.open]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{onClick:()=>{n(!0)},children:`Open BarcodeScannerDialog`}),(0,d.jsx)(a,{...e,open:t,onClose:t=>{e.onClose(t),n(!1)}})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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