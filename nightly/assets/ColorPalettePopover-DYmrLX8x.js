import{n as e}from"./chunk-zsgVPwQN.js";import{Ao as t,Jm as n,jo as r}from"./iframe-ZZUDncRF.js";import{r as i}from"./react-B1-xNSeH.js";import{_ as a,o,p as s,s as c,t as l}from"./components-B0Tmw74A.js";import{_ as u,d,n as f,o as p,r as m,u as h}from"./blocks-B8oRh8_F.js";import{n as g,t as _}from"./SubcomponentsSection-CGnP9R_J.js";import{Default as v,n as y,t as b}from"./ColorPalettePopover.stories-BlpnpnK6.js";function x(e){let n={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(d,{of:b}),`
`,(0,C.jsx)(c,{of:b,since:`0.20.0`}),`
`,(0,C.jsx)(`br`,{}),`
`,(0,C.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,C.jsx)(m,{of:v}),`
`,(0,C.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,C.jsx)(s,{of:v}),`
`,(0,C.jsx)(n.h2,{id:`opening-colorpalettepopovers`,children:`Opening ColorPalettePopovers`}),`
`,(0,C.jsxs)(n.p,{children:[`You can open and close the `,(0,C.jsx)(n.code,{children:`ColorPalettePopover`}),` component in a declarative way using the `,(0,C.jsx)(n.code,{children:`open`}),` and `,(0,C.jsx)(n.code,{children:`opener`}),` prop.`]}),`
`,(0,C.jsx)(n.pre,{children:(0,C.jsx)(n.code,{className:`language-jsx`,children:`const ColorPalettePopoverComponent = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const onButtonClick = (e) => {
    setShowPopover((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={onButtonClick}>
        Open ColorPalettePopover
      </Button>
      <ColorPalettePopover open={showPopover} opener={buttonRef.current}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,(0,C.jsx)(h,{children:_}),`
`,(0,C.jsx)(n.h2,{id:`colorpaletteitem`,children:`ColorPaletteItem`}),`
`,(0,C.jsx)(p,{of:t}),`
`,(0,C.jsx)(f,{of:t}),`
`,(0,C.jsx)(o,{})]})}function S(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=n(),a(),l(),u(),y(),g(),r()}))();export{S as default};