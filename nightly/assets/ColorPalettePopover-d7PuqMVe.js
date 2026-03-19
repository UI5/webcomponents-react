import{j as o}from"./iframe-D9XQThMB.js";import{useMDXComponents as s}from"./index-BFkPJIs4.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CsZckq-p.js";import"./Tag-NpQQnYo4.js";import"./index-BWcAyF8h.js";import{C as x}from"./ControlsWithNote-DzDU2bOP.js";import{D as u}from"./DocsHeader-C1IeQFXK.js";import{F as h}from"./Footer-8Yr8m1IV.js";import"./CommandsAndQueries-BBuqlp9J.js";import"./PageNotFound-DktVNoBl.js";import{C as n,D as r}from"./ColorPalettePopover.stories-Ch-E01jt.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DN7aYyE4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bvi0jW5b.js";import"./sys-enter-2-Bex-whDb.js";import"./alert-CKQIr3Jj.js";import"./index-BlKrBUMf.js";import"./index-CjxO355V.js";import"./Link-CJ7-xxSX.js";import"./copy-8S9Iqf0z.js";import"./copy-CyvuSNR_.js";import"./GitHub-Mark-DKAgjLDu.js";import"./TableOfContent-Bpyqe4Fu.js";import"./index-BtpxSXz8.js";import"./index-CxgWM8Dp.js";import"./index-BDim0UZ8.js";import"./index-C40uNmLM.js";import"./index-9BnKq7JY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DrummEDM.js";import"./addCustomCSSWithScoping-BEVVchOt.js";import"./Illustrations-DGm-82Ik.js";import"./i18n-defaults-CFWtSmu6.js";import"./ResponsivePopoverCommon.css-AccouXMm.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
