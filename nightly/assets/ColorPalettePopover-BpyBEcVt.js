import{j as o}from"./iframe-BHRyWWCK.js";import{useMDXComponents as i}from"./index-vmzMr3GX.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DoCMQEa0.js";import"./Tag-R17NMrYt.js";import"./index-CZEJadic.js";import{C as x}from"./ControlsWithNote-plOa8xKl.js";import{D as u}from"./DocsHeader-DFeM7m3y.js";import{F as h}from"./CommandsAndQueries-BrUcvXA7.js";import{C as n,D as r}from"./ColorPalettePopover.stories-B0mnT_5Q.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CMZwvHRR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Nr6PmwbG.js";import"./sys-enter-2--GTeHKCC.js";import"./alert-CaNIaeyx.js";import"./index-CBZ8EfYd.js";import"./index-BKKHGvr5.js";import"./Link-v8HZQWxp.js";import"./copy-BZoUnpiW.js";import"./copy-rEHIQTke.js";import"./GitHub-Mark-BlfYpMDA.js";import"./TableOfContent-B7GL1Cos.js";import"./index-UnB73Rnf.js";import"./index-DibDZuef.js";import"./index-Cm33Vcx3.js";import"./index-DCtea6ve.js";import"./index-CJXqjvvM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEXhzcrM.js";import"./addCustomCSSWithScoping-W1ZwlwrN.js";import"./ResponsivePopoverCommon.css-BUbUes1r.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
