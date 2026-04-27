import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{Cg as r,Fu as i,Gm as a,Iu as o,Sf as s,Xu as c,Yu as l,_f as u,bf as d,ip as f,mf as p,pf as m,r as h,rp as g,vf as _,xf as v,yf as y}from"./iframe-S6__9jAv.js";import{t as b}from"./settings-nLmTF3Gr.js";var x=n({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=e((()=>{h(),_(),s(),d(),S=t(r(),1),f(),c(),o(),p(),b(),C=a(),w={title:`Modals & Popovers / ResponsivePopover`,component:m,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(l,{children:[(0,C.jsx)(i,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(i,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(i,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`ResponsivePopover Header`,horizontalAlign:u.Center,placement:v.End,verticalAlign:y.Center,opener:`openPopoverBtn`,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(g,{id:`openResponsivePopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(m,{...e,onClose:()=>{n(!1)},opener:`openResponsivePopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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