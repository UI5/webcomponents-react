import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{Fu as r,Iu as i,Jm as a,Nu as o,Pu as s,Xu as c,Yu as l,_f as u,bf as d,gf as f,hf as p,np as m,r as h,tp as g,vf as _,yf as v,yg as y}from"./iframe-CYHA5bK3.js";import{t as b}from"./settings-DuTeOTgK.js";var x=n({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=e((()=>{b(),h(),f(),d(),_(),S=t(y(),1),m(),c(),i(),s(),C=a(),w={title:`Modals & Popovers / Popover`,component:o,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(l,{children:[(0,C.jsx)(r,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(r,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(r,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`Popover Header`,horizontalAlign:p.Center,placement:v.End,verticalAlign:u.Center,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(g,{id:`openPopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(o,{...e,onClose:()=>{n(!1)},opener:`openPopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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