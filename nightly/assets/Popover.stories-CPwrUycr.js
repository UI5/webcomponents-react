import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{Cf as r,Dg as i,Fu as a,Iu as o,Nu as s,Pu as c,Sf as l,Tf as u,Xu as d,Ym as f,Yu as p,bf as m,op as h,r as g,sp as _,wf as v,xf as y}from"./iframe-7BBQ1-aT.js";import{t as b}from"./settings-DWYopzKk.js";var x=n({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=e((()=>{b(),g(),y(),u(),r(),S=t(i(),1),_(),d(),o(),c(),C=f(),w={title:`Modals & Popovers / Popover`,component:s,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(p,{children:[(0,C.jsx)(a,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(a,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(a,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`Popover Header`,horizontalAlign:m.Center,placement:v.End,verticalAlign:l.Center,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h,{id:`openPopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(s,{...e,onClose:()=>{n(!1)},opener:`openPopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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