import{j as o}from"./iframe-T7Wqg8UQ.js";import{useMDXComponents as i}from"./index-B1_Kr1qi.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-AtAGVbf3.js";import"./Tag-gMzT9-kJ.js";import"./index-1-SdBrMb.js";import{C as x}from"./ControlsWithNote-BqBu_Mq2.js";import{D as u}from"./DocsHeader-CrVecl48.js";import{F as h}from"./CommandsAndQueries-BErUSC1w.js";import{C as n,D as r}from"./ColorPalettePopover.stories-3LZEv11e.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BZFZ6rJ4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-fYaYVBJG.js";import"./sys-enter-2-CqaPP6tK.js";import"./alert-DdeG0Okn.js";import"./index-OjQEK6Sv.js";import"./index-B0vEPx1d.js";import"./Link-CS0U2zW0.js";import"./copy-DIiyOBxc.js";import"./copy-D9NRoizO.js";import"./GitHub-Mark-Biv-_v1T.js";import"./TableOfContent-NE_Wj6NX.js";import"./index-Do-8N8-4.js";import"./index-CSyU4Rfq.js";import"./index-CuClVFCS.js";import"./index-Cpwr9m7H.js";import"./index-C36GduEZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ctd-T3Yg.js";import"./addCustomCSSWithScoping-SxSnbZxk.js";import"./ResponsivePopoverCommon.css-BRMWd7_E.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
