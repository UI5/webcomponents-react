import{j as o}from"./iframe-LwV4ThFO.js";import{useMDXComponents as i}from"./index-q5DcgXr2.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-Dip3aHJy.js";import"./Tag-By0Vj2CL.js";import"./index-DWh2FbsL.js";import{C as x}from"./ControlsWithNote-ShB3rN3m.js";import{D as u}from"./DocsHeader-BI2tp2WK.js";import{F as h}from"./CommandsAndQueries-DPfuXfqc.js";import{C as n,D as r}from"./ColorPalettePopover.stories-B34I1zo0.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Bpvl3ln4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CKI5p7Rd.js";import"./sys-enter-2-DqN3aKF8.js";import"./alert-D7vNrBhD.js";import"./index-CtGk4fFi.js";import"./index-SgnU4gKB.js";import"./Link-BYRJUWj7.js";import"./copy-D58bALps.js";import"./copy-DMZz3mt-.js";import"./GitHub-Mark-DftOlWVB.js";import"./TableOfContent-C92htYmA.js";import"./index-Dg0Ul4LB.js";import"./index-DO4DjFA6.js";import"./index-D33G3UXY.js";import"./index-wHmvTXkA.js";import"./index-BYce_ve5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4bciS0g0.js";import"./addCustomCSSWithScoping-d025F1t1.js";import"./ResponsivePopoverCommon.css-tY7w10PH.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
