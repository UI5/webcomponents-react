import{j as o}from"./iframe-FqLIb5aJ.js";import{useMDXComponents as s}from"./index-BMlaAUsm.js";import{M as i,C as m}from"./blocks-2y9I1Ee8.js";import"./Tag-8E3ttw9X.js";import"./index-B7xi-wqa.js";import{C as c}from"./ControlsWithNote-NdmfawKk.js";import{D as a}from"./DocsHeader-lKa0J31y.js";import{F as d}from"./CommandsAndQueries-C8KzZZ_g.js";import{C as r,D as t}from"./ResponsivePopover.stories-v7E3Y_JC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CWEUh2Nv.js";import"./sys-enter-2-D8dKPdhT.js";import"./alert-Dzhc-2EW.js";import"./index-PGt_tfZb.js";import"./index-CunGGXs0.js";import"./Link-D_zVjdUt.js";import"./copy-BAU6whic.js";import"./copy-DHQOADmz.js";import"./GitHub-Mark-fELMhB6e.js";import"./TableOfContent-Bn39sA4u.js";import"./index-DrxJ3_v0.js";import"./index-CJCUd_sD.js";import"./index-ByRLHl7W.js";import"./index-DHR1LOgw.js";import"./index-DfAJ7eEY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlZw9a5e.js";import"./addCustomCSSWithScoping-BziWOAoD.js";import"./index-O_SIXxVn.js";import"./index-DkAWhp6q.js";import"./ListItemStandard-CciZFj9F.js";import"./settings-BvY4-0au.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
