import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{a as i,c as a,i as o,o as s,r as c,s as l}from"./Popover-DZh39egj.js";import{t as u}from"./jsx-runtime-CNp2Ms8r.js";import{n as d,t as f}from"./Button-KI8E-PRN.js";import{n as p,t as m}from"./ResponsivePopover-Dd46tspI.js";import{i as h,n as g,r as _,t as v}from"./ListItemStandard-DOvi-ea4.js";import{r as y}from"./utils-CVfZrzd7.js";import{t as b}from"./settings-BUIg54dV.js";var x=n({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=e((()=>{y(),o(),a(),s(),S=t(r(),1),d(),h(),g(),p(),b(),C=u(),w={title:`Modals & Popovers / ResponsivePopover`,component:m,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(_,{children:[(0,C.jsx)(v,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(v,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(v,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`ResponsivePopover Header`,horizontalAlign:c.Center,placement:l.End,verticalAlign:i.Center,opener:`openPopoverBtn`,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(f,{id:`openResponsivePopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(m,{...e,onClose:()=>{n(!1)},opener:`openResponsivePopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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