import{j as o}from"./iframe-Cig4nsrF.js";import{useMDXComponents as i}from"./index-rt57_u-y.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DAEBkYYF.js";import"./Tag-Bs_1btou.js";import"./index-FKwq6U9j.js";import{C as x}from"./ControlsWithNote-BEmXSTpX.js";import{D as u}from"./DocsHeader-DsziQCYn.js";import{F as h}from"./CommandsAndQueries-D3xhwJA5.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BCvqVwSy.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-D1LB1WIl.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B6HgxZBq.js";import"./sys-enter-2-BRRws0JK.js";import"./alert-Cb5ARKKh.js";import"./index-BL2sJT6Z.js";import"./index-5C4HFP5l.js";import"./Link-Br9IVr1w.js";import"./copy-Y9mZrYG3.js";import"./copy-C7r52zpO.js";import"./GitHub-Mark-lRZYtsJv.js";import"./TableOfContent-CFzYaydv.js";import"./index-B2RnTjWc.js";import"./index-BB06tsQb.js";import"./index-BrrdpEgt.js";import"./index-ftQeoy-6.js";import"./index-BmqXmyDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsK0-Mz_.js";import"./addCustomCSSWithScoping-BWNNT1nj.js";import"./ResponsivePopoverCommon.css-CMdAayek.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
