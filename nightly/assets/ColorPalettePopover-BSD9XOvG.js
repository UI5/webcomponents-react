import{j as o}from"./iframe-cRRiQYmf.js";import{useMDXComponents as i}from"./index-Bs0WiH3G.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BE5V3uJk.js";import"./Tag-CfbQk3KA.js";import"./index-ByOWo14Z.js";import{C as x}from"./ControlsWithNote-R2smzZje.js";import{D as u}from"./DocsHeader-Cizr3jtX.js";import{F as h}from"./CommandsAndQueries-6fQDSTza.js";import{C as n,D as r}from"./ColorPalettePopover.stories-fw1RaVvW.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CPs8AI18.js";import"./preload-helper-PPVm8Dsz.js";import"./information-De5Q3Snv.js";import"./sys-enter-2-D3hJu-L0.js";import"./alert-B4Rl3843.js";import"./index-CSUcx8X8.js";import"./index-BO1H95-d.js";import"./Link-CLMkrIwX.js";import"./copy-Dojx06cV.js";import"./copy-B18ZHZAg.js";import"./GitHub-Mark-D-AymZ9c.js";import"./TableOfContent-9GtC9JLm.js";import"./index-DBZCyEHT.js";import"./index-DUKoRTQU.js";import"./index-BFR5idok.js";import"./index-DtECOzdu.js";import"./index-CIJf_Fw_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AOA_k-Lh.js";import"./addCustomCSSWithScoping-OHQyl5Vz.js";import"./ResponsivePopoverCommon.css-BT4UA6Ai.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
