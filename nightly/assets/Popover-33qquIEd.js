import{j as o}from"./iframe-BS9g_hR0.js";import{useMDXComponents as s}from"./index-D6Sv7Jl_.js";import{M as i,C as m}from"./blocks-BlXgdtWM.js";import"./Tag-p_IIbz5w.js";import"./index-C8AvT1H6.js";import{C as c}from"./ControlsWithNote-C2dHGmos.js";import{D as a}from"./DocsHeader-Bv2QAu6U.js";import{F as d}from"./CommandsAndQueries-BG9-iBHT.js";import{C as r,D as t}from"./Popover.stories-COk2Me1p.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DIMKZmlM.js";import"./sys-enter-2-cjAPqaPu.js";import"./alert-CWeu-Gd2.js";import"./index-D7iHEYTy.js";import"./index-CAEXs-Gc.js";import"./Link-CiETGZ39.js";import"./copy-DFu7vK9p.js";import"./copy-DO4k2zsN.js";import"./GitHub-Mark-b87MH8eW.js";import"./TableOfContent-Bfz3jV7i.js";import"./index-BywMJtOG.js";import"./index-wzaot1RG.js";import"./index-BKoMru_w.js";import"./index-DU08Tlv3.js";import"./index-blu4KXFK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DwUfsbfY.js";import"./addCustomCSSWithScoping-D_7dkpV9.js";import"./settings-DSTG7J_6.js";import"./index-DkMHvxEC.js";import"./index-DEBok3dO.js";import"./ListItemStandard-Ba27rldr.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
