import{j as o}from"./iframe-BMswfRdZ.js";import{useMDXComponents as i}from"./index-MaqCtoEe.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BZVeQw2D.js";import"./Tag-BVHvhlCz.js";import"./index-B-ZVjbqr.js";import{C as x}from"./ControlsWithNote-C5w7tvs5.js";import{D as u}from"./DocsHeader-DyZhqw-W.js";import{F as h}from"./CommandsAndQueries-B0EQ2-2W.js";import{C as n,D as r}from"./ColorPalettePopover.stories-YCFlURq-.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CJnDAv4V.js";import"./preload-helper-PPVm8Dsz.js";import"./information-1i220cDO.js";import"./sys-enter-2-CawaAm0L.js";import"./alert-uwYQHS-7.js";import"./index-mp2uLi6B.js";import"./index-FIeWjkuH.js";import"./Link-BGQljDJU.js";import"./copy-B-yWQLT6.js";import"./copy-Cy5PMYPR.js";import"./GitHub-Mark-CpBusc3m.js";import"./TableOfContent-C_ApkRdL.js";import"./index-Cf0lk0Qk.js";import"./index-B-CAKhwh.js";import"./index-B7ZM6Wte.js";import"./index-E1nxDY_p.js";import"./index-Dm33NnkB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzwX1HTL.js";import"./addCustomCSSWithScoping-DQLnc9QR.js";import"./ResponsivePopoverCommon.css-Cys9VWui.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
