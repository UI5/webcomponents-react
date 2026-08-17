import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-C21x__mS.js";import{a as r,c as i,i as a,o,r as s,s as c}from"./Popover-3E5vfVVd.js";import{t as l}from"./jsx-runtime-BdxMnOeJ.js";import{n as u,t as d}from"./Button-VJwFYYGR.js";import{n as f,t as p}from"./ResponsivePopover-DCY4AuGd.js";import{n as m,t as h}from"./List-Bhp8D-FO.js";import{n as g,t as _}from"./ListItemStandard--kknClJJ.js";import{i as v}from"./iframe-BfBhawox.js";import{t as y}from"./settings-CIr44vy0.js";var b=t({Default:()=>w,__namedExportsOrder:()=>T,default:()=>C}),x,S,C,w,T;function E(){return(E=e((()=>{v(),a(),i(),o(),x=n(),u(),m(),g(),f(),y(),S=l(),C={title:`Modals & Popovers / ResponsivePopover`,component:p,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,S.jsxs)(h,{children:[(0,S.jsx)(_,{additionalText:`Fruits`,text:`Apples`}),(0,S.jsx)(_,{additionalText:`Fruits`,text:`Bananas`}),(0,S.jsx)(_,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`ResponsivePopover Header`,horizontalAlign:s.Center,placement:c.End,verticalAlign:r.Center,opener:`openPopoverBtn`,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},w={render(e){let[t,n]=(0,x.useState)(e.open);return(0,x.useEffect)(()=>{n(e.open)},[e.open]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(d,{id:`openResponsivePopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,S.jsx)(p,{...e,onClose:()=>{n(!1)},opener:`openResponsivePopoverBtn`,open:t})]})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Default`]})))()}export{b as n,E as r,w as t};