import{j as o}from"./iframe-CLKwUGEX.js";import{useMDXComponents as i}from"./index-DCuwspND.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-Dh7hbfcJ.js";import"./Tag-CfLVXJVc.js";import"./index-h52TWGHx.js";import{C as x}from"./ControlsWithNote-gpbOfeMG.js";import{D as u}from"./DocsHeader-BOmvn_ug.js";import{F as h}from"./CommandsAndQueries-dz6NHoyr.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BdnzAq76.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DTQ3IorQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0EfmlkL.js";import"./sys-enter-2-CbYR1yRQ.js";import"./alert-B6Esz0N1.js";import"./index-CuwqMzEM.js";import"./index-CkL1gWNe.js";import"./Link-Bqvbz9lT.js";import"./copy-BsKGEA4X.js";import"./copy-BrK10eH_.js";import"./GitHub-Mark-DHhMRLzL.js";import"./TableOfContent-Dt1l8u5g.js";import"./index-Veg9_1qu.js";import"./index-ZH4BIl7e.js";import"./index-CL8a7czm.js";import"./index-CRtbNwl1.js";import"./index-BIRKClWd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYpAqTMA.js";import"./addCustomCSSWithScoping-Ckj5BS6-.js";import"./ResponsivePopoverCommon.css-DtENZeG8.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
