import{j as o}from"./iframe-D_U86qCv.js";import{useMDXComponents as i}from"./index-Bg9tEBEE.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-D61FyfHK.js";import"./Tag-B3d92F0E.js";import"./index-DY3WUczD.js";import{C as x}from"./ControlsWithNote-D5S_Midd.js";import{D as u}from"./DocsHeader-RwaG2gO7.js";import{F as h}from"./CommandsAndQueries-TugN8T6l.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DrUBnVIp.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-3JlLDoTb.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DVWvWtO-.js";import"./sys-enter-2-CVo9vLlV.js";import"./alert-Dk_EKidz.js";import"./index-WEtnzuU5.js";import"./index-D9Q3nud9.js";import"./Link-Cw10wX3R.js";import"./copy-BX4vSZO9.js";import"./copy-Crjp4Ac1.js";import"./GitHub-Mark-1bpW3JCO.js";import"./TableOfContent-CQJqnL0A.js";import"./index-DfxZA3Js.js";import"./index-DQ8_SEuH.js";import"./index-hUHwRYTv.js";import"./index-BgwtpBeW.js";import"./index-DjRObmYp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AccWPG8C.js";import"./addCustomCSSWithScoping-peiruV29.js";import"./ResponsivePopoverCommon.css-C8oO5Lyh.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
