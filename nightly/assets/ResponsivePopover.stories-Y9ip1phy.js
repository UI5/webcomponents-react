import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{Cf as r,Dg as i,Fu as a,Iu as o,Sf as s,Tf as c,Xu as l,Ym as u,Yu as d,_f as f,bf as p,gf as m,op as h,r as g,sp as _,wf as v,xf as y}from"./iframe-em2YroLA.js";import{t as b}from"./settings-BvWXNrDX.js";var x=n({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=e((()=>{g(),y(),c(),r(),S=t(i(),1),_(),l(),o(),f(),b(),C=u(),w={title:`Modals & Popovers / ResponsivePopover`,component:m,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(d,{children:[(0,C.jsx)(a,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(a,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(a,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`ResponsivePopover Header`,horizontalAlign:p.Center,placement:v.End,verticalAlign:s.Center,opener:`openPopoverBtn`,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h,{id:`openResponsivePopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(m,{...e,onClose:()=>{n(!1)},opener:`openResponsivePopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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