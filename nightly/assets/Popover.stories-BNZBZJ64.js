import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{Cg as r,Fu as i,Gm as a,Iu as o,Nu as s,Pu as c,Sf as l,Xu as u,Yu as d,_f as f,bf as p,ip as m,r as h,rp as g,vf as _,xf as v,yf as y}from"./iframe-BHBNC89f.js";import{t as b}from"./settings--1MJvudU.js";var x=n({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=e((()=>{b(),h(),_(),l(),p(),S=t(r(),1),m(),u(),o(),c(),C=a(),w={title:`Modals & Popovers / Popover`,component:s,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(d,{children:[(0,C.jsx)(i,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(i,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(i,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`Popover Header`,horizontalAlign:f.Center,placement:v.End,verticalAlign:y.Center,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(g,{id:`openPopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(s,{...e,onClose:()=>{n(!1)},opener:`openPopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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