import{j as o}from"./iframe-bzWujj58.js";import{useMDXComponents as s}from"./index-BCWfYBG3.js";import{M as i,C as m}from"./blocks-X5VJ78n5.js";import"./Tag-CVKVqceK.js";import"./index-CSD4D-IO.js";import{C as c}from"./ControlsWithNote-COjTHVw-.js";import{D as a}from"./DocsHeader-RPqrqGlV.js";import{F as d}from"./CommandsAndQueries-CSnnb9h_.js";import{C as r,D as t}from"./ResponsivePopover.stories-PIlCtpP6.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C9FM1h13.js";import"./sys-enter-2-BEIn8VDt.js";import"./alert-3fLrr5gT.js";import"./index-CUs-JjpA.js";import"./index-CBomhFI_.js";import"./Link-DZnymjml.js";import"./copy-CIFT9wWr.js";import"./copy-GDuXt_K5.js";import"./GitHub-Mark-ClHMqzFf.js";import"./TableOfContent-2Rlpvfej.js";import"./index-1tcJfS2t.js";import"./index-DVLKNd8I.js";import"./index-BfOrv2Q6.js";import"./index-CCshg6zD.js";import"./index-DD0jDMax.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BiRbi5N7.js";import"./addCustomCSSWithScoping-CWEhHtD-.js";import"./index-CYeZBUNC.js";import"./index-DOuzQIbm.js";import"./ListItemStandard-BUi3BAXQ.js";import"./settings-xB4h6gy4.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
