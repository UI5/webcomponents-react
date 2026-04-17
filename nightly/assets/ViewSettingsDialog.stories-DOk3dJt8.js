import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{t as i}from"./jsx-runtime-1ARNaUmP.js";import{n as a,t as o}from"./Button-CrgrZDrT.js";import{a as s,c,l,n as u,o as d,s as f,t as p,u as m}from"./ViewSettingsDialog-DXjctKK1.js";import{r as h}from"./utils-D7PmBb4C.js";var g=n({Default:()=>b,__namedExportsOrder:()=>x,default:()=>y}),_,v,y,b,x,S=e((()=>{h(),_=t(r(),1),a(),m(),c(),d(),u(),v=i(),y={title:`Modals & Popovers / ViewSettingsDialog`,component:p,argTypes:{filterItems:{control:{disable:!0}},sortItems:{control:{disable:!0}}},args:{open:!1,filterItems:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{text:`Position`,values:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f,{text:`CEO`}),(0,v.jsx)(f,{text:`CTO`}),(0,v.jsx)(f,{text:`CIO`})]})}),(0,v.jsx)(l,{text:`Department`,values:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f,{text:`Legal`}),(0,v.jsx)(f,{text:`Finance`}),(0,v.jsx)(f,{text:`Development`})]})})]}),sortItems:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{text:`Name`}),(0,v.jsx)(s,{text:`Position`}),(0,v.jsx)(s,{text:`Company`}),(0,v.jsx)(s,{text:`Department`})]})},parameters:{chromatic:{delay:999}},tags:[`package:@ui5/webcomponents-fiori`]},b={render:e=>{let[t,n]=(0,_.useState)(e.open);return(0,_.useEffect)(()=>{n(e.open)},[e.open]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,v.jsx)(p,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)}})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={() => {
        setOpen(true);
      }}>
          Show ViewSettingsDialog
        </Button>
        <ViewSettingsDialog {...args} open={open} onClose={e => {
        setOpen(false);
        args.onClose(e);
      }} />
      </>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`]}));S();export{b as Default,x as __namedExportsOrder,y as default,S as n,g as t};