import{j as o}from"./iframe-kJfrPaD1.js";import{useMDXComponents as s}from"./index-BKWPRaiV.js";import{M as i,C as m}from"./blocks-5RdvzEbY.js";import"./Tag-Cq_rR_bf.js";import"./index-ZnQNPJfl.js";import{C as c}from"./ControlsWithNote-HJLNE5EK.js";import{D as a}from"./DocsHeader-BLWibEvH.js";import{F as d}from"./CommandsAndQueries-D7WkRU72.js";import{C as r,D as t}from"./ResponsivePopover.stories-Dy2IPSiT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CMkzOfg7.js";import"./sys-enter-2-0CjTM9eF.js";import"./alert-T81DFfqo.js";import"./index-CmBVI-17.js";import"./index-CDtmBsTj.js";import"./Link-DLuGgAei.js";import"./copy-BYIMhd1n.js";import"./copy-yyYbNeMi.js";import"./GitHub-Mark-CjjLcYYl.js";import"./TableOfContent-Cw-X9n05.js";import"./index-CRo0yro_.js";import"./index-C-a_iLSi.js";import"./index-Ccpr0pFg.js";import"./index-DxXcjV97.js";import"./index-CdjQ1wSl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVMILbqZ.js";import"./addCustomCSSWithScoping-7vdeOKdl.js";import"./index-DI_BJW84.js";import"./index-DuEmXK1Q.js";import"./ListItemStandard-CmvDkQUO.js";import"./settings-DFQp6TpX.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
