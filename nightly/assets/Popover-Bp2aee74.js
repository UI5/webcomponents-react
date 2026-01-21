import{j as o}from"./iframe-DYduXZhN.js";import{useMDXComponents as s}from"./index-Ci2-DdjO.js";import{M as i,C as m}from"./blocks-D9jMBEgy.js";import"./Tag-DIRdIcZz.js";import"./index-BOwVehE_.js";import{C as c}from"./ControlsWithNote-zRR9InYP.js";import{D as a}from"./DocsHeader-C05AbQAg.js";import{F as d}from"./CommandsAndQueries-B9zetcQ0.js";import{C as r,D as t}from"./Popover.stories-AUhDvQO9.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B4rZhRQI.js";import"./sys-enter-2-DdBtSqFS.js";import"./alert-Cbu3hZ-F.js";import"./index-DKd7eJ-2.js";import"./index-C__H6VdM.js";import"./Link-BLFGRSbE.js";import"./copy-P_NWQCS6.js";import"./copy-CkIF2sdc.js";import"./GitHub-Mark-CU_qsXHg.js";import"./TableOfContent-DYx4HAfY.js";import"./index-Cz134k4C.js";import"./index-9BFlmr8a.js";import"./index-BEkPqhUo.js";import"./index-BT55sXhr.js";import"./index-CrQhdGHw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tYCFSQM4.js";import"./addCustomCSSWithScoping-BvPW-C09.js";import"./settings-DiEqNda9.js";import"./index-DDCVZ4U5.js";import"./index-DqaC_Ony.js";import"./ListItemStandard-9qFWIUAt.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
