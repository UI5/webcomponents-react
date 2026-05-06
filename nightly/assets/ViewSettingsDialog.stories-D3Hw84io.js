import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{Cr as r,Fa as i,Ia as a,La as o,Og as s,Ra as c,Sr as l,Xm as u,cp as d,it as f,r as p,rt as m,sp as h}from"./iframe-ChlYpN_G.js";var g=n({Default:()=>b,__namedExportsOrder:()=>x,default:()=>y}),_,v,y,b,x,S=e((()=>{p(),_=t(s(),1),d(),c(),a(),r(),f(),v=u(),y={title:`Modals & Popovers / ViewSettingsDialog`,component:m,argTypes:{filterItems:{control:{disable:!0}},sortItems:{control:{disable:!0}}},args:{open:!1,filterItems:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o,{text:`Position`,values:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{text:`CEO`}),(0,v.jsx)(i,{text:`CTO`}),(0,v.jsx)(i,{text:`CIO`})]})}),(0,v.jsx)(o,{text:`Department`,values:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{text:`Legal`}),(0,v.jsx)(i,{text:`Finance`}),(0,v.jsx)(i,{text:`Development`})]})})]}),sortItems:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{text:`Name`}),(0,v.jsx)(l,{text:`Position`}),(0,v.jsx)(l,{text:`Company`}),(0,v.jsx)(l,{text:`Department`})]})},parameters:{chromatic:{delay:999}},tags:[`package:@ui5/webcomponents-fiori`]},b={render:e=>{let[t,n]=(0,_.useState)(e.open);return(0,_.useEffect)(()=>{n(e.open)},[e.open]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,v.jsx)(m,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)}})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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