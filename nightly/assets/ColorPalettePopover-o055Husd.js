import{j as o}from"./iframe-wbWwESAy.js";import{useMDXComponents as i}from"./index-BOBJYedV.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-B5IYlHFD.js";import"./Tag-BH6lPIks.js";import"./index-DQNSAqOh.js";import{C as x}from"./ControlsWithNote-DvhTjaki.js";import{D as u}from"./DocsHeader-bdq5CW6C.js";import{F as h}from"./CommandsAndQueries-C1vl6z57.js";import{C as n,D as r}from"./ColorPalettePopover.stories-Ca-mIXHk.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-B0VGbBF2.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DASCm05s.js";import"./sys-enter-2-J3fKP-CE.js";import"./alert-D2qcbVgq.js";import"./index-DrYBsayo.js";import"./index-Cupokltd.js";import"./Link-BN6Q-gzd.js";import"./copy-D8kziahy.js";import"./copy-sux1w53_.js";import"./GitHub-Mark-Id1MRtXm.js";import"./TableOfContent-BwN9rW42.js";import"./index-Buwu-oqJ.js";import"./index-B81NkVkP.js";import"./index-BnSJ99QD.js";import"./index-DcmA7siw.js";import"./index-DqWD-oTo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqytePVm.js";import"./addCustomCSSWithScoping-CplaRZ4g.js";import"./ResponsivePopoverCommon.css-D988s0PK.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
