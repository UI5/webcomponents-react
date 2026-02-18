import{j as o}from"./iframe-BeAHz6cC.js";import{useMDXComponents as i}from"./index-IuDgzHrg.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BFIGDLi7.js";import"./Tag-D9qmbNXw.js";import"./index-BxL3HTx3.js";import{C as x}from"./ControlsWithNote-BukBvQQM.js";import{D as u}from"./DocsHeader-kIeUPmA8.js";import{F as h}from"./CommandsAndQueries-D97dtm9O.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DFG9SAJV.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-s3Y2RonC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CKz_vH8g.js";import"./sys-enter-2-DjAoJc05.js";import"./alert-DbaxRKJL.js";import"./index-D74mYq85.js";import"./index-DADITnZh.js";import"./Link-DcHF9WJI.js";import"./copy-B_-U20rM.js";import"./copy-CeLNiPKq.js";import"./GitHub-Mark-BsL0uO8Y.js";import"./TableOfContent-C295TbGK.js";import"./index-Cz53yeIo.js";import"./index-BJX7RQS4.js";import"./index-B-C-Jm2N.js";import"./index-BgUv4ZgK.js";import"./index-dtYUUSxT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0TPubq3.js";import"./addCustomCSSWithScoping--2mgu3TN.js";import"./ResponsivePopoverCommon.css-DmlFnob0.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
