import{j as o}from"./iframe-CfxMerL-.js";import{useMDXComponents as i}from"./index-VbSVpo3U.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-MJ_5uOZ-.js";import"./Tag-BNqMWY4P.js";import"./index-BI2nwMUJ.js";import{C as x}from"./ControlsWithNote-ChDAbAVV.js";import{D as u}from"./DocsHeader-DdlowqXa.js";import{F as h}from"./CommandsAndQueries-Dg2B8ke5.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BMvgUiN2.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CF3HI4cd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-V-ZI-MUr.js";import"./sys-enter-2-BPqtZ6Ae.js";import"./alert-BY-nhKm6.js";import"./index-B0xbheog.js";import"./index-BYZXhHpQ.js";import"./Link-BitnWoH9.js";import"./copy-_RJCCudE.js";import"./copy-B6ViSnKB.js";import"./GitHub-Mark-Dty9IhH0.js";import"./TableOfContent-B6X3MkW3.js";import"./index-DP6bCfzy.js";import"./index-IP6CGDwM.js";import"./index-BTQ4bVGw.js";import"./index-DTz3tRU0.js";import"./index-DjUM5b1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CC5ToBw2.js";import"./addCustomCSSWithScoping-El6BaIIi.js";import"./ResponsivePopoverCommon.css-DjynAZOg.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
