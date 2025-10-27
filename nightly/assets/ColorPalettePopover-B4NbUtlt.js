import{j as o}from"./iframe-ByiiILXu.js";import{useMDXComponents as i}from"./index-DYpmG0kU.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DrNhXH8Y.js";import"./Tag-WBOqYu0X.js";import"./index-B20WCXLG.js";import{C as x}from"./ControlsWithNote-AjBaHx3q.js";import{D as u}from"./DocsHeader-6lb3uMew.js";import{F as h}from"./CommandsAndQueries-ByQHAThU.js";import{C as n,D as r}from"./ColorPalettePopover.stories-qc0rN0eE.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-D6jw_ifw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-tN-lRIsU.js";import"./sys-enter-2-eFq8QnH9.js";import"./alert-DCLbzn71.js";import"./index-COPBcnoz.js";import"./index-C2Yky6-6.js";import"./Link-DX54TCdQ.js";import"./copy-DxuTh0d6.js";import"./copy-08ilKZ0c.js";import"./GitHub-Mark-D9ZH9lDK.js";import"./TableOfContent-ojyBFHoB.js";import"./index-8yUpcOxv.js";import"./index-y2DJOFuG.js";import"./index-C0jaTjnN.js";import"./index-BkgEbRU4.js";import"./index-DJ81LlKI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7LYDV0x0.js";import"./addCustomCSSWithScoping-DIYkZsvP.js";import"./ResponsivePopoverCommon.css-C1nFDre3.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
