import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{a as i,c as a,i as o,o as s,r as c,s as l}from"./Popover-DZh39egj.js";import{t as u}from"./jsx-runtime-CNp2Ms8r.js";import{n as d,t as f}from"./Button-DvKIr92d.js";import{i as p,n as m,r as h,t as g}from"./ListItemStandard-if9V5HeF.js";import{n as _,t as v}from"./Popover-BeQPJTzv.js";import{r as y}from"./utils-BtC7Mwg4.js";import{t as b}from"./settings-BUIg54dV.js";var x=n({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=e((()=>{b(),y(),o(),a(),s(),S=t(r(),1),d(),p(),m(),_(),C=u(),w={title:`Modals & Popovers / Popover`,component:v,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(h,{children:[(0,C.jsx)(g,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(g,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(g,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`Popover Header`,horizontalAlign:c.Center,placement:l.End,verticalAlign:i.Center,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(f,{id:`openPopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(v,{...e,onClose:()=>{n(!1)},opener:`openPopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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