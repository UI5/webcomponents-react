import{j as o}from"./iframe-DcVQn4h7.js";import{useMDXComponents as s}from"./index-DjjpMNLx.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DpuwUxz9.js";import"./Tag-DIkCdjNz.js";import"./index-DQQWkI0N.js";import{C as x}from"./ControlsWithNote-Cjn4CI-t.js";import{D as u}from"./DocsHeader-UHsRexcK.js";import{F as h}from"./Footer-NfYngWNA.js";import"./CommandsAndQueries-BQOFWNIa.js";import"./PageNotFound-CVfCATZz.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BqhrFlRY.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-B1sGQT-v.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cy8WRBMY.js";import"./sys-enter-2-BclYTqTi.js";import"./alert-YdCtzqbp.js";import"./index-CqxmVbMG.js";import"./index-DdVtCCP3.js";import"./Link-CVy3lCMm.js";import"./copy-BiurfHxj.js";import"./copy-Bc0coMMf.js";import"./GitHub-Mark-eGrRYaWL.js";import"./TableOfContent-CNL8YZr2.js";import"./index-DAQytdMa.js";import"./index-C5tsWYzj.js";import"./index-fZCQALbq.js";import"./index-CEU1rAw4.js";import"./index-CwCoovk9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BldFJeaD.js";import"./addCustomCSSWithScoping-BZ_vF02V.js";import"./Illustrations-Bw1pJyGV.js";import"./i18n-defaults-CFWtSmu6.js";import"./ResponsivePopoverCommon.css-osNOcHdW.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
