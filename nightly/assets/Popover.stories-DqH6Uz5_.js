import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-C21x__mS.js";import{a as r,c as i,i as a,o,r as s,s as c}from"./Popover-3E5vfVVd.js";import{t as l}from"./jsx-runtime-BdxMnOeJ.js";import{n as u,t as d}from"./Button-VJwFYYGR.js";import{n as f,t as p}from"./List-Bhp8D-FO.js";import{n as m,t as h}from"./ListItemStandard-DhEWw0SS.js";import{n as g,t as _}from"./Popover-DDrI8qtI.js";import{i as v}from"./iframe-B5N0NKzt.js";import{t as y}from"./settings-CIr44vy0.js";var b=t({Default:()=>w,__namedExportsOrder:()=>T,default:()=>C}),x,S,C,w,T;function E(){return(E=e((()=>{y(),v(),a(),i(),o(),x=n(),u(),f(),m(),g(),S=l(),C={title:`Modals & Popovers / Popover`,component:_,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:(0,S.jsxs)(p,{children:[(0,S.jsx)(h,{additionalText:`Fruits`,text:`Apples`}),(0,S.jsx)(h,{additionalText:`Fruits`,text:`Bananas`}),(0,S.jsx)(h,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`Popover Header`,horizontalAlign:s.Center,placement:c.End,verticalAlign:r.Center,className:`footerPartNoPadding`,open:!1},tags:[`package:@ui5/webcomponents`]},w={render(e){let[t,n]=(0,x.useState)(e.open);return(0,x.useEffect)(()=>{n(e.open)},[e.open]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(d,{id:`openPopoverBtn`,onClick:()=>{n(!0)},children:`Open Popover`}),(0,S.jsx)(_,{...e,onClose:()=>{n(!1)},opener:`openPopoverBtn`,open:t})]})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Default`]})))()}export{b as n,E as r,w as t};