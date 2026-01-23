import{j as o}from"./iframe-D9-OPwVR.js";import{useMDXComponents as s}from"./index-rQrCyh78.js";import{M as i,C as m}from"./blocks-yWwHjaca.js";import"./Tag-C4h9s18a.js";import"./index-C0yJm7_O.js";import{C as c}from"./ControlsWithNote-CQ_5k1u8.js";import{D as a}from"./DocsHeader-DsJCrUdt.js";import{F as d}from"./CommandsAndQueries-CGaVhEZZ.js";import{C as r,D as t}from"./ResponsivePopover.stories-eyuDBpJx.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CXuNnhF_.js";import"./sys-enter-2-CpLLk16Q.js";import"./alert-DmoPAb-1.js";import"./index-CARCmcfE.js";import"./index-D2zbla8P.js";import"./Link-C0FJUUPf.js";import"./copy-BV0EKgUf.js";import"./copy-kqUatD9Y.js";import"./GitHub-Mark-C9NicKpS.js";import"./TableOfContent-CWXv45_X.js";import"./index-BqY2NvOe.js";import"./index-DWSshsP3.js";import"./index-C2LtXiVH.js";import"./index-B7FHygPg.js";import"./index-BKtOrYz7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHNrYRTW.js";import"./addCustomCSSWithScoping-BMu8GK7h.js";import"./index-Dg1PSLCa.js";import"./index-C9-lc1hX.js";import"./ListItemStandard-MB0v_CnF.js";import"./settings-Bpoz5lRE.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
