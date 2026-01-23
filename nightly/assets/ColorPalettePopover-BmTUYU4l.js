import{j as o}from"./iframe-D9-OPwVR.js";import{useMDXComponents as i}from"./index-rQrCyh78.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-yWwHjaca.js";import"./Tag-C4h9s18a.js";import"./index-C0yJm7_O.js";import{C as x}from"./ControlsWithNote-CQ_5k1u8.js";import{D as u}from"./DocsHeader-DsJCrUdt.js";import{F as h}from"./CommandsAndQueries-CGaVhEZZ.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BHy-LSQM.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-WxvMLhP4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CXuNnhF_.js";import"./sys-enter-2-CpLLk16Q.js";import"./alert-DmoPAb-1.js";import"./index-CARCmcfE.js";import"./index-D2zbla8P.js";import"./Link-C0FJUUPf.js";import"./copy-BV0EKgUf.js";import"./copy-kqUatD9Y.js";import"./GitHub-Mark-C9NicKpS.js";import"./TableOfContent-CWXv45_X.js";import"./index-BqY2NvOe.js";import"./index-DWSshsP3.js";import"./index-C2LtXiVH.js";import"./index-B7FHygPg.js";import"./index-BKtOrYz7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHNrYRTW.js";import"./addCustomCSSWithScoping-BMu8GK7h.js";import"./ResponsivePopoverCommon.css-C3lxCD6U.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
