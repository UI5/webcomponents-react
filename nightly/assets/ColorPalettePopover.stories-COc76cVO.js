import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{t as i}from"./jsx-runtime-1ARNaUmP.js";import{n as a,t as o}from"./Button-CDaC9B4u.js";import{n as s,t as c}from"./ColorPaletteItem-B3cspgsm.js";import{n as l,t as u}from"./ColorPalettePopover-CnxpKEFO.js";import{r as d}from"./utils-D7PmBb4C.js";var f=n({Default:()=>g,__namedExportsOrder:()=>_,default:()=>h}),p,m,h,g,_,v=e((()=>{d(),p=t(r(),1),a(),s(),l(),m=i(),h={title:`Modals & Popovers / ColorPalettePopover`,component:u,argTypes:{children:{control:{disable:!0}},defaultColor:{control:{type:`color`}}},parameters:{chromatic:{delay:1e3},open:!1},tags:[`package:@ui5/webcomponents`]},g={render(e){let t=(0,p.useRef)(null),[n,r]=(0,p.useState)(e.open);return(0,p.useEffect)(()=>{r(e.open)},[e.open]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{onClick:()=>{r(e=>!e)},ref:t,children:`Open ColorPalettePopover`}),(0,m.jsxs)(u,{...e,opener:t.current,open:n,onClose:t=>{e.onClose(t),r(!1)},children:[(0,m.jsx)(c,{value:`black`}),(0,m.jsx)(c,{value:`darkblue`}),(0,m.jsx)(c,{value:`#444444`}),(0,m.jsx)(c,{value:`rgb(0,200,0)`}),(0,m.jsx)(c,{value:`green`}),(0,m.jsx)(c,{value:`darkred`}),(0,m.jsx)(c,{value:`yellow`}),(0,m.jsx)(c,{value:`blue`}),(0,m.jsx)(c,{value:`cyan`}),(0,m.jsx)(c,{value:`orange`}),(0,m.jsx)(c,{value:`#5480e7`}),(0,m.jsx)(c,{value:`#ff6699`})]})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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