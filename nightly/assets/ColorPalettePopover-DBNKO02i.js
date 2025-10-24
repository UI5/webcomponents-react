import{j as o}from"./iframe-DGliVLqx.js";import{useMDXComponents as i}from"./index-BKdQ_dPP.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DSVMoi0f.js";import"./Tag-D0qHMP--.js";import"./index-CUMj3eTR.js";import{C as x}from"./ControlsWithNote-D0TOtvLO.js";import{D as u}from"./DocsHeader-DEotGRp-.js";import{F as h}from"./CommandsAndQueries-DhC-K5aV.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CLEG4pev.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BiaAGRSr.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DwX5G7SH.js";import"./sys-enter-2-CLhjZKEg.js";import"./alert-D8WWgafc.js";import"./index-C-ihtk73.js";import"./index-C2z7U0T0.js";import"./Link-NPuKH9vo.js";import"./copy-CmqeB8wk.js";import"./copy-BXMLotg5.js";import"./GitHub-Mark-CBgxhA95.js";import"./TableOfContent-Dui3Dwpi.js";import"./index-0zoKCck7.js";import"./index-DDYQS3It.js";import"./index-xskusYgR.js";import"./index-usRBaxBR.js";import"./index-Bnhuo37k.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xhvQd63o.js";import"./addCustomCSSWithScoping-H3JndsVD.js";import"./ResponsivePopoverCommon.css-C-Hps5ad.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
