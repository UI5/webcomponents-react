import{j as o}from"./iframe-DCGZQC_C.js";import{useMDXComponents as s}from"./index-B27pjG1H.js";import{M as i,C as m}from"./blocks-ByOpH4Vo.js";import"./Tag-DHXPjUHZ.js";import"./index-CslrJvFJ.js";import{C as c}from"./ControlsWithNote-DgUbCW8q.js";import{D as a}from"./DocsHeader-DFCpeXUk.js";import{F as d}from"./CommandsAndQueries-uRcRdUvd.js";import{C as r,D as t}from"./ResponsivePopover.stories-B_00WrW5.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C8TQYWMC.js";import"./sys-enter-2-CUVdfxRu.js";import"./alert-Crt2Z2f-.js";import"./index-CEF4Eds-.js";import"./index-BSyI90IW.js";import"./Link-C5I3pPvS.js";import"./copy-BktInPQJ.js";import"./copy-Dgi6mZSs.js";import"./GitHub-Mark-cE72Kfis.js";import"./TableOfContent-CfH2EYR2.js";import"./index-LnQjqAbL.js";import"./index-CRLztu5A.js";import"./index-C7wZhEOz.js";import"./index-DsknM379.js";import"./index-BrLag0KZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClYCQmx8.js";import"./addCustomCSSWithScoping-BW6FwlJC.js";import"./index-oHN5vii2.js";import"./index-BIvqPmoD.js";import"./ListItemStandard-C870crTF.js";import"./settings-EzBVvhXz.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"ResponsivePopover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <ResponsivePopover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(d,{})]})}function A(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{A as default};
