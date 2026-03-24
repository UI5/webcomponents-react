import{j as o}from"./iframe-BB6QsCcm.js";import{useMDXComponents as s}from"./index-CpyLbSYP.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DGH8wLVm.js";import"./Tag-DYnAL2vL.js";import"./index-DEibJBdY.js";import{C as x}from"./ControlsWithNote-BQYRe9DV.js";import{D as u}from"./DocsHeader-BHLDUFIc.js";import{F as h}from"./Footer-BhEsQKJ6.js";import"./CommandsAndQueries-BiWITRaD.js";import"./PageNotFound-CzkzQoiL.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DYJ_RSmr.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-HSk2qeR-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-b186mgfr.js";import"./sys-enter-2-BIQ3YVMq.js";import"./alert-BqQjVqfR.js";import"./index-Cg4sRA-Y.js";import"./index-ZlEQADjM.js";import"./Link-nh3gGr7J.js";import"./copy-BgB_gUNv.js";import"./copy-CCxPB9Eo.js";import"./GitHub-Mark-CNoqkMTk.js";import"./TableOfContent-DsNRTVUI.js";import"./index-DsUvzGkS.js";import"./index-BiTQ1Tdz.js";import"./index-BeoN8qxu.js";import"./index-BFKJbbqY.js";import"./index-CMF9IKMM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ctz7lcER.js";import"./addCustomCSSWithScoping-D3Qs4mB8.js";import"./Illustrations-ChLBGWr7.js";import"./i18n-defaults-CFWtSmu6.js";import"./ResponsivePopoverCommon.css-6GP8Lm0R.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
