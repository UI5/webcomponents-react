import{j as o}from"./iframe-B3T0Oj7B.js";import{useMDXComponents as i}from"./index-D3UxDze4.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CyPgi3fl.js";import"./Tag-BebiXErc.js";import"./index-dJAxIfZY.js";import{C as x}from"./ControlsWithNote-C1V9eZ5n.js";import{D as u}from"./DocsHeader-QqmuRAQk.js";import{F as h}from"./CommandsAndQueries-DvsDK9ZB.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DXTWjFmR.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BBwfnAyI.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CDiFrRjk.js";import"./sys-enter-2-CspjHMoa.js";import"./alert-BsEVUmBp.js";import"./index-BywqBC1y.js";import"./index-BctJwJOg.js";import"./Link-Bk4EX_BP.js";import"./copy-DfWvHyjG.js";import"./copy-_Qj_KEfj.js";import"./GitHub-Mark-Jk8JGZzB.js";import"./TableOfContent-zwMPdMlr.js";import"./index-D37akpKi.js";import"./index-B8hvCU9O.js";import"./index-Bik-cKeX.js";import"./index-D_qT_Ogl.js";import"./index-CpVd5OAx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVuzLNiB.js";import"./addCustomCSSWithScoping-BR9GACjU.js";import"./ResponsivePopoverCommon.css-Dq6Kf127.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
