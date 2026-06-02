import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{En as r,Tn as i,lh as a,r as o,vp as s,yp as c,zg as l}from"./iframe-wp6pPX7r.js";var u,d,f=n((()=>{(function(e){e.TopStart=`TopStart`,e.TopCenter=`TopCenter`,e.TopEnd=`TopEnd`,e.MiddleStart=`MiddleStart`,e.MiddleCenter=`MiddleCenter`,e.MiddleEnd=`MiddleEnd`,e.BottomStart=`BottomStart`,e.BottomCenter=`BottomCenter`,e.BottomEnd=`BottomEnd`})(u||={}),d=u})),p=e({Default:()=>_,__namedExportsOrder:()=>v,default:()=>g}),m,h,g,_,v,y=n((()=>{o(),f(),m=t(l(),1),c(),r(),h=a(),g={title:`Modals & Popovers / Toast`,component:i,args:{placement:d.BottomCenter,children:`Toast Text`,open:!1},argTypes:{children:{control:`text`}},parameters:{chromatic:{delay:1e3}},tags:[`package:@ui5/webcomponents`]},_={render(e){let[t,n]=(0,m.useState)(e.open);return(0,m.useEffect)(()=>{n(e.open)},[e.open]),(0,h.jsxs)(`div`,{style:{height:`300px`},children:[(0,h.jsx)(i,{open:t,duration:e.duration,placement:e.placement,onClose:t=>{n(!1),e.onClose(t)},children:e.children}),(0,h.jsx)(s,{onClick:()=>{n(!0)},children:`Show Toast`})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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