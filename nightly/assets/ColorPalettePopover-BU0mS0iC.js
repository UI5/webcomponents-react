import{j as o}from"./iframe-BsBPxA6U.js";import{useMDXComponents as i}from"./index-C_R4y4V0.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CEOEebKO.js";import"./Tag-DSoKri1G.js";import"./index-Doky9Mkb.js";import{C as x}from"./ControlsWithNote-B9F0Q_Ut.js";import{D as u}from"./DocsHeader-Ddc9j-Y5.js";import{F as h}from"./CommandsAndQueries-DGdgKo6k.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BC5UvTnY.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DkXMlb3g.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bj9U_7MQ.js";import"./sys-enter-2-C6mBZBNJ.js";import"./alert-Y2sfMbhe.js";import"./index-CNyanKq8.js";import"./index-gPsABUAK.js";import"./Link-BHFGfTB0.js";import"./copy-DwJ7RQvd.js";import"./copy-CRGjVpRv.js";import"./GitHub-Mark-BL2-Zv-6.js";import"./TableOfContent-DrNJuZzj.js";import"./index-CAH0250y.js";import"./index-Dmhochbe.js";import"./index-Cihbk1NA.js";import"./index-BLjU5XqX.js";import"./index-DNCqkTDx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmx-BJlM.js";import"./addCustomCSSWithScoping-DbsNQuuI.js";import"./ResponsivePopoverCommon.css-hQ9zDC9y.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
