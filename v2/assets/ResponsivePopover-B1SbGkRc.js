import{j as o}from"./iframe-BOeFyVYO.js";import{useMDXComponents as s}from"./index-CHR9lzRO.js";import{M as i,C as m}from"./blocks-DZQepsVR.js";import"./Tag-B2OWKeSz.js";import"./index-CPvTgMMp.js";import{C as c}from"./ControlsWithNote-CSbCHJ4U.js";import{D as a}from"./DocsHeader-CjbZqD9f.js";import{F as d}from"./CommandsAndQueries-B3uiYPSD.js";import{C as r,D as t}from"./ResponsivePopover.stories-DUUxCJu_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-23pj5EQa.js";import"./sys-enter-2-DAsPAd7c.js";import"./alert-CPkxh21N.js";import"./index-BcGyynfr.js";import"./index-BJHUXRax.js";import"./Link-gq5MBZLl.js";import"./copy-C5PW1t1z.js";import"./copy-BJhtqyDJ.js";import"./GitHub-Mark-DymZ9Jyi.js";import"./TableOfContent-vIMd20js.js";import"./index-BA2TdYHr.js";import"./index-C7pCL8XU.js";import"./index-BVr_O3zx.js";import"./index-CFpQMsbP.js";import"./index-XsNappkK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuyMWw-2.js";import"./addCustomCSSWithScoping-5MrgBdkN.js";import"./index-Sk78W01U.js";import"./index-BpGUb5zM.js";import"./ListItemStandard-BvObX3eg.js";import"./settings-Bfit3oG9.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
