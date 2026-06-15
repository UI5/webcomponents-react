import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{Bf as r,Cp as i,Gf as a,Hf as o,If as s,Lf as c,Uf as l,Vf as u,Wf as d,Wg as f,ad as p,md as m,mh as h,od as g,pd as _,r as v,wp as y}from"./iframe-SW7yzcD1.js";import{t as b}from"./settings-B2DVS-7V.js";var x=e({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=n((()=>{v(),u(),a(),l(),S=t(f(),1),y(),m(),g(),c(),b(),C=h(),w={title:`Modals & Popovers / ResponsivePopover`,component:s,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(_,{children:[(0,C.jsx)(p,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(p,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(p,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`ResponsivePopover Header`,horizontalAlign:r.Center,placement:d.End,verticalAlign:o.Center,opener:`openPopoverBtn`,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{id:`openResponsivePopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(s,{...e,onClose:()=>{n(!1)},opener:`openResponsivePopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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