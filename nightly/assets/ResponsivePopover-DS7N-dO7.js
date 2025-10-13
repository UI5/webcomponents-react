import{j as o}from"./iframe-BwzExPTt.js";import{useMDXComponents as s}from"./index-Bhb-E2jz.js";import{M as i,C as m}from"./blocks-DoJWfB08.js";import"./Tag-6zLQrCPp.js";import"./index-DtZ9fejJ.js";import{C as c}from"./ControlsWithNote-DVJSXWDB.js";import{D as a}from"./DocsHeader-BMPfxLy5.js";import{F as d}from"./CommandsAndQueries-BAktAF7I.js";import{C as r,D as t}from"./ResponsivePopover.stories-Ct7K_bki.js";import"./preload-helper-PPVm8Dsz.js";import"./information-YiJ0QHVh.js";import"./sys-enter-2-C0SOTOu7.js";import"./alert-D_Giis5d.js";import"./index-BFn1YmVY.js";import"./index-C5BRum1i.js";import"./Link-Bms7m456.js";import"./copy-DifwunK3.js";import"./copy-BSdgsQYS.js";import"./GitHub-Mark-2d5y6_NM.js";import"./TableOfContent-DtXVnr4E.js";import"./index-Ct12qQup.js";import"./index-CbkAtpsv.js";import"./index-A3mNxkAq.js";import"./index-Bt-scq3R.js";import"./index-DpOmhYSX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoHCzslt.js";import"./addCustomCSSWithScoping-pwpobhcn.js";import"./index-DaUOo_TH.js";import"./index-DdqklSGR.js";import"./ListItemStandard-V06wSgST.js";import"./settings-CyzpmugS.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"ResponsivePopover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
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
      <ResponsivePopover
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
