import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{Cf as r,Ef as i,Iu as a,Lu as o,Og as s,Sf as c,Tf as l,Xm as u,Xu as d,Zu as f,_f as p,cp as m,r as h,sp as g,vf as _,wf as v,xf as y}from"./iframe-C1SdlqC1.js";import{t as b}from"./settings-D964z4W_.js";var x=n({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=e((()=>{h(),c(),i(),v(),S=t(s(),1),m(),f(),o(),_(),b(),C=u(),w={title:`Modals & Popovers / ResponsivePopover`,component:p,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(d,{children:[(0,C.jsx)(a,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(a,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(a,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`ResponsivePopover Header`,horizontalAlign:y.Center,placement:l.End,verticalAlign:r.Center,opener:`openPopoverBtn`,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(g,{id:`openResponsivePopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(p,{...e,onClose:()=>{n(!1)},opener:`openResponsivePopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button id={'openResponsivePopoverBtn'} onClick={() => {
        setOpen(true);
      }}>
          Open Popover
        </Button>
        <ResponsivePopover {...args} onClose={() => {
        setOpen(false);
      }} opener="openResponsivePopoverBtn" open={open} />
      </>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`]}));D();export{T as Default,E as __namedExportsOrder,w as default,D as n,x as t};