import{j as o}from"./iframe-Dy0Vcyg3.js";import{useMDXComponents as i}from"./index-D0O3WS9u.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DQpqsYLC.js";import"./Tag-DXMLJOuX.js";import"./index-nlWOetEC.js";import{C as x}from"./ControlsWithNote-Kr0mR6A3.js";import{D as u}from"./DocsHeader-CdFYNUpk.js";import{F as h}from"./CommandsAndQueries-BbCratpG.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BKRVRZ8z.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-muqgqjPB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BWURtjFA.js";import"./sys-enter-2-D7LiZd3_.js";import"./alert-CoPtJvs8.js";import"./index-DLHjFZTm.js";import"./index-0ZDpj1Mu.js";import"./Link-DNkb161-.js";import"./copy-C3vqrGXf.js";import"./copy-BxlHwQsP.js";import"./GitHub-Mark-F715STOU.js";import"./TableOfContent-CImz-8VI.js";import"./index-BMTL_1tu.js";import"./index-BRFe_2UD.js";import"./index-DKPC3_SO.js";import"./index-D_r2NSA0.js";import"./index-C5s5hQAS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-01L-n9vL.js";import"./addCustomCSSWithScoping-nI6ifFmX.js";import"./ResponsivePopoverCommon.css-0gtwTwlc.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
