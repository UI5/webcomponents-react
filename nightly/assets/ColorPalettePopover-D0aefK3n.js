import{j as o}from"./iframe-BELPVtw8.js";import{useMDXComponents as i}from"./index-Ccx4gwdG.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-B3lwtuZn.js";import"./Tag-jS7irC1t.js";import"./index-BkR2pL75.js";import{C as x}from"./ControlsWithNote-C3I2DDOZ.js";import{D as u}from"./DocsHeader-CsCWSRb4.js";import{F as h}from"./CommandsAndQueries-B86vB0yc.js";import{C as n,D as r}from"./ColorPalettePopover.stories-0LgSmEhi.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Dz8AEObt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Q0D1EyOn.js";import"./sys-enter-2-CB1NZnv4.js";import"./alert-e0Pm7FCS.js";import"./index-C1fkktKB.js";import"./index-Dy8TXCJ0.js";import"./Link-BLMqdfPm.js";import"./copy-I0OTc4T0.js";import"./copy-BGZyCQeI.js";import"./GitHub-Mark-lyDcreW9.js";import"./TableOfContent-CSElOUdH.js";import"./index-CQYUcCHI.js";import"./index-DslTuBZD.js";import"./index-nk7PQCW4.js";import"./index-D2dH4dam.js";import"./index-D2H4sMz3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-GIAd7WMY.js";import"./addCustomCSSWithScoping-vktTBWHy.js";import"./ResponsivePopoverCommon.css-BWZcb2bV.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
