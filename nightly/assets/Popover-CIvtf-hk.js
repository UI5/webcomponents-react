import{j as o}from"./iframe-DmoM9f-3.js";import{useMDXComponents as s}from"./index-B20arXE0.js";import{M as i,C as m}from"./blocks-BpV1oLoN.js";import"./Tag-C5kFbKbl.js";import"./index-BLNEyCKE.js";import{C as c}from"./ControlsWithNote-r_kaA0NY.js";import{D as a}from"./DocsHeader-a_YCyG36.js";import{F as d}from"./CommandsAndQueries-D46yw8vq.js";import{C as r,D as t}from"./Popover.stories-DmsRVzlP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DFrNJXON.js";import"./sys-enter-2-97edjggS.js";import"./alert-DFs18VX5.js";import"./index-D10NIdcs.js";import"./index-CwkZexmy.js";import"./Link-CJAlKdXH.js";import"./copy-47AFjMvF.js";import"./copy-CLLjPrKq.js";import"./GitHub-Mark-DhrdlfJG.js";import"./TableOfContent-DpBIb8tu.js";import"./index-BsxZ4Cqo.js";import"./index-C9RFs9lp.js";import"./index-BS6TqzQW.js";import"./index-DEJMdS-B.js";import"./index--5fdhH7F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvwMzl7A.js";import"./addCustomCSSWithScoping-CrnVfoLT.js";import"./settings-DABExvul.js";import"./index-C5hbXSHM.js";import"./index-CCKJVryI.js";import"./ListItemStandard-BJDVbUng.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
