import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{Cg as r,Cr as i,Fa as a,Gm as o,Ia as s,La as c,Ra as l,Sr as u,ip as d,it as f,r as p,rp as m,rt as h}from"./iframe-BHBNC89f.js";var g=n({Default:()=>b,__namedExportsOrder:()=>x,default:()=>y}),_,v,y,b,x,S=e((()=>{p(),_=t(r(),1),d(),l(),s(),i(),f(),v=o(),y={title:`Modals & Popovers / ViewSettingsDialog`,component:h,argTypes:{filterItems:{control:{disable:!0}},sortItems:{control:{disable:!0}}},args:{open:!1,filterItems:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c,{text:`Position`,values:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{text:`CEO`}),(0,v.jsx)(a,{text:`CTO`}),(0,v.jsx)(a,{text:`CIO`})]})}),(0,v.jsx)(c,{text:`Department`,values:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{text:`Legal`}),(0,v.jsx)(a,{text:`Finance`}),(0,v.jsx)(a,{text:`Development`})]})})]}),sortItems:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u,{text:`Name`}),(0,v.jsx)(u,{text:`Position`}),(0,v.jsx)(u,{text:`Company`}),(0,v.jsx)(u,{text:`Department`})]})},parameters:{chromatic:{delay:999}},tags:[`package:@ui5/webcomponents-fiori`]},b={render:e=>{let[t,n]=(0,_.useState)(e.open);return(0,_.useEffect)(()=>{n(e.open)},[e.open]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,v.jsx)(h,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)}})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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