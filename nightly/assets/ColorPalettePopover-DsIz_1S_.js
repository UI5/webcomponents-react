import{j as o}from"./iframe-jDeV-G8S.js";import{useMDXComponents as i}from"./index-Da3DrjVc.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BVLmp_0m.js";import"./Tag-CoiXaVSg.js";import"./index-DNzR_fzc.js";import{C as x}from"./ControlsWithNote-C35I74bz.js";import{D as u}from"./DocsHeader-BEeUsDIt.js";import{F as h}from"./CommandsAndQueries-S46eotFY.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BFLuc-g1.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CEtB8A-h.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CBKKlcN3.js";import"./sys-enter-2-D5f8NC37.js";import"./alert-Dk2Mtfik.js";import"./index-C8jlh6dJ.js";import"./index-BZOVbKF_.js";import"./Link-C8Q8wVMF.js";import"./copy-DP9Msd6b.js";import"./copy-DEHDDsgd.js";import"./GitHub-Mark-DPA3dP3A.js";import"./TableOfContent-CtJkDOHV.js";import"./index-DYm7h2BG.js";import"./index-DJMOMMru.js";import"./index-DhmB-gDR.js";import"./index-GOQBvCdy.js";import"./index--p5n_M0a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeVQuTnR.js";import"./addCustomCSSWithScoping-DNXKFIA9.js";import"./ResponsivePopoverCommon.css-DpB6CavY.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
