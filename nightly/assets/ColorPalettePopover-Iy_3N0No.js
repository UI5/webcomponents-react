import{j as o}from"./iframe-DytFdpZ5.js";import{useMDXComponents as i}from"./index-ClxT7adU.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CgPOjV91.js";import"./Tag-wRQS4rBi.js";import"./index-C-BQbcyx.js";import{C as x}from"./ControlsWithNote-C2rpM6wx.js";import{D as u}from"./DocsHeader-CT5_ghM5.js";import{F as h}from"./CommandsAndQueries-LDofsUzK.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BiaiSUDW.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Dbxbq1hm.js";import"./preload-helper-PPVm8Dsz.js";import"./information-QfKl2uvK.js";import"./sys-enter-2-Dtt133YD.js";import"./alert-C-riVNTC.js";import"./index-BUF8RolX.js";import"./index-DxeYPnJs.js";import"./Link-C5pcYLCj.js";import"./copy-ErzRP1ZV.js";import"./copy-HK9b5mhG.js";import"./GitHub-Mark-D9IcF53z.js";import"./TableOfContent-oPJRBwfF.js";import"./index-CrrPqcew.js";import"./index-BWneS7co.js";import"./index-DcBMC71h.js";import"./index-BqVVjC2y.js";import"./index-BCsSmGRP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEqUMQtt.js";import"./addCustomCSSWithScoping-DZk4ZVKY.js";import"./ResponsivePopoverCommon.css-B8i1Z4Ke.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
