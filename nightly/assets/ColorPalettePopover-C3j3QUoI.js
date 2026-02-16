import{j as o}from"./iframe-JQDqhQTc.js";import{useMDXComponents as i}from"./index-SjG54pW2.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DPmUjEjQ.js";import"./Tag-DGi-8g-u.js";import"./index-lJfxqfBt.js";import{C as x}from"./ControlsWithNote-gPJQaIcm.js";import{D as u}from"./DocsHeader-BrzdijUK.js";import{F as h}from"./CommandsAndQueries-Crv-3Mfa.js";import{C as n,D as r}from"./ColorPalettePopover.stories-X3qOMJvr.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CUUK-7Io.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DOgKPosF.js";import"./sys-enter-2-C0saRr3v.js";import"./alert-C_Y0d_GP.js";import"./index-BpgBwQjv.js";import"./index-CUZKwPNc.js";import"./Link-Dpu-eDDr.js";import"./copy-CgQ5C712.js";import"./copy-t9TmEwA0.js";import"./GitHub-Mark-ChPM-wav.js";import"./TableOfContent-CQNt4SGr.js";import"./index-DLqk7pLq.js";import"./index-BKiGQD-R.js";import"./index-BFgRiJXe.js";import"./index-DcWtp55E.js";import"./index-BIpZPYH3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5_fArc3.js";import"./addCustomCSSWithScoping-c6XYl4zv.js";import"./ResponsivePopoverCommon.css-uDfhSOOV.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
