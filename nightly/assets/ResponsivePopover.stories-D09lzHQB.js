import{a as e,c as t,i as n}from"./preload-helper-DbRxMUml.js";import{$u as r,Cf as i,Fm as a,Gu as o,Qu as s,Sf as c,Wu as l,bf as u,gf as d,hf as f,ng as p,np as m,r as h,rp as g,wf as _,xf as v,yf as y}from"./iframe-CZKe6vqb.js";import{t as b}from"./settings-BKWQjiC0.js";var x=e({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=n((()=>{h(),u(),_(),c(),S=t(p(),1),g(),r(),o(),d(),b(),C=a(),w={title:`Modals & Popovers / ResponsivePopover`,component:f,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(s,{children:[(0,C.jsx)(l,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(l,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(l,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`ResponsivePopover Header`,horizontalAlign:y.Center,placement:i.End,verticalAlign:v.Center,opener:`openPopoverBtn`,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(m,{id:`openResponsivePopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(f,{...e,onClose:()=>{n(!1)},opener:`openResponsivePopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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