import{j as o}from"./iframe-CDMw3QW7.js";import{useMDXComponents as i}from"./index-B1OHiQPx.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CUd96uRM.js";import"./Tag-CRCkHgPM.js";import"./index-BFHtg5w_.js";import{C as x}from"./ControlsWithNote-C9aiOPy2.js";import{D as u}from"./DocsHeader-Dmvt-mfp.js";import{F as h}from"./CommandsAndQueries-DKYp_Jx5.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DND7emHk.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-C9NpIFSo.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DcnFOD7I.js";import"./sys-enter-2-Bq9738ZR.js";import"./alert-DgZ_z3Yp.js";import"./index-CEKogKIQ.js";import"./index-y4pjeQFW.js";import"./Link-fH9wonJ-.js";import"./copy-Dd0CQ0vn.js";import"./copy-4Dlt6M0w.js";import"./GitHub-Mark-2q-Fi7Zh.js";import"./TableOfContent-BIYALOwi.js";import"./index-CjzhAhn4.js";import"./index-QTO9fIyh.js";import"./index-CFg6tGep.js";import"./index-zPaFBXP5.js";import"./index-NVXyFLUS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzgD7Za_.js";import"./addCustomCSSWithScoping-DWGH2XNZ.js";import"./ResponsivePopoverCommon.css-D0k6m-Zp.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
