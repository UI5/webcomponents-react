import{j as o}from"./iframe-datodc_T.js";import{useMDXComponents as i}from"./index-c_OJYfdv.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-C83taKT5.js";import"./Tag-aYNaIA2f.js";import"./index-BxYLcFT1.js";import{C as x}from"./ControlsWithNote-robc0igz.js";import{D as u}from"./DocsHeader-CoIEvMOx.js";import{F as h}from"./CommandsAndQueries-9K4be_0B.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DKeLJG7Z.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BJfAH1N8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BVFOZm1x.js";import"./sys-enter-2-D-jHJs9Q.js";import"./alert-Bayru5wq.js";import"./index-CjE0y9ul.js";import"./index-DHA5QYCq.js";import"./Link-CguLCm0R.js";import"./copy-CcixpzPp.js";import"./copy-fv_X0Lju.js";import"./GitHub-Mark-DdJzrJIo.js";import"./TableOfContent-C9390aIY.js";import"./index-CaqpJvlq.js";import"./index-D2t_qzWG.js";import"./index-Dsm5uoLy.js";import"./index-Be6r5cNn.js";import"./index-D6USDY88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpNALNgF.js";import"./addCustomCSSWithScoping-DKvV4UVz.js";import"./ResponsivePopoverCommon.css-DAKPNunD.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
