import{j as o}from"./iframe-C_ZjSpvw.js";import{useMDXComponents as i}from"./index-D99mDNJl.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DhOgu6aS.js";import"./Tag-BTyw-Q9o.js";import"./index-CFaSARe7.js";import{C as x}from"./ControlsWithNote-DZwuVK-s.js";import{D as u}from"./DocsHeader-Ch568gUM.js";import{F as h}from"./CommandsAndQueries-DoIIg28U.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CcWtI87M.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-C3dYdcjP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DjWFOZk0.js";import"./sys-enter-2-Bcyd_2Ym.js";import"./alert-D6bEf6aa.js";import"./index-CQkucwsg.js";import"./index-uA7KkxCs.js";import"./Link-DjlLuVoY.js";import"./copy-B1L4YoL5.js";import"./copy-o8vYo4aG.js";import"./GitHub-Mark-BUjikfMH.js";import"./TableOfContent-r9ezFAWt.js";import"./index-BT7ySl7f.js";import"./index-Cj8N_CMD.js";import"./index-B7Kpc4-r.js";import"./index-Arj44yrL.js";import"./index-xyj4veU8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dvgs_TOk.js";import"./addCustomCSSWithScoping-Bja_IMOg.js";import"./ResponsivePopoverCommon.css-CYgfaUoK.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
