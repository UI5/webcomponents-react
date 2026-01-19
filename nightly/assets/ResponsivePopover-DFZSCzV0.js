import{j as o}from"./iframe-CqyRxNKY.js";import{useMDXComponents as s}from"./index-CXuCYMlQ.js";import{M as i,C as m}from"./blocks-05z5mbmD.js";import"./Tag-DuSXABBC.js";import"./index-C2IzZWSs.js";import{C as c}from"./ControlsWithNote-QwD0LoME.js";import{D as a}from"./DocsHeader-B5BV8WRG.js";import{F as d}from"./CommandsAndQueries-DLVKRV5D.js";import{C as r,D as t}from"./ResponsivePopover.stories-BRCDCmod.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Ezgcqzkg.js";import"./sys-enter-2-5MMglnM6.js";import"./alert-BAouMQ7q.js";import"./index-BymRtllO.js";import"./index-4M_RVJJe.js";import"./Link-CXMFuXBh.js";import"./copy-D8nw0rNl.js";import"./copy-B4Tt60gX.js";import"./GitHub-Mark-DqVdFPyg.js";import"./TableOfContent-D9XYfqlc.js";import"./index-H9dUlo5Q.js";import"./index-BseYaHXw.js";import"./index-DzGBN3np.js";import"./index-CcSvXznG.js";import"./index-CwxFUtHh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bdq0yBwh.js";import"./addCustomCSSWithScoping-Bi_7urmM.js";import"./index-DLnOQir-.js";import"./index-C-6D1Wpo.js";import"./ListItemStandard-BDPTJ4VI.js";import"./settings-DIlRpxvA.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
