import{j as o}from"./iframe-CirU0arv.js";import{useMDXComponents as s}from"./index-Dp75W_mY.js";import{M as i,C as m}from"./blocks-BZ_tUEGn.js";import"./Tag-BIXyVbav.js";import"./index-DkGOPQ-r.js";import{C as c}from"./ControlsWithNote-tO4J5snW.js";import{D as a}from"./DocsHeader-8R2ciWLq.js";import{F as d}from"./CommandsAndQueries-C-xkLV_B.js";import{C as r,D as t}from"./Popover.stories-Bcgy6QtA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Z8YFf98o.js";import"./sys-enter-2-5bsV2B9A.js";import"./alert-FLQkBZSI.js";import"./index-4atoEi4m.js";import"./index-Dxm6BO0O.js";import"./Link-cWf0Ff_j.js";import"./copy-DsC2VAeq.js";import"./copy-BRU5ISS0.js";import"./GitHub-Mark-Z7M2BZpt.js";import"./TableOfContent-DKP86iI-.js";import"./index-BrqGQq-t.js";import"./index-BUDPFl9U.js";import"./index-B7a5GE08.js";import"./index-VennLGrv.js";import"./index-DCit48ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CtMJGvuv.js";import"./addCustomCSSWithScoping-DTjbXshP.js";import"./settings-DJ-LHUy-.js";import"./index-KodJqxFE.js";import"./index-Dxv3SITq.js";import"./ListItemStandard-DBUXW515.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
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
      <Popover
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
