import{j as o}from"./iframe-COmYM7FM.js";import{useMDXComponents as s}from"./index-nJK3ZT8W.js";import{M as i,C as m}from"./blocks-DAY1TuCU.js";import"./Tag-C7vo2194.js";import"./index-8dZG1YHw.js";import{C as c}from"./ControlsWithNote-D0uv15nF.js";import{D as a}from"./DocsHeader-CST8qEMS.js";import{F as d}from"./CommandsAndQueries-BOWLtTE6.js";import{C as r,D as t}from"./ResponsivePopover.stories-Br0XNu_1.js";import"./preload-helper-PPVm8Dsz.js";import"./information-le6myuh6.js";import"./sys-enter-2-CL75I8bf.js";import"./alert-lhOUxaTm.js";import"./index-DFr8Hmr1.js";import"./index-YGBVCLbI.js";import"./Link-CcuckqWN.js";import"./copy-Dq2e23NG.js";import"./copy-CXZAgH3a.js";import"./GitHub-Mark-qFlD-nLv.js";import"./TableOfContent-tjnC9ti3.js";import"./index-Bf48pKls.js";import"./index-Baj766Uq.js";import"./index-C84ZyqAr.js";import"./index-WRRg6L2_.js";import"./index-CGzRflPR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJJkccm1.js";import"./addCustomCSSWithScoping-CPOeZ7S_.js";import"./index-CL0ZF9VR.js";import"./index-Bd4CgeRl.js";import"./ListItemStandard-BflPf8Ge.js";import"./settings-B_K-MLff.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
