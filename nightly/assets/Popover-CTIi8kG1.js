import{j as o}from"./iframe-CDMw3QW7.js";import{useMDXComponents as s}from"./index-B1OHiQPx.js";import{M as i,C as m}from"./blocks-CUd96uRM.js";import"./Tag-CRCkHgPM.js";import"./index-BFHtg5w_.js";import{C as c}from"./ControlsWithNote-C9aiOPy2.js";import{D as a}from"./DocsHeader-Dmvt-mfp.js";import{F as d}from"./CommandsAndQueries-DKYp_Jx5.js";import{C as r,D as t}from"./Popover.stories-BoEQt0_1.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DcnFOD7I.js";import"./sys-enter-2-Bq9738ZR.js";import"./alert-DgZ_z3Yp.js";import"./index-CEKogKIQ.js";import"./index-y4pjeQFW.js";import"./Link-fH9wonJ-.js";import"./copy-Dd0CQ0vn.js";import"./copy-4Dlt6M0w.js";import"./GitHub-Mark-2q-Fi7Zh.js";import"./TableOfContent-BIYALOwi.js";import"./index-CjzhAhn4.js";import"./index-QTO9fIyh.js";import"./index-CFg6tGep.js";import"./index-zPaFBXP5.js";import"./index-NVXyFLUS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzgD7Za_.js";import"./addCustomCSSWithScoping-DWGH2XNZ.js";import"./settings-BzU3TjJh.js";import"./index-D5bKrwpZ.js";import"./index-BEQ_zuJ6.js";import"./ListItemStandard-C-68iD6i.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
