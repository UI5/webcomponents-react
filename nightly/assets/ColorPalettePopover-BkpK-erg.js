import{j as o}from"./iframe-DYmejECO.js";import{useMDXComponents as i}from"./index-9gDZjqLB.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-WpvHKkxz.js";import"./Tag-BqbQuhLk.js";import"./index-B5pjKVih.js";import{C as x}from"./ControlsWithNote-DKcmz9Y6.js";import{D as u}from"./DocsHeader-BbSMCFfB.js";import{F as h}from"./CommandsAndQueries-BUFKZ5oS.js";import{C as n,D as r}from"./ColorPalettePopover.stories-B9JiRYbl.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DiDJesLj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DDszVPcm.js";import"./sys-enter-2-DGk9QDRk.js";import"./alert-B5ckm3Ge.js";import"./index-E0O-rqDf.js";import"./index-D_-3_YTN.js";import"./Link-FVvXEWOc.js";import"./copy-C5FDM_IK.js";import"./copy-Za-_Z-Tq.js";import"./GitHub-Mark-wNehAYyG.js";import"./TableOfContent-BUGWyTUo.js";import"./index-DtSXtxpp.js";import"./index-Cq6cdgcL.js";import"./index-CQOsAJId.js";import"./index-B1aVKp_Z.js";import"./index-CHQEcSbZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6DutTHa.js";import"./addCustomCSSWithScoping-DW_smYaa.js";import"./ResponsivePopoverCommon.css-CmjvYdZX.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
