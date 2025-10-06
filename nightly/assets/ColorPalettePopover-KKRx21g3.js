import{j as o}from"./iframe-FqLIb5aJ.js";import{useMDXComponents as i}from"./index-BMlaAUsm.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-2y9I1Ee8.js";import"./Tag-8E3ttw9X.js";import"./index-B7xi-wqa.js";import{C as x}from"./ControlsWithNote-NdmfawKk.js";import{D as u}from"./DocsHeader-lKa0J31y.js";import{F as h}from"./CommandsAndQueries-C8KzZZ_g.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DlhSbWrt.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Bcfl9Sh4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CWEUh2Nv.js";import"./sys-enter-2-D8dKPdhT.js";import"./alert-Dzhc-2EW.js";import"./index-PGt_tfZb.js";import"./index-CunGGXs0.js";import"./Link-D_zVjdUt.js";import"./copy-BAU6whic.js";import"./copy-DHQOADmz.js";import"./GitHub-Mark-fELMhB6e.js";import"./TableOfContent-Bn39sA4u.js";import"./index-DrxJ3_v0.js";import"./index-CJCUd_sD.js";import"./index-ByRLHl7W.js";import"./index-DHR1LOgw.js";import"./index-DfAJ7eEY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlZw9a5e.js";import"./addCustomCSSWithScoping-BziWOAoD.js";import"./ResponsivePopoverCommon.css-CFYKUvZL.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
