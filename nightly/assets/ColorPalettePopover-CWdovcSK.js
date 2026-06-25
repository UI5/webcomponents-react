import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{n,t as r}from"./ColorPaletteItem-DbCBhwUj.js";import{A as i,_ as a,d as o,n as s,o as c,r as l,u}from"./blocks-BJS7NKlE.js";import{E as d,b as f,f as p,t as m,u as h}from"./components-CDJYHYib.js";import{n as g,t as _}from"./SubcomponentsSection-Da9yr5rF.js";import{Default as v,n as y,t as b}from"./ColorPalettePopover.stories-Coz1u8xO.js";function x(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(o,{of:b}),`
`,(0,C.jsx)(p,{of:b,since:`0.20.0`}),`
`,(0,C.jsx)(`br`,{}),`
`,(0,C.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,C.jsx)(l,{of:v}),`
`,(0,C.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,C.jsx)(f,{of:v}),`
`,(0,C.jsx)(t.h2,{id:`opening-colorpalettepopovers`,children:`Opening ColorPalettePopovers`}),`
`,(0,C.jsxs)(t.p,{children:[`You can open and close the `,(0,C.jsx)(t.code,{children:`ColorPalettePopover`}),` component in a declarative way using the `,(0,C.jsx)(t.code,{children:`open`}),` and `,(0,C.jsx)(t.code,{children:`opener`}),` prop.`]}),`
`,(0,C.jsx)(t.pre,{children:(0,C.jsx)(t.code,{className:`language-jsx`,children:`const ColorPalettePopoverComponent = () => {
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
`,(0,C.jsx)(u,{children:_}),`
`,(0,C.jsx)(t.h2,{id:`colorpaletteitem`,children:`ColorPaletteItem`}),`
`,(0,C.jsx)(c,{of:r}),`
`,(0,C.jsx)(s,{of:r}),`
`,(0,C.jsx)(h,{})]})}function S(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),d(),m(),a(),y(),g(),n()}))();export{S as default};