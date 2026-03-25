import{j as o}from"./iframe-iYU5spAk.js";import{useMDXComponents as s}from"./index-BzD2IrSQ.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BI7QxqeB.js";import"./Tag-BusGuvh6.js";import"./index-Cq3_Xc9J.js";import{C as x}from"./ControlsWithNote-DYiwBMQ2.js";import{D as u}from"./DocsHeader-_GpZrLV2.js";import{F as h}from"./Footer-BTHx_eA0.js";import"./CommandsAndQueries-BRXiW4dn.js";import"./PageNotFound-C8n2TUKE.js";import{C as n,D as r}from"./ColorPalettePopover.stories-0bjmU-No.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CCR8TlCl.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0J7LS4n.js";import"./sys-enter-2-De6BCoo5.js";import"./alert-Dh59S2xt.js";import"./index-DUNXsDMC.js";import"./index-DqeVDsPv.js";import"./Link-DNrZNopF.js";import"./copy-CLCoEAhJ.js";import"./copy-DCVJQWNc.js";import"./GitHub-Mark-oclh5OA_.js";import"./TableOfContent-ZERqextU.js";import"./index-B2lbw_UO.js";import"./index-BWMAVmh3.js";import"./index-D_eTNKvK.js";import"./index-9CESre8T.js";import"./index-B5WhhwGp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-LCeBFvC9.js";import"./addCustomCSSWithScoping-Pos0RdE7.js";import"./Illustrations-B_rOPeGm.js";import"./i18n-defaults-CFWtSmu6.js";import"./ResponsivePopoverCommon.css-MzYjXUbZ.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
