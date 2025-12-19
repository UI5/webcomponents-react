import{j as o}from"./iframe-By2gmFxc.js";import{useMDXComponents as i}from"./index-gKb_GMnq.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-D2uzjwbj.js";import"./Tag-Q4xsur8Q.js";import"./index-CIY2e3dX.js";import{C as x}from"./ControlsWithNote-J_FS3ar_.js";import{D as u}from"./DocsHeader-BQhjxotY.js";import{F as h}from"./CommandsAndQueries-MwhWu1jt.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BeboILLg.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Ci4YWeBj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DZbn4exg.js";import"./sys-enter-2-D1EL9sqg.js";import"./alert-Dj00yiIa.js";import"./index-c5NRQxKp.js";import"./index-CYEIBPim.js";import"./Link-nWDhDuhI.js";import"./copy-BckvoikG.js";import"./copy-jhrg3Bh5.js";import"./GitHub-Mark-C0HJUWkv.js";import"./TableOfContent-DNYBmsFN.js";import"./index-DjdoJ-R-.js";import"./index-JdoT9BRG.js";import"./index-4iQpwXEW.js";import"./index-XAF-DZNA.js";import"./index-BlQvs7kx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl2hQFWK.js";import"./addCustomCSSWithScoping-BCT2RHCk.js";import"./ResponsivePopoverCommon.css-GYWWINRP.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
