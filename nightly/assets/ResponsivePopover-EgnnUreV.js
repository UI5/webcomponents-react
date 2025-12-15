import{j as o}from"./iframe-B1ai2N1H.js";import{useMDXComponents as s}from"./index-QfN2DAp7.js";import{M as i,C as m}from"./blocks-B9fqlxEZ.js";import"./Tag-EPgIaOhk.js";import"./index-BtwVlylG.js";import{C as c}from"./ControlsWithNote-l4CFIpst.js";import{D as a}from"./DocsHeader-v6j4i6Qs.js";import{F as d}from"./CommandsAndQueries-DatNYL2t.js";import{C as r,D as t}from"./ResponsivePopover.stories-BoOb8pNR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-qjJpsO9c.js";import"./sys-enter-2-DLuIUMMQ.js";import"./alert-DxSQeXz_.js";import"./index-BZxParGj.js";import"./index-B8JztijY.js";import"./Link-DxXALuG4.js";import"./copy-DK9bNb8P.js";import"./copy-BJY5YA9D.js";import"./GitHub-Mark-BccOfZ-s.js";import"./TableOfContent-BuogqNJV.js";import"./index-DIMi93Lv.js";import"./index-BqK1QrYY.js";import"./index-BD5BVNKc.js";import"./index-Dq21p-7K.js";import"./index-BL80uiBy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3b7w9-j.js";import"./addCustomCSSWithScoping-BigzftYf.js";import"./index-sS2AOrHh.js";import"./index-CyY2pIYt.js";import"./ListItemStandard-1Y3dmb5L.js";import"./settings-CsC-4hiH.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
