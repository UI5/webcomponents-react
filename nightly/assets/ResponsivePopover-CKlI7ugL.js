import{j as o}from"./iframe-BlUygxfZ.js";import{useMDXComponents as s}from"./index-CXAabkf3.js";import{M as i,C as m}from"./blocks-C4NQ4-im.js";import"./Tag-CUR2rrlg.js";import"./index-Dh-78LPx.js";import{C as c}from"./ControlsWithNote-DAV-TwWM.js";import{D as a}from"./DocsHeader-BWSPa7ZB.js";import{F as d}from"./CommandsAndQueries-CeFRywr5.js";import{C as r,D as t}from"./ResponsivePopover.stories-yr-oQkeP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-zlNYGB6Q.js";import"./sys-enter-2-Ccj_DCkA.js";import"./alert-LdJbGRSH.js";import"./index-B6coDb7Z.js";import"./index-t0s0GVf0.js";import"./Link-Czimy6hK.js";import"./copy-BrLkZPV_.js";import"./copy-C0O91PIx.js";import"./GitHub-Mark-bz7dq5h-.js";import"./TableOfContent-B2ODRa1t.js";import"./index-B0J408xz.js";import"./index-DFYqP0N6.js";import"./index-Dn8Ref-F.js";import"./index-C_DCdzmu.js";import"./index-nb0q6IbV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbJvTexr.js";import"./addCustomCSSWithScoping-DHyjDtb3.js";import"./index-l2Om9n2s.js";import"./index-DsTqha7i.js";import"./ListItemStandard-BqadHOpo.js";import"./settings-BVrFU0mX.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
