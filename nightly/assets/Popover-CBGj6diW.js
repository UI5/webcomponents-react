import{j as o}from"./iframe-DUkvwiCH.js";import{useMDXComponents as s}from"./index-CmOOmEq_.js";import{M as i,C as m}from"./blocks-BEyioZmC.js";import"./Tag-DEWD3xtk.js";import"./index-mzCfuMGx.js";import{C as c}from"./ControlsWithNote-h_Zfec4u.js";import{D as a}from"./DocsHeader-CAVkz1Gb.js";import{F as d}from"./CommandsAndQueries-PDY51fAI.js";import{C as r,D as t}from"./Popover.stories-Zoo7SB0_.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DXx8yVKj.js";import"./sys-enter-2-DohaKpz7.js";import"./alert-DS7-1sye.js";import"./index-DhtGVRhj.js";import"./index-BtWSXXzR.js";import"./Link-DPkQciON.js";import"./copy-TSIDnc-o.js";import"./copy-B0dtT-T1.js";import"./GitHub-Mark-DLQQkiGF.js";import"./TableOfContent-D10h03Op.js";import"./index-B92FdrSK.js";import"./index-XPJfZ8Rp.js";import"./addCustomCSSWithScoping-CPXzOUpZ.js";import"./index-_2a7rjiJ.js";import"./index-qYUxj7eK.js";import"./index-B-fuFZPz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOPJEYH-.js";import"./settings-2PbqmORg.js";import"./index-DOXiwBZC.js";import"./index-veuLTP7t.js";import"./ListItemStandard-CYtQ6rBD.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
