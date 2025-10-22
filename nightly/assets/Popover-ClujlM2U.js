import{j as o}from"./iframe-Cs5gvioi.js";import{useMDXComponents as s}from"./index-BtKDOpat.js";import{M as i,C as m}from"./blocks-BcK5AE3G.js";import"./Tag-D4RJrwN-.js";import"./index-CiQvF52b.js";import{C as c}from"./ControlsWithNote-CVzbCgFR.js";import{D as a}from"./DocsHeader-5EwFpeNv.js";import{F as d}from"./CommandsAndQueries-BdMbFe6n.js";import{C as r,D as t}from"./Popover.stories-Cviod-tZ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C2H5qqQk.js";import"./sys-enter-2-DnVNaHmP.js";import"./alert-Bc-gjyRb.js";import"./index-BxdMkIQq.js";import"./index-Ccaj5Czc.js";import"./Link-EUC5ZRxP.js";import"./copy-C3lRnZM0.js";import"./copy-DKGYESSv.js";import"./GitHub-Mark-CFZS7RmZ.js";import"./TableOfContent-QYKXWyPB.js";import"./index-BPDq8Cwl.js";import"./index-BKjvzOpn.js";import"./index-D8h8jAY6.js";import"./index-DYp5aNvA.js";import"./index-oQYl8gvD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D_r_w5Dj.js";import"./addCustomCSSWithScoping-CRaSmViC.js";import"./settings-3bL7AxSj.js";import"./index-CfxXWdHC.js";import"./index-DD1WbCut.js";import"./ListItemStandard-BJ7R2iOM.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
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
      <Popover
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
