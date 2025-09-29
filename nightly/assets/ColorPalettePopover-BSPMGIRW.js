import{j as o}from"./iframe-Cg7074Vs.js";import{useMDXComponents as i}from"./index-B5B2jkkb.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BJCse0Pu.js";import"./Tag-8TeQfEXQ.js";import"./index-BdM5BPiw.js";import{C as x}from"./ControlsWithNote-BUESGD88.js";import{D as u}from"./DocsHeader-DrCfiofD.js";import{F as h}from"./CommandsAndQueries-DSm4BCv_.js";import{C as n,D as r}from"./ColorPalettePopover.stories-D2UkkbT0.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-ZwQH7c-J.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BmRqz6it.js";import"./sys-enter-2-Cd9kQ7Q4.js";import"./alert-D-Gn0uBT.js";import"./index-mLpQh_nH.js";import"./index--0v3kDPT.js";import"./Link-C9B0XqeU.js";import"./copy-D-vRfUtZ.js";import"./copy-elFt8Bkr.js";import"./GitHub-Mark-JGAY1shu.js";import"./TableOfContent-fQuHL319.js";import"./index-C5-_BJit.js";import"./index-Do95mp1G.js";import"./index-B-O0M522.js";import"./index-DBdMynWP.js";import"./index-mxRvftJc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Co8Bnzh8.js";import"./addCustomCSSWithScoping-CQZolqZ7.js";import"./ResponsivePopoverCommon.css-B9VO2EzZ.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
