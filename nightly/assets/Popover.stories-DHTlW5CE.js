import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{$f as r,Ju as i,Mu as a,Nu as o,Pu as s,Wm as c,_f as l,ep as u,gf as d,hf as f,ju as p,mf as m,mg as h,pf as g,qu as _,r as v,vf as y}from"./iframe-Dp4Nme_T.js";import{t as b}from"./settings-BHi35WY5.js";var x=n({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=e((()=>{b(),v(),m(),y(),d(),S=t(h(),1),u(),i(),s(),a(),C=c(),w={title:`Modals & Popovers / Popover`,component:p,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(_,{children:[(0,C.jsx)(o,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(o,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(o,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`Popover Header`,horizontalAlign:g.Center,placement:l.End,verticalAlign:f.Center,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(r,{id:`openPopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(p,{...e,onClose:()=>{n(!1)},opener:`openPopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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