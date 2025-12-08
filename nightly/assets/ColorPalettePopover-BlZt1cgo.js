import{j as o}from"./iframe-C7GsLKpM.js";import{useMDXComponents as i}from"./index-fgJud-zp.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-D2ryVNuM.js";import"./Tag-CvCDhGeJ.js";import"./index-CDhisaU5.js";import{C as x}from"./ControlsWithNote-DGuGAwo2.js";import{D as u}from"./DocsHeader-C2A8ryh7.js";import{F as h}from"./CommandsAndQueries-zRxhXSXv.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CiaJJoba.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Cs3Xd2O8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CeT29ukt.js";import"./sys-enter-2-DX9sWARu.js";import"./alert-CEtziYy3.js";import"./index-Bitbggm1.js";import"./index-hUX7abRI.js";import"./Link-Bb3LeyVe.js";import"./copy-CeS9CC6e.js";import"./copy-DEZSjQMA.js";import"./GitHub-Mark-3LNYjKsL.js";import"./TableOfContent-CFUfa1cA.js";import"./index-CW2WjDDi.js";import"./index-B72Of-bP.js";import"./index-Dyv0UGKb.js";import"./index-m_3CNkhb.js";import"./index-DoyP2rLL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6aw6fal.js";import"./addCustomCSSWithScoping-DxMrCFWH.js";import"./ResponsivePopoverCommon.css-BAvtZMMP.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
