import{j as o}from"./iframe-Ba5ZQio8.js";import{useMDXComponents as s}from"./index-rp1O3cN1.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CO8PFwMs.js";import"./Tag-U7nVfWIj.js";import"./index-P8tdEHaz.js";import{C as x}from"./ControlsWithNote-DNlsHe6l.js";import{D as u}from"./DocsHeader-hXtyMuGp.js";import{F as h}from"./Footer-C-jjr1fr.js";import"./CommandsAndQueries-Bbpx9ls1.js";import"./PageNotFound-lWhn0Z7P.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DwW9SMZ8.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DFcCeo3y.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CmnD_cte.js";import"./sys-enter-2-a4cBCFrc.js";import"./alert-Zv2opSBs.js";import"./index-DqQH8U51.js";import"./index-CQozdAin.js";import"./Link-BJPm0pTR.js";import"./copy-D0sMyz27.js";import"./copy-B4CpXR8v.js";import"./GitHub-Mark-B-63t02Q.js";import"./TableOfContent-CEWE7Cwo.js";import"./index-DW1zzZuq.js";import"./index-B2oTG2Uf.js";import"./index-CFpPfuDn.js";import"./index-D3zw9ZHH.js";import"./index-R7gtGlkK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCyzTRrI.js";import"./addCustomCSSWithScoping-CUMS_4o0.js";import"./Illustrations-wmNg3JaM.js";import"./i18n-defaults-CFWtSmu6.js";import"./ResponsivePopoverCommon.css-Bx66l35z.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
