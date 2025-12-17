import{j as o}from"./iframe-BHL3KP3B.js";import{useMDXComponents as i}from"./index-CV9KcB1M.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CBYdh6wr.js";import"./Tag-RhCig6AF.js";import"./index-JS1GcHzF.js";import{C as x}from"./ControlsWithNote-DAxpK-CA.js";import{D as u}from"./DocsHeader-BP3M1Dwd.js";import{F as h}from"./CommandsAndQueries-D7saeET0.js";import{C as n,D as r}from"./ColorPalettePopover.stories-Bhp4e109.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-B8d5VHYr.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DJM95Ys0.js";import"./sys-enter-2-XSR4RGqi.js";import"./alert-D5dcqe2K.js";import"./index-JDEJOPjW.js";import"./index-Dsg6DYtH.js";import"./Link-ea-shbEJ.js";import"./copy-BPDPnsXG.js";import"./copy-Cx_IXaYw.js";import"./GitHub-Mark-DnhrR-7I.js";import"./TableOfContent-WAW6dFW2.js";import"./index-BgzyxERN.js";import"./index-Dx-FLQII.js";import"./index-lfVzLD84.js";import"./index-Dbs5lixu.js";import"./index-DToQg2Hs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Co81iMbm.js";import"./addCustomCSSWithScoping-DQk-eQ1n.js";import"./ResponsivePopoverCommon.css-qV0tN2P6.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
