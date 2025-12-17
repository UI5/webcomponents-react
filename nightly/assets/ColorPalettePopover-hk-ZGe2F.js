import{j as o}from"./iframe-CGBVIl7z.js";import{useMDXComponents as i}from"./index-BD_J3XGh.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-amwX2WGZ.js";import"./Tag-CKuoT6Wf.js";import"./index-Bflw6F-3.js";import{C as x}from"./ControlsWithNote-CuenDjBy.js";import{D as u}from"./DocsHeader-CWGcUf5V.js";import{F as h}from"./CommandsAndQueries-C4N9Si-I.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BRbyh6KM.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DdGiN4f2.js";import"./preload-helper-PPVm8Dsz.js";import"./information-RMMgKPqE.js";import"./sys-enter-2-CjQpGHgC.js";import"./alert-B45RxjKS.js";import"./index-DBko667H.js";import"./index-CohLls_f.js";import"./Link-7Pc42Mkn.js";import"./copy-Dt0cHpgH.js";import"./copy-C7UfB3Pq.js";import"./GitHub-Mark-D39pXWIu.js";import"./TableOfContent-DbzcSDOZ.js";import"./index-BpPbjuIA.js";import"./index-BSuCMsLZ.js";import"./index-DdaBmZIy.js";import"./index-739hgjkB.js";import"./index-DSjZIl8t.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bhku-quN.js";import"./addCustomCSSWithScoping-BVpL9dRN.js";import"./ResponsivePopoverCommon.css-CCcFdLcp.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
