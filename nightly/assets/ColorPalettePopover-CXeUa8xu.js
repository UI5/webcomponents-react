import{j as o}from"./iframe-D89K97gv.js";import{useMDXComponents as s}from"./index-BJvRQfhi.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-Cy4BDnT1.js";import"./Tag-BMl9amXb.js";import"./index-CG_fwaJ_.js";import{C as x}from"./ControlsWithNote-CoVcsK_6.js";import{D as u}from"./DocsHeader-DP8TxsA3.js";import{F as h}from"./Footer-a85ddGr6.js";import"./CommandsAndQueries-CkqpoGcY.js";import"./PageNotFound-Btnag6Vx.js";import{C as n,D as r}from"./ColorPalettePopover.stories-A16EAhyg.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CFt8esO1.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DxfKMTg6.js";import"./sys-enter-2-aIi16_BZ.js";import"./alert-CzEHD23R.js";import"./index-_KpWx7_H.js";import"./index-CHwgMgjy.js";import"./Link-vvC1wc11.js";import"./copy-D95-XUb5.js";import"./copy-BeHvABnn.js";import"./GitHub-Mark-e3Bx1Fbe.js";import"./TableOfContent-Bl5qcHLc.js";import"./index-D9Orgelb.js";import"./index-CD-X_9j4.js";import"./index-BFDU-uR3.js";import"./index-BmDAlwXN.js";import"./index-CSxOLZlI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JuHHWHgI.js";import"./addCustomCSSWithScoping-D0msxKTR.js";import"./Illustrations-llDvpFiy.js";import"./i18n-defaults-C7ICj5-E.js";import"./ResponsivePopoverCommon.css-B4cnMME8.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
