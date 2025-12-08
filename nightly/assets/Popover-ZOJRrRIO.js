import{j as o}from"./iframe-D5yYeuyx.js";import{useMDXComponents as s}from"./index-OOr887th.js";import{M as i,C as m}from"./blocks-BwZUgw5J.js";import"./Tag-BZtJl-N7.js";import"./index-DJODyOkI.js";import{C as c}from"./ControlsWithNote-Dhu05JtX.js";import{D as a}from"./DocsHeader-sLoGcPV0.js";import{F as d}from"./CommandsAndQueries-CJKRIq4o.js";import{C as r,D as t}from"./Popover.stories-C35NrJLK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CqfzA4ZI.js";import"./sys-enter-2-Cgd8Rk78.js";import"./alert-uMczVQtd.js";import"./index-pGOyFusy.js";import"./index-BMwlOPBB.js";import"./Link-DSfaPzX5.js";import"./copy-lqBg0hMZ.js";import"./copy-BbBddowJ.js";import"./GitHub-Mark-BlwYDJaN.js";import"./TableOfContent-CQ1XpZMC.js";import"./index-Cu6PwiO-.js";import"./index-CWkadQ1i.js";import"./index-BiamOLpW.js";import"./index-n-gjro57.js";import"./index-DFcCzRoG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IcjKSza1.js";import"./addCustomCSSWithScoping-DupGCqhX.js";import"./settings-BPkYZfgY.js";import"./index-Dh_vIy7-.js";import"./index-D4p2SSM5.js";import"./ListItemStandard-CXdrrYCn.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
