import{j as o}from"./iframe-DpsLP052.js";import{useMDXComponents as i}from"./index-_rtImS1W.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-PRfqR2eX.js";import"./Tag-C7F6-79_.js";import"./index-BFgF6Hw1.js";import{C as x}from"./ControlsWithNote-BB6ixV-z.js";import{D as u}from"./DocsHeader-DmvPzofP.js";import{F as h}from"./CommandsAndQueries-B3V0wcrs.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DW_RUa5o.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-T5-AIYBO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-NX8J3kcU.js";import"./sys-enter-2-DlH7FC2F.js";import"./alert-BDCJXtoD.js";import"./index-BB8Wt2y3.js";import"./index-Cb94JCFH.js";import"./Link-lhnFzeWI.js";import"./copy-BNMQiwjZ.js";import"./copy-LcJtQKoV.js";import"./GitHub-Mark-CKuNC7Db.js";import"./TableOfContent-zs7QCM0s.js";import"./index-DfDXcGgq.js";import"./index-82Uo0cXy.js";import"./addCustomCSSWithScoping-3Nlci0j7.js";import"./index-DCyO76rI.js";import"./index-BfX04KMA.js";import"./index-DZ1ovLuc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D03GatZl.js";import"./ResponsivePopoverCommon.css-CLt9oG7E.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
