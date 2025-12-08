import{j as o}from"./iframe-CISvTVNI.js";import{useMDXComponents as s}from"./index-bSkbOjqc.js";import{M as i,C as m}from"./blocks-B14xai8l.js";import"./Tag-C1M5Bqsq.js";import"./index-DomH80TU.js";import{C as c}from"./ControlsWithNote-DYexAoru.js";import{D as a}from"./DocsHeader-CX-pVqlb.js";import{F as d}from"./CommandsAndQueries-CBtnfpxG.js";import{C as r,D as t}from"./Popover.stories-Cj2Kx1zN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B2fXauVA.js";import"./sys-enter-2-BkEj79Au.js";import"./alert-Cia20ulM.js";import"./index-CE7xV3os.js";import"./index-DqP6b12u.js";import"./Link-B3c0gcH0.js";import"./copy-cY1exCnP.js";import"./copy-DUVHDUg7.js";import"./GitHub-Mark-DafCxuoq.js";import"./TableOfContent-DqGQszUP.js";import"./index-B3k5G3FE.js";import"./index-CTfs7RBW.js";import"./index-BNjAQDaE.js";import"./index-BZLJStFD.js";import"./index-4s-xol72.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D02o7Sag.js";import"./addCustomCSSWithScoping-B4qcl2al.js";import"./settings-kgiPQv_V.js";import"./index-DmEszc9N.js";import"./index-CP1wr9dJ.js";import"./ListItemStandard-Dtqu1SWh.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
