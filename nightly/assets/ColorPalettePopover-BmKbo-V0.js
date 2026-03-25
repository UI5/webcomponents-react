import{j as o}from"./iframe-aMG4Hi1W.js";import{useMDXComponents as s}from"./index-BxeVDhrM.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DBdj8k-3.js";import"./Tag-DjBNrtqu.js";import"./index-BneSHkIo.js";import{C as x}from"./ControlsWithNote-Bu936WH_.js";import{D as u}from"./DocsHeader-BKxnzngo.js";import{F as h}from"./Footer-CaqpNArb.js";import"./CommandsAndQueries-BfziQu2M.js";import"./PageNotFound-BtQ0dC4g.js";import{C as n,D as r}from"./ColorPalettePopover.stories-vxycyD-F.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CYi0PWSw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CeS9aeh9.js";import"./sys-enter-2-qcEAkOuO.js";import"./alert-a4vfwAyT.js";import"./index-CkonQXRu.js";import"./index-S-kDMFzJ.js";import"./Link-CIXppVOK.js";import"./copy-BB0brAa5.js";import"./copy-WJgdbAvd.js";import"./GitHub-Mark-CTp8p8Sq.js";import"./TableOfContent-RUI6YfVk.js";import"./index-BkkgvrV5.js";import"./index-D8GAgpXJ.js";import"./index-D79dGm1P.js";import"./index-CRZddsOj.js";import"./index-D40aHtue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NZCpAmvM.js";import"./addCustomCSSWithScoping-DZGBI863.js";import"./Illustrations-Dkeiu4Tv.js";import"./i18n-defaults-CFWtSmu6.js";import"./ResponsivePopoverCommon.css-CysXn5xC.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
