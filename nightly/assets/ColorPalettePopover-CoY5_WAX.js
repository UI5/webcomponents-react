import{j as o}from"./iframe-DM9V3iUD.js";import{useMDXComponents as i}from"./index-BQ6e0XMP.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DPjpReUC.js";import"./Tag-CDZyEpMs.js";import"./index-BrIfMidb.js";import{C as x}from"./ControlsWithNote-BixiXI7D.js";import{D as u}from"./DocsHeader-B7CLdpe5.js";import{F as h}from"./CommandsAndQueries-DLgIXMfv.js";import{C as n,D as r}from"./ColorPalettePopover.stories-MG4NZPCU.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DuxEZxLI.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CYZk7_Tc.js";import"./sys-enter-2-CIB1w1Kt.js";import"./alert-bTHWJErv.js";import"./index-HLIjrNCW.js";import"./index-3ho0Fy_x.js";import"./Link-CqfS--3L.js";import"./copy-CzwRG-tI.js";import"./copy-QNTFDBhh.js";import"./GitHub-Mark-9mFh2ESO.js";import"./TableOfContent-BCMbnTpd.js";import"./index-C_fRRkTw.js";import"./index-CG9Hqh1R.js";import"./index-D-UVDN6M.js";import"./index-DQbG0AXp.js";import"./index-Crs5q-DX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CWqaDePq.js";import"./addCustomCSSWithScoping-UQbkgHWD.js";import"./ResponsivePopoverCommon.css-Ct9-fwKq.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
