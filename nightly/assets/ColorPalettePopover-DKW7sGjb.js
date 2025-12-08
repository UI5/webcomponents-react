import{j as o}from"./iframe-C_rEo4ZD.js";import{useMDXComponents as i}from"./index-dLMhCWaI.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DvQXQjkC.js";import"./Tag-ZlMS2_of.js";import"./index-B4E4i8qV.js";import{C as x}from"./ControlsWithNote-NNSLEz2d.js";import{D as u}from"./DocsHeader-BLZZ5m7W.js";import{F as h}from"./CommandsAndQueries-TFkH8H0n.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CPF5T3C6.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-D4UqwWNf.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CbbI_Sx9.js";import"./sys-enter-2-BBWU7--K.js";import"./alert-DYblDknT.js";import"./index-DYBTfsDC.js";import"./index-Dpn1WNSA.js";import"./Link-B0N3KZaJ.js";import"./copy-CG93UEZ1.js";import"./copy-BTrKUsxF.js";import"./GitHub-Mark-BICw6qJg.js";import"./TableOfContent-BwFAbyYU.js";import"./index-Bd-vG2gT.js";import"./index-DJ6GK8yt.js";import"./index-DMq7DMka.js";import"./index-CG9w7Zbs.js";import"./index-DR-Y0J47.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7u1q_FrR.js";import"./addCustomCSSWithScoping-C6yaVxxt.js";import"./ResponsivePopoverCommon.css-D3bilPOx.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
