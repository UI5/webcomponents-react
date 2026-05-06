import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{Cf as r,Ef as i,Fu as a,Iu as o,Lu as s,Og as c,Pu as l,Sf as u,Tf as d,Xm as f,Xu as p,Zu as m,cp as h,r as g,sp as _,wf as v,xf as y}from"./iframe-aP5JJM5_.js";import{t as b}from"./settings-Co7IKFTD.js";var x=n({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=e((()=>{b(),g(),u(),i(),v(),S=t(c(),1),h(),m(),s(),a(),C=f(),w={title:`Modals & Popovers / Popover`,component:l,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(p,{children:[(0,C.jsx)(o,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(o,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(o,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`Popover Header`,horizontalAlign:y.Center,placement:d.End,verticalAlign:r.Center,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(_,{id:`openPopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(l,{...e,onClose:()=>{n(!1)},opener:`openPopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button id={'openPopoverBtn'} onClick={() => {
        setOpen(true);
      }}>
          Open Popover
        </Button>
        <Popover {...args} onClose={() => {
        setOpen(false);
      }} opener="openPopoverBtn" open={open} />
      </>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`]}));D();export{T as Default,E as __namedExportsOrder,w as default,D as n,x as t};