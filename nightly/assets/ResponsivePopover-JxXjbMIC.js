import{j as o}from"./iframe-CK4LOCvj.js";import{useMDXComponents as s}from"./index-BqLtYoST.js";import{M as i,C as m}from"./blocks-ZjQWLnry.js";import"./Tag-BHHtXuEO.js";import"./index-BFAmBcJW.js";import{C as c}from"./ControlsWithNote-CQds9_FJ.js";import{D as a}from"./DocsHeader--6JUETmA.js";import{F as d}from"./CommandsAndQueries-BwelsOM0.js";import{C as r,D as t}from"./ResponsivePopover.stories-BDJ_KtWs.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DVinbumE.js";import"./sys-enter-2-CxZg2yn9.js";import"./alert-q3RCUipA.js";import"./index-BIYQNCb4.js";import"./index-GePrpfQg.js";import"./Link-C72gLrWy.js";import"./copy-Bt3wcz1w.js";import"./copy-BE3AKkMg.js";import"./GitHub-Mark-mWU7RfFo.js";import"./TableOfContent-CLxJfvBu.js";import"./index-CW1io29o.js";import"./index-C1w0eQlR.js";import"./index-BUxn-N40.js";import"./index-BKUd1pYK.js";import"./index-DPjO4Ph3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6YKOrWJ.js";import"./addCustomCSSWithScoping-CyChXc_w.js";import"./index-iZ4-PPSv.js";import"./index-C-2t_3GF.js";import"./ListItemStandard-LFJPBSzx.js";import"./settings-ayEvMgd1.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
