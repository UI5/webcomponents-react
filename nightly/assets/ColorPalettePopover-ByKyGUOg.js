import{j as o}from"./iframe-CqyRxNKY.js";import{useMDXComponents as i}from"./index-CXuCYMlQ.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-05z5mbmD.js";import"./Tag-DuSXABBC.js";import"./index-C2IzZWSs.js";import{C as x}from"./ControlsWithNote-QwD0LoME.js";import{D as u}from"./DocsHeader-B5BV8WRG.js";import{F as h}from"./CommandsAndQueries-DLVKRV5D.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CTZkeaCc.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DSdhrjsx.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Ezgcqzkg.js";import"./sys-enter-2-5MMglnM6.js";import"./alert-BAouMQ7q.js";import"./index-BymRtllO.js";import"./index-4M_RVJJe.js";import"./Link-CXMFuXBh.js";import"./copy-D8nw0rNl.js";import"./copy-B4Tt60gX.js";import"./GitHub-Mark-DqVdFPyg.js";import"./TableOfContent-D9XYfqlc.js";import"./index-H9dUlo5Q.js";import"./index-BseYaHXw.js";import"./index-DzGBN3np.js";import"./index-CcSvXznG.js";import"./index-CwxFUtHh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bdq0yBwh.js";import"./addCustomCSSWithScoping-Bi_7urmM.js";import"./ResponsivePopoverCommon.css-BHPxlmcC.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
