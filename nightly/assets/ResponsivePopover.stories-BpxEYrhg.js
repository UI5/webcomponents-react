import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{$f as r,Ju as i,Nu as a,Pu as o,Wm as s,_f as c,ep as l,gf as u,hf as d,lf as f,mf as p,mg as m,pf as h,qu as g,r as _,uf as v,vf as y}from"./iframe-Cka0UKMq.js";import{t as b}from"./settings-CIxf4qv-.js";var x=n({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=e((()=>{_(),p(),y(),u(),S=t(m(),1),l(),i(),o(),v(),b(),C=s(),w={title:`Modals & Popovers / ResponsivePopover`,component:f,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(g,{children:[(0,C.jsx)(a,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(a,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(a,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`ResponsivePopover Header`,horizontalAlign:h.Center,placement:c.End,verticalAlign:d.Center,opener:`openPopoverBtn`,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(r,{id:`openResponsivePopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(f,{...e,onClose:()=>{n(!1)},opener:`openResponsivePopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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