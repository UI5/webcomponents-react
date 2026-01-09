import{j as o}from"./iframe-Cofg3NYG.js";import{useMDXComponents as s}from"./index-IvWpiXeJ.js";import{M as i,C as m}from"./blocks-2ghgTj-P.js";import"./Tag-BxZYpQJm.js";import"./index-DSsCdZng.js";import{C as c}from"./ControlsWithNote-CBnXwzaw.js";import{D as a}from"./DocsHeader-uOegTBxM.js";import{F as d}from"./CommandsAndQueries-84NNvrTK.js";import{C as r,D as t}from"./ResponsivePopover.stories-DhVHCy_W.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BJciHBvQ.js";import"./sys-enter-2-BCByF-gd.js";import"./alert-bPEScLdE.js";import"./index-DsO0qxxT.js";import"./index-CBua_waR.js";import"./Link-CQPXWWzt.js";import"./copy-D8x3RVfP.js";import"./copy-CvrT2nje.js";import"./GitHub-Mark-Dxo1t29W.js";import"./TableOfContent-Critm5DJ.js";import"./index-CzRl8rAY.js";import"./index-CuRMS7av.js";import"./index-DF1YQmtO.js";import"./index-BRqSe85k.js";import"./index-BLGq_g5y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCAV-AOe.js";import"./addCustomCSSWithScoping-BkkC1l0R.js";import"./index-ChbRKq5D.js";import"./index-NtXsw5yB.js";import"./ListItemStandard-DMSXl_i-.js";import"./settings-C1P4No8J.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
