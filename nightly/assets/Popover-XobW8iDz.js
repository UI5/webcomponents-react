import{j as o}from"./iframe-DfIU3iRi.js";import{useMDXComponents as s}from"./index-BAUWkqwx.js";import{M as i,C as m}from"./blocks-DKKhajQJ.js";import"./Tag-CF4VAGn3.js";import"./index-_jZ5OE_X.js";import{C as c}from"./ControlsWithNote-D4Nv_2bn.js";import{D as a}from"./DocsHeader-BvEUo_tI.js";import{F as d}from"./CommandsAndQueries-CCvlfqZe.js";import{C as r,D as t}from"./Popover.stories-CTaSHsEL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BagB6Da7.js";import"./sys-enter-2-BiNE0Ouk.js";import"./alert-2mu58sd7.js";import"./index-DeDDTWfB.js";import"./index-dA_mFJJw.js";import"./Link-C-uHXK5B.js";import"./copy-DjCYIkIJ.js";import"./copy-C8IsFnQF.js";import"./GitHub-Mark-V_4XTcp_.js";import"./TableOfContent-UJCpwmXi.js";import"./index-CoTITwqN.js";import"./index-CqJNVQT5.js";import"./index-CIxyPlXE.js";import"./index-YCl-_jCh.js";import"./index-BGfN_eSt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ohosJA7I.js";import"./addCustomCSSWithScoping-CtydAM5n.js";import"./settings-BAe5CL2m.js";import"./index-D2jxXTUw.js";import"./index-CZUYrYNt.js";import"./ListItemStandard-DhaZK_FW.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
