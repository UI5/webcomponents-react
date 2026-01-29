import{j as o}from"./iframe-CaWUkniD.js";import{useMDXComponents as s}from"./index-DfLMUe36.js";import{M as i,C as m}from"./blocks-BMfWNTmT.js";import"./Tag-CqIFc9Gy.js";import"./index-B-q2cOJd.js";import{C as c}from"./ControlsWithNote-tn4IlKYb.js";import{D as a}from"./DocsHeader-COAJAB_S.js";import{F as d}from"./CommandsAndQueries-Bkeh__iN.js";import{C as r,D as t}from"./Popover.stories-DmuY4Gya.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D2K3Dl_P.js";import"./sys-enter-2-CcH0mjP8.js";import"./alert-CyfuNqtR.js";import"./index-DN8rN30Z.js";import"./index-dFuotq6J.js";import"./Link-D_-jRuCf.js";import"./copy-RL6wI4mn.js";import"./copy-CqMAivUp.js";import"./GitHub-Mark-BFGmI5i2.js";import"./TableOfContent-BiO-A2Go.js";import"./index-tK2knsWN.js";import"./index-WiTork8k.js";import"./index-ChWdN6oy.js";import"./index-Bw4kzKrM.js";import"./index-C4konRse.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2YWTQyV.js";import"./addCustomCSSWithScoping-DbaRAaG9.js";import"./settings-D0DUxEmW.js";import"./index-B4567yCp.js";import"./index-D5Irx0vg.js";import"./ListItemStandard-DKc5fhLO.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
