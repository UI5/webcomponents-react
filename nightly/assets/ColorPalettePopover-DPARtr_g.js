import{j as o}from"./iframe-CajBfwIr.js";import{useMDXComponents as i}from"./index-C7bmLKAS.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DZo8LX6f.js";import"./Tag-BvqWkn4s.js";import"./index-EXDQ2t-0.js";import{C as x}from"./ControlsWithNote-kIW7NW5u.js";import{D as u}from"./DocsHeader-BW7Ao0Ba.js";import{F as h}from"./CommandsAndQueries-BsF9_wDx.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DXvyG9Vf.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CEP1uccu.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CcxBY03f.js";import"./sys-enter-2-tMwqxxGo.js";import"./alert-BiYc5KCB.js";import"./index-Bn2EsG13.js";import"./index-sgQ15IT-.js";import"./Link-CQWL02fV.js";import"./copy-CVnUuOuT.js";import"./copy-n5aHnb96.js";import"./GitHub-Mark-Be69ms0M.js";import"./TableOfContent-DoaHZ2fF.js";import"./index-CBQApe_5.js";import"./index-els7k0UY.js";import"./index-Dqx8EP_w.js";import"./index-BAV33GIB.js";import"./index-BRmuq6Qh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vf8J9lvz.js";import"./addCustomCSSWithScoping-DTh894zV.js";import"./ResponsivePopoverCommon.css-C3cJZdrp.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
