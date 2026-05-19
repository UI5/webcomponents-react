import{i as e}from"./preload-helper-DbRxMUml.js";import{Bo as t,Fm as n,Vo as r}from"./iframe-1tBaAyV3.js";import{J as i,_ as a,d as o,n as s,o as c,r as l,u}from"./blocks-SCKEhLpE.js";import{_ as d,o as f,p,s as m,t as h}from"./components-56IcC70x.js";import{n as g,t as _}from"./SubcomponentsSection-B_Fcxgn5.js";import{Default as v,n as y,t as b}from"./ColorPalettePopover.stories-CuHjhdEO.js";function x(e){let n={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(o,{of:b}),`
`,(0,C.jsx)(m,{of:b,since:`0.20.0`}),`
`,(0,C.jsx)(`br`,{}),`
`,(0,C.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,C.jsx)(l,{of:v}),`
`,(0,C.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,C.jsx)(p,{of:v}),`
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
`,(0,C.jsx)(u,{children:_}),`
`,(0,C.jsx)(n.h2,{id:`colorpaletteitem`,children:`ColorPaletteItem`}),`
`,(0,C.jsx)(c,{of:t}),`
`,(0,C.jsx)(s,{of:t}),`
`,(0,C.jsx)(f,{})]})}function S(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=n(),d(),h(),a(),y(),g(),r()}))();export{S as default};