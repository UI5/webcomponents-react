import{j as o}from"./iframe-DMCuegit.js";import{u as s,M as m,C as a,a as l,D as c,A as d}from"./blocks-_hT2CGz-.js";import"./Tag-DKKBiDqY.js";import"./index-eKDFsa2E.js";import{C as u}from"./ControlsWithNote-CCfPh1IT.js";import{D as x}from"./DocsHeader-BGUPBIWz.js";import{F as h}from"./Footer-0Wa-LUTc.js";import"./CommandsAndQueries-C9E2MGX7.js";import"./PageNotFound-BG19bJbD.js";import{C as n,D as r}from"./ColorPalettePopover.stories-yq5QyC_g.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Dp5CYF6e.js";import"./preload-helper-PPVm8Dsz.js";import"./information-5_fbL55R.js";import"./sys-enter-2-Dil9t1r8.js";import"./alert-D7vPLYbi.js";import"./index-D62lIz3L.js";import"./index-otx7j-A2.js";import"./Link-CmPTNs7p.js";import"./copy-B-HwLSgn.js";import"./copy-CPtUp5y0.js";import"./GitHub-Mark-DIeXcjWa.js";import"./TableOfContent-CJ3fOdBx.js";import"./index-DEoJMyHo.js";import"./index-Dzpyi8IH.js";import"./index-C9z-ZS1p.js";import"./index-C1STFZgh.js";import"./index-Di3QE5re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5tqyg7w.js";import"./addCustomCSSWithScoping-C0Smz55A.js";import"./Illustrations-bTO4h7is.js";import"./i18n-defaults-CFWtSmu6.js";import"./ResponsivePopoverCommon.css-MXP7eeX6.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
`,o.jsx(x,{of:n,since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:r}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(u,{of:r}),`
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
`,o.jsx(l,{children:j}),`
`,o.jsx(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(d,{of:p}),`
`,o.jsx(h,{})]})}function Z(t={}){const{wrapper:e}={...s(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{Z as default};
