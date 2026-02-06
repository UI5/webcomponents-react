import{j as o}from"./iframe-CNlfMRh7.js";import{useMDXComponents as s}from"./index-HXyduBEt.js";import{M as i,C as m}from"./blocks-Dntxnfj7.js";import"./Tag-CSkrKRNp.js";import"./index-CE5EvvTL.js";import{C as c}from"./ControlsWithNote-DiIYS2s0.js";import{D as a}from"./DocsHeader-DVo3393M.js";import{F as d}from"./CommandsAndQueries-DPIrOVa1.js";import{C as r,D as t}from"./ResponsivePopover.stories-CMo9sOi_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-A5dyTfTj.js";import"./sys-enter-2-Dq0W94t5.js";import"./alert-B1A4HH0Q.js";import"./index-B1BCaeBo.js";import"./index-HOJNtIkV.js";import"./Link-DJApgqFJ.js";import"./copy-BD8xVlU3.js";import"./copy-NJiLz1Ae.js";import"./GitHub-Mark-AYmqLjCo.js";import"./TableOfContent-Dze4y5yw.js";import"./index-Bfxe_3pA.js";import"./index-BsNAKev7.js";import"./index-CMp48S8l.js";import"./index-BZFP7GSJ.js";import"./index-BUkOiAQJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-UJ6G4FQA.js";import"./addCustomCSSWithScoping-0QMDzhQB.js";import"./index-B6Hnq5R3.js";import"./index-DlFpWCyT.js";import"./ListItemStandard-CN81KWn3.js";import"./settings-DPUgaiHg.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
