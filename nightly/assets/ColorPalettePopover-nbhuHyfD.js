import{j as o}from"./iframe-B2FKbRyU.js";import{useMDXComponents as s}from"./index-B6nFsg5H.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-D-EyJoW7.js";import"./Tag-DALomp7A.js";import"./index-DDSpbD3Z.js";import{C as x}from"./ControlsWithNote-Ciqct2NK.js";import{D as u}from"./DocsHeader-BwoPcsHr.js";import{F as h}from"./Footer-Boec_nj9.js";import"./CommandsAndQueries-Ckb11nUD.js";import"./PageNotFound-D3X2ZHIh.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DLk0Ez3P.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-D-Z3bll2.js";import"./preload-helper-PPVm8Dsz.js";import"./information-gzDx7eZf.js";import"./sys-enter-2-C-oODT1L.js";import"./alert-dNTL_brG.js";import"./index-DKyTtykB.js";import"./index-DS8Ies1F.js";import"./Link-BrDotueY.js";import"./copy-CdHuKQWk.js";import"./copy-JUMniwmI.js";import"./GitHub-Mark-B8Echxf9.js";import"./TableOfContent-imKSNnNj.js";import"./index-DCb_xP6l.js";import"./index-CKRHtWhm.js";import"./index-DHXfA1aH.js";import"./index-C1DRCM0c.js";import"./index-jZ_VDKcl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BzpFx6uj.js";import"./addCustomCSSWithScoping-DCMkWG64.js";import"./Illustrations-Bj-aY82Z.js";import"./i18n-defaults-C7ICj5-E.js";import"./ResponsivePopoverCommon.css-DH0byYa1.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
`,o.jsx(h,{})]})}function $(t={}){const{wrapper:e}={...s(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{$ as default};
