import{j as o}from"./iframe-BQ3gAAxx.js";import{useMDXComponents as i}from"./index-B1lAiT1q.js";import{M as s,C as m}from"./blocks-n6pvGDI_.js";import"./Tag-eC6SmQhc.js";import"./index-DjTon6of.js";import{C as c}from"./ControlsWithNote-B-fhqDT5.js";import{D as a}from"./DocsHeader-Z5QcYM_8.js";import{F as d}from"./Footer-wX_u0Ai_.js";import"./CommandsAndQueries-wegYoAqu.js";import"./PageNotFound-CYbLq2oD.js";import{C as r,D as t}from"./Popover.stories-Dh-FZOpz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D7DVbQHJ.js";import"./sys-enter-2-QGEZX0U8.js";import"./alert-BvhbOdWs.js";import"./index-C6vnN5EE.js";import"./index-BlPBwMrJ.js";import"./Link-Cgpq4OBn.js";import"./copy-BsssbeKE.js";import"./copy-Da1BKYtz.js";import"./GitHub-Mark-D64eVcYS.js";import"./TableOfContent-ByjnoHjI.js";import"./index-D6YjU4up.js";import"./index-CLyjGvZV.js";import"./index-C1GISjTX.js";import"./index-C1cP6C82.js";import"./index-C8VczBe0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D1UPUp-J.js";import"./addCustomCSSWithScoping-KaZd0g7m.js";import"./Illustrations-YW4WoylE.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-DUK8lwbJ.js";import"./index-C8MdlFSW.js";import"./index-DFzmTknk.js";import"./ListItemStandard-BG1UM3jC.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
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
`,o.jsx(d,{})]})}function Q(e={}){const{wrapper:n}={...i(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{Q as default};
