import{j as o}from"./iframe-CzTCZe7v.js";import{useMDXComponents as s}from"./index-CDGFt6A1.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DeBlAQEU.js";import"./Tag-Czdm_FZb.js";import"./index-C0tHrsgM.js";import{C as x}from"./ControlsWithNote-CDLlK38r.js";import{D as u}from"./DocsHeader-BMnK1C50.js";import{F as h}from"./Footer-DxyUJb9o.js";import"./CommandsAndQueries-DvEFwabB.js";import"./PageNotFound-BAD2GAcl.js";import{C as n,D as r}from"./ColorPalettePopover.stories-7kN5Ve31.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BsVRgtKY.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bqvi10T6.js";import"./sys-enter-2-DyCO0gh_.js";import"./alert-9P0VyDJW.js";import"./index-CXe4MOnZ.js";import"./index-DIk2IhoZ.js";import"./Link-CZjSyYly.js";import"./copy-CNRutDQV.js";import"./copy-BOjVvS6l.js";import"./GitHub-Mark-BjX2VLOB.js";import"./TableOfContent-Bn2gWDi_.js";import"./index-B7_ymrud.js";import"./index-wip9afZ2.js";import"./index-DKruw7SF.js";import"./index-DzASyxpH.js";import"./index-C8dlP9nE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DPTQrRIc.js";import"./addCustomCSSWithScoping-Cq2MgCDz.js";import"./Illustrations-D7TiwfCu.js";import"./i18n-defaults-CFWtSmu6.js";import"./ResponsivePopoverCommon.css-DFzVVW-E.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
