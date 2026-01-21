import{j as o}from"./iframe-f3iLPpTx.js";import{useMDXComponents as i}from"./index-Cg-5LGOy.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DoSJn-9n.js";import"./Tag-HMKYn_gR.js";import"./index-C4t1_KXY.js";import{C as x}from"./ControlsWithNote-Bu0kyXyv.js";import{D as u}from"./DocsHeader-B-7a3kS4.js";import{F as h}from"./CommandsAndQueries-ANshK3xd.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CD2mLbis.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-C7oOvoXr.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D9tZEGE7.js";import"./sys-enter-2-DE9YD12B.js";import"./alert-BBZcuL-v.js";import"./index-C81LpEbs.js";import"./index-DzXajydQ.js";import"./Link-EHnjrAaJ.js";import"./copy-DoG1WmGJ.js";import"./copy-BPmTOQZZ.js";import"./GitHub-Mark-Bin-zAIE.js";import"./TableOfContent-D-qzXXkG.js";import"./index-TWvX3fxG.js";import"./index-oCC-c3oA.js";import"./index-Dq8bnboK.js";import"./index-C3jxOnm0.js";import"./index-DY8Z5oY2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ce84hNWi.js";import"./addCustomCSSWithScoping-FBci05L8.js";import"./ResponsivePopoverCommon.css-B8gBrPLb.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
