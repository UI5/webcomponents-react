import{j as o}from"./iframe-HvCg7yUW.js";import{useMDXComponents as i}from"./index-CE4Hfwqi.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-D8Z2Dyw_.js";import"./Tag-BplAIBUz.js";import"./index-DuAmAsky.js";import{C as x}from"./ControlsWithNote-C4sDrxAq.js";import{D as u}from"./DocsHeader-CP6cDlJa.js";import{F as h}from"./CommandsAndQueries-DUi4l31N.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BDW3XgFu.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BWXBvOSs.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CCnVD-2j.js";import"./sys-enter-2-X1IC7sb7.js";import"./alert-Dmmp7J4K.js";import"./index-7L-T-PBR.js";import"./index-DPhzHQJ0.js";import"./Link-Bg-vZYST.js";import"./copy-DKrfWEvD.js";import"./copy-DBsC0j81.js";import"./GitHub-Mark-vmmzZbgB.js";import"./TableOfContent-BCbq4pBF.js";import"./index-iO1m8u6x.js";import"./index-BaM0OdR1.js";import"./index-DmLJcEoD.js";import"./index-D5kiTLsH.js";import"./index-DpfgSJii.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQB1q1h5.js";import"./addCustomCSSWithScoping-Bswf-IYk.js";import"./ResponsivePopoverCommon.css-BidD7a2A.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
