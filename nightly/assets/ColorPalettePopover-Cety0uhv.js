import{j as o}from"./iframe-QfBB5oxv.js";import{u as s,M as m,C as a,a as l,D as c,A as d}from"./blocks-BNoxk89Z.js";import"./Tag-jV4rQ7he.js";import"./index-CXwzMtEr.js";import{C as u}from"./ControlsWithNote-CpNK55OJ.js";import{D as x}from"./DocsHeader-CobLgORO.js";import{F as h}from"./Footer-Djb8KmT2.js";import"./CommandsAndQueries-CHXq-8GX.js";import"./PageNotFound-BF3CKwDf.js";import{C as n,D as r}from"./ColorPalettePopover.stories-vQf2ZiVX.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Urwl1Q4V.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DnhNkDB3.js";import"./sys-enter-2-BMzcK94M.js";import"./alert-Djbx4OhD.js";import"./index-C23APlHe.js";import"./index-BP6rOJzd.js";import"./Link-CjKrRSzJ.js";import"./copy-B-tqVZcU.js";import"./copy-Ddev0qyd.js";import"./GitHub-Mark-C9In8ohp.js";import"./TableOfContent-F4sRBeye.js";import"./index-B0PZpUdZ.js";import"./index-CMW9Znni.js";import"./index-CKPcWxBG.js";import"./index-qK3ZRsrU.js";import"./index-mR2WMj9r.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4b8nEvCn.js";import"./addCustomCSSWithScoping-BzEIPtCm.js";import"./Illustrations-B1Eex0pq.js";import"./i18n-defaults-CFWtSmu6.js";import"./ResponsivePopoverCommon.css-CNHfRjyj.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
`,o.jsx(x,{of:n,since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:r}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(u,{of:r}),`
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
`,o.jsx(l,{children:j}),`
`,o.jsx(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(d,{of:p}),`
`,o.jsx(h,{})]})}function Z(t={}){const{wrapper:e}={...s(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{Z as default};
