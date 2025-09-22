import{j as o}from"./iframe-DBihyX6B.js";import{useMDXComponents as i}from"./index-7EvsRGh_.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-4x6sD7LX.js";import"./Tag-DcWV-u9n.js";import"./index-DLEor5QI.js";import{C as x}from"./ControlsWithNote-BKeRG1wh.js";import{D as u}from"./DocsHeader-DqvqKIEn.js";import{F as h}from"./CommandsAndQueries-CFIgGEta.js";import{C as n,D as r}from"./ColorPalettePopover.stories-B_FHl6cr.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CX1wxwpP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-5R3zdDEl.js";import"./sys-enter-2-DGkUJwI9.js";import"./alert-DQd1blb9.js";import"./index-d0ALq1QU.js";import"./index-tKXjFGfd.js";import"./Link-DylgBeIF.js";import"./copy-aRdQKEdI.js";import"./copy-Bf9mIKpj.js";import"./GitHub-Mark-ByGXXCjK.js";import"./TableOfContent-CBdAmSq8.js";import"./index-Bht8mt-d.js";import"./index-BXD3v3ss.js";import"./addCustomCSSWithScoping-CH8klGw7.js";import"./index-HwCsdfjY.js";import"./index-BYBUQOBO.js";import"./index-CCW-kbw5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ZTIhRr7S.js";import"./ResponsivePopoverCommon.css-B4oI3h8B.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
