import{j as o}from"./iframe-BYgl1e3t.js";import{useMDXComponents as i}from"./index-CQiAxnj4.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DJ2faYOs.js";import"./Tag-WgH8NYoz.js";import"./index-CTjTm5cU.js";import{C as x}from"./ControlsWithNote-89uF0G9c.js";import{D as u}from"./DocsHeader-7ZlR1YRW.js";import{F as h}from"./CommandsAndQueries-C7-dfPl9.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BZZtd1h8.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Be3FzHFh.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B-QMEMgn.js";import"./sys-enter-2-Bd_kwfmJ.js";import"./alert-zegR4G--.js";import"./index-6Qy6VRAh.js";import"./index-BDYs8WoM.js";import"./Link-DcQGtcs6.js";import"./copy-BH9B21fo.js";import"./copy-IUlUEvra.js";import"./GitHub-Mark-C1JldhDX.js";import"./TableOfContent-Bv7gmaQ1.js";import"./index-CoTJrZqp.js";import"./index-DOySy9e2.js";import"./index-B_dT7zj1.js";import"./index-CgZTDeh6.js";import"./index-B7ISCohd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoRR59AB.js";import"./addCustomCSSWithScoping-_jk3dAup.js";import"./ResponsivePopoverCommon.css-Dmb9XfkM.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
