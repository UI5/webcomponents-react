import{j as o}from"./iframe-BgKk_cUP.js";import{useMDXComponents as s}from"./index-DBhkOYZa.js";import{M as i,C as m}from"./blocks-Cov5-UrV.js";import"./Tag-14MrIsbi.js";import"./index-DoylA-Ui.js";import{C as c}from"./ControlsWithNote-CImCWZl8.js";import{D as a}from"./DocsHeader-DkQjtbvi.js";import{F as d}from"./CommandsAndQueries-DJU-Boml.js";import{C as r,D as t}from"./ResponsivePopover.stories-B2pVjpiq.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BIRyoqcd.js";import"./sys-enter-2--x49A3Er.js";import"./alert-ClVMPYjY.js";import"./index-C-jp63Tn.js";import"./index-z-eYGt9k.js";import"./Link-CwQGN6kV.js";import"./copy-DmE6rmx3.js";import"./copy-DsJBCyL-.js";import"./GitHub-Mark-CPTh4y7i.js";import"./TableOfContent-D3wn4nZr.js";import"./index-CMckAL-E.js";import"./index-vrGX3w6P.js";import"./index-DJcJ5x0R.js";import"./index-DtnoyOys.js";import"./index-DMwqR4Ak.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3WrIRKs.js";import"./addCustomCSSWithScoping-CEnWQwWy.js";import"./index-GcGiJc-e.js";import"./index-HFoflSp7.js";import"./ListItemStandard-CnthNkAX.js";import"./settings-CeZ1opbS.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
