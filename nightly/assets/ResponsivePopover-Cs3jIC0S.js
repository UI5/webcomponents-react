import{j as o}from"./iframe-cBdQNv77.js";import{useMDXComponents as s}from"./index-cOSrw8iI.js";import{M as i,C as m}from"./blocks-DJzZLxIJ.js";import"./Tag-C7wlfelX.js";import"./index-3Ka_JXyV.js";import{C as c}from"./ControlsWithNote-BtzrHLWv.js";import{D as a}from"./DocsHeader-vxE0rq5F.js";import{F as d}from"./CommandsAndQueries-DjEzsLYR.js";import{C as r,D as t}from"./ResponsivePopover.stories-rplHZi_k.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DNcsXuRB.js";import"./sys-enter-2-Bl2cFkII.js";import"./alert-CmJVw_4E.js";import"./index-A4dU9HLI.js";import"./index-_yOX_kaH.js";import"./Link-CQDhsa8i.js";import"./copy-BlVq76a_.js";import"./copy-IvR5q6ZX.js";import"./GitHub-Mark-MErHyXJn.js";import"./TableOfContent-fkRerJpI.js";import"./index-BUV_LApg.js";import"./index-D8zOOSR2.js";import"./index-DBSQPl1H.js";import"./index-BRmdbvU0.js";import"./index-JUan3IFj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpA8OOPe.js";import"./addCustomCSSWithScoping-DRPx1DdS.js";import"./index-BIFjpkti.js";import"./index-Ct7T3oxa.js";import"./ListItemStandard-Bac0lpbe.js";import"./settings-DWEgpEUz.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
