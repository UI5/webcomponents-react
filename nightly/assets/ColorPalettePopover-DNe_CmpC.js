import{j as o}from"./iframe-BY1BFtoq.js";import{useMDXComponents as i}from"./index-BJX8o_PY.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-Bfc9ghDe.js";import"./Tag-DpT3Xyfk.js";import"./index-DoP9OXws.js";import{C as x}from"./ControlsWithNote-ab9tW4FC.js";import{D as u}from"./DocsHeader-hJpNaL2L.js";import{F as h}from"./CommandsAndQueries-LexJCY9y.js";import{C as n,D as r}from"./ColorPalettePopover.stories-Ddkly7gf.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DQKaU9jW.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B4R2spf7.js";import"./sys-enter-2-HrsNxE-9.js";import"./alert-Dq9SF84g.js";import"./index-7DiuorJD.js";import"./index-CRXctDPP.js";import"./Link-CaG5MpgS.js";import"./copy-CWdbOg1V.js";import"./copy-BobpDbK0.js";import"./GitHub-Mark-CmhMTlj-.js";import"./TableOfContent-CP77nt2G.js";import"./index-Cb7WjzHE.js";import"./index-odRykF4_.js";import"./index-B41LOkRR.js";import"./index-DSc6dsYM.js";import"./index-Dk5-ak7N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKdRFMC3.js";import"./addCustomCSSWithScoping-BhZcrUID.js";import"./ResponsivePopoverCommon.css-BhNXWsd2.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
