import{j as o}from"./iframe-DTHPT7iA.js";import{useMDXComponents as s}from"./index-74UlZZJj.js";import{M as i,C as m}from"./blocks-BEm3tjb6.js";import"./Tag-CJADm4_M.js";import"./index-C3HgU9VG.js";import{C as c}from"./ControlsWithNote-BGcGZ2Tw.js";import{D as a}from"./DocsHeader-DrsGZt_2.js";import{F as d}from"./CommandsAndQueries-BD3jeLaK.js";import{C as r,D as t}from"./ResponsivePopover.stories-BBrx8saE.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DoW4IMVD.js";import"./sys-enter-2-ByI7nkKd.js";import"./alert-COIhFOls.js";import"./index-t5gVEC_D.js";import"./index-C6-xBNa3.js";import"./Link-BbcZTKOL.js";import"./copy-B5eacD66.js";import"./copy-mCNoL2s6.js";import"./GitHub-Mark-BX4sI9ta.js";import"./TableOfContent-DcI8r7Mg.js";import"./index-DwOvcXXK.js";import"./index-Cj0CYz_p.js";import"./addCustomCSSWithScoping-DApCUjf-.js";import"./index-D_aw5Z2j.js";import"./index-dqQUzE09.js";import"./index-ig2sn1RW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BENd75qS.js";import"./index-Ci763Ceq.js";import"./index-Cj0ZzoJd.js";import"./ListItemStandard-CIUna04V.js";import"./settings-DM92s_uf.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
