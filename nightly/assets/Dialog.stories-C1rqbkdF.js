import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{$f as r,Il as i,Ll as a,Nu as o,Q as s,Rl as c,Wm as l,mg as u,qu as d,r as f,zl as p}from"./iframe-Dp4Nme_T.js";var m=n({Default:()=>v,__namedExportsOrder:()=>y,default:()=>_}),h,g,_,v,y,b=e((()=>{f(),h=t(u(),1),p(),s(),a(),g=l(),_={title:`Modals & Popovers / Dialog`,component:i,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{children:(0,g.jsxs)(d,{children:[(0,g.jsx)(o,{additionalText:`Fruits`,text:`Apples`}),(0,g.jsx)(o,{additionalText:`Fruits`,text:`Bananas`}),(0,g.jsx)(o,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`Dialog Header`,open:!1},tags:[`package:@ui5/webcomponents`]},v={render:e=>{let[t,n]=(0,h.useState)(e.open);return(0,h.useEffect)(()=>{n(e.open)},[e.open]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{onClick:()=>{n(!0)},children:`Open Dialog`}),(0,g.jsx)(i,{...e,"data-sap-ui-fastnavgroup":`true`,className:`contentPartNoPadding footerPartNoPadding`,open:t,onClose:t=>{e.onClose(t),n(!1)},footer:(0,g.jsx)(c,{design:`Footer`,endContent:(0,g.jsx)(r,{"data-sap-ui-fastnavgroup":`true`,onClick:()=>{n(!1)},children:`Close`})})})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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