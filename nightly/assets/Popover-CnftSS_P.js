import{j as o}from"./iframe-BdLp08tI.js";import{useMDXComponents as s}from"./index-L7M025bj.js";import{M as i,C as m}from"./blocks-BcH5lj54.js";import"./Tag-BYLKYo9E.js";import"./index-C9cC8h2E.js";import{C as c}from"./ControlsWithNote-BfK2jDz_.js";import{D as a}from"./DocsHeader-Bpb7xGNC.js";import{F as d}from"./CommandsAndQueries-A8ohCY01.js";import{C as r,D as t}from"./Popover.stories-BqNcM77d.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BztpBEmn.js";import"./sys-enter-2-B36Zfbw2.js";import"./alert-YtyMWuog.js";import"./index-DEh5uPtQ.js";import"./index-bbxcO9wp.js";import"./Link-PkVO0OYZ.js";import"./copy-DopTx9Hm.js";import"./copy-CAz8pLUN.js";import"./GitHub-Mark-BOGIoyWh.js";import"./TableOfContent-BpoRcaPd.js";import"./index-DgCb8EoK.js";import"./index-6N8J-kdE.js";import"./index-Bq5n3ghu.js";import"./index-vBihh2Vl.js";import"./index-BjKyj7T0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oSO4QDvk.js";import"./addCustomCSSWithScoping-D7d3eFNt.js";import"./settings-CU9DNY2V.js";import"./index-DVTrGvWQ.js";import"./index-Dug3C8oV.js";import"./ListItemStandard-NrFCjmp4.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
