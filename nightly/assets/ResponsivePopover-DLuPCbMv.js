import{j as o}from"./iframe-DwrbX4RV.js";import{useMDXComponents as s}from"./index-DEV0fT-3.js";import{M as i,C as m}from"./blocks-D-Cz54eK.js";import"./Tag-CFiS-8RZ.js";import"./index-BQbTf7k-.js";import{C as c}from"./ControlsWithNote-IYpGQfhJ.js";import{D as a}from"./DocsHeader-H0UjwWUc.js";import{F as d}from"./CommandsAndQueries-33-9TCX1.js";import{C as r,D as t}from"./ResponsivePopover.stories-DXUFkFQT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bbk3nBJv.js";import"./sys-enter-2-Dh-lxitt.js";import"./alert-DlEiJnhn.js";import"./index-DLV46EWe.js";import"./index-C2WUwRD4.js";import"./Link-CH3IA-s_.js";import"./copy-DI-MEJNy.js";import"./copy-ZcGBB0nX.js";import"./GitHub-Mark-DjIQbcMx.js";import"./TableOfContent-DnfJnqus.js";import"./index-Zv7LwxZg.js";import"./index-DcjDkGfQ.js";import"./index-DfMLBK8G.js";import"./index-4tQAJTUd.js";import"./index-DafPGyjY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP_TNLDv.js";import"./addCustomCSSWithScoping-BNLxo1iY.js";import"./index-BaDEpd7H.js";import"./index-B99IvkHX.js";import"./ListItemStandard-C7C_LUm1.js";import"./settings-BXd4XT-i.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
