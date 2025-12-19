import{j as o}from"./iframe-l0Gg6LLs.js";import{useMDXComponents as s}from"./index-Cae9Voso.js";import{M as i,C as m}from"./blocks-C2P3yVo4.js";import"./Tag-CjLUfCmJ.js";import"./index-DCqXNXQw.js";import{C as c}from"./ControlsWithNote-BPBkFbxc.js";import{D as a}from"./DocsHeader-BIjaJ0Nr.js";import{F as d}from"./CommandsAndQueries-Clw2dQJN.js";import{C as r,D as t}from"./ResponsivePopover.stories-CoHrO3MA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BcS3rXju.js";import"./sys-enter-2-BSmamrdx.js";import"./alert-B368tBUy.js";import"./index-Bwbvp4Wo.js";import"./index-C2QpZOLo.js";import"./Link-BXQMs19K.js";import"./copy-VS6NZnYU.js";import"./copy-B13EJS-v.js";import"./GitHub-Mark-BXPdSfrH.js";import"./TableOfContent-BdkB29Mz.js";import"./index-FAekmb_7.js";import"./index-I7Wz355y.js";import"./index-CihYjerb.js";import"./index-lxp-HdMJ.js";import"./index-hvU57qSB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DhC4Vn3X.js";import"./addCustomCSSWithScoping-DDpmsdIj.js";import"./index-DPc2cZ4_.js";import"./index-fo8z4Qvq.js";import"./ListItemStandard-1yh_JDGs.js";import"./settings-BfR_EbIn.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
