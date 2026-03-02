import{j as o}from"./iframe-BYdzMGmT.js";import{useMDXComponents as s}from"./index-Cj6hKPa8.js";import{M as i,C as m}from"./blocks-Cj5RS3Jv.js";import"./Tag-DG55Z9om.js";import"./index-BhYrs86x.js";import{C as c}from"./ControlsWithNote-BPNG-KVJ.js";import{D as a}from"./DocsHeader-hmTZgC9w.js";import{F as d}from"./CommandsAndQueries-B5lWQhG8.js";import{C as r,D as t}from"./ResponsivePopover.stories-Cnnz5ewY.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BG-owH3g.js";import"./sys-enter-2-CtufiL4W.js";import"./alert-C-RhncMU.js";import"./index-DonwXZ8V.js";import"./index-DAUDNesr.js";import"./Link-BofMtgPA.js";import"./copy-BDPB19MZ.js";import"./copy-CWbk9K2V.js";import"./GitHub-Mark-D3tonyZi.js";import"./TableOfContent-BYp35ZjE.js";import"./index-DnPstsP7.js";import"./index-DjVw4D0h.js";import"./index-DA47VMXK.js";import"./index-fFMR_gyI.js";import"./index-CkYce0wJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_-sXQeTV.js";import"./addCustomCSSWithScoping-Cw5UObAf.js";import"./index-CVdG3Tpp.js";import"./index-W__nbP8_.js";import"./ListItemStandard-B4TcI1um.js";import"./settings-DeL5SdbF.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
