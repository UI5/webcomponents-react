import{j as o}from"./iframe-DfIU3iRi.js";import{useMDXComponents as i}from"./index-BAUWkqwx.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DKKhajQJ.js";import"./Tag-CF4VAGn3.js";import"./index-_jZ5OE_X.js";import{C as x}from"./ControlsWithNote-D4Nv_2bn.js";import{D as u}from"./DocsHeader-BvEUo_tI.js";import{F as h}from"./CommandsAndQueries-CCvlfqZe.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BOv0esvf.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Ncro2cOl.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BagB6Da7.js";import"./sys-enter-2-BiNE0Ouk.js";import"./alert-2mu58sd7.js";import"./index-DeDDTWfB.js";import"./index-dA_mFJJw.js";import"./Link-C-uHXK5B.js";import"./copy-DjCYIkIJ.js";import"./copy-C8IsFnQF.js";import"./GitHub-Mark-V_4XTcp_.js";import"./TableOfContent-UJCpwmXi.js";import"./index-CoTITwqN.js";import"./index-CqJNVQT5.js";import"./index-CIxyPlXE.js";import"./index-YCl-_jCh.js";import"./index-BGfN_eSt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ohosJA7I.js";import"./addCustomCSSWithScoping-CtydAM5n.js";import"./ResponsivePopoverCommon.css-Cy1wPIS3.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
`,o.jsx(u,{of:n,since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:r}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:r}),`
`,o.jsx(e.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(e.p,{children:["You can open and close the ",o.jsx(e.code,{children:"ColorPalettePopover"})," component in a declarative way using the ",o.jsx(e.code,{children:"open"})," and ",o.jsx(e.code,{children:"opener"})," prop."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
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
`,o.jsx(l,{children:f}),`
`,o.jsx(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(d,{of:p}),`
`,o.jsx(h,{})]})}function Q(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(s,{...t})}):s(t)}export{Q as default};
