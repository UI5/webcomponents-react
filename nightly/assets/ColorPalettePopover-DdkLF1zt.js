import{j as o}from"./iframe-dY_MtB0H.js";import{useMDXComponents as i}from"./index-lTaYTAxK.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-Cb83AQYu.js";import"./Tag-CxsGqX-Z.js";import"./index-Bn3aq9YQ.js";import{C as x}from"./ControlsWithNote-BvBWP6qn.js";import{D as u}from"./DocsHeader-WJf0lHVZ.js";import{F as h}from"./CommandsAndQueries-BmTyHFa7.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DnL0leAD.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-w2UU44a_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D5v06NEv.js";import"./sys-enter-2-Db0ak0Nd.js";import"./alert-BFAYnF-v.js";import"./index-C_5JPwqD.js";import"./index-CvfG5erE.js";import"./Link-CVqB5eeU.js";import"./copy-CsPK4W8W.js";import"./copy-D63JhW9h.js";import"./GitHub-Mark-BFV8op_a.js";import"./TableOfContent-cH5UKuOL.js";import"./index-D3rLokAO.js";import"./index-SPIujRFM.js";import"./index-B-7UltV5.js";import"./index-DLNzTjP4.js";import"./index-Bzi9OmH5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xawsFKB1.js";import"./addCustomCSSWithScoping-Dwp_g_5J.js";import"./ResponsivePopoverCommon.css-BS9wczML.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
