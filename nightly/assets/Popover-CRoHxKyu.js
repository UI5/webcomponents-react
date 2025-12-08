import{j as o}from"./iframe-C7GsLKpM.js";import{useMDXComponents as s}from"./index-fgJud-zp.js";import{M as i,C as m}from"./blocks-D2ryVNuM.js";import"./Tag-CvCDhGeJ.js";import"./index-CDhisaU5.js";import{C as c}from"./ControlsWithNote-DGuGAwo2.js";import{D as a}from"./DocsHeader-C2A8ryh7.js";import{F as d}from"./CommandsAndQueries-zRxhXSXv.js";import{C as r,D as t}from"./Popover.stories-B5SxqLVc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CeT29ukt.js";import"./sys-enter-2-DX9sWARu.js";import"./alert-CEtziYy3.js";import"./index-Bitbggm1.js";import"./index-hUX7abRI.js";import"./Link-Bb3LeyVe.js";import"./copy-CeS9CC6e.js";import"./copy-DEZSjQMA.js";import"./GitHub-Mark-3LNYjKsL.js";import"./TableOfContent-CFUfa1cA.js";import"./index-CW2WjDDi.js";import"./index-B72Of-bP.js";import"./index-Dyv0UGKb.js";import"./index-m_3CNkhb.js";import"./index-DoyP2rLL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6aw6fal.js";import"./addCustomCSSWithScoping-DxMrCFWH.js";import"./settings-DBygnMxF.js";import"./index-C_uQe8JR.js";import"./index-L3JtXj-B.js";import"./ListItemStandard-BvfqPVMA.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
