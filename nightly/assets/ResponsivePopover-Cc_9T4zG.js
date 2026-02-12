import{j as o}from"./iframe-5IjhfTrO.js";import{useMDXComponents as s}from"./index-DX6MuGUF.js";import{M as i,C as m}from"./blocks-CjIjNIVl.js";import"./Tag-DKhe7Llj.js";import"./index-7iKYLPe5.js";import{C as c}from"./ControlsWithNote-Cm-Ncf6S.js";import{D as a}from"./DocsHeader-C99H4v8C.js";import{F as d}from"./CommandsAndQueries-Cp1HBFGN.js";import{C as r,D as t}from"./ResponsivePopover.stories-B_cXkNkJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CE4MPASh.js";import"./sys-enter-2-B35dOLRE.js";import"./alert-DzX-q61q.js";import"./index-DXwYC06A.js";import"./index-gs9VdEEm.js";import"./Link-D3EHIZv0.js";import"./copy-Bs8n61Ka.js";import"./copy-BcUsFLyb.js";import"./GitHub-Mark-B84wDHrF.js";import"./TableOfContent-CkgcLNd4.js";import"./index-DsJOnmXi.js";import"./index-C0Y9mFvG.js";import"./index-B1bhMGiO.js";import"./index-CZf_ilO1.js";import"./index-Dlo4vTaU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-FOiwvzqu.js";import"./addCustomCSSWithScoping-DinQav34.js";import"./index-CpQToSwa.js";import"./index-B4R63qeo.js";import"./ListItemStandard-Bqb-MqKL.js";import"./settings-Bh7T3Aa4.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
