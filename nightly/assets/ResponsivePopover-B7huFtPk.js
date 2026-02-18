import{j as o}from"./iframe-C125K5pw.js";import{useMDXComponents as s}from"./index-Bjpa6FGV.js";import{M as i,C as m}from"./blocks-BXnHeSiR.js";import"./Tag-gRLBJrjs.js";import"./index-Dr1L9sIB.js";import{C as c}from"./ControlsWithNote-BLcBQ4Sv.js";import{D as a}from"./DocsHeader-Bbw-59RY.js";import{F as d}from"./CommandsAndQueries-ldqvUWJl.js";import{C as r,D as t}from"./ResponsivePopover.stories-BI2yrwia.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DY8EV-7L.js";import"./sys-enter-2-DLPshmQC.js";import"./alert-DGx7QxWd.js";import"./index-DSCACoUK.js";import"./index-DAOynge-.js";import"./Link-CLfWc0rF.js";import"./copy-BHSMxMQs.js";import"./copy-CAIaKhcd.js";import"./GitHub-Mark-sw9dQJlq.js";import"./TableOfContent-D3CgtJWS.js";import"./index-sMZVCCfo.js";import"./index-HJtrmXU5.js";import"./index-BIOgtrFW.js";import"./index-CTal1c8_.js";import"./index-BwMWTiPK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CKkpAdHR.js";import"./addCustomCSSWithScoping-cidmMbR-.js";import"./index-UdJktvhD.js";import"./index-Bapg1jlH.js";import"./ListItemStandard-DYRsCa9G.js";import"./settings-CWzRvdF8.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
