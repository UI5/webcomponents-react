import{j as o}from"./iframe-DZSv2zZb.js";import{useMDXComponents as i}from"./index-BqdSmNlq.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BSnZQBrX.js";import"./Tag-BEM_u6FU.js";import"./index-BBEh2DsQ.js";import{C as x}from"./ControlsWithNote-DL936Knp.js";import{D as u}from"./DocsHeader-bziwy7Vk.js";import{F as h}from"./CommandsAndQueries-CZUib4pD.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BriVgc8g.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-wAGPkfnZ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-COD7Swxj.js";import"./sys-enter-2-CFC1gFhb.js";import"./alert-CTmlBOXX.js";import"./index-lD82309j.js";import"./index-DrF5gpEw.js";import"./Link-CCplhiXF.js";import"./copy-CG-McODA.js";import"./copy-23w1fGpY.js";import"./GitHub-Mark-B22lEhPn.js";import"./TableOfContent-D_bn0j1X.js";import"./index-C2hiyRQA.js";import"./index-CCnKvqA0.js";import"./index-EGktcBQb.js";import"./index-DRWzqH2N.js";import"./index-CYgXuNom.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Z5sB9nBC.js";import"./addCustomCSSWithScoping-DXOZ95so.js";import"./ResponsivePopoverCommon.css-KtD9lY_C.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
