import{j as o}from"./iframe-BCLHYJgX.js";import{useMDXComponents as s}from"./index-6uEU24p4.js";import{M as i,C as m}from"./blocks-Bs_XR2wS.js";import"./Tag-CyCEbX-5.js";import"./index-BaEPddIL.js";import{C as c}from"./ControlsWithNote-DsJu2eyI.js";import{D as a}from"./DocsHeader-DskdD-rz.js";import{F as d}from"./CommandsAndQueries-CO5L47ah.js";import{C as r,D as t}from"./Popover.stories-CYvIbJje.js";import"./preload-helper-PPVm8Dsz.js";import"./information-ddn69F5R.js";import"./sys-enter-2-Clp8AE05.js";import"./alert-bXCG-ij3.js";import"./index-ryNQsvjz.js";import"./index-BK_ZHavx.js";import"./Link-Bn4h5ljW.js";import"./copy-DbeI06jm.js";import"./copy-C8KGHNvK.js";import"./GitHub-Mark-Dw6a9esS.js";import"./TableOfContent-C5WsUPZq.js";import"./index-Cok_5_tC.js";import"./index-Cm3V18u1.js";import"./index-CCx-58F9.js";import"./index-Bu9oHGEl.js";import"./index-_pVZ4H5C.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoVEwdyY.js";import"./addCustomCSSWithScoping-DNzt28js.js";import"./settings-DEZp58uU.js";import"./index-DY7zKARQ.js";import"./index-CLiMatz4.js";import"./ListItemStandard-CBy1q-np.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
