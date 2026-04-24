import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{t as i}from"./jsx-runtime-CNp2Ms8r.js";import{n as a,t as o}from"./Button-Crpzm7P6.js";import{n as s,t as c}from"./Toast-cqD6AYUt.js";import{r as l}from"./utils-CVfZrzd7.js";var u,d,f=e((()=>{(function(e){e.TopStart=`TopStart`,e.TopCenter=`TopCenter`,e.TopEnd=`TopEnd`,e.MiddleStart=`MiddleStart`,e.MiddleCenter=`MiddleCenter`,e.MiddleEnd=`MiddleEnd`,e.BottomStart=`BottomStart`,e.BottomCenter=`BottomCenter`,e.BottomEnd=`BottomEnd`})(u||={}),d=u})),p=n({Default:()=>_,__namedExportsOrder:()=>v,default:()=>g}),m,h,g,_,v,y=e((()=>{l(),f(),m=t(r(),1),a(),s(),h=i(),g={title:`Modals & Popovers / Toast`,component:c,args:{placement:d.BottomCenter,children:`Toast Text`,open:!1},argTypes:{children:{control:`text`}},parameters:{chromatic:{delay:1e3}},tags:[`package:@ui5/webcomponents`]},_={render(e){let[t,n]=(0,m.useState)(e.open);return(0,m.useEffect)(()=>{n(e.open)},[e.open]),(0,h.jsxs)(`div`,{style:{height:`300px`},children:[(0,h.jsx)(c,{open:t,duration:e.duration,placement:e.placement,onClose:t=>{n(!1),e.onClose(t)},children:e.children}),(0,h.jsx)(o,{onClick:()=>{n(!0)},children:`Show Toast`})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    const showToast = () => {
      setOpen(true);
    };
    const onClose = e => {
      setOpen(false);
      args.onClose(e);
    };
    return <div style={{
      height: '300px'
    }}>
        <Toast open={open} duration={args.duration} placement={args.placement} onClose={onClose}>
          {args.children}
        </Toast>
        <Button onClick={showToast}>Show Toast</Button>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`]}));y();export{_ as Default,v as __namedExportsOrder,g as default,y as n,p as t};