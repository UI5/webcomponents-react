import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{Cg as r,Fu as i,Gm as a,Il as o,Ll as s,Q as c,Rl as l,Yu as u,r as d,rp as f,zl as p}from"./iframe-CIxr1oGB.js";var m=n({Default:()=>v,__namedExportsOrder:()=>y,default:()=>_}),h,g,_,v,y,b=e((()=>{d(),h=t(r(),1),p(),c(),s(),g=a(),_={title:`Modals & Popovers / Dialog`,component:o,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{children:(0,g.jsxs)(u,{children:[(0,g.jsx)(i,{additionalText:`Fruits`,text:`Apples`}),(0,g.jsx)(i,{additionalText:`Fruits`,text:`Bananas`}),(0,g.jsx)(i,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`Dialog Header`,open:!1},tags:[`package:@ui5/webcomponents`]},v={render:e=>{let[t,n]=(0,h.useState)(e.open);return(0,h.useEffect)(()=>{n(e.open)},[e.open]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{onClick:()=>{n(!0)},children:`Open Dialog`}),(0,g.jsx)(o,{...e,"data-sap-ui-fastnavgroup":`true`,className:`contentPartNoPadding footerPartNoPadding`,open:t,onClose:t=>{e.onClose(t),n(!1)},footer:(0,g.jsx)(l,{design:`Footer`,endContent:(0,g.jsx)(f,{"data-sap-ui-fastnavgroup":`true`,onClick:()=>{n(!1)},children:`Close`})})})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [dialogOpen, setDialogOpen] = useState(args.open);
    useEffect(() => {
      setDialogOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={() => {
        setDialogOpen(true);
      }}>
          Open Dialog
        </Button>
        <Dialog {...args} data-sap-ui-fastnavgroup="true" className="contentPartNoPadding footerPartNoPadding" open={dialogOpen} onClose={e => {
        args.onClose(e);
        setDialogOpen(false);
      }} footer={<Bar design="Footer" endContent={<Button data-sap-ui-fastnavgroup="true" onClick={() => {
        setDialogOpen(false);
      }}>
                  Close
                </Button>} />} />
      </>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`]}));b();export{v as Default,y as __namedExportsOrder,_ as default,b as n,m as t};