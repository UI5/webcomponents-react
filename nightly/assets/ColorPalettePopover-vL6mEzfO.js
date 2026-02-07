import{j as o}from"./iframe-CoAi7Ttt.js";import{useMDXComponents as i}from"./index-CTifqAle.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-Ybxx5XcU.js";import"./Tag-DogcFDWn.js";import"./index-zKgtSNJj.js";import{C as x}from"./ControlsWithNote-CBZw3-Gn.js";import{D as u}from"./DocsHeader-BN-VJVFD.js";import{F as h}from"./CommandsAndQueries-Bmwjvcx6.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CZ6W_LRO.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DEBpGUBz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BEJpmRSo.js";import"./sys-enter-2-A-vrRu2-.js";import"./alert-Bip-otgE.js";import"./index-DbUh3jFl.js";import"./index-CnlNXdqG.js";import"./Link-BYcIvZzO.js";import"./copy-Cx3Ez9qo.js";import"./copy-CDQOzwpW.js";import"./GitHub-Mark-Ix8rNDGw.js";import"./TableOfContent-BvKarlsr.js";import"./index-CO1YKgmB.js";import"./index-Cq0wf6-J.js";import"./index-CDFqh5IR.js";import"./index-B6Wc4p5_.js";import"./index-Cq2phxGV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Z6K6IIMy.js";import"./addCustomCSSWithScoping-BPStdEW-.js";import"./ResponsivePopoverCommon.css-DEHIK5w4.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
