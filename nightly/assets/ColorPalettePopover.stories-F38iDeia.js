import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{Go as r,Ko as i,Wo as a,lh as o,qo as s,r as c,vp as l,yp as u,zg as d}from"./iframe-B05hXFda.js";var f=e({Default:()=>g,__namedExportsOrder:()=>_,default:()=>h}),p,m,h,g,_,v=n((()=>{c(),p=t(d(),1),u(),s(),r(),m=o(),h={title:`Modals & Popovers / ColorPalettePopover`,component:a,argTypes:{children:{control:{disable:!0}},defaultColor:{control:{type:`color`}}},parameters:{chromatic:{delay:1e3},open:!1},tags:[`package:@ui5/webcomponents`]},g={render(e){let t=(0,p.useRef)(null),[n,r]=(0,p.useState)(e.open);return(0,p.useEffect)(()=>{r(e.open)},[e.open]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{onClick:()=>{r(e=>!e)},ref:t,children:`Open ColorPalettePopover`}),(0,m.jsxs)(a,{...e,opener:t.current,open:n,onClose:t=>{e.onClose(t),r(!1)},children:[(0,m.jsx)(i,{value:`black`}),(0,m.jsx)(i,{value:`darkblue`}),(0,m.jsx)(i,{value:`#444444`}),(0,m.jsx)(i,{value:`rgb(0,200,0)`}),(0,m.jsx)(i,{value:`green`}),(0,m.jsx)(i,{value:`darkred`}),(0,m.jsx)(i,{value:`yellow`}),(0,m.jsx)(i,{value:`blue`}),(0,m.jsx)(i,{value:`cyan`}),(0,m.jsx)(i,{value:`orange`}),(0,m.jsx)(i,{value:`#5480e7`}),(0,m.jsx)(i,{value:`#ff6699`})]})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render(args) {
    const btnRef = useRef(null);
    const [open, setOpen] = useState(args.open);
    const onButtonClick = () => {
      setOpen(prev => !prev);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={onButtonClick} ref={btnRef}>
          Open ColorPalettePopover
        </Button>
        <ColorPalettePopover {...args} opener={btnRef.current} open={open} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
          <ColorPaletteItem value="black" />
          <ColorPaletteItem value="darkblue" />
          <ColorPaletteItem value="#444444" />
          <ColorPaletteItem value="rgb(0,200,0)" />
          <ColorPaletteItem value="green" />
          <ColorPaletteItem value="darkred" />
          <ColorPaletteItem value="yellow" />
          <ColorPaletteItem value="blue" />
          <ColorPaletteItem value="cyan" />
          <ColorPaletteItem value="orange" />
          <ColorPaletteItem value="#5480e7" />
          <ColorPaletteItem value="#ff6699" />
        </ColorPalettePopover>
      </>;
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`]}));v();export{g as Default,_ as __namedExportsOrder,h as default,v as n,f as t};