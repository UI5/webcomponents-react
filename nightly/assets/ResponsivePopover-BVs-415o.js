import{j as o}from"./iframe-DLRMrfR_.js";import{useMDXComponents as s}from"./index-7UnH5ZCU.js";import{M as i,C as m}from"./blocks--r6oFhly.js";import"./Tag-zetZkNsl.js";import"./index-qvcEmQpJ.js";import{C as c}from"./ControlsWithNote-CAJ_mVv5.js";import{D as a}from"./DocsHeader-B1n-k_n7.js";import{F as d}from"./CommandsAndQueries-D6NirpIC.js";import{C as r,D as t}from"./ResponsivePopover.stories-BCGO0vwv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-zAO2pP7J.js";import"./sys-enter-2-CCKngdgf.js";import"./alert-B3SXl-8D.js";import"./index-BPd73hWD.js";import"./index-tVwrcd6W.js";import"./Link-CBt9loeM.js";import"./copy-YT3KpyHI.js";import"./copy-Loq6ZFpK.js";import"./GitHub-Mark-DKvd1v7O.js";import"./TableOfContent-DuwFMUzK.js";import"./index-DwoJQxQH.js";import"./index-D2MDEhSl.js";import"./index-kj7rqJLC.js";import"./index-DsFidw_9.js";import"./index-xtEoLRb_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMq-LIht.js";import"./addCustomCSSWithScoping-Ca5vBaM2.js";import"./index-OyOMojac.js";import"./index-WnnzYQ2a.js";import"./ListItemStandard-Df0gJlCx.js";import"./settings-DTgx2sz4.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
