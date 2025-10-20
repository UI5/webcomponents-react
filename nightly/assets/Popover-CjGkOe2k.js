import{j as o}from"./iframe-BFWc6ije.js";import{useMDXComponents as s}from"./index-DIwiR8-R.js";import{M as i,C as m}from"./blocks-_C0Ko-FB.js";import"./Tag-BlcbvGrz.js";import"./index-S-jzd0og.js";import{C as c}from"./ControlsWithNote-qwvEwOvA.js";import{D as a}from"./DocsHeader-CTkr0wnQ.js";import{F as d}from"./CommandsAndQueries-RvyhHzLx.js";import{C as r,D as t}from"./Popover.stories-CPOhOHyQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-gUiWTFs7.js";import"./sys-enter-2-Czjj6c4O.js";import"./alert-Dwrii-iz.js";import"./index-DYh3DUHT.js";import"./index-Ammjaz44.js";import"./Link-C0nE2LNS.js";import"./copy-4jYiu-nN.js";import"./copy-B0915CdE.js";import"./GitHub-Mark-C3CIiIRf.js";import"./TableOfContent-DeyQFnDl.js";import"./index-BWXRaFCB.js";import"./index-BJhTX5aa.js";import"./index-D6ti5Aap.js";import"./index-BNrsjj3y.js";import"./index-BeiCFHJ0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NyszqC-C.js";import"./addCustomCSSWithScoping-DHZr8-1Q.js";import"./settings-Bl3VKOzY.js";import"./index-CFTVOaaJ.js";import"./index-Tigp63LJ.js";import"./ListItemStandard-3Dr6elZ5.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
