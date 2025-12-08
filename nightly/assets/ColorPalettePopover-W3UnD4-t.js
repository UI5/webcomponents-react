import{j as o}from"./iframe-BF6vIVo6.js";import{useMDXComponents as i}from"./index-LfmOxbs8.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BEVYxzM4.js";import"./Tag-Bbrw4Mg6.js";import"./index-COzDMtK9.js";import{C as x}from"./ControlsWithNote-CW6StnRt.js";import{D as u}from"./DocsHeader-C_w2jjky.js";import{F as h}from"./CommandsAndQueries-BZWG0qBB.js";import{C as n,D as r}from"./ColorPalettePopover.stories-Cz26bBGT.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BHUpHmX6.js";import"./preload-helper-PPVm8Dsz.js";import"./information-v6F873AP.js";import"./sys-enter-2-WuXn7rus.js";import"./alert-C89y0cfE.js";import"./index-Do8jjW18.js";import"./index-DdICQhrF.js";import"./Link-C3nR6kZV.js";import"./copy-CtLEypSk.js";import"./copy-BsYfEWuv.js";import"./GitHub-Mark-JjRId1WV.js";import"./TableOfContent-D6SS1QPi.js";import"./index-DdhWaCX8.js";import"./index-CTIQkpgO.js";import"./index-DoBDF59y.js";import"./index-B5sOe_-e.js";import"./index-CKX87Paa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BsUQb2cX.js";import"./addCustomCSSWithScoping-B22aBF7H.js";import"./ResponsivePopoverCommon.css-B-2GlP7R.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
