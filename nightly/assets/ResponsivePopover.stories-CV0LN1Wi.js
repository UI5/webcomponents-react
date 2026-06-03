import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{Bf as r,Ff as i,If as a,Lf as o,Mf as s,Rf as c,cd as l,ed as u,jf as d,ld as f,lh as p,r as m,td as h,vp as g,yp as _,zf as v,zg as y}from"./iframe-Ddw4gt7-.js";import{t as b}from"./settings-_8fMa2Sd.js";var x=e({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=n((()=>{m(),a(),r(),c(),S=t(y(),1),_(),f(),h(),s(),b(),C=p(),w={title:`Modals & Popovers / ResponsivePopover`,component:d,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(l,{children:[(0,C.jsx)(u,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(u,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(u,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`ResponsivePopover Header`,horizontalAlign:i.Center,placement:v.End,verticalAlign:o.Center,opener:`openPopoverBtn`,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(g,{id:`openResponsivePopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(d,{...e,onClose:()=>{n(!1)},opener:`openResponsivePopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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