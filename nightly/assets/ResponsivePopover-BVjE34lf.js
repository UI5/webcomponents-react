import{j as o}from"./iframe-lqcNyI1T.js";import{useMDXComponents as s}from"./index-B0DX3imF.js";import{M as i,C as m}from"./blocks-BpHyZEcb.js";import"./Tag-gBw-lmpH.js";import"./index-CZPzb4BW.js";import{C as c}from"./ControlsWithNote-BYRHEUf3.js";import{D as a}from"./DocsHeader-ABPUpJqp.js";import{F as d}from"./CommandsAndQueries-DzJmAZem.js";import{C as r,D as t}from"./ResponsivePopover.stories-CPweTD7V.js";import"./preload-helper-PPVm8Dsz.js";import"./information-04kgllMP.js";import"./sys-enter-2-DUAlyrLn.js";import"./alert-BKOHJXpG.js";import"./index-BwE7J1MZ.js";import"./index-D-4WJNaw.js";import"./Link-1aRA3aDD.js";import"./copy-B7qflzYl.js";import"./copy-CC4Y44ID.js";import"./GitHub-Mark-CrZQuWzg.js";import"./TableOfContent-BqOuSc1s.js";import"./index-Dd_PfWwN.js";import"./index-DgG0lX0j.js";import"./index-DHQLUBCy.js";import"./index-B4-GBSDE.js";import"./index-CiJkSLrj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D20vcD6H.js";import"./addCustomCSSWithScoping-CSRUaJeQ.js";import"./index-6hZ21krh.js";import"./index-C7HMOshY.js";import"./ListItemStandard-DubsfjRL.js";import"./settings-C_Arqzcj.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
