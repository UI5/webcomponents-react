import{j as o}from"./iframe-mz-DPMfO.js";import{useMDXComponents as s}from"./index-BQe-Y6f4.js";import{M as i,C as m}from"./blocks-CqHnwxUT.js";import"./Tag-mNyMFg7D.js";import"./index-wUrz4SBY.js";import{C as c}from"./ControlsWithNote-C6fhLtSi.js";import{D as a}from"./DocsHeader-Cu3c3bks.js";import{F as d}from"./CommandsAndQueries-CNdgb_xD.js";import{C as r,D as t}from"./ResponsivePopover.stories-BhZf5ZVL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DMiSc-jE.js";import"./sys-enter-2-Ll_1TI3l.js";import"./alert-CKymAgR2.js";import"./index--R_eUibk.js";import"./index-BPrj4A7u.js";import"./Link-BKhYH1SV.js";import"./copy-C-F6vPMT.js";import"./copy-40awRikg.js";import"./GitHub-Mark-DLjJ43nZ.js";import"./TableOfContent-BpsnHKEY.js";import"./index-Da-CbngW.js";import"./index-D9y5V_y0.js";import"./index-3wg9O5k7.js";import"./index-B9dZeu2z.js";import"./index-VFO9WUy1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-idDvu4gP.js";import"./addCustomCSSWithScoping-DOUHBih7.js";import"./index-DIJKpGCJ.js";import"./index-DiIoiFSd.js";import"./ListItemStandard-D8bDYcBG.js";import"./settings-CsivxwAE.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
