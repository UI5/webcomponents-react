import{j as o}from"./iframe-B1ai2N1H.js";import{useMDXComponents as i}from"./index-QfN2DAp7.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-B9fqlxEZ.js";import"./Tag-EPgIaOhk.js";import"./index-BtwVlylG.js";import{C as x}from"./ControlsWithNote-l4CFIpst.js";import{D as u}from"./DocsHeader-v6j4i6Qs.js";import{F as h}from"./CommandsAndQueries-DatNYL2t.js";import{C as n,D as r}from"./ColorPalettePopover.stories-Ca52aN39.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Dcf-xmoQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-qjJpsO9c.js";import"./sys-enter-2-DLuIUMMQ.js";import"./alert-DxSQeXz_.js";import"./index-BZxParGj.js";import"./index-B8JztijY.js";import"./Link-DxXALuG4.js";import"./copy-DK9bNb8P.js";import"./copy-BJY5YA9D.js";import"./GitHub-Mark-BccOfZ-s.js";import"./TableOfContent-BuogqNJV.js";import"./index-DIMi93Lv.js";import"./index-BqK1QrYY.js";import"./index-BD5BVNKc.js";import"./index-Dq21p-7K.js";import"./index-BL80uiBy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3b7w9-j.js";import"./addCustomCSSWithScoping-BigzftYf.js";import"./ResponsivePopoverCommon.css-_wb5Prd4.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
