import{j as o}from"./iframe-Dx8AIwnl.js";import{useMDXComponents as i}from"./index-dcVclcbT.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-p2QhlYpp.js";import"./Tag-CzwecjZk.js";import"./index-CNQX-dlK.js";import{C as x}from"./ControlsWithNote-ByDrkwNV.js";import{D as u}from"./DocsHeader-DwE6DgNV.js";import{F as h}from"./CommandsAndQueries-DUfglqKp.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BRTVd8YB.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BP-Eajbl.js";import"./preload-helper-PPVm8Dsz.js";import"./information-0cXHjBj8.js";import"./sys-enter-2-Gb3kXppf.js";import"./alert-aIxIGm79.js";import"./index-C0W6hmhl.js";import"./index-BVmKbVfO.js";import"./Link-Br-d-ePU.js";import"./copy-CDqLuYFM.js";import"./copy-BI62_cw9.js";import"./GitHub-Mark-ZS8iHUgZ.js";import"./TableOfContent-9BBQOd01.js";import"./index-Bp4XYY8b.js";import"./index-BaN1UK0U.js";import"./index-CPYahFg1.js";import"./index-DByobapb.js";import"./index-BwRqY3Cv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0yp5HV-.js";import"./addCustomCSSWithScoping-Bxh4uOHa.js";import"./ResponsivePopoverCommon.css-3lkFUcOY.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
