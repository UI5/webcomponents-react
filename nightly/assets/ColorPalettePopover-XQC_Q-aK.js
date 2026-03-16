import{j as o}from"./iframe-CIERqdmv.js";import{useMDXComponents as s}from"./index-DuJS4dN9.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CwsgKOP_.js";import"./Tag-0874imNl.js";import"./index-CMev4Q36.js";import{C as x}from"./ControlsWithNote-CSnduUsc.js";import{D as u}from"./DocsHeader-_r8mBImb.js";import{F as h}from"./Footer-DeuiB6kc.js";import"./CommandsAndQueries-CnFEaRrZ.js";import"./PageNotFound-C7dSWVQh.js";import{C as n,D as r}from"./ColorPalettePopover.stories-COUmqVvG.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-D6iUAF7l.js";import"./preload-helper-PPVm8Dsz.js";import"./information-90fB5V4h.js";import"./sys-enter-2-BkL_leH3.js";import"./alert-B9azflx9.js";import"./index-DmgJDP0k.js";import"./index-BEXhXSTj.js";import"./Link-B7T_f79Y.js";import"./copy-ofXuvq9E.js";import"./copy-Dk2sduK9.js";import"./GitHub-Mark-RGHHd1bg.js";import"./TableOfContent-BXcIi_qC.js";import"./index-CJA8M3b4.js";import"./index-CeFrwZtC.js";import"./index-Dub9x5-i.js";import"./index-DQGCwtV8.js";import"./index-C9od4SKd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkSzocmg.js";import"./addCustomCSSWithScoping-B8m6lHZs.js";import"./Illustrations-CMsXyloe.js";import"./i18n-defaults-CFWtSmu6.js";import"./ResponsivePopoverCommon.css-BAyfAe_C.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
