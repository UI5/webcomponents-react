import{j as o}from"./iframe-BTfUB26H.js";import{useMDXComponents as i}from"./index-D3NtTefK.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-AWBgpAl3.js";import"./Tag-BGFP3IN9.js";import"./index-B9IZul2P.js";import{C as x}from"./ControlsWithNote-HbXGbTZ6.js";import{D as u}from"./DocsHeader-B5eEQnby.js";import{F as h}from"./CommandsAndQueries-BWcq9mTF.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BoOqlgnV.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-uSleTh9w.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CLBM1nY5.js";import"./sys-enter-2-BbIZ6tOc.js";import"./alert-Dqm1dR2l.js";import"./index-F0g47Tza.js";import"./index-Cuze-7Fn.js";import"./Link-BMxWJfW1.js";import"./copy-CuQTj5FX.js";import"./copy-D6Vht5qr.js";import"./GitHub-Mark-ygJhjlM_.js";import"./TableOfContent-CzONlPB9.js";import"./index-DlJoRRYt.js";import"./index-BBFhDjTC.js";import"./index-BzZqyp7s.js";import"./index-BgDIorry.js";import"./index-BtUK59WI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-nj-G9WCr.js";import"./addCustomCSSWithScoping-BuL6JqQV.js";import"./ResponsivePopoverCommon.css-C6uEz5Dl.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
