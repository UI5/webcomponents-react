import{j as o}from"./iframe-CMOSZBev.js";import{useMDXComponents as s}from"./index-BTwv99x0.js";import{M as i,C as m}from"./blocks-C7uNs7TS.js";import"./Tag-CqfvYh1K.js";import"./index-SUBNzPDi.js";import{C as c}from"./ControlsWithNote-BpW64yfj.js";import{D as a}from"./DocsHeader-G6_xaaS-.js";import{F as d}from"./CommandsAndQueries-BBxM4nbH.js";import{C as r,D as t}from"./Popover.stories-CyE2iw4I.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D_sfcND0.js";import"./sys-enter-2-D7lHEvN4.js";import"./alert-CMJogacJ.js";import"./index-B2Bp115n.js";import"./index-CKeepgUa.js";import"./Link-D-jONPM3.js";import"./copy-C95MyXMx.js";import"./copy-CxpwRqG0.js";import"./GitHub-Mark-BaY2R9rx.js";import"./TableOfContent--rxK582K.js";import"./index-BcSeOVwt.js";import"./index-_PRo-73t.js";import"./index-kRKXYALW.js";import"./index-BG7mFBoF.js";import"./index-DnIJB1t0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkqbRy7L.js";import"./addCustomCSSWithScoping-CCFGNXq3.js";import"./settings-1zMM0TTB.js";import"./index-CVcS8amw.js";import"./index-BqkbFWdI.js";import"./ListItemStandard-ZzU_GhBz.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
