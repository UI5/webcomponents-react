import{j as o}from"./iframe-BgKk_cUP.js";import{useMDXComponents as i}from"./index-DBhkOYZa.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-Cov5-UrV.js";import"./Tag-14MrIsbi.js";import"./index-DoylA-Ui.js";import{C as x}from"./ControlsWithNote-CImCWZl8.js";import{D as u}from"./DocsHeader-DkQjtbvi.js";import{F as h}from"./CommandsAndQueries-DJU-Boml.js";import{C as n,D as r}from"./ColorPalettePopover.stories-B5ERum_M.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BucNzv3I.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BIRyoqcd.js";import"./sys-enter-2--x49A3Er.js";import"./alert-ClVMPYjY.js";import"./index-C-jp63Tn.js";import"./index-z-eYGt9k.js";import"./Link-CwQGN6kV.js";import"./copy-DmE6rmx3.js";import"./copy-DsJBCyL-.js";import"./GitHub-Mark-CPTh4y7i.js";import"./TableOfContent-D3wn4nZr.js";import"./index-CMckAL-E.js";import"./index-vrGX3w6P.js";import"./index-DJcJ5x0R.js";import"./index-DtnoyOys.js";import"./index-DMwqR4Ak.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3WrIRKs.js";import"./addCustomCSSWithScoping-CEnWQwWy.js";import"./ResponsivePopoverCommon.css-DfgdvEyA.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
