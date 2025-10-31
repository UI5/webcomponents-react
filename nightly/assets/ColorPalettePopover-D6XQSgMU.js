import{j as o}from"./iframe-Do6vb0_F.js";import{useMDXComponents as i}from"./index-CjAG28Zi.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BSmhBV8W.js";import"./Tag-Bm_1Oa-G.js";import"./index-DFaXcVzr.js";import{C as x}from"./ControlsWithNote-Yo9YxzeI.js";import{D as u}from"./DocsHeader-CLVKUgBk.js";import{F as h}from"./CommandsAndQueries-DNVLBibD.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DVORBCF0.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Cbm3qKiT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-kf1Y_V0y.js";import"./sys-enter-2-Dgg9scSJ.js";import"./alert-eluNIvxZ.js";import"./index-CziNROS9.js";import"./index-CRpB2mc_.js";import"./Link-DfSClIn0.js";import"./copy-6yP1MdvU.js";import"./copy-CtSFAv-a.js";import"./GitHub-Mark-BQKgzCKu.js";import"./TableOfContent-DFD41kkG.js";import"./index-Bn7jdYPg.js";import"./index-CjAZJ6mP.js";import"./index-B7DmSRaZ.js";import"./index-euaiQ6-T.js";import"./index-BKzdQw4A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-x3ovOdYp.js";import"./addCustomCSSWithScoping-DMyk9VX6.js";import"./ResponsivePopoverCommon.css-DZxesZgF.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
