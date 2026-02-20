import{j as o}from"./iframe-gbBUxptC.js";import{useMDXComponents as i}from"./index-BaGM4qgt.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BtAmmb_9.js";import"./Tag-DXmb03WA.js";import"./index-a6vq6nFR.js";import{C as x}from"./ControlsWithNote-fzSXxYPC.js";import{D as u}from"./DocsHeader-BiMMxbix.js";import{F as h}from"./CommandsAndQueries-BmjJVETk.js";import{C as n,D as r}from"./ColorPalettePopover.stories--NFLtN4s.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Cs4KVxXf.js";import"./preload-helper-PPVm8Dsz.js";import"./information-RQmI2RmD.js";import"./sys-enter-2-BfzFGSW6.js";import"./alert-BAR71iQk.js";import"./index-DTWmKJf_.js";import"./index-FjtRLsYm.js";import"./Link-BqgTlNng.js";import"./copy-DVkPUjJ_.js";import"./copy-CmUJgJe8.js";import"./GitHub-Mark-DTnt1VPs.js";import"./TableOfContent-CTFQyASA.js";import"./index-CAL1VzDv.js";import"./index-C5e2Rf9k.js";import"./index-ClLX1AfH.js";import"./index-n6dTxbQI.js";import"./index-CHg7n_fg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cfhz7n7-.js";import"./addCustomCSSWithScoping-BVowAJ0u.js";import"./ResponsivePopoverCommon.css-CB1aGVFH.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
