import{j as o}from"./iframe-D-W-mmRj.js";import{useMDXComponents as i}from"./index-D8IyotA-.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CCgGLQdQ.js";import"./Tag-CcHwt-jC.js";import"./index-BjBbtVMa.js";import{C as x}from"./ControlsWithNote-B4akadk-.js";import{D as u}from"./DocsHeader-D3NX_wh_.js";import{F as h}from"./CommandsAndQueries-G8bd-Dz2.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BakGmRuW.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-yYe8GDMz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CEG7gdih.js";import"./sys-enter-2-CEv4mC4Y.js";import"./alert-DtXDmWLr.js";import"./index-DkLrn4qm.js";import"./index-BL1fd3ME.js";import"./Link-B8l4snGX.js";import"./copy-BRpilgxr.js";import"./copy-Bs2vU0sH.js";import"./GitHub-Mark-DU3wALFb.js";import"./TableOfContent-BCe3V_fU.js";import"./index-lPK_7vuA.js";import"./index-g5ZQYkE0.js";import"./index-B8f1MJrs.js";import"./index-CtoHKFWx.js";import"./index-C1eJkWnN.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_kQaGsI.js";import"./addCustomCSSWithScoping-IPWT__yW.js";import"./ResponsivePopoverCommon.css-DVnmqxls.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
