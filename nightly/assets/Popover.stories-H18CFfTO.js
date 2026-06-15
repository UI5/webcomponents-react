import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{Bf as r,Cp as i,Gf as a,Hf as o,Uf as s,Vf as c,Wf as l,Wg as u,ad as d,id as f,md as p,mh as m,od as h,pd as g,r as _,rd as v,wp as y}from"./iframe-3TuYoDeC.js";import{t as b}from"./settings-Dva8Uuhe.js";var x=e({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),S,C,w,T,E,D=n((()=>{b(),_(),c(),a(),s(),S=t(u(),1),y(),p(),h(),f(),C=m(),w={title:`Modals & Popovers / Popover`,component:v,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,C.jsxs)(g,{children:[(0,C.jsx)(d,{additionalText:`Fruits`,text:`Apples`}),(0,C.jsx)(d,{additionalText:`Fruits`,text:`Bananas`}),(0,C.jsx)(d,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`Popover Header`,horizontalAlign:r.Center,placement:l.End,verticalAlign:o.Center,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},T={render(e){let[t,n]=(0,S.useState)(e.open);return(0,S.useEffect)(()=>{n(e.open)},[e.open]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{id:`openPopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,C.jsx)(v,{...e,onClose:()=>{n(!1)},opener:`openPopoverBtn`,open:t})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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