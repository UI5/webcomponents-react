import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-1ARNaUmP.js";import{n,t as r}from"./ColorPaletteItem-DZ9syXR-.js";import{r as i}from"./react-BZibOG70.js";import{_ as a,o,p as s,s as c,t as l}from"./components-DymCpMBB.js";import{_ as u,d,n as f,o as p,r as m,u as h}from"./blocks-Crdq0CXF.js";import{n as g,t as _}from"./SubcomponentsSection-BZUidqqR.js";import{Default as v,n as y,t as b}from"./ColorPalettePopover.stories-BEctn1xA.js";function x(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(d,{of:b}),`
`,(0,C.jsx)(c,{of:b,since:`0.20.0`}),`
`,(0,C.jsx)(`br`,{}),`
`,(0,C.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,C.jsx)(m,{of:v}),`
`,(0,C.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,C.jsx)(s,{of:v}),`
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
`,(0,C.jsx)(h,{children:_}),`
`,(0,C.jsx)(t.h2,{id:`colorpaletteitem`,children:`ColorPaletteItem`}),`
`,(0,C.jsx)(p,{of:r}),`
`,(0,C.jsx)(f,{of:r}),`
`,(0,C.jsx)(o,{})]})}function S(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),a(),l(),u(),y(),g(),n()}))();export{S as default};