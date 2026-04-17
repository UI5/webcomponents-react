import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{t as i}from"./jsx-runtime-1ARNaUmP.js";import{t as a}from"./Button-CrgrZDrT.js";import{r as o,t as s}from"./ListItemStandard-BsUwQxAE.js";import{n as c,t as l}from"./Bar-CurQ1GZH.js";import{n as u,t as d}from"./Dialog-dUZoVOyT.js";import{t as f}from"./webComponents-CokjVatn.js";import{r as p}from"./utils-D7PmBb4C.js";var m=n({Default:()=>v,__namedExportsOrder:()=>y,default:()=>_}),h,g,_,v,y,b=e((()=>{p(),h=t(r(),1),c(),f(),u(),g=i(),_={title:`Modals & Popovers / Dialog`,component:d,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{children:(0,g.jsxs)(o,{children:[(0,g.jsx)(s,{additionalText:`Fruits`,text:`Apples`}),(0,g.jsx)(s,{additionalText:`Fruits`,text:`Bananas`}),(0,g.jsx)(s,{additionalText:`Vegetables`,text:`Potato`})]}),headerText:`Dialog Header`,open:!1},tags:[`package:@ui5/webcomponents`]},v={render:e=>{let[t,n]=(0,h.useState)(e.open);return(0,h.useEffect)(()=>{n(e.open)},[e.open]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{onClick:()=>{n(!0)},children:`Open Dialog`}),(0,g.jsx)(d,{...e,"data-sap-ui-fastnavgroup":`true`,className:`contentPartNoPadding footerPartNoPadding`,open:t,onClose:t=>{e.onClose(t),n(!1)},footer:(0,g.jsx)(l,{design:`Footer`,endContent:(0,g.jsx)(a,{"data-sap-ui-fastnavgroup":`true`,onClick:()=>{n(!1)},children:`Close`})})})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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