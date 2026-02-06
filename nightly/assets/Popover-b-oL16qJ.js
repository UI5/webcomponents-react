import{j as o}from"./iframe-D_72XrxV.js";import{useMDXComponents as s}from"./index-66RF5jzG.js";import{M as i,C as m}from"./blocks-Cdh_AmAk.js";import"./Tag-FVV8VuJS.js";import"./index-CeLdj5R8.js";import{C as c}from"./ControlsWithNote-DDWhTJKA.js";import{D as a}from"./DocsHeader-CCUl3t2r.js";import{F as d}from"./CommandsAndQueries-B5MqblA3.js";import{C as r,D as t}from"./Popover.stories-Cp7aaX3S.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C_2BZUqW.js";import"./sys-enter-2-C5Wnyt7l.js";import"./alert-CbokyiOI.js";import"./index-DkMaspDs.js";import"./index-DC83-RSZ.js";import"./Link-BEWshBTo.js";import"./copy-DuYQh7II.js";import"./copy-jn1S9mhy.js";import"./GitHub-Mark-D6hYrMwl.js";import"./TableOfContent-y4D1_mMB.js";import"./index-CtHwk6MR.js";import"./index-B5YLKK6V.js";import"./index-DhXDNTqP.js";import"./index-CawoDp7x.js";import"./index-DXJ6eoJD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jUCNgYAQ.js";import"./addCustomCSSWithScoping-CVFgCYWk.js";import"./settings-Cn5wwyPF.js";import"./index-BHGBSUlQ.js";import"./index-5Qz0hHSk.js";import"./ListItemStandard-DNgCtY9E.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
