import{a as e,c as t,i as n}from"./preload-helper-DbRxMUml.js";import{$u as r,Cf as i,Fm as a,Gu as o,Hu as s,Qu as c,Sf as l,Uu as u,Wu as d,bf as f,ng as p,np as m,r as h,rp as g,wf as _,xf as v,yf as y}from"./iframe-DLyN7Gg6.js";import{t as b}from"./settings-rwESwoUo.js";var x=e({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=n((()=>{b(),h(),f(),_(),l(),S=t(p(),1),g(),r(),o(),u(),C=a(),w={title:`Modals & Popovers / Popover`,component:s,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(c,{children:[(0,C.jsx)(d,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(d,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(d,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`Popover Header`,horizontalAlign:y.Center,placement:i.End,verticalAlign:v.Center,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(m,{id:`openPopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(s,{...e,onClose:()=>{n(!1)},opener:`openPopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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