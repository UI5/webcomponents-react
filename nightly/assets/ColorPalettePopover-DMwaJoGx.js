import{j as o}from"./iframe-DLeMGAs6.js";import{useMDXComponents as i}from"./index-BeTNnGed.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CVdnQ-m5.js";import"./Tag-fuIv2r1-.js";import"./index-CAID728Y.js";import{C as x}from"./ControlsWithNote-QYSrl-UI.js";import{D as u}from"./DocsHeader-DY6tY_U8.js";import{F as h}from"./CommandsAndQueries-Do6MeMuW.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BmRXQ8Bp.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-NhTgkOcj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BttnUTpt.js";import"./sys-enter-2-DQSYULXQ.js";import"./alert-Braz2hWt.js";import"./index-BelAbkZz.js";import"./index-Xs0i3Hhr.js";import"./Link-D_uo4UVb.js";import"./copy-CSTZlAKH.js";import"./copy-ClThfN15.js";import"./GitHub-Mark-CIH3fdoh.js";import"./TableOfContent-sSbZlFDL.js";import"./index-ChbJtMA8.js";import"./index-D_-Zm7gh.js";import"./index-CetP1T2M.js";import"./index-DQmJ5ecl.js";import"./index-DGDr800L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C13TjiIP.js";import"./addCustomCSSWithScoping-Cj5ZxzDT.js";import"./ResponsivePopoverCommon.css-Cwu8TVSn.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
