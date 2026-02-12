import{j as o}from"./iframe-9L5DfdAL.js";import{useMDXComponents as s}from"./index-BFOQlGJl.js";import{M as i,C as m}from"./blocks-BhviKO8q.js";import"./Tag-Bc-yWu1Y.js";import"./index-BfSNMryQ.js";import{C as c}from"./ControlsWithNote-vZ9K-DEl.js";import{D as a}from"./DocsHeader-D8dn-bQp.js";import{F as d}from"./CommandsAndQueries-BK-K5RhD.js";import{C as r,D as t}from"./Popover.stories-CwR76zJ3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-E0dtjqMz.js";import"./sys-enter-2-CWAnp9j1.js";import"./alert-krPLRZgR.js";import"./index-BKv2oNTW.js";import"./index-Dt7xhFDV.js";import"./Link-o-RCe_HP.js";import"./copy-DoGT9NMx.js";import"./copy-B4o5kCyp.js";import"./GitHub-Mark-JaHxV2sh.js";import"./TableOfContent-CROg96VJ.js";import"./index-C4W78R8l.js";import"./index-DCrnunZ9.js";import"./index-CCxjFqbl.js";import"./index-CFjv4LxR.js";import"./index-DNulmfCG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-d02CNbEj.js";import"./addCustomCSSWithScoping-BavaT7N2.js";import"./settings-DxBIqKBm.js";import"./index-DNleTpkO.js";import"./index-8UpyXoAN.js";import"./ListItemStandard-G_TCf98J.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
