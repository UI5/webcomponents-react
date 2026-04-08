import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{Ao as r,Jm as i,Oo as a,jo as o,ko as s,np as c,r as l,tp as u,yg as d}from"./iframe--m4HQoyR.js";var f=n({Default:()=>g,__namedExportsOrder:()=>_,default:()=>h}),p,m,h,g,_,v=e((()=>{l(),p=t(d(),1),c(),o(),s(),m=i(),h={title:`Modals & Popovers / ColorPalettePopover`,component:a,argTypes:{children:{control:{disable:!0}},defaultColor:{control:{type:`color`}}},parameters:{chromatic:{delay:1e3},open:!1},tags:[`package:@ui5/webcomponents`]},g={render(e){let t=(0,p.useRef)(null),[n,i]=(0,p.useState)(e.open);return(0,p.useEffect)(()=>{i(e.open)},[e.open]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{onClick:()=>{i(e=>!e)},ref:t,children:`Open ColorPalettePopover`}),(0,m.jsxs)(a,{...e,opener:t.current,open:n,onClose:t=>{e.onClose(t),i(!1)},children:[(0,m.jsx)(r,{value:`black`}),(0,m.jsx)(r,{value:`darkblue`}),(0,m.jsx)(r,{value:`#444444`}),(0,m.jsx)(r,{value:`rgb(0,200,0)`}),(0,m.jsx)(r,{value:`green`}),(0,m.jsx)(r,{value:`darkred`}),(0,m.jsx)(r,{value:`yellow`}),(0,m.jsx)(r,{value:`blue`}),(0,m.jsx)(r,{value:`cyan`}),(0,m.jsx)(r,{value:`orange`}),(0,m.jsx)(r,{value:`#5480e7`}),(0,m.jsx)(r,{value:`#ff6699`})]})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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