import{j as o}from"./iframe-BV6MX4jP.js";import{useMDXComponents as s}from"./index-BBPLoQd2.js";import{M as i,C as m}from"./blocks-ButdG5ct.js";import"./Tag-DqTS_NIk.js";import"./index-D61UH3oK.js";import{C as c}from"./ControlsWithNote-Br1yzSE3.js";import{D as a}from"./DocsHeader-BXtvUvPW.js";import{F as d}from"./CommandsAndQueries-B_NVK97H.js";import{C as r,D as t}from"./Popover.stories-Cq6qpHSv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D4lwDDvQ.js";import"./sys-enter-2-CNNlkaec.js";import"./alert-D9QVBDgC.js";import"./index-B6xBDYCv.js";import"./index-5lJ63Ggw.js";import"./Link-CQBQGD-K.js";import"./copy-D55H2zfJ.js";import"./copy-BuKjNY_z.js";import"./GitHub-Mark-DWFs6LTX.js";import"./TableOfContent-CJu7MjuI.js";import"./index-Bn23lh4B.js";import"./index-BIn6vsDV.js";import"./index-BeBg5nKE.js";import"./index-BAeh9ZRA.js";import"./index-pEzZy3XJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJJJ49N9.js";import"./addCustomCSSWithScoping-BAR7O9dV.js";import"./settings-nj9vexJs.js";import"./index-CZ32PpE2.js";import"./index-CcZrpUmm.js";import"./ListItemStandard-C95WGA7x.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
