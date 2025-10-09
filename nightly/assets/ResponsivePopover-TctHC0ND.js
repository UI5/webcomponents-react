import{j as o}from"./iframe-D7FikSiu.js";import{useMDXComponents as s}from"./index-BenG4a-h.js";import{M as i,C as m}from"./blocks-Yxlvk0d_.js";import"./Tag-CPn9c9wp.js";import"./index-C7R8Sd2K.js";import{C as c}from"./ControlsWithNote-BVRLUUJy.js";import{D as a}from"./DocsHeader-CoDJ8064.js";import{F as d}from"./CommandsAndQueries-DD_YKX8j.js";import{C as r,D as t}from"./ResponsivePopover.stories-BH3uxQ4R.js";import"./preload-helper-PPVm8Dsz.js";import"./information-uIClPmp3.js";import"./sys-enter-2-CoINRXQ6.js";import"./alert-C1AwfvUs.js";import"./index--O96gYhw.js";import"./index-DD0ZDplT.js";import"./Link-VxMUEtoN.js";import"./copy-DXGGQE6h.js";import"./copy-BeTo-Yk5.js";import"./GitHub-Mark-8DjVUxwp.js";import"./TableOfContent-DuAbMaWr.js";import"./index-C3kgqoQY.js";import"./index-BmpVzGJg.js";import"./index-BlrcmYdd.js";import"./index-BWKg7Ny9.js";import"./index-sclNFwhc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DXj9DeaS.js";import"./addCustomCSSWithScoping-qQ8FRtdZ.js";import"./index-DUVjrMwJ.js";import"./index-C0B2CC00.js";import"./ListItemStandard-CSDUnyyJ.js";import"./settings-Bhg9hIqQ.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
