import{j as o}from"./iframe-BdLp08tI.js";import{useMDXComponents as i}from"./index-L7M025bj.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BcH5lj54.js";import"./Tag-BYLKYo9E.js";import"./index-C9cC8h2E.js";import{C as x}from"./ControlsWithNote-BfK2jDz_.js";import{D as u}from"./DocsHeader-Bpb7xGNC.js";import{F as h}from"./CommandsAndQueries-A8ohCY01.js";import{C as n,D as r}from"./ColorPalettePopover.stories-Dulfv01Y.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-D7fnD6aE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BztpBEmn.js";import"./sys-enter-2-B36Zfbw2.js";import"./alert-YtyMWuog.js";import"./index-DEh5uPtQ.js";import"./index-bbxcO9wp.js";import"./Link-PkVO0OYZ.js";import"./copy-DopTx9Hm.js";import"./copy-CAz8pLUN.js";import"./GitHub-Mark-BOGIoyWh.js";import"./TableOfContent-BpoRcaPd.js";import"./index-DgCb8EoK.js";import"./index-6N8J-kdE.js";import"./index-Bq5n3ghu.js";import"./index-vBihh2Vl.js";import"./index-BjKyj7T0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oSO4QDvk.js";import"./addCustomCSSWithScoping-D7d3eFNt.js";import"./ResponsivePopoverCommon.css-DUrNz7RL.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
